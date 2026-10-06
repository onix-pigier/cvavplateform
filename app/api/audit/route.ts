import { prisma } from "@/lib/prisma";
import { authorize } from "@/lib/rbac/authorize";
import { getSession } from "@/lib/auth";
import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { paginationMeta, parsePagination } from "@/lib/http";

// GET /api/audit/audit-logs — lecture seule, filtrée par scope (Volume 11 §11.10).
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();

  const check = await authorize({
    resourceCode: "AUDIT",
    actionCode: "READ",
    targetScopeType: "DIOCESE",
    targetScopeId: "diocese-daloa",
  });
  if (!check.allowed) return jsonError("FORBIDDEN_SCOPE", check.reason, 403);

  const { page, pageSize, skip, take } = parsePagination(new URL(req.url).searchParams);
  const [logs, total] = await Promise.all([prisma.auditLog.findMany({
    orderBy: { timestamp: "desc" },
    skip,
    take,
  }), prisma.auditLog.count()]);
  return jsonData(logs, paginationMeta(page, pageSize, total));
}
