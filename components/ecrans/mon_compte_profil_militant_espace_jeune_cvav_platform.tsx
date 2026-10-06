// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/mon_compte_profil_militant_espace_jeune_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Mon compte profil militant espace jeune cvav platform — Domaine : Espace Militant

export default function MonCompteProfilMilitantEspaceJeuneCvavPlatform() {
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
        <section className="w-full px-margin py-space-lg bg-surface">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md">
            <div className="flex flex-col gap-space-xs">
              <nav className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                <a className="hover:text-primary transition-colors" href="#">Portail Diocésain</a>
                {" "}
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                {" "}
                <a className="hover:text-primary transition-colors" href="#">Espace Militant</a>
                {" "}
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                {" "}
                <span className="text-primary font-semibold">Mon compte & Profil</span>
              </nav>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Mon Compte & Profil Militant
              </h1>
              <p className="font-body-md text-body-md text-secondary">
                {" Identité canonique, informations personnelles, tuteur légal et paramètres sécurisés du militant. "}
              </p>
            </div>
            <div className="flex items-center gap-space-sm self-start md:self-auto">
              <button className="inline-flex items-center justify-center gap-space-xs min-h-[44px] px-space-lg rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[20px]">edit</span>
                {" "}
                <span>Modifier mes informations</span>
              </button>
              {" "}
              <button className="inline-flex items-center justify-center gap-space-xs min-h-[44px] px-space-lg rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-label-lg text-label-lg font-semibold shadow-sm hover:brightness-95 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                {" "}
                <span>Exporter ma fiche signalétique (PDF)</span>
              </button>
            </div>
          </div>
        </section>
        <section className="w-full px-margin pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-5 flex flex-col gap-gutter">
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden relative">
                <div className="h-28 w-full bg-gradient-to-r from-primary-container via-primary to-primary-container relative">
                  <div className="absolute inset-0 opacity-10 flex items-center justify-end overflow-hidden pr-4">
                    <svg className="text-on-primary transform translate-x-12 -translate-y-4" fill="currentColor" height="240" viewBox="0 0 100 100" width="240">
                      <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="2" />
                      <path d="M50 15 L50 85 M20 40 L80 40" stroke="currentColor" strokeWidth="3" />
                      <polygon points="50,20 60,35 40,35" />
                    </svg>
                  </div>
                  <div className="absolute top-space-sm left-space-md bg-surface-container-lowest/15 backdrop-blur-md px-space-sm py-0.5 rounded-full flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">
                      verified
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-primary font-medium tracking-wide">
                      Diocèse de Daloa · Registre Certifié
                    </span>
                  </div>
                </div>
                <div className="px-space-lg pb-space-lg pt-0 relative flex flex-col">
                  <div className="flex items-end justify-between -mt-14 mb-space-md">
                    <div className="relative group">
                      <img className="w-24 h-24 rounded-2xl object-cover shadow-md bg-surface-container-high" data-alt="Photographie d'identité officielle d'un jeune garçon ivoirien souriant et confiant portant l'uniforme officiel CV-AV avec foulard de patrouille et chemise repassée, arrière-plan de paroisse aux teintes sobres d'Afrique de l'Ouest, lumière naturelle et solennelle." src="/assets/image-placeholder.svg" />
                      {" "}
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                        <span className="w-4 h-4 rounded-full bg-[#2E7D32] flex items-center justify-center text-on-primary text-[10px] font-bold">
                          ✓
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                        {" Militant Actif · En règle "}
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-secondary">
                        Cotisation Diocésaine 2024–2025
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mb-space-md">
                    <h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
                      Moïse Koffi ASSI
                    </h2>
                    <div className="flex items-center gap-space-xs mt-0.5">
                      <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wider">
                        Matricule Officiel:
                      </span>
                      {" "}
                      <code className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-sm text-primary font-bold">
                        #CVAV-DAL-2024-0513-A
                      </code>
                      {" "}
                      <button className="p-1 rounded-full hover:bg-surface-container text-secondary hover:text-primary transition-colors" title="Copier le matricule">
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-space-xs p-space-sm bg-surface-container-low rounded-xl text-center">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">Section</span>
                      {" "}
                      <span className="font-title-md text-title-md text-primary font-bold">Cadet</span>
                    </div>
                    <div className="flex flex-col bg-surface-container-lowest/80 rounded-lg py-1 shadow-sm">
                      <span className="font-label-sm text-label-sm text-secondary">Étoiles</span>
                      {" "}
                      <span className="font-title-md text-title-md text-tertiary-fixed-dim font-bold flex items-center justify-center gap-0.5">
                        {" ★ ★ "}
                        <span className="text-surface-dim font-normal">★</span>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">Présences</span>
                      {" "}
                      <span className="font-title-md text-title-md text-[#2E7D32] font-bold">96%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-container text-[22px]">church</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Identité & Engagement CV-AV
                    </h3>
                  </div>
                  <span className="px-space-xs py-0.5 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm font-semibold">
                    {" Rôle Actif "}
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm text-on-surface">
                  <div className="grid grid-cols-2 gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                    <div>
                      <span className="block font-label-sm text-label-sm text-secondary">
                        Branche de formation
                      </span>
                      <p className="font-title-md text-title-md text-primary font-bold mt-0.5">
                        Cœurs Vaillants
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">Section Garçons (8–12 ans)</p>
                    </div>
                    <div>
                      <span className="block font-label-sm text-label-sm text-secondary">
                        Patrouille affiliée
                      </span>
                      <p className="font-title-md text-title-md text-primary font-bold mt-0.5 flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim inline-block" />
                        {" Saint-Joseph "}
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">Étendard Jaune & Marine</p>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary">
                      Paroisse canonique de rattachement
                    </span>
                    <p className="font-label-lg text-label-lg text-primary font-bold">
                      {" Cathédrale Christ-Roi / Paroisse Le Plateau "}
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {" Doyenné de Daloa · Région ecclésiale du Haut-Sassandra "}
                    </p>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary">
                      Parcours initiatique diocésain
                    </span>
                    <div className="flex items-center justify-between text-body-sm text-body-sm pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          verified_user
                        </span>
                        <div>
                          <p className="font-label-md text-label-md text-primary font-medium">Aspirant CV</p>
                          <p className="font-body-sm text-body-sm text-secondary">15 Octobre 2022</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        arrow_forward
                      </span>
                      <div className="flex items-center gap-1.5 text-right">
                        <div>
                          <p className="font-label-md text-label-md text-primary font-bold">Cadet Promu</p>
                          <p className="font-body-sm text-body-sm text-tertiary-fixed-variant font-semibold">
                            15 Juin 2024
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
                          military_tech
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                    <div className="p-space-sm bg-surface-container rounded-xl flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        supervisor_account
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary">Chef de Patrouille</span>
                        <p className="font-label-md text-label-md text-primary font-bold">Chef Kouamé Jean</p>
                        <p className="font-body-sm text-body-sm text-secondary font-mono mt-0.5">
                          +225 07 12 34 56 78
                        </p>
                      </div>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded-xl flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        styler
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary">Aumônier Paroissial</span>
                        <p className="font-label-md text-label-md text-primary font-bold">
                          Abbé Jean-Marc KOFFI
                        </p>
                        <p className="font-body-sm text-body-sm text-secondary mt-0.5">Vicaire Paroissial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[22px]">contactless</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Carte PVC & Sécurité NFC</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    {" Active & Scellée "}
                  </span>
                </div>
                <div className="w-full bg-gradient-to-br from-primary-container via-primary to-[#0f1d38] text-on-primary rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden h-44">
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-space-xs">
                      <div className="w-9 h-7 rounded bg-tertiary-fixed-dim/90 flex flex-col justify-around p-1 shadow-inner">
                        <div className="h-0.5 bg-tertiary-container/30 w-full" />
                        <div className="h-0.5 bg-tertiary-container/30 w-full" />
                      </div>
                      <span className="material-symbols-outlined text-on-primary-container text-[20px]">
                        contactless
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim font-bold">
                      CV-AV CI CARD
                    </span>
                  </div>
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="font-mono text-label-sm text-on-primary-container tracking-wider">
                      PUCE MIFARE 1K · 04:A2:8F:9C
                    </span>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-title-md text-title-md font-bold text-on-primary tracking-wide">
                          MOÏSE KOFFI ASSI
                        </p>
                        <p className="font-label-sm text-label-sm text-on-primary-container">
                          DIOCÈSE DE DALOA · PAROISSE LE PLATEAU
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="block font-label-sm text-[10px] uppercase text-on-primary-container">
                          Validité
                        </span>
                        {" "}
                        <span className="font-mono font-bold text-label-sm text-tertiary-fixed">2024–2027</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-on-primary/5 pointer-events-none" />
                </div>
                <div className="grid grid-cols-2 gap-space-sm text-body-sm text-body-sm pt-space-xs">
                  <div className="p-space-sm bg-surface-container-low rounded-xl">
                    <span className="font-label-sm text-label-sm text-secondary block">Date d'émission</span>
                    {" "}
                    <span className="font-label-md text-label-md text-primary font-bold">14 Octobre 2024</span>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5">Par le Bureau Diocésain</p>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl">
                    <span className="font-label-sm text-label-sm text-secondary block">Cycle triennal</span>
                    {" "}
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Mandature 2024–2027
                    </span>
                    <p className="font-body-sm text-body-sm text-[#2E7D32] font-semibold mt-0.5">
                      Certificat valide
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <button className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary-fixed-dim transition-colors">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    {" "}
                    <span>Voir le certificat de scellement</span>
                  </button>
                  {" "}
                  <button className="inline-flex items-center gap-1 font-label-sm text-label-sm text-error font-medium hover:underline">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    {" "}
                    <span>Signaler perte ou vol</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-gutter">
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[22px]">badge</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Données Personnelles</h3>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">Mise à jour: 14 Oct. 2024</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-[20px]">cake</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">
                        Date de naissance & Âge
                      </span>
                      <p className="font-label-lg text-label-lg text-primary font-bold mt-0.5">18 Mai 2014</p>
                      <p className="font-body-sm text-body-sm text-secondary">10 ans révolus</p>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-[20px]">male</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">Sexe / Genre</span>
                      <p className="font-label-lg text-label-lg text-primary font-bold mt-0.5">Masculin</p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Section Cœurs Vaillants Garçons
                      </p>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-[20px]">home_pin</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">
                        Lieu de résidence habituel
                      </span>
                      <p className="font-label-lg text-label-lg text-primary font-bold mt-0.5">
                        Daloa, Quartier Le Plateau
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Rue des Jardins (Proximité Cathédrale)
                      </p>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-[20px]">school</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">Établissement scolaire</span>
                      <p className="font-label-lg text-label-lg text-primary font-bold mt-0.5">
                        Collège Saint-Joseph de Daloa
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Classe de CM2 (Primaire Diocésain)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[22px]">family_restroom</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Tuteur Légal & Contacts d'Urgence
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    {" Vérification OTP Réussie "}
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">
                        {" MA "}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            M. Moïse Koffi ASSI
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-medium">
                            Père · Tuteur Principal
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                          Profession: Fonctionnaire Enseignant (Éducation Nationale)
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                          {" "}
                          <span className="font-mono font-bold text-label-md text-primary">
                            +225 07 08 19 28 37
                          </span>
                          {" "}
                          <span className="inline-flex items-center gap-0.5 text-[#2E7D32] font-label-sm text-[11px] font-semibold">
                            {" (Vérifié par SMS) "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <a className="min-h-[38px] px-space-md rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1" href="tel:+2250708192837">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                        {" Appeler "}
                      </a>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-12 h-12 rounded-full bg-surface-container text-secondary flex items-center justify-center font-headline-sm text-headline-sm">
                        {" AT "}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Mme Ahou Thérèse KOFFI
                          </span>
                          {" "}
                          <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-medium">
                            Mère · Contact Urgence 2
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                          Commerce & Gestion Paroissiale
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                          {" "}
                          <span className="font-mono font-bold text-label-md text-primary">
                            +225 05 44 33 22 11
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <a className="min-h-[38px] px-space-md rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1" href="tel:+2250544332211">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                        {" Appeler "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[22px]">medical_services</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Fiche Sanitaire de Synthèse & Vigilances
                    </h3>
                  </div>
                  <span className="px-space-xs py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-semibold">
                    {" Confidentiel Médical "}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-error/10 text-error flex flex-col items-center justify-center font-bold">
                      <span className="text-[10px] uppercase leading-none">Groupe</span>
                      {" "}
                      <span className="font-headline-sm text-headline-sm">O+</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">Rhesus sanguin</span>
                      {" "}
                      <span className="font-label-md text-label-md text-primary font-bold">Positif (O+)</span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-[#2E7D32]">Certifié carnet</span>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-center">
                    <span className="font-label-sm text-label-sm text-secondary">Allergies déclarées</span>
                    {" "}
                    <span className="font-label-md text-label-md text-[#2E7D32] font-bold mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      {" Aucune connue "}
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">Aliments & médicaments RAS</span>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-center">
                    <span className="font-label-sm text-label-sm text-secondary">Traitement de fond</span>
                    {" "}
                    <span className="font-label-md text-label-md text-primary font-bold mt-0.5">
                      Aucun traitement
                    </span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-secondary">Aptitude physique 100%</span>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      local_hospital
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        Médecin de famille référent
                      </span>
                      <p className="font-label-md text-label-md text-primary font-bold">Dr. Yao KOFFI</p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Cabinet Médical Saint-Luc · Daloa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-[#2E7D32] text-[20px] mt-0.5">
                      vaccines
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary">Statut vaccinal</span>
                      <p className="font-label-md text-label-md text-[#2E7D32] font-bold">
                        À jour (Carnet PEV conforme)
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Fièvre jaune, DT Polio, Méningite OK
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-space-xs">
                  <button className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary-fixed-dim hover:text-tertiary font-bold transition-colors">
                    <span>Voir la fiche sanitaire complète de liaison (A4)</span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[22px]">security</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Sécurité du Compte & Confidentialité
                    </h3>
                  </div>
                  <span className="px-space-xs py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                    {" Compte Protégé "}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        Identifiant de connexion
                      </span>
                      <p className="font-mono font-bold text-label-md text-primary mt-1">
                        #CVAV-DAL-2024-0513-A
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                        Ou numéro de téléphone du tuteur principal
                      </p>
                    </div>
                    <div className="mt-space-sm pt-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary">
                        Mot de passe du portail
                      </span>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Dernière modification il y a 3 mois
                      </p>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary">
                        Notifications par SMS (Tuteur)
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                        {" "}
                        <span className="font-label-md text-label-md text-primary font-medium">
                          Alertes présences & cotisations actives
                        </span>
                      </div>
                    </div>
                    <div className="mt-space-sm pt-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary">
                        Charte de protection des mineurs
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        {" "}
                        <span>Signée et approuvée le 14/10/2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
                  <p className="font-body-sm text-body-sm text-secondary">
                    {" Conformément à la charte CECCI des Cœurs Vaillants – Âmes Vaillantes de Côte d'Ivoire. "}
                  </p>
                  <button className="min-h-[44px] px-space-lg rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 active:scale-[0.98] transition-all self-end sm:self-auto shadow-sm">
                    {" Changer le mot de passe "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden items-center justify-center p-space-md" id="modal-edit-profile">
          <div className="w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-md max-h-[921px] overflow-y-auto">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[24px]">edit_note</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Demande de modification des données
                </h3>
              </div>
              <button className="p-1 rounded-full hover:bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              {" Pour garantir l'intégrité canonique et légale du registre diocésain, toute mise à jour de coordonnées ou d'état civil est validée sous 24h par le secrétariat de votre paroisse. "}
            </p>
            <form className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Téléphone de contact du Tuteur Principal *
                </label>
                {" "}
                <input className="w-full h-11 px-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" required type="tel" defaultValue="+225 07 08 19 28 37" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Adresse de résidence (Quartier / Repère) *
                </label>
                {" "}
                <input className="w-full h-11 px-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" required type="text" defaultValue="Daloa, Quartier Le Plateau (Rue des Jardins)" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Établissement scolaire & Classe
                </label>
                {" "}
                <input className="w-full h-11 px-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" type="text" defaultValue="Collège Saint-Joseph de Daloa - CM2" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Observations sanitaires ou alimentaires éventuelles
                </label>
                {" "}
                <textarea className="w-full p-space-sm rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" placeholder="Signaler une nouvelle allergie ou un traitement ponctuel..." rows={3} defaultValue="" />
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                <button className="min-h-[44px] px-space-lg rounded-full bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" type="button">
                  {" Annuler "}
                </button>
                {" "}
                <button className="min-h-[44px] px-space-lg rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-label-md text-label-md font-bold hover:brightness-95 shadow-sm transition-all" type="submit">
                  {" Transmettre la demande "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden items-center justify-center p-space-md" id="modal-password">
          <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[24px]">lock_reset</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Changer le mot de passe</h3>
              </div>
              <button className="p-1 rounded-full hover:bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <form className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Mot de passe actuel
                </label>
                {" "}
                <input className="w-full h-11 px-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" placeholder="••••••••••••" required type="password" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Nouveau mot de passe
                </label>
                {" "}
                <input className="w-full h-11 px-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" placeholder="8 caractères minimum" required type="password" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-primary font-semibold">
                  Confirmer le nouveau mot de passe
                </label>
                {" "}
                <input className="w-full h-11 px-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-primary focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" placeholder="Retapez votre mot de passe" required type="password" />
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                <button className="min-h-[44px] px-space-lg rounded-full bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" type="button">
                  {" Annuler "}
                </button>
                {" "}
                <button className="min-h-[44px] px-space-lg rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:opacity-95 shadow-sm transition-all" type="submit">
                  {" Enregistrer "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden items-center justify-center p-space-md" id="modal-certificate">
          <div className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[24px]">verified</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Certificat de Scellement Numérique
                </h3>
              </div>
              <button className="p-1 rounded-full hover:bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-secondary">Empreinte cryptographique</span>
                {" "}
                <span className="font-mono text-label-sm text-[#2E7D32] font-bold">SHA-256 VALIDE</span>
              </div>
              <code className="font-mono text-[11px] text-primary break-all bg-surface-container p-2 rounded">
                {" e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 "}
              </code>
            </div>
            <div className="space-y-2 text-body-sm text-body-sm text-secondary">
              <p>
                <strong className="text-primary">Titulaire :</strong>
                {" Moïse Koffi ASSI (Matricule CVAV-DAL-2024-0513-A)"}
              </p>
              <p>
                <strong className="text-primary">UID NFC Physique :</strong>
                {" 04:A2:8F:9C (MIFARE Classic 1K)"}
              </p>
              <p>
                <strong className="text-primary">Autorité d'émission :</strong>
                {" Coordination Diocésaine CV-AV Daloa"}
              </p>
              <p>
                <strong className="text-primary">Signataire :</strong>
                {" Commission d'Apostolat des Laïcs (CECCI)"}
              </p>
            </div>
            <div className="flex justify-end pt-space-xs">
              <button className="min-h-[44px] px-space-lg rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:opacity-95" type="button">
                {" Fermer "}
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden items-center justify-center p-space-md" id="modal-lost-card">
          <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-error text-[24px]">gpp_maybe</span>
                <h3 className="font-headline-sm text-headline-sm text-error">Opposition Carte PVC / NFC</h3>
              </div>
              <button className="p-1 rounded-full hover:bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <p className="font-body-md text-body-md text-on-surface">
              {" Voulez-vous immédiatement révoquer la puce "}
              <strong className="font-mono text-primary">04:A2:8F:9C</strong>
              {" ? La carte sera bloquée sur tous les terminaux de pointage paroissiaux. "}
            </p>
            <div className="p-space-sm bg-error/10 text-error rounded-xl font-body-sm text-body-sm">
              {" Cette opération est irréversible. Une nouvelle carte devra être émise et encodée par le bureau diocésain de Daloa. "}
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-space-xs">
              <button className="min-h-[44px] px-space-lg rounded-full bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" type="button">
                {" Annuler "}
              </button>
              {" "}
              <button className="min-h-[44px] px-space-lg rounded-full bg-error text-on-error font-label-md text-label-md font-bold hover:brightness-90 transition-all shadow-sm" type="button">
                {" Confirmer l'opposition "}
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden items-center justify-center p-space-md" id="modal-health-sheet">
          <div className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-md max-h-[921px] overflow-y-auto">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  description
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Fiche Sanitaire de Liaison Pastorale
                </h3>
              </div>
              <button className="p-1 rounded-full hover:bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-sm text-body-sm text-body-sm">
              <div className="flex justify-between items-center font-bold text-primary pb-1">
                <span>Direction Nationale CV-AV Côte d'Ivoire</span>
                {" "}
                <span>Commission Santé & Sécurité</span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm">
                <div>
                  <strong className="text-primary">Militant :</strong>
                  {" ASSI Moïse Koffi"}
                </div>
                <div>
                  <strong className="text-primary">Né le :</strong>
                  {" 18/05/2014 à Daloa"}
                </div>
                <div>
                  <strong className="text-primary">Groupe Sanguin :</strong>
                  {" O Rhésus Positif (O+)"}
                </div>
                <div>
                  <strong className="text-primary">Tuteur Légal :</strong>
                  {" M. Moïse ASSI (+225 07 08 19 28 37)"}
                </div>
              </div>
            </div>
            <div className="space-y-space-sm text-body-sm text-body-sm">
              <h4 className="font-title-md text-title-md text-primary font-bold">
                1. Recommandations en camp et rassemblement diocésain
              </h4>
              <ul className="list-disc pl-5 text-secondary space-y-1">
                <li>
                  Le militant ne présente aucune contre-indication connue à la pratique des activités sportives, excursions ou campements sous tente.
                </li>
                <li>
                  En cas d'urgence médicale lors d'un rassemblement, autorisation parentale accordée pour admission au CHR de Daloa ou centre conventionné le plus proche.
                </li>
              </ul>
              <h4 className="font-title-md text-title-md text-primary font-bold pt-space-xs">
                2. Protocoles d'administration des premiers secours
              </h4>
              <p className="text-secondary">
                {" Trousse de patrouille standard CV-AV autorisée pour désinfection et pansements bénins sous supervision du secouriste de section qualifié. "}
              </p>
            </div>
            <div className="flex items-center justify-between pt-space-sm">
              <button className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary-fixed-dim hover:underline font-semibold">
                <span className="material-symbols-outlined text-[18px]">print</span>
                {" "}
                <span>Imprimer le document officiel (PDF)</span>
              </button>
              {" "}
              <button className="min-h-[44px] px-space-lg rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:opacity-95" type="button">
                {" Fermer "}
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
