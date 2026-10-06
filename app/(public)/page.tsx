import Image from "next/image";
import Link from "next/link";
import {
  ActivityCarousel,
  DeaneryCard,
  DioceseMap,
  PortalFooter,
  PortalHeader,
  PublicContact,
} from "@/components/portal";
import { getPublicDirectory } from "@/modules/organisation/public";

export const dynamic = "force-dynamic";

const values = [
  { number: "01", title: "Grandir", text: "Un parcours adapté à chaque âge, du Benjamin au Meneur, sans confondre grade et responsabilité." },
  { number: "02", title: "Servir", text: "Des activités et des engagements qui relient la vie du mouvement à la vie des paroisses." },
  { number: "03", title: "Faire confiance", text: "Un référentiel documenté, des données signalées et un espace privé pour chaque membre." },
];

const branches = [
  ["Benjamin", "Découvrir le mouvement"],
  ["Cadet", "Apprendre avec les autres"],
  ["Aîné", "Prendre sa place"],
  ["Meneur", "Accompagner et transmettre"],
];

const faqs = [
  ["À qui s’adresse le mouvement CV-AV ?", "Le mouvement accueille les jeunes et les accompagnateurs dans les paroisses du diocèse de Daloa, avec un parcours adapté aux âges et aux responsabilités."],
  ["Comment trouver une paroisse ?", "Consultez l’annuaire public, recherchez une paroisse ou un doyenné, puis utilisez la fiche de la paroisse pour prendre contact avec le responsable indiqué."],
  ["Qui peut consulter les informations des membres ?", "Les informations personnelles restent dans l’espace privé du membre. Les responsables ne voient que les données nécessaires à leur fonction et à leur périmètre."],
  ["Comment demander à rejoindre le mouvement ?", "Envoyez un message depuis le formulaire de contact en choisissant « Rejoindre le mouvement ». La demande est orientée vers le responsable concerné."],
];

