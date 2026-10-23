import "server-only";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const SESSION_COOKIE = "cvav_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8; // 8h
const SESSION_ISSUER = "cvav-platform";
const SESSION_AUDIENCE = "cvav-web";

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET manquant (variable d'environnement requise).");
  }
  return new TextEncoder().encode(secret);
}

// ----------------------------------------------------------------------------
// Mots de passe
// ----------------------------------------------------------------------------

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

// ----------------------------------------------------------------------------
// Contenu de session (Volume 11 §11.8 : rôles + mandats actifs embarqués,
// évite une requête base de données à chaque contrôle de permission simple).
// ----------------------------------------------------------------------------

export interface SessionRole {
  roleCode: string;
  scopeType: string;
  scopeId: string | null;
}

export interface SessionMandate {
  fonctionCode: string;
  scopeType: string;
  scopeId: string | null;
}

export interface SessionPayload {
  accountId: string;
  personId: string;
  username: string;
  sessionVersion: number;
  passwordChangeRequired: boolean;
  roles: SessionRole[];
  mandates: SessionMandate[];
  [key: string]: unknown; // compat JWTPayload de jose
}

/// Reconstruit la session à partir des UserRole / Mandate actifs en base.
/// Appelé à la connexion (WF-21) et chaque fois qu'un rôle/mandat change en
/// cours de session, pour forcer une réévaluation (Volume 11 §11.10).
export async function buildSessionPayload(accountId: string): Promise<SessionPayload> {
  const now = new Date();
  const account = await prisma.account.findUniqueOrThrow({
    where: { id: accountId },
    include: {
      person: true,
      userRoles: {
        where: { startDate: { lte: now }, OR: [{ endDate: null }, { endDate: { gte: now } }] },
        include: { role: true },
      },
    },
  });

  const mandates = await prisma.mandate.findMany({
    where: { personId: account.personId, status: "ACTIVE", startDate: { lte: now }, OR: [{ endDate: null }, { endDate: { gte: now } }] },
    include: { fonction: true },
  });

  return {
    accountId: account.id,
    personId: account.personId,
    username: account.username,
    sessionVersion: account.sessionVersion,
    passwordChangeRequired: account.passwordChangeRequired,
    roles: account.userRoles.map((ur: (typeof account.userRoles)[number]) => ({
      roleCode: ur.role.code,
      scopeType: ur.scopeType,
      scopeId: ur.scopeId,
    })),
    mandates: mandates.map((m: (typeof mandates)[number]) => ({
      fonctionCode: m.fonction.code,
      scopeType: m.scopeType,
      scopeId: m.scopeId,
    })),
  };
}

export async function createSession(accountId: string): Promise<void> {
  const payload = await buildSessionPayload(accountId);
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(SESSION_ISSUER)
    .setAudience(SESSION_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecret());

  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

/** Issues a short-lived, restricted session used only to replace an initial credential. */
export async function createPasswordChangeSession(accountId: string): Promise<void> {
  const payload = await buildSessionPayload(accountId);
  const token = await new SignJWT({ ...payload, mustChangePassword: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(SESSION_ISSUER)
    .setAudience(SESSION_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(getSecret());
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 15 * 60,
  });
}

/** Normal application sessions are deliberately unavailable during first-login setup. */
export async function getPasswordChangeSession(): Promise<{ accountId: string; sessionVersion: number } | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), { issuer: SESSION_ISSUER, audience: SESSION_AUDIENCE });
    if (payload.mustChangePassword !== true) return null;
    const accountId = String(payload.accountId ?? "");
    const account = await prisma.account.findUnique({ where: { id: accountId }, select: { status: true, sessionVersion: true, passwordChangeRequired: true, person: { select: { status: true } } } });
    if (!account || account.status !== "ACTIVE" || account.person.status !== "ACTIVE" || !account.passwordChangeRequired || Number(payload.sessionVersion) !== account.sessionVersion) return null;
    return { accountId, sessionVersion: account.sessionVersion };
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret(), { issuer: SESSION_ISSUER, audience: SESSION_AUDIENCE });
    if (payload.mustChangePassword === true) return null;
    const account = await prisma.account.findUnique({ where: { id: String(payload.accountId ?? "") }, select: { status: true, sessionVersion: true, passwordChangeRequired: true, person: { select: { status: true } } } });
    if (!account || account.status !== "ACTIVE" || account.person.status !== "ACTIVE") return null;
    if (account.passwordChangeRequired) return null;
    if (Number(payload.sessionVersion ?? 0) !== account.sessionVersion) return null;
    return buildSessionPayload(String(payload.accountId));
  } catch {
    return null; // signature invalide ou expirée
  }
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
