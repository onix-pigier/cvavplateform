import { authorize } from "@/lib/rbac/authorize";
import { createParoisseSchema, type CreateParoisseInput } from "./schema";
import * as repository from "./repository";

export class ForbiddenError extends Error {}
export class ValidationError extends Error {}

export async function createParoisse(raw: unknown) {
  const check = await authorize({
    resourceCode: "ORGANISATION",
    actionCode: "CREATE",
    targetScopeType: "DIOCESE",
    targetScopeId: "diocese-daloa",
  });
  if (!check.allowed) throw new ForbiddenError(check.reason);

  const parsed = createParoisseSchema.safeParse(raw);
  if (!parsed.success) throw new ValidationError(parsed.error.message);

  return repository.createParoisse(parsed.data satisfies CreateParoisseInput);
}

export async function listParoisses(doyenneId?: string) {
  return repository.listParoisses(doyenneId);
}
