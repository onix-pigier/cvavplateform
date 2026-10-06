import { z } from "zod";

// Module notifications : Notification, Broadcast — WF-16, WF-17, WF-29
// Schémas Zod à détailler au fil de l implémentation des endpoints
// (voir app/api/notifications/route.ts et TDD §5).

export const markNotificationSchema = z.object({
  notificationId: z.string().uuid(),
});
