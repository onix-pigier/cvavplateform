import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

export function PortalFooter() {
  return (
    <footer className="border-t border-primary-container bg-primary px-4 py-14 text-sm text-primary-fixed sm:px-8">
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 md:grid-cols-2 xl:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr] xl:gap-12 xl:px-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Accueil CV-AV Daloa">
            <Image src="/assets/cvav-emblem.png" alt="Emblème CV-AV" width={64} height={64} className="h-12 w-12 object-contain" />
            <span>
              <strong className="block font-title-md text-title-md text-on-primary">CV-AV Daloa</strong>
              <span className="text-[11px] uppercase tracking-[0.16em] text-primary-fixed">Diocèse de Daloa</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm leading-6">Un portail diocésain pour retrouver les paroisses, comprendre le mouvement et protéger l’espace de chaque membre.</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-fixed">Suivez le mouvement</p>
          <SocialLinks />
        </div>
        <div>
          <p className="font-semibold text-on-primary">Explorer</p>
          <div className="mt-4 flex flex-col gap-2.5"><Link href="/paroisses" className="hover:text-white">Annuaire des paroisses</Link><Link href="/#mouvement" className="hover:text-white">Le mouvement</Link><Link href="/#parcours" className="hover:text-white">Parcours</Link><Link href="/#activites" className="hover:text-white">Activités</Link><Link href="/#territoire" className="hover:text-white">Territoire</Link><Link href="/#faq" className="hover:text-white">Questions fréquentes</Link><Link href="/#contact" className="hover:text-white">Nous contacter</Link><Link href="/login" className="hover:text-white">Espace membre</Link></div>
        </div>
        <div>
          <p className="font-semibold text-on-primary">Cadre et confiance</p>
          <div className="mt-4 flex flex-col gap-2.5"><Link href="/legal/confidentialite" className="hover:text-white">Confidentialité</Link><Link href="/legal/cgu" className="hover:text-white">Conditions d’utilisation</Link><span>Référentiel 2026 en consolidation</span></div>
        </div>
        <div>
          <p className="font-semibold text-on-primary">Recevoir les nouvelles</p>
          <p className="mt-3 leading-6">Les informations utiles du mouvement, sans créer de compte membre.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-[1600px] flex-col gap-2 border-t border-primary-container pt-5 text-xs sm:flex-row sm:items-center sm:justify-between xl:px-4">
        <span>© 2026 CV-AV, Diocèse de Daloa</span>
        <span>Les données historiques sont signalées comme telles.</span>
      </div>
    </footer>
  );
}
