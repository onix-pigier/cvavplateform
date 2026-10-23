"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createSession, getPasswordChangeSession, hashPassword } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type ChangePasswordState = { error?: string };

const schema = z.object({
  password: z.string().min(12, "Le nouveau mot de passe doit contenir au moins 12 caractères.").max(128),
  confirmation: z.string(),
}).refine((value) => value.password === value.confirmation, {
  message: "Les deux mots de passe ne correspondent pas.",
  path: ["confirmation"],
});

export async function changeInitialPassword(_previous: ChangePasswordState, formData: FormData): Promise<ChangePasswordState> {
  const setupSession = await getPasswordChangeSession();
  if (!setupSession) return { error: "La session de changement a expiré. Demandez un nouveau secret temporaire." };

  const parsed = schema.safeParse({ password: formData.get("password"), confirmation: formData.get("confirmation") });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Vérifiez les informations saisies." };

  const passwordHash = await hashPassword(parsed.data.password);
  const changed = await prisma.$transaction(async (tx) => {
    const result = await tx.account.updateMany({
      where: { id: setupSession.accountId, status: "ACTIVE", passwordChangeRequired: true, sessionVersion: setupSession.sessionVersion },
      data: { passwordHash, passwordChangeRequired: false, sessionVersion: { increment: 1 } },
    });
    if (result.count !== 1) return false;
    await tx.auditLog.create({ data: {
      accountId: setupSession.accountId,
      action: "INITIAL_PASSWORD_CHANGED",
      entityType: "ACCOUNT",
      entityId: setupSession.accountId,
    } });
    return true;
  });

  if (!changed) return { error: "Le secret temporaire a déjà été utilisé ou votre compte a changé. Reconnectez-vous." };
  await createSession(setupSession.accountId);
  redirect("/espace");
}
