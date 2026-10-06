import Link from "next/link";
import Image from "next/image";

export function PortalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant/60 bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-3 py-3 sm:gap-6 sm:px-8 xl:px-12">
        <Link href="/#accueil" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Accueil CV-AV Daloa">
          <Image src="/assets/cvav-emblem.png" alt="Emblème CV-AV" width={80} height={80} className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10" priority />
          <span className="flex min-w-0 flex-col">
            <span className="font-title-md text-title-md text-primary">CV-AV Daloa</span>
            <span className="hidden text-[11px] uppercase tracking-[0.14em] text-on-surface-variant min-[390px]:block">Diocèse de Daloa</span>
          </span>
        </Link>
        <nav className="flex shrink-0 items-center gap-0.5 text-xs sm:gap-2 sm:text-sm" aria-label="Navigation principale">
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-outline-variant px-3 py-2 font-semibold text-primary marker:hidden hover:bg-surface-container-low">
              Menu
            </summary>
            <div className="absolute right-0 top-12 z-50 grid min-w-52 gap-1 rounded-2xl border border-outline-variant bg-surface-container-lowest p-2 text-sm shadow-[0_12px_30px_rgba(7,26,59,0.14)]">
              <Link className="rounded-xl px-3 py-2.5 text-primary hover:bg-surface-container-low" href="/#mouvement">Le mouvement</Link>
              <Link className="rounded-xl px-3 py-2.5 text-primary hover:bg-surface-container-low" href="/#parcours">Parcours</Link>
              <Link className="rounded-xl px-3 py-2.5 text-primary hover:bg-surface-container-low" href="/#activites">Activités</Link>
              <Link className="rounded-xl px-3 py-2.5 text-primary hover:bg-surface-container-low" href="/#territoire">Territoire</Link>
              <Link className="rounded-xl px-3 py-2.5 text-primary hover:bg-surface-container-low" href="/#faq">FAQ</Link>
              <Link className="rounded-xl px-3 py-2.5 text-primary hover:bg-surface-container-low" href="/#contact">Contact</Link>
            </div>
          </details>
          <Link className="hidden rounded-full px-3 py-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary lg:inline-flex" href="/#mouvement">
            Le mouvement
          </Link>
          <Link className="hidden rounded-full px-3 py-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary lg:inline-flex" href="/#parcours">
            Parcours
          </Link>
          <Link className="hidden rounded-full px-3 py-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary lg:inline-flex" href="/#activites">
            Activités
          </Link>
          <Link className="hidden rounded-full px-3 py-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary lg:inline-flex" href="/#territoire">
            Territoire
          </Link>
          <Link className="hidden rounded-full px-3 py-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary lg:inline-flex" href="/#faq">
            FAQ
          </Link>
          <Link className="hidden rounded-full px-3 py-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary sm:inline-flex" href="/paroisses">
            Annuaire
          </Link>
          <Link className="whitespace-nowrap rounded-full bg-primary px-3 py-2.5 font-semibold text-on-primary hover:bg-primary-container sm:px-4" href="/login">
            Espace membre
          </Link>
        </nav>
      </div>
    </header>
  );
}
