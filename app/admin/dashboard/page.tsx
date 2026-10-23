import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";
import { ScopedAdminDashboard } from "@/components/dashboard/ScopedAdminDashboard";
import { getDashboardAnalytics, getDashboardRecentAttendance, getDashboardUpcomingActivities, parsePeriod } from "@/lib/admin/portal-data";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string; period?: string; from?: string; to?: string }> }) {
  const session = await getSession();
  if (!session) return <main className="p-8"><p>Votre session n’est pas active.</p><Link href="/login">Se connecter</Link></main>;
  const query = await searchParams;
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) return <main className="mx-auto max-w-xl p-8"><h1 className="font-headline-lg text-headline-lg text-primary">Aucun espace responsable</h1><p className="mt-3 text-on-surface-variant">Ce compte ne possède pas de rôle de gestion actif.</p><Link href="/espace" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-on-primary">Choisir un espace</Link></main>;

  const parishFilter = { id: { in: context.parishIds } };
  const period = parsePeriod(new URLSearchParams(Object.entries(query).filter((entry): entry is [string, string] => typeof entry[1] === "string")));
  const [activeParishes, activeSections, doyennes, analytics, upcomingActivities, recentAttendance] = await Promise.all([
    context.canReadOrganisation && context.parishIds.length ? prisma.paroisse.count({ where: { ...parishFilter, isActive: true } }) : 0,
    context.canReadOrganisation && context.parishIds.length ? context.assignment.scopeType === "EQUIPE"
      ? prisma.section.count({ where: { isActive: true, teams: { some: { id: context.assignment.scopeId ?? "", isActive: true } } } })
      : context.assignment.scopeType === "SECTION"
        ? prisma.section.count({ where: { id: context.assignment.scopeId ?? "", isActive: true } })
        : prisma.section.count({ where: { isActive: true, paroisseId: { in: context.parishIds } } }) : 0,
    context.canReadOrganisation && context.parishIds.length ? prisma.doyenne.findMany({
      where: { isActive: true, paroisses: { some: { id: { in: context.parishIds } } } }, orderBy: { name: "asc" },
      include: { paroisses: { where: { ...parishFilter, isActive: true }, select: { id: true, name: true, confidence: true }, orderBy: { name: "asc" } } },
    }) : [],
    getDashboardAnalytics(context, period),
    getDashboardUpcomingActivities(context),
    context.assignment.roleCode === "CHEF" ? getDashboardRecentAttendance(context) : null,
  ]);

  return <ScopedAdminDashboard
    roleCode={context.assignment.roleCode} scopeId={context.assignment.scopeId} roleLabel={context.roleLabel}
    scopeName={scopeLabel(context.assignment.scopeType)} userName={context.userName}
    canCreateMilitants={context.canCreateMilitants} canCreatePerson={context.canCreatePerson} canReviewPreRegistrations={context.canReviewPreRegistrations}
    canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}
    canCreateActivity={context.canCreateActivity} period={period} analytics={analytics} upcomingActivities={upcomingActivities.map((activity) => ({ id: activity.id, name: activity.name, startDate: activity.startDate, endDate: activity.endDate, location: activity.location, status: activity.status, type: activity.activityType.name, attendanceRows: activity._count.presences }))}
    recentAttendance={recentAttendance ? { name: recentAttendance.name, date: recentAttendance.startDate, type: recentAttendance.activityType.name, present: recentAttendance.present, recorded: recentAttendance._count.presences } : null}
    stats={{ activeMembers: analytics?.activeMembers ?? 0, parishes: activeParishes, sections: activeSections, pendingApprovals: analytics?.pendingPreRegistrations ?? 0 }}
    doyennes={doyennes.map((item) => ({ id: item.id, name: item.name, aliasLabel: item.aliasLabel, parishes: item.paroisses }))}
  />;
}
