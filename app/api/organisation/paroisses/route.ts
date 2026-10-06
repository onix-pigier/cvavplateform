import { prisma } from "@/lib/prisma";
import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { jsonData, jsonError, paginationMeta, parsePagination, UNAUTHENTICATED } from "@/lib/http";

// GET /api/organisation/paroisses?doyenneId=...
// Exemple de référence pour les autres endpoints : chaque route suit le
// même squelette authorize() → requête Prisma bornée au scope → réponse
// standard (TDD §5).
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();

  const { searchParams } = new URL(req.url);
  const doyenneId = searchParams.get("doyenneId") ?? undefined;
  const { page, pageSize, skip, take } = parsePagination(searchParams);

  // Le scope exact dépend du rôle de l'utilisateur ; ici on vérifie
  // seulement la lecture au niveau DIOCESE (toujours vrai en V1 mono-diocèse)
  // — un ADMIN_DOYENNE/ADMIN_PAROISSE verrait sa liste déjà bornée au niveau
  // service le jour où le multi-diocèse existera (D-064).
  const check = await authorize({
    resourceCode: "ORGANISATION",
    actionCode: "READ",
    targetScopeType: "DIOCESE",
    targetScopeId: "diocese-daloa", // scope implicite V1 mono-diocèse
  });
  if (!check.allowed) return jsonError("FORBIDDEN_SCOPE", check.reason, 403);

  const where = { isActive: true, ...(doyenneId ? { doyenneId } : {}) };
  const [paroisses, total] = await Promise.all([prisma.paroisse.findMany({
    where,
    include: { doyenne: true, ville: true },
    orderBy: { name: "asc" },
    skip,
    take,
  }), prisma.paroisse.count({ where })]);

  return jsonData(paroisses, paginationMeta(page, pageSize, total));
}
