import Image from "next/image";
import Link from "next/link";

export function DirectoryHeader() {
  return (
    <header className="border-b border-outline-variant/70 bg-surface-container-lowest">
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
        <Link href="/paroisses" className="flex items-center gap-3" aria-label="Accueil de l’annuaire diocésain">
          <Image src="/assets/cvav-emblem.png" alt="" width={48} height={48} className="h-10 w-10 object-contain" />
          <span><span className="block font-title-md text-title-md text-primary">Annuaire diocésain</span><span className="block text-xs text-on-surface-variant">CV-AV · Daloa</span></span>
        </Link>
        <nav aria-label="Navigation de l’annuaire" className="flex items-center gap-2 text-sm">
          <Link href="/" className="hidden min-h-11 items-center rounded-full px-4 text-on-surface-variant hover:bg-surface-container-low hover:text-primary sm:inline-flex">Accueil du mouvement</Link>
          <Link href="/login" className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 font-semibold text-on-primary transition-colors hover:bg-primary-container">Espace membre</Link>
        </nav>
      </div>
    </header>
  );
}
