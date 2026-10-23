import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma/client";
import type { CreateActivityInput } from "./schema";

// Module activities : Activity, Presence, CeremonySession, PilgrimageLogistics — WF-09, WF-10, WF-14, WF-15, WF-25, WF-28
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export type ActivityScope = { scopeType: "DIOCESE" | "DOYENNE" | "PAROISSE" | "SECTION" | "EQUIPE"; scopeIds: string[] };

export async function resolveVisibleScopes(scopes: Array<{ scopeType: string; scopeId: string | null }>) {
  const targets: ActivityScope[] = [];
  for (const scope of scopes) {
    if (!scope.scopeId || !["DIOCESE", "DOYENNE", "PAROISSE", "SECTION", "EQUIPE"].includes(scope.scopeType)) continue;
    if (scope.scopeType === "DIOCESE") {
      const dioceses = await prisma.diocese.findUnique({ where: { id: scope.scopeId }, select: { id: true, doyennes: { select: { id: true, paroisses: { select: { id: true, sections: { select: { id: true, teams: { select: { id: true } } } } } } } } } });
      if (!dioceses) continue;
      targets.push({ scopeType: "DIOCESE", scopeIds: [dioceses.id] });
      targets.push({ scopeType: "DOYENNE", scopeIds: dioceses.doyennes.map((item) => item.id) });
      targets.push({ scopeType: "PAROISSE", scopeIds: dioceses.doyennes.flatMap((item) => item.paroisses.map((p) => p.id)) });
      targets.push({ scopeType: "SECTION", scopeIds: dioceses.doyennes.flatMap((item) => item.paroisses.flatMap((p) => p.sections.map((s) => s.id))) });
      targets.push({ scopeType: "EQUIPE", scopeIds: dioceses.doyennes.flatMap((item) => item.paroisses.flatMap((p) => p.sections.flatMap((s) => s.teams.map((t) => t.id)))) });
    } else if (scope.scopeType === "DOYENNE") {
      const doyenne = await prisma.doyenne.findUnique({ where: { id: scope.scopeId }, select: { id: true, paroisses: { select: { id: true, sections: { select: { id: true, teams: { select: { id: true } } } } } } } });
      if (!doyenne) continue;
      targets.push({ scopeType: "DOYENNE", scopeIds: [doyenne.id] });
      targets.push({ scopeType: "PAROISSE", scopeIds: doyenne.paroisses.map((item) => item.id) });
      targets.push({ scopeType: "SECTION", scopeIds: doyenne.paroisses.flatMap((p) => p.sections.map((s) => s.id)) });
      targets.push({ scopeType: "EQUIPE", scopeIds: doyenne.paroisses.flatMap((p) => p.sections.flatMap((s) => s.teams.map((t) => t.id))) });
    } else if (scope.scopeType === "PAROISSE") {
      const paroisse = await prisma.paroisse.findUnique({ where: { id: scope.scopeId }, select: { id: true, sections: { select: { id: true, teams: { select: { id: true } } } } } });
      if (!paroisse) continue;
      targets.push({ scopeType: "PAROISSE", scopeIds: [paroisse.id] });
      targets.push({ scopeType: "SECTION", scopeIds: paroisse.sections.map((item) => item.id) });
      targets.push({ scopeType: "EQUIPE", scopeIds: paroisse.sections.flatMap((s) => s.teams.map((t) => t.id)) });
    } else if (scope.scopeType === "SECTION") {
      const section = await prisma.section.findUnique({ where: { id: scope.scopeId }, select: { id: true, teams: { select: { id: true } } } });
      if (!section) continue;
      targets.push({ scopeType: "SECTION", scopeIds: [section.id] });
      targets.push({ scopeType: "EQUIPE", scopeIds: section.teams.map((item) => item.id) });
    } else {
      targets.push({ scopeType: "EQUIPE", scopeIds: [scope.scopeId] });
    }
  }
  return targets.filter((item) => item.scopeIds.length > 0);
}

function whereForScopes(scopes: ActivityScope[]) {
  return scopes.map((scope) => ({ scopeType: scope.scopeType, scopeId: { in: scope.scopeIds } }));
}

const activitySelect = {
  id: true, name: true, startDate: true, endDate: true, location: true, scopeType: true, scopeId: true, status: true,
  activityType: { select: { id: true, name: true } },
  responsible: { select: { id: true, firstName: true, lastName: true } },
  _count: { select: { presences: true } },
} as const;

export function listActivities(scopes: ActivityScope[], skip: number, take: number) {
  const where = { OR: whereForScopes(scopes) };
  return Promise.all([
    prisma.activity.findMany({ where, select: activitySelect, orderBy: { startDate: "desc" }, skip, take }),
    prisma.activity.count({ where }),
  ]);
}

export function findActivity(id: string) {
  return prisma.activity.findUnique({ where: { id }, select: { ...activitySelect, scopeType: true, scopeId: true } });
}

