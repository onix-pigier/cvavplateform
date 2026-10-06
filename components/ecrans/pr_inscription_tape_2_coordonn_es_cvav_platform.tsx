// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pr_inscription_tape_2_coordonn_es_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pr inscription tape 2 coordonn es cvav platform — Domaine : Portail & Inscriptions

export default function PrInscriptionTape2CoordonnEsCvavPlatform() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
  <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(4,21,52,0.04)] pt-safe">
    <div className="h-16 px-gutter-mobile flex items-center justify-between">
      <div className="flex items-center gap-space-sm">
        <a aria-label="Retour" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </a>
        <div className="flex items-center gap-space-sm">
          <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
              CV-AV CI
            </span>
            <span className="font-title-md text-title-md text-primary leading-tight">
              Étape 2 Diocèse Et Paroisse
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-xs">
        <a aria-label="Quitter le formulaire" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:text-error hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </a>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl">
      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-md mb-space-md">
        <div className="flex items-center justify-between gap-space-xs mb-space-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-full bg-tertiary-fixed-dim text-tertiary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[14px]">check</span>
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-secondary line-clamp-1">1. Identité</span>
          </div>
          <div className="flex-1 h-0.5 bg-tertiary-fixed-dim mx-1" />
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-full bg-tertiary-container text-tertiary-fixed flex items-center justify-center font-label-sm text-label-sm shadow-sm animate-pulse">
              {" 2 "}
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-primary font-semibold line-clamp-1">
              2. Coordonnées
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-surface-container-high mx-1" />
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm">
              {" 3 "}
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-secondary line-clamp-1">3. Paroisse</span>
          </div>
        </div>
        <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
          <div className="bg-tertiary-fixed-dim h-full rounded-full transition-all duration-500" style={{ width: "66.66%" }} />
        </div>
      </div>
      <div className="w-full bg-primary-container text-on-primary rounded-2xl p-space-md mb-space-md shadow-md flex items-center gap-space-md relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary-fixed/10 rounded-full blur-xl pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 shadow-inner">
          <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">call</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider font-semibold">
            Étape 2 sur 3
          </span>
          <h1 className="font-headline-md text-headline-md text-on-primary leading-tight">
            Comment te joindre ?
          </h1>
          <p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
            Coordonnées du jeune et de ses représentants légaux.
          </p>
        </div>
      </div>
      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-md p-5 flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px]">person_pin</span>
            <h2 className="font-title-md text-title-md text-primary">Contact principal</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary flex items-center justify-between" htmlFor="phone-input">
              <span>
                {"Numéro de téléphone "}
                <span className="text-error">*</span>
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-secondary font-normal">Jeune ou référent</span>
            </label>
            <div className="flex rounded-xl bg-surface-container-low focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all overflow-hidden">
              <div className="px-3 bg-surface-container flex items-center gap-1 text-primary shrink-0 select-none">
                <span className="font-label-md text-label-md font-semibold">+225</span>
                {" "}
                <span className="material-symbols-outlined text-secondary text-[16px]">arrow_drop_down</span>
              </div>
              <input className="w-full h-11 px-3 bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none" id="phone-input" maxLength={14} placeholder="Ex : 07 48 92 10 33" type="tel" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary" htmlFor="email-input">
              {" Adresse e-mail "}
            </label>
            <div className="flex items-center rounded-xl bg-surface-container-low focus-within:bg-surface-container-lowest focus-within:shadow-sm px-3 h-11 transition-all">
              <span className="material-symbols-outlined text-secondary text-[20px] mr-2">mail</span>
              {" "}
              <input className="w-full bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none" id="email-input" placeholder="contact@famille.ci" type="email" />
            </div>
            <p className="font-body-sm text-body-sm text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">info</span>
              {" Optionnel — pour recevoir les convocations et reçus de cotisation. "}
            </p>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-space-md">
          <div className="flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-[18px]">
                family_restroom
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-title-md text-title-md text-primary">Représentant légal</h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Obligatoire pour les jeunes mineurs (Âmes Vaillantes & Cœurs Vaillants).
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary" htmlFor="guardian-name">
              {" Nom du tuteur / parent "}
              <span className="text-error">*</span>
            </label>
            <div className="flex items-center rounded-xl bg-surface-container-lowest px-3 h-11 shadow-xs focus-within:shadow-sm transition-all">
              <span className="material-symbols-outlined text-secondary text-[20px] mr-2">badge</span>
              {" "}
              <input className="w-full bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none" id="guardian-name" placeholder="Ex : M. Michel KOUAME (Père / Tuteur légal)" type="text" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary" htmlFor="guardian-phone">
              {" Téléphone du tuteur / parent "}
              <span className="text-error">*</span>
            </label>
            <div className="flex rounded-xl bg-surface-container-lowest shadow-xs focus-within:shadow-sm transition-all overflow-hidden">
              <div className="px-3 bg-surface-container flex items-center gap-1 text-primary shrink-0 select-none">
                <span className="font-label-md text-label-md font-semibold">+225</span>
                {" "}
                <span className="material-symbols-outlined text-secondary text-[16px]">arrow_drop_down</span>
              </div>
              <input className="w-full h-11 px-3 bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none" id="guardian-phone" maxLength={14} placeholder="Ex : 07 00 12 34 56" type="tel" />
            </div>
            <p className="font-body-sm text-body-sm text-secondary flex items-start gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[15px] text-tertiary-container shrink-0 mt-0.5">
                notification_important
              </span>
              {" "}
              <span>Numéro joint en priorité absolue lors des sorties, camps et urgences.</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-surface-container rounded-xl p-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim" />
            {" "}
            <span className="font-label-sm text-label-sm text-secondary">Vérification SMS instantanée</span>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-semibold">
            Côte d'Ivoire (Orange, MTN, Moov)
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 pt-4">
          <button className="h-11 px-4 rounded-full text-secondary hover:text-primary active:bg-surface-container transition-colors flex items-center gap-1 font-label-lg text-label-lg" type="button">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            {" "}
            <span>Retour</span>
          </button>
          <button className="h-11 px-6 rounded-full bg-tertiary-fixed-dim text-tertiary hover:bg-tertiary-container hover:text-tertiary-fixed active:scale-98 transition-all font-label-lg text-label-lg shadow-sm flex items-center gap-2" id="btn-next-step" type="button">
            <span>Suivant</span>
            {" "}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 pt-1 text-center">
          <span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span>
          <p className="font-body-sm text-body-sm text-secondary max-w-xs">
            {" Les coordonnées restent strictement confidentielles et réservées à l'équipe pastorale diocésaine. "}
          </p>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
