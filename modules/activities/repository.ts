import { prisma } from "@/lib/prisma";
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

export function createActivity(input: CreateActivityInput, responsibleId: string) {
  return prisma.activity.create({ data: { ...input, responsibleId }, select: activitySelect });
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

export function upsertPresence(activityId: string, personId: string, recordedById: string, present: boolean, justification?: string | null) {
  return prisma.presence.upsert({
    where: { activityId_personId: { activityId, personId } },
    create: { activityId, personId, recordedById, present, justification, source: "MANUAL" },
    update: { recordedById, present, justification, source: "MANUAL" },
    select: { id: true, activityId: true, personId: true, present: true, justification: true, source: true, createdAt: true },
  });
}
