import { jsonData, jsonError, paginationMeta, parsePagination, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";
import { createCertificateRequest, listMyRequests, RequestForbiddenError, RequestValidationError } from "@/modules/requests/service";
import { consumeRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

// POST /api/requests/certificate-requests · POST /api/requests/:id/approve
// Module Requests & Certificates : CertificateRequest, Certificate —
// WF-13, WF-27. Circuit à 2 niveaux avec anti-auto-validation (D-062) :
// la logique d'escalade vit dans modules/requests/service.ts, jamais côté UI.
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  const { page, pageSize } = parsePagination(new URL(req.url).searchParams);
  try {
    const result = await listMyRequests(page, pageSize);
    return jsonData(result.items, paginationMeta(page, pageSize, result.total));
  } catch (error) {
    if (error instanceof RequestForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("REQUESTS_UNAVAILABLE", "Impossible de charger les demandes.", 500, req);
  }
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  const rate = consumeRateLimit(`request-create:${session.accountId}`, 20, 60 * 60 * 1000);
  if (!rate.allowed) return jsonError("RATE_LIMITED", "Trop de demandes. Réessayez plus tard.", 429, req);
  try {
    const result = await createCertificateRequest(await req.json());
    return jsonData(result, undefined, { status: 201 });
  } catch (error) {
    logger.error("request_create_failed", { error });
    if (error instanceof RequestValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof RequestForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("REQUEST_CREATE_FAILED", "Impossible de créer la demande.", 500, req);
  }
}
