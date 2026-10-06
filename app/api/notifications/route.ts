import { jsonData, jsonError, paginationMeta, parsePagination, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";
import { listMyNotifications, markMyNotificationRead, NotificationForbiddenError, NotificationValidationError } from "@/modules/notifications/service";
import { logger } from "@/lib/logger";

// GET /api/notifications/notifications · POST /api/notifications/broadcasts
// WF-16, WF-17, WF-29. Diffusion unidirectionnelle uniquement (D-059).
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  try {
    const { page, pageSize } = parsePagination(new URL(req.url).searchParams);
    const result = await listMyNotifications(page, pageSize);
    return jsonData(result.items, paginationMeta(page, pageSize, result.total));
  } catch (error) {
    logger.error("notifications_list_failed", { error });
    if (error instanceof NotificationForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("NOTIFICATIONS_UNAVAILABLE", "Impossible de charger les notifications.", 500, req);
  }
}

export async function PATCH(req: Request) {
  if (!(await getSession())) return UNAUTHENTICATED();
  try {
    return jsonData(await markMyNotificationRead(await req.json()));
  } catch (error) {
    logger.error("notification_read_failed", { error });
    if (error instanceof NotificationValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof NotificationForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("NOTIFICATION_UPDATE_FAILED", "Impossible de modifier la notification.", 500, req);
  }
}
