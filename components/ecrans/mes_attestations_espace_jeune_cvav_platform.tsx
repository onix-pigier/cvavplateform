// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/mes_attestations_espace_jeune_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Mes attestations espace jeune cvav platform — Domaine : Espace Militant

export default function MesAttestationsEspaceJeuneCvavPlatform() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 left-0 right-0 h-16 bg-primary-container text-on-primary z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <div className="w-full h-16 px-margin flex items-center justify-between">
      <div className="flex items-center gap-space-md">
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-on-primary leading-tight">
              CV-AV Côte d'Ivoire
            </span>
            <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-space-xs py-0.5 rounded-full">
              Portail Militant
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-primary-container leading-none mt-0.5">
            Paroisse Le Plateau · Doyenné de Daloa
          </p>
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <div className="hidden md:flex flex-col text-right">
          <span className="font-title-md text-title-md text-on-primary">Bienvenue, Moïse ASSI</span>
          <span className="font-label-sm text-label-sm text-secondary-fixed-dim">
            Section Âmes Vaillantes · Responsable Adjoint
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="relative flex items-center justify-center">
            <button aria-label="Notifications" className="relative p-space-xs rounded-full hover:bg-primary text-on-primary-container hover:text-on-primary transition-colors focus:outline-none" type="button">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute top-1 right-1 flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-error text-on-error font-label-sm text-[10px] font-bold leading-none ring-2 ring-primary-container">
                3
              </span>
            </button>
          </div>
          <div className="relative group flex items-center">
            <button aria-expanded="false" className="flex items-center gap-space-xs p-1 rounded-full hover:bg-primary transition-colors focus:outline-none" type="button">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-tertiary-fixed-dim">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
              <span className="material-symbols-outlined text-on-primary-container text-[18px]">
                expand_more
              </span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_-4px_rgba(27,42,74,0.12),0_2px_6px_-1px_rgba(27,42,74,0.04)] py-space-xs hidden group-hover:block transition-all z-50">
              <div className="px-space-md py-space-sm border-b border-surface-container">
                <p className="font-label-md text-label-md text-on-surface font-semibold">Moïse ASSI</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  moise.assi@cvav-ci.org
                </p>
              </div>
              <a className="flex items-center px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" data-path="mon-compte" href="#">
                Mon profil
              </a>
              <a className="flex items-center px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" data-path="parametres" href="#">
                Paramètres
              </a>
              <div className="my-1 border-t border-surface-container" />
              <a className="flex items-center px-space-md py-space-sm text-error hover:bg-error-container hover:text-on-error-container transition-colors font-label-md text-label-md" data-path="connexion" href="#">
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <aside className="fixed left-0 top-16 bottom-0 w-72 bg-surface-container-low z-40 flex flex-col justify-between py-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="flex flex-col gap-space-md px-space-md">
      <div className="px-space-sm pb-space-xs">
        <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
          Navigation Militant
        </p>
      </div>
      <nav className="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary font-bold rounded-xl">
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="accueil-militant" href="#">
          Accueil
        </a>
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-presences" href="#">
          Mes présences
        </a>
        <a aria-current="page" className="flex items-center px-space-md py-space-sm transition-colors bg-primary-container text-on-primary font-bold rounded-xl" data-path="mes-attestations" href="#">
          Mes attestations
        </a>
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-cotisations" href="#">
          Mes cotisations
        </a>
        <a className="flex items-center justify-between px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="notifications" href="#">
          <span>Notifications</span>
          <span className="bg-error text-on-error font-label-sm text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            3
          </span>
        </a>
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mon-compte" href="#">
          Mon compte
        </a>
      </nav>
    </div>
    <div className="px-space-md">
      <div className="p-space-md bg-surface-container rounded-xl flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
        <div>
          <p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
            Diocèse de Daloa
          </p>
          <p className="font-body-sm text-body-sm text-secondary leading-tight mt-0.5">
            Année Pastorale 2024–2025
          </p>
        </div>
      </div>
    </div>
  </aside>
  <div className="pl-72">
    <main className="relative pt-16 w-full min-h-screen bg-surface">
      <div className="flex flex-col w-full">
        <div className="px-margin py-space-lg flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                  <span className="material-symbols-outlined text-[16px]">shield_person</span>
                  {" Espace Militant "}
                </a>
                {" "}
                <span className="text-outline-variant">/</span>
                {" "}
                <span className="text-primary font-semibold">Mes Attestations</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Mes Attestations & Titres Pastoraux
              </h1>
              <p className="font-body-md text-body-md text-secondary">
                {" Année Pastorale 2024–2025 · Patrouille Saint-Joseph · Section Cœurs Vaillants / Âmes Vaillantes "}
              </p>
            </div>
            <div className="flex items-center gap-space-sm self-start md:self-auto">
              <button className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200" type="button">
                <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">download</span>
                {" "}
                <span>Télécharger le livret de progression (PDF)</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Titres & Brevets
                  </span>
                  {" "}
                  <span className="font-display-lg text-display-lg text-primary mt-1">3</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100/70 text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1" />
                    {" En règle & Valides "}
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Réf. Registre #CERT-DAL-2024
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Grade en Cours
                  </span>
                  {" "}
                  <span className="font-headline-md text-headline-md text-primary mt-1">Cadet (2 étoiles)</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-tertiary-container">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    military_tech
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-secondary">Cap vers Aspirant Témoin</span>
                  {" "}
                  <span className="text-primary font-semibold">65% (4/6 épreuves)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                  <div className="h-full bg-tertiary-fixed-dim rounded-full transition-all duration-500" style={{ width: "65%" }} />
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Signature Canonique
                  </span>
                  {" "}
                  <span className="font-title-md text-title-md text-primary mt-1">
                    Sceau Curial & Aumônerie
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">
                  Abbé Jean-Marc Koffi
                </p>
                <span className="font-label-sm text-label-sm text-secondary">Authentifié QR Chirographe</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Prochaine Épreuve
                  </span>
                  {" "}
                  <span className="font-title-md text-title-md text-primary mt-1">Grand Camp Pascal 2025</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800">
                  <span className="material-symbols-outlined text-[22px]">event_available</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100/70 text-emerald-800">
                  {" Éligibilité confirmée "}
                </span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">Assiduité 92% (min. 75%)</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0" id="filter-tabs">
              <button className="tab-btn px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-primary text-on-primary transition-all whitespace-nowrap shadow-sm" type="button">
                {" Tous les documents (3) "}
              </button>
              {" "}
              <button className="tab-btn px-4 py-2 rounded-full font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" type="button">
                {" Diplômes de Grade (1) "}
              </button>
              {" "}
              <button className="tab-btn px-4 py-2 rounded-full font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" type="button">
                {" Certificats d'Adhésion (1) "}
              </button>
              {" "}
              <button className="tab-btn px-4 py-2 rounded-full font-label-md text-label-md font-medium text-secondary hover:text-on-surface hover:bg-surface-container transition-all whitespace-nowrap" type="button">
                {" Brevets Techniques (1) "}
              </button>
            </div>
            <div className="flex items-center gap-space-sm flex-wrap sm:flex-nowrap">
              <div className="relative flex-grow sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-secondary">
                  search
                </span>
                {" "}
                <input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="Rechercher une attestation, brevet..." type="text" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-low rounded-xl font-label-sm text-label-sm text-secondary cursor-pointer hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[16px]">sort</span>
                {" "}
                <span>
                  {"Tri : "}
                  <strong className="text-on-surface">Plus récentes</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-72 bg-gradient-to-br from-primary via-primary-container to-secondary p-space-md flex flex-col justify-between text-on-primary relative overflow-hidden flex-shrink-0">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-tertiary-fixed/10 pointer-events-none" />
                <div className="flex items-start justify-between z-10">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-tertiary-fixed-dim/20 text-tertiary-fixed tracking-wider uppercase">
                    {" Certificat Officiel "}
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">
                    verified
                  </span>
                </div>
                <div className="my-space-md text-center flex flex-col items-center gap-space-xs z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center p-2 shadow-inner">
                    <svg aria-hidden="true" className="w-full h-full text-tertiary-fixed-dim fill-current" viewBox="0 0 48 48">
                      <path d="M24 4L27.5 16.5H40.5L30 24.2L34 36.8L24 29L14 36.8L18 24.2L7.5 16.5H20.5L24 4Z" />
                    </svg>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-primary leading-tight mt-1">
                    CV-AV DALOA
                  </p>
                  <p className="font-label-sm text-[10px] text-primary-fixed-dim tracking-widest uppercase">
                    Chancellerie Paroissiale
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-secondary-fixed-dim z-10 border-t border-white/10 pt-2">
                  <span>Session 2024-2025</span>
                  {" "}
                  <span className="font-mono">#ADH-8856</span>
                </div>
              </div>
              <div className="flex-1 p-space-lg flex flex-col justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-emerald-100/70 text-emerald-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {" Actif & En vigueur "}
                      </span>
                      {" "}
                      <span className="text-secondary font-label-sm text-label-sm">· Titre Diocésain</span>
                    </div>
                    <span className="font-mono text-body-sm text-secondary bg-surface-container px-2 py-0.5 rounded">
                      Réf : #ADH-DAL-2024-8856-C
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1">
                    {" Certificat d'Adhésion & d'Engagement Pastoral 2024–2025 "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    {" Atteste de la réinscription solennelle, de la promesse civique et chrétienne, ainsi que de l'intégration pleine et entière du cadet "}
                    <strong className="text-on-surface font-semibold">Moïse ASSI</strong>
                    {" à la Patrouille Saint-Joseph pour la mandature pastorale 2024-2025. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-sm bg-surface-container-low/60 p-space-md rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Date de promulgation
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
                      14 Octobre 2024
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Paroisse Le Plateau (Daloa)
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Autorités Scellantes
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
                      Abbé Jean-Marc Koffi
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">Aumônier Paroissial CV-AV</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Sceau & Garantie
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-variant">
                        qr_code_2
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Scellé Électronique Diocésain
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">Mgr Jean-Baptiste Akwaba</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <button className="inline-flex items-center gap-2 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-lg text-label-lg px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all font-semibold" type="button">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      {" Télécharger PDF (A4) "}
                    </button>
                    {" "}
                    <button className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg px-5 py-2.5 rounded-full transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      {" Voir en ligne / Vérifier QR "}
                    </button>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-emerald-700">lock</span>
                    {" Document inaltérable certifié "}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-72 bg-gradient-to-br from-[#1E3A5F] via-[#2A4365] to-primary p-space-md flex flex-col justify-between text-on-primary relative overflow-hidden flex-shrink-0">
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />
                <div className="flex items-start justify-between z-10">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary-fixed text-on-secondary-fixed tracking-wider uppercase">
                    {" Progression Pédagogique "}
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                    military_tech
                  </span>
                </div>
                <div className="my-space-md text-center flex flex-col items-center gap-space-xs z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center p-2 shadow-inner">
                    <svg className="w-full h-full text-secondary-fixed fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-primary leading-tight mt-1">
                    GRADE CADET
                  </p>
                  <p className="font-label-sm text-[10px] text-secondary-fixed tracking-widest uppercase">
                    Étoile d'Argent CV-AV
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-secondary-fixed-dim z-10 border-t border-white/10 pt-2">
                  <span>Promotion Espérance</span>
                  {" "}
                  <span className="font-mono">#DIP-CAD-042</span>
                </div>
              </div>
              <div className="flex-1 p-space-lg flex flex-col justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-emerald-100/70 text-emerald-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {" Homologué Diocèse "}
                      </span>
                      {" "}
                      <span className="text-secondary font-label-sm text-label-sm">· Camp de Formation</span>
                    </div>
                    <span className="font-mono text-body-sm text-secondary bg-surface-container px-2 py-0.5 rounded">
                      Réf : #DIP-CAD-2024-042
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1">
                    {" Diplôme de Franchissement d'Étape — Grade Cadet "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    {" Sanctionne la réussite des épreuves statutaires : sens du service, prière d'action de grâce, maîtrise des règles de vie en patrouille et esprit d'équipe sur le terrain diocésain. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-sm bg-surface-container-low/60 p-space-md rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Date d'Homologation
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
                      15 Juin 2024
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Camp Diocésain de Formation
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Mention d'Honneur
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-semibold text-tertiary-fixed-variant mt-0.5">
                      Félicitations du Conseil
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Attribution Étoile d'argent
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Conseil d'Évaluation
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
                      Collège des Chefs de Daloa
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">Procès-verbal n° 19/2024</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all font-semibold" type="button">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      {" Télécharger PDF (A4) "}
                    </button>
                    {" "}
                    <button className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg px-5 py-2.5 rounded-full transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]">checklist</span>
                      {" Détail des compétences (6/6) "}
                    </button>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">badge</span>
                    {" Port de l'insigne autorisé "}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-72 bg-gradient-to-br from-[#2D3748] to-[#1A202C] p-space-md flex flex-col justify-between text-on-primary relative overflow-hidden flex-shrink-0">
                <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                <div className="flex items-start justify-between z-10">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary-container text-on-secondary-container tracking-wider uppercase">
                    {" Spécialité Scoute "}
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[20px] text-secondary-fixed">sailing</span>
                </div>
                <div className="my-space-md text-center flex flex-col items-center gap-space-xs z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center p-2 shadow-inner">
                    <svg className="w-full h-full text-secondary-fixed fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
                      <circle cx="12" cy="12" fill="currentColor" r="3" />
                    </svg>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-primary leading-tight mt-1">
                    MATELOTAGE
                  </p>
                  <p className="font-label-sm text-[10px] text-secondary-fixed tracking-widest uppercase">
                    Niveau 1 — Nœuds & Amarrages
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-secondary-fixed-dim z-10 border-t border-white/10 pt-2">
                  <span>Patrouille St-Joseph</span>
                  {" "}
                  <span className="font-mono">#BRV-MAT-019</span>
                </div>
              </div>
              <div className="flex-1 p-space-lg flex flex-col justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-secondary-container text-on-secondary-container flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {" Certifié Patrouille "}
                      </span>
                      {" "}
                      <span className="text-secondary font-label-sm text-label-sm">· Brevet Technique</span>
                    </div>
                    <span className="font-mono text-body-sm text-secondary bg-surface-container px-2 py-0.5 rounded">
                      Réf : #BRV-MAT-2024-019
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1">
                    {" Brevet Technique de Matelotage & Nœuds Marins (Niveau 1) "}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    {" Confirme la maîtrise parfaite sous chronomètre des nœuds de chaise, d'amarrage, de cabestan, de pêcheur et de huit, ainsi que la réalisation d'un haubanage sécurisé de tente collective. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-sm bg-surface-container-low/60 p-space-md rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Date de validation
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
                      13 Octobre 2024
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Séance technique de Patrouille
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Instructeur Référant
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">
                      Chef Kouamé Jean
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Responsable Technique Section
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Note d'Épreuve Pratique
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md text-on-surface font-semibold text-primary mt-0.5">
                      18,5 / 20
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">
                      Exécution sans faute en 3 min
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all font-semibold" type="button">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      {" Télécharger PDF (A4) "}
                    </button>
                    {" "}
                    <button className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg px-5 py-2.5 rounded-full transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]">history_edu</span>
                      {" Historique de l'épreuve "}
                    </button>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    {" Inscrit au carnet de progression "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-space-lg rounded-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-start gap-space-md max-w-3xl">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">gavel</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline-sm text-headline-sm text-primary">
                  Authenticité & Valeur Probante des Documents Pastoraux
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" Toutes les attestations délivrées sur la plateforme officielle CV-AV Côte d'Ivoire comportent un identifiant cryptographique chiffré et une signature électronique certifiée par la Chancellerie Diocésaine. Elles sont vérifiables en scannant le QR code officiel ou directement auprès du secrétariat paroissial de Le Plateau (Daloa). "}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-primary font-label-lg text-label-lg px-6 py-3 rounded-full shadow-sm hover:shadow transition-all font-semibold" type="button">
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                {" Vérifier une attestation externe (Scan QR) "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
    </div>
  );
}
