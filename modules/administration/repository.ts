import { prisma } from "@/lib/prisma";

// Module administration : Référentiels (Grade, ActivityType, RequestType, Fonction, Role, Ville) — réservé SUPER_ADMIN
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export function listReferenceData() {
  return Promise.all([
    prisma.grade.findMany({ orderBy: { order: "asc" }, select: { id: true, code: true, name: true, category: true, order: true, conditions: true } }),
    prisma.activityType.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, requiresValidation: true } }),
    prisma.requestType.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, requiredValidationLevel: true, generatesCertificate: true } }),
    prisma.fonction.findMany({ orderBy: { label: "asc" }, select: { id: true, code: true, label: true, votingRight: true } }),
    prisma.ville.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, region: true } }),
  ]);
}
