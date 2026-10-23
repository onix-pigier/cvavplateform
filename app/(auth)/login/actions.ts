"use server";

import { redirect } from "next/navigation";
import type { Route } from "next";
import { prisma } from "@/lib/prisma";
import { createPasswordChangeSession, createSession, hashPassword, verifyPassword } from "@/lib/auth";
import { randomBytes } from "node:crypto";
import { consumeRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export interface LoginState {
  error?: string;
  fieldErrors?: { username?: string; password?: string };
}

/// WF-21 — Connexion & authentification. Toute tentative d'accès invalide
/// reçoit le même message générique (ne jamais révéler si c'est l'identifiant
/// ou le mot de passe qui est faux).
export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return {
      fieldErrors: {
        ...(!username ? { username: "Saisissez votre numéro de membre." } : {}),
        ...(!password ? { password: "Saisissez votre mot de passe." } : {}),
      },
    };
  }

  const rate = consumeRateLimit(`login:${username.toLocaleLowerCase("fr-FR")}`, 5, 15 * 60 * 1000);
  if (!rate.allowed) return { error: "Trop de tentatives. Réessayez dans quelques minutes." };

  const account = await prisma.account.findUnique({ where: { username } });
  if (!account || account.status !== "ACTIVE") {
    logger.warn("login_rejected", { reason: "invalid_account" });
    return {
      fieldErrors: {
        username: "Numéro de membre ou mot de passe incorrect.",
        password: "Numéro de membre ou mot de passe incorrect.",
      },
    };
  }

  const valid = await verifyPassword(password, account.passwordHash);
  if (!valid) {
    logger.warn("login_rejected", { reason: "invalid_password" });
    return {
      fieldErrors: {
        username: "Numéro de membre ou mot de passe incorrect.",
        password: "Numéro de membre ou mot de passe incorrect.",
      },
    };
  }

  if (account.passwordChangeRequired) {
    // Atomically consume the temporary credential: only one concurrent login
    // can exchange it for the short-lived password-setup session.
    const replacementHash = await hashPassword(randomBytes(32).toString("base64url"));
    const consumed = await prisma.account.updateMany({
      where: { id: account.id, passwordHash: account.passwordHash, passwordChangeRequired: true, status: "ACTIVE" },
      data: { passwordHash: replacementHash, sessionVersion: { increment: 1 } },
    });
    if (consumed.count !== 1) {
      return { error: "Ce secret temporaire a déjà été utilisé. Demandez un nouveau secret à votre administrateur." };
    }
    await createPasswordChangeSession(account.id);
    redirect("/change-password" as Route);
  }

  const now = new Date();
  const assignments = await prisma.userRole.findMany({ where: { accountId: account.id, startDate: { lte: now }, OR: [{ endDate: null }, { endDate: { gte: now } }] }, include: { role: true } });
  await createSession(account.id);
  if (assignments.length === 1) {
    const assignment = assignments[0];
    if (assignment?.role.code === "MILITANT") redirect("/militant/dashboard");
    const adminCodes = new Set(["SUPER_ADMIN", "ADMIN_DOYENNE", "ADMIN_PAROISSE", "CHEF", "AUMONIER_DIOCESE", "AUMONIER_DOYENNE", "AUMONIER_PAROISSE", "PARRAIN_MARRAINE"]);
    if (assignment && adminCodes.has(assignment.role.code)) redirect(`/admin/dashboard?role=${encodeURIComponent(assignment.role.code)}&scopeId=${encodeURIComponent(assignment.scopeId ?? "")}`);
  }
  redirect("/espace");
}
