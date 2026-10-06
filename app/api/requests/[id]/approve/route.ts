import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";
import { approveCertificateRequest, RequestForbiddenError, RequestValidationError } from "@/modules/requests/service";
import { logger } from "@/lib/logger";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getSession())) return UNAUTHENTICATED();
  try {
    const { id } = await params;
    return jsonData(await approveCertificateRequest(id));
  } catch (error) {
    logger.error("request_approve_failed", { error });
    if (error instanceof RequestValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof RequestForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("REQUEST_APPROVE_FAILED", "Impossible de valider la demande.", 500, req);
  }
}
