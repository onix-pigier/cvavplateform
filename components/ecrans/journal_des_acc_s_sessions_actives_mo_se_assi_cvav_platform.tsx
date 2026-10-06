// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/journal_des_acc_s_sessions_actives_mo_se_assi_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Journal des acc s sessions actives mo se assi cvav platform — Domaine : Authentification

export default function JournalDesAccSSessionsActivesMoSeAssiCvavPlatform() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 left-0 right-0 h-16 bg-primary-container text-on-primary z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <div className="w-full h-16 px-margin flex items-center justify-between">
      <div className="flex items-center gap-space-md">
        <img alt="Logo officiel CV-AV Côte d'Ivoire" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
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
          <span className="font-body-sm text-body-sm text-on-primary-container">
            Paroisse Le Plateau · Doyenné de Daloa
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
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="accueil" href="#">
          Accueil
        </a>
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-presences" href="#">
          Mes présences
        </a>
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-attestations" href="#">
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
        <div className="px-margin py-space-lg flex flex-col gap-space-lg max-w-[1440px] mx-auto w-full">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <span className="hover:text-primary transition-colors cursor-pointer">Portail Diocésain</span>
            {" "}
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            {" "}
            <span className="hover:text-primary transition-colors cursor-pointer">Espace Militant</span>
            {" "}
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            {" "}
            <span className="hover:text-primary transition-colors cursor-pointer">Mon Compte</span>
            {" "}
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            {" "}
            <span className="font-semibold text-primary">Sécurité & Journal des Accès</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-1 max-w-3xl">
              <div className="flex items-center gap-space-xs">
                <span className="bg-primary/10 text-primary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  Protocole CECCI-SEC v3.4
                </span>
                {" "}
                <span className="text-outline text-label-sm font-label-sm">•</span>
                {" "}
                <span className="text-secondary font-label-sm text-label-sm font-mono tracking-tight">
                  ID: #CVAV-DAL-2024-0513-A
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Journal des Accès & Sessions de Sécurité
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {" Historique exhaustif des connexions, renouvellements de clé d’intégrité et gestion des terminaux autorisés pour le militant "}
                <strong className="text-primary font-medium">Moïse ASSI</strong>
                {". "}
              </p>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <a className="flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-full font-label-lg text-label-lg text-primary bg-surface-container-high hover:bg-surface-container-highest transition-colors" data-path="mon-compte" href="#">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                {" "}
                <span>Retour au profil</span>
              </a>
              {" "}
              <button className="flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-full font-label-lg text-label-lg text-error bg-error-container hover:bg-error hover:text-on-error transition-all shadow-sm focus:outline-none" id="btn-kill-sessions" type="button">
                <span className="material-symbols-outlined text-[18px]">phonelink_erase</span>
                {" "}
                <span>Déconnecter toutes les autres sessions</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Session Actuelle
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                    {" "}
                    <span className="w-1.5 h-1.5 -ml-2 rounded-full bg-emerald-600" />
                    {" "}
                    <span className="font-label-sm text-label-sm font-semibold">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm mt-2">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">laptop_mac</span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-title-md text-title-md text-primary truncate">Chrome 129 sur macOS</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Daloa, CI • IP: 160.154.12.84
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-secondary mt-3 pt-2 bg-surface-container-low px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-700">verified_user</span>
                {" "}
                <span>Certificat SSL de section validé</span>
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary-fixed/30 rounded-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Authentification Renforcée
                  </span>
                  {" "}
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/60 text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                    2FA Tuteur SMS
                  </span>
                </div>
                <div className="flex items-center gap-space-sm mt-2">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">shield_person</span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-title-md text-title-md text-primary truncate">+225 07 08 19 28 37</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Clé SHA-256 scellée & synchro
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-secondary mt-3 pt-2 bg-surface-container-low px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">phonelink_lock</span>
                {" "}
                <span>Contrôle parental diocésain actif</span>
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary-container/40 rounded-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Sécurité du Compte
                  </span>
                  {" "}
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 font-label-sm text-label-sm font-medium">
                    Récent (11:35 GMT)
                  </span>
                </div>
                <div className="flex items-center gap-space-sm mt-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">password</span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-title-md text-title-md text-primary truncate">
                      Mot de passe renouvelé
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Aujourd’hui à 11:35 GMT
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-secondary mt-3 pt-2 bg-surface-container-low px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 truncate">
                <span className="material-symbols-outlined text-[16px] text-secondary">sms</span>
                {" "}
                <span className="truncate">Confirmé par SMS #DLR-SMS-88492</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <section className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-xs">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Sessions Actives & Terminaux Enregistrés
                    </h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Appareils ayant accès ou synchronisés avec le dossier militant diocésain
                    </p>
                  </div>
                  <span className="self-start sm:self-auto bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant font-medium">
                    2 terminaux autorisés
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm mt-space-xs">
                  <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0">
                        <span className="material-symbols-outlined text-[24px]">desktop_mac</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-md text-title-md text-primary font-semibold">
                            Navigateur Web Desktop (Cet appareil)
                          </span>
                          {" "}
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 font-label-sm text-label-sm font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            {" Session active actuelle "}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">
                              location_on
                            </span>
                            Quartier Le Plateau, Daloa (CI)
                          </span>
                          {" "}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">dns</span>
                            IP: 160.154.12.84
                          </span>
                          {" "}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                            Connecté le 14 Oct. 2024 à 11:35 GMT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 self-end sm:self-auto">
                      <span className="font-label-sm text-label-sm text-outline px-3 py-1.5 rounded-full bg-surface-container-highest">
                        Verrouillé à ce poste
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                        <span className="material-symbols-outlined text-[24px]">contactless</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-md text-title-md text-primary font-semibold">
                            Terminal Mobile Terrain (Chef de Patrouille)
                          </span>
                          {" "}
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                            Authentification déléguée autorisée
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">hub</span>
                            Borne Patrouille Saint-Joseph (#TERM-DAL-04)
                          </span>
                          {" "}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">sync</span>
                            Dernière synchro : 14 Oct. à 11:00 GMT
                          </span>
                          {" "}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">nfc</span>
                            Pointage présence par carte
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 self-end sm:self-auto">
                      <button className="btn-revoke-terminal px-3.5 py-1.5 rounded-full bg-surface-container text-error hover:bg-error hover:text-on-error font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">link_off</span>
                        {" "}
                        <span>Délier le terminal</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low/60 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md opacity-75">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">block</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-md text-title-md text-on-surface-variant font-semibold">
                            Ancienne session Web Desktop
                          </span>
                          {" "}
                          <span className="px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold">
                            Clé révoquée
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-outline font-body-sm text-body-sm">
                          <span>Firefox / Windows 11</span>
                          {" "}
                          <span>•</span>
                          {" "}
                          <span>IP: 160.154.9.112</span>
                          {" "}
                          <span>•</span>
                          {" "}
                          <span>
                            Invalidée automatiquement suite au renouvellement du mot de passe à 11:35 GMT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 self-end sm:self-auto">
                      <span className="font-label-sm text-label-sm text-outline px-3 py-1 rounded-full bg-surface-container-high">
                        Archivée
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Journal Détaillé des Événements de Sécurité
                    </h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Traçabilité cryptographique conforme aux normes pastorales diocésaines
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap" id="audit-filters">
                    <button className="filter-btn active px-3 py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary font-medium transition-colors" data-filter="all">
                      Tous (6)
                    </button>
                    {" "}
                    <button className="filter-btn px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors" data-filter="login">
                      Connexions (2)
                    </button>
                    {" "}
                    <button className="filter-btn px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors" data-filter="security">
                      Sécurité (3)
                    </button>
                    {" "}
                    <button className="filter-btn px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors" data-filter="field">
                      Pointages (1)
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm">
                        <th className="py-2.5 px-3 rounded-l-lg">Horodatage (GMT)</th>
                        <th className="py-2.5 px-3">Nature de l’événement</th>
                        <th className="py-2.5 px-3">Terminal & Contexte</th>
                        <th className="py-2.5 px-3">Vérification Tuteur</th>
                        <th className="py-2.5 px-3 rounded-r-lg text-right">Statut Clé</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm text-on-surface">
                      <tr className="audit-row hover:bg-surface-container-lowest/60 transition-colors" data-category="security">
                        <td className="py-3 px-3 align-top font-mono text-secondary whitespace-nowrap">
                          <span className="text-primary font-semibold">14/10/2024</span>
                          <br />
                          {" "}
                          <span className="text-label-sm font-label-sm text-outline">11:35:08 GMT</span>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="flex items-center gap-1.5 font-title-md text-title-md text-primary">
                            <span className="material-symbols-outlined text-[18px] text-tertiary-container">
                              lock_reset
                            </span>
                            {" "}
                            <span>Renouvellement du mot de passe</span>
                          </div>
                          <span className="text-secondary font-body-sm text-body-sm">
                            Procédure de réinitialisation sécurisée
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-secondary">
                          <p className="font-medium text-primary">Web Desktop (macOS)</p>
                          <p className="text-label-sm font-label-sm">IP 160.154.12.84 • Daloa</p>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                            {" OTP SMS Validé "}
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 font-label-sm text-label-sm font-semibold">
                            Succès (Scellé)
                          </span>
                        </td>
                      </tr>
                      <tr className="audit-row hover:bg-surface-container-lowest/60 transition-colors" data-category="security">
                        <td className="py-3 px-3 align-top font-mono text-secondary whitespace-nowrap">
                          <span className="text-primary font-semibold">14/10/2024</span>
                          <br />
                          {" "}
                          <span className="text-label-sm font-label-sm text-outline">11:35:09 GMT</span>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="flex items-center gap-1.5 font-title-md text-title-md text-primary">
                            <span className="material-symbols-outlined text-[18px] text-secondary">
                              send_to_mobile
                            </span>
                            {" "}
                            <span>Télégramme SMS Tuteur</span>
                          </div>
                          <span className="text-secondary font-body-sm text-body-sm">
                            Alerte sécurité transactionnelle automatique
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-secondary">
                          <p className="font-medium text-primary">Passerelle Orange CI</p>
                          <p className="text-label-sm font-label-sm">Réf: #DLR-SMS-88492</p>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[14px]">outgoing_mail</span>
                            {" +225 07 08 19 28 37 "}
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 font-label-sm text-label-sm font-semibold">
                            Délivré (680 ms)
                          </span>
                        </td>
                      </tr>
                      <tr className="audit-row hover:bg-surface-container-lowest/60 transition-colors" data-category="security">
                        <td className="py-3 px-3 align-top font-mono text-secondary whitespace-nowrap">
                          <span className="text-primary font-semibold">14/10/2024</span>
                          <br />
                          {" "}
                          <span className="text-label-sm font-label-sm text-outline">11:32:15 GMT</span>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="flex items-center gap-1.5 font-title-md text-title-md text-primary">
                            <span className="material-symbols-outlined text-[18px] text-primary">
                              manage_accounts
                            </span>
                            {" "}
                            <span>Mise à jour coordonnées tuteur & domicile</span>
                          </div>
                          <span className="text-secondary font-body-sm text-body-sm">
                            Modification fiche paroissiale
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-secondary">
                          <p className="font-medium text-primary">Web Desktop (macOS)</p>
                          <p className="text-label-sm font-label-sm">IP 160.154.12.84 • Daloa</p>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed/60 text-on-tertiary-fixed-variant font-label-sm text-label-sm font-medium">
                            {" Approbation tuteur "}
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                            Enregistré
                          </span>
                        </td>
                      </tr>
                      <tr className="audit-row hover:bg-surface-container-lowest/60 transition-colors" data-category="login">
                        <td className="py-3 px-3 align-top font-mono text-secondary whitespace-nowrap">
                          <span className="text-primary font-semibold">14/10/2024</span>
                          <br />
                          {" "}
                          <span className="text-label-sm font-label-sm text-outline">11:15:22 GMT</span>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="flex items-center gap-1.5 font-title-md text-title-md text-primary">
                            <span className="material-symbols-outlined text-[18px] text-emerald-700">
                              login
                            </span>
                            {" "}
                            <span>Connexion Espace Militant</span>
                          </div>
                          <span className="text-secondary font-body-sm text-body-sm">
                            Session utilisateur ouverte
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-secondary">
                          <p className="font-medium text-primary">Chrome macOS</p>
                          <p className="text-label-sm font-label-sm">Daloa • IP: 160.154.12.84</p>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <span className="inline-flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
                            {" Login + Mot de passe "}
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 font-label-sm text-label-sm font-semibold">
                            Succès
                          </span>
                        </td>
                      </tr>
                      <tr className="audit-row hover:bg-surface-container-lowest/60 transition-colors" data-category="field">
                        <td className="py-3 px-3 align-top font-mono text-secondary whitespace-nowrap">
                          <span className="text-primary font-semibold">13/10/2024</span>
                          <br />
                          {" "}
                          <span className="text-label-sm font-label-sm text-outline">09:41:00 GMT</span>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="flex items-center gap-1.5 font-title-md text-title-md text-primary">
                            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                              sensors
                            </span>
                            {" "}
                            <span>Pointage Présence Rassemblement NFC</span>
                          </div>
                          <span className="text-secondary font-body-sm text-body-sm">
                            Cérémonie dominicale Cathédrale Christ-Roi
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-secondary">
                          <p className="font-medium text-primary">Borne NFC Paroissiale</p>
                          <p className="text-label-sm font-label-sm">Carte #04:A2:8F:9C</p>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-medium">
                            {" Chef Patrouille #CP-08 "}
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 font-label-sm text-label-sm font-semibold">
                            Présent validé
                          </span>
                        </td>
                      </tr>
                      <tr className="audit-row hover:bg-surface-container-lowest/60 transition-colors" data-category="login">
                        <td className="py-3 px-3 align-top font-mono text-secondary whitespace-nowrap">
                          <span className="text-primary font-semibold">12/10/2024</span>
                          <br />
                          {" "}
                          <span className="text-label-sm font-label-sm text-outline">18:20:44 GMT</span>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="flex items-center gap-1.5 font-title-md text-title-md text-on-surface-variant">
                            <span className="material-symbols-outlined text-[18px] text-outline">history</span>
                            {" "}
                            <span>Consultation Attestations</span>
                          </div>
                          <span className="text-secondary font-body-sm text-body-sm">
                            Téléchargement certificat militant
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-secondary">
                          <p className="font-medium text-primary">Safari iPhone (iOS 17)</p>
                          <p className="text-label-sm font-label-sm">Abidjan • IP: 41.202.219.12</p>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <span className="text-outline font-body-sm text-body-sm">
                            Jeton d'authentification
                          </span>
                        </td>
                        <td className="py-3 px-3 align-top text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                            Session expirée
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between pt-space-xs text-secondary font-body-sm text-body-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                      verified
                    </span>
                    {" "}
                    <span>Empreinte cryptographique d'audit scellée par l'Archevêché</span>
                  </span>
                  {" "}
                  <span className="text-outline text-label-sm font-label-sm mt-1 sm:mt-0">
                    Affichage des 6 derniers événements enregistrés
                  </span>
                </div>
              </section>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-lg">
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">family_restroom</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Contrôle Parental</h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Protection & notification en temps réel
                    </p>
                  </div>
                </div>
                <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Tuteur Légal Référent
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      M. Moïse Koffi ASSI
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 font-label-sm text-label-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      {" Vérifié "}
                    </span>
                  </div>
                  <p className="font-mono text-body-sm text-secondary flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-outline">call</span>
                    {" "}
                    <span>+225 07 08 19 28 37</span>
                  </p>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-primary leading-snug">
                        Alerte SMS nouvelle connexion
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-secondary">
                        Envoi immédiat dès qu’un navigateur inconnu se connecte
                      </span>
                    </div>
                    <button aria-pressed="true" className="toggle-btn w-12 h-6 rounded-full bg-tertiary-container p-0.5 flex items-center transition-colors focus:outline-none shrink-0 cursor-pointer" type="button">
                      <span className="w-5 h-5 rounded-full bg-on-tertiary shadow-sm transform translate-x-6 transition-transform" />
                    </button>
                  </div>
                  <div className="flex items-start justify-between gap-space-sm pt-space-xs border-t border-surface-container">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-primary leading-snug">
                        Échecs d'authentification
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-secondary">
                        Alerter le tuteur dès 3 essais erronés consécutifs
                      </span>
                    </div>
                    <button aria-pressed="true" className="toggle-btn w-12 h-6 rounded-full bg-tertiary-container p-0.5 flex items-center transition-colors focus:outline-none shrink-0 cursor-pointer" type="button">
                      <span className="w-5 h-5 rounded-full bg-on-tertiary shadow-sm transform translate-x-6 transition-transform" />
                    </button>
                  </div>
                  <div className="flex items-start justify-between gap-space-sm pt-space-xs border-t border-surface-container">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-primary leading-snug">
                        Validation pointages paroissiaux
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-secondary">
                        Résumé hebdomadaire des présences du dimanche
                      </span>
                    </div>
                    <button aria-pressed="false" className="toggle-btn w-12 h-6 rounded-full bg-surface-variant p-0.5 flex items-center transition-colors focus:outline-none shrink-0 cursor-pointer" type="button">
                      <span className="w-5 h-5 rounded-full bg-surface shadow-sm transform translate-x-0 transition-transform" />
                    </button>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <button className="w-full py-2.5 px-space-md rounded-full font-label-lg text-label-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-medium flex items-center justify-center gap-2 transition-colors focus:outline-none" id="btn-test-sms" type="button">
                    <span className="material-symbols-outlined text-[18px]">cell_tower</span>
                    {" "}
                    <span>Tester l’alerte SMS tuteur</span>
                  </button>
                  <p className="hidden text-center font-body-sm text-body-sm text-emerald-800 mt-2 font-medium" id="sms-feedback">
                    ✓ Télégramme test envoyé au +225 07 08 19 28 37
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">policy</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Protection des Données</h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Normes CECCI pour la jeunesse catholique
                    </p>
                  </div>
                </div>
                <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                  <p>
                    {" Conformément à la convention de pastorale des jeunes de Côte d’Ivoire, les journaux d’accès des militants mineurs sont chiffrés et archivés pendant "}
                    <strong className="text-primary">12 mois révolus</strong>
                    {" dans les serveurs certifiés du Diocèse de Daloa. "}
                  </p>
                  <div className="p-space-sm rounded-xl bg-surface-container-low text-secondary flex items-start gap-2">
                    <span className="material-symbols-outlined text-[20px] text-tertiary-container shrink-0 mt-0.5">
                      verified_user
                    </span>
                    <p className="text-label-sm font-label-sm">
                      {" Aucune donnée de géolocalisation continue n’est enregistrée. Seuls les points d’émargement NFC certifiés par les aumôniers font foi. "}
                    </p>
                  </div>
                </div>
                <div className="pt-space-xs flex flex-col gap-2">
                  <button className="w-full py-3 px-space-md rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg font-semibold hover:bg-tertiary-fixed-dim transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-none" id="btn-download-audit" type="button">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                    {" "}
                    <span>Télécharger mon journal d'audit (.PDF)</span>
                  </button>
                  <p className="text-center font-label-sm text-label-sm text-outline">
                    Document officiel certifié avec sceau diocésain
                  </p>
                </div>
              </div>
              <div className="p-space-md rounded-2xl bg-primary text-on-primary flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">help_center</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-title-md text-title-md text-on-primary font-semibold">
                    Une session vous semble suspecte ?
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
                    Contactez l'Aumônerie de Daloa au secrétariat diocésain.
                  </p>
                </div>
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
