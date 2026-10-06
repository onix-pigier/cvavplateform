import { z } from "zod";
import { jsonData, jsonError } from "@/lib/http";
import { logger } from "@/lib/logger";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(30).optional(),
  subject: z.enum(["JOIN", "ACTIVITY", "PARTNERSHIP", "OTHER"]),
  message: z.string().trim().min(10).max(2_000),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
});

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: Request) {
  const rate = consumeRateLimit(`public-contact:${clientKey(request)}`, 5, 15 * 60 * 1000);
  if (!rate.allowed) return jsonError("RATE_LIMITED", "Trop de messages. Réessayez dans quelques minutes.", 429, request);

  let input: z.infer<typeof contactSchema>;
  try {
    input = contactSchema.parse(await request.json());
  } catch {
    return jsonError("VALIDATION_ERROR", "Vérifiez les champs du formulaire.", 422, request);
  }

  // Honeypot silencieux : un robot rempli ce champ, mais l’interface humaine ne l’affiche pas.
  if (input.website) return jsonData({ accepted: true });

  try {
    await prisma.publicContactRequest.create({
      data: {
        fullName: input.fullName,
        email: input.email,
        phone: input.phone || null,
        subject: input.subject,
        message: input.message,
        consent: input.consent,
      },
    });
    logger.info("public_contact_received", { subject: input.subject });
    return jsonData({ accepted: true }, undefined, { status: 201 });
  } catch (error) {
    logger.error("public_contact_failed", { error });
    return jsonError("CONTACT_UNAVAILABLE", "Le formulaire est momentanément indisponible.", 503, request);
  }
}
