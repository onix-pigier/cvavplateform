// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/fiche_de_liaison_m_dicale_d_vacuation_chr_export_impression_pdf/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Fiche de liaison m dicale d vacuation chr export impression pdf — Domaine : Statistiques & Pilotage

export default function FicheDeLiaisonMDicaleDVacuationChrExportImpressionPdf() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col antialiased selection:bg-secondary-container selection:text-on-secondary-container">
  <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(4,21,52,0.06)]">
    <div className="h-16 w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <a className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-on-tertiary-container" data-path="medical-dashboard" href="#">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          <span className="font-label-md text-label-md hidden sm:inline">Tableau Médical</span>
        </a>
        <div className="h-6 w-px bg-outline-variant/40 hidden sm:block" />
        <div className="flex items-center gap-space-sm">
          <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
          <div className="hidden md:flex flex-col">
            <span className="font-title-md text-title-md text-primary leading-tight">CV-AV Côte d'Ivoire</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Commission Médicale Diocésaine
            </span>
          </div>
        </div>
      </div>
      <nav className="hidden xl:flex items-center gap-space-xs bg-surface-container-low px-space-xs py-space-xs rounded-full" data-active-classes="bg-surface-container-highest text-on-surface font-semibold">
        <a aria-current="page" className="px-space-md py-space-xs rounded-full transition-colors bg-surface-container-highest text-on-surface font-semibold" data-path="document-export-preview" href="#">
          Aperçu Export
        </a>
        <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-full transition-colors" data-path="medical-audit-log" href="#">
          Registre des Visas
        </a>
        <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-full transition-colors" data-path="certification-archive" href="#">
          Archives Sanitaires
        </a>
      </nav>
      <div className="flex items-center gap-space-sm">
        <div className="hidden md:flex items-center bg-surface-container-low rounded-xl p-space-xs">
          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[18px]">zoom_out</span>
          </button>
          <span className="font-label-sm text-label-sm text-on-surface px-space-xs select-none">100%</span>
          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[18px]">zoom_in</span>
          </button>
          <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors ml-space-xs" type="button">
            <span className="material-symbols-outlined text-[18px]">fit_page</span>
          </button>
        </div>
        <div className="hidden lg:flex items-center bg-surface-container-low rounded-xl px-space-sm py-1">
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant mr-1">
            description
          </span>
          <select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer pr-1" />
        </div>
        <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors font-label-md text-label-md" type="button">
          <span className="material-symbols-outlined text-[18px]">print</span>
          <span className="hidden sm:inline">Imprimer</span>
        </button>
        <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md shadow-[0_2px_8px_rgba(4,21,52,0.15)]" type="button">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>PDF Scellé</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="w-full pt-16 bg-surface flex-1 flex flex-col">
    <div className="flex flex-col w-full">
      <aside aria-label="Commandes du document d'évacuation" className="w-full bg-surface-container-low shadow-sm">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm">
          <div className="flex flex-wrap items-center gap-space-sm">
            <a className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px]">medical_services</span>
              {" "}
              <span>PMA Yamoussoukro</span>
            </a>
            <div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm uppercase tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-error animate-ping" />
              {" "}
              <span>Protocole Évacuation Immédiate • Code Rouge Vital</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">lock</span>
              {" "}
              <span>Certificat Diocésain SHA-256 Vérifié</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-space-xs">
            <div className="hidden xl:flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface font-label-sm text-label-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-secondary">share</span>
              {" "}
              <span>
                {"Télétransmission CHR : "}
                <strong>Active (SAMU 185)</strong>
              </span>
            </div>
            <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface text-primary hover:bg-surface-container transition-all font-label-md text-label-md shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px] text-secondary">download</span>
              {" "}
              <span className="hidden md:inline">Télécharger PDF Certifié</span>
              {" "}
              <span className="md:hidden">PDF</span>
            </button>
            {" "}
            <button className="inline-flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed hover:bg-on-tertiary-container hover:text-on-tertiary font-label-md text-label-md shadow-md transition-all" type="button">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                print
              </span>
              {" "}
              <span>Imprimer le Document d'Urgence</span>
            </button>
          </div>
        </div>
      </aside>
      <section className="w-full bg-surface-container py-space-lg lg:py-space-xl flex justify-center items-center overflow-x-auto">
        <div className="w-full max-w-5xl px-space-sm sm:px-space-md flex flex-col items-center">
          <header className="w-full max-w-[850px] mb-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
              {" "}
              <span>Norme A4 Médicale Diocésaine (210 × 297 mm) • Exemplaire Original de Liaison SAMU 185</span>
            </div>
            <div className="flex items-center gap-space-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-error" />
              {" "}
              <span>EVAC-2025-003</span>
            </div>
          </header>
          <article className="w-full max-w-[850px] bg-surface-container-lowest text-on-surface shadow-2xl rounded-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden select-text" id="fiche-evacuation">
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-outline-variant/60 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-outline-variant/60 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-outline-variant/60 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-outline-variant/60 pointer-events-none" />
            <header className="flex flex-col md:flex-row items-start justify-between gap-space-md pb-space-md bg-surface-container-lowest">
              <div className="flex items-start gap-space-md">
                <div className="w-20 h-20 rounded-xl bg-surface-container-low p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img alt="Official emblem of CV-AV Côte d'Ivoire with radiant cross and heart motif in navy and gold" className="w-full h-full object-contain" src="/assets/image-placeholder.svg" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
                    Archidiocèse d'Abidjan
                  </span>
                  {" "}
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    Commission Diocésaine des Œuvres Pastorales
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Direction Médicale du Grand Camp Pascal Yamoussoukro 2025
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm text-secondary mt-0.5">
                    Poste Médical Avancé (PMA) • Sanctuaire Domaine Marial
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-md self-stretch md:self-auto justify-between md:justify-end bg-surface-container-low p-space-sm rounded-xl">
                <div className="flex flex-col text-right">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Télétransmission Directe
                  </span>
                  {" "}
                  <span className="font-label-md text-label-md font-semibold text-primary">
                    CHR Yamoussoukro
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-secondary">Urgences • Box Réa Réservé</span>
                  {" "}
                  <span className="font-label-sm text-label-sm text-error font-medium mt-0.5">
                    Ligne SAMU 185 prévenue
                  </span>
                </div>
                <div className="w-16 h-16 bg-surface-container-lowest p-1 rounded-lg shadow-sm flex flex-col justify-between" title="QR Code d'accès direct déchiffrable par le CHR Yamoussoukro">
                  <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-surface-container-lowest" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-surface-container-lowest" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-surface-container-lowest" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-surface-container-lowest" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-surface-container-lowest" />
                    <div className="bg-primary rounded-xs" />
                    <div className="bg-primary rounded-xs" />
                  </div>
                </div>
              </div>
            </header>
            <div className="mt-space-sm bg-primary text-on-primary rounded-xl p-space-md relative shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      emergency
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider font-semibold">
                      Document d'Intervention Médico-Légale
                    </span>
                  </div>
                  <h1 className="font-headline-md text-headline-md text-on-primary font-bold tracking-tight mt-0.5">
                    {" FICHE DE LIAISON D'ÉVACUATION D'URGENCE VITALE "}
                  </h1>
                  <p className="font-body-sm text-body-sm text-inverse-primary">
                    Transfert médicalisé immédiat vers le Centre Hospitalier Régional (CHR) de Yamoussoukro
                  </p>
                </div>
                <div className="flex-shrink-0 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-error text-on-error font-label-md text-label-md uppercase font-bold tracking-wide shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">priority_high</span>
                    {" CODE ROUGE VITAL SAMU 185 "}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-sm pt-space-sm bg-primary-container/80 -mx-space-md -mb-space-md px-space-md py-space-xs rounded-b-xl">
                <div>
                  <span className="block font-label-sm text-label-sm text-on-primary-container">
                    Code Évacuation
                  </span>
                  {" "}
                  <span className="font-label-md text-label-md font-semibold text-on-primary">
                    EVAC-2025-003
                  </span>
                </div>
                <div>
                  <span className="block font-label-sm text-label-sm text-on-primary-container">
                    Réf. Soin Initial
                  </span>
                  {" "}
                  <span className="font-label-md text-label-md font-semibold text-on-primary">
                    SOIN-2025-0142 / PMA
                  </span>
                </div>
                <div>
                  <span className="block font-label-sm text-label-sm text-on-primary-container">
                    Déclenchement
                  </span>
                  {" "}
                  <span className="font-label-md text-label-md font-semibold text-on-primary">
                    19/04/2025 à 11h34 (J+3)
                  </span>
                </div>
                <div>
                  <span className="block font-label-sm text-label-sm text-on-primary-container">
                    Destination
                  </span>
                  {" "}
                  <span className="font-label-md text-label-md font-semibold text-tertiary-fixed">
                    CHR Yamoussoukro Réa
                  </span>
                </div>
              </div>
            </div>
            <section className="mt-space-md bg-error-container text-on-error-container rounded-xl p-space-md shadow-sm">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-[28px] text-error flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  dangerous
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-space-xs">
                    <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-error">
                      ALERTE VITALE MAJEURE — CONTRE-INDICATION MÉDICAMENTEUSE ABSOLUE
                    </span>
                    {" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold">
                      Bracelet Rouge Scellé au Poignet Droit
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm font-bold text-on-error-container mt-1">
                    {" ALLERGIE SÉVÈRE ET POTENTIELLEMENT MORTELLE À LA PÉNICILLINE & BÊTALACTAMINES "}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-error-container mt-1">
                    <strong>INTERDICTION FORMELLE :</strong>
                    {" Zéro Pénicilline, Zéro Amoxicilline, Zéro Augmentin, Zéro Ampicilline ni aucune Céphalosporine (Céfotaxime, Ceftriaxone, etc.). Risque immédiat d'œdème de Quincke et arrêt cardio-respiratoire fulgurant. "}
                  </p>
                </div>
              </div>
            </section>
            <section className="mt-space-md bg-surface-container-low rounded-xl p-space-md">
              <div className="flex items-center justify-between pb-space-xs mb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">person_filled</span>
                  <h2 className="font-title-md text-title-md text-primary font-bold">
                    1. État Civil du Patient & Référents Pastoraux / Famille
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Matricule : "}
                  <strong>CVAV-24-0891</strong>
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">
                    Identité du Jeune
                  </span>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">
                    KOUASSI Ange-Emmanuel
                  </p>
                  <div className="mt-space-xs grid grid-cols-3 gap-1 text-on-surface font-body-sm text-body-sm">
                    <div>
                      <span className="text-on-surface-variant text-[11px] block">Âge</span>
                      {" "}
                      <strong>11 ans</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant text-[11px] block">Né le</span>
                      {" "}
                      <span>14/05/2013</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant text-[11px] block">Poids estimé</span>
                      {" "}
                      <strong className="text-primary font-bold">34 kg</strong>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">
                    Origine Pastorale & Hébergement Camp
                  </span>
                  <p className="font-label-md text-label-md text-primary font-bold mt-0.5">
                    Paroisse Saint-Jean de Cocody
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Archidiocèse Métropolitain d'Abidjan
                  </p>
                  <div className="mt-space-xs flex items-center justify-between text-on-surface font-body-sm text-body-sm">
                    <span>
                      {"Hébergement : "}
                      <strong>Sous-camp Kizito (Garçons)</strong>
                    </span>
                    {" "}
                    <span className="bg-surface-container-high px-space-xs py-0.5 rounded text-primary font-semibold">
                      Tente A14
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">
                    Contact Tuteur & Consentement Légal
                  </span>
                  <p className="font-label-md text-label-md text-primary font-semibold mt-0.5">
                    Père : M. Sylvain KOUASSI
                  </p>
                  <p className="font-body-sm text-body-sm text-error font-medium">
                    Tél direct : +225 07 08 12 34 56 (Joignable)
                  </p>
                  <div className="mt-space-xs flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    {" "}
                    <span>
                      {"Autorisation Chirurgicale : "}
                      <strong>AP-2025-8841 Signée</strong>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-space-md">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  2. Motif d'Évacuation, Diagnostic Présomptif & Chronologie Clinique
                </h2>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-md">
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm mb-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                    Diagnostic de Terrain Urgentiste
                  </span>
                  <p className="font-title-md text-title-md text-error font-bold mt-0.5">
                    {" Choc Anaphylactique Sévère Décompensé • Détresse Respiratoire Aiguë Majeure "}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {" Survenue brutale d'une réaction anaphylactique systémique 10 min après désinfection superficielle d'une écorchure au genou droit. Présence constatée d'une piqûre probable d'hyménoptère (guêpe sauvage des buissons) au niveau malléolaire ou réaction croisée fortuite. Évolution explosive nécessitant administration d'adrénaline et maintien des voies aériennes libres. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm text-on-surface">
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
                        <span className="font-bold text-primary">11h25</span>
                        {" "}
                        <span>Admission PMA</span>
                      </div>
                      <p className="font-body-sm text-body-sm mt-1">
                        Arrivée au PMA pour écorchure au genou droit. Lavage sérum phy, désinfection bétadine, pansement sec, paracétamol sirop.
                      </p>
                    </div>
                    <span className="text-label-sm font-label-sm text-on-surface-variant mt-2">
                      Conscient, sans détresse
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-error">
                        <span className="font-bold">11h31</span>
                        {" "}
                        <span>Début Choc</span>
                      </div>
                      <p className="font-body-sm text-body-sm mt-1">
                        Apparition soudaine : prurit palmaire violent, rash érythémateux généralisé, stridor laryngé, dyspnée inspiratoire aiguë, angoisse motrice.
                      </p>
                    </div>
                    <span className="text-label-sm font-label-sm text-error font-medium mt-2">
                      Alerte vitale lancée
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-primary">
                        <span className="font-bold">11h33 • 11h34</span>
                        {" "}
                        <span>Décision Médicale</span>
                      </div>
                      <p className="font-body-sm text-body-sm mt-1">
                        Évaluation immédiate Dr. Yao Koffi (Pédiatre Cocody) : Déclenchement Code Rouge, appel régulation SAMU 185 et préparation ambulance.
                      </p>
                    </div>
                    <span className="text-label-sm font-label-sm text-primary font-semibold mt-2">
                      Escorte Gendarmerie ordonnée
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-space-md">
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
                  <h2 className="font-title-md text-title-md text-primary font-bold">
                    3. Relevé Dynamique des Constantes Vitales
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Monitoring multiparamétrique de terrain
                </span>
              </div>
              <div className="overflow-x-auto bg-surface-container-low rounded-xl p-space-xs">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase">
                    <tr>
                      <th className="py-2 px-space-sm rounded-l-lg">Horodatage</th>
                      <th className="py-2 px-space-sm">Tension Artérielle</th>
                      <th className="py-2 px-space-sm">Fréq. Cardiaque</th>
                      <th className="py-2 px-space-sm">Saturation SpO2</th>
                      <th className="py-2 px-space-sm">Fréq. Resp.</th>
                      <th className="py-2 px-space-sm">Température</th>
                      <th className="py-2 px-space-sm rounded-r-lg">État Neurologique / Glasgow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr className="bg-surface-container-lowest">
                      <td className="py-2.5 px-space-sm font-semibold text-primary">11h28 (Initiale)</td>
                      <td className="py-2.5 px-space-sm font-mono">11 / 7 cmHg</td>
                      <td className="py-2.5 px-space-sm font-mono">84 bpm</td>
                      <td className="py-2.5 px-space-sm font-mono">98% (Air ambiant)</td>
                      <td className="py-2.5 px-space-sm font-mono">18 cpm</td>
                      <td className="py-2.5 px-space-sm font-mono">37.4 °C</td>
                      <td className="py-2.5 px-space-sm">GCS 15 • Lucide, calme</td>
                    </tr>
                    <tr className="bg-error-container/40">
                      <td className="py-2.5 px-space-sm font-bold text-error">11h32 (Crise aiguë)</td>
                      <td className="py-2.5 px-space-sm font-mono font-bold text-error">10 / 6 cmHg (Chute)</td>
                      <td className="py-2.5 px-space-sm font-mono font-bold text-error">
                        118 bpm (Tachycardie)
                      </td>
                      <td className="py-2.5 px-space-sm font-mono font-bold text-error">
                        93% (Hypoxie critique)
                      </td>
                      <td className="py-2.5 px-space-sm font-mono font-bold text-error">28 cpm (Polypnée)</td>
                      <td className="py-2.5 px-space-sm font-mono">37.8 °C</td>
                      <td className="py-2.5 px-space-sm text-error font-medium">
                        GCS 14 • Angoisse, somnolent
                      </td>
                    </tr>
                    <tr className="bg-surface-container-lowest">
                      <td className="py-2.5 px-space-sm font-semibold text-on-tertiary-container">
                        11h37 (Sous Adrénaline)
                      </td>
                      <td className="py-2.5 px-space-sm font-mono font-semibold">10.5 / 6.5 cmHg</td>
                      <td className="py-2.5 px-space-sm font-mono font-semibold">112 bpm</td>
                      <td className="py-2.5 px-space-sm font-mono font-semibold text-primary">
                        96% (Sous O2 6 L/min)
                      </td>
                      <td className="py-2.5 px-space-sm font-mono">24 cpm</td>
                      <td className="py-2.5 px-space-sm font-mono">37.6 °C</td>
                      <td className="py-2.5 px-space-sm">GCS 14 • Laryngospasme atténué</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="mt-space-md">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">vaccines</span>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  4. Thérapeutiques d'Urgence Injectées & Équipements Engagés au PMA
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-bold text-primary">
                      Adrénaline Injectable 1 mg/1 ml
                    </span>
                    {" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">
                      11h35
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium mt-1">
                    {" Dose pédiatrique : "}
                    <strong>0.15 mg en Intra-Musculaire (IM)</strong>
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Site d'injection : Face antéro-latérale de la cuisse droite (Dr. Yao Koffi). Trousse d'Urgence #01. "}
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-bold text-primary">
                      Oxygénothérapie à Haut Débit
                    </span>
                    {" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                      11h34
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium mt-1">
                    {" Débit : "}
                    <strong>6 Litres / minute en continu</strong>
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Vecteur : Masque facial haute concentration pédiatrique avec réservoir d'oxygène étanche. "}
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-bold text-primary">
                      Abord Veineux Périphérique (VVP)
                    </span>
                    {" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
                      11h36
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium mt-1">
                    {" Cathéter court "}
                    <strong>22G au pli du coude gauche</strong>
                    {" (IDE Reine Kouamé). "}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Perfusion de garde-veine : Sérum Physiologique NaCl 0.9% (Poche 250 ml en cours d'écoulement ralenti). "}
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-bold text-primary">
                      Dispositifs Embarqués en Ambulance
                    </span>
                    {" "}
                    <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                      Dotation PMA
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium mt-1">
                    {" Trousse Réa Urgence #01 + Valise d'Intubation Pédiatrique. "}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" 2e ampoule adrénaline prête • Chambre d'inhalation Salbutamol (Ventoline) • Aspirateur de mucosités. "}
                  </p>
                </div>
              </div>
            </section>
            <section className="mt-space-md bg-surface-container-low rounded-xl p-space-md">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">ambulance</span>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  5. Modalités de Transfert, Logistique & Personnel Embarqué
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                    Vecteur Médicalisé
                  </span>
                  <p className="font-label-md text-label-md text-primary font-bold mt-0.5">
                    Ambulance Diocésaine
                  </p>
                  <span className="font-body-sm text-body-sm text-secondary">Immatriculation : CI-4492-CD</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                    Horaires Clés
                  </span>
                  <p className="font-label-md text-label-md text-primary font-bold mt-0.5">
                    Départ PMA : 11h38
                  </p>
                  <span className="font-body-sm text-body-sm text-secondary">ETA CHR estimée : 11h47</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                    Équipage Soignant à Bord
                  </span>
                  <p className="font-label-md text-label-md text-primary font-bold mt-0.5">
                    Dr. Yao Koffi • IDE R. Kouamé
                  </p>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Accompagnateur CV-AV : J-M Kouadio
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                    Protection Routière
                  </span>
                  <p className="font-label-md text-label-md text-primary font-bold mt-0.5">
                    Peloton Gendarmerie
                  </p>
                  <span className="font-body-sm text-body-sm text-error font-medium">
                    Sirène 2-tons • Priorité carrefours
                  </span>
                </div>
              </div>
            </section>
            <footer className="mt-space-lg pt-space-md bg-surface-container-lowest">
              <div className="text-center sm:text-left mb-space-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold">
                  Attestation Juridique & Sanitaire sous Sceau Épiscopal
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between h-44 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Médecin-Chef du Camp
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-primary font-bold">PMA Yamoussoukro</span>
                  </div>
                  <div className="my-auto text-center relative">
                    <div className="inline-block p-2 rounded-lg bg-surface-container-lowest/80 shadow-sm text-primary font-serif italic text-lg transform -rotate-3 select-none">
                      {" Dr. Yao Koffi • Pédiatrie Cocody "}
                    </div>
                    <div className="text-[10px] text-on-surface-variant mt-1">
                      Signé électroniquement à 11h37
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-label-md text-label-md font-semibold text-primary">Dr. YAO KOFFI</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Ordre des Médecins N° 2025-CI-088
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between h-44 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Infirmière d'Urgence
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-medium">
                      Croix-Rouge / Diocèse
                    </span>
                  </div>
                  <div className="my-auto text-center">
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-surface-container-lowest/80 text-secondary font-serif italic text-base transform rotate-1 select-none">
                      {" Reine Kouamé • IDE "}
                    </div>
                    <div className="text-[10px] text-on-surface-variant mt-1">
                      Pose VVP • Surveillance continue
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-label-md text-label-md font-semibold text-primary">REINE KOUAMÉ</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Infirmière Diplômée d'État (IDE)
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between h-44">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Sceau Diocésain
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">
                      Certifié Conforme
                    </span>
                  </div>
                  <div className="my-auto flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary mb-1">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <span className="font-mono text-[9px] text-on-surface-variant text-center break-all leading-tight">
                      {" SHA-256: 8f9b4a12ec7039de47a810bbf45290a12e83 "}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="font-label-md text-label-md font-semibold text-primary">
                      Aumônerie Diocésaine de la Santé
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Archidiocèse d'Abidjan • Yamoussoukro 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs text-center text-on-surface-variant font-label-sm text-label-sm">
                {" Fiche légale à remettre obligatoirement au médecin régulateur du SAMU 185 et au chef de clinique des Urgences Pédiatriques du CHR Yamoussoukro à l'arrivée de l'ambulance. Dossier médical archivé sous le secret professionnel diocésain et la législation ivoirienne de protection des données de santé. "}
              </div>
            </footer>
          </article>
          <footer className="mt-space-md flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                cloud_done
              </span>
              {" "}
              <span>Données répliquées en temps réel sur la base SAMU 185</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">phone_in_talk</span>
              {" "}
              <span>Contact Régulation CHR : +225 30 64 00 20</span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  </main>
  <footer className="w-full bg-surface-container-low mt-auto py-space-xl">
    <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
      <div className="flex items-center gap-space-md">
        <div className="h-10 w-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[24px]">church</span>
        </div>
        <div className="flex flex-col">
          <span className="font-title-md text-title-md text-primary">
            Mouvement Cœurs Vaillants – Âmes Vaillantes
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Direction Nationale de Côte d'Ivoire • Registre Officiel de Santé & Pastorale
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-space-lg">
        <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
            verified_user
          </span>
          <span>Agrément Sanitaire Diocésain</span>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
          <span>Cryptage Conforme Protocole CV-AV</span>
        </div>
      </div>
      <div className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-right">
        <p>© 2025 CV-AV Côte d'Ivoire. Tous droits réservés.</p>
        <p className="text-outline font-label-sm text-label-sm mt-0.5">
          Édition Certifiée • Diocèse d'Abidjan & Diocèses Suffragants
        </p>
      </div>
    </div>
  </footer>
    </div>
  );
}
