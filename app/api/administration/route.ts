import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";
import { listReferences, AdministrationForbiddenError } from "@/modules/administration/service";
import { logger } from "@/lib/logger";

// CRUD référentiels (grades, types d'activité, types de demande, fonctions,
// rôles, villes) — réservé SUPER_ADMIN (Volume 11 §11.5). Jamais codé en dur.
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  try {
    return jsonData(await listReferences());
  } catch (error) {
    logger.error("administration_references_failed", { error });
    if (error instanceof AdministrationForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("ADMINISTRATION_UNAVAILABLE", "Impossible de charger les référentiels.", 500, req);
  }
}
