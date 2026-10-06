// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pr_inscription_tape_1_identit_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pr inscription tape 1 identit cvav platform — Domaine : Portail & Inscriptions

export default function PrInscriptionTape1IdentitCvavPlatform() {
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
            <span className="font-title-md text-title-md text-primary leading-tight">Étape 1 Identité</span>
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
    <div className="flex flex-col w-full px-gutter-mobile py-space-md max-w-[420px] mx-auto">
      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col">
        <div className="flex items-center justify-between gap-space-xs mb-space-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary">
            <span className="material-symbols-outlined text-[14px] text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              church
            </span>
            {" "}
            <span className="font-label-sm text-label-sm font-semibold tracking-wide">
              Diocèse de Daloa • Inscription 2024-2025
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full font-medium">
            1/3
          </span>
        </div>
        <div className="w-full flex flex-col gap-2 mb-space-lg">
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-on-tertiary-container transition-all" />
              <span className="font-label-sm text-label-sm font-semibold text-primary">1. Identité</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-surface-container-high transition-all" />
              <span className="font-label-sm text-label-sm text-outline">2. Contact</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-surface-container-high transition-all" />
              <span className="font-label-sm text-label-sm text-outline">3. Paroisse</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-space-lg">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Qui es-tu ?</h1>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[14px]">
              {" ✨ "}
            </span>
          </div>
          <p className="font-body-md text-body-md text-secondary">
            {" Renseigne tes informations personnelles pour démarrer ton parcours au sein du mouvement. "}
          </p>
        </div>
        <form className="flex flex-col gap-space-md" id="identity-form">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary flex items-center gap-1 font-semibold" htmlFor="nom-input">
              {" Nom de famille "}
              <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input autoComplete="family-name" className="w-full h-11 px-3.5 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md rounded-xl shadow-none outline-none focus:outline-none transition-colors" id="nom-input" name="nom" placeholder="Ex : KOUASSI" required type="text" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary flex items-center gap-1 font-semibold" htmlFor="prenoms-input">
              {" Prénom(s) "}
              <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input autoComplete="given-name" className="w-full h-11 px-3.5 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md rounded-xl shadow-none outline-none focus:outline-none transition-colors" id="prenoms-input" name="prenoms" placeholder="Ex : Ange-Emmanuel" required type="text" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-label-md text-label-md text-primary flex items-center gap-1 font-semibold" htmlFor="birth-input">
                {" Date de naissance "}
                <span className="text-error">*</span>
              </label>
              {" "}
              <span className="font-label-sm text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded-full">
                {" Âge cible : 6 à 18 ans "}
              </span>
            </div>
            <div className="relative flex items-center">
              <input className="w-full h-11 pl-3.5 pr-10 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-xl outline-none focus:outline-none transition-colors" id="birth-input" name="birthdate" required type="date" />
              {" "}
              <span className="material-symbols-outlined absolute right-3 pointer-events-none text-secondary text-[20px]">
                {" calendar_today "}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-label-md text-label-md text-primary flex items-center gap-1 font-semibold">
              {" Sexe "}
              <span className="text-error">*</span>
            </span>
            <div aria-label="Sexe" className="grid grid-cols-2 gap-space-sm pt-0.5" id="gender-group" role="radiogroup">
              <label className="gender-pill group relative cursor-pointer flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-primary text-on-primary transition-all select-none shadow-sm" data-value="garcon">
                <input defaultChecked className="sr-only" name="sexe" type="radio" defaultValue="garcon" />
                {" "}
                <span className="material-symbols-outlined text-[18px]">boy</span>
                {" "}
                <span className="font-label-md text-label-md font-semibold">Garçon</span>
              </label>
              <label className="gender-pill group relative cursor-pointer flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-all select-none" data-value="fille">
                <input className="sr-only" name="sexe" type="radio" defaultValue="fille" />
                {" "}
                <span className="material-symbols-outlined text-[18px]">girl</span>
                {" "}
                <span className="font-label-md text-label-md font-semibold">Fille</span>
              </label>
            </div>
          </div>
          <div className="pt-space-md flex items-center justify-between gap-space-sm mt-1">
            <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1 py-2 px-1 focus:outline-none" href="#">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              {" "}
              <span>Annuler</span>
            </a>
            {" "}
            <button className="h-11 px-6 rounded-full bg-on-tertiary-container hover:opacity-90 active:scale-95 text-on-primary font-label-md text-label-md font-semibold flex items-center gap-1.5 shadow-sm transition-all focus:outline-none" id="btn-next" type="submit">
              <span>Suivant</span>
              {" "}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-space-md px-space-sm flex items-start justify-center gap-2 text-center text-secondary">
        <span className="material-symbols-outlined text-[16px] text-outline flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
          {" verified_user "}
        </span>
        <p className="font-label-sm text-label-sm leading-relaxed max-w-[340px]">
          {" Données protégées sous la Charte Diocésaine de Protection des Mineurs et de la Pastorale de l'Enfance. "}
        </p>
      </div>
      <div className="mt-space-md w-full bg-surface-container-low rounded-2xl p-space-sm flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 shadow-sm">
          <img className="w-full h-full object-cover" data-alt="Young enthusiastic African boys and girls wearing diocesan youth scout scarves in Ivory Coast, gathering joyful under sunlight outside Saint Anne cathedral, warm ochre highlights, dignified church celebration." src="/assets/image-placeholder.svg" />
        </div>
        <div className="flex flex-col min-w-0 pr-1">
          <span className="font-label-sm text-label-sm font-semibold text-primary truncate">
            Rejoins les Vaillants & Vaillantes
          </span>
          <p className="font-body-sm text-body-sm text-secondary truncate">
            Une fraternité active dans toutes les paroisses du pays.
          </p>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
