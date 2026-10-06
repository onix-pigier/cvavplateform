import { z } from "zod";

// Module audit : AuditLog, Backup — lecture seule, filtrée par scope
// Schémas Zod à détailler au fil de l implémentation des endpoints
// (voir app/api/audit/route.ts et TDD §5).

export const placeholderSchema = z.object({});
