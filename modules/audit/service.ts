import { authorize } from "@/lib/rbac/authorize";

// Module audit : AuditLog, Backup — lecture seule, filtrée par scope
// Chaque fonction exportée ici doit commencer par authorize() avant toute
// opération, puis valider l entrée (schéma Zod), puis déléguer à repository.ts.
export const _authorizeRef = authorize;
