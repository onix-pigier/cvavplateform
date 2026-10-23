import { getSession } from "@/lib/auth";
import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getAdminContext } from "@/lib/admin/context";
import { getAuditRegistry } from "@/lib/admin/portal-data";

// GET /api/audit — lecture diocésaine paginée, champs privés exclus.
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  const search = new URL(req.url).searchParams;
  const context = await getAdminContext(session, "SUPER_ADMIN", search.get("scopeId") ?? "diocese-daloa");
  if (!context) return jsonError("FORBIDDEN_SCOPE", "Accès diocésain requis.", 403, req);
  const parseDate = (value: string | null, endOfDay = false) => {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
    const date = new Date(`${value}T${endOfDay ? "23:59:59.999" : "00:00:00.000"}Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? date : undefined;
  };
  const result = await getAuditRegistry(context, {
    query: search.get("q") ?? undefined,
    from: parseDate(search.get("from")),
    to: parseDate(search.get("to"), true),
    page: Number.parseInt(search.get("page") ?? "1", 10) || 1,
    pageSize: Number.parseInt(search.get("pageSize") ?? "20", 10) || 20,
  });
  if (!result) return jsonError("FORBIDDEN_SCOPE", "Accès diocésain requis.", 403, req);
  return jsonData(result.items, { page: result.page, pageSize: result.pageSize, total: result.total, pageCount: result.pageCount });
}
