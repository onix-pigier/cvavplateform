import { z } from "zod";

// Module finance : FeeGrid, Contribution, Payment, FinancialTransaction — WF-11, WF-12, WF-30
// Schémas Zod à détailler au fil de l implémentation des endpoints
// (voir app/api/finance/route.ts et TDD §5).

export const contributionQuerySchema = z.object({
  pastoralYear: z.string().trim().regex(/^\d{4}(?:-\d{4})?$/).optional(),
});
