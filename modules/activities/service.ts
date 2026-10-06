import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { createActivitySchema, recordPresenceSchema } from "./schema";
import * as repository from "./repository";

// Module activities : Activity, Presence, CeremonySession, PilgrimageLogistics — WF-09, WF-10, WF-14, WF-15, WF-25, WF-28
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

export class ActivitiesValidationError extends Error {}
export class ActivitiesForbiddenError extends Error {}

export async function listMyActivities(page: number, pageSize: number) {
  const session = await getSession();
  if (!session) throw new ActivitiesForbiddenError("Connexion requise.");
  const membership = await repository.findActiveMembership(session.personId);
  const personalScopes = membership
    ? [
        { scopeType: "DOYENNE", scopeId: membership.paroisse.doyenneId },
        { scopeType: "PAROISSE", scopeId: membership.paroisseId },
        { scopeType: "SECTION", scopeId: membership.sectionId },
        ...(membership.teamId ? [{ scopeType: "EQUIPE", scopeId: membership.teamId }] : []),
      ]
    : [];
  const scopes = await repository.resolveVisibleScopes([...session.roles, ...session.mandates.map((item) => ({ scopeType: item.scopeType, scopeId: item.scopeId })), ...personalScopes]);
  const [items, total] = await repository.listActivities(scopes, (page - 1) * pageSize, pageSize);
  return { items, total };
}

export async function createActivity(raw: unknown) {
  const session = await getSession();
  if (!session) throw new ActivitiesForbiddenError("Connexion requise.");
  const parsed = createActivitySchema.safeParse(raw);
  if (!parsed.success) throw new ActivitiesValidationError(parsed.error.message);
  if (!(await repository.activityTypeExists(parsed.data.activityTypeId))) {
    throw new ActivitiesValidationError("Le type d'activité est introuvable.");
  }
  if (!(await repository.scopeExists(parsed.data.scopeType, parsed.data.scopeId))) {
    throw new ActivitiesValidationError("Le périmètre de l'activité est introuvable.");
  }
  const check = await authorize({ resourceCode: "ACTIVITE", actionCode: "CREATE", targetScopeType: parsed.data.scopeType, targetScopeId: parsed.data.scopeId });
  if (!check.allowed) throw new ActivitiesForbiddenError(check.reason);
  return repository.createActivity(parsed.data, session.personId);
}

export async function listActivityPresences(id: string) {
  const session = await getSession();
  if (!session) throw new ActivitiesForbiddenError("Connexion requise.");
  const activity = await repository.findActivity(id);
  if (!activity) throw new ActivitiesValidationError("Activité introuvable.");
  const check = await authorize({ resourceCode: "ACTIVITE", actionCode: "READ", targetScopeType: activity.scopeType, targetScopeId: activity.scopeId });
  if (!check.allowed) throw new ActivitiesForbiddenError(check.reason);
  return repository.listPresences(id);
}

export async function recordPresence(id: string, raw: unknown) {
  const session = await getSession();
  if (!session) throw new ActivitiesForbiddenError("Connexion requise.");
  const parsed = recordPresenceSchema.safeParse(raw);
  if (!parsed.success) throw new ActivitiesValidationError(parsed.error.message);
  const activity = await repository.findActivity(id);
  if (!activity) throw new ActivitiesValidationError("Activité introuvable.");
  const check = await authorize({ resourceCode: "PRESENCE", actionCode: "CREATE", targetScopeType: activity.scopeType, targetScopeId: activity.scopeId });
  if (!check.allowed) throw new ActivitiesForbiddenError(check.reason);
  const membership = await repository.findActiveMembership(parsed.data.personId);
  if (!membership) throw new ActivitiesValidationError("Le militant n'a pas de rattachement actif.");
  const visible = await repository.resolveVisibleScopes([{ scopeType: activity.scopeType, scopeId: activity.scopeId }]);
  const targetIds = new Set(visible.flatMap((scope) => scope.scopeIds));
  const memberIds = [membership.paroisseId, membership.sectionId, membership.teamId, membership.paroisse.doyenneId].filter((value): value is string => Boolean(value));
  if (!memberIds.some((memberId) => targetIds.has(memberId))) throw new ActivitiesForbiddenError("Le militant n'appartient pas au périmètre de l'activité.");
  return repository.upsertPresence(id, parsed.data.personId, session.accountId, parsed.data.present, parsed.data.justification);
}
