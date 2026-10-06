// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/visionneuse_d_aper_u_rapide_du_fichier_csv_vue_csv_brut_registre_paroissial/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Visionneuse d aper u rapide du fichier csv vue csv brut registre paroissial — Domaine : Registres & Tabularium

export default function VisionneuseDAperURapideDuFichierCsvVueCsvBrutRegistreParoissial() {
  return (
    <div className="bg-surface text-on-surface antialiased">
  <aside className="fixed left-0 top-0 h-full w-72 bg-primary-container text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <div className="flex flex-col flex-1 min-h-0">
      <div className="h-20 flex items-center px-space-lg gap-3 bg-primary">
        <div className="w-10 h-10 rounded-xl bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed shadow-sm">
          <span className="material-symbols-outlined text-[24px]">church</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-title-md text-title-md text-on-primary leading-tight truncate">
            CV-AV Côte d'Ivoire
          </span>
          <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-wide uppercase truncate">
            Diocèse de Daloa
          </span>
        </div>
      </div>
      <div className="px-space-md py-space-sm">
        <span className="font-label-sm text-label-sm text-on-primary-container px-space-sm uppercase tracking-wider">
          Administration Paroissiale
        </span>
      </div>
      <nav className="flex-1 px-space-md space-y-1 overflow-y-auto" data-active-classes="bg-primary text-on-primary font-bold shadow-sm">
        <a className="flex items-center justify-between px-space-md py-3 rounded-xl font-label-lg text-label-lg text-primary-fixed hover:bg-primary hover:text-on-primary transition-colors" data-path="tableau-de-bord" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span>Tableau de bord</span>
          </div>
        </a>
        <a className="flex items-center justify-between px-space-md py-3 rounded-xl font-label-lg text-label-lg text-primary-fixed hover:bg-primary hover:text-on-primary transition-colors" data-path="adhesions-approbations" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            <span>Adhésions & Approbations</span>
          </div>
          <span className="rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 font-bold">
            14
          </span>
        </a>
        <a aria-current="page" className="flex items-center justify-between px-space-md py-3 rounded-xl transition-colors bg-primary text-on-primary font-bold shadow-sm" data-path="registre-des-militants" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span>Registre des Militants</span>
          </div>
        </a>
        <a className="flex items-center justify-between px-space-md py-3 rounded-xl font-label-lg text-label-lg text-primary-fixed hover:bg-primary hover:text-on-primary transition-colors" data-path="cotisations-tresorerie" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            <span>Cotisations & Trésorerie</span>
          </div>
        </a>
        <a className="flex items-center justify-between px-space-md py-3 rounded-xl font-label-lg text-label-lg text-primary-fixed hover:bg-primary hover:text-on-primary transition-colors" data-path="evenements-camps" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">event_available</span>
            <span>Événements & Camps</span>
          </div>
        </a>
        <a className="flex items-center justify-between px-space-md py-3 rounded-xl font-label-lg text-label-lg text-primary-fixed hover:bg-primary hover:text-on-primary transition-colors" data-path="audit-canonique-archive" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>Audit Canonique & Archive</span>
          </div>
        </a>
      </nav>
    </div>
    <div className="p-space-md bg-primary/40">
      <div className="rounded-xl p-3 bg-primary flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">shield</span>
          <span className="font-label-sm text-label-sm text-primary-fixed">Statut Canonique</span>
        </div>
        <span className="font-label-sm text-label-sm text-on-primary font-semibold">Certifié 2025</span>
      </div>
    </div>
  </aside>
  <div className="pl-72 flex flex-col min-h-screen">
    <header className="fixed top-0 left-72 right-0 h-20 bg-surface/90 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(27,42,74,0.04)]">
      <div className="h-20 w-full px-space-xl flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-low text-on-surface">
            <span className="material-symbols-outlined text-secondary text-[20px]">location_city</span>
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">
                Paroisse Active
              </span>
              <span className="font-label-lg text-label-lg text-primary font-semibold leading-tight">
                Cathédrale Christ-Roi
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px] ml-1">
              expand_more
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-lg">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <button className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error" />
            </button>
          </div>
          <div className="flex items-center gap-3 pl-3 border-l border-outline-variant/30">
            <div className="flex flex-col items-end text-right">
              <span className="font-label-lg text-label-lg text-primary font-semibold leading-tight">
                Fr. Jean-Marc KOFFI
              </span>
              <span className="font-label-sm text-label-sm text-secondary leading-none">
                Trésorier & Secrétaire Paroissial
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="relative pt-20 w-full px-space-xl flex-1 bg-surface">
      <div className="flex flex-col w-full">
        <div className="fixed inset-0 z-40 bg-primary-container/60 backdrop-blur-md transition-opacity duration-300 pointer-events-auto" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 pointer-events-none">
          <div className="pointer-events-auto w-[96vw] max-w-[1720px] h-[942px] max-h-[960px] bg-surface-container-lowest rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-primary/10 animate-in fade-in zoom-in-95 duration-200">
            <header className="bg-primary-container text-on-primary px-space-lg py-space-md flex flex-wrap items-center justify-between gap-4 shrink-0 shadow-md">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="relative shrink-0 w-11 h-11 rounded-xl bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined text-[28px]">description</span>
                  {" "}
                  <span className="absolute -bottom-1 -right-1 font-label-sm text-[9px] px-1.5 py-0.5 rounded-full bg-[#2E7D32] text-on-primary tracking-wider uppercase font-bold shadow-sm">
                    CSV
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-primary truncate">
                      {" REGISTRE_CVAV_DALOA_CHRIST_ROI_2024_2025.csv "}
                    </h2>
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-primary text-secondary-fixed">
                      <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                        verified
                      </span>
                      {" SHA-256 SCELLÉ "}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed-dim/80 truncate">
                    <span>142 inscriptions validées</span>
                    {" "}
                    <span>•</span>
                    {" "}
                    <span>18 colonnes d'attributs</span>
                    {" "}
                    <span>•</span>
                    {" "}
                    <span>Délimiteur point-virgule (;)</span>
                    {" "}
                    <span>•</span>
                    {" "}
                    <span>UTF-8 avec BOM</span>
                    {" "}
                    <span>•</span>
                    {" "}
                    <span className="text-tertiary-fixed font-mono text-[11px]">e9f4...2b01</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-2.5 ml-auto">
                <div className="relative min-w-[200px]">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-primary-container text-[18px]">
                    search
                  </span>
                  {" "}
                  <input className="w-full h-10 pl-9 pr-3 rounded-xl bg-primary text-on-primary placeholder:text-on-primary-container font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim transition-all" placeholder="Rechercher texte, regex..." type="text" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-secondary-fixed border border-secondary/40 font-label-sm text-[12px]">
                  <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim">
                    description
                  </span>
                  {" "}
                  <span className="font-medium">UTF-8 avec BOM</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-tertiary-fixed-dim border border-secondary/40 font-label-sm text-[12px]">
                  <span className="font-mono font-bold text-[14px]">;</span>
                  {" "}
                  <span className="text-primary-fixed">Point-virgule</span>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/70 hover:bg-primary text-primary-fixed font-label-sm text-[12px] border border-secondary/40 transition-colors" type="button">
                  <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim">
                    format_list_numbered
                  </span>
                  {" "}
                  <span className="hidden xl:inline">N° Lignes :</span>
                  {" "}
                  <span className="font-bold text-white">Actif</span>
                </button>
                <div className="flex items-center p-0.5 rounded-full bg-primary ring-1 ring-tertiary-fixed-dim/30">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-primary-fixed-dim hover:text-on-primary font-label-sm text-label-sm transition-colors" type="button">
                    <span className="material-symbols-outlined text-[15px]">table_rows</span>
                    {" "}
                    <span>Formaté</span>
                  </button>
                  {" "}
                  <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm shadow-sm font-bold" type="button">
                    <span className="material-symbols-outlined text-[15px]">terminal</span>
                    {" "}
                    <span>CSV Brut</span>
                  </button>
                </div>
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-secondary text-primary-fixed hover:bg-primary transition-all font-label-sm text-label-sm" type="button">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  {" "}
                  <span className="hidden xl:inline">Télécharger</span>
                </button>
                {" "}
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-tertiary-fixed-dim hover:bg-on-tertiary-container text-on-tertiary-fixed font-label-sm text-label-sm font-bold transition-all shadow-sm active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  {" "}
                  <span>Copier le CSV brut</span>
                </button>
                <button aria-label="Fermer" className="w-9 h-9 rounded-full bg-primary hover:bg-error hover:text-on-error flex items-center justify-center text-primary-fixed-dim hover:text-on-primary transition-colors ml-1" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </header>
            <section className="bg-surface-container-low px-space-lg py-3 shrink-0 flex items-center gap-3 overflow-x-auto">
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[210px]">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">data_object</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Lignes de données</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">142 lignes</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-[#2E7D32] font-semibold">1 en-tête</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[250px]">
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-container shrink-0">
                  <span className="material-symbols-outlined text-[18px]">splitscreen</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Colonnes & Délimiteur</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      18 attributs
                    </span>
                    {" "}
                    <span className="font-mono font-bold text-tertiary-fixed-dim bg-primary px-1.5 py-0.2 rounded text-[11px]">
                      SEP = ';'
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[220px]">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined text-[18px]">insert_drive_file</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Poids & Encodage</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">48.2 Ko</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-medium">UTF-8 BOM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[260px]">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-[#2E7D32] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">
                    Intégrité Empreinte SHA-256
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-[#2E7D32] font-bold">
                      Valide & Conforme
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary">RFC 4180</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto hidden 2xl:flex items-center gap-2 pr-2 text-secondary">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">rule</span>
                {" "}
                <span className="font-label-sm text-label-sm italic text-secondary">
                  Prêt pour import direct Excel UEMOA / ProEco Diocèse
                </span>
              </div>
            </section>
            <div className="flex-1 overflow-auto relative bg-surface-container-lowest select-text">
              <div className="w-full h-full overflow-auto bg-[#0a1122] text-[#d9e2ff] font-mono text-[12px] leading-relaxed select-text">
                <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-2 bg-[#040b17] border-b border-primary-container text-primary-fixed-dim text-[11px]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-semibold text-white">
                      <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                        code
                      </span>
                      REGISTRE_CVAV_DALOA_CHRIST_ROI_2024_2025.csv
                    </span>
                    {" "}
                    <span className="text-secondary">•</span>
                    {" "}
                    <span>CRLF</span>
                    {" "}
                    <span className="text-secondary">•</span>
                    {" "}
                    <span>143 lignes au total</span>
                    {" "}
                    <span className="text-secondary">•</span>
                    {" "}
                    <span className="text-[#2E7D32] font-bold">Prêt pour analyse</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-secondary">
                    <span className="px-2 py-0.5 rounded bg-primary-container text-tertiary-fixed-dim font-bold">
                      ; Délimiteur surligné
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded bg-primary-container text-[#b7c6ee]">
                      Chaînes textuelles
                    </span>
                  </div>
                </div>
                <div className="p-3 min-w-[2100px] divide-y divide-white/5">
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group bg-primary-container/40">
                    <span className="w-12 text-right pr-4 text-tertiary-fixed-dim select-none font-bold shrink-0 opacity-80">
                      01
                    </span>
                    <div className="flex-1 font-bold text-tertiary-fixed-dim tracking-tight">
                      <span>N°</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>MATRICULE</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>NOM_PRENOMS</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>DATE_NAISS</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>AGE</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>SEXE</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>SECTION</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>PAROISSE_BAPTEME</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>NUM_ACTE_BAPTEME</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>TUTEUR_LEGAL</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>CONTACT_URG</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>CONTACT_PAIEMENT</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>MONTANT_COTISATION</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>CANAL_PAIEMENT</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>NUM_QUITTANCE</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>DATE_ENCAISSEMENT</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>UID_CARTE_RFID</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span>STATUT_DOSSIER</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      02
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">1</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8845-A</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">BROU Amenan Grâce</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2015-05-14</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">9</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#f472b6]">F</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#f472b6]">Âmes Vaillantes A</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Cathédrale Christ-Roi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2015-0442</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">BROU Kouamé Patrice</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250748921102</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250748921102</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fb923c]">ORANGE_MONEY</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-OM-8845-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 14:22:10</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">E4:88:B5:12:33</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_SOUSTRAIT_EVOLIS</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      03
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">2</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8844-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">KONAN David</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2014-11-22</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">10</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">Chevaliers</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">St-Jean de Lobia</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2014-1109</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">KONAN Yao Faustin</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250564221890</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250564221890</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#e2e8f0]">ESPECES_GUICHET</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-ESP-8844-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 14:38:45</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">8A:33:41:90:12</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#facc15]">VALIDE_EN_FILE_BADGEUSE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      04
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">3</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8843-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">KOUAME Ange-Emmanuel</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2013-02-03</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">11</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">Chevaliers</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Cathédrale Christ-Roi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2013-0091</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">KOUAME Affoué Hélène</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250719884521</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250719884521</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">WAVE</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-WV-8843-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:02:14</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">CC:91:02:44:81</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_SCELLE_MIFARE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      05
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">4</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8842-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">ASSI Moïse Koffi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2015-08-18</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">9</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">Rayons d'Ardent</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Ste-Thérèse</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2015-0814</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">ASSI Koffi Moïse</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250102334455</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250102334455</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#e2e8f0]">ESPECES_GUICHET</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-ESP-8842-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:15:30</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">F1:09:88:22:67</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_CARTE_REMISE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      06
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">5</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8841-A</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">YAO Marie-Grâce</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2014-01-12</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">10</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#f472b6]">F</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#f472b6]">Âmes Vaillantes B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">St-Pierre</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2014-0231</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">YAO Kouassi Bertin</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250755441299</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250755441299</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#e2e8f0]">ESPECES_GUICHET</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-ESP-8841-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:20:02</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">3B:77:A1:66:90</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_CARTE_REMISE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      07
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">6</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8839-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">KANGA Jean-Philippe</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2013-09-29</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">11</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">Chevaliers</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Cathédrale Christ-Roi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2013-1490</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">KANGA N'Dri Marcel</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250577889900</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250577889900</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#e2e8f0]">ESPECES_GUICHET</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-ESP-8839-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:25:50</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">99:EE:44:22:11</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_FICHE_SANTE_REGULARISEE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      08
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">7</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8846-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">KOUASSI Samuel</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2016-06-05</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">8</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">Rayons d'Ardent</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Cathédrale Christ-Roi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2016-0312</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">KOUASSI Ahou Emilie</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250709876543</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250709876543</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#facc15]">MTN_MOMO</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-MTN-8846-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:30:18</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">A2:BB:77:33:98</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#facc15]">VALIDE_EN_FILE_BADGEUSE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      09
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">8</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8847-A</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">KOFFI Marie-Esther</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2015-03-17</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">9</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#f472b6]">F</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#f472b6]">Âmes Vaillantes A</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Ste-Marie</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2015-0199</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">KOFFI N'Goran</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250741223344</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250741223344</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fb923c]">ORANGE_MONEY</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-OM-8847-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:35:42</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">D3:14:89:FE:55</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#facc15]">VALIDE_EN_FILE_BADGEUSE</span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      10
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">9</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8848-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">N'GUESSAN Franck-Axel</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2014-10-08</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">10</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">Cœurs Vaillants</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Cathédrale Christ-Roi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2014-0988</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">N'GUESSAN Kouadio Félix</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250512345678</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250512345678</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fb923c]">ORANGE_MONEY</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-OM-8848-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-13 15:40:05</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">FF:01:23:45:67</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_SCELLE_MIFARE</span>
                    </div>
                  </div>
                  <div className="flex items-center py-4 bg-primary-container/20 text-[#8392b7] text-[11px] my-1 rounded">
                    <span className="w-12 text-right pr-4 text-tertiary-fixed-dim/60 font-bold select-none">
                      ...
                    </span>
                    <div className="flex items-center gap-2 pl-2 italic font-mono">
                      <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim">
                        unfold_more
                      </span>
                      {" "}
                      <span>
                        [133 autres enregistrements scellés et sérialisés conformément à la norme RFC 4180 — Délimiteur strict point-virgule]
                      </span>
                    </div>
                  </div>
                  <div className="flex items-baseline py-1 hover:bg-white/5 transition-colors group">
                    <span className="w-12 text-right pr-4 text-secondary select-none shrink-0 group-hover:text-primary-fixed">
                      143
                    </span>
                    <div className="flex-1 text-[#e1e2e4]">
                      <span className="text-[#93c5fd]">142</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#86efac] font-semibold">CVAV-DAL-2024-8986-B</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white font-medium">ZOKOU Marc-Aurèle</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#fde047]">2014-04-19</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#93c5fd]">10</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">M</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">Chevaliers</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#cbd5e1]">Cathédrale Christ-Roi</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">BP-2014-0422</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-white">ZOKOU Gbahi Léon</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250708112233</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#67e8f9]">+2250708112233</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80] font-semibold">3500</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#60a5fa]">WAVE</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">REC-WV-8986-2024</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#94a3b8]">2024-10-14 09:12:44</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#38bdf8] font-bold">5E:99:A2:18:70</span>
                      <span className="text-amber-400 font-extrabold px-0.5">;</span>
                      {" "}
                      <span className="text-[#4ade80]">VALIDE_CARTE_REMISE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-surface-container-low px-space-lg py-3 flex flex-wrap items-center justify-between gap-4 shrink-0 shadow-inner">
              <div className="flex items-center gap-3 text-secondary text-[12px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                  {" "}
                  <span className="text-primary font-semibold">Ln 1, Col 1</span>
                </div>
                <span>•</span>
                {" "}
                <span>143 lignes</span>
                {" "}
                <span>•</span>
                {" "}
                <span>CRLF (Windows/Excel)</span>
                {" "}
                <span>•</span>
                {" "}
                <span className="text-primary font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                    check_circle
                  </span>
                  {" RFC 4180 / Directoire Diocèse "}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-sm text-secondary font-label-sm text-[12px]">
                <span className="material-symbols-outlined text-[15px] text-primary">search</span>
                {" "}
                <span>Filtrer ligne :</span>
                {" "}
                <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-mono font-bold text-[11px]">
                  1..143
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-secondary text-primary font-label-sm text-label-sm hover:bg-surface-container transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">table_rows</span>
                  {" "}
                  <span>Revenir à la vue Formatée</span>
                </button>
                {" "}
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  {" "}
                  <span>Copier tout le CSV (142 lignes)</span>
                </button>
                {" "}
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-secondary text-primary font-label-sm text-label-sm hover:bg-surface-container transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  {" "}
                  <span>Télécharger (.csv)</span>
                </button>
                {" "}
                <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-error hover:bg-error/90 text-on-error font-label-sm text-label-sm font-semibold transition-all shadow-sm active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                  {" "}
                  <span>Fermer l'aperçu</span>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  </div>
    </div>
  );
}