export default async function LandingPage() {
  const directory = await getPublicDirectory();
  const parishCount = directory.reduce((count, doyenne) => count + doyenne.paroisses.length, 0);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-surface text-on-surface">
      <PortalHeader />
      <main>
        <section id="accueil" className="scroll-mt-24 overflow-hidden bg-primary text-on-primary">
          <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 py-14 sm:gap-14 sm:px-10 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-16 lg:py-28 xl:px-24">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-tertiary-fixed">Mouvement CV-AV · Diocèse de Daloa</p>
              <h1 className="max-w-4xl font-display-lg text-display-lg leading-tight sm:text-6xl">Grandir, servir et avancer ensemble.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-fixed">Le portail du mouvement Cœurs Vaillants - Âmes Vaillantes pour retrouver les paroisses, découvrir les parcours et rejoindre un cadre qui compte.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link href="/paroisses" className="rounded-full bg-tertiary-fixed-dim px-6 py-3.5 font-semibold text-on-tertiary-fixed hover:bg-tertiary-fixed">Trouver ma paroisse</Link><Link href="#contact" className="rounded-full border border-primary-fixed-dim px-6 py-3.5 font-semibold text-on-primary hover:bg-primary-container">Nous contacter</Link></div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-2 border-t border-primary-container pt-5 text-sm sm:mt-12 sm:gap-5"><div className="min-w-0"><strong className="block text-2xl text-on-primary">1</strong><span className="block break-words text-primary-fixed">diocèse</span></div><div className="min-w-0"><strong className="block text-2xl text-on-primary">{directory.length}</strong><span className="block break-words text-primary-fixed">doyennés</span></div><div className="min-w-0"><strong className="block text-2xl text-on-primary">{parishCount}</strong><span className="block break-words text-primary-fixed">paroisses documentées</span></div></div>
            </div>
            <div className="relative min-h-[420px] border-t border-primary-container pt-8 lg:min-h-[420px] lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="absolute right-0 top-0 h-24 w-24 border-r border-t border-tertiary-fixed-dim" aria-hidden="true" />
              <div className="flex h-full flex-col justify-between py-4">
                <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-tertiary-fixed">Un portail pour</p><p className="mt-5 max-w-sm font-headline-md text-headline-md">Les jeunes, les familles, les chefs et les paroisses.</p></div>
                <div className="relative mx-auto w-full max-w-sm rounded-[1.75rem] border border-primary-fixed-dim/40 bg-primary-container p-5 sm:p-8"><div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><Image src="/assets/cvav-emblem.png" alt="Emblème du mouvement CV-AV" width={120} height={120} className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24" priority /><div><p className="text-xs uppercase tracking-[0.16em] text-tertiary-fixed">Repère diocésain</p><p className="mt-2 font-title-md text-title-md text-on-primary">Daloa 2026</p><p className="mt-2 text-sm leading-5 text-primary-fixed">Une structure lisible. Des données identifiables. Un espace personnel.</p></div></div></div>
                <p className="max-w-sm text-sm leading-6 text-primary-fixed">La composition des paroisses est publiée avec son niveau de fiabilité. Une donnée à vérifier n’est jamais présentée comme une certitude.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant/60 bg-surface-container-lowest" aria-label="Repères de confiance"><div className="mx-auto grid w-full max-w-[1600px] gap-0 px-5 sm:px-10 lg:px-16 xl:px-24 md:grid-cols-3">{["Un annuaire diocésain", "Des sources visibles", "Un espace personnel"].map((item, index) => <div key={item} className="border-b border-outline-variant/50 py-5 text-sm last:border-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="mr-3 font-semibold text-tertiary-container">0{index + 1}</span><span className="font-semibold text-primary">{item}</span></div>)}</div></section>

        <section id="mouvement" className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Le mouvement</p><h2 className="mt-4 max-w-xl font-display-lg text-display-lg text-primary">Une présence qui commence dans chaque paroisse.</h2></div><p className="max-w-2xl text-lg leading-8 text-on-surface-variant">CV-AV rassemble des enfants, des jeunes et des accompagnateurs autour d’un parcours de formation, de fraternité et de service. Le portail rend cette organisation plus facile à comprendre sans exposer les données privées des membres.</p></div><div className="mt-14 grid gap-8 md:grid-cols-3">{values.map((value) => <article key={value.number} className="border-t-2 border-primary pt-5"><span className="text-sm font-semibold text-tertiary-container">{value.number}</span><h3 className="mt-5 font-headline-md text-headline-md text-primary">{value.title}</h3><p className="mt-3 leading-7 text-on-surface-variant">{value.text}</p></article>)}</div></section>

        <section id="parcours" className="scroll-mt-24 bg-[#f1eee7] px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto w-full max-w-[1600px]"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Les parcours</p><h2 className="mt-4 font-display-lg text-display-lg text-primary">Chacun avance à son rythme.</h2></div><p className="max-w-md text-sm leading-6 text-on-surface-variant">Les grades décrivent un parcours. Ils ne donnent pas automatiquement accès à l’administration de la plateforme.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-outline-variant/70 bg-outline-variant/70 sm:grid-cols-2 lg:grid-cols-4">{branches.map(([name, text], index) => <article key={name} className="bg-[#f1eee7] p-6"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">0{index + 1}</span><h3 className="mt-12 font-headline-md text-headline-md text-primary">{name}</h3><p className="mt-3 text-sm leading-6 text-on-surface-variant">{text}</p></article>)}</div></div></section>

        <section id="activites" className="scroll-mt-24 mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24"><div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Archives du mouvement</p><h2 className="mt-4 max-w-2xl font-display-lg text-display-lg text-primary">Ce qui se vit sur le terrain.</h2></div><p className="max-w-md text-sm leading-6 text-on-surface-variant">Une galerie sobre, alimentée avec les photos validées par les responsables et les autorisations nécessaires.</p></div><ActivityCarousel /></section>

        <section id="territoire" className="scroll-mt-24 bg-surface-container-low px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto grid w-full max-w-[1600px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"><DioceseMap /><div className="rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-5 sm:p-8"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Annuaire diocésain</p><h2 className="mt-3 font-display-lg text-display-lg text-primary">Choisir un doyenné.</h2></div><Link href="/paroisses" className="font-semibold text-primary hover:underline">Voir tout l’annuaire →</Link></div><div className="mt-8 grid gap-3 sm:grid-cols-2">{directory.map((doyenne) => <DeaneryCard key={doyenne.id} id={doyenne.id} name={doyenne.name} parishCount={doyenne.paroisses.length} hasUnverifiedParishes={doyenne.paroisses.some((paroisse) => paroisse.confidence !== "CONFIRMED_CURRENT")} />)}</div></div></div></section>

        <section id="faq" className="scroll-mt-24 mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Questions fréquentes</p><h2 className="mt-4 max-w-lg font-display-lg text-display-lg text-primary">Les réponses avant de commencer.</h2><p className="mt-5 max-w-md leading-7 text-on-surface-variant">Un vocabulaire simple pour les familles, les jeunes et les responsables qui découvrent le mouvement.</p></div><div className="border-t border-outline-variant">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-outline-variant"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-primary"><span>{question}</span><span className="text-xl font-normal text-secondary transition-transform group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-5 pr-10 leading-7 text-on-surface-variant">{answer}</p></details>)}</div></div></section>

        <section id="contact" className="bg-[#f1eee7] px-5 py-20 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto grid w-full max-w-[1600px] gap-10 rounded-[2rem] border border-outline-variant bg-[#f7f4ed] p-6 sm:p-10 lg:grid-cols-[0.65fr_1.35fr] lg:p-14"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Nous contacter</p><h2 className="mt-4 max-w-md font-display-lg text-display-lg text-primary">Une question ? Parlons-en.</h2><p className="mt-5 max-w-md leading-7 text-on-surface-variant">Ce formulaire est destiné aux familles, aux jeunes, aux responsables et aux partenaires. Il ne crée pas automatiquement un compte membre.</p><div className="mt-8 border-l-2 border-tertiary-container pl-4 text-sm leading-6 text-on-surface-variant">Votre message est routé vers le bon responsable. Les informations personnelles ne sont pas publiées dans l’annuaire.</div></div><PublicContact /></div></section>

        <section className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-24"><div className="grid gap-8 rounded-[2rem] border border-primary bg-primary p-8 text-on-primary sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-fixed">Prêt à commencer ?</p><h2 className="mt-4 max-w-2xl font-display-lg text-display-lg">Commencez par trouver votre paroisse.</h2><p className="mt-4 max-w-xl leading-7 text-primary-fixed">L’annuaire est public. L’espace membre, lui, reste personnel et protégé par les droits de chaque compte.</p></div><Link href="/paroisses" className="inline-flex justify-center rounded-xl bg-tertiary-fixed-dim px-6 py-3.5 font-semibold text-on-tertiary-fixed hover:bg-tertiary-fixed">Consulter l’annuaire</Link></div></section>
      </main>
      <PortalFooter />
    </div>
  );
}
