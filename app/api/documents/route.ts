import { jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";

// POST /api/documents/documents · GET /api/documents/bibliotheque
export async function GET() {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  return jsonError("NOT_IMPLEMENTED", "Endpoint à implémenter (modules/documents/service.ts).", 501);
}
