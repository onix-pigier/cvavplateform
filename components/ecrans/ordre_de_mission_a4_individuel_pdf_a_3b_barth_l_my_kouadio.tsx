// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/ordre_de_mission_a4_individuel_pdf_a_3b_barth_l_my_kouadio/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Ordre de mission a4 individuel pdf a 3b barth l my kouadio — Domaine : Chancellerie & Bibliothèque

export default function OrdreDeMissionA4IndividuelPdfA3bBarthLMyKouadio() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 w-full z-50 bg-primary-container shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <div className="h-16 max-w-7xl mx-auto px-margin flex items-center justify-between gap-gutter">
      <div className="flex items-center gap-space-md">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-lowest text-primary font-headline-sm text-headline-sm font-bold">
          ✝
        </div>
        <div className="flex flex-col">
          <span className="text-surface font-title-md text-title-md tracking-tight leading-tight">
            Diocèse de Daloa
          </span>
          <span className="text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider">
            Chancellerie Épiscopale • CV-AV
          </span>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-space-sm" data-active-classes="bg-surface/10 text-surface font-medium">
        <a aria-current="page" className="px-space-md py-space-xs rounded-full transition-colors bg-surface/10 text-surface font-medium" data-path="official-act-viewer" href="#">
          Acte Officiel
        </a>
        <a className="px-space-md py-space-xs rounded-full text-on-primary-container hover:bg-surface/10 hover:text-surface transition-colors font-label-lg text-label-lg" data-path="canonical-decree-archive" href="#">
          Registre Décrets
        </a>
        <a className="px-space-md py-space-xs rounded-full text-on-primary-container hover:bg-surface/10 hover:text-surface transition-colors font-label-lg text-label-lg" data-path="ecclesiastical-roster-export" href="#">
          Certifications CV-AV
        </a>
      </nav>
      <div className="flex items-center gap-space-sm">
        <button className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-on-tertiary-container hover:bg-tertiary-fixed-dim text-surface font-label-lg text-label-lg transition-colors shadow-sm" type="button">
          <span className="material-symbols-outlined text-[18px]">print</span>
          <span>Imprimer A4</span>
        </button>
        <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface/10 hover:bg-surface/20 text-surface font-label-lg text-label-lg transition-colors" type="button">
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span className="hidden lg:inline">Télécharger PDF</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="w-full pt-16 bg-surface min-h-screen">
    <div className="flex flex-col w-full">
      <aside aria-label="Contrôles d'export et d'inspection documentaire" className="w-full bg-surface-container-lowest shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-margin py-space-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md min-w-0">
            <a className="inline-flex items-center gap-space-xs text-secondary hover:text-primary transition-colors font-label-md text-label-md bg-surface-container-low hover:bg-surface-container px-space-md py-space-xs rounded-full" data-path="{{DATA:SCREEN:SCREEN_2}}" href="#">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              {" "}
              <span>Retour aux Affectations</span>
            </a>
            <div className="h-4 w-px bg-surface-variant hidden sm:block" />
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  Ordre de Mission Individuel
                </span>
                {" "}
                <span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  #OM-2025-PEL-08
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-outline flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
                {" PDF/A-3b Norme ISO 19005-3 • 300 DPI Prêt pour impression • Barthélémy K. KOUADIO "}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm w-full lg:w-auto justify-start lg:justify-end">
            <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors shadow-sm" id="verify-sig-btn" type="button">
              <span className="material-symbols-outlined text-[18px] text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              {" "}
              <span>Vérifier X.509</span>
            </button>
            {" "}
            <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm active:scale-95" type="button">
              <span className="material-symbols-outlined text-[18px]">print</span>
              {" "}
              <span>Imprimer A4</span>
            </button>
            {" "}
            <button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-full bg-on-tertiary-container hover:bg-tertiary-fixed-dim text-surface font-label-md text-label-md transition-all shadow-md active:scale-95 font-semibold" id="download-pdf-btn" type="button">
              <span className="material-symbols-outlined text-[18px]">download</span>
              {" "}
              <span>Télécharger le PDF (.pdf • 340 Ko)</span>
            </button>
          </div>
        </div>
      </aside>
      <section className="w-full bg-[#f4f5f8] py-8 sm:py-14 px-3 sm:px-6 flex justify-center items-start overflow-x-auto print:bg-white print:p-0">
        <article className="relative w-full max-w-[820px] bg-surface-container-lowest text-primary shadow-[0_16px_48px_-8px_rgba(4,21,52,0.14),0_2px_8px_0_rgba(4,21,52,0.06)] rounded-sm p-6 sm:p-12 md:p-16 flex flex-col justify-between overflow-hidden print:shadow-none print:p-8 print:max-w-none print:w-full" id="a4-document">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.032] z-0 select-none">
            <svg className="w-[520px] h-[520px] fill-primary" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" fill="none" r="180" stroke="currentColor" strokeWidth="8" />
              <circle cx="200" cy="200" fill="none" r="150" stroke="currentColor" strokeWidth="3" />
              <path d="M190 70 h20 v260 h-20 z" />
              <path d="M120 140 h160 v20 h-160 z" />
              <path d="M135 220 C135 180, 265 180, 265 220 C265 270, 200 310, 200 310 C200 310, 135 270, 135 220 Z" fill="none" stroke="currentColor" strokeWidth="6" />
              <text fontFamily="serif" fontSize="20" letterSpacing="4" textAnchor="middle" x="200" y="360">
                IN OMNIBUS CHARITAS
              </text>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col space-y-7">
            <header className="flex flex-col items-center text-center pb-4">
              <div className="flex items-center justify-between w-full pb-4">
                <div className="text-left w-1/3">
                  <span className="font-headline-sm text-[13px] sm:text-[14px] uppercase tracking-wider text-primary font-bold block leading-tight">
                    Diocèse de Daloa
                  </span>
                  {" "}
                  <span className="font-body-sm text-[11px] text-secondary block">
                    République de Côte d'Ivoire
                  </span>
                  {" "}
                  <span className="font-body-sm text-[10px] text-outline block mt-0.5">
                    Curia Episcopalis Daloaensis
                  </span>
                  {" "}
                  <span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold block uppercase mt-1">
                    Chancellerie Apostolique
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-inner relative">
                    <div className="absolute inset-1 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="font-headline-lg text-tertiary-fixed-dim select-none text-[26px]">
                        ✝
                      </span>
                    </div>
                  </div>
                  <span className="font-label-sm text-[9px] uppercase tracking-widest text-primary font-bold mt-1">
                    Sceau Curial N° 024
                  </span>
                </div>
                <div className="text-right w-1/3">
                  <span className="font-headline-sm text-[13px] sm:text-[14px] uppercase tracking-wider text-primary font-bold block leading-tight">
                    Mouvement CV-AV
                  </span>
                  {" "}
                  <span className="font-body-sm text-[11px] text-secondary block">Aumônerie Diocésaine</span>
                  {" "}
                  <span className="font-body-sm text-[10px] text-outline block mt-0.5">
                    Coordination de Pastorale des Jeunes
                  </span>
                  {" "}
                  <span className="font-label-sm text-[10px] text-on-primary-container font-semibold block uppercase mt-1">
                    Pèlerinage 2025
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-high py-1 px-3 rounded-full flex flex-wrap items-center justify-around gap-2 text-primary font-label-sm text-[11px]">
                <span>
                  <strong>Décret Épiscopal:</strong>
                  {" N° 024/DAL/2025"}
                </span>
                {" "}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                {" "}
                <span>
                  <strong>Homologation:</strong>
                  {" CECCI Protocole R-25"}
                </span>
                {" "}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                {" "}
                <span>
                  <strong>Jurisprudence:</strong>
                  {" Canons 216 & 794 C.I.C."}
                </span>
              </div>
              <div className="mt-5 space-y-1">
                <h1 className="font-headline-md sm:font-headline-lg text-[21px] sm:text-headline-lg uppercase text-primary tracking-tight font-bold leading-tight">
                  {" Ordre de Mission Canonique "}
                </h1>
                <p className="font-title-md text-[14px] sm:text-title-md text-on-tertiary-container tracking-wide uppercase font-semibold">
                  {" & Mandat de Déploiement • Lettre de Protection Routière "}
                </p>
                <p className="font-body-sm text-[11px] sm:text-body-sm text-secondary max-w-xl mx-auto pt-0.5 italic">
                  {" « Déploiement obligatoire au titre de la solidarité et péréquation diocésaine pour l'encadrement sécurisé du convoi paroissial d'enfants » "}
                </p>
              </div>
            </header>
            <section className="bg-surface-container-low rounded-xl p-4 sm:p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-space-md">
                <div className="relative shrink-0">
                  <div className="w-24 h-28 rounded-lg overflow-hidden bg-surface-variant shadow-inner flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="Portrait photo of a young West African Catholic youth leader Barthélémy Kouadio wearing the official CV-AV yellow and blue foulard and cross badge, professional lighting, solemn and dignified ecclesiastical expression" src="/assets/image-placeholder.svg" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-on-tertiary-container text-surface rounded-full px-1.5 py-0.5 font-label-sm text-[9px] uppercase tracking-tighter font-bold shadow-sm">
                    {" Titulaire "}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 w-full text-left">
                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary block">
                      Nom & Prénoms de l'Officier
                    </span>
                    {" "}
                    <span className="font-title-md text-[15px] sm:text-title-md text-primary font-bold">
                      KOUADIO Kouassi Barthélémy
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary block">
                      Matricule National CV-AV
                    </span>
                    {" "}
                    <span className="font-body-md text-primary font-semibold font-mono tracking-tight bg-surface px-2 py-0.5 rounded text-[13px] inline-block">
                      {" #CVAV-CI-2019-B4021 "}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary block">
                      Brevet & Compétences Certifiées
                    </span>
                    {" "}
                    <span className="font-body-sm text-primary font-medium block">
                      {" Brevet National Cadre (2021) • Moniteur • Secouriste PSC1 "}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary block">
                      Paroisse d'Attache (Origine)
                    </span>
                    {" "}
                    <span className="font-body-sm text-primary font-medium block">
                      {" Cathédrale Christ-Roi de Daloa (Doyenné Centre) "}
                    </span>
                  </div>
                  <div className="sm:col-span-2 flex flex-wrap items-center gap-x-4 gap-y-1 bg-surface-container p-2 rounded-lg text-primary text-[12px]">
                    <span className="font-semibold text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-error">phone_in_talk</span>
                      {" Contact d'Urgence Terrain: "}
                    </span>
                    {" "}
                    <span className="font-mono font-semibold">+225 07 48 91 12</span>
                    {" "}
                    <span className="text-outline">•</span>
                    {" "}
                    <span className="font-mono font-semibold">+225 01 02 44 89</span>
                    {" "}
                    <span className="ml-auto text-[11px] text-secondary font-medium hidden md:inline">
                      Canal Radio VHF: Canal 04 (Sécurité Convoi)
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-[15px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                    alt_route
                  </span>
                  {" Spécifications de la Mission & Déploiement "}
                </h2>
                <span className="font-label-sm text-[10px] text-secondary uppercase">
                  Acte Réf: #OM-2025-PEL-08 / DAL-AFF07
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-outline block font-semibold">
                      Paroisse d'Affectation
                    </span>
                    {" "}
                    <span className="font-title-md text-[14px] text-primary font-bold block mt-0.5">
                      Paroisse Sainte-Famille
                    </span>
                    {" "}
                    <span className="font-body-sm text-[11px] text-secondary block">
                      Issia Sud • Doyenné Sud
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 bg-surface-container-low px-2 py-1.5 rounded text-[11px]">
                    <span className="font-semibold text-primary block">Curé Référent: Abbé Marcel TIA</span>
                    {" "}
                    <span className="text-outline text-[10px] block">Notifié par SMS à 14:35:12 GMT</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-outline block font-semibold">
                      Effectif & Véhicule Dédié
                    </span>
                    {" "}
                    <span className="font-title-md text-[14px] text-primary font-bold block mt-0.5">
                      48 Enfants CV-AV
                    </span>
                    {" "}
                    <span className="font-body-sm text-[11px] text-secondary block">
                      Sections Flocons, Petits-Cœurs, AV
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 bg-surface-container-low px-2 py-1.5 rounded text-[11px]">
                    <span className="font-semibold text-primary block">Autocar N°07 (Issia Express)</span>
                    {" "}
                    <span className="text-outline text-[10px] block">Chauffeur: M. Souleymane Bakayoko</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-outline block font-semibold">
                      Période d'Exercice Canonique
                    </span>
                    {" "}
                    <span className="font-title-md text-[13px] text-primary font-bold block mt-0.5">
                      28 Fév 2025 → 02 Mars 2025
                    </span>
                    {" "}
                    <span className="font-body-sm text-[11px] text-secondary block">
                      Départ: 05h30 • Clôture: 20h00
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 bg-surface-container-low px-2 py-1.5 rounded text-[11px]">
                    <span className="font-semibold text-primary block">Fonction Assumée:</span>
                    {" "}
                    <span className="text-on-tertiary-container font-semibold text-[11px] block">
                      Chef de Convoi & Veille Sanitaire
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-primary text-on-primary rounded-xl p-4 sm:p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-space-xs text-tertiary-fixed font-title-md text-[13px] sm:text-[14px] font-bold tracking-tight">
                <span className="material-symbols-outlined text-[20px]">shield</span>
                {" "}
                <span>AVIS OFFICIEL AUX FORCES DE DÉFENSE ET DE SÉCURITÉ</span>
              </div>
              <span className="font-label-sm text-[10px] text-surface-variant block uppercase tracking-wider">
                {" Gendarmerie Nationale • Police Nationale • Brigades Routières de Daloa, Vavoua et Issia "}
              </span>
              <p className="font-body-sm text-[11px] sm:text-[12px] text-surface-container-low leading-relaxed italic pt-1">
                {" « Les autorités civiles, militaires et douanières sont expressément priées de faciliter le passage prioritaire du porteur du présent ordre de mission et du convoi d'enfants CV-AV placé sous sa garde vigilante. Prière de lui accorder protection, assistance et franc secours en cas d'aléa ou de nécessité, conformément aux conventions diocésaines de protection de la jeunesse pèlerine. » "}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[10px] text-primary-fixed-dim">
                <span>
                  <strong>Assurance Groupe:</strong>
                  {" Sanlam Côte d'Ivoire • Police N° SAN-2025-PEL-09 (Valide 25/02 au 05/03/2025)"}
                </span>
                {" "}
                <span className="bg-primary-container px-2 py-0.5 rounded text-tertiary-fixed font-mono font-medium">
                  Statut: Préfectoral Homologué
                </span>
              </div>
            </section>
            <section className="bg-surface-container-low p-3.5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px]">
              <div className="flex items-center gap-space-md">
                <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div>
                  <span className="font-bold text-primary block">
                    Prise en charge intégrale Économat Diocésain de Daloa
                  </span>
                  {" "}
                  <span className="text-secondary text-[11px]">
                    {"Indemnité pastorale forfaitaire & logistique de route: "}
                    <strong>15 000 FCFA</strong>
                    {" (Réf Wave: +225 07 48 91 12)"}
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="bg-surface-container-highest text-primary font-label-sm text-[10px] px-2 py-1 rounded-md uppercase font-semibold">
                  {" Kit Urgence PMA Remis le 25/02 "}
                </span>
              </div>
            </section>
            <section className="pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-end">
                <div className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-xl shadow-sm h-full justify-between">
                  <span className="font-label-sm text-[10px] text-outline uppercase font-semibold">
                    Le Bénéficiaire / Animateur
                  </span>
                  <p className="font-body-sm text-[10px] text-secondary italic mt-1">
                    « Lu et approuvé, je promets fidélité, sobriété et vigilance pastorale »
                  </p>
                  <div className="py-2 h-14 flex items-center justify-center">
                    <svg className="w-36 h-12 stroke-primary fill-none stroke-[2]" viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,35 C30,10 50,45 70,20 C85,5 95,40 120,25 C135,15 145,35 155,20 M60,30 L90,15" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-body-sm text-[12px] font-bold text-primary block">
                      Barthélémy K. KOUADIO
                    </span>
                    {" "}
                    <span className="text-[9px] text-outline font-mono block">
                      Signature manuscrite certifiée
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-xl shadow-sm h-full justify-between relative overflow-hidden">
                  <span className="font-label-sm text-[10px] text-outline uppercase font-semibold">
                    L'Aumônier Diocésain CV-AV
                  </span>
                  <p className="font-body-sm text-[10px] text-secondary italic mt-1">
                    Pour la pastorale de l'enfance et l'envoi en mission
                  </p>
                  <div className="py-1 h-14 flex items-center justify-center relative w-full">
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-on-tertiary-container/40 absolute flex items-center justify-center rotate-12 opacity-60">
                      <span className="text-[7px] text-on-tertiary-container font-mono font-bold uppercase text-center leading-tight">
                        AUMÔNERIE
                        <br />
                        CV-AV
                        <br />
                        DALOA
                      </span>
                    </div>
                    <svg className="w-32 h-12 stroke-[#1b2a4a] fill-none stroke-[1.8]" viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20,40 C40,5 60,30 80,10 C100,40 120,5 140,30 M45,25 Q70,40 100,20" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-body-sm text-[12px] font-bold text-primary block">
                      Abbé Charles-Amédée KONAN
                    </span>
                    {" "}
                    <span className="text-[9px] text-on-tertiary-container font-semibold block uppercase">
                      Sceau de l'Aumônerie Diocésaine
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-xl shadow-sm h-full justify-between">
                  <span className="font-label-sm text-[10px] text-outline uppercase font-semibold">
                    Le Chancelier de la Curie
                  </span>
                  <p className="font-body-sm text-[10px] text-secondary italic mt-1">
                    Au nom de Son Excellence Monseigneur l'Évêque
                  </p>
                  <div className="py-1 h-14 flex items-center justify-center relative w-full">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/40 flex items-center justify-center text-primary font-bold text-[18px]">
                      <span className="material-symbols-outlined text-[24px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        workspace_premium
                      </span>
                    </div>
                    <svg className="w-28 h-12 stroke-primary fill-none stroke-[2] absolute" viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15,25 C35,45 55,5 85,25 C105,45 125,10 135,30 M50,15 L95,35" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-body-sm text-[12px] font-bold text-primary block">
                      Abbé Jean-Marc KOFFI
                    </span>
                    {" "}
                    <span className="text-[9px] text-primary font-mono block">Signature X.509 PAdES-LTV</span>
                  </div>
                </div>
              </div>
            </section>
            <footer className="pt-3 border-t-0 bg-surface-container-low p-3.5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-space-md shrink-0">
                <div className="w-20 h-20 bg-surface-container-lowest p-1 rounded shadow-sm flex items-center justify-center">
                  <svg className="w-full h-full fill-primary shape-rendering-crispEdges" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 h7 v7 h-7 z M1,1 v5 h5 v-5 z M2,2 h3 v3 h-3 z" />
                    <path d="M22,0 h7 v7 h-7 z M23,1 v5 h5 v-5 z M24,2 h3 v3 h-3 z" />
                    <path d="M0,22 h7 v7 h-7 z M1,23 v5 h5 v-5 z M2,24 h3 v3 h-3 z" />
                    <path d="M20,20 h5 v5 h-5 z M21,21 v3 h3 v-3 z M22,22 h1 v1 h-1 z" />
                    <path d="M8,6 h13 v1 h-13 z M6,8 v13 h1 v-13 z" />
                    <path d="M9,2 h2 v1 h-2 z M13,2 h1 v2 h-1 z M16,1 h2 v2 h-2 z M10,4 h3 v1 h-3 z M9,9 h2 v2 h-2 z M13,8 h3 v2 h-3 z M18,8 h2 v3 h-2 z M3,9 h2 v2 h-2 z M9,13 h1 v3 h-1 z M12,12 h2 v2 h-2 z M16,13 h2 v1 h-2 z M19,14 h2 v2 h-2 z M9,18 h2 v2 h-2 z M13,18 h1 v3 h-1 z M16,18 h3 v1 h-3 z M16,21 h2 v2 h-2 z M2,18 h3 v1 h-3 z M24,10 h2 v2 h-2 z M26,14 h2 v2 h-2 z M24,18 h3 v1 h-3 z M10,24 h2 v2 h-2 z M14,24 h3 v1 h-3 z M18,25 h2 v2 h-2 z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-[10px] text-on-tertiary-container uppercase tracking-wider font-bold">
                    {" Contrôle Routier • Lecture Hors-Ligne "}
                  </span>
                  {" "}
                  <span className="font-body-sm text-[11px] text-secondary max-w-[280px]">
                    {" Validable immédiatement par lecture optique gendarmerie / contrôle pastoral sans connexion internet requise. "}
                  </span>
                  {" "}
                  <span className="font-mono text-[9px] text-outline mt-0.5">
                    {" TSA RFC 3161: 2025-02-25T14:35:00Z • Daloa "}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left sm:text-right font-mono text-[10px] text-secondary space-y-0.5">
                <span className="font-label-sm text-[9px] uppercase tracking-wider text-outline">
                  SHA-256 Digest Documentaire
                </span>
                {" "}
                <span className="bg-surface px-2 py-0.5 rounded text-primary text-[10px] break-all max-w-[280px] font-semibold">
                  {" 8a7f4c99e12b4e82f76c149afbf4c8996fb92427ae41e4649b934ca495991b78 "}
                </span>
                <div className="flex items-center sm:justify-end gap-1.5 text-[9px] text-outline pt-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                  {" "}
                  <span>Norme ISO 19005-3 PDF/A-3b • Archivage Perpétuel Curie</span>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </section>
      <dialog className="fixed inset-0 m-auto p-0 rounded-2xl bg-surface-container-lowest shadow-2xl backdrop:bg-primary/50 max-w-lg w-full z-50" id="signature-modal">
        <div className="p-space-lg flex flex-col space-y-space-md">
          <div className="flex items-center justify-between pb-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Certificat Épiscopal X.509</h3>
                <p className="font-body-sm text-body-sm text-secondary">Vérification de signature PAdES-LTV</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-primary" id="close-modal-btn" type="button">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <div className="bg-surface-container-low p-space-md rounded-xl space-y-2 font-mono text-[12px] text-primary">
            <div className="flex justify-between">
              <span className="text-secondary font-sans font-medium">Émetteur:</span>
              {" "}
              <span className="font-semibold">Autorité de Certification Diocésaine (CECCI-CA)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary font-sans font-medium">Sujet:</span>
              {" "}
              <span className="font-semibold">Curia Episcopalis Daloaensis (Chancellerie)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary font-sans font-medium">Algorithme:</span>
              {" "}
              <span>RSA-4096 / SHA-256</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary font-sans font-medium">Statut OCSP:</span>
              {" "}
              <span className="text-on-tertiary-container font-semibold">Certificat Valide (Non révoqué)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary font-sans font-medium">Horodatage eIDAS:</span>
              {" "}
              <span>25 Fév 2025 - 14:35:00 UTC</span>
            </div>
          </div>
          <div className="p-space-sm bg-surface-container-high rounded-xl text-primary text-[12px] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">lock</span>
            {" "}
            <span>Ce document est scellé canoniquement contre toute altération post-émission.</span>
          </div>
          <div className="pt-space-xs flex justify-end">
            <button className="px-space-lg py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md" id="modal-ok-btn" type="button">
              {" Fermer l'Inspection "}
            </button>
          </div>
        </div>
      </dialog>
      <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-space-lg py-space-sm rounded-full shadow-xl flex items-center gap-space-sm transition-all duration-300 opacity-0 pointer-events-none translate-y-4 z-50" id="toast-msg">
        <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">check_circle</span>
        {" "}
        <span className="font-label-md text-label-md font-medium" id="toast-text">
          Génération du fichier PDF/A-3b en cours...
        </span>
      </div>
    </div>
  </main>
  <footer className="w-full bg-surface-container-low py-space-xl print:hidden">
    <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
      <div className="flex flex-col items-center md:items-start">
        <span className="font-label-md text-label-md text-on-surface font-semibold">
          Curia Episcopalis Daloaensis — Registre Officiel CV-AV
        </span>
        <span>Archidiocèse & Diocèses de Côte d'Ivoire • Conservation des Archives Apostoliques</span>
      </div>
      <div className="flex items-center gap-space-lg">
        <span className="font-label-sm text-label-sm text-secondary">Protocole N° CD-DA/CVAV-2024</span>
        <span className="inline-block w-2 h-2 rounded-full bg-on-tertiary-container" />
        <span className="font-label-sm text-label-sm text-on-surface-variant">Sceau Épiscopal Vérifié</span>
      </div>
    </div>
  </footer>
    </div>
  );
}