export async function scopeExists(scopeType: CreateActivityInput["scopeType"], scopeId: string) {
  if (scopeType === "DIOCESE") return Boolean(await prisma.diocese.findUnique({ where: { id: scopeId }, select: { id: true } }));
  if (scopeType === "DOYENNE") return Boolean(await prisma.doyenne.findUnique({ where: { id: scopeId }, select: { id: true } }));
  if (scopeType === "PAROISSE") return Boolean(await prisma.paroisse.findUnique({ where: { id: scopeId }, select: { id: true } }));
  if (scopeType === "SECTION") return Boolean(await prisma.section.findUnique({ where: { id: scopeId }, select: { id: true } }));
  return Boolean(await prisma.team.findUnique({ where: { id: scopeId }, select: { id: true } }));
}

export function activityTypeExists(id: string) {
  return prisma.activityType.findUnique({ where: { id }, select: { id: true } });
}

export function createActivity(input: CreateActivityInput, responsibleId: string, actingAccountId: string) {
  return prisma.$transaction(async (tx) => {
    const activity = await tx.activity.create({ data: { ...input, responsibleId }, select: activitySelect });
    await tx.auditLog.create({
      data: {
        accountId: actingAccountId,
        action: "CREATE:ACTIVITE",
        entityType: "ACTIVITE",
        entityId: activity.id,
        after: { name: activity.name, scopeType: activity.scopeType, scopeId: activity.scopeId, startDate: activity.startDate.toISOString() },
      },
    });
    return activity;
  });
}

export function findActiveMembership(personId: string) {
  return prisma.membership.findFirst({
    where: { personId, isActive: true, endDate: null },
    select: { id: true, paroisseId: true, sectionId: true, teamId: true, paroisse: { select: { doyenneId: true } } },
    orderBy: { startDate: "desc" },
  });
}

export function listPresences(activityId: string) {
  return prisma.presence.findMany({ where: { activityId }, orderBy: { person: { lastName: "asc" } }, select: { id: true, personId: true, present: true, justification: true, source: true, createdAt: true, person: { select: { firstName: true, lastName: true } } } });
}

export async function listActivityRoster(activity: { id: string; scopeType: string; scopeId: string }) {
  const membershipScope: Prisma.MembershipWhereInput = activity.scopeType === "DIOCESE"
    ? { paroisse: { doyenne: { dioceseId: activity.scopeId } } }
    : activity.scopeType === "DOYENNE"
      ? { paroisse: { doyenneId: activity.scopeId } }
      : activity.scopeType === "PAROISSE"
        ? { paroisseId: activity.scopeId }
        : activity.scopeType === "SECTION"
          ? { sectionId: activity.scopeId }
          : { teamId: activity.scopeId };

  const [memberships, presences] = await Promise.all([
    prisma.membership.findMany({
      where: { ...membershipScope, isActive: true, endDate: null, person: { status: "ACTIVE" } },
      orderBy: [{ person: { lastName: "asc" } }, { person: { firstName: "asc" } }],
      select: {
        personId: true,
        person: { select: {
          firstName: true,
          lastName: true,
          gradeHistory: { where: { endedAt: null }, orderBy: { obtainedAt: "desc" }, take: 1, select: { grade: { select: { name: true } } } },
        } },
        section: { select: { name: true } },
        team: { select: { name: true } },
      },
    }),
    prisma.presence.findMany({
      where: { activityId: activity.id },
      select: { personId: true, present: true, source: true, createdAt: true },
    }),
  ]);

  const attendance = new Map(presences.map((presence) => [presence.personId, presence]));
  const seen = new Set<string>();
  return memberships.flatMap((membership) => {
    if (seen.has(membership.personId)) return [];
    seen.add(membership.personId);
    const presence = attendance.get(membership.personId);
    return [{
      personId: membership.personId,
      firstName: membership.person.firstName,
      lastName: membership.person.lastName,
      grade: membership.person.gradeHistory[0]?.grade.name ?? null,
      section: membership.section.name,
      team: membership.team?.name ?? null,
      present: presence?.present ?? null,
      recordedAt: presence?.createdAt ?? null,
      source: presence?.source ?? null,
    }];
  });
}

export function upsertPresence(activityId: string, personId: string, recordedById: string, present: boolean, justification?: string | null) {
  return prisma.$transaction(async (tx) => {
    const key = { activityId_personId: { activityId, personId } };
    const before = await tx.presence.findUnique({ where: key, select: { present: true, justification: true } });
    const after = await tx.presence.upsert({
      where: key,
      create: { activityId, personId, recordedById, present, justification, source: "MANUAL" },
      update: { recordedById, present, justification, source: "MANUAL" },
      select: { id: true, activityId: true, personId: true, present: true, justification: true, source: true, createdAt: true },
    });
    await tx.auditLog.create({
      data: {
        accountId: recordedById,
        action: before ? "UPDATE:PRESENCE" : "CREATE:PRESENCE",
        entityType: "PRESENCE",
        entityId: after.id,
        before: before ?? undefined,
        after: { activityId, personId, present: after.present, source: after.source },
      },
    });
    return after;
  });
}
