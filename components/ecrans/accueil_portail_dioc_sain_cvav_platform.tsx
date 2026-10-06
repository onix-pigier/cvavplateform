// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/accueil_portail_dioc_sain_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Accueil portail dioc sain cvav platform — Domaine : Portail & Inscriptions

export default function AccueilPortailDiocSainCvavPlatform() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(27,42,74,0.06)]">
    <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-sm">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-tertiary-container shadow-[0_2px_8px_rgba(27,42,74,0.15)] flex-shrink-0">
          <span className="material-symbols-outlined text-[22px]">shield_with_heart</span>
        </div>
        <div className="flex flex-col">
          <span className="font-title-md text-title-md text-primary tracking-tight leading-none">
            CVAV Platform
          </span>
          <span className="font-label-sm text-label-sm text-secondary leading-tight mt-0.5 hidden sm:block">
            Archidiocèse d'Abidjan & Diocèses de Côte d'Ivoire
          </span>
        </div>
      </div>
      <nav className="hidden xl:flex items-center gap-space-lg" data-active-classes="text-primary font-title-md border-b-2 border-on-tertiary-container pb-1">
        <a aria-current="page" className="transition-colors text-primary font-title-md border-b-2 border-on-tertiary-container pb-1" data-path="accueil" href="#">
          Accueil
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" data-path="le-mouvement" href="#">
          Le Mouvement
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" data-path="paroisses-et-doyennes" href="#">
          Paroisses & Doyennés
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" data-path="activites-et-camps" href="#">
          Activités & Camps
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" data-path="verifier-une-attestation" href="#">
          Vérifier une attestation
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" data-path="contact" href="#">
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-space-sm">
        <a className="hidden md:inline-flex items-center justify-center min-h-[44px] px-space-lg rounded-full text-primary font-label-lg text-label-lg hover:bg-surface-container hover:text-primary transition-all" data-path="connexion" href="#">
          Connexion
        </a>
        <a className="inline-flex items-center justify-center min-h-[44px] px-space-lg rounded-full bg-on-tertiary-container text-on-primary font-label-lg text-label-lg hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all shadow-[0_4px_14px_rgba(186,137,31,0.25)] active:scale-[0.98]" data-path="se-pre-inscrire" href="#">
          Se pré-inscrire
        </a>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs flex-shrink-0">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="w-full pt-20 bg-surface">
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface to-surface-container-low py-space-xl lg:py-28">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-highest text-primary font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                {" "}
                <span>Plateforme Officielle Diocésaine — CV-AV Côte d'Ivoire</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary tracking-tight">
                {" Former des cœurs vaillants et des âmes vaillantes au service de l'Église et de la Nation. "}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                {" L'espace numérique officiel pour l'encadrement pastoral, la gestion des inscriptions, le suivi des militants et la certification diocésaine des jeunes catholiques. "}
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
                <a className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-on-tertiary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-tertiary-container transition-all active:scale-[0.98]" data-path="se-pre-inscrire" href="#">
                  <span>Se pré-inscrire en ligne</span>
                  {" "}
                  <span className="material-symbols-outlined text-[20px] ml-2">arrow_forward</span>
                </a>
                {" "}
                <a className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" data-path="connexion" href="#">
                  <span className="material-symbols-outlined text-[20px] mr-2">lock</span>
                  {" "}
                  <span>Espace encadrant</span>
                </a>
              </div>
              <div className="pt-space-xs">
                <a className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#verifier-section">
                  <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
                  {" "}
                  <span>Vérifier l'authenticité d'une attestation ou d'une carte</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-lg w-full">
                <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    church
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm text-primary">
                    Validé par l'Aumônerie Diocésaine
                  </span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    diversity_3
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm text-primary">+54 paroisses affiliées</span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    security
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm text-primary">
                    Données pastorales sécurisées
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center items-center mt-space-lg lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary-container/40 to-tertiary-fixed/30 rounded-3xl filter blur-2xl -z-10" />
              <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-xl p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <img alt="Emblème Officiel CV-AV Côte d'Ivoire" className="w-14 h-14 rounded-full object-cover shadow-sm bg-surface-container-lowest" src="/assets/cvav-emblem.png" />
                    <div>
                      <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        Archidiocèse d'Abidjan
                      </p>
                      <p className="font-title-md text-title-md text-primary leading-tight">
                        Carte de Militant 2024–2025
                      </p>
                    </div>
                  </div>
                  <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    {" Actif "}
                  </span>
                </div>
                <div className="flex gap-space-md items-center bg-surface-container-low p-space-md rounded-xl">
                  <img className="w-16 h-16 rounded-full object-cover shadow-md flex-shrink-0" data-alt="Portrait photography of a proud young Catholic Ivorian scout militant smiling warmly wearing the official CV-AV yellow and navy beret uniform against a soft neutral cathedral interior background, natural warm light, inspiring youth leader" src="/assets/image-placeholder.svg" />
                  <div className="min-w-0">
                    <p className="font-headline-sm text-headline-sm text-primary truncate">
                      Kouassi Ange-Emmanuel
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary">Section: Vaillants (12 ans)</p>
                    <p className="font-label-sm text-label-sm text-on-tertiary-container mt-0.5">
                      Paroisse St-Jean de Cocody
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm">
                  <div className="bg-surface-container p-space-sm rounded-lg">
                    <p className="font-label-sm text-label-sm text-secondary">Matricule Diocésain</p>
                    <p className="font-label-lg text-label-lg text-primary font-mono">CI-ABJ-24-9104</p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded-lg">
                    <p className="font-label-sm text-label-sm text-secondary">Promesse Solennelle</p>
                    <p className="font-label-lg text-label-lg text-primary">Validée (Nov 2023)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-space-xs bg-surface-container-high/40 p-space-sm rounded-xl">
                  <div className="flex items-center gap-space-sm">
                    <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 48 48">
                      <path d="M4 4h14v14H4zm4 4h6v6H8zm22-4h14v14H30zm4 4h6v6h-6zM4 30h14v14H4zm4 4h6v6H8zm16-26h4v4h-4zm6 6h4v4h-4zm-6 6h4v4h-4zm6 6h4v4h-4zm-6 6h4v4h-4zm10-18h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4zm-16 6h4v4h-4zm6 6h4v4h-4zm6-6h4v4h-4zm6 6h4v4h-4z" />
                    </svg>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary font-semibold">
                        Attestation Numérique Signée
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary text-[11px] leading-tight">
                        Clé SHA-256 certifiée par le Secrétariat Diocésain
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[26px] text-on-tertiary-container">
                    verified_user
                  </span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {" Cotisation annuelle 2024-2025 : À jour "}
                  </span>
                  {" "}
                  <span className="text-primary font-medium">Archidiocèse CI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
              <span className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
                12 500+
              </span>
              <p className="font-headline-sm text-headline-sm text-primary pt-1">Militants Actifs</p>
              <p className="font-body-sm text-body-sm text-secondary">
                Fripounets, Vaillants et Rayonnants répartis dans les secteurs urbains et ruraux.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-tertiary-container mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">badge</span>
              </div>
              <span className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
                1 850+
              </span>
              <p className="font-headline-sm text-headline-sm text-primary pt-1">Chefs & Cadres Certifiés</p>
              <p className="font-body-sm text-body-sm text-secondary">
                Encadrants paroissiaux formés à l'École des Cadres et titulaires du brevet diocésain.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">account_balance</span>
              </div>
              <span className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
                54
              </span>
              <p className="font-headline-sm text-headline-sm text-primary pt-1">Paroisses Connectées</p>
              <p className="font-body-sm text-body-sm text-secondary">
                Doyennés d'Abidjan, Bassam, Yopougon, Bouaké et Korhogo synchronisés.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-tertiary-container mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <span className="font-display-lg text-display-lg text-primary tracking-tight leading-none">
                100%
              </span>
              <p className="font-headline-sm text-headline-sm text-primary pt-1">Cartes Numérisées</p>
              <p className="font-body-sm text-body-sm text-secondary">
                Authentification instantanée avec QR code pour les camps, pèlerinages et assemblées.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-1 font-label-md text-label-md text-on-tertiary-container">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                {" "}
                <span>Pédagogie Pastorale Intégrale</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                {" Les Quatre Branches d'Éducation Chrétienne "}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {" Une méthode progressive et éprouvée, adaptée au développement humain et spirituel de l'enfant depuis ses 6 ans jusqu'à l'âge adulte. "}
              </p>
            </div>
            <a className="inline-flex items-center text-primary font-label-lg text-label-lg hover:text-on-tertiary-container transition-colors" data-path="le-mouvement" href="#">
              <span>Découvrir la charte pédagogique</span>
              {" "}
              <span className="material-symbols-outlined text-[18px] ml-1">chevron_right</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-44 rounded-xl overflow-hidden relative">
                  <img className="w-full h-full object-cover" data-alt="Joyful African Catholic children aged 6 to 9 playing in a circle outdoors in a sunny parish courtyard in Abidjan wearing bright yellow scout neckerchiefs with radiant smiles in soft warm afternoon light, natural joyful documentary photography" src="/assets/image-placeholder.svg" />
                  <div className="absolute top-space-xs right-space-xs bg-surface/90 px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-primary shadow-sm">
                    {" 6 - 9 ans "}
                  </div>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                    Branche Jaune
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Perpitchous & Fripounets
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" L'éveil précoce de la foi, la découverte de l'amour du Christ par le jeu structuré, la politesse et la vie en petite équipe fraternelle. "}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low p-space-sm rounded-xl">
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  Mot d'ordre : « Rire, Aimer, Partager »
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-44 rounded-xl overflow-hidden relative">
                  <img className="w-full h-full object-cover" data-alt="Young adolescent Ivorian boy and girl militants aged 11 to 14 in neat dark navy and white CVAV youth uniform holding their hands over their heart making the solemn movement salute in a grand stone Catholic parish chapel with colorful stained glass sunlight rays" src="/assets/image-placeholder.svg" />
                  <div className="absolute top-space-xs right-space-xs bg-surface/90 px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-primary shadow-sm">
                    {" 10 - 14 ans "}
                  </div>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-tertiary-container uppercase font-semibold">
                    Cœur du Mouvement
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Cœurs Vaillants / Âmes Vaillantes
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" L'action apostolique concrète, la promesse solennelle, le camp d'été paroissial, le devoir d'état assidu et le service humble de la liturgie. "}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-xl">
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  Devise : « Toujours Joyeux, Servir en Tout ! »
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-44 rounded-xl overflow-hidden relative">
                  <img className="w-full h-full object-cover" data-alt="Dynamic teenage West African youth leaders aged 16 to 18 engaging in community service cleaning a coastal neighborhood in Grand-Bassam Côte d'Ivoire wearing navy blue polo shirts with gold cross heart emblems, purposeful expressions and camaraderie" src="/assets/image-placeholder.svg" />
                  <div className="absolute top-space-xs right-space-xs bg-surface/90 px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-primary shadow-sm">
                    {" 15 ans et + "}
                  </div>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                    Branche Bleue
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">Rayonnants & Cadets</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" Le rayonnement chrétien dans les lycées et universités, l'engagement civique et social, ainsi que le discernement de sa vocation d'adulte. "}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low p-space-sm rounded-xl">
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  Mot d'ordre : « Témoigner & Bâtir la Cité »
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-44 rounded-xl overflow-hidden relative">
                  <img className="w-full h-full object-cover" data-alt="An articulate adult African Catholic youth chaplain and female animator reviewing a pastoral training booklet together in a bright parish council room with mahogany wood and soft golden ambient light, atmosphere of dignity responsibility and faith" src="/assets/image-placeholder.svg" />
                  <div className="absolute top-space-xs right-space-xs bg-primary text-on-primary px-space-sm py-0.5 rounded-full font-label-sm text-label-sm shadow-sm">
                    {" Cadres & Dirigeants "}
                  </div>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                    Formation Permanente
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">L'École des Cadres</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" La formation théologique, psychologique et méthodologique des chefs de section, sous l'autorité doctrinale de l'Aumônerie Nationale. "}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-xl">
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  Engagement : « Guider avec Sagesse & Amour »
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-space-xl lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-3xl mx-auto space-y-space-xs mb-space-xl">
            <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-wider font-semibold">
              Architecture Numérique Pastorale
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {" Un outil de rigueur conçu pour les besoins réels du terrain "}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {" Du suivi des cotisations paroissiales aux bilans statistiques pour l'Archevêché, simplifiez l'administration pour vous consacrer pleinement à l'apostolat. "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col justify-between">
              <div className="space-y-space-sm max-w-xl">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">assignment_ind</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Gestion Pastorale & Enrôlement Paroissial
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Centralisez les fiches de renseignements, antécédents médicaux d'urgence, autorisations parentales signées et cotisations diocésaines en quelques clics. Fini les registres papier égarés lors des départs en camp. "}
                </p>
              </div>
              <div className="mt-space-lg bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary pb-1">
                  <span>Section Vaillants — St-Pierre Claver (42 inscrits)</span>
                  {" "}
                  <span className="text-primary font-semibold">Taux de validation : 96%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
                  <div className="bg-on-tertiary-container h-full rounded-full" style={{ width: "96%" }} />
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[24px]">fact_check</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Pointage Réunion & Assemblée</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Application mobile adaptée aux chefs : faites l'appel en 2 minutes le samedi après-midi sans connexion internet requise. "}
                </p>
              </div>
              <div className="mt-space-md flex items-center gap-space-xs p-space-sm bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary text-[20px]">cloud_sync</span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">
                  Synchronisation diocésaine automatique
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Attestations & Engagements</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Génération d'attestations certifiées pour les cérémonies de promesse solennelle, les engagements de cadets et les validations de stages de formation. "}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                  {" Signature cryptographique infalsifiable "}
                </span>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col justify-between">
              <div className="space-y-space-sm max-w-xl">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">insights</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Tableaux de Bord pour l'Aumônerie & l'Épiscopat
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Donnez aux Pères Aumôniers diocésains une cartographie exacte des effectifs, de la vitalité des paroisses et des ratios encadrants/enfants pour chaque doyenné. "}
                </p>
              </div>
              <div className="mt-space-lg grid grid-cols-3 gap-space-sm pt-space-xs text-center">
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <p className="font-label-sm text-label-sm text-secondary">Abidjan Nord</p>
                  <p className="font-title-md text-title-md text-primary font-bold">4 210 militants</p>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <p className="font-label-sm text-label-sm text-secondary">Abidjan Sud</p>
                  <p className="font-title-md text-title-md text-primary font-bold">3 890 militants</p>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <p className="font-label-sm text-label-sm text-secondary">Diocèses Intérieur</p>
                  <p className="font-title-md text-title-md text-primary font-bold">4 400 militants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
            <span className="font-label-md text-label-md text-secondary uppercase font-semibold">
              Parcours d'Adhésion
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {" La démarche diocésaine en trois étapes "}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {" Un protocole rigoureux et transparent pour les parents, les animateurs et le clergé. "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md relative">
              <div className="w-12 h-12 rounded-full bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center">
                {" 1 "}
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-primary">Pré-inscription en Ligne</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" Le parent ou le tuteur légal renseigne le formulaire officiel avec l'identité de l'enfant, la paroisse d'appartenance et la fiche de santé. "}
                </p>
              </div>
              <div className="text-secondary font-label-sm text-label-sm flex items-center gap-1 mt-auto pt-space-xs">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                {" "}
                <span>Dépôt en 4 minutes</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md relative">
              <div className="w-12 h-12 rounded-full bg-on-tertiary-container text-on-primary font-title-md text-title-md flex items-center justify-center">
                {" 2 "}
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-primary">Validation en Paroisse</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" Le Responsable paroissial et le Père Vicaire vérifient le dossier et valident l'inscription après acquittement de la cotisation statutaire. "}
                </p>
              </div>
              <div className="text-secondary font-label-sm text-label-sm flex items-center gap-1 mt-auto pt-space-xs">
                <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                {" "}
                <span>Entretien pastoral de bienvenue</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md relative">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-primary font-title-md text-title-md flex items-center justify-center">
                {" 3 "}
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Délivrance de la Carte & Matricule
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" Génération du matricule unique diocésain et impression de la carte officielle sécurisée pour participer aux activités et rassemblements. "}
                </p>
              </div>
              <div className="text-secondary font-label-sm text-label-sm flex items-center gap-1 mt-auto pt-space-xs">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                {" "}
                <span>Accréditation nationale</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-space-xl bg-surface" id="verifier-section">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-md flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                    search_check
                  </span>
                  {" "}
                  <span>Registre Diocésain Public</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" Vérifier l'authenticité d'une attestation ou d'une carte "}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" Pour lutter contre les falsifications lors des camps et délivrances d'agréments, saisissez le numéro de matricule ou d'attestation figurant sur le document. "}
                </p>
                <form className="pt-space-md space-y-space-sm" id="verification-form">
                  <div className="flex flex-col sm:flex-row gap-space-xs">
                    <div className="relative flex-grow">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-space-md pointer-events-none text-secondary">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                      </span>
                      {" "}
                      <input className="w-full h-12 pl-12 pr-space-md bg-surface-container-lowest text-primary rounded-xl border border-outline-variant focus:border-on-tertiary-container focus:ring-2 focus:ring-on-tertiary-container outline-none font-mono text-body-md transition-all" id="matricule-input" placeholder="Ex : CI-ABJ-2025-0842" required type="text" defaultValue="CI-ABJ-2025-0842" />
                    </div>
                    <button className="h-12 px-space-lg rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all flex items-center justify-center gap-1 flex-shrink-0" type="submit">
                      <span>Vérifier</span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </button>
                  </div>
                </form>
                <div className="mt-space-md p-space-md bg-surface-container-low rounded-xl" id="search-result">
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                    <div className="space-y-0.5">
                      <p className="font-label-lg text-label-lg text-primary font-semibold">
                        Document Officiel Valide & Actif
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Attestation de Promesse CV-AV — Délivrée par la Paroisse St-Jean de Cocody (Archidiocèse d'Abidjan) le 24 Novembre 2024.
                      </p>
                      <div className="pt-space-xs flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
                        <span>Titulaire : Yao Marie-Victoire</span>
                        {" "}
                        <span>•</span>
                        {" "}
                        <span>Signataire : Père Aumônier K. François</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-space-md text-secondary font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">info</span>
                {" "}
                <span>Les résultats sont certifiés conformes au Grand Livre Diocésain.</span>
              </div>
            </div>
            <div className="lg:col-span-5 bg-primary-container text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-md flex flex-col justify-between">
              <div className="space-y-space-md">
                <div className="w-12 h-12 rounded-xl bg-on-tertiary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">admin_panel_settings</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-tertiary-fixed-variant tracking-wider uppercase font-semibold">
                    Portail Dirigeants
                  </p>
                  <h3 className="font-headline-md text-headline-md text-on-primary mt-1">
                    Espace Aumôniers & Chefs de Groupe
                  </h3>
                  <p className="font-body-md text-body-md text-on-primary-container mt-space-xs">
                    {" Accédez à votre console de gestion paroissiale pour valider les adhésions des enfants, générer les listes pour les départs en camp et transmettre vos bilans d'activité. "}
                  </p>
                </div>
              </div>
              <div className="pt-space-xl space-y-space-sm">
                <a className="w-full inline-flex items-center justify-center min-h-[48px] px-space-lg rounded-full bg-on-tertiary-container text-on-primary font-label-lg text-label-lg hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all shadow-md" data-path="connexion" href="#">
                  <span className="material-symbols-outlined text-[20px] mr-2">login</span>
                  {" "}
                  <span>Connexion au Portail Pastoral</span>
                </a>
                <p className="text-center font-label-sm text-label-sm text-on-primary-container">
                  {" Accès réservé aux encadrants munis de leurs identifiants diocésains. "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-space-xl bg-surface-container-highest">
        <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center gap-space-md">
          <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[32px] text-on-tertiary-container">
              volunteer_activism
            </span>
          </div>
          <div className="space-y-space-xs max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {" Prêt pour la nouvelle année pastorale 2024–2025 ? "}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {" Rejoignez la grande famille des Cœurs Vaillants – Âmes Vaillantes de Côte d'Ivoire. Inscrivez votre enfant ou affiliez votre section paroissiale dès aujourd'hui. "}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
            <a className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-on-tertiary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-tertiary-container transition-all active:scale-[0.98]" data-path="se-pre-inscrire" href="#">
              <span>Commencer la pré-inscription</span>
              {" "}
              <span className="material-symbols-outlined text-[20px] ml-2">arrow_forward</span>
            </a>
            {" "}
            <a className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" href="#">
              <span className="material-symbols-outlined text-[20px] mr-2">download</span>
              {" "}
              <span>Guide des responsables (PDF)</span>
            </a>
          </div>
          <p className="font-label-sm text-label-sm text-secondary pt-space-sm">
            {" « Cœur Vaillant ! — Toujours Vaillant ! » "}
          </p>
        </div>
      </section>
    </div>
  </main>
  <footer className="w-full bg-surface-container-low shadow-[0_-1px_12px_rgba(27,42,74,0.03)] mt-space-xl">
    <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-space-lg gap-space-md bg-surface-container rounded-xl p-space-lg mb-space-xl">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-tertiary-container flex-shrink-0">
            <span className="material-symbols-outlined text-[28px]">church</span>
          </div>
          <div>
            <p className="font-headline-sm text-headline-sm text-primary">
              « Toujours Joyeux, Servir en Tout ! »
            </p>
            <p className="font-body-sm text-body-sm text-secondary">
              Devise fondamentale du mouvement Cœurs Vaillants – Âmes Vaillantes en Côte d'Ivoire
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] mr-1">verified</span>
            Reconnu par la CECCI
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl pb-space-xl">
        <div className="space-y-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
            <span className="font-title-md text-title-md text-primary">CVAV CI</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Plateforme diocésaine officielle de gestion pastorale, d'enrôlement des sections, d'encadrement des dirigeants et de suivi des camps de formation chrétienne.
          </p>
        </div>
        <div className="space-y-space-sm">
          <h4 className="font-title-md text-title-md text-primary">Juridictions Diocésaines</h4>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>Archidiocèse d'Abidjan</li>
            <li>Archidiocèse de Bouaké</li>
            <li>Archidiocèse de Gagnoa</li>
            <li>Archidiocèse de Korhogo</li>
            <li>Toutes délégations régionales</li>
          </ul>
        </div>
        <div className="space-y-space-sm">
          <h4 className="font-title-md text-title-md text-primary">Pastorale & Commissions</h4>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>Aumônerie Nationale Catholique</li>
            <li>Commission Enfance & Jeunesse</li>
            <li>Direction Diocésaine des Œuvres</li>
            <li>Formation des Responsables (BAFA/CV)</li>
          </ul>
        </div>
        <div className="space-y-space-sm">
          <h4 className="font-title-md text-title-md text-primary">Secrétariat Diocésain</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Centre Diocésain de Pastorale, Cocody, Abidjan
            <br />
            B.P. 1287 Abidjan 01, Côte d'Ivoire
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
            contact@cvav-ci.org
            <br />
            +225 27 22 44 00 00
          </p>
        </div>
      </div>
      <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm">
        <p className="font-body-sm text-body-sm text-secondary">
          © 2024 Cœurs Vaillants – Âmes Vaillantes de Côte d'Ivoire. Tous droits réservés.
        </p>
        <p className="font-label-sm text-label-sm text-secondary">
          Sous le haut patronage de la Conférence des Évêques Catholiques de Côte d'Ivoire (CECCI)
        </p>
      </div>
    </div>
  </footer>
    </div>
  );
}
