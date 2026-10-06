import { z } from "zod";

export const createCertificateRequestSchema = z.object({
  requestTypeId: z.string().min(1),
  requesterId: z.string().min(1),
}).strict();

export type CreateCertificateRequestInput = z.infer<typeof createCertificateRequestSchema>;

export const rejectCertificateRequestSchema = z.object({
  reason: z.string().trim().min(3).max(1000),
}).strict();
