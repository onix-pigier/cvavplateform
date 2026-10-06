import { getSession } from "@/lib/auth";
import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { logger } from "@/lib/logger";
import { listActivityPresences, recordPresence, ActivitiesForbiddenError, ActivitiesValidationError } from "@/modules/activities/service";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getSession())) return UNAUTHENTICATED();
  try {
    return jsonData(await listActivityPresences((await params).id));
  } catch (error) {
    logger.error("presence_list_failed", { error });
    if (error instanceof ActivitiesValidationError) return jsonError("NOT_FOUND", error.message, 404, req);
    if (error instanceof ActivitiesForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("PRESENCES_UNAVAILABLE", "Impossible de charger les présences.", 500, req);
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getSession())) return UNAUTHENTICATED();
  try {
    return jsonData(await recordPresence((await params).id, await req.json()), undefined, { status: 201 });
  } catch (error) {
    logger.error("presence_record_failed", { error });
    if (error instanceof ActivitiesValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof ActivitiesForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("PRESENCE_RECORD_FAILED", "Impossible d'enregistrer la présence.", 500, req);
  }
}
