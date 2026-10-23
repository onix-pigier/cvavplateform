import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PreRegistrationForm } from "@/components/registration/PreRegistrationForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Demander à rejoindre le CV-AV | Diocèse de Daloa",
  description: "Déposez une pré-inscription ou une demande de mutation vers une paroisse du diocèse de Daloa.",
};

export default async function PreRegistrationPage() {
  const parishes = await prisma.paroisse.findMany({
    where: { isActive: true }, orderBy: [{ doyenne: { name: "asc" } }, { name: "asc" }],
    select: { id: true, name: true, doyenne: { select: { name: true } }, ville: { select: { name: true } } },
  });
  return (
    <main className="min-h-screen bg-sand px-4 py-8 text-on-surface sm:px-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">← Retour au portail CV-AV</Link>
        <header className="mt-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Diocèse de Daloa · Adhésion</p>
          <h1 className="mt-3 font-display-lg text-display-lg text-primary">Demander à rejoindre le mouvement</h1>
          <p className="mt-4 leading-7 text-on-surface-variant">Cette pré-inscription n’active pas de compte. Un responsable de la paroisse demandée vérifiera les informations et le rattachement; un compte personnel ne sera créé qu’après approbation.</p>
        </header>
        {parishes.length === 0 ? <p className="mt-8 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6">Aucune paroisse n’est disponible pour le moment. Contactez le secrétariat diocésain.</p> : <PreRegistrationForm parishes={parishes} />}
      </div>
    </main>
  );
}
