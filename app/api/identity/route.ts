import { jsonData, jsonError, UNAUTHENTICATED } from "@/lib/http";
import { getMyPrivateProfile } from "@/modules/identity/service";
import { getSession } from "@/lib/auth";

// GET /api/identity : profil privé de la session courante uniquement.
// Les futurs endpoints d'administration devront rester séparés et bornés par
// authorize() ; cette route ne permet jamais de demander le profil d'un tiers.
export async function GET() {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  const profile = await getMyPrivateProfile();
  if (!profile) return jsonError("PROFILE_NOT_FOUND", "Profil privé introuvable.", 404);
  return jsonData(profile);
}
