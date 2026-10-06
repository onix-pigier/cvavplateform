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
  roles: SessionRole[];
  mandates: SessionMandate[];
  [key: string]: unknown; // compat JWTPayload de jose
}

/// Reconstruit la session à partir des UserRole / Mandate actifs en base.
/// Appelé à la connexion (WF-21) et chaque fois qu'un rôle/mandat change en
/// cours de session, pour forcer une réévaluation (Volume 11 §11.10).
export async function buildSessionPayload(accountId: string): Promise<SessionPayload> {
  const account = await prisma.account.findUniqueOrThrow({
    where: { id: accountId },
    include: {
      person: true,
      userRoles: {
        where: { endDate: null },
        include: { role: true },
      },
    },
  });

  const mandates = await prisma.mandate.findMany({
    where: { personId: account.personId, status: "ACTIVE" },
    include: { fonction: true },
  });

  return {
    accountId: account.id,
    personId: account.personId,
    username: account.username,
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

export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret(), { issuer: SESSION_ISSUER, audience: SESSION_AUDIENCE });
    const account = await prisma.account.findUnique({ where: { id: String(payload.accountId ?? "") }, select: { status: true, person: { select: { status: true } } } });
    if (!account || account.status !== "ACTIVE" || account.person.status !== "ACTIVE") return null;
    return buildSessionPayload(String(payload.accountId));
  } catch {
    return null; // signature invalide ou expirée
  }
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
