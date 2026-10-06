import { prisma } from "@/lib/prisma";

// Module audit : AuditLog, Backup — lecture seule, filtrée par scope
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;
