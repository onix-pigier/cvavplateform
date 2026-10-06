import Link from "next/link";

export function ScopedAdminDashboard({ roleLabel }: { roleLabel: string }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant/60 bg-surface-container-lowest"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8"><div><p className="text-xs font-semibold uppercase tracking-wide text-secondary">CV-AV Daloa</p><h1 className="mt-1 font-title-md text-title-md text-primary">Administration V1</h1></div><Link href="/" className="text-sm font-semibold text-primary hover:underline">Voir le portail public</Link></div></header>
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="border border-primary bg-primary p-6 text-on-primary sm:p-8"><p className="text-sm text-primary-fixed">Espace sécurisé · {roleLabel}</p><h2 className="mt-3 font-headline-lg text-headline-lg">Votre périmètre diocésain</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-primary-fixed">La V1 commence par le référentiel des doyennés et des paroisses. Les actions disponibles seront limitées aux données que votre rôle vous autorise à administrer.</p></div>
        <div className="mt-8 grid gap-px border border-outline-variant/70 bg-outline-variant/70 md:grid-cols-3">
          <Link href="/paroisses" className="bg-surface-container-lowest p-6 hover:bg-surface-container-low"><span className="text-sm font-semibold text-tertiary-container">01</span><h3 className="mt-10 font-title-md text-title-md text-primary">Référentiel</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Consulter les 9 doyennés et leurs paroisses documentées.</p></Link>
          <article className="bg-surface-container-lowest p-6"><span className="text-sm font-semibold text-tertiary-container">02</span><h3 className="mt-10 font-title-md text-title-md text-primary">Prochain chantier</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Modifier une donnée, la soumettre, puis la faire valider avant publication.</p></article>
          <article className="bg-surface-container-lowest p-6"><span className="text-sm font-semibold text-tertiary-container">03</span><h3 className="mt-10 font-title-md text-title-md text-primary">Fiabilité</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Chaque rattachement garde sa source et son statut de confirmation.</p></article>
        </div>
        <p className="mt-8 text-sm text-on-surface-variant">Les écrans de finances avancées, santé, NFC, archivage canonique et chancellerie restent hors navigation V1.</p>
      </main>
    </div>
  );
}
