import { z } from "zod";

const scopeTypeSchema = z.enum(["DIOCESE", "DOYENNE", "PAROISSE", "SECTION", "EQUIPE"]);

export const createActivitySchema = z.object({
  name: z.string().trim().min(2).max(160),
  activityTypeId: z.string().uuid(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string().trim().max(240).optional().nullable(),
  scopeType: scopeTypeSchema,
  scopeId: z.string().min(1).max(120),
}).superRefine((value, ctx) => {
  if (value.endDate < value.startDate) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["endDate"], message: "La fin doit être postérieure au début." });
  }
});

export const recordPresenceSchema = z.object({
  personId: z.string().uuid(),
  present: z.boolean(),
  justification: z.string().trim().max(500).optional().nullable(),
});

export type CreateActivityInput = z.infer<typeof createActivitySchema>;
export type RecordPresenceInput = z.infer<typeof recordPresenceSchema>;
