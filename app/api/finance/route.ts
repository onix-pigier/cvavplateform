import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getSession } from "@/lib/auth";
import { listMyContributions, FinanceForbiddenError, FinanceValidationError } from "@/modules/finance/service";
import { logger } from "@/lib/logger";

// GET /api/finance/contributions?personId=&pastoralYear= · POST /api/finance/paiements
// Module Finance : FeeGrid, Contribution, Payment, FinancialTransaction —
// WF-11, WF-12, WF-30. Accès réservé Trésorier (Fonction) + SuperAdmin
// (Volume 11 §11.6) : jamais ouvert à un Chef/Admin sans mandat actif.
export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  try {
    const pastoralYear = new URL(req.url).searchParams.get("pastoralYear") ?? undefined;
    return jsonData(await listMyContributions({ pastoralYear }));
  } catch (error) {
    logger.error("contributions_list_failed", { error });
    if (error instanceof FinanceValidationError) return jsonError("VALIDATION_ERROR", error.message, 422, req);
    if (error instanceof FinanceForbiddenError) return jsonError("FORBIDDEN_SCOPE", error.message, 403, req);
    return jsonError("CONTRIBUTIONS_UNAVAILABLE", "Impossible de charger les cotisations.", 500, req);
  }
}
