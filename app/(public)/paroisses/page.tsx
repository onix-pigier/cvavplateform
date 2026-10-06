import Link from "next/link";
import type { Metadata } from "next";
import { DirectoryFooter, DirectoryHeader, ParishCard } from "@/components/portal";
import { getPublicDirectory } from "@/modules/organisation/public";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Annuaire des paroisses | CV-AV Daloa",
  description: "Recherchez les doyennés et paroisses du diocèse de Daloa, consultez les équipes documentées et leur niveau de confirmation.",
};
type SearchParams = Promise<{ q?: string; doyenneId?: string }>;

export default async function ParoissesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const directory = await getPublicDirectory();
  const query = params.q?.trim().toLocaleLowerCase("fr-FR") ?? "";
  const selectedDoyenneId = params.doyenneId ?? "";
  const activeDoyennes = directory.filter((doyenne) => !selectedDoyenneId || doyenne.id === selectedDoyenneId);
  const visibleByDeanery = activeDoyennes.map((doyenne) => ({
    ...doyenne,
    visibleParishes: doyenne.paroisses.filter((parish) => !query || `${parish.name} ${parish.ville.name} ${doyenne.name}`.toLocaleLowerCase("fr-FR").includes(query)),
  }));
  const totalParishes = directory.reduce((total, doyenne) => total + doyenne.paroisses.length, 0);
  const resultCount = visibleByDeanery.reduce((sum, doyenne) => sum + doyenne.visibleParishes.length, 0);

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <DirectoryHeader />
      <main className="flex-1">
        <section className="bg-sand">
          <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:px-12 lg:py-16">
            <div><Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline">← Portail du mouvement</Link><p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Annuaire territorial · Diocèse de Daloa</p><h1 className="mt-3 max-w-3xl font-display-lg text-display-lg text-primary sm:text-6xl">Doyennés et paroisses.</h1><p className="mt-4 max-w-2xl leading-7 text-on-surface-variant">Parcourez les paroisses, consultez les équipes documentées et vérifiez le niveau de mise à jour des informations.</p></div>
            <div className="grid grid-cols-2 gap-4 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-6"><div><strong className="block text-3xl tabular-nums text-primary">{directory.length}</strong><span className="text-sm text-on-surface-variant">doyennés</span></div><div><strong className="block text-3xl tabular-nums text-primary">{totalParishes}</strong><span className="text-sm text-on-surface-variant">paroisses listées</span></div><p className="col-span-2 border-t border-outline-variant pt-3 text-xs leading-5 text-on-surface-variant">Les fiches indiquent lorsqu’un rattachement doit encore être confirmé.</p></div>
          </div>
        </section>

        <section id="recherche" className="scroll-mt-24 mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-12">
          <form className="grid gap-3 rounded-feature border border-outline-variant bg-surface-container-lowest p-3 sm:p-4 md:grid-cols-[minmax(0,1fr)_minmax(14rem,0.65fr)_auto]" action="/paroisses" method="get" role="search">
            <div className="min-w-0"><label className="mb-1.5 block px-1 text-xs font-semibold text-primary" htmlFor="q">Rechercher dans l’annuaire</label><input id="q" name="q" defaultValue={params.q} placeholder="Paroisse, ville ou doyenné" className="min-h-12 w-full rounded-card border border-outline bg-surface px-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
            <div><label className="mb-1.5 block px-1 text-xs font-semibold text-primary" htmlFor="doyenneId">Doyenné</label><select id="doyenneId" name="doyenneId" defaultValue={selectedDoyenneId} className="min-h-12 w-full rounded-card border border-outline bg-surface px-4 text-sm text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"><option value="">Tous les doyennés</option>{directory.map((doyenne) => <option key={doyenne.id} value={doyenne.id}>{doyenne.name}</option>)}</select></div>
            <div className="flex items-end"><button className="min-h-12 w-full rounded-full bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto" type="submit">Rechercher</button></div>
          </form>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm"><p className="text-on-surface-variant"><strong className="text-primary">{resultCount}</strong> résultat{resultCount === 1 ? "" : "s"}</p>{(query || selectedDoyenneId) && <Link href="/paroisses" className="inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 hover:underline">Effacer les filtres</Link>}</div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2" aria-label="Accès aux doyennés">{directory.map((doyenne) => <Link key={doyenne.id} href={`/doyennes/${encodeURIComponent(doyenne.id)}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-surface-container-low">{doyenne.name}<span className="ml-2 tabular-nums text-on-surface-variant">{doyenne.paroisses.length}</span></Link>)}</div>
        </section>

        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 pb-16 sm:px-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-12 lg:pb-24">
          <aside className="h-fit rounded-feature border border-outline-variant bg-surface-container-lowest p-5 lg:sticky lg:top-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Explorer</p><nav className="mt-3" aria-label="Doyennés"><Link href="/paroisses" className={`flex min-h-11 items-center border-b border-outline-variant text-sm ${!selectedDoyenneId ? "font-semibold text-primary" : "text-on-surface-variant hover:text-primary"}`}>Tous les doyennés</Link>{directory.map((doyenne) => <Link key={doyenne.id} href={`/doyennes/${encodeURIComponent(doyenne.id)}`} className={`flex min-h-11 items-center justify-between gap-3 border-b border-outline-variant text-sm last:border-0 ${selectedDoyenneId === doyenne.id ? "font-semibold text-primary" : "text-on-surface-variant hover:text-primary"}`}><span>{doyenne.name}</span><span className="tabular-nums text-xs">{doyenne.paroisses.length}</span></Link>)}</nav><p className="mt-5 text-xs leading-5 text-on-surface-variant">Une fiche détaillée précise la source et la fiabilité du rattachement.</p></aside>

          <div className="min-w-0 space-y-8">
            {visibleByDeanery.map((doyenne, index) => doyenne.visibleParishes.length > 0 && (
              <section key={doyenne.id} id={`doyenne-${doyenne.id}`} className="scroll-mt-6 overflow-hidden rounded-feature border border-outline-variant bg-surface-container-lowest">
                <header className="flex flex-wrap items-end justify-between gap-4 border-b border-outline-variant bg-surface-container-low p-5 sm:p-7"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Doyenné · {String(index + 1).padStart(2, "0")}</p><h2 className="mt-2 font-headline-lg text-headline-lg text-primary">{doyenne.name}</h2><p className="mt-1 text-sm text-on-surface-variant">{doyenne.visibleParishes.length} paroisse{doyenne.visibleParishes.length === 1 ? "" : "s"} dans les résultats</p></div><Link href={`/doyennes/${encodeURIComponent(doyenne.id)}`} className="inline-flex min-h-11 items-center rounded-full border border-primary/20 bg-surface-container-lowest px-4 text-sm font-semibold text-primary transition-colors hover:border-primary/50">Voir le doyenné <span className="ml-2" aria-hidden="true">↗</span></Link></header>
                <div className="grid gap-3 p-3 sm:p-5">{doyenne.visibleParishes.map((parish) => <ParishCard key={parish.id} parish={parish} />)}</div>
              </section>
            ))}
            {resultCount === 0 && <div className="rounded-feature border border-outline-variant bg-surface-container-lowest p-8 sm:p-12"><h2 className="font-headline-md text-headline-md text-primary">Aucune paroisse trouvée.</h2><p className="mt-2 max-w-lg leading-6 text-on-surface-variant">Essayez un autre nom, une autre ville ou retirez le filtre de doyenné.</p><Link href="/paroisses" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-on-primary">Afficher tout l’annuaire</Link></div>}
          </div>
        </div>
      </main>
      <DirectoryFooter />
    </div>
  );
}
