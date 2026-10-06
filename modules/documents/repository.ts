import { prisma } from "@/lib/prisma";

// Module documents : DocumentRecord, LibraryDocument
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;
