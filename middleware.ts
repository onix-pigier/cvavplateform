import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

// D-015 : les segments (public)/(auth)/(militant)/(admin) sont physiquement
// isolés. Ce middleware vérifie le rôle AVANT le rendu de la page — jamais
// un contrôle d'accès recodé à la main dans chaque composant.
//
// Remarque : le middleware tourne en Edge Runtime, donc pas d'accès direct à
// Prisma ici. On se contente de vérifier la présence et la validité du JWT
// de session ; la résolution RBAC fine (lib/rbac/authorize.ts) se fait dans
// les Route Handlers / Server Actions, côté Node.

const SESSION_COOKIE = "cvav_session";
const SESSION_ISSUER = "cvav-platform";
const SESSION_AUDIENCE = "cvav-web";

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET manquant ou trop court.");
  return new TextEncoder().encode(secret);
}

interface MinimalSession {
  roles?: { roleCode: string }[];
}

async function readSession(req: NextRequest): Promise<MinimalSession | null> {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), { issuer: SESSION_ISSUER, audience: SESSION_AUDIENCE });
    return payload as MinimalSession;
  } catch {
    return null;
  }
}

function hasAnyRole(session: MinimalSession | null, roleCodes: string[]): boolean {
  if (!session?.roles) return false;
  return session.roles.some((r) => roleCodes.includes(r.roleCode));
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await readSession(req);

  const isMilitantRoute = pathname.startsWith("/militant");
  const isAdminRoute = pathname.startsWith("/admin");

  if ((isMilitantRoute || isAdminRoute) && !session) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute) {
    const allowed = hasAnyRole(session, [
      "SUPER_ADMIN",
      "ADMIN_DOYENNE",
      "ADMIN_PAROISSE",
      "CHEF",
      "AUMONIER_DIOCESE",
      "AUMONIER_DOYENNE",
      "AUMONIER_PAROISSE",
    ]);
    if (!allowed) {
      return NextResponse.redirect(new URL("/militant/dashboard", req.url));
    }
  }

  // Les routes militant restent accessibles à tout compte authentifié
  // (un CHEF ou un ADMIN a aussi, par construction, le rôle MILITANT —
  // Volume 00 : un chef n'est pas une personne différente du militant).

  return NextResponse.next();
}

export const config = {
  matcher: ["/militant/:path*", "/admin/:path*"],
};
