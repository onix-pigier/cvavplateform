import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { markNotificationSchema } from "./schema";
import * as repository from "./repository";

// Module notifications : Notification, Broadcast — WF-16, WF-17, WF-29
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;

export class NotificationValidationError extends Error {}
export class NotificationForbiddenError extends Error {}

export async function listMyNotifications(page: number, pageSize: number) {
  const session = await getSession();
  if (!session) throw new NotificationForbiddenError("Connexion requise.");
  const [items, total] = await repository.listForAccount(session.accountId, (page - 1) * pageSize, pageSize);
  return { items, total };
}

export async function markMyNotificationRead(raw: unknown) {
  const session = await getSession();
  if (!session) throw new NotificationForbiddenError("Connexion requise.");
  const parsed = markNotificationSchema.safeParse(raw);
  if (!parsed.success) throw new NotificationValidationError(parsed.error.message);
  const result = await repository.markAsRead(session.accountId, parsed.data.notificationId);
  if (result.count === 0) throw new NotificationValidationError("Notification introuvable.");
  return { marked: true };
}
