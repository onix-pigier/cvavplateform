import { z } from "zod";
import { jsonData, jsonError } from "@/lib/http";
import { logger } from "@/lib/logger";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";

const newsletterSchema = z.object({
  email: z.string().trim().email().max(160),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const rate = consumeRateLimit(`public-newsletter:${ip}`, 3, 60 * 60 * 1000);
  if (!rate.allowed) return jsonError("RATE_LIMITED", "Trop de demandes. Réessayez plus tard.", 429, request);

  let input: z.infer<typeof newsletterSchema>;
  try {
    input = newsletterSchema.parse(await request.json());
  } catch {
    return jsonError("VALIDATION_ERROR", "Saisissez une adresse e-mail valide et acceptez la réception des nouvelles.", 422, request);
  }

  if (input.website) return jsonData({ accepted: true });

  try {
    await prisma.newsletterSubscription.upsert({
      where: { email: input.email },
      create: { email: input.email, status: "ACTIVE" },
      update: { status: "ACTIVE", consentedAt: new Date() },
    });
    logger.info("newsletter_subscription_received");
    return jsonData({ accepted: true }, undefined, { status: 201 });
  } catch (error) {
    logger.error("newsletter_subscription_failed", { error });
    return jsonError("NEWSLETTER_UNAVAILABLE", "L’inscription est momentanément indisponible.", 503, request);
  }
}
