import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { contributionQuerySchema } from "./schema";
import * as repository from "./repository";

// Module finance : FeeGrid, Contribution, Payment, FinancialTransaction — WF-11, WF-12, WF-30
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

export class FinanceForbiddenError extends Error {}
export class FinanceValidationError extends Error {}

export async function listMyContributions(raw: unknown) {
  const session = await getSession();
  if (!session) throw new FinanceForbiddenError("Connexion requise.");
  const parsed = contributionQuerySchema.safeParse(raw);
  if (!parsed.success) throw new FinanceValidationError(parsed.error.message);
  const check = await authorize({ resourceCode: "COTISATION", actionCode: "READ", targetScopeType: "SELF", targetScopeId: session.personId });
  if (!check.allowed) throw new FinanceForbiddenError(check.reason);
  return repository.listContributions(session.personId, parsed.data.pastoralYear);
}
