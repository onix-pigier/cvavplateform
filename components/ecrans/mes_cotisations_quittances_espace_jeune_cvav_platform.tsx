// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/mes_cotisations_quittances_espace_jeune_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Mes cotisations quittances espace jeune cvav platform — Domaine : Espace Militant

export default function MesCotisationsQuittancesEspaceJeuneCvavPlatform() {
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
        <a aria-current="page" className="flex items-center px-space-md py-space-sm transition-colors bg-primary-container text-on-primary font-bold rounded-xl" data-path="mes-cotisations" href="#">
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
        <div className="p-margin space-y-space-xl max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs">
              <nav aria-label="Fil d'ariane" className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  {" Espace Militant "}
                </a>
                {" "}
                <span className="material-symbols-outlined text-[14px] text-outline-variant">
                  chevron_right
                </span>
                {" "}
                <span className="text-primary font-semibold">Mes Cotisations</span>
              </nav>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                {" Mes Cotisations & Quittances Pastorales "}
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" Année Pastorale 2024–2025 · Patrouille Saint-Joseph · Section Cœurs Vaillants / Âmes Vaillantes "}
              </p>
            </div>
            <div className="flex items-center gap-space-sm flex-shrink-0">
              <button className="inline-flex items-center gap-space-xs bg-tertiary-fixed-dim hover:bg-on-tertiary-container text-tertiary-container hover:text-surface-container-lowest font-label-lg text-label-lg px-space-lg py-3 rounded-full transition-all duration-200 shadow-sm active:scale-95" type="button">
                <span className="material-symbols-outlined text-[20px]">download</span>
                {" "}
                <span>Télécharger le reçu consolidé (PDF)</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Statut Financier Global
                </span>
                {" "}
                <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-semibold" style={{ backgroundColor: "rgba(46, 125, 50, 0.12)", color: "#2E7D32" }}>
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  {" À jour (100%) "}
                </span>
              </div>
              <div className="my-space-md">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">3 500</span>
                  {" "}
                  <span className="font-label-md text-label-md text-secondary font-medium">FCFA versés</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-[#2E7D32] h-full rounded-full w-full" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
                <span className="material-symbols-outlined text-[16px] text-[#2E7D32]">verified</span>
                {" "}
                <span>Aucun arriéré · En règle canonique</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Dernier Règlement
                </span>
                {" "}
                <span className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                </span>
              </div>
              <div className="my-space-md">
                <p className="font-title-md text-title-md text-primary font-bold">14 Octobre 2024</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Espèces (Secrétariat paroissial)
                </p>
              </div>
              <div className="font-body-sm text-body-sm text-secondary truncate">
                {" Réf : "}
                <span className="font-mono text-primary font-medium">#QUIT-DAL-2024-8856</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Répartition Diocésaine
                </span>
                {" "}
                <span className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">pie_chart</span>
                </span>
              </div>
              <div className="space-y-1.5 my-space-xs">
                <div className="flex justify-between items-center font-body-sm text-body-sm">
                  <span className="text-on-surface-variant truncate">Adhésion & Assurance</span>
                  {" "}
                  <span className="font-medium text-primary">2 000 F</span>
                </div>
                <div className="flex justify-between items-center font-body-sm text-body-sm">
                  <span className="text-on-surface-variant truncate">Carte PVC & Foulard</span>
                  {" "}
                  <span className="font-medium text-primary">1 000 F</span>
                </div>
                <div className="flex justify-between items-center font-body-sm text-body-sm">
                  <span className="text-on-surface-variant truncate">Solidarité Patrouille</span>
                  {" "}
                  <span className="font-medium text-primary">500 F</span>
                </div>
              </div>
              <div className="h-2 w-full flex rounded-full overflow-hidden gap-0.5">
                <div className="bg-primary w-[57%]" title="Adhésion 57%" />
                <div className="bg-tertiary-fixed-dim w-[28%]" title="Équipement 28%" />
                <div className="bg-secondary w-[15%]" title="Solidarité 15%" />
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Couverture d'Assurance
                </span>
                {" "}
                <span className="inline-flex items-center px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-semibold" style={{ backgroundColor: "rgba(46, 125, 50, 0.12)", color: "#2E7D32" }}>
                  {" Active "}
                </span>
              </div>
              <div className="my-space-md">
                <p className="font-title-md text-title-md text-primary font-bold">
                  Valide jusqu'au 31 Août 2025
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                  Police Sanlam / CECCI N° 24-912
                </p>
              </div>
              <div className="flex items-center gap-1 font-body-sm text-body-sm text-secondary">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">shield</span>
                {" "}
                <span className="truncate">Sorties & Grand Camp Pascal 2025</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-lg md:p-space-xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-5 pointer-events-none flex items-center justify-center">
              <span className="material-symbols-outlined text-[360px] text-primary">church</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md pb-space-lg bg-surface-container-low p-space-md rounded-xl">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[28px]">verified_user</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-1">
                    <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary-container text-on-primary">
                      {" Acte Officiel Paroissial "}
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-mono">
                      {" Réf: QUIT-DAL-2024-8856 "}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    {" Quittance Diocésaine d'Adhésion Pastorale N° DAL-2024-8856 "}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {" Émise le 14 Octobre 2024 par l'"}
                    <strong>Abbé Jean-Marc KOFFI</strong>
                    {" (Aumônier Paroissial du Plateau) "}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-1 text-right">
                <span className="font-label-sm text-label-sm text-secondary">Payeur Enregistré</span>
                {" "}
                <span className="font-title-md text-title-md text-primary font-bold">M. Moïse Koffi ASSI</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Père / Tuteur Légal · Contact vérifié
                </span>
              </div>
            </div>
            <div className="mt-space-lg overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-high text-primary font-label-md text-label-md">
                    <th className="py-space-sm px-space-md rounded-l-lg">Poste de Cotisation</th>
                    <th className="py-space-sm px-space-md">Bénéficiaire Canonique</th>
                    <th className="py-space-sm px-space-md">Période Couverte</th>
                    <th className="py-space-sm px-space-md text-right rounded-r-lg">Montant (FCFA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container font-body-md text-body-md text-on-surface">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-space-md px-space-md">
                      <div className="font-semibold text-primary">
                        Droit d'Adhésion Annuelle & Assurance CECCI
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary">
                        Couverture accidents corporels Sanlam Police N° ASSUR-CVAV-24-912
                      </div>
                    </td>
                    <td className="py-space-md px-space-md text-on-surface-variant">
                      Diocèse de Daloa & Bureau National
                    </td>
                    <td className="py-space-md px-space-md text-on-surface-variant">2024 – 2025</td>
                    <td className="py-space-md px-space-md text-right font-semibold text-primary">
                      2 000 FCFA
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-space-md px-space-md">
                      <div className="font-semibold text-primary">
                        Kit Militant : Carte PVC RFID & Foulard Béni
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary">
                        Insigne de promesse & carte d'identité paroissiale biométrique
                      </div>
                    </td>
                    <td className="py-space-md px-space-md text-on-surface-variant">
                      Coordination Paroissiale Le Plateau
                    </td>
                    <td className="py-space-md px-space-md text-on-surface-variant">Triennale</td>
                    <td className="py-space-md px-space-md text-right font-semibold text-primary">
                      1 000 FCFA
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-space-md px-space-md">
                      <div className="font-semibold text-primary">
                        Caisse de Solidarité & Camp de Patrouille
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary">
                        Soutien logistique et fournitures d'apprentissage Saint-Joseph
                      </div>
                    </td>
                    <td className="py-space-md px-space-md text-on-surface-variant">Patrouille Saint-Joseph</td>
                    <td className="py-space-md px-space-md text-on-surface-variant">2024 – 2025</td>
                    <td className="py-space-md px-space-md text-right font-semibold text-primary">500 FCFA</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-surface-container-low font-title-md text-title-md text-primary">
                    <td className="py-space-md px-space-md font-bold text-right rounded-l-lg" colSpan={3}>
                      Total Réglé & Encaissé :
                    </td>
                    <td className="py-space-md px-space-md font-bold text-right text-primary text-headline-sm rounded-r-lg">
                      3 500 FCFA
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="mt-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-md items-center">
              <div className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-xl">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#2E7D32] flex flex-col items-center justify-center p-1 text-center rotate-[-4deg] flex-shrink-0">
                  <span className="text-[9px] font-bold uppercase tracking-tighter text-[#2E7D32] leading-none">
                    SECRÉTARIAT PAROISSIAL
                  </span>
                  {" "}
                  <span className="text-[12px] font-black tracking-wider text-[#2E7D32] my-0.5">PAYÉ</span>
                  {" "}
                  <span className="text-[8px] font-semibold text-[#2E7D32] leading-none">14 OCT. 2024</span>
                  {" "}
                  <span className="text-[7px] text-[#2E7D32]">LE PLATEAU DALOA</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[#2E7D32] font-semibold font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    {" "}
                    <span>Signature Numérique Validée</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Sous l'autorité de l'Aumônerie CV-AV Diocèse de Daloa. "}
                  </p>
                  <p className="font-mono text-[10px] text-secondary truncate max-w-xs" title="SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069">
                    {" SHA-256: 7f83b1657ff1fc53b92dc18148a1d65d... "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-end gap-space-sm">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs rounded-full px-space-lg py-3 font-label-lg text-label-lg bg-tertiary-fixed-dim hover:bg-on-tertiary-container text-tertiary-container hover:text-surface-container-lowest transition-all shadow-sm active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[20px]">print</span>
                  {" "}
                  <span>Imprimer la quittance A4</span>
                </button>
                {" "}
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs rounded-full px-space-lg py-3 font-label-lg text-label-lg text-primary bg-surface-container-high hover:bg-surface-container-highest transition-colors active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[20px]">fullscreen</span>
                  {" "}
                  <span>Afficher plein écran</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg md:p-space-xl space-y-space-md">
            <div className="flex items-center justify-between pb-space-sm">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {" Historique des Versements & Archives Pastorales "}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" Relevé continu des engagements paroissiaux du militant depuis son accueil "}
                </p>
              </div>
              <span className="font-label-md text-label-md text-secondary font-medium hidden sm:inline-block">
                {" 3 exercices enregistrés "}
              </span>
            </div>
            <div className="divide-y divide-surface-container">
              <div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-low px-space-sm rounded-xl transition-colors">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-label-lg">
                    {" 25 "}
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Session Pastorale 2024–2025
                      </span>
                      {" "}
                      <span className="inline-flex items-center px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-semibold" style={{ backgroundColor: "rgba(46, 125, 50, 0.12)", color: "#2E7D32" }}>
                        {" Validé "}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-md gap-y-0.5 text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      <span>Règlement : 14/10/2024</span>
                      {" "}
                      <span>•</span>
                      {" "}
                      <span>Espèces</span>
                      {" "}
                      <span>•</span>
                      {" "}
                      <span className="font-mono text-primary">#QUIT-DAL-2024-8856</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">3 500 FCFA</span>
                    {" "}
                    <span className="block font-body-sm text-body-sm text-secondary">Quittance certifiée</span>
                  </div>
                  <button aria-label="Télécharger PDF 2024-2025" className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-tertiary-fixed-dim hover:text-tertiary-container text-primary flex items-center justify-center transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                </div>
              </div>
              <div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-low px-space-sm rounded-xl transition-colors">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold text-label-lg">
                    {" 24 "}
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Session Pastorale 2023–2024
                      </span>
                      {" "}
                      <span className="inline-flex items-center px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-medium bg-surface-container-highest text-secondary">
                        {" Archivé & En règle "}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-md gap-y-0.5 text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      <span>Règlement : 08/10/2023</span>
                      {" "}
                      <span>•</span>
                      {" "}
                      <span>Orange Money</span>
                      {" "}
                      <span>•</span>
                      {" "}
                      <span className="font-mono text-primary">#QUIT-DAL-2023-4102</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">3 000 FCFA</span>
                    {" "}
                    <span className="block font-body-sm text-body-sm text-secondary">Quittance archivée</span>
                  </div>
                  <button aria-label="Télécharger PDF 2023-2024" className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-tertiary-fixed-dim hover:text-tertiary-container text-primary flex items-center justify-center transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                </div>
              </div>
              <div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-low px-space-sm rounded-xl transition-colors">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold text-label-lg">
                    {" 23 "}
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Session 2022–2023 (Aspirant)
                      </span>
                      {" "}
                      <span className="inline-flex items-center px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-medium bg-surface-container-highest text-secondary">
                        {" Archivé & En règle "}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-md gap-y-0.5 text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      <span>Règlement : 15/10/2022</span>
                      {" "}
                      <span>•</span>
                      {" "}
                      <span>Espèces</span>
                      {" "}
                      <span>•</span>
                      {" "}
                      <span className="font-mono text-primary">#QUIT-DAL-2022-1980</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">2 500 FCFA</span>
                    {" "}
                    <span className="block font-body-sm text-body-sm text-secondary">Quittance archivée</span>
                  </div>
                  <button aria-label="Télécharger PDF 2022-2023" className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-tertiary-fixed-dim hover:text-tertiary-container text-primary flex items-center justify-center transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md pb-space-lg">
            <div className="lg:col-span-2 bg-primary-container text-on-primary rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">
                    account_balance
                  </span>
                  {" "}
                  <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    {" Transparence & Destination Pastorale des Fonds "}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                  {" Vos cotisations soutiennent directement la formation continue des chefs et cheftaines de patrouille, l'acquisition de trousses de premiers secours homologuées, l'assurance responsabilité civile du mouvement (CECCI) et le fond de solidarité paroissial permettant d'accueillir des enfants vulnérables au camp pascal sans distinction. "}
                </p>
              </div>
              <div className="pt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                <div className="bg-primary/40 rounded-xl p-space-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">school</span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-primary">Formation des Cadres</span>
                </div>
                <div className="bg-primary/40 rounded-xl p-space-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
                    medical_services
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-primary">Secours & Logistique</span>
                </div>
                <div className="bg-primary/40 rounded-xl p-space-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
                    volunteer_activism
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-primary">Solidarité Militante</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
              <div>
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed-dim text-tertiary-container flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[24px]">contact_support</span>
                </div>
                <h4 className="font-title-md text-title-md text-primary font-bold">
                  Besoin d'un aménagement ?
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  {" Une question sur un reçu, un duplicata ou une demande d'aide pour le Grand Camp Pascal 2025 ? "}
                </p>
              </div>
              <div className="space-y-space-xs pt-space-xs">
                <button className="w-full inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-3 px-space-md rounded-full transition-colors active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  {" "}
                  <span>Contacter le Trésorier Paroissial</span>
                </button>
                {" "}
                <button className="w-full inline-flex items-center justify-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md py-3 px-space-md rounded-full transition-colors active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  {" "}
                  <span>Demande de Bourse de Camp</span>
                </button>
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
