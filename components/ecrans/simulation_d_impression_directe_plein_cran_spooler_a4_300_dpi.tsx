// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/simulation_d_impression_directe_plein_cran_spooler_a4_300_dpi/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Simulation d impression directe plein cran spooler a4 300 dpi — Domaine : Chancellerie & Bibliothèque

export default function SimulationDImpressionDirectePleinCranSpoolerA4300Dpi() {
  return (
    <div className="bg-surface-container-high font-body-md text-on-surface">
  <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-primary shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-margin flex items-center justify-between">
    <div className="flex items-center gap-space-lg">
      <div className="flex items-center gap-space-sm">
        <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">print</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-on-primary leading-tight">
            Aperçu d'Impression Diocésain
          </span>
          <span className="font-label-sm text-label-sm text-on-primary-container leading-tight">
            CV-AV • Daloa • Spouleur Précis
          </span>
        </div>
      </div>
      <div className="hidden xl:flex items-center gap-space-md bg-primary-container px-space-md py-1.5 rounded-full">
        <div className="flex items-center gap-space-xs text-on-primary font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">badge</span>
          <span className="">Badgeuse: Evolis Primacy 2 (USB/Réseau - Direct-to-Card)</span>
        </div>
        <div className="w-1 h-3 rounded-full bg-outline/40" />
        <div className="flex items-center gap-space-xs text-on-primary font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">credit_card</span>
          <span className="">Format: Carte PVC CR-80 (85.6 × 54 mm)</span>
        </div>
        <div className="w-1 h-3 rounded-full bg-outline/40" />
        <div className="flex items-center gap-space-xs text-on-primary font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">palette</span>
          <span className="">Mode: Sublimation Thermique Recto/Verso (YMCKO-K)</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-space-sm">
      <button className="h-11 px-space-md rounded-full bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary font-label-lg text-label-lg flex items-center gap-space-xs transition-colors" type="button">
        <span className="material-symbols-outlined text-[18px]">close</span>
        <span className="">Quitter</span>
      </button>
      <button className="h-11 px-space-lg rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-lg text-label-lg font-semibold flex items-center gap-space-xs hover:bg-tertiary-fixed transition-colors shadow-[0_2px_6px_-1px_rgba(27,42,74,0.04)]" type="button">
        <span className="material-symbols-outlined text-[20px]">print</span>
        <span className="">Imprimer le Document</span>
      </button>
    </div>
  </div>
  <main className="w-full pt-16 min-h-screen bg-surface-container-high">
    <div className="flex flex-col w-full">
      <div className="relative w-full bg-primary flex flex-col overflow-hidden text-on-surface select-none min-h-[calc(100vh-4rem)]">
        <header className="w-full bg-primary-container px-margin py-space-sm flex flex-wrap items-center justify-between gap-space-md z-30 shadow-md">
          <div className="flex items-center gap-space-md min-w-0">
            <button className="flex items-center gap-space-xs text-on-primary-container hover:text-on-primary transition-colors px-space-sm py-1.5 rounded-full hover:bg-secondary/30" type="button">
              <span className="material-symbols-outlined text-[18px]">keyboard_backspace</span>
              {" "}
              <span className="font-label-md text-label-md hidden md:inline">Échap</span>
            </button>
            <div className="h-4 w-px bg-outline/20" />
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
                picture_as_pdf
              </span>
              {" "}
              <span className="font-title-md text-title-md text-on-primary truncate max-w-xs md:max-w-md">
                Spool_Badge_PVC_Evolis_Jean-Philippe_KANGA.job
              </span>
              {" "}
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse" />
                {" 300 DPI Spooler "}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs bg-primary/60 px-space-sm py-1 rounded-full text-on-primary">
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-secondary/40 text-on-primary transition-colors" id="zoom-out" title="Zoom Arrière" type="button">
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            {" "}
            <span className="font-label-sm text-label-sm px-2 text-primary-fixed-dim font-mono" id="zoom-label">
              100%
            </span>
            {" "}
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-secondary/40 text-on-primary transition-colors" id="zoom-in" title="Zoom Avant" type="button">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
            <div className="h-3 w-px bg-outline/20 mx-1" />
            <button className="px-2 py-0.5 rounded-full hover:bg-secondary/40 text-on-primary font-label-sm text-label-sm transition-colors flex items-center gap-1" id="fit-width" type="button">
              <span className="material-symbols-outlined text-[14px]">fit_screen</span>
              {" "}
              <span className="hidden lg:inline">Ajuster</span>
            </button>
            <div className="h-3 w-px bg-outline/20 mx-1" />
            <span className="font-label-sm text-label-sm text-on-primary-container px-1">
              {"Feuille "}
              <strong className="text-on-primary">1</strong>
              {" / 1"}
            </span>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="h-9 px-space-md rounded-full bg-primary-container text-on-primary-container hover:text-on-primary hover:bg-secondary/40 font-label-md text-label-md transition-colors" type="button">
              {" Annuler "}
            </button>
            {" "}
            <button className="h-9 px-space-lg rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-md text-label-md font-semibold flex items-center gap-space-xs hover:bg-tertiary-fixed active:scale-95 transition-all shadow-md" id="spooler-trigger" type="button">
              <span className="material-symbols-outlined text-[18px]">print</span>
              {" "}
              <span className="">Lancer l'impression directe</span>
            </button>
          </div>
        </header>
        <div className="relative flex-1 flex flex-col lg:flex-row overflow-hidden">
          <main className="flex-1 relative overflow-auto p-4 sm:p-8 md:p-12 flex justify-center items-start bg-[#121620]">
            <article className="relative w-[210mm] min-w-[210mm] min-h-[297mm] bg-surface-container-lowest text-on-surface shadow-[0_24px_64px_rgba(0,0,0,0.65)] p-[12mm] flex flex-col justify-between transition-transform duration-200 origin-top" id="print-sheet">
              <div className="w-full flex items-center justify-between pb-3">
                <div className="flex items-center gap-1">
                  <span className="w-3.5 h-2 bg-[#00FFFF]" title="Cyan" />
                  {" "}
                  <span className="w-3.5 h-2 bg-[#FF00FF]" title="Magenta" />
                  {" "}
                  <span className="w-3.5 h-2 bg-[#FFFF00]" title="Yellow" />
                  {" "}
                  <span className="w-3.5 h-2 bg-[#000000]" title="Black 100%" />
                  {" "}
                  <span className="w-3.5 h-2 bg-[#808080]" title="Black 50%" />
                  {" "}
                  <span className="w-3.5 h-2 bg-primary-container" title="Navy CV-AV" />
                  {" "}
                  <span className="w-3.5 h-2 bg-tertiary-fixed-dim" title="Ochre CV-AV" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-[9px] uppercase tracking-widest text-secondary font-mono">
                    Bord franc • 300 DPI • Épreuve Électronique Officielle
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[12px] text-secondary">verified</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] text-secondary">
                  <span className="">RÉF : 2024-CI-DAL-0484-PRN</span>
                </div>
              </div>
              <header className="w-full flex flex-col items-center text-center pb-4">
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                    RÉPUBLIQUE DE CÔTE D'IVOIRE
                  </span>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                      church
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                      CONFÉRENCE DES ÉVÊQUES CATHOLIQUES
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                    PROVINCE DE GAGNOA
                  </span>
                </div>
                <div className="w-full bg-primary py-2.5 px-4 rounded flex items-center justify-between text-on-primary mb-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center font-bold text-sm">
                      {" CV "}
                    </div>
                    <div className="text-left">
                      <h1 className="font-headline-sm text-headline-sm tracking-tight leading-none text-on-primary">
                        DIOCÈSE DE DALOA
                      </h1>
                      <p className="font-label-sm text-label-sm text-primary-fixed-dim">
                        Aumônerie Diocésaine des Mouvements d'Action Catholique des Enfants
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-sm text-headline-sm text-tertiary-fixed-dim font-bold block leading-none">
                      CV – AV
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">
                      Cœurs Vaillants • Âmes Vaillantes
                    </span>
                  </div>
                </div>
                <p className="font-label-md text-label-md text-secondary font-medium tracking-wide">
                  {" BORDEREAU TECHNIQUE DE PRODUCTION D'IDENTITÉ CR-80 (NORME ISO/IEC 7810 ID-1) "}
                </p>
              </header>
              <section className="relative bg-surface-container-low p-4 rounded-xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">badge</span>
                    {" "}
                    <span className="font-title-md text-title-md text-primary">
                      Planche Bi-Face : Carte Membre Numérisée
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary bg-surface px-2.5 py-1 rounded-full">
                    {" Format d'emboutissage : 85.60 × 53.98 mm (Coins arrondis R: 3.18mm) "}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-items-center">
                  <div className="relative w-full max-w-[85.6mm] aspect-[85.6/53.98] bg-primary text-on-primary rounded-xl overflow-hidden shadow-md flex flex-col justify-between p-3.5">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-tertiary-fixed-dim/60" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-tertiary-fixed-dim/60" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-tertiary-fixed-dim/60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-tertiary-fixed-dim/60" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center font-bold text-[10px]">
                          {" CV "}
                        </div>
                        <div>
                          <span className="font-label-sm text-[10px] tracking-tight text-tertiary-fixed-dim uppercase font-bold block leading-none">
                            MOUVEMENT CV-AV
                          </span>
                          {" "}
                          <span className="font-label-sm text-[8px] text-primary-fixed-dim leading-none">
                            DIOCÈSE DE DALOA
                          </span>
                        </div>
                      </div>
                      <span className="font-label-sm text-[9px] px-2 py-0.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold tracking-wider">
                        {" 2024 - 2025 "}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 my-1">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-primary-container shadow-inner shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Portrait photography of a disciplined 12-year-old West African Ivorian schoolboy in crisp neat navy blue and yellow scouting uniform with epaulettes, clean studio lighting, proud smiling expression, official pastoral membership card identification portrait, rich contrast" src="/assets/image-placeholder.svg" />
                        <div className="absolute bottom-0 inset-x-0 bg-primary/80 py-0.5 text-center">
                          <span className="font-label-sm text-[7px] text-tertiary-fixed-dim tracking-tighter uppercase font-mono">
                            CV-B • ACTIF
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-label-sm text-[9px] text-primary-fixed-dim uppercase leading-none">
                          Adhérent Titulaire
                        </span>
                        <h3 className="font-headline-sm text-[15px] font-bold text-on-primary leading-tight truncate">
                          Jean-Philippe KANGA
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="font-label-sm text-[8px] bg-secondary/40 text-on-primary px-1.5 py-0.5 rounded font-medium">
                            Branche : Cœurs Vaillants B
                          </span>
                          {" "}
                          <span className="font-label-sm text-[8px] bg-error/30 text-error-container font-bold px-1 rounded">
                            SANG : O+
                          </span>
                        </div>
                        <span className="font-label-sm text-[8px] text-on-primary-container truncate mt-1">
                          Paroisse : Cathédrale Christ-Roi
                        </span>
                        {" "}
                        <span className="font-label-sm text-[8px] font-mono text-tertiary-fixed-dim">
                          Matricule : CI-DAL-2024-0484
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-sm text-[7px] tracking-wider text-primary-fixed-dim uppercase">
                        Récépissé Diocésain #REC-DAL-8840
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
                        {" "}
                        <span className="font-label-sm text-[7px] font-semibold text-on-primary">
                          CERTIFIÉ CONFORME
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full max-w-[85.6mm] aspect-[85.6/53.98] bg-surface text-on-surface rounded-xl overflow-hidden shadow-md flex flex-col justify-between p-3.5">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary/40" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary/40" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary/40" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary/40" />
                    <div className="flex items-center justify-between pb-1">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">contactless</span>
                        {" "}
                        <span className="font-label-sm text-[8px] font-bold text-primary tracking-wider uppercase">
                          COMMISSION PASTORALE ENFANCE
                        </span>
                      </div>
                      <span className="font-label-sm text-[8px] text-secondary font-mono">
                        PUCE RFID : MIFARE-1K-ENC
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 items-center my-0.5">
                      <div className="col-span-2 flex flex-col gap-0.5">
                        <span className="font-label-sm text-[8px] text-secondary font-semibold uppercase">
                          Fiche Médicale Sommaire
                        </span>
                        <p className="font-label-sm text-[8px] text-on-surface leading-tight">
                          Allergies : Aucune déclarée • Tétanos à jour • Aptitude camp diocésain : Totale
                        </p>
                        <span className="font-label-sm text-[8px] text-secondary font-semibold uppercase mt-1">
                          Contact Parent / Tuteur Légal
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-primary text-[11px]">call</span>
                          {" "}
                          <span className="font-label-sm text-[9px] font-bold text-primary font-mono">
                            +225 07 59 14 20 88 (M. KANGA)
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-1 bg-surface-container rounded">
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-4h2v2h-2v-2zm4 0h4v2h-4v-2zm-4 4h2v4h-2v-4zm2-2h2v2h-2v-2zM6 6h0v0zM6 18h0v0z" />
                        </svg>
                        <span className="font-label-sm text-[6px] font-mono text-secondary mt-0.5">
                          SECURE-KEY-SHA
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between pt-1">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-[8px] italic text-primary font-serif font-bold">
                          « À Cœur Vaillant, Tout Est Possible ! »
                        </span>
                        {" "}
                        <span className="font-label-sm text-[6px] text-secondary">
                          Propriété de l'Évêché de Daloa • En cas de perte, rapporter à la Paroisse.
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-label-sm text-[7px] block font-bold text-on-surface">
                          L'Aumônier Diocésain
                        </span>
                        {" "}
                        <span className="font-label-sm text-[7px] text-secondary italic">
                          Abbé Jean-Marc KOFFI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full my-1 flex items-center justify-center">
                  <div className="w-full h-px bg-outline-variant" />
                  <div className="absolute px-3 bg-surface-container-low flex items-center gap-1.5 text-secondary">
                    <span className="material-symbols-outlined text-[14px]">content_cut</span>
                    {" "}
                    <span className="font-label-sm text-[9px] uppercase tracking-widest font-mono">
                      Ligne de rainage et pliage médian
                    </span>
                  </div>
                </div>
              </section>
              <section className="my-4 bg-surface-container-lowest p-4 rounded-xl flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-[160px] text-primary">local_florist</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-title-md text-title-md text-primary font-bold">
                      ATTESTATION D'ENRÔLEMENT CANONIQUE & CIVIQUE
                    </h2>
                    <p className="font-label-sm text-label-sm text-secondary">
                      Document officiel délivré pour faire valoir ce que de droit auprès des instances ecclésiales et associatives.
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-surface-container rounded-full text-primary font-mono text-[10px] font-semibold">
                    {" REG-DALOA-CIV-2024-Nº0918 "}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-on-surface pt-1">
                  <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-semibold">
                      Statut au Mouvement
                    </span>
                    {" "}
                    <span className="font-headline-sm text-[14px] font-bold text-primary">
                      Membre Actif Engagé
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary">
                      Promesse prononcée le 14 Oct. 2023 en la fête patronale paroissiale.
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-semibold">
                      Autorité Responsable
                    </span>
                    {" "}
                    <span className="font-headline-sm text-[14px] font-bold text-primary">
                      Doyenné Régional Centre
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary">
                      Paroisse Cathédrale Christ-Roi sous juridiction de Mgr l'Évêque.
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-semibold">
                      Validité Diocésaine
                    </span>
                    {" "}
                    <span className="font-headline-sm text-[14px] font-bold text-primary">
                      Année Pastorale 2024-2025
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary">
                      Échéance de réinscription le 31 Août 2025.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-3 pt-3 items-end">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">
                      Le Coordonnateur Diocésain CV-AV
                    </span>
                    <p className="font-body-sm text-[11px] text-secondary">
                      Vu et vérifié conforme aux registres de la commission diocésaine de l'enfance.
                    </p>
                    <div className="h-14 flex items-center">
                      <span className="font-serif italic font-bold text-primary text-[15px] underline">
                        M. Alexis TANOH Koffi
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="relative w-28 h-28 rounded-full bg-primary/5 flex items-center justify-center p-2 text-center text-primary">
                      <div className="w-full h-full rounded-full bg-primary/10 flex flex-col items-center justify-center p-1">
                        <span className="material-symbols-outlined text-[20px] text-primary">
                          shield_person
                        </span>
                        {" "}
                        <span className="font-label-sm text-[7px] uppercase font-bold tracking-tight text-center">
                          ÉVÊCHÉ DE DALOA
                          <br />
                          SECRÉTARIAT PASTORAL
                          <br />
                          ★ 2024 ★
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-[9px] text-secondary font-mono mt-1">
                      Homologation N° DAL-8840-IMM
                    </span>
                  </div>
                </div>
              </section>
              <footer className="mt-auto pt-3 bg-surface-container-low px-4 py-2.5 rounded-lg flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">layers</span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-[12px] font-bold text-primary">
                      Guide de Façonnage Post-Impression
                    </span>
                    {" "}
                    <span className="font-label-sm text-[10px] text-secondary">
                      Respecter rigoureusement les trois étapes techniques :
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] text-on-surface">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-[9px]">
                      1
                    </span>
                    {" "}
                    <span className="">Impression A4 Échelle 100%</span>
                  </div>
                  <span className="text-outline">›</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-[9px]">
                      2
                    </span>
                    {" "}
                    <span className="">Découpe aux traits d'hirondelle</span>
                  </div>
                  <span className="text-outline">›</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-[9px]">
                      3
                    </span>
                    {" "}
                    <span className="">Lamination thermique 250 µm</span>
                  </div>
                </div>
              </footer>
            </article>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-primary/95 text-on-primary backdrop-blur-md px- space-md py-2.5 rounded-full shadow-2xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim animate-ping" />
              <span className="font-label-md text-label-md text-primary-fixed">
                Calibration Evolis Primacy 2 validée • Prêt pour sublimation thermique recto/verso
              </span>
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">credit_card</span>
            </div>
          </main>
          <aside className="w-full lg:w-96 bg-surface p-space-lg flex flex-col gap-space-lg overflow-y-auto shrink-0 shadow-xl z-20">
            <div className="flex items-center justify-between pb-space-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">tune</span>
                <h2 className="font-headline-sm text-headline-sm text-primary">Paramètres du Spooler</h2>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-mono">
                Canon IP
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between" htmlFor="printer-select">
                <span className="">Destination d'impression</span>
                {" "}
                <span className="font-label-sm text-[10px] text-tertiary-container bg-tertiary-fixed px-1.5 py-0.2 rounded font-normal">
                  Connecté
                </span>
              </label>
              <div className="relative">
                <select className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface rounded-xl font-body-md text-body-md appearance-none focus:outline-none shadow-sm cursor-pointer pr-10" id="printer-select" defaultValue="Evolis Primacy 2 Duplex (Secrétariat & Évêché)" />
                {" "}
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
              <span className="font-label-sm text-[11px] text-secondary">
                Pilote Evolis Premium Suite v2.8 • Ruban YMCKO (242/300 tirages restants)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-primary font-semibold">Pages</label>
                <div className="h-11 px-3 bg-surface-container-low rounded-xl flex items-center justify-between text-body-md">
                  <span className="font-medium text-primary">Toutes (1)</span>
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Nombre d'exemplaires
                </label>
                <div className="h-11 px-2 bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-sm">
                  <button className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors" id="copy-dec" type="button">
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  {" "}
                  <span className="font-title-md text-title-md text-primary font-mono" id="copy-count">1</span>
                  {" "}
                  <button className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors" id="copy-inc" type="button">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Gestion de la Couleur
                </label>
                <span className="font-label-sm text-[10px] text-secondary bg-surface-container px-2 py-0.5 rounded-full font-medium">
                  Vernis protecteur Overlay actif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container rounded-xl">
                <button className="h-9 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold shadow-sm flex items-center justify-center gap-1.5" type="button">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">palette</span>
                  <span className="">Sublimation (YMCKO)</span>
                </button>
                <button className="h-9 rounded-lg text-secondary hover:text-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5" type="button">
                  <span className="material-symbols-outlined text-[16px]">tonality</span>
                  <span className="">Monochrome K</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-semibold">Format Support</span>
                <span className="font-label-sm text-label-sm text-secondary font-mono text-right">
                  Carte PVC CR-80 (85.60 × 53.98 mm • Épaisseur 30 mil / 0.76 mm)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-semibold">Orientation</span>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg">
                    <span className="px-2 py-0.5 rounded text-secondary font-label-sm text-label-sm">
                      Portrait
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-xs">
                      Paysage (Standard CR-80)
                    </span>
                  </div>
                  <span className="font-label-sm text-[10px] text-tertiary-fixed-dim">
                    Recto-Verso Automatique (Retournement mécanique)
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-semibold">Mise à l'échelle</span>
                <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
                  Ajustement 1:1 Bord-à-bord (Edge-to-edge sublimation)
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-label-md text-label-md text-primary font-semibold">
                Options Techniques & Prépresse
              </span>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded text-tertiary-fixed-dim focus:ring-tertiary-fixed-dim accent-primary cursor-pointer" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Encodage Puce NFC / RFID MIFARE 1K
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded text-tertiary-fixed-dim focus:ring-tertiary-fixed-dim accent-primary cursor-pointer" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Overlay holographique anti-usure
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded text-tertiary-fixed-dim focus:ring-tertiary-fixed-dim accent-primary cursor-pointer" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">
                  Impression résine noire K haute définition (Code-barres & QR)
                </span>
              </label>
            </div>
            <div className="mt-auto bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-label-sm text-label-sm font-semibold text-primary">Badgeuse Prête</span>
                </div>
                <span className="font-mono text-[10px] text-secondary">Evolis USB002 / IP: 192.168.1.72</span>
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-secondary font-mono">
                <div className="flex justify-between">
                  <span className="">Chargeur cartes :</span>
                  <span className="text-on-surface font-semibold">85/100 cartes CR-80</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Bac rejet / erreurs :</span>
                  <span className="text-on-surface font-semibold">0 carte</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Tête thermique :</span>
                  <span className="text-on-surface font-semibold">38°C (Nominale)</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Ruban YMCKO :</span>
                  <span className="text-tertiary-fixed-dim font-semibold">242 impressions</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <button className="w-full h-11 px-space-lg rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs hover:bg-tertiary-fixed transition-colors shadow-md" id="spooler-trigger-secondary" type="button">
                <span className="material-symbols-outlined text-[20px]">badge</span>
                <span className="">Imprimer sur Evolis Primacy 2</span>
              </button>
              <p className="font-label-sm text-[10px] text-center text-secondary">
                {" Raccourci système : Appuyez sur "}
                <strong className="text-primary">Entrée</strong>
                {" pour confirmer "}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
