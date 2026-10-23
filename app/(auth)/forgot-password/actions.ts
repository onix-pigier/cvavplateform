"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export type ForgotPasswordState = { success?: boolean; error?: string; fieldError?: string };

const schema = z.string().trim().min(4, "Saisissez votre numéro de membre.").max(40, "Le numéro est trop long.").regex(/^[\p{L}\p{N}-]+$/u, "Utilisez uniquement lettres, chiffres et tirets.");

export async function requestAccessReset(_previous: ForgotPasswordState, formData: FormData): Promise<ForgotPasswordState> {
  // Honeypot silencieux pour les robots.
  if (String(formData.get("website") ?? "")) return { success: true };
  const parsed = schema.safeParse(formData.get("username"));
  if (!parsed.success) return { fieldError: parsed.error.issues[0]?.message ?? "Vérifiez le numéro saisi." };

  const identifier = parsed.data.toLocaleUpperCase("fr-FR");
  const forwarded = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!consumeRateLimit(`access-reset:${forwarded}:${identifier}`, 3, 60 * 60 * 1000).allowed) {
    return { error: "Trop de demandes pour ce numéro. Réessayez plus tard ou contactez votre responsable CV-AV." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const request = await tx.accountAccessRequest.create({ data: { submittedIdentifier: identifier } });
      const admins = await tx.account.findMany({
        where: { status: "ACTIVE", person: { status: "ACTIVE" }, userRoles: { some: { endDate: null, role: { code: "SUPER_ADMIN" } } } },
        select: { id: true },
      });
      if (admins.length) {
        await tx.notification.createMany({
          data: admins.map(({ id }) => ({
            accountId: id,
            type: "ACCOUNT_ACCESS_REQUEST",
            message: `Une demande d’aide à la réinitialisation attend une vérification (${identifier}).`,
            targetLink: `/admin/access-requests#${request.id}`,
          })),
        });
      }
    });
    logger.info("account_access_request_received");
    return { success: true };
  } catch (error) {
    logger.error("account_access_request_failed", { error });
    return { error: "Le service est momentanément indisponible. Contactez le responsable CV-AV de votre paroisse." };
  }
}
