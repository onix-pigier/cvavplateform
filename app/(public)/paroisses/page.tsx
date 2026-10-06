import Link from "next/link";
import { ParishCard, PortalFooter, PortalHeader } from "@/components/portal";
import { getPublicDirectory } from "@/modules/organisation/public";

export const dynamic = "force-dynamic";
type SearchParams = Promise<{ q?: string; doyenneId?: string }>;

export default async function ParoissesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const directory = await getPublicDirectory();
  const query = params.q?.trim().toLocaleLowerCase("fr-FR") ?? "";
  const selectedDoyenneId = params.doyenneId ?? "";
  const doyennes = directory.filter((doyenne) => !selectedDoyenneId || doyenne.id === selectedDoyenneId);
  const visibleParoisses = doyennes.flatMap((doyenne) => doyenne.paroisses.filter((paroisse) => !query || `${paroisse.name} ${paroisse.ville.name} ${doyenne.name}`.toLocaleLowerCase("fr-FR").includes(query)));
  const totalParishes = directory.reduce((total, doyenne) => total + doyenne.paroisses.length, 0);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-surface text-on-surface">
      <PortalHeader />
      <main>
        <section className="border-b border-outline-variant/60 bg-[#f1eee7] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
          <div className="mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div><Link href="/#accueil" className="text-sm font-semibold text-primary hover:underline">← Retour au portail</Link><p className="mt-12 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Annuaire public · Diocèse de Daloa</p><h1 className="mt-5 max-w-4xl font-display-lg text-display-lg text-primary sm:text-6xl">Trouver une paroisse.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">Un répertoire territorial simple pour comprendre les doyennés, retrouver les paroisses et consulter les informations CV-AV réellement documentées.</p></div>
            <div className="border-l-2 border-tertiary-container pl-6 lg:pl-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Le référentiel en bref</p><div className="mt-5 flex flex-wrap items-baseline gap-x-8 gap-y-3"><p><strong className="block font-display-lg text-display-lg text-primary">{directory.length}</strong><span className="text-sm text-on-surface-variant">doyennés</span></p><p><strong className="block font-display-lg text-display-lg text-primary">{totalParishes}</strong><span className="text-sm text-on-surface-variant">paroisses référencées</span></p></div><p className="mt-6 max-w-sm text-sm leading-6 text-on-surface-variant">Les responsables, équipes, activités et photos ne sont affichés publiquement qu’après documentation et validation.</p></div>
          </div>
        </section>

        <section id="recherche" className="scroll-mt-24 mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-10 lg:px-16 xl:px-24">
          <form className="grid gap-3 rounded-2xl border border-primary/20 bg-surface-container-lowest p-3 shadow-[0_8px_26px_rgba(7,26,59,0.07)] md:grid-cols-[1fr_280px_auto]" action="/paroisses" method="get"><label className="sr-only" htmlFor="q">Rechercher une paroisse</label><input id="q" name="q" defaultValue={params.q} placeholder="Nom de paroisse, ville ou doyenné" className="rounded-xl border border-primary/20 bg-[#fffdf8] px-4 py-3.5 text-sm outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-2 focus:ring-tertiary-fixed/40" /><label className="sr-only" htmlFor="doyenneId">Filtrer par doyenné</label><select id="doyenneId" name="doyenneId" defaultValue={selectedDoyenneId} className="rounded-xl border border-primary/20 bg-[#fffdf8] px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-tertiary-fixed/40"><option value="">Tous les doyennés</option>{directory.map((doyenne) => <option key={doyenne.id} value={doyenne.id}>{doyenne.name}</option>)}</select><button className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary hover:bg-primary-container" type="submit">Rechercher</button></form>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm"><p className="text-on-surface-variant"><strong className="text-primary">{visibleParoisses.length}</strong> résultat{visibleParoisses.length > 1 ? "s" : ""}</p>{(query || selectedDoyenneId) && <Link href="/paroisses" className="font-semibold text-primary hover:underline">Réinitialiser les filtres</Link>}</div>
        </section>

        <section className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 pb-24 sm:px-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-16 xl:px-24">
          <aside className="h-fit lg:sticky lg:top-24"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Doyennés</p><nav className="mt-5 border-t border-outline-variant" aria-label="Filtrer par doyenné"><Link href="/paroisses" className={`block border-b border-outline-variant py-3 text-sm font-semibold ${!selectedDoyenneId ? "text-primary" : "text-on-surface-variant hover:text-primary"}`}>Tous les doyennés</Link>{directory.map((doyenne) => <a key={doyenne.id} href={`#doyenne-${doyenne.id}`} className={`flex items-center justify-between border-b border-outline-variant py-3 text-sm ${selectedDoyenneId === doyenne.id ? "font-semibold text-primary" : "text-on-surface-variant hover:text-primary"}`}><span>{doyenne.name}</span><span className="text-xs">{doyenne.paroisses.length}</span></a>)}</nav><p className="mt-6 text-xs leading-5 text-on-surface-variant">Une donnée historique est conservée pour traçabilité, mais elle n’est pas présentée comme une confirmation actuelle.</p></aside>

          <div className="min-w-0">{doyennes.map((doyenne, index) => { const paroisses = doyenne.paroisses.filter((paroisse) => visibleParoisses.some((item) => item.id === paroisse.id)); if (paroisses.length === 0) return null; return <section key={doyenne.id} id={`doyenne-${doyenne.id}`} className="scroll-mt-24 border-t-2 border-primary py-8 first:pt-0"><div className="flex flex-wrap items-baseline justify-between gap-3"><div className="flex items-baseline gap-4"><span className="text-sm font-semibold text-tertiary-container">{String(index + 1).padStart(2, "0")}</span><h2 className="font-headline-lg text-headline-lg text-primary">{doyenne.name}</h2></div><span className="text-sm text-on-surface-variant">{paroisses.length} paroisse{paroisses.length > 1 ? "s" : ""}</span></div><div className="mt-7">{paroisses.map((paroisse) => <ParishCard key={paroisse.id} parish={paroisse} />)}</div></section>; })}{visibleParoisses.length === 0 && <div className="border-t-2 border-primary py-12"><h2 className="font-title-md text-title-md text-primary">Aucun résultat</h2><p className="mt-2 text-sm leading-6 text-on-surface-variant">Essayez un autre nom, une autre ville ou retirez le filtre de doyenné.</p></div>}</div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
