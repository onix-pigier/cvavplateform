// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/visionneuse_d_aper_u_rapide_du_fichier_csv_registre_paroissial_consolid/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Visionneuse d aper u rapide du fichier csv registre paroissial consolid — Domaine : Registres & Tabularium

export default function VisionneuseDAperURapideDuFichierCsvRegistreParoissialConsolid() {
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
                <div className="relative min-w-[240px]">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-primary-container text-[18px]">
                    search
                  </span>
                  {" "}
                  <input className="w-full h-10 pl-9 pr-3 rounded-xl bg-primary text-on-primary placeholder:text-on-primary-container font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim transition-all" placeholder="Rechercher militant, matricule..." type="text" />
                </div>
                <div className="relative">
                  <select className="h-10 px-3 pr-8 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim transition-all" />
                  {" "}
                  <span className="material-symbols-outlined absolute right-2 top-2.5 text-on-primary-container pointer-events-none text-[18px]">
                    arrow_drop_down
                  </span>
                </div>
                <div className="flex items-center p-0.5 rounded-full bg-primary p-0.5">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm font-semibold" type="button">
                    <span className="material-symbols-outlined text-[15px]">table_rows</span>
                    {" "}
                    <span>Formaté</span>
                  </button>
                  {" "}
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-primary-fixed-dim hover:text-on-primary font-label-sm text-label-sm transition-colors" type="button">
                    <span className="material-symbols-outlined text-[15px]">code</span>
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
                  <span>Copier</span>
                </button>
                <button aria-label="Fermer" className="w-9 h-9 rounded-full bg-primary hover:bg-error hover:text-on-error flex items-center justify-center text-primary-fixed-dim hover:text-on-primary transition-colors ml-1" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </header>
            <section className="bg-surface-container-low px-space-lg py-3 shrink-0 flex items-center gap-3 overflow-x-auto">
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[210px]">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Effectif Total Inscrit</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">142</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-[#2E7D32] font-semibold">
                      100% baptisés
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[290px]">
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-container shrink-0">
                  <span className="material-symbols-outlined text-[18px]">payments</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Recouvrement Cotisations</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      497 000 FCFA
                    </span>
                    {" "}
                    <span className="font-label-sm text-[10px] text-secondary">
                      (298k Évêché / 199k Paroisse)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[220px]">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined text-[18px]">nfc</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Cartes PVC Gravées (RFID)</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">138 / 142</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-bold">97.2%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm shrink-0 min-w-[240px]">
                <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error shrink-0">
                  <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-secondary">Vigilance Sanitaire PAI</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-error font-bold">
                      9 alertes actives
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary">Trousse prête</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto hidden 2xl:flex items-center gap-2 pr-2 text-secondary">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
                  shield_with_heart
                </span>
                {" "}
                <span className="font-label-sm text-label-sm italic text-secondary">
                  Conforme Directoire Diocésain 2024–2025
                </span>
              </div>
            </section>
            <div className="flex-1 overflow-auto relative bg-surface-container-lowest select-text">
              <table className="w-full min-w-[1950px] border-collapse text-left">
                <thead className="sticky top-0 z-30 bg-primary-container text-on-primary shadow-[0_2px_8px_rgba(4,21,52,0.18)]">
                  <tr className="font-label-sm text-[11px] uppercase tracking-wider select-none">
                    <th className="py-3 px-3 w-14 text-center sticky left-0 z-40 bg-primary-container text-primary-fixed-dim" scope="col">
                      {" N° "}
                    </th>
                    <th className="py-3 px-4 w-44 sticky left-14 z-40 bg-primary-container" scope="col">
                      <div className="flex items-center gap-1 cursor-pointer group">
                        <span>Matricule</span>
                        {" "}
                        <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                          unfold_more
                        </span>
                      </div>
                    </th>
                    <th className="py-3 px-4 w-60" scope="col">
                      <div className="flex items-center gap-1 cursor-pointer group">
                        <span>Nom & Prénoms</span>
                        {" "}
                        <span className="material-symbols-outlined text-[14px] text-primary-fixed-dim">
                          arrow_downward
                        </span>
                      </div>
                    </th>
                    <th className="py-3 px-3 w-32" scope="col">Âge / Naiss.</th>
                    <th className="py-3 px-4 w-44" scope="col">Section Paroissiale</th>
                    <th className="py-3 px-4 w-52" scope="col">Paroisse Baptême & Acte</th>
                    <th className="py-3 px-4 w-64" scope="col">Tuteur Légal & Contact</th>
                    <th className="py-3 px-3 w-36" scope="col">Quartier (Daloa)</th>
                    <th className="py-3 px-3 w-32" scope="col">Statut Cotis.</th>
                    <th className="py-3 px-3 w-40" scope="col">Canal Règlement</th>
                    <th className="py-3 px-3 w-32" scope="col">Réf. Quittance</th>
                    <th className="py-3 px-4 w-44" scope="col">Carte PVC (UID RFID)</th>
                    <th className="py-3 px-4 w-44" scope="col">État Traitement</th>
                    <th className="py-3 px-4 w-56" scope="col">Vigilance Sanitaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 001 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8845-A
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" BA "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          BROU Amenan Grâce
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">9 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">14/05/2015</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-50 text-pink-700 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        {" Âmes Vaillantes A "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Cathédrale Christ-Roi</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2015-0442</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">BROU Kouamé Paul</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250748921104">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 07 48 92 11 04 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Kennedy</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-orange-700 font-medium bg-orange-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {" Orange Money "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8845</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">E4:88:B5:12:33</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
                        <span className="material-symbols-outlined text-[15px]">task_alt</span>
                        {" Gravée & Remise "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[13px]">check</span>
                        {" RAS (Carnet PEV à jour) "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 002 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8844-B
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" KD "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          KONAN David
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">10 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">22/11/2014</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {" Chevaliers "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">St-Jean de Lobia</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2014-1109</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">KONAN Yao Faustin</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250564228901">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 05 64 22 89 01 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Tazibouo</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[13px]">point_of_sale</span>
                        {" Espèces Guichet "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8844</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">A1:39:DF:88:02</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
                        <span className="material-symbols-outlined text-[15px]">task_alt</span>
                        {" Carte Remise "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-semibold">
                        <span className="material-symbols-outlined text-[13px]">warning</span>
                        {" Alerte PAI: Allergie guêpe "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 003 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8843-B
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" KA "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          KOUAME Ange-Emmanuel
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">11 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">03/02/2013</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {" Chevaliers "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Cathédrale Christ-Roi</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2013-0091</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">KOUAME Affoué Hélène</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250719883422">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 07 19 88 34 22 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Commerce</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-blue-700 font-medium bg-blue-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {" Wave Mobile "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8843</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">CC:91:02:44:81</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                        <span className="material-symbols-outlined text-[15px]">lock</span>
                        {" Carte Scellée "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-label-sm text-[11px] font-medium">
                        <span className="material-symbols-outlined text-[13px]">medical_services</span>
                        {" PAI Médical (Certifié) "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 004 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8842-B
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" AM "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          ASSI Moïse Koffi
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">9 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">18/08/2015</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {" Rayons d'Ardent "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Ste-Thérèse</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2015-0814</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">ASSI Koffi Moïse</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250102334455">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 01 02 33 44 55 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Soleil</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[13px]">point_of_sale</span>
                        {" Espèces Guichet "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8842</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">9C:B3:24:F1:11</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
                        <span className="material-symbols-outlined text-[15px]">task_alt</span>
                        {" Carte Délivrée "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[13px]">check</span>
                        {" RAS "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 005 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8841-A
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" YM "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          YAO Marie-Grâce
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">10 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">12/01/2014</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-50 text-pink-700 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        {" Âmes Vaillantes B "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">St-Pierre</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2014-0231</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">YAO Kouassi Bertin</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250755443322">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 07 55 44 33 22 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Marais</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[13px]">point_of_sale</span>
                        {" Espèces Guichet "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8841</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">18:EA:55:09:44</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
                        <span className="material-symbols-outlined text-[15px]">task_alt</span>
                        {" Carte Délivrée "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-label-sm text-[11px] font-semibold">
                        <span className="material-symbols-outlined text-[13px]">pulmonology</span>
                        {" Asthme d'effort (Ventoline) "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 006 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8839-B
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" KJ "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          KANGA Jean-Philippe
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">11 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">29/09/2013</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {" Chevaliers "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Cathédrale Christ-Roi</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2013-1490</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">KANGA N'Dri Marcel</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250577889900">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 05 77 88 99 00 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Gbeuliville</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span>
                        {" Espèces (Régularisé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8839</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">D2:44:A9:33:77</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-tertiary-fixed-dim">
                        <span className="material-symbols-outlined text-[15px]">hourglass_top</span>
                        {" Prête pour remise "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[13px]">assignment_turned_in</span>
                        {" Fiche régularisée "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 007 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8846-B
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" KS "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          KOUASSI Samuel
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">8 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">05/06/2016</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {" Rayons d'Ardent "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Cathédrale Christ-Roi</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2016-0312</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">KOUASSI Ahou Emilienne</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250709876543">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 07 09 87 65 43 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Lobia</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-yellow-800 font-medium bg-yellow-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        {" MTN MoMo "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8846</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-secondary">
                          B8:11:FE:22:90
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary">
                        <span className="material-symbols-outlined text-[15px]">print</span>
                        {" En file badgeuse "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[13px]">check</span>
                        {" RAS "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 008 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8847-A
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" KM "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          KOFFI Marie-Esther
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">9 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">17/03/2015</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-50 text-pink-700 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        {" Âmes Vaillantes A "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Ste-Marie</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2015-0199</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">KOFFI N'Goran</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250741223311">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 07 41 22 33 11 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Quartier Huberson</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-blue-700 font-medium bg-blue-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {" Wave Mobile "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8847</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">45:67:89:AB:CD</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                        <span className="material-symbols-outlined text-[15px]">lock</span>
                        {" Carte Scellée "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[13px]">check</span>
                        {" RAS "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-container/20 transition-colors group">
                    <td className="py-3 px-3 text-center font-mono font-semibold text-secondary sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      {" 009 "}
                    </td>
                    <td className="py-3 px-4 sticky left-14 bg-surface-container-lowest group-hover:bg-surface-container-low">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          CVAV-DAL-2024-8848-B
                        </span>
                        {" "}
                        <button className="opacity-0 group-hover:opacity-100 text-secondary hover:text-primary transition-opacity p-0.5" title="Copier matricule">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-label-sm text-[10px] font-bold flex items-center justify-center shrink-0">
                          {" NF "}
                        </div>
                        <span className="font-label-lg text-label-lg font-semibold text-primary">
                          N'GUESSAN Franck-Axel
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-on-surface">10 ans</span>
                      {" "}
                      <span className="block text-secondary font-label-sm text-[11px]">08/10/2014</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-label-sm text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {" Cœurs Vaillants "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface truncate">Cathédrale Christ-Roi</div>
                      <span className="text-secondary font-mono text-[11px]">#BP-2014-0988</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-on-surface">N'GUESSAN Kouadio Félix</div>
                      <a className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1" href="tel:+2250512345678">
                        <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                          call
                        </span>
                        {" +225 05 12 34 56 78 "}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-secondary">Tazibouo 2</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-bold">
                        {" 3 500 F (Payé) "}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-orange-700 font-medium bg-orange-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {" Orange Money "}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-secondary">QUIT-2024-8848</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#2E7D32] text-[15px]">sensors</span>
                        {" "}
                        <span className="font-mono text-[11px] font-semibold text-primary">FF:01:23:45:67</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                        <span className="material-symbols-outlined text-[15px]">lock</span>
                        {" Carte Scellée "}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[13px]">check</span>
                        {" RAS "}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer className="bg-surface-container-low px-space-lg py-3 flex flex-wrap items-center justify-between gap-4 shrink-0 shadow-inner">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">view_list</span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">
                  {" Affichage des lignes "}
                  <strong className="text-primary font-semibold">1 à 9</strong>
                  {" sur "}
                  <strong className="text-primary font-semibold">142 enregistrements</strong>
                  {" scellés "}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-full shadow-sm">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container transition-colors disabled:opacity-30" disabled type="button">
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </button>
                {" "}
                <button className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-bold flex items-center justify-center shadow-sm" type="button">
                  {" 1 "}
                </button>
                {" "}
                <button className="w-7 h-7 rounded-full text-secondary hover:bg-surface-container font-label-sm text-[11px] font-medium flex items-center justify-center transition-colors" type="button">
                  {" 2 "}
                </button>
                {" "}
                <button className="w-7 h-7 rounded-full text-secondary hover:bg-surface-container font-label-sm text-[11px] font-medium flex items-center justify-center transition-colors" type="button">
                  {" 3 "}
                </button>
                {" "}
                <span className="text-secondary font-mono text-[11px] px-1">...</span>
                {" "}
                <button className="w-7 h-7 rounded-full text-secondary hover:bg-surface-container font-label-sm text-[11px] font-medium flex items-center justify-center transition-colors" type="button">
                  {" 16 "}
                </button>
                {" "}
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-secondary text-primary font-label-sm text-label-sm hover:bg-surface-container transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  {" "}
                  <span>Colonnes</span>
                </button>
                {" "}
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-secondary text-primary font-label-sm text-label-sm hover:bg-surface-container transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  {" "}
                  <span>Imprimer</span>
                </button>
                {" "}
                <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm active:scale-95" type="button">
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
