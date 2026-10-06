import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma/client";

// Module notifications : Notification, Broadcast — WF-16, WF-17, WF-29
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export function listForAccount(accountId: string, skip: number, take: number) {
  const where = { accountId } satisfies Prisma.NotificationWhereInput;
  return Promise.all([
    prisma.notification.findMany({ where, orderBy: { createdAt: "desc" }, skip, take, select: { id: true, type: true, message: true, targetLink: true, read: true, channel: true, createdAt: true } }),
    prisma.notification.count({ where }),
  ]);
}

export function markAsRead(accountId: string, notificationId: string) {
  return prisma.notification.updateMany({ where: { id: notificationId, accountId }, data: { read: true } });
}
