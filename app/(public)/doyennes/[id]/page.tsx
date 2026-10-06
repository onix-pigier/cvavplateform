import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectoryFooter, DirectoryHeader, ParishCard } from "@/components/portal";
import { getPublicDoyenne } from "@/modules/organisation/public";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const doyenne = await getPublicDoyenne(decodeURIComponent(id));
  return doyenne
    ? { title: `${doyenne.name} | Annuaire CV-AV Daloa`, description: `Paroisses et équipes documentées du doyenné ${doyenne.name}, diocèse de Daloa.` }
    : { title: "Doyenné introuvable | CV-AV Daloa", robots: { index: false, follow: true } };
}

export default async function DoyenneDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doyenne = await getPublicDoyenne(decodeURIComponent(id));
  if (!doyenne) notFound();
  const teamCount = doyenne.paroisses.reduce((total, parish) => total + parish.sections.reduce((sectionTotal, section) => sectionTotal + section.teams.length, 0), 0);

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <DirectoryHeader />
      <main className="flex-1">
        <section className="bg-sand">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-9 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <nav aria-label="Fil d’Ariane" className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant"><Link href="/paroisses" className="min-h-11 inline-flex items-center font-semibold text-primary hover:underline">Annuaire</Link><span aria-hidden="true">/</span><span aria-current="page">{doyenne.name}</span></nav>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Doyenné · Diocèse de Daloa</p><h1 className="mt-3 max-w-3xl font-display-lg text-display-lg text-primary sm:text-6xl">{doyenne.name}</h1><p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">Les paroisses et équipes rattachées à ce doyenné dans le référentiel public.</p></div>
              <div className="grid grid-cols-2 gap-3 rounded-feature border border-outline-variant bg-surface-container-lowest p-5"><div><strong className="block text-3xl tabular-nums text-primary">{doyenne.paroisses.length}</strong><span className="text-sm text-on-surface-variant">paroisses listées</span></div><div><strong className="block text-3xl tabular-nums text-primary">{teamCount}</strong><span className="text-sm text-on-surface-variant">équipes référencées</span></div><p className="col-span-2 border-t border-outline-variant pt-3 text-xs leading-5 text-on-surface-variant">Les fiches précisent les informations dont la confirmation reste à faire.</p></div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Communautés locales</p><h2 className="mt-2 font-headline-lg text-headline-lg text-primary">Les paroisses.</h2></div><Link href={`/paroisses?doyenneId=${encodeURIComponent(doyenne.id)}`} className="inline-flex min-h-11 items-center rounded-full border border-primary/25 px-4 text-sm font-semibold text-primary hover:bg-surface-container-low">Filtrer l’annuaire <span className="ml-2" aria-hidden="true">↗</span></Link></div>
          {doyenne.paroisses.length > 0 ? <div className="grid gap-3">{doyenne.paroisses.map((parish) => <ParishCard key={parish.id} parish={parish} />)}</div> : <div className="rounded-feature border border-outline-variant bg-surface-container-lowest p-8"><h3 className="font-headline-md text-headline-md text-primary">Aucune paroisse active dans cette fiche.</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Le référentiel ne contient pas actuellement de paroisse publiée pour ce doyenné.</p></div>}
        </section>
      </main>
      <DirectoryFooter />
    </div>
  );
}
