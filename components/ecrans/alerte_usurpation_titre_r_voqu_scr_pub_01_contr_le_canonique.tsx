// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/alerte_usurpation_titre_r_voqu_scr_pub_01_contr_le_canonique/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Alerte usurpation titre r voqu scr pub 01 contr le canonique — Domaine : Terrain & Sécurité

export default function AlerteUsurpationTitreRVoquScrPub01ContrLeCanonique() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
  <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(27,42,74,0.15)]">
    <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md min-w-0">
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain flex-shrink-0" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col min-w-0">
          <span className="font-title-md text-title-md text-on-primary truncate">CVAV Platform</span>
          <span className="font-label-sm text-label-sm text-on-primary-container tracking-wider uppercase truncate hidden sm:inline">
            Portail Public de Vérification Canonique & Diocésaine • Daloa
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-md flex-shrink-0">
        <nav className="hidden lg:flex items-center gap-space-sm" data-active-classes="bg-surface-container-lowest text-primary font-label-lg">
          <a className="font-label-lg text-label-lg text-on-primary-container hover:text-on-primary px-space-md py-space-sm rounded-full transition-colors" data-path="verification-canonique" href="#">
            Vérification Sécurisée
          </a>
          <a className="font-label-lg text-label-lg text-on-primary-container hover:text-on-primary px-space-md py-space-sm rounded-full transition-colors" data-path="charte-protection-mineurs" href="#">
            Protection de l'Enfant
          </a>
          <a className="font-label-lg text-label-lg text-on-primary-container hover:text-on-primary px-space-md py-space-sm rounded-full transition-colors" data-path="registre-mouvements" href="#">
            Annuaire Diocésain
          </a>
        </nav>
        <div className="flex items-center gap-space-sm pl-space-sm">
          <a className="hidden md:inline-flex items-center font-label-md text-label-md text-tertiary-fixed hover:text-on-primary transition-colors px-space-sm py-space-xs" data-path="portail-diocesain" href="#">
            Portail Diocésain
          </a>
          <a className="inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-primary px-space-lg py-space-sm rounded-full hover:bg-surface-tint hover:text-on-primary transition-colors shadow-sm min-h-[44px]" data-path="connexion-encadrants" href="#">
            Accès Encadrants / Connexion
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-on-primary-container/30">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)] max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="flex flex-col w-full">
      <section className="w-full pb-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md">
          <div className="space-y-space-xs min-w-0">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Chancellerie Épiscopale & Direction Diocésaine CV-AV
              </span>
              {" "}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold shadow-sm animate-pulse">
                <span className="w-2 h-2 rounded-full bg-on-error inline-block" />
                {" ANOMALIE CANONIQUE DÉTECTÉE • DALOA "}
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {" Contrôle d'Authenticité Canonique — Alerte Document Invalide ou Révoqué "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
              {" Le code scanné a fait l'objet d'un refus de certification immédiat par l'autorité diocésaine. Ce titre ne confère aucune habilitation ni couverture pastorale. "}
            </p>
          </div>
          <div className="flex items-center gap-space-sm flex-shrink-0">
            <button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-full bg-surface-container-high hover:bg-surface-variant text-primary font-label-md text-label-md transition-all shadow-sm" id="btn-scan-again" type="button">
              <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
              {" Scanner à Nouveau "}
            </button>
            {" "}
            <button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all shadow-sm" id="btn-reset-search" type="button">
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              {" Nouvelle Recherche "}
            </button>
          </div>
        </div>
        <div className="w-full bg-surface-container-lowest rounded-2xl p-space-sm shadow-md mb-space-lg">
          <div className="flex flex-col md:flex-row items-center gap-space-sm">
            <div className="flex items-center gap-space-sm flex-1 w-full px-space-sm">
              <span className="material-symbols-outlined text-error text-[22px]">gpp_bad</span>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Identifiant Unique Scanné / Requêté
                </span>
                {" "}
                <input className="font-title-md text-title-md text-error bg-transparent outline-none w-full font-mono select-all" id="search-input" readOnly type="text" defaultValue="ATT-DAL-2023-REV-0481-FRAUD" />
              </div>
            </div>
            <div className="flex items-center gap-space-xs w-full md:w-auto justify-end px-space-xs">
              <span className="inline-flex items-center px-space-md py-1.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                {" NON HOMOLOGUÉ "}
              </span>
              {" "}
              <button className="p-2 text-outline hover:text-primary rounded-full transition-colors relative" title="Copier l'identifiant litigieux" type="button">
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
                {" "}
                <span className="hidden absolute -top-8 right-0 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full shadow" id="copy-badge">
                  Copié
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-gradient-to-r from-error via-[#b71c1c] to-error text-on-error p-space-lg md:p-space-xl shadow-xl relative overflow-hidden mb-space-xl">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-on-error/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]">shield_with_heart</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-space-lg">
            <div className="w-14 h-14 rounded-full bg-on-error text-error flex items-center justify-center flex-shrink-0 shadow-lg ring-8 ring-on-error/20">
              <span className="material-symbols-outlined text-[32px]">block</span>
            </div>
            <div className="space-y-space-xs flex-1">
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="inline-block px-3 py-1 rounded-full bg-on-error/20 font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                  {" Procédure d'Interdiction Pastorale Immédiate "}
                </span>
                {" "}
                <span className="font-label-sm text-label-sm opacity-90">
                  Réf. Chancellerie : ACT-CAN-2024-NULL-881
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-error">
                {" DOCUMENT NON RECONNU — ATTRIBUTION RÉVOQUÉE OU FRAUDULEUSE "}
              </h2>
              <p className="font-body-lg text-body-lg opacity-95 max-w-3xl">
                {" Acte notifié sous scellé d'opposition N° OPP-DAL-2024-019 • Conformité CECCI rejetée. Tout usage public, éducatif ou ecclésial de cette attestation engage la responsabilité personnelle et pénale de son porteur. "}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-space-xl">
          <div className="lg:col-span-7 space-y-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-lg relative overflow-hidden">
              <div className="flex items-center justify-between gap-space-sm pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-error text-[20px]">assignment_late</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Dossier Titre Litigieux & Rejet Diocésain
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold uppercase">
                  {" Caducité Absolue "}
                </span>
              </div>
              <div className="space-y-space-md pt-space-sm">
                <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Intitulé et Identité mentionnés au document
                  </span>
                  <div className="flex items-start justify-between gap-space-md flex-wrap">
                    <div>
                      <div className="font-title-md text-title-md text-primary font-bold">
                        Brevet Animateur Fripounet - Jean-Claude B.
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        Prétendue affiliation : Doyenné Saint-Joseph / Paroisse de l'Immaculée
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-error/10 text-error font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">cancel</span>
                      {" Usurpation "}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                    <span className="font-label-sm text-label-sm text-outline">Statut Actuel au Registre</span>
                    <p className="font-title-md text-title-md text-error font-semibold">
                      {" RÉVOQUÉ POUR MOTIF DISCIPLINAIRE / USURPATION "}
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                    <span className="font-label-sm text-label-sm text-outline">
                      Date d'Officialisation de Retrait
                    </span>
                    <p className="font-title-md text-title-md text-primary font-semibold">
                      {" 14 Novembre 2024 "}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Par Décret Épiscopal N° 2024/REV-03
                    </p>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-error-container/40 space-y-space-xs">
                  <div className="flex items-center gap-1.5 text-error font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[18px]">report</span>
                    {" Motif Officiel de Nullité Canonique "}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    {" Attestation falsifiée, altération de la signature numérique du Chancelier et défaut de mandat paroissial. Non-conformité avec les registres officiels de la cure de Daloa. Tentative d'introduction sans habilitation pastorale préalable. "}
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-primary text-on-primary flex items-start gap-space-md shadow-md">
                  <div className="w-10 h-10 rounded-full bg-error flex items-center justify-center flex-shrink-0 text-on-error">
                    <span className="material-symbols-outlined text-[22px]">policy</span>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="font-title-md text-title-md text-tertiary-fixed font-semibold">
                      {" Notification Impérative aux Directeurs & Curés "}
                    </div>
                    <p className="font-body-sm text-body-sm leading-relaxed text-surface-container-highest">
                      <strong className="text-error-container font-semibold">
                        AUCUNE COUVERTURE D'ASSURANCE SANLAM
                      </strong>
                      {" n'est attachée à ce titre révoqué. "}
                      <strong className="text-white font-semibold">
                        INTERDICTION STRICTE ET IMMÉDIATE D'ENCADREMENT DE MINEURS
                      </strong>
                      {" dans l'ensemble des paroisses, camps CV-AV, et établissements scolaires conventionnés du Diocèse de Daloa. "}
                    </p>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <div className="space-y-1">
                    <span className="font-label-sm text-label-sm text-outline">
                      Contrôle de Clé Épiscopale Publique
                    </span>
                    <div className="font-title-md text-title-md text-primary">Sceau Diocésain Falsifié</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Signature RSA 4096 invalide et exclue de l'annuaire CECCI
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center p-3 bg-surface-container-lowest rounded-xl shadow-inner">
                    <div className="text-center px-4 py-2">
                      <span className="font-label-sm text-label-sm text-error font-mono tracking-widest uppercase block font-bold">
                        REJETÉ
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-outline block">Certificat #0481</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="material-symbols-outlined text-error text-[48px] opacity-40">close</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-lg space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">verified</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Protocole Diocésain pour les Responsables de Groupes
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                <div className="p-space-sm bg-surface-container-low rounded-xl space-y-1">
                  <span className="font-label-sm text-label-sm text-outline">1. Refus de Charge</span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Refuser immédiatement l'accès aux enfants et aux rassemblements de section.
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-xl space-y-1">
                  <span className="font-label-sm text-label-sm text-outline">2. Rétention Document</span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Prendre copie ou photo de l'attestation physique présentée pour versement au dossier.
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-xl space-y-1">
                  <span className="font-label-sm text-label-sm text-outline">3. Dénonciation Formelle</span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Utiliser le formulaire ci-contre pour adresser le signalement d'usurpation à l'Évêché.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-lg space-y-space-md">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">notification_important</span>
                  {" Action Requise "}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Signalement de Fraude au Secrétariat Diocésain
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" Ce formulaire confidentiel saisit directement le Promoteur de Justice et le Bureau Diocésain de Protection des Mineurs. "}
                </p>
              </div>
              <form className="space-y-space-md" id="incident-report-form">
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-primary font-semibold">
                    {" Lieu / Paroisse de présentation de l'attestation "}
                    <span className="text-error">*</span>
                  </label>
                  {" "}
                  <input className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed-dim shadow-sm transition-all" placeholder="Ex : Paroisse Sainte-Thérèse, Camp CV-AV Séguéla..." required type="text" defaultValue="Groupe Scolaire Saint-Jean, Daloa" />
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-primary font-semibold">
                    {" Identité de l'autorité déclarante (Curé, Aumônier, Responsable) "}
                    <span className="text-error">*</span>
                  </label>
                  {" "}
                  <input className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed-dim shadow-sm transition-all" placeholder="Nom complet et fonction" required type="text" defaultValue="Abbé Mathieu Kouamé (Vicaire / Dir. Pastoral)" />
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-primary font-semibold">
                    {" Téléphone de contact pour contre-enquête "}
                    <span className="text-error">*</span>
                  </label>
                  {" "}
                  <input className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed-dim shadow-sm transition-all" placeholder="+225 ..." required type="tel" defaultValue="+225 07 48 11 22 33" />
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-primary font-semibold">
                    {" Circonstances de la présentation du titre litigieux "}
                  </label>
                  {" "}
                  <textarea className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed-dim shadow-sm transition-all" placeholder="Détails : demande d'encadrement lors de la rentrée CV-AV, sollicitation de camp, etc." rows={3} defaultValue="Présentation lors du rassemblement d'inscription du 18 Novembre 2024. L'intéressé revendiquait la coordination d'un groupe d'Ames Vaillantes." />
                </div>
                <button className="w-full min-h-[44px] py-3 px-space-lg rounded-full bg-error hover:bg-[#a51717] active:scale-[0.99] text-on-error font-label-lg text-label-lg font-semibold shadow-md flex items-center justify-center gap-2 transition-all" type="submit">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  {" Transmettre l'Alerte au Chancelier Épiscopal "}
                </button>
              </form>
              <div className="hidden p-space-md bg-secondary-container text-on-secondary-fixed rounded-xl space-y-1" id="report-confirmation">
                <div className="flex items-center gap-1 font-label-md text-label-md font-bold text-primary">
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  {" Signalement Transmis à la Chancellerie "}
                </div>
                <p className="font-body-sm text-body-sm">
                  {" L'incident a été enregistré sous la référence "}
                  <strong className="font-mono">SIG-DAL-2024-912</strong>
                  {". Un inspecteur diocésain prendra contact sous 2 heures. "}
                </p>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
                <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-semibold">
                  <span className="material-symbols-outlined text-error text-[18px]">phone_in_talk</span>
                  {" Ligne Prioritaire Protection de l'Enfant (Diocèse Daloa) "}
                </div>
                <div className="space-y-1">
                  <a className="block font-title-md text-title-md text-primary hover:text-surface-tint font-bold tracking-tight" href="tel:+2252778351200">
                    {" +225 27 78 35 12 00 "}
                  </a>
                  {" "}
                  <a className="block font-title-md text-title-md text-on-surface-variant hover:text-primary font-medium" href="tel:+2250700123456">
                    {" Cellule d'Urgence Mobile : +225 07 00 12 34 56 "}
                  </a>
                </div>
                <p className="font-body-sm text-body-sm text-outline pt-1">
                  {" Permanence pastorale et canonique assurée du lundi au samedi, 07h30 - 18h30. "}
                </p>
              </div>
              <a className="w-full min-h-[44px] py-3 px-space-lg rounded-full bg-on-tertiary-container hover:bg-[#a6791b] active:scale-[0.99] text-on-primary font-label-lg text-label-lg font-semibold shadow-md flex items-center justify-center gap-2 transition-all" href="#pv-invalidation">
                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                {" Télécharger le PV de Constat d'Irrégularité (PDF/A-3b) "}
              </a>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-md space-y-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[20px]">health_and_safety</span>
                {" "}
                <span className="font-title-md text-title-md text-primary">
                  Couverture Sanlam Vie & Dommages
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" Police Diocésaine N° SANLAM-CI-CVAV-2024. Le porteur de ce titre révoqué est juridiquement "}
                <strong>exclu de plein droit</strong>
                {" de la police de responsabilité civile couvrant les activités du Mouvement CV-AV. "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary-container text-on-primary rounded-2xl p-space-lg md:p-space-xl shadow-xl mb-space-xl space-y-space-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm pb-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">enhanced_encryption</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-white">
                  Preuve Cryptographique de Non-Concordance
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Journal technique d'audit diocésain et chaîne d'authenticité canonique
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">security_update_warning</span>
              {" ÉCHEC SIGNATURE NUMÉRIQUE "}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            <div className="bg-primary/60 p-space-md rounded-xl space-y-1">
              <span className="font-label-sm text-label-sm text-on-primary-container uppercase font-mono">
                Code Requêté au Registre
              </span>
              <p className="font-body-md text-body-md font-mono text-error-container font-semibold break-all">
                {" ATT-DAL-2023-REV-0481-FRAUD "}
              </p>
              <span className="font-body-sm text-body-sm text-on-primary-container block pt-1">
                Racine de hachage absente du ledger diocésain
              </span>
            </div>
            <div className="bg-primary/60 p-space-md rounded-xl space-y-1">
              <span className="font-label-sm text-label-sm text-on-primary-container uppercase font-mono">
                Empreinte SHA-256 du Jeton Présenté
              </span>
              <p className="font-body-sm text-body-sm font-mono text-white break-all">
                {" 4f8b2c19e7a683d0912ab4e9f9024f2b1c87a55e1a90c4d29381cbb4021fe829 "}
              </p>
              <span className="font-body-sm text-body-sm text-error-container block pt-1">
                Discrepancy with Episcopal Ledger Root
              </span>
            </div>
            <div className="bg-primary/60 p-space-md rounded-xl space-y-1">
              <span className="font-label-sm text-label-sm text-on-primary-container uppercase font-mono">
                Statut OCSP / CRL Diocésain
              </span>
              <p className="font-body-md text-body-md text-tertiary-fixed font-semibold">
                {" REVOKED (Liste mise à jour le 14/11/2024 à 16:30 GMT) "}
              </p>
              <span className="font-body-sm text-body-sm text-on-primary-container block pt-1">
                Autorité : Conférence des Évêques Catholiques de CI
              </span>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-primary/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-primary-container">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                verified_user
              </span>
              {" "}
              <span>
                {"Horodatage vérification (RFC 3161) : "}
                <strong className="text-white font-mono" id="current-ts">2024-11-20 14:42:19 UTC+0</strong>
              </span>
            </div>
            <div>
              <span>
                {"Certificat Diocésain émetteur de refus : "}
                <strong className="text-white font-mono">CA-DALOA-ROOT-G2 [SER: 09-AA-38-F1]</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-surface-container-low rounded-2xl p-space-lg mb-space-lg space-y-space-md">
          <div className="flex items-start gap-space-md">
            <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">gavel</span>
            </div>
            <div className="space-y-space-xs flex-1">
              <h3 className="font-headline-sm text-headline-sm text-primary">
                {" Avertissements Juridiques et Dispositions Pénales Applicables "}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {" La confection, l'imitation, la modification ou l'usage frauduleux d'actes émanant d'une autorité religieuse reconnue est passible de sanctions au titre des législations ecclésiastique et séculière de la République de Côte d'Ivoire. "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-1 shadow-sm">
              <div className="flex items-center gap-1 font-title-md text-title-md text-primary font-bold">
                <span className="material-symbols-outlined text-[18px] text-error">balance</span>
                {" Droit Pénal Ivoirien (Loi N° 2019-574) "}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                <strong>Articles 312 et suivants du Code Pénal :</strong>
                {" L'altération intentionnelle de la vérité dans un écrit destiné à prouver un droit ou une qualité professionnelle est punie de trois à dix ans d'emprisonnement et d'amendes sévères. L'usurpation de titre d'éducateur ou de responsable d'association reconnue est formellement poursuivie. "}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-1 shadow-sm">
              <div className="flex items-center gap-1 font-title-md text-title-md text-primary font-bold">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">church</span>
                {" Code de Droit Canonique (CIC 1983) "}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                <strong>Canons 1391 & 1399 :</strong>
                {" Toute falsification d'actes publics ecclésiastiques ou usurpation de charge apostolique entraîne ipso facto la suspense ou la privation de toute fonction canonique au sein des mouvements d'Action Catholique, sans préjudice des réparations pastorales requises par l'Ordinaire. "}
              </p>
            </div>
          </div>
          <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <p className="font-body-sm text-body-sm text-outline">
              {" Pour contester une révocation ou régulariser une situation diocésaine, contactez le Secrétariat du Chancelier. "}
            </p>
            <div className="flex items-center gap-space-sm w-full sm:w-auto">
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-full bg-primary hover:bg-surface-tint text-on-primary font-label-md text-label-md transition-all shadow-sm" data-path="portail-diocesain" href="#">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                {" Retour au Portail Diocésain Public "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.03)] mt-space-xl">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start pb-space-xl">
        <div className="md:col-span-5 space-y-space-sm">
          <div className="flex items-center gap-space-sm">
            <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
            <span className="font-headline-sm text-headline-sm text-primary">
              Diocèse de Daloa • Côte d'Ivoire
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Secrétariat Diocésain à l'Apostolat des Laïcs et Mouvements d'Action Catholique de l'Enfance (CV-AV). Registre public d'accréditation et d'intégrité pastorale.
          </p>
          <div className="pt-space-xs">
            <span className="inline-flex items-center px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
              Autorité Épiscopale • Chancellery Registry
            </span>
          </div>
        </div>
        <div className="md:col-span-4 space-y-space-sm">
          <div className="font-title-md text-title-md text-primary">Cadre Canonique & Légal</div>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>• Charte CECCI relative à la protection des mineurs et personnes vulnérables</li>
            <li>• Conformité Loi n° 2013-450 sur la protection des données à caractère personnel</li>
            <li>• Normes canoniques et mandats pastoraux des encadrants CV-AV</li>
          </ul>
        </div>
        <div className="md:col-span-3 space-y-space-sm">
          <div className="font-title-md text-title-md text-primary">Sceau de Vérification</div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_4px_20px_-2px_rgba(27,42,74,0.05)] space-y-space-xs">
            <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                verified_user
              </span>
              <span>SHA-256 Sceau Cryptographique</span>
            </div>
            <div className="font-label-sm text-label-sm text-outline font-mono truncate select-all">
              DALOA-CVAV-SEC-2024-V491
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
              Horodatage officiel et conformité diocésaine certifiés.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
        <p>© 2024 Évêché de Daloa — Commission Diocésaine CV-AV. Tous droits réservés.</p>
        <div className="flex items-center gap-space-lg">
          <a className="hover:text-primary transition-colors" data-path="charte-protection-mineurs" href="#">
            Charte CECCI
          </a>
          <a className="hover:text-primary transition-colors" data-path="conformite-loi-2013-450" href="#">
            Loi n° 2013-450
          </a>
          <a className="hover:text-primary transition-colors" data-path="mentions-legales-chancellerie" href="#">
            Mentions Officielles
          </a>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}
