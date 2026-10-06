import { getSession } from "@/lib/auth";
import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getMetricsSnapshot } from "@/lib/metrics";
import { authorize } from "@/lib/rbac/authorize";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!(await getSession())) return UNAUTHENTICATED();
  const check = await authorize({ resourceCode: "AUDIT", actionCode: "READ", targetScopeType: "DIOCESE", targetScopeId: "diocese-daloa" });
  if (!check.allowed) return jsonError("FORBIDDEN_SCOPE", check.reason, 403, req);
  return jsonData({ process: process.pid, metrics: getMetricsSnapshot() });
}
