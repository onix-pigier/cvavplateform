// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/tableau_de_bord_administrateur_paroissial_scr_dash_par_cath_drale_christ_roi/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Tableau de bord administrateur paroissial scr dash par cath drale christ roi — Domaine : Assainissement

export default function TableauDeBordAdministrateurParoissialScrDashParCathDraleChristRoi() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 left-0 right-0 h-16 bg-primary-container z-50 shadow-[0_1px_8px_rgba(4,21,52,0.18)]">
    <div className="w-full h-full px-space-lg flex items-center justify-between">
      <div className="flex items-center gap-space-md">
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col">
          <div className="flex items-center gap-space-sm">
            <span className="font-title-md text-title-md text-on-primary tracking-tight">
              Paroisse Cathédrale Christ-Roi
            </span>
            <span className="font-label-sm text-label-sm text-on-primary-container hidden md:inline">
              (Daloa Ville)
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
            Diocèse de Daloa • Aumônerie CV-AV
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <div className="hidden lg:flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest/10">
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
          <span className="font-label-sm text-label-sm text-surface-container-lowest">
            Régime Paroissial Actif
          </span>
        </div>
        <div className="hidden md:flex items-center gap-space-sm pl-space-md">
          <div className="flex flex-col text-right">
            <span className="font-label-lg text-label-lg text-on-primary leading-tight">
              Abbé Jean-Marc Koffi
            </span>
            <span className="font-label-sm text-label-sm text-on-primary-container">
              Administrateur & Aumônier Paroissial
            </span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-tertiary-fixed-dim/40">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <aside className="fixed left-0 top-16 bottom-0 w-72 bg-surface-container-lowest z-40 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="flex-1 overflow-y-auto pt-space-md pb-space-sm px-space-sm">
      <div className="px-space-md pb-space-xs mb-space-xs">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
          Curie & Pastorale
        </span>
      </div>
      <nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary font-semibold">
        <a aria-current="page" className="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-colors bg-primary-container text-on-primary font-semibold" data-path="dashboard" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span className="font-label-lg text-label-lg">Tableau de Bord</span>
          </div>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="pre-inscriptions" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">pending_actions</span>
            <span className="font-label-lg text-label-lg">Pré-inscriptions</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
            10 en attente
          </span>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="registre-militants" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">badge</span>
            <span className="font-label-lg text-label-lg">Registre des Militants</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
            144
          </span>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="sections-patrouilles" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">diversity_3</span>
            <span className="font-label-lg text-label-lg">Sections & Patrouilles</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
            13
          </span>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="saisie-presences" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">fact_check</span>
            <span className="font-label-lg text-label-lg">Saisie des Présences</span>
          </div>
          <span className="font-label-sm text-label-sm text-outline">WF-09</span>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="caisse-cotisations" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            <span className="font-label-lg text-label-lg">Caisse & Cotisations</span>
          </div>
          <span className="font-label-sm text-label-sm text-outline">FIN-01</span>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="brevets-investitures" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">military_tech</span>
            <span className="font-label-lg text-label-lg">Brevets & Investitures</span>
          </div>
          <span className="font-label-sm text-label-sm text-outline">CER</span>
        </a>
        <a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="documents-tabularium" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">folder_special</span>
            <span className="font-label-lg text-label-lg">Documents & Tabularium</span>
          </div>
        </a>
      </nav>
    </div>
    <div className="p-space-md bg-surface-container-low/60">
      <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-space-sm mb-1.5">
          <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
          <span className="font-label-sm text-label-sm font-semibold text-primary">
            Sceau Paroissial Scellé
          </span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="font-label-sm text-label-sm text-on-surface-variant">Synchro Diocèse Daloa</span>
          </div>
          <span className="material-symbols-outlined text-outline text-[16px]">cloud_done</span>
        </div>
      </div>
    </div>
  </aside>
  <div className="pl-72">
    <main className="w-full min-h-screen pt-16 bg-surface px-space-lg py-space-lg">
      <div className="flex flex-col w-full space-y-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="flex flex-col space-y-1">
            <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="hover:text-primary transition-colors cursor-pointer">Cathédrale Christ-Roi</span>
              {" "}
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              {" "}
              <span className="hover:text-primary transition-colors cursor-pointer">
                Administration Paroissiale
              </span>
              {" "}
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              {" "}
              <span className="text-primary font-semibold">Tableau de Bord Général</span>
            </nav>
            <div className="flex flex-wrap items-center gap-space-sm pt-1">
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                {" Tableau de Bord Paroissial — Cathédrale Christ-Roi (Daloa) "}
              </h1>
              <span className="px-3 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {" SCR-DASH-PAR "}
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-4xl">
              {" Supervision pastorale, traitement FIFO des enrôlements, assiduité du samedi, caisse paroissiale et transmissions curiales sous l'égide du Diocèse de Daloa. "}
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors shadow-sm font-label-lg text-label-lg active:scale-95">
              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
              {" "}
              <span>Exporter Rapport Mensuel (PDF/A)</span>
            </button>
            {" "}
            <button className="inline-flex items-center gap-space-xs px-6 py-2.5 rounded-full bg-on-tertiary-container hover:bg-tertiary-container text-on-primary transition-all shadow-md font-label-lg text-label-lg font-semibold active:scale-95">
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">bolt</span>
              {" "}
              <span>+ Nouvel Enrôlement au Guichet</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Militants Enrôlés
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display-lg text-display-lg text-primary">144</span>
                  {" "}
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    +2 aujourd'hui
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">badge</span>
              </div>
            </div>
            <div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-3">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary mb-1.5">
                <span>Objectif Paroissial (150)</span>
                {" "}
                <span className="font-semibold text-primary">96%</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "96%" }} />
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-2">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                  {" 144 cartes PVC délivrées "}
                </span>
                {" "}
                <span className="text-secondary font-medium">0 litige</span>
              </div>
            </div>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  File d'Attente FIFO
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display-lg text-display-lg text-primary">10</span>
                  {" "}
                  <span className="font-label-md text-label-md text-secondary">dossiers en cours</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-[22px]">pending_actions</span>
              </div>
            </div>
            <div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-3 flex flex-col gap-2">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="inline-flex items-center gap-1 text-error font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-error" />
                  {" 3 fiches santé urgentes "}
                </span>
                {" "}
                <span className="inline-flex items-center gap-1 text-on-tertiary-container font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                  {" 6 prêts badgeuse "}
                </span>
              </div>
              <a className="inline-flex items-center justify-between text-primary font-label-sm text-label-sm font-semibold hover:text-on-tertiary-container pt-1 transition-colors" href="#fifo-section">
                <span>Traiter la file prioritaire</span>
                {" "}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Dernier Samedi (24 Mai)
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display-lg text-display-lg text-primary">96,6%</span>
                  {" "}
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    256/265 glob.
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">verified_user</span>
              </div>
            </div>
            <div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-3">
              <div className="flex items-center justify-between font-label-sm text-label-sm mb-1.5">
                <span className="text-secondary">Patrouille St-Joseph (Modèle)</span>
                {" "}
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-semibold">
                  28/28 (100%)
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm pt-1">
                <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                  history_edu
                </span>
                {" "}
                <span className="truncate">PV scellé numériquement (Abbé Jean-Marc)</span>
              </div>
            </div>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Caisse Paroissiale & Cotisations
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display-lg text-display-lg text-primary">504 000</span>
                  {" "}
                  <span className="font-label-md text-label-md text-secondary font-semibold">FCFA</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-on-tertiary-container">
                <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
              </div>
            </div>
            <div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-3">
              <div className="grid grid-cols-2 gap-1 text-label-sm font-label-sm mb-2">
                <div className="flex flex-col">
                  <span className="text-secondary">Paroisse (40%)</span>
                  {" "}
                  <span className="font-semibold text-primary">201 600 F</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-secondary">Diocèse (60%)</span>
                  {" "}
                  <span className="font-semibold text-on-tertiary-container">302 400 F</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-label-sm font-label-sm text-secondary">
                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                {" "}
                <span className="truncate">Quittance QUIT-2024-0145 scellée</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-8 flex flex-col space-y-space-lg">
            <section className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col space-y-space-md" id="fifo-section">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low/30 -mx-space-lg -mt-space-lg p-space-lg rounded-t-2xl">
                <div className="flex items-center gap-space-sm">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined text-[20px]">format_list_numbered</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <h2 className="font-title-md text-title-md text-primary">
                        File d'Attente FIFO d'Enrôlement
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                        10 dossiers
                      </span>
                    </div>
                    <p className="font-label-sm text-label-sm text-secondary">
                      Règle canonique FIFO : Premier enrôlé, premier instruit et badgé.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
                    {" Synchronisé Guichet Paroisse "}
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container transition-colors gap-3">
                    <div className="flex items-start sm:items-center gap-space-md">
                      <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center shrink-0">
                        {" 1 "}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-space-xs">
                          <span className="font-title-md text-title-md text-primary">Sandrine KANGA</span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                            8 ans
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium">
                            Âmes Vaillantes A
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">medical_services</span>
                            {" PAI Allergie arachide complété "}
                          </span>
                          {" "}
                          <span className="text-secondary font-label-sm text-label-sm">• Dépôt : 08:14</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button className="px-4 py-2 rounded-full bg-on-tertiary-container hover:bg-tertiary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all active:scale-95 shadow-sm">
                        {" Instruire #1 "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors gap-3">
                    <div className="flex items-start sm:items-center gap-space-md">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center shrink-0">
                        {" 2 "}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-space-xs">
                          <span className="font-title-md text-title-md text-primary">Patrice YAO</span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                            11 ans
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium">
                            Cadets
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">payments</span>
                            {" Espèces guichet à vérifier (3 500 F) "}
                          </span>
                          {" "}
                          <span className="text-secondary font-label-sm text-label-sm">• Dépôt : 08:35</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button className="px-4 py-2 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm font-medium transition-colors">
                        {" Encaisser "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container transition-colors gap-3">
                    <div className="flex items-start sm:items-center gap-space-md">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center shrink-0">
                        {" 3 "}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-space-xs">
                          <span className="font-title-md text-title-md text-primary">
                            Marie-Estelle KOUASSI
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                            9 ans
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium">
                            Âmes Vaillantes B
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-fixed font-label-sm text-label-sm font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                            {" Dossier numérique complet & payé "}
                          </span>
                          {" "}
                          <span className="text-secondary font-label-sm text-label-sm">
                            • Prêt impression badge
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button className="px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-medium transition-colors">
                        {" Valider "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors gap-3">
                    <div className="flex items-start sm:items-center gap-space-md">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center shrink-0">
                        {" 4 "}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-space-xs">
                          <span className="font-title-md text-title-md text-primary">Moïse KOFFI</span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                            12 ans
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium">
                            Aînés
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">swap_horiz</span>
                            {" Transfert décanale Ste-Thérèse à certifier "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button className="px-4 py-2 rounded-full bg-surface-container-highest hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-medium transition-colors">
                        {" Examiner "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary">
                  Affichage des 4 premières requêtes immédiates
                </span>
                {" "}
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-on-tertiary-container font-semibold transition-colors" href="#">
                  <span>Voir les 10 dossiers de la file d'attente complète</span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">east</span>
                </a>
              </div>
            </section>
            <section className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div>
                  <h2 className="font-title-md text-title-md text-primary">
                    Assiduité & Dernières Séances Paroissiales
                  </h2>
                  <p className="font-label-sm text-label-sm text-secondary">
                    Moyenne de ponctualité et régularité des 4 branches sur les 4 samedis écoulés.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-medium self-start sm:self-auto">
                  {" Moyenne globale : 96,6% "}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-2">
                <div className="p-space-md rounded-xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-title-md text-title-md text-primary">Fripouns & Petites Ailes</span>
                    {" "}
                    <span className="font-label-lg text-label-lg font-semibold text-primary">98%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: "98%" }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">
                    52 inscrits • 51 présents samedi dernier
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-title-md text-title-md text-primary">Cadets de Ste-Marie</span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                      100% Assiduité
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-on-tertiary-container h-full rounded-full" style={{ width: "100%" }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">
                    42 inscrits • 42 présents (Zéro retard consigné)
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-title-md text-title-md text-primary">Aînés St-Jean-Paul II</span>
                    {" "}
                    <span className="font-label-lg text-label-lg font-semibold text-primary">94%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-secondary h-full rounded-full" style={{ width: "94%" }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">
                    30 inscrits • 2 absences justifiées (Examen blanc)
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-title-md text-title-md text-primary">Âmes Vaillantes Cadettes</span>
                    {" "}
                    <span className="font-label-lg text-label-lg font-semibold text-primary">95%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: "95%" }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">
                    20 inscrites • 19 présentes au grand mât
                  </span>
                </div>
              </div>
              <div className="mt-2 p-space-md rounded-xl bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[28px] text-primary">verified</span>
                  <div>
                    <div className="font-label-lg text-label-lg text-primary font-semibold">
                      {" PV de Rassemblement Hebdomadaire (Samedi 24 Mai) "}
                    </div>
                    <div className="font-label-sm text-label-sm text-secondary">
                      {" Certificat X.509 Curial valide • Signé par Abbé Jean-Marc Koffi (Aumônier Paroissial) "}
                    </div>
                  </div>
                </div>
                <button className="px-5 py-2 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm font-semibold transition-colors shrink-0">
                  {" Consulter le PV PDF/A-3b "}
                </button>
              </div>
            </section>
            <section className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col md:flex-row gap-space-lg items-center">
              <div className="w-full md:w-1/3 h-48 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <img className="w-full h-full object-cover" data-alt="Young Ivorian Catholic scouts and youth militants wearing official CV-AV berets and uniforms gathered outdoors under tall tropical palm trees in front of the Christ-Roi Cathedral of Daloa, warm golden afternoon lighting, joyful and disciplined spirit, high dignity, deep navy accents." src="/assets/image-placeholder.svg" />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <span className="px-3 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold w-fit">
                  {" Vie du Mouvement "}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Rassemblement Général & Pèlerinage Décanal
                </h3>
                <p className="font-body-md text-body-md text-secondary">
                  {" Les fiches d'autorisation parentale pour le grand pèlerinage au Sanctuaire Marial de Daloa sont en cours de collecte au bureau paroissial. 102 autorisations déjà enregistrées et vérifiées. "}
                </p>
                <div className="pt-2 flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                      event
                    </span>
                    {" Samedi 07 Juin 2025 "}
                  </span>
                  {" "}
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                    {" Cathédrale Christ-Roi "}
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-4 flex flex-col space-y-space-lg">
            <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary">print</span>
                  <h3 className="font-title-md text-title-md text-primary">Guichet & Badgeuse PVC</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-on-tertiary-container" />
                  {" En ligne "}
                </span>
              </div>
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-body-md text-on-surface">
                  <span className="text-secondary font-label-sm text-label-sm">Modèle Badgeuse</span>
                  {" "}
                  <span className="font-semibold text-primary font-label-sm text-label-sm">
                    Evolis Primacy 2
                  </span>
                </div>
                <div className="flex items-center justify-between text-body-md text-on-surface">
                  <span className="text-secondary font-label-sm text-label-sm">Adresse Réseau IP</span>
                  {" "}
                  <span className="font-mono text-label-sm text-label-sm text-on-surface-variant font-medium">
                    192.168.1.45
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm mb-1">
                    <span className="text-secondary">Ruban YMCKO Couleur</span>
                    {" "}
                    <span className="font-semibold text-primary">82% restant</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "82%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm mb-1">
                    <span className="text-secondary">Cartes PVC vierges</span>
                    {" "}
                    <span className="font-semibold text-on-tertiary-container">56 unités prêtes</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-on-tertiary-container h-full rounded-full" style={{ width: "56%" }} />
                  </div>
                </div>
                <div className="pt-2 text-label-sm font-label-sm text-secondary bg-surface-container-low/60 p-space-sm rounded-xl">
                  <div className="font-medium text-primary">Dernière émission : #LOT-2024-03</div>
                  <div className="text-on-surface-variant mt-0.5">
                    3 cartes remises en main propre aux chefs de patrouille.
                  </div>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-full bg-surface-container-high hover:bg-surface-variant text-primary font-label-sm text-label-sm font-semibold transition-colors mt-2 active:scale-95 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">tune</span>
                {" "}
                <span>Lancer test d'impression badge</span>
              </button>
            </div>
            <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-error">emergency</span>
                  <h3 className="font-title-md text-title-md text-primary">Vigilance Médicale & PAI</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                  {" 6 Actifs "}
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary">
                {" Protocoles d'Accueil Individualisés obligatoires lors de chaque rassemblement paroissial. "}
              </p>
              <div className="space-y-space-sm pt-1">
                <div className="p-space-sm rounded-xl bg-error-container/30 flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-error-container">
                      Sandrine Kanga (8 ans)
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-error font-label-sm text-label-sm font-semibold">
                      PAI Arachide
                    </span>
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    {" Casier isotherme pharmacie paroissiale #04 • Injecteur SAMU 185 "}
                  </div>
                </div>
                <div className="p-space-sm rounded-xl bg-surface-container-low/70 flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-semibold text-primary">
                      Jean-Philippe Kanga (10 ans)
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm font-medium">
                      Dispense EPS
                    </span>
                  </div>
                  <div className="font-label-sm text-label-sm text-secondary">
                    {" Certificat médical archivé Tabularium • Activités calmes requises "}
                  </div>
                </div>
              </div>
              <a className="inline-flex items-center justify-between text-primary font-label-sm text-label-sm font-semibold hover:text-on-tertiary-container pt-1 transition-colors" href="#">
                <span>Consulter le Registre Sanitaire Paroissial</span>
                {" "}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-primary">account_balance</span>
                <h3 className="font-title-md text-title-md text-primary">Curie Diocésaine de Daloa</h3>
              </div>
              <div className="space-y-3 text-label-sm font-label-sm">
                <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low/50">
                  <div>
                    <div className="text-secondary">Reversal T1 (60% légal)</div>
                    <div className="font-title-md text-title-md text-primary font-semibold mt-0.5">
                      304 500 FCFA
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold">
                    {" Versé & Acquis "}
                  </span>
                </div>
                <div className="flex flex-col space-y-1 text-secondary">
                  <div className="flex items-center justify-between">
                    <span>Grand Livre T1 :</span>
                    {" "}
                    <span className="font-mono text-primary font-medium">TAB-DAL-2025-08</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Clôture Trimestre 2 :</span>
                    {" "}
                    <span className="text-on-tertiary-container font-semibold">Dans 22 jours</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-full bg-on-tertiary-container hover:bg-tertiary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">file_download</span>
                {" "}
                <span>Télécharger la Quittance Épiscopale</span>
              </button>
            </div>
            <div className="rounded-2xl bg-primary-container p-space-lg text-on-primary shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                  {" Diocèse de Daloa "}
                </span>
                {" "}
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">church</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-white font-semibold">
                  Sceau Curial d'Excellence
                </h4>
                <p className="font-label-sm text-label-sm text-on-primary-container mt-1">
                  {" \"Cœur Vaillant, Âme Vaillante, Toujours Joyeux pour Servir Dieu et la Patrie.\" "}
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim pt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                {" Registre Paroissial conforme au Droit Canon. "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
    </div>
  );
}
