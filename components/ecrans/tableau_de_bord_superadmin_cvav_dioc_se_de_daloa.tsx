// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/tableau_de_bord_superadmin_cvav_dioc_se_de_daloa/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Tableau de bord superadmin cvav dioc se de daloa — Domaine : Assainissement

export default function TableauDeBordSuperadminCvavDiocSeDeDaloa() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 left-0 right-0 h-16 bg-primary-container z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <div className="h-16 w-full px-gutter flex items-center justify-between">
      <div className="flex items-center gap-space-md">
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col">
          <span className="font-title-md text-title-md text-on-primary tracking-tight">
            CV-AV Diocèse de Daloa
          </span>
          <span className="font-label-sm text-label-sm text-on-primary-container">
            Plateforme Diocésaine · Coordination Pastorale
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button aria-label="Notifications" className="relative p-space-xs text-on-primary-container hover:text-on-primary transition-colors focus:outline-none" type="button">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
        </button>
        <div className="h-6 w-px bg-on-primary-container/30 mx-space-xs" />
        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:flex flex-col text-right">
            <span className="font-label-md text-label-md text-on-primary">Aumônerie Diocésaine</span>
            <span className="font-label-sm text-label-sm text-on-primary-container">Super Administrateur</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <aside className="fixed left-0 top-16 bottom-0 w-72 bg-surface-container-lowest z-40 flex flex-col justify-between py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] overflow-y-auto">
    <div className="flex flex-col gap-space-sm px-space-md">
      <div className="px-space-sm py-space-xs mb-space-xs">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
          Navigation Pastorale
        </span>
      </div>
      <nav className="flex flex-col gap-1" data-active-classes="bg-primary-container text-on-primary font-semibold">
        <a aria-current="page" className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl transition-all bg-primary-container text-on-primary font-semibold" data-path="tableau-de-bord" href="#">
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          <span className="font-label-lg text-label-lg">Tableau de bord</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="organisation" href="#">
          <span className="material-symbols-outlined text-[20px]">account_balance</span>
          <span className="font-label-lg text-label-lg">Organisation</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="utilisateurs" href="#">
          <span className="material-symbols-outlined text-[20px]">group</span>
          <span className="font-label-lg text-label-lg">Utilisateurs</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="referentiels" href="#">
          <span className="material-symbols-outlined text-[20px]">menu_book</span>
          <span className="font-label-lg text-label-lg">Référentiels</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="demandes-et-inscriptions" href="#">
          <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
          <span className="font-label-lg text-label-lg">Demandes & Inscriptions</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="statistiques" href="#">
          <span className="material-symbols-outlined text-[20px]">bar_chart</span>
          <span className="font-label-lg text-label-lg">Statistiques</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="audit-et-tracabilite" href="#">
          <span className="material-symbols-outlined text-[20px]">history</span>
          <span className="font-label-lg text-label-lg">Audit & Traçabilité</span>
        </a>
      </nav>
      <div className="my-space-xs mx-space-sm h-px bg-surface-container-highest" />
      <div className="px-space-sm py-space-xs">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
          Configuration
        </span>
      </div>
      <nav className="flex flex-col gap-1" data-active-classes="bg-primary-container text-on-primary font-semibold">
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="parametres-diocesains" href="#">
          <span className="material-symbols-outlined text-[20px]">tune</span>
          <span className="font-label-lg text-label-lg">Paramètres diocésains</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="sauvegardes" href="#">
          <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
          <span className="font-label-lg text-label-lg">Sauvegardes</span>
        </a>
      </nav>
    </div>
    <div className="px-space-md pt-space-sm">
      <div className="bg-surface-container p-space-sm rounded-xl flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">verified</span>
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Diocèse de Daloa</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Sceau diocésain actif</span>
        </div>
      </div>
    </div>
  </aside>
  <div className="pl-72">
    <main className="w-full pt-16 px-gutter bg-surface min-h-screen">
      <div className="flex flex-col w-full pb-margin">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
                {" Exercice Pastoral 2024–2025 "}
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-secondary">· Registre certifié</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Bonjour, Père Grégoire
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {" Super Administrateur · Aumônerie Diocésaine de Daloa (Côte d'Ivoire) "}
            </p>
          </div>
          <div className="flex items-center gap-space-sm flex-wrap">
            <div className="flex items-center bg-surface-container-lowest px-space-md py-2 rounded-xl shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined text-[18px] mr-2 text-primary">calendar_today</span>
              {" "}
              <span className="font-label-md text-label-md text-on-surface">Dimanche 18 Mai 2025</span>
            </div>
            <button className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-space-md py-2.5 rounded-full font-label-md text-label-md hover:bg-primary transition-all shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              {" "}
              <span>Sceau d'autorité actif</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Effectifs totaux
              </span>
              <div className="w-9 h-9 rounded-full bg-secondary-container/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">groups</span>
              </div>
            </div>
            <div className="flex items-baseline gap-space-sm mb-space-xs">
              <span className="font-display-lg text-display-lg text-primary tracking-tight font-semibold">
                1 842
              </span>
            </div>
            <div className="flex items-center gap-2 pt-space-xs">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                {" +8.4% "}
              </span>
              {" "}
              <span className="font-body-sm text-body-sm text-secondary">vs année dernière</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Paroisses actives
              </span>
              <div className="w-9 h-9 rounded-full bg-secondary-container/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">church</span>
              </div>
            </div>
            <div className="flex items-baseline gap-space-xs mb-space-xs">
              <span className="font-display-lg text-display-lg text-primary tracking-tight font-semibold">
                24
              </span>
              {" "}
              <span className="font-headline-md text-headline-md text-secondary">/ 26</span>
            </div>
            <div className="flex items-center gap-1.5 pt-space-xs">
              <span className="w-2 h-2 rounded-full bg-green-600" />
              {" "}
              <span className="font-body-sm text-body-sm text-secondary truncate">
                Doyenné Centre, Nord et Sud
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Cotisations collectées
              </span>
              <div className="w-9 h-9 rounded-full bg-tertiary-fixed/60 flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <div className="flex items-baseline mb-space-xs">
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight font-semibold">
                6 447 000
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-secondary ml-1 font-semibold">FCFA</span>
            </div>
            <div className="flex flex-col gap-1.5 pt-space-xs">
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-tertiary-fixed-dim h-full rounded-full transition-all duration-700" style={{ width: "92%" }} />
              </div>
              <div className="flex justify-between items-center text-secondary">
                <span className="font-label-sm text-label-sm font-medium">92% de l'objectif</span>
                {" "}
                <span className="font-body-sm text-body-sm">Cible 7.0M</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Demandes en attente
              </span>
              <div className="w-9 h-9 rounded-full bg-error-container/60 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[20px]">pending_actions</span>
              </div>
            </div>
            <div className="flex items-baseline mb-space-xs">
              <span className="font-display-lg text-display-lg text-primary tracking-tight font-semibold">
                38
              </span>
            </div>
            <div className="flex items-center gap-2 pt-space-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px]">priority_high</span>
                {" Action requise (8 urgentes) "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm mb-space-lg flex flex-col">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Évolution des effectifs diocésains (2020–2025)
                </span>
                {" "}
                <span className="material-symbols-outlined text-secondary text-[18px]" title="Effectifs certifiés par les curés de paroisse">
                  info
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary">
                {" Progression annuelle continue de la jeunesse CV-AV dans les 3 doyennés de Daloa "}
              </p>
            </div>
            <div className="inline-flex p-1 bg-surface-container rounded-xl self-start lg:self-auto">
              <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-xs" type="button">
                {" Toutes branches "}
              </button>
              {" "}
              <button className="px-3.5 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                {" Cœurs Vaillants (6-11 ans) "}
              </button>
              {" "}
              <button className="px-3.5 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                {" Âmes Vaillantes (12-15 ans) "}
              </button>
              {" "}
              <button className="px-3.5 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                {" Cadets (15+ ans) "}
              </button>
            </div>
          </div>
          <div className="w-full relative mt-2">
            <div className="flex justify-between items-center text-secondary font-label-sm text-label-sm pb-2 border-b border-surface-container">
              <span>2 000 max</span>
              {" "}
              <span className="text-tertiary-fixed-dim font-semibold">
                Pic diocésain : 1 842 jeunes en mai 2025
              </span>
            </div>
            <div className="w-full h-64 sm:h-72">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 280">
                <defs>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.18" />
                    <stop offset="70%" stopColor="#C9962C" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                  </linearGradient>
                  <filter height="140%" id="softShadow" width="140%" x="-20%" y="-20%">
                    <feDropShadow dx="0" dy="4" floodColor="#1B2A4A" floodOpacity="0.15" stdDeviation="4" />
                  </filter>
                </defs>
                <line stroke="#EDEFE0" strokeDasharray="4 4" strokeWidth="1" x1="40" x2="960" y1="40" y2="40" />
                <line stroke="#EDEFE0" strokeDasharray="4 4" strokeWidth="1" x1="40" x2="960" y1="100" y2="100" />
                <line stroke="#EDEFE0" strokeDasharray="4 4" strokeWidth="1" x1="40" x2="960" y1="160" y2="160" />
                <line stroke="#EDEFE0" strokeDasharray="4 4" strokeWidth="1" x1="40" x2="960" y1="220" y2="220" />
                <path d="M 80 205 C 170 195, 200 185, 260 185 C 350 185, 380 155, 440 155 C 530 155, 560 120, 620 120 C 710 120, 740 85, 800 85 C 870 85, 890 52, 940 52 L 940 240 L 80 240 Z" fill="url(#areaGradient)" />
                <path d="M 80 205 C 170 195, 200 185, 260 185 C 350 185, 380 155, 440 155 C 530 155, 560 120, 620 120 C 710 120, 740 85, 800 85 C 870 85, 890 52, 940 52" fill="none" stroke="#1B2A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                <circle cx="80" cy="205" fill="#C9962C" r="5" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="260" cy="185" fill="#C9962C" r="5" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="440" cy="155" fill="#C9962C" r="5" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="620" cy="120" fill="#C9962C" r="5" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="800" cy="85" fill="#C9962C" r="5" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="940" cy="52" fill="#1B2A4A" filter="url(#softShadow)" r="8" stroke="#C9962C" strokeWidth="3" />
                <circle cx="940" cy="52" fill="#FFFFFF" r="3" />
                <text fill="#54647A" fontFamily="Inter" fontSize="12" fontWeight="500" textAnchor="middle" x="80" y="190">
                  1 120
                </text>
                <text fill="#54647A" fontFamily="Inter" fontSize="12" fontWeight="500" textAnchor="middle" x="260" y="170">
                  1 240
                </text>
                <text fill="#54647A" fontFamily="Inter" fontSize="12" fontWeight="500" textAnchor="middle" x="440" y="140">
                  1 390
                </text>
                <text fill="#54647A" fontFamily="Inter" fontSize="12" fontWeight="500" textAnchor="middle" x="620" y="105">
                  1 560
                </text>
                <text fill="#54647A" fontFamily="Inter" fontSize="12" fontWeight="500" textAnchor="middle" x="800" y="70">
                  1 710
                </text>
                <text fill="#1B2A4A" fontFamily="Epilogue" fontSize="14" fontWeight="700" textAnchor="middle" x="940" y="36">
                  1 842
                </text>
              </svg>
            </div>
            <div className="flex justify-between items-center px-4 pt-3 text-secondary font-label-md text-label-md">
              <span>Session 2020</span>
              {" "}
              <span>Session 2021</span>
              {" "}
              <span>Session 2022</span>
              {" "}
              <span>Session 2023</span>
              {" "}
              <span>Session 2024</span>
              {" "}
              <span className="text-primary font-bold">Session 2025 (En cours)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg mb-space-lg">
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex flex-col">
                  <h2 className="font-headline-sm text-headline-sm text-primary">Répartition par doyenné</h2>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Coordination des sections paroissiales par secteur pastoral
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                  {" 3 Doyennés "}
                </span>
              </div>
              <div className="flex flex-col gap-space-md mt-space-sm">
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-surface/60 hover:bg-surface transition-colors">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="font-semibold text-primary">Doyenné Mgr Pierre-Marie Coty (Centre)</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-primary font-body-md text-body-md">840 jeunes</span>
                      {" "}
                      <span className="text-secondary text-body-sm">(45.6%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: "75%" }} />
                  </div>
                  <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-0.5">
                    <span>Cathédrale Christ-Roi, Ste-Thérèse, St-Pierre</span>
                    {" "}
                    <span className="text-primary font-medium">10 Paroisses</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-surface/60 hover:bg-surface transition-colors">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="font-semibold text-primary">Doyenné Saint-Joseph (Nord)</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-primary font-body-md text-body-md">560 jeunes</span>
                      {" "}
                      <span className="text-secondary text-body-sm">(30.4%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: "50%" }} />
                  </div>
                  <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-0.5">
                    <span>Issia, Saioua, Boguédia</span>
                    {" "}
                    <span className="text-primary font-medium">8 Paroisses</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-surface/60 hover:bg-surface transition-colors">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="font-semibold text-primary">Doyenné Notre-Dame (Sud)</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-primary font-body-md text-body-md">442 jeunes</span>
                      {" "}
                      <span className="text-secondary text-body-sm">(24.0%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                    <div className="bg-tertiary-fixed-dim h-full rounded-full" style={{ width: "40%" }} />
                  </div>
                  <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-0.5">
                    <span>Zoukougbeu, Vavoua rurale, Bédiala</span>
                    {" "}
                    <span className="text-primary font-medium">6 Paroisses</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between font-body-sm text-body-sm text-secondary">
              <span className="inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                {" Synchronisation avec la chancellerie diocésaine "}
              </span>
              {" "}
              <a className="text-primary font-label-md text-label-md hover:underline inline-flex items-center gap-1 font-semibold" href="#">
                {" Rapport de secteur "}
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex flex-col">
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Dernières actions d'audit & sécurité
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Traçabilité cryptographique et journal officiel des actes
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  {" Audit actif "}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-start gap-space-sm py-2.5 hover:bg-surface-bright rounded-xl px-2 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-label-md text-label-md text-primary font-semibold truncate">
                        Scellement Registre Rassemblement (28/28)
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                        Il y a 14 min
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Par Fr. Jean-Marc KOFFI · Aumônerie Diocésaine
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm py-2.5 hover:bg-surface-bright rounded-xl px-2 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">badge</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-label-md text-label-md text-primary font-semibold truncate">
                        Émission Carte PVC #8860
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                        Il y a 1 h
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Par Secrétariat Christ-Roi · Paroisse Cathédrale
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm py-2.5 hover:bg-surface-bright rounded-xl px-2 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">person_add</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-label-md text-label-md text-primary font-semibold truncate">
                        Création compte Chef de Section
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                        Il y a 3 h
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Par Abbé Jean-Baptiste · Vicaire Paroissial
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm py-2.5 hover:bg-surface-bright rounded-xl px-2 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-label-md text-label-md text-primary font-semibold truncate">
                        Export Grand Livre PDF/A-3b
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                        Hier à 17:30
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Par P. Grégoire AMOIKON · Super Administrateur
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm py-2.5 hover:bg-surface-bright rounded-xl px-2 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-error-container/40 text-error flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">block</span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-label-md text-label-md text-error font-semibold truncate">
                        Suspension temporaire Carte #8845
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                        Hier à 14:15
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Par Admin Paroisse · St-Joseph Issia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between font-body-sm text-body-sm text-secondary">
              <span>Journal complet : 1 248 événements</span>
              {" "}
              <a className="text-primary font-label-md text-label-md hover:underline inline-flex items-center gap-1 font-semibold" href="#">
                {" Consulter l'audit "}
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary-container/20 pointer-events-none" />
          <div className="flex items-center gap-space-md z-10 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">admin_panel_settings</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Délégation de gouvernance diocésaine
                </span>
                {" "}
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-secondary-container/50 text-primary font-label-sm text-label-sm font-semibold">
                  WF-00
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" Nommez un responsable de doyenné ou assignez les clés pastorales à un nouveau vicaire/secrétaire de paroisse avec signature certifiée. "}
              </p>
            </div>
          </div>
          <div className="z-10 shrink-0 w-full md:w-auto flex justify-end">
            <button className="w-full md:w-auto inline-flex items-center justify-center gap-space-sm bg-tertiary-fixed-dim hover:bg-on-tertiary-container text-on-primary font-headline-sm text-headline-sm px-space-lg py-3 rounded-full shadow-sm transition-all duration-200 active:scale-95 focus:outline-none" type="button">
              <span className="material-symbols-outlined text-[24px]">person_add</span>
              {" "}
              <span className="tracking-tight text-white font-semibold">
                Créer un administrateur de doyenné / paroisse
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
    </div>
  );
}
