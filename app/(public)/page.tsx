import Link from "next/link";
import type { Metadata } from "next";
import {
  ActivityCarousel,
  DeaneryCard,
  DioceseMap,
  LandingCookieConsent,
  PortalFooter,
  PortalHeader,
  PublicContact,
  PublicPhoto,
} from "@/components/portal";
import { getPublicDirectory } from "@/modules/organisation/public";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "CV-AV Daloa | Grandir, servir et avancer ensemble",
  description: "Découvrez le mouvement Cœurs Vaillants – Âmes Vaillantes, retrouvez les paroisses du diocèse de Daloa et contactez une équipe près de chez vous.",
};

const faqs = [
  ["À qui s’adresse le mouvement CV-AV ?", "Le mouvement Cœurs Vaillants – Âmes Vaillantes accompagne les jeunes dans les paroisses du diocèse de Daloa. Les informations propres à chaque paroisse sont indiquées dans l’annuaire."],
  ["Comment trouver une paroisse ?", "Recherchez son nom, sa ville ou son doyenné dans l’annuaire. Chaque fiche indique aussi le niveau de documentation disponible."],
  ["Comment demander à rejoindre le mouvement ?", "Écrivez-nous avec le formulaire de contact. Votre demande sera transmise au responsable concerné ; elle ne crée pas automatiquement un compte."],
  ["Qui peut voir les informations de mon compte ?", "Les comptes sont personnels et les informations privées ne sont pas publiées dans l’annuaire. Les accès des responsables sont limités à leur rôle et à leur périmètre."],
];

const branches = [
  { name: "Benjamin", text: "Un premier parcours au sein du mouvement." },
  { name: "Cadet", text: "Un chemin qui prend de l’ampleur avec le groupe." },
  { name: "Aîné", text: "Une place active dans la vie et le service." },
  { name: "Meneur", text: "Un parcours distinct des fonctions de chef." },
];

