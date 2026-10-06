import Link from "next/link";
import { PublicPhoto } from "./PublicPhoto";

type MapDoyenne = { id: string; name: string; paroisses: { id: string }[] };

export function DioceseMap({ doyennes }: { doyennes: MapDoyenne[] }) {
  return (
    <section aria-labelledby="territoire-title" className="rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Le territoire</p><h2 id="territoire-title" className="mt-3 max-w-md font-display-lg text-display-lg text-primary">Le diocèse, paroisse par paroisse.</h2></div>
        <p className="max-w-sm text-sm leading-6 text-on-surface-variant">Choisissez un doyenné pour consulter les paroisses qui lui sont rattachées.</p>
      </div>
      <figure className="mt-6 overflow-hidden rounded-card">
        <PublicPhoto src="/assets/public/carte-diocese-daloa.webp" alt="Carte officielle du diocèse de Daloa" label="Ajouter la carte officielle du diocèse" className="aspect-[4/3] w-full sm:aspect-[16/9]" sizes="(max-width: 1024px) 100vw, 55vw" />
        <figcaption className="mt-2 text-xs leading-5 text-on-surface-variant">Carte à remplacer par le document diocésain validé. Les liens territoriaux ci-dessous proviennent du référentiel.</figcaption>
      </figure>
      <div className="mt-6 grid gap-2 sm:grid-cols-2" aria-label="Doyennés de l’annuaire">
        {doyennes.map((doyenne) => (
          <Link key={doyenne.id} href={`/doyennes/${encodeURIComponent(doyenne.id)}`} className="group flex min-h-14 items-center justify-between gap-3 rounded-card border border-outline-variant px-4 py-3 transition-colors hover:border-primary/40 hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span className="font-semibold text-primary group-hover:underline">{doyenne.name}</span><span className="text-sm text-on-surface-variant">{doyenne.paroisses.length} paroisse{doyenne.paroisses.length === 1 ? "" : "s"} <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
