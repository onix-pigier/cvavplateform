import Link from "next/link";

export function ScopedMemberDashboard() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant/60 bg-surface-container-lowest"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8"><div><p className="text-xs font-semibold uppercase tracking-wide text-secondary">CV-AV Daloa</p><h1 className="mt-1 font-title-md text-title-md text-primary">Mon espace</h1></div><Link href="/" className="text-sm font-semibold text-primary hover:underline">Voir le portail public</Link></div></header>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="border border-outline-variant/60 bg-surface-container-lowest p-6 sm:p-8"><p className="text-sm font-semibold uppercase tracking-wide text-secondary">Compte personnel</p><h2 className="mt-3 font-headline-lg text-headline-lg text-primary">Bienvenue dans votre espace diocésain.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-on-surface-variant">Ce compte appartient à une seule personne. La V1 protège votre profil privé et affiche uniquement les activités, demandes, attestations et cotisations autorisées par votre rattachement.</p></div>
        <div className="mt-8 grid gap-px border border-outline-variant/70 bg-outline-variant/70 sm:grid-cols-2"><Link href="/paroisses" className="bg-surface-container-lowest p-6 hover:bg-surface-container-low"><span className="text-sm font-semibold text-tertiary-container">01</span><h3 className="mt-10 font-title-md text-title-md text-primary">Trouver ma paroisse</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Consulter le référentiel des doyennés et paroisses.</p></Link><article className="bg-surface-container-lowest p-6"><span className="text-sm font-semibold text-tertiary-container">02</span><h3 className="mt-10 font-title-md text-title-md text-primary">Profil à compléter</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Le rattachement paroissial et les informations publiables seront ajoutés dans un parcours dédié.</p></article></div>
      </main>
    </div>
  );
}
