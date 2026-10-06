"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createSession, verifyPassword } from "@/lib/auth";
import { consumeRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export interface LoginState {
  error?: string;
}

/// WF-21 — Connexion & authentification. Toute tentative d'accès invalide
/// reçoit le même message générique (ne jamais révéler si c'est l'identifiant
/// ou le mot de passe qui est faux).
export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return { error: "Identifiant et mot de passe requis." };
  }

  const rate = consumeRateLimit(`login:${username.toLocaleLowerCase("fr-FR")}`, 5, 15 * 60 * 1000);
  if (!rate.allowed) return { error: "Trop de tentatives. Réessayez dans quelques minutes." };

  const account = await prisma.account.findUnique({ where: { username } });
  if (!account || account.status !== "ACTIVE") {
    logger.warn("login_rejected", { reason: "invalid_account" });
    return { error: "Identifiants incorrects." };
  }

  const valid = await verifyPassword(password, account.passwordHash);
  if (!valid) {
    logger.warn("login_rejected", { reason: "invalid_password" });
    return { error: "Identifiants incorrects." };
  }

  await createSession(account.id);
  redirect("/militant/dashboard");
}
