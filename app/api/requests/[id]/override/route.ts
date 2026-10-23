import { getSession } from "@/lib/auth";
import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { overrideCertificateRequest, RequestForbiddenError, RequestValidationError } from "@/modules/requests/service";
import { logger } from "@/lib/logger";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getSession())) return UNAUTHENTICATED();
  try {
    const { id } = await params;
    return jsonData(await overrideCertificateRequest(id, await req.json()));
  } catch (error) {
    logger.error("request_override_failed", { error });
    if (error instanceof RequestValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof RequestForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("REQUEST_OVERRIDE_FAILED", "Impossible d’appliquer la dérogation.", 500, req);
  }
}