export default async function LandingPage() {
  const directory = await getPublicDirectory();
  const parishCount = directory.reduce((sum, doyenne) => sum + doyenne.paroisses.length, 0);

  return (
    <div className="min-h-screen overflow-x-clip bg-surface text-on-surface">
      <PortalHeader />
      <main>
        <section id="accueil" className="scroll-mt-24 bg-sand">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-8 sm:px-8 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-12 lg:px-12 lg:py-14">
            <div className="flex flex-col justify-center py-4 sm:py-8 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Cœurs Vaillants – Âmes Vaillantes · Diocèse de Daloa</p>
              <h1 className="mt-5 max-w-2xl font-display-lg text-display-lg leading-[1.08] text-primary sm:text-6xl">Grandir, servir et avancer ensemble.</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">Découvrez le mouvement, retrouvez les paroisses du diocèse et prenez contact avec une équipe près de chez vous.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/paroisses" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Trouver une paroisse</Link>
                <Link href="#mouvement" className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/25 px-6 font-semibold text-primary transition-colors hover:bg-surface-container-lowest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Découvrir le mouvement</Link>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-5 border-t border-outline-variant pt-5 sm:grid-cols-3">
                <div><strong className="block text-2xl tabular-nums text-primary">{directory.length}</strong><span className="text-sm text-on-surface-variant">doyennés référencés</span></div>
                <div><strong className="block text-2xl tabular-nums text-primary">{parishCount}</strong><span className="text-sm text-on-surface-variant">paroisses listées</span></div>
                <div className="col-span-2 sm:col-span-1"><span className="text-sm leading-6 text-on-surface-variant">Données présentées selon leur niveau de vérification.</span></div>
              </div>
            </div>
            <figure className="relative min-h-[22rem] overflow-hidden rounded-feature bg-surface-container-low sm:min-h-[30rem] lg:min-h-[36rem]">
              <PublicPhoto src="/assets/public/hero-cvav.webp" alt="Jeunes du mouvement CV-AV lors d’une activité" label="Ajouter la photo principale du mouvement" className="absolute inset-0" sizes="(max-width: 1024px) 100vw, 56vw" priority />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-card bg-primary p-4 text-on-primary sm:inset-x-6 sm:bottom-6 sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-tertiary-fixed">Une présence dans le diocèse</span>
                <span className="mt-1 block text-sm leading-6 text-primary-fixed">Un annuaire pour s’orienter, un espace privé pour chaque membre.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="mouvement" className="scroll-mt-24 mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Le mouvement</p><h2 className="mt-4 max-w-xl font-display-lg text-display-lg text-primary">Une aventure humaine, portée par les paroisses.</h2></div>
            <p className="max-w-2xl text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">Le portail rassemble les repères publics du CV-AV dans le diocèse de Daloa. Les informations d’organisation restent distinctes des données personnelles des membres.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Link href="/paroisses" className="group flex min-h-[19rem] flex-col justify-between rounded-feature bg-primary p-6 text-on-primary transition-colors hover:bg-primary-container sm:p-9">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-tertiary-fixed">Annuaire territorial</p><h3 className="mt-5 max-w-lg font-headline-lg text-headline-lg sm:text-4xl">Commencez par votre paroisse.</h3></div>
              <span className="flex items-center justify-between gap-4 border-t border-primary-fixed-dim/40 pt-4 text-sm text-primary-fixed"><span>Parcourir les doyennés et les paroisses</span><span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
            </Link>
            <div className="flex flex-col justify-between rounded-feature border border-outline-variant bg-surface-container-low p-6 sm:p-9">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Espace membre</p><h3 className="mt-5 max-w-md font-headline-lg text-headline-lg text-primary">Un accès personnel, selon votre rôle.</h3><p className="mt-4 max-w-md leading-7 text-on-surface-variant">Les responsables et les membres utilisent leurs propres comptes. Les droits suivent leur fonction et leur rattachement.</p></div>
              <Link href="/login" className="mt-8 inline-flex min-h-11 items-center self-start rounded-full border border-primary/25 px-5 font-semibold text-primary transition-colors hover:bg-surface-container-lowest">Accéder à mon espace <span className="ml-3" aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section id="parcours" className="scroll-mt-24 bg-surface-container-low">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Les parcours</p><h2 className="mt-4 max-w-2xl font-display-lg text-display-lg text-primary">Des repères selon les âges et les responsabilités.</h2></div><p className="max-w-lg text-sm leading-6 text-on-surface-variant">Les grades et les fonctions de chef sont des notions différentes. Un grade ne confère pas, à lui seul, un accès d’administration.</p></div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {branches.map((branch, index) => <article key={branch.name} className="flex min-h-48 flex-col justify-between rounded-card border border-outline-variant bg-surface-container-lowest p-5 sm:p-6"><span className="text-xs font-semibold tabular-nums text-secondary">0{index + 1}</span><div><h3 className="font-headline-md text-headline-md text-primary">{branch.name}</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">{branch.text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="activites" className="scroll-mt-24 mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_0.7fr] sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">La vie du mouvement</p><h2 className="mt-4 max-w-2xl font-display-lg text-display-lg text-primary">Des souvenirs à partager.</h2></div><p className="max-w-lg text-sm leading-6 text-on-surface-variant">Les photos sont à ajouter dans le dossier public indiqué dans le projet. Seuls les visuels autorisés doivent être publiés.</p></div>
          <ActivityCarousel />
        </section>

        <section id="territoire" className="scroll-mt-24 bg-sand">
          <div className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-12 lg:py-24">
            <DioceseMap doyennes={directory} />
            <div className="rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Parcourir le territoire</p><h2 className="mt-3 font-display-lg text-display-lg text-primary">Les doyennés.</h2></div><Link href="/paroisses" className="inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 hover:underline">Tout l’annuaire <span className="ml-2" aria-hidden="true">↗</span></Link></div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{directory.map((doyenne) => <DeaneryCard key={doyenne.id} id={doyenne.id} name={doyenne.name} parishCount={doyenne.paroisses.length} hasUnverifiedParishes={doyenne.paroisses.some((paroisse) => paroisse.confidence !== "CONFIRMED_CURRENT")} />)}</div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Questions fréquentes</p><h2 className="mt-4 max-w-lg font-display-lg text-display-lg text-primary">Avant de nous écrire.</h2><p className="mt-5 max-w-md leading-7 text-on-surface-variant">Les repères essentiels pour les familles, les jeunes et les responsables.</p></div>
          <div className="border-t border-outline-variant">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-outline-variant"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-semibold text-primary marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><span>{question}</span><span className="text-xl font-normal text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-2xl pb-5 pr-8 leading-7 text-on-surface-variant">{answer}</p></details>)}</div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-surface-container-low">
          <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12 lg:py-24">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Contact</p><h2 className="mt-4 max-w-lg font-display-lg text-display-lg text-primary">Votre prochaine étape commence ici.</h2><p className="mt-5 max-w-md leading-7 text-on-surface-variant">Une question sur le mouvement, une paroisse ou une demande pour rejoindre une équipe ? Écrivez-nous, sans créer de compte membre.</p><p className="mt-6 border-l-2 border-tertiary-fixed-dim pl-4 text-sm leading-6 text-on-surface-variant">Votre message est transmis au responsable concerné. Les coordonnées privées ne sont pas affichées dans l’annuaire.</p></div>
            <div className="rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-8"><PublicContact /></div>
          </div>
        </section>
      </main>
      <PortalFooter />
      <LandingCookieConsent />
    </div>
  );
}
