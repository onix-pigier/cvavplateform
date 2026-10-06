import { authorize } from "@/lib/rbac/authorize";
import * as repository from "./repository";

// Module administration : Référentiels (Grade, ActivityType, RequestType, Fonction, Role, Ville) — réservé SUPER_ADMIN
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

export class AdministrationForbiddenError extends Error {}

export async function listReferences() {
  const check = await authorize({ resourceCode: "ORGANISATION", actionCode: "READ", targetScopeType: "DIOCESE", targetScopeId: "diocese-daloa" });
  if (!check.allowed) throw new AdministrationForbiddenError(check.reason);
  const [grades, activityTypes, requestTypes, fonctions, villes] = await repository.listReferenceData();
  return { grades, activityTypes, requestTypes, fonctions, villes };
}
