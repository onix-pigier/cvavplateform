// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/tableau_de_bord_paroissial_chef_de_section_cvav_2/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Tableau de bord paroissial chef de section cvav 2 — Domaine : Assainissement

export default function TableauDeBordParoissialChefDeSectionCvav2() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
  <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(27,42,74,0.06)]">
    <div className="h-28 w-full">
      <div className="h-16 px-gutter flex items-center justify-between bg-primary text-on-primary">
        <div className="flex items-center gap-4">
          <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-title-md text-title-md tracking-tight text-on-primary">
                CV-AV Côte d'Ivoire
              </span>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                Campagne 2024-2025
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-primary-container">
              <span className="material-symbols-outlined text-[13px]">church</span>
              <span>Archidiocèse d'Abidjan</span>
              <span className="opacity-40">•</span>
              <span>Paroisse Saint-Jean de Cocody</span>
              <span className="opacity-40">•</span>
              <span className="text-tertiary-fixed">Section Saint-Jean Apôtre</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-9 px-4 rounded-full bg-on-tertiary-container hover:bg-tertiary-fixed-dim text-tertiary-container hover:text-on-tertiary-fixed font-label-md text-label-md flex items-center gap-1.5 transition-all shadow-[0_2px_8px_rgba(186,137,31,0.25)]" type="button">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>+ Nouvel Enrôlement</span>
          </button>
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-secondary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-primary" />
          </div>
          <div className="flex items-center gap-2.5 pl-2 py-1 pr-3 rounded-full bg-primary-container hover:bg-secondary transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-label-md text-label-md text-on-primary leading-tight">Fr. Jean-Marc</span>
              <span className="font-label-sm text-label-sm text-on-primary-container leading-tight">
                Chef de Section CV
              </span>
            </div>
            <span className="material-symbols-outlined text-on-primary-container text-[16px]">expand_more</span>
          </div>
        </div>
      </div>
      <div className="h-12 px-gutter flex items-center justify-between bg-surface-container-lowest">
        <nav className="flex items-center gap-1" data-active-classes="bg-secondary-container text-on-secondary-fixed font-label-md">
          <a aria-current="page" className="px-3 py-1.5 rounded-lg transition-colors bg-secondary-container text-on-secondary-fixed font-label-md" data-path="tableau-de-bord" href="#">
            Tableau de Bord
          </a>
          <a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="militants-effectifs" href="#">
            Militants & Effectifs
          </a>
          <a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="pointage-presences" href="#">
            Pointage & Présences
          </a>
          <a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="cotisations-finances" href="#">
            Cotisations & Finances
          </a>
          <a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="fiches-sanitaires" href="#">
            Fiches Sanitaires
          </a>
          <a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="attestations-promesses" href="#">
            Attestations & Promesses
          </a>
        </nav>
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
          <span>Registre Paroissial Validé</span>
        </div>
      </div>
    </div>
  </header>
  <main className="w-full pt-28 bg-surface">
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1440px] mx-auto px-gutter py-space-lg flex flex-col gap-space-lg">
        <section className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-container text-tertiary-fixed flex items-center justify-center shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-[32px]">shield_with_heart</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="font-headline-md text-headline-md text-primary tracking-tight">
                  Paix et Joie, Fr. Jean-Marc !
                </h1>
                <span className="px-3 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  Chef de Section CV • 4ᵉ année de mandat
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                <span className="font-semibold text-primary">Section St-Jean Apôtre</span>
                {" (Branche CV 10-14 ans) • Effectif vérifié : "}
                <span className="font-semibold text-on-surface">48 Cœurs Vaillants</span>
                {" (42 confirmés, 6 cotisations en instance) "}
              </p>
              <div className="flex items-center gap-2 mt-1 font-label-md text-label-md text-secondary">
                <span className="material-symbols-outlined text-[18px] text-tertiary-container">event</span>
                {" "}
                <span className="font-semibold text-primary">Prochain rassemblement :</span>
                {" "}
                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-medium">
                  Samedi 19 Octobre à 15h00
                </span>
                {" "}
                <span className="text-on-surface-variant font-normal">
                  — Bénédiction des foulards & Rentrée (J-3)
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button className="h-11 px-5 rounded-full bg-on-tertiary-container hover:bg-tertiary-fixed-dim text-tertiary-container font-label-md text-label-md font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]" type="button">
              <span className="material-symbols-outlined text-[20px]">person_add</span>
              {" "}
              <span>+ Inscrire militant</span>
            </button>
            {" "}
            <button className="h-11 px-5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]" type="button">
              <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
              {" "}
              <span>Lancer le pointage</span>
            </button>
            {" "}
            <button className="h-11 px-4 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md font-medium flex items-center gap-2 transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">print</span>
              {" "}
              <span>Feuilles de camp</span>
            </button>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Total Militants Inscrits
              </span>
              <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">groups</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight">48</span>
              {" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant">/ 50 Objectif section</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: "96%" }} />
              </div>
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-[#2E7D32] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  {" 96% complété "}
                </span>
                {" "}
                <span className="text-on-surface-variant">42 régularisés</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Cotisations Encaissées
              </span>
              <div className="w-9 h-9 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight">138 000</span>
              {" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant">/ 144 000 FCFA</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div className="h-full rounded-full bg-on-tertiary-container" style={{ width: "92%" }} />
              </div>
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-tertiary-container font-semibold">92% recouvrement</span>
                {" "}
                <span className="text-on-surface-variant">6 restants (18 000 F)</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Assiduité Réunions & Messe
              </span>
              <div className="w-9 h-9 rounded-full bg-surface-container-high text-[#2E7D32] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">equalizer</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight">88.5%</span>
              {" "}
              <span className="font-body-sm text-body-sm text-[#2E7D32] font-medium">+3.2% vs sept.</span>
            </div>
            <div className="flex items-center gap-2 pt-1 font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] shrink-0" />
              {" "}
              <span>Moyenne stable sur 6 rassemblements</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Vigilances Médicales
              </span>
              <div className="w-9 h-9 rounded-full bg-error-container text-error flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">medical_services</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-[#C62828] tracking-tight">4</span>
              {" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant">fiches prioritaires</span>
            </div>
            <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-[#C62828] bg-error-container/40 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[15px]">warning</span>
              {" "}
              <span className="truncate">1 Allergie sévère • 2 Asthmes • 1 Dispense</span>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Militants & Dossiers de Rentrée
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Registre matriculaire et contrôles sanitaires de la section St-Jean
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                    48 inscrits
                  </span>
                  {" "}
                  <button className="h-8 px-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    {" "}
                    <span>Exporter CSV</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 pt-1">
                <div className="sm:col-span-5 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[18px]">
                    search
                  </span>
                  {" "}
                  <input className="w-full h-11 pl-9 pr-3 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed transition-all" placeholder="Rechercher par nom ou matricule..." type="text" defaultValue="Kouassi" />
                </div>
                <div className="sm:col-span-4">
                  <select className="w-full h-11 px-3 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed transition-all" defaultValue="michel" />
                </div>
                <div className="sm:col-span-3">
                  <select className="w-full h-11 px-3 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary-fixed transition-all" />
                </div>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      <th className="py-3 px-3.5 rounded-l-lg">Matricule & Nom</th>
                      <th className="py-3 px-3">Équipe & Âge</th>
                      <th className="py-3 px-3">Cotisation</th>
                      <th className="py-3 px-3">Fiche Santé</th>
                      <th className="py-3 px-3">Dernier pointage</th>
                      <th className="py-3 px-3 text-right rounded-r-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm divide-y-0">
                    <tr className="bg-tertiary-fixed/20 hover:bg-tertiary-fixed/30 transition-colors">
                      <td className="py-3 px-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[12px] shrink-0">
                            {" KA "}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-md text-title-md text-primary truncate leading-tight">
                              Kouassi Ange-Emmanuel
                            </span>
                            {" "}
                            <span className="font-label-sm text-label-sm text-secondary font-mono">
                              CVAV-ABJ-2024-9184
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface">Équipe St-Michel</span>
                          {" "}
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            12 ans • 2ᵉ année
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[13px]">verified</span>
                          {" "}
                          <span>Réglé (Wave 3000 F)</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-[#C62828] font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">emergency</span>
                          {" "}
                          <span>Alerte Pénicilline</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#2E7D32]">
                          <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                          {" "}
                          <span>Présent sam. 12</span>
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" title="Consulter le dossier complet" type="button">
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                          </button>
                          {" "}
                          <button className="w-8 h-8 rounded-full bg-on-tertiary-container hover:bg-tertiary-fixed-dim text-tertiary-container flex items-center justify-center transition-colors" title="Imprimer carte provisoire" type="button">
                            <span className="material-symbols-outlined text-[16px]">badge</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[12px] shrink-0">
                            {" AB "}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-primary truncate leading-tight">
                              Akissi Bérénice Amenan
                            </span>
                            {" "}
                            <span className="font-label-sm text-label-sm text-secondary font-mono">
                              CVAV-ABJ-2024-9140
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface">Équipe St-Michel</span>
                          {" "}
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            11 ans • 1ʳᵉ année
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[13px]">check_circle</span>
                          {" "}
                          <span>Réglé (Caisse)</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[13px] text-[#2E7D32]">check</span>
                          {" "}
                          <span>Conforme CMU</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#2E7D32]">
                          <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                          {" "}
                          <span>Présent sam. 12</span>
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button">
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                          </button>
                          {" "}
                          <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button">
                            <span className="material-symbols-outlined text-[16px]">print</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-[12px] shrink-0">
                            {" DE "}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-primary truncate leading-tight">
                              Diomandé Eric-Junior
                            </span>
                            {" "}
                            <span className="font-label-sm text-label-sm text-secondary font-mono">
                              CVAV-ABJ-2024-9198
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface">Équipe St-Michel</span>
                          {" "}
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            13 ans • 3ᵉ année
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[13px]">pending</span>
                          {" "}
                          <span>En attente (Relance 2)</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[13px] text-[#2E7D32]">check</span>
                          {" "}
                          <span>Conforme CMU</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                          <span>
                            <footer className="w-full bg-surface-container-low py-8 mt-12">
                              <div className="w-full px-gutter flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
                                <div className="flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[18px] text-secondary">
                                    verified_user
                                  </span>
                                  <span>
                                    Direction Diocésaine CV-AV Abidjan • Commission Pastorale de l'Enfance et de la Jeunesse
                                  </span>
                                </div>
                                <div className="flex items-center gap-6 font-label-sm text-label-sm">
                                  <a className="hover:text-on-surface transition-colors" href="#">
                                    Charte Diocésaine
                                  </a>
                                  <a className="hover:text-on-surface transition-colors" href="#">
                                    Protocole de Protection
                                  </a>
                                  <a className="hover:text-on-surface transition-colors" href="#">
                                    Assistance Secrétariat
                                  </a>
                                  <span>© 2024-2025 Mouvement CV-AV Côte d'Ivoire</span>
                                </div>
                              </div>
                            </footer>
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
