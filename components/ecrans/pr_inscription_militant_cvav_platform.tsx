// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pr_inscription_militant_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pr inscription militant cvav platform — Domaine : Portail & Inscriptions

export default function PrInscriptionMilitantCvavPlatform() {
  return (
    <div className="bg-surface text-on-surface antialiased">
  <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="h-16 px-gutter-mobile flex items-center justify-between">
      <div className="flex items-center gap-space-sm min-w-0">
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col min-w-0">
          <span className="font-title-md text-title-md text-primary truncate leading-tight">CVAV Platform</span>
          <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-wider uppercase truncate">
            Diocèse de Côte d'Ivoire
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-sm shrink-0">
        <span className="hidden sm:inline-block font-label-md text-label-md text-secondary">
          Inscriptions Mouvements
        </span>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="relative w-full pt-16 pb-20 bg-surface min-h-screen">
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary text-on-primary px-margin-mobile pt-space-lg pb-space-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-10 w-44 h-44 rounded-full bg-on-tertiary-container/15 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-space-sm max-w-xl mx-auto">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/15 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-sm">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield_with_heart
              </span>
              {" Campagne Pastorale 2024–2025 "}
            </span>
            {" "}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-on-tertiary-container/20 text-tertiary-fixed-dim font-label-sm text-label-sm font-semibold">
              {" Étape 1 / 3 "}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight text-on-primary">
              {" Pré-inscription Pastorale "}
            </h1>
            <p className="font-body-md text-body-md text-primary-fixed-dim">
              {" Archidiocèse d'Abidjan & Diocèses de Côte d'Ivoire "}
            </p>
          </div>
          <div className="mt-space-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between font-label-sm text-label-sm text-primary-fixed-dim">
              <span className="font-semibold text-tertiary-fixed-dim">1. Fiche d'adhésion</span>
              {" "}
              <span>2. Fiche Santé</span>
              {" "}
              <span>3. Validation</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-lowest/20 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-fixed-dim rounded-full transition-all duration-300" style={{ width: "35%" }} />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full px-margin-mobile -mt-4 pb-space-xl flex flex-col gap-space-md max-w-xl mx-auto">
        <div className="bg-surface-container-lowest rounded-2xl p-1.5 shadow-[0_4px_20px_-2px_rgba(27,42,74,0.06)] flex items-center justify-between">
          <button className="flex-1 py-2.5 px-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all shadow-sm" id="btn-parent-mode" type="button">
            <span className="material-symbols-outlined text-[18px]">family_restroom</span>
            {" "}
            <span>Parent / Tuteur</span>
          </button>
          {" "}
          <button className="flex-1 py-2.5 px-3 rounded-xl text-secondary hover:text-primary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all" id="btn-cadet-mode" type="button">
            <span className="material-symbols-outlined text-[18px]">person_celebrate</span>
            {" "}
            <span>Cadet (16 ans +)</span>
          </button>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05)] flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container-highest/60">
            <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">location_city</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline-sm text-headline-sm text-primary">
                1. Juridiction & Paroisse d'accueil
              </h2>
              <span className="font-body-sm text-body-sm text-secondary">
                Rattachement au registre diocésain
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="diocese-select">
                {" Diocèse d'appartenance "}
                <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 pr-9 appearance-none focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="diocese-select" defaultValue="abidjan" />
                {" "}
                <span className="material-symbols-outlined text-secondary absolute right-3 top-3.5 pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="doyenne-select">
                {" Doyenné / Secteur pastoral "}
                <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 pr-9 appearance-none focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="doyenne-select" defaultValue="d1" />
                {" "}
                <span className="material-symbols-outlined text-secondary absolute right-3 top-3.5 pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="paroisse-select">
                {" Paroisse locale "}
                <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 pr-9 appearance-none focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="paroisse-select" defaultValue="p1" />
                {" "}
                <span className="material-symbols-outlined text-secondary absolute right-3 top-3.5 pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="mt-1 p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-space-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  sync
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                    Section Paroissiale liée
                  </span>
                  {" "}
                  <span className="font-title-md text-title-md text-primary truncate">
                    Section Saint-Jean Apôtre
                  </span>
                </div>
              </div>
              <span className="inline-flex px-2 py-0.5 rounded-full bg-surface-variant font-label-sm text-label-sm text-on-surface-variant shrink-0">
                {" Active "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05)] flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container-highest/60">
            <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">child_care</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline-sm text-headline-sm text-primary">2. Identité du Militant</h2>
              <span className="font-body-sm text-body-sm text-secondary">
                Attribution automatique de la branche pastorale
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="militant-nom">
                {" Nom et Prénoms de l'enfant "}
                <span className="text-error">*</span>
              </label>
              {" "}
              <input className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="militant-nom" placeholder="Ex: Koffi Marie-Grâce" type="text" defaultValue="Kouassi Ange-Emmanuel" />
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="birth-date">
                  {" Date de naissance "}
                  <span className="text-error">*</span>
                </label>
                {" "}
                <input className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="birth-date" type="date" defaultValue="2012-05-14" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  {" Genre "}
                  <span className="text-error">*</span>
                </label>
                <div className="h-12 grid grid-cols-2 gap-1 p-1 bg-surface-container-low rounded-xl">
                  <button className="rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold shadow-xs flex items-center justify-center" type="button">
                    {" Garçon "}
                  </button>
                  {" "}
                  <button className="rounded-lg text-secondary font-label-md text-label-md flex items-center justify-center" type="button">
                    {" Fille "}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary-container/40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">cake</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-secondary-container font-medium">
                  Âge calculé au 1er octobre 2024 :
                </span>
              </div>
              <span className="font-title-md text-title-md text-primary font-bold">12 ans</span>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary p-3.5 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                  {" Branche attribuée "}
                </span>
                {" "}
                <span className="font-label-sm text-label-sm text-primary-fixed-dim font-medium">
                  Foulard Bleu & Ocre
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-title-md text-title-md text-on-primary font-bold">
                  Cœurs Vaillants (10–14 ans)
                </h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim italic mt-0.5">
                  {" « Toujours Joyeux, Servir en Tout ! » "}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="font-label-md text-label-md text-primary font-semibold">
                {"Statut dans le mouvement CV-AV "}
                <span className="text-error">*</span>
              </span>
              <div className="grid grid-cols-2 gap-2">
                <label className="cursor-pointer">
                  <input className="sr-only peer" name="movement-status" type="radio" defaultValue="new" />
                  <div className="p-3 rounded-xl bg-surface-container-low peer-checked:bg-primary peer-checked:text-on-primary flex flex-col gap-0.5 transition-all text-left">
                    <span className="font-label-md text-label-md font-semibold">Nouveau membre</span>
                    {" "}
                    <span className="font-label-sm text-label-sm opacity-80">1ère année d'enrôlement</span>
                  </div>
                </label>
                {" "}
                <label className="cursor-pointer">
                  <input defaultChecked className="sr-only peer" name="movement-status" type="radio" defaultValue="renewal" />
                  <div className="p-3 rounded-xl bg-surface-container-low peer-checked:bg-primary peer-checked:text-on-primary flex flex-col gap-0.5 transition-all text-left">
                    <span className="font-label-md text-label-md font-semibold">Renouvellement</span>
                    {" "}
                    <span className="font-label-sm text-label-sm opacity-80">Ancien militant actif</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-1 p-3 rounded-xl bg-surface-container-low">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="matricule-input">
                  {" Matricule Diocésain Existant "}
                </label>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">Sur l'ancienne carte</span>
              </div>
              <div className="relative">
                <input className="w-full h-11 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.15)]" id="matricule-input" type="text" defaultValue="CVAV-ABJ-2023-8842" />
                {" "}
                <span className="material-symbols-outlined text-on-tertiary-container absolute right-3 top-3 text-[18px]">
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05)] flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container-highest/60">
            <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">supervisor_account</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline-sm text-headline-sm text-primary">
                3. Responsable Légal & Urgences
              </h2>
              <span className="font-body-sm text-body-sm text-secondary">
                Canaux d'information et convocations des réunions
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="parent-name">
                {" Nom complet du parent ou tuteur légal "}
                <span className="text-error">*</span>
              </label>
              {" "}
              <input className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="parent-name" placeholder="Ex: Kouassi Christian" type="text" defaultValue="Kouassi Christian Eric" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between" htmlFor="parent-phone">
                <span>
                  {"Numéro de téléphone principal (WhatsApp actif) "}
                  <span className="text-error">*</span>
                </span>
              </label>
              <div className="relative flex">
                <span className="inline-flex items-center px-3.5 rounded-l-xl bg-surface-container-high text-primary font-label-md text-label-md font-semibold select-none">
                  {" +225 "}
                </span>
                {" "}
                <input className="flex-1 h-12 rounded-r-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="parent-phone" placeholder="07 00 00 00 00" type="tel" defaultValue="07 08 45 23 12" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="parent-alt-phone">
                {" Numéro d'urgence alternatif (Second parent / Domicile) "}
                <span className="text-error">*</span>
              </label>
              <div className="relative flex">
                <span className="inline-flex items-center px-3.5 rounded-l-xl bg-surface-container-high text-primary font-label-md text-label-md font-semibold select-none">
                  {" +225 "}
                </span>
                {" "}
                <input className="flex-1 h-12 rounded-r-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="parent-alt-phone" placeholder="05 00 00 00 00" type="tel" defaultValue="05 44 12 89 00" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="parent-address">
                {" Lieu de résidence & Commune "}
                <span className="text-error">*</span>
              </label>
              {" "}
              <input className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="parent-address" placeholder="Ex: Cocody Angré 8e Tranche" type="text" defaultValue="Cocody Angré 8e Tranche, Cité Soleil 2" />
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05)] flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container-highest/60">
            <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline-sm text-headline-sm text-primary">
                4. Sacrements & Vie Spirituelle
              </h2>
              <span className="font-body-sm text-body-sm text-secondary">
                Accompagnement catéchétique de l'enfant
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-primary font-semibold">
              Sacrements déjà reçus dans l'Église :
            </span>
            <div className="grid grid-cols-1 gap-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    water_drop
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-semibold">Baptisé(e)</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Baptême dans l'Église Catholique
                    </span>
                  </div>
                </div>
                <input defaultChecked className="w-5 h-5 rounded-md text-on-tertiary-container accent-on-tertiary-container" type="checkbox" />
              </label>
              {" "}
              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    bakery_dining
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Première Communion
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">Sacrement de l'Eucharistie</span>
                  </div>
                </div>
                <input defaultChecked className="w-5 h-5 rounded-md text-on-tertiary-container accent-on-tertiary-container" type="checkbox" />
              </label>
              {" "}
              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    local_fire_department
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Profession de Foi
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Renouvellement solennel de la foi
                    </span>
                  </div>
                </div>
                <input className="w-5 h-5 rounded-md text-on-tertiary-container accent-on-tertiary-container" type="checkbox" />
              </label>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="paroisse-bapteme">
                {" Paroisse de célébration du baptême "}
                <span className="font-normal text-secondary">(si connu)</span>
              </label>
              {" "}
              <input className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim shadow-[inset_0_0_0_1px_rgba(68,84,106,0.2)]" id="paroisse-bapteme" type="text" defaultValue="Saint-Pierre Claver de Bonoua (2014)" />
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-space-md bg-secondary-container/40 flex flex-col gap-space-xs shadow-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              info
            </span>
            <h3 className="font-title-md text-title-md text-primary font-bold">
              Contribution Pastorale Annuelle
            </h3>
          </div>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {" La cotisation annuelle diocésaine est fixée à "}
            <strong className="text-primary font-semibold">3 000 FCFA</strong>
            {". Elle comprend le carnet officiel du militant, l'assurance pastorale paroissiale ainsi que la délivrance de la carte plastifiée avec QR Code diocésain. "}
          </p>
          <div className="mt-1 flex items-center gap-2 text-on-tertiary-container font-label-md text-label-md font-semibold">
            <span className="material-symbols-outlined text-[18px]">payments</span>
            {" "}
            <span>Règlement direct lors du 1er rassemblement à la paroisse</span>
          </div>
        </div>
        <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05)] flex flex-col gap-space-sm">
          <label className="flex items-start gap-3 cursor-pointer">
            <input defaultChecked className="mt-1 w-5 h-5 rounded-md text-on-tertiary-container accent-on-tertiary-container shrink-0" type="checkbox" />
            {" "}
            <span className="font-body-sm text-body-sm text-secondary leading-relaxed">
              {" J'autorise mon enfant à participer assidûment aux rencontres, marches et activités pastorales des "}
              <strong className="text-primary font-semibold">Cœurs Vaillants – Âmes Vaillantes</strong>
              {", et certifie sur l'honneur l'exactitude des renseignements portés sur cette fiche. "}
            </span>
          </label>
        </div>
        <div className="flex flex-col gap-space-sm mt-1">
          <button className="w-full h-[50px] rounded-full bg-on-tertiary-container hover:bg-tertiary-container text-on-primary font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(186,137,31,0.35)] transition-all active:scale-[0.98]" type="button">
            <span>Continuer vers la Fiche Santé</span>
            {" "}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <div className="text-center py-1">
            <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[16px]">contact_support</span>
              {" "}
              <span>Besoin d'aide ? Contacter l'Aumônerie diocésaine</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <footer className="w-full px-gutter-mobile py-space-lg text-center bg-surface">
      <p className="font-title-md text-title-md text-on-tertiary-container mb-space-xs font-semibold">
        « Toujours Joyeux, Servir en Tout ! »
      </p>
      <p className="font-body-sm text-body-sm text-secondary">
        Assistance pastorale & secrétariat diocésain : +225 07 00 00 00
      </p>
    </footer>
  </main>
  <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(27,42,74,0.06)]" data-active-classes="text-on-tertiary-container font-semibold">
    <div className="flex justify-around items-center h-16 px-gutter-mobile">
      <a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-secondary hover:text-primary transition-colors" data-path="accueil-portal" href="#">
        <span className="material-symbols-outlined text-[22px]">church</span>
        <span className="font-label-sm text-label-sm mt-0.5">Portail</span>
      </a>
      <a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors text-on-tertiary-container font-semibold" data-path="inscriptions-mouvements" href="#">
        <span className="material-symbols-outlined text-[22px]">app_registration</span>
        <span className="font-label-sm text-label-sm mt-0.5">Adhésion</span>
      </a>
      <a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-secondary hover:text-primary transition-colors" data-path="paroisses-et-sections" href="#">
        <span className="material-symbols-outlined text-[22px]">diversity_3</span>
        <span className="font-label-sm text-label-sm mt-0.5">Sections</span>
      </a>
      <a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-secondary hover:text-primary transition-colors" data-path="assistance-et-contacts" href="#">
        <span className="material-symbols-outlined text-[22px]">contact_support</span>
        <span className="font-label-sm text-label-sm mt-0.5">Aide</span>
      </a>
    </div>
  </nav>
    </div>
  );
}
