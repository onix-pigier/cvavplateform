import { getSession } from "@/lib/auth";
import { jsonError, UNAUTHENTICATED } from "@/lib/http";
import { createSimplePdf } from "@/lib/pdf/simple";
import { findCertificateForDownload } from "@/modules/requests/repository";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return UNAUTHENTICATED();
  const { id } = await params;
  const certificate = await findCertificateForDownload(id);
  if (!certificate) return jsonError("CERTIFICATE_NOT_FOUND", "Attestation introuvable.", 404, req);
  if (certificate.certificateRequest.requesterId !== session.personId && certificate.certificateRequest.createdById !== session.personId) return jsonError("FORBIDDEN_SCOPE", "Accès non autorisé.", 403, req);
  const pdf = createSimplePdf(["CV-AV — Diocèse de Daloa", "Attestation", `Numero: ${certificate.uniqueNumber}`, "Statut: VALID"]);
  return new Response(pdf, { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${certificate.uniqueNumber}.pdf"`, "Cache-Control": "private, no-store" } });
}
