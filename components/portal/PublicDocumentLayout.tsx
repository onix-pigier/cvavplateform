import Image from "next/image";
import Link from "next/link";

export function PublicDocumentLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant bg-surface-container-lowest">
        <div className="mx-auto flex min-h-16 w-full max-w-4xl items-center justify-between gap-4 px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Retour au portail CV-AV"><Image src="/assets/cvav-emblem.png" alt="" width={40} height={40} className="h-9 w-9 object-contain" /><span className="text-sm font-semibold text-primary">CV-AV · Diocèse de Daloa</span></Link>
          <Link href="/" className="inline-flex min-h-11 items-center rounded-full border border-outline-variant px-4 text-sm font-semibold text-primary hover:bg-surface-container-low">Retour au portail</Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Information institutionnelle</p>
        <h1 className="mt-3 max-w-3xl font-display-lg text-display-lg text-primary sm:text-5xl">{title}</h1>
        <div className="mt-8 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-9">{children}</div>
      </main>
      <footer className="border-t border-outline-variant bg-surface-container-lowest">
        <nav aria-label="Autres documents" className="mx-auto flex min-h-16 w-full max-w-4xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-sm text-on-surface-variant sm:px-8"><Link href="/legal/confidentialite" className="min-h-11 inline-flex items-center hover:text-primary">Confidentialité</Link><Link href="/legal/cgu" className="min-h-11 inline-flex items-center hover:text-primary">Conditions d’utilisation</Link><Link href="/#contact" className="min-h-11 inline-flex items-center hover:text-primary">Contact</Link></nav>
      </footer>
    </div>
  );
}
