import Link from "next/link";
import { notFound } from "next/navigation";
import { chargeursEcrans } from "@/components/ecrans/registre";
import { metaEcrans } from "@/components/ecrans/meta";
import { v1ScreenSlugs } from "@/components/ecrans/v1";

// Visionneuse d'écran : charge paresseusement le composant converti
// correspondant au slug (un import() statique par écran dans le registre —
// seul l'écran demandé entre dans le rendu serveur).
export default async function EcranPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chargeur = chargeursEcrans[slug];
  if (!chargeur || !v1ScreenSlugs.has(slug)) notFound();

  const { default: Ecran } = await chargeur();
  const meta = metaEcrans.find((m) => m.slug === slug);

  return (
    <div className="min-h-screen bg-surface">
      <div className="no-print bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-margin py-space-sm flex flex-wrap items-center gap-space-md font-label-lg text-label-lg">
          <Link className="hover:underline" href="/ecrans">← Galerie</Link>
          <span className="font-title-md text-title-md">{meta?.titre ?? slug}</span>
          {meta && (
            <span className="rounded-full bg-white/10 px-space-md py-space-xs font-label-md text-label-md">
              {meta.domaine}
            </span>
          )}
        </div>
      </div>
      <Ecran />
    </div>
  );
}
