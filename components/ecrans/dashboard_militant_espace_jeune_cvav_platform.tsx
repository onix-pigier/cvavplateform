// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/dashboard_militant_espace_jeune_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Dashboard militant espace jeune cvav platform — Domaine : Espace Militant

export default function DashboardMilitantEspaceJeuneCvavPlatform() {
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
              <a className="flex items-center gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" data-path="mon-compte" href="#">
                <span className="material-symbols-outlined text-[18px]">badge</span>
                Mon profil
              </a>
              <a className="flex items-center gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" data-path="parametres" href="#">
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Paramètres
              </a>
              <div className="my-1 border-t border-surface-container" />
              <a className="flex items-center gap-space-sm px-space-md py-space-sm text-error hover:bg-error-container hover:text-on-error-container transition-colors font-label-md text-label-md" data-path="connexion" href="#">
                <span className="material-symbols-outlined text-[18px]">logout</span>
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
        <a aria-current="page" className="flex items-center gap-space-sm px-space-md py-space-sm transition-colors bg-primary-container text-on-primary font-bold rounded-xl" data-path="accueil-militant" href="#">
          <span className="material-symbols-outlined text-[20px]">home</span>
          <span>Accueil</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-presences" href="#">
          <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
          <span>Mes présences</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-attestations" href="#">
          <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
          <span>Mes attestations</span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-cotisations" href="#">
          <span className="material-symbols-outlined text-[20px]">payments</span>
          <span>Mes cotisations</span>
        </a>
        <a className="flex items-center justify-between px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="notifications" href="#">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span>Notifications</span>
          </div>
          <span className="bg-error text-on-error font-label-sm text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            3
          </span>
        </a>
        <a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mon-compte" href="#">
          <span className="material-symbols-outlined text-[20px]">account_circle</span>
          <span>Mon compte</span>
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
        <div className="px-margin py-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs text-secondary mb-1">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">
                  Tableau de bord personnel
                </span>
                {" "}
                <span className="text-outline-variant">•</span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">Année Pastorale 2024–2025</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-display-lg">
                {" Tableau Récapitulatif "}
              </h1>
              <p className="font-body-md text-body-md text-secondary mt-1">
                {" Consultez l'état de votre progression pastorale, assiduité dominicale et vos obligations diocésaines. "}
              </p>
            </div>
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container rounded-full text-secondary">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
                {" "}
                <span className="font-label-md text-label-md font-medium text-on-surface">
                  Compte Actif & Régulier
                </span>
              </div>
              <a className="inline-flex items-center justify-center p-2 rounded-full bg-surface-container-high text-primary hover:bg-secondary-container transition-colors" data-path="mon-compte" href="#" title="Accéder à la carte de membre">
                <span className="material-symbols-outlined text-[20px]">badge</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05),0_1px_3px_0_rgba(27,42,74,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_12px_32px_-4px_rgba(27,42,74,0.08)] transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[rgba(46,125,50,0.06)] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md pb-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-[#2E7D32] text-[22px]">
                      event_available
                    </span>
                    {" "}
                    <span>Ma présence aujourd'hui</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded-md">
                    Hebdo
                  </span>
                </div>
                <div className="flex flex-col gap-1 mb-space-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Dimanche 20 Octobre 2024
                  </span>
                  <p className="font-title-md text-title-md text-on-surface font-semibold">
                    Rassemblement dominical de section
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">church</span>
                    {" Paroisse Catholique Le Plateau "}
                  </p>
                </div>
              </div>
              <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-2xl mt-space-md">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-[rgba(46,125,50,0.14)] text-[#2E7D32]">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    {" "}
                    <span className="font-label-md text-label-md font-bold tracking-wide">Présent</span>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-label-sm text-on-surface font-semibold">Pointé à 08h45</p>
                    <p className="font-body-sm text-[11px] text-secondary leading-tight">Par Chef de Section</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05),0_1px_3px_0_rgba(27,42,74,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_12px_32px_-4px_rgba(27,42,74,0.08)] transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[rgba(201,150,44,0.08)] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md pb-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-[#C9962C] text-[22px]">military_tech</span>
                    {" "}
                    <span>Mon grade actuel</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-[rgba(201,150,44,0.15)] text-[#8E6515] font-semibold px-2 py-0.5 rounded-full">
                    Rang 02
                  </span>
                </div>
                <div className="flex items-baseline gap-space-xs mb-1">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Cadet</h2>
                  <span className="font-body-md text-body-md text-secondary">
                    · Âme Vaillante 2
                    <sup>e</sup>
                    {" Étoile"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  {" En route vers le grade supérieur : "}
                  <strong className="text-on-surface font-semibold">Aspirant Témoin</strong>
                </p>
              </div>
              <div className="mt-space-lg pt-space-md">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-label-sm text-label-sm text-secondary">Progression des épreuves</span>
                  {" "}
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    65% (4 / 6 validées)
                  </span>
                </div>
                <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#C9962C] h-full rounded-full transition-all duration-500 ease-out" style={{ width: "65%" }} />
                </div>
                <div className="flex items-center justify-between text-secondary mt-2">
                  <span className="font-body-sm text-[11px]">Dernière validation : Catéchèse & Liturgie</span>
                  {" "}
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05),0_1px_3px_0_rgba(27,42,74,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_12px_32px_-4px_rgba(27,42,74,0.08)] transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[rgba(27,42,74,0.05)] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md pb-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-primary text-[22px]">payments</span>
                    {" "}
                    <span>Ma cotisation 2024–2025</span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-[rgba(46,125,50,0.12)] text-[#2E7D32] font-semibold px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    {" À jour "}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 mb-space-md">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-lg text-[32px] leading-tight text-primary font-bold">
                      3 500
                    </span>
                    {" "}
                    <span className="font-title-md text-title-md text-secondary font-semibold">FCFA</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {" Montant attendu annuel : "}
                    <strong className="text-on-surface">3 500 FCFA</strong>
                    {" (100%) "}
                  </p>
                </div>
              </div>
              <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-2xl mt-space-md flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-body-sm text-[11px] text-secondary">Date du versement</span>
                  {" "}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">14/10/2024</span>
                </div>
                <button className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-colors" title="Télécharger le reçu de cotisation" type="button">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  {" "}
                  <span>Télécharger reçu</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05),0_1px_3px_0_rgba(27,42,74,0.03)] flex flex-col justify-between lg:col-span-2 relative overflow-hidden group hover:shadow-[0_12px_32px_-4px_rgba(27,42,74,0.08)] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex-1">
                  <div className="flex items-center gap-space-xs text-[#C9962C] font-label-sm text-label-sm uppercase tracking-wider font-semibold mb-space-xs">
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    {" "}
                    <span>Prochain rendez-vous diocésain</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-2">
                    {" Grand Rassemblement & Bivouac de Doyenné "}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md">
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-[#C9962C] text-[20px] mt-0.5">
                        calendar_month
                      </span>
                      <div>
                        <p className="font-label-sm text-label-sm text-secondary">Date & Horaire</p>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          Samedi 26 Octobre 2024 à 14h30
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-[#C9962C] text-[20px] mt-0.5">
                        location_on
                      </span>
                      <div>
                        <p className="font-label-sm text-label-sm text-secondary">Lieu de rassemblement</p>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                          Terrain Paroissial Sainte-Marie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col items-center md:items-end justify-between gap-space-md pt-space-sm md:pt-0">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container text-on-secondary-fixed flex flex-col items-center justify-center font-display-lg text-center p-1">
                    <span className="font-headline-sm text-headline-sm font-bold leading-none">26</span>
                    {" "}
                    <span className="font-label-sm text-[10px] uppercase font-bold leading-tight mt-0.5">
                      OCT
                    </span>
                  </div>
                  <a className="inline-flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-semibold hover:text-[#C9962C] transition-colors" data-path="calendrier" href="#">
                    <span>Voir le calendrier</span>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">
                      MK
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#C9962C] text-on-primary text-[10px] font-bold flex items-center justify-center">
                      EA
                    </div>
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-primary text-[10px] font-bold flex items-center justify-center">
                      +42
                    </div>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary">
                    44 camarades de section inscrits
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-[#2E7D32] bg-[rgba(46,125,50,0.12)] px-2 py-0.5 rounded-full font-medium">
                  Inscription confirmée
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05),0_1px_3px_0_rgba(27,42,74,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_12px_32px_-4px_rgba(27,42,74,0.08)] transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[rgba(201,150,44,0.08)] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md pb-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-[#C9962C] text-[22px]">
                      workspace_premium
                    </span>
                    {" "}
                    <span>Mes attestations</span>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-[#C9962C] text-on-primary text-label-sm font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
                <p className="font-title-md text-title-md text-on-surface font-semibold mb-space-sm">
                  {" 2 attestations officielles disponibles "}
                </p>
                <ul className="flex flex-col gap-space-xs mb-space-md">
                  <li className="flex items-center gap-space-xs py-1 text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-[#2E7D32]">verified</span>
                    {" "}
                    <span className="font-body-sm text-body-sm leading-tight">
                      Certificat d'adhésion pastorale 2024
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs py-1 text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-[#2E7D32]">verified</span>
                    {" "}
                    <span className="font-body-sm text-body-sm leading-tight">
                      Diplôme de franchissement d'étape (Cadet)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-space-md mt-space-xs">
                <a className="inline-flex items-center justify-center w-full min-h-[44px] px-space-lg rounded-full bg-[#C9962C] hover:bg-[#B38323] active:scale-[0.98] text-on-primary font-label-lg text-label-lg font-bold shadow-sm transition-all gap-space-xs" data-path="mes-attestations" href="#">
                  <span className="material-symbols-outlined text-[20px]">file_download</span>
                  {" "}
                  <span>Voir mes attestations</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-primary-container text-on-primary rounded-2xl p-space-lg lg:p-space-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-md">
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container text-[#C9962C] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">flare</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider font-semibold">
                  Devise du militant CV-AV
                </span>
                <p className="font-headline-sm text-headline-sm italic text-on-primary font-display-lg mt-0.5">
                  {" « Cœur Vaillant, Âme Vaillante : Toujours Tout Droit ! » "}
                </p>
                <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                  {" Engagement au service du Christ, de la paroisse Le Plateau et du Diocèse de Daloa. "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-md shrink-0 w-full md:w-auto justify-end">
              <a className="inline-flex items-center justify-center min-h-[44px] px-space-lg rounded-full bg-surface-container-lowest text-primary hover:bg-surface transition-colors font-label-md text-label-md font-semibold w-full md:w-auto text-center" data-path="mes-presences" href="#">
                {" Historique des présences "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
    </div>
  );
}
