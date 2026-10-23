import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { resolveVisibleScopes } from "@/modules/activities/repository";
import { ScopedMemberDashboard } from "@/components/dashboard/ScopedMemberDashboard";

export const dynamic = "force-dynamic";

export default async function MilitantDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!session.roles.some((role) => role.roleCode === "MILITANT")) redirect("/espace");

  const [person, memberships] = await Promise.all([
    prisma.person.findUnique({ where: { id: session.personId }, select: { firstName: true, lastName: true, account: { select: { username: true } } } }),
    prisma.membership.findMany({
      where: { personId: session.personId, isActive: true, endDate: null },
      include: { paroisse: { select: { id: true, name: true, doyenneId: true, doyenne: { select: { name: true, dioceseId: true } } } }, section: { select: { id: true, name: true } }, team: { select: { id: true, name: true } } },
      orderBy: { startDate: "desc" },
    }),
  ]);
  if (!person) redirect("/login");

  const personalScopes = memberships.flatMap((membership) => [
    { scopeType: "DIOCESE", scopeId: membership.paroisse.doyenne.dioceseId },
    { scopeType: "DOYENNE", scopeId: membership.paroisse.doyenneId },
    { scopeType: "PAROISSE", scopeId: membership.paroisseId },
    { scopeType: "SECTION", scopeId: membership.sectionId },
    ...(membership.teamId ? [{ scopeType: "EQUIPE", scopeId: membership.teamId }] : []),
  ]);
  // L'espace militant reste borné à ses rattachements actifs, même si le
  // même compte détient également un rôle d'administration.
  const visibleScopes = await resolveVisibleScopes(personalScopes);
  const now = new Date();
  const attendanceScopeWhere = memberships[0] && visibleScopes.length ? {
    personId: session.personId,
    activity: { startDate: { gte: memberships[0].startDate, lte: now }, OR: visibleScopes.map((scope) => ({ scopeType: scope.scopeType, scopeId: { in: scope.scopeIds } })) },
  } : { personId: session.personId, activityId: "__no_activity__" };
  const [currentGrade, presentCount, attendanceTotal, recentPresences, upcomingActivities, contributions, certificateRequests] = await Promise.all([
    prisma.gradeHistory.findFirst({ where: { personId: session.personId, endedAt: null }, include: { grade: { select: { name: true } } }, orderBy: { obtainedAt: "desc" } }),
    prisma.presence.count({ where: { ...attendanceScopeWhere, present: true } }),
    prisma.presence.count({ where: attendanceScopeWhere }),
    prisma.presence.findMany({ where: { personId: session.personId }, include: { activity: { select: { name: true, startDate: true } } }, orderBy: { activity: { startDate: "desc" } }, take: 5 }),
    visibleScopes.length ? prisma.activity.findMany({
      where: { AND: [
        { OR: visibleScopes.map((scope) => ({ scopeType: scope.scopeType, scopeId: { in: scope.scopeIds } })) },
        { OR: [{ status: "PLANNED", startDate: { gte: now } }, { status: "ONGOING", startDate: { lte: now }, endDate: { gte: now } }] },
      ] },
      include: { activityType: { select: { name: true } } }, orderBy: { startDate: "asc" }, take: 4,
    }) : Promise.resolve([]),
    prisma.contribution.findMany({ where: { personId: session.personId }, orderBy: [{ pastoralYear: "desc" }, { updatedAt: "desc" }], take: 5 }),
    prisma.certificateRequest.findMany({
      where: { requesterId: session.personId }, include: { requestType: { select: { name: true } }, certificate: { select: { uniqueNumber: true, status: true } } }, orderBy: { createdAt: "desc" }, take: 5,
    }),
  ]);

  return <ScopedMemberDashboard
    person={{ firstName: person.firstName, lastName: person.lastName, username: person.account?.username ?? session.username }}
    memberships={memberships.map((membership) => ({ id: membership.id, parish: membership.paroisse.name, deanery: membership.paroisse.doyenne.name, section: membership.section.name, team: membership.team?.name ?? null, pastoralYear: membership.pastoralYear }))}
    currentGrade={currentGrade?.grade.name ?? null}
    presentCount={presentCount}
    attendanceTotal={attendanceTotal}
    pastoralYear={memberships[0]?.pastoralYear ?? null}
    recentPresences={recentPresences.map((presence) => ({ id: presence.id, date: presence.activity.startDate, activity: presence.activity.name, present: presence.present }))}
    upcomingActivities={upcomingActivities.map((activity) => ({ id: activity.id, name: activity.name, startDate: activity.startDate, endDate: activity.endDate, location: activity.location, type: activity.activityType.name, status: activity.status }))}
    contributions={contributions.map((contribution) => ({ id: contribution.id, year: contribution.pastoralYear, code: contribution.gradeOrQualificationCode, expected: contribution.expectedAmount.toNumber(), paid: contribution.paidAmount.toNumber(), status: contribution.status }))}
    certificateRequests={certificateRequests.map((request) => ({ id: request.id, type: request.requestType.name, status: request.status, createdAt: request.createdAt, number: request.certificate?.uniqueNumber ?? null, certificateStatus: request.certificate?.status ?? null }))}
  />;
}
