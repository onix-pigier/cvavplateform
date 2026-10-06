import Link from "next/link";
import { findCertificateByNumber } from "@/modules/requests/repository";

export const dynamic = "force-dynamic";

export default async function VerifyCertificatePage({ params }: { params: Promise<{ number: string }> }) {
  const { number } = await params;
  const certificate = await findCertificateByNumber(decodeURIComponent(number));
  return <main className="flex min-h-screen items-center justify-center bg-surface px-4"><section className="w-full max-w-lg rounded-3xl border border-outline-variant/60 bg-surface-container-lowest p-8 text-center shadow-sm"><p className="text-sm font-semibold uppercase tracking-widest text-secondary">Vérification publique</p><h1 className="mt-4 font-headline-lg text-headline-lg text-primary">Attestation {certificate ? "reconnue" : "introuvable"}</h1><p className="mt-4 text-on-surface-variant">{certificate ? certificate.status === "VALID" ? "Le numéro existe dans le registre des attestations du Diocèse de Daloa." : "Cette attestation a été révoquée." : "Aucune attestation ne correspond à ce numéro."}</p>{certificate && <p className="mt-5 rounded-xl bg-surface-container-low p-4 font-mono text-sm text-primary">{certificate.uniqueNumber}</p>}<Link href="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary">Retour au portail</Link></section></main>;
}
