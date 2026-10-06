import Image from "next/image";
import Link from "next/link";

export function DirectoryFooter() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Retour au portail CV-AV">
          <Image src="/assets/cvav-emblem.png" alt="" width={40} height={40} className="h-9 w-9 object-contain" />
          <span className="leading-5"><strong className="block text-primary">CV-AV · Diocèse de Daloa</strong><span className="text-xs text-on-surface-variant">Annuaire territorial</span></span>
        </Link>
        <nav aria-label="Liens de confiance" className="flex flex-wrap gap-x-5 gap-y-2 text-on-surface-variant">
          <Link href="/legal/confidentialite" className="hover:text-primary">Confidentialité</Link>
          <Link href="/legal/cgu" className="hover:text-primary">Conditions d’utilisation</Link>
          <Link href="/#contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
