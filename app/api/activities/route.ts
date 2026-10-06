import { jsonData, jsonError, paginationMeta, parsePagination, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";
import { createActivity, listMyActivities, ActivitiesForbiddenError, ActivitiesValidationError } from "@/modules/activities/service";
import { logger } from "@/lib/logger";

// POST /api/activities/activites · POST /api/activities/activites/:id/presences
// Module Activities & Attendance : Activity, Presence, CeremonySession,
// PilgrimageLogistics — WF-09, WF-10, WF-14, WF-15, WF-25, WF-28.
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  try {
    const { page, pageSize } = parsePagination(new URL(req.url).searchParams);
    const result = await listMyActivities(page, pageSize);
    return jsonData(result.items, paginationMeta(page, pageSize, result.total));
  } catch (error) {
    logger.error("activities_list_failed", { error });
    if (error instanceof ActivitiesForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("ACTIVITIES_UNAVAILABLE", "Impossible de charger les activités.", 500, req);
  }
}

export async function POST(req: Request) {
  if (!(await getSession())) return UNAUTHENTICATED();
  try {
    return jsonData(await createActivity(await req.json()), undefined, { status: 201 });
  } catch (error) {
    logger.error("activity_create_failed", { error });
    if (error instanceof ActivitiesValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof ActivitiesForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("ACTIVITY_CREATE_FAILED", "Impossible de créer l'activité.", 500, req);
  }
}
