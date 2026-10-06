import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import * as repository from "./repository";

// Module identity : Person, Account, UserRole, Mandat, Grade — WF-01 à WF-08, WF-22
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

/** Profil privé : l'identité vient exclusivement de la session courante. */
export async function getMyPrivateProfile() {
  const session = await getSession();
  if (!session) return null;
  return repository.findPrivateProfile(session.accountId);
}
