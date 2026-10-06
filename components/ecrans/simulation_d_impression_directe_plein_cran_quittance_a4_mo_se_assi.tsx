// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/simulation_d_impression_directe_plein_cran_quittance_a4_mo_se_assi/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Simulation d impression directe plein cran quittance a4 mo se assi — Domaine : Finances & Cotisations

export default function SimulationDImpressionDirectePleinCranQuittanceA4MoSeAssi() {
  return (
    <div className="bg-primary text-on-surface font-body-md text-body-md min-h-screen antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
  <main className="w-full min-h-screen relative flex flex-col justify-start items-stretch">
    <div className="flex flex-col w-full">
      <div className="w-full min-h-screen bg-primary text-on-primary flex flex-col antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <header className="w-full bg-primary-container px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-lg sticky top-0 z-40">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-tertiary-container text-tertiary-fixed-dim flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-2xl">print</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-headline-sm text-headline-sm text-on-primary truncate">
                  Spooler d'Impression A4 Haute Définition
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-tertiary-container text-tertiary-fixed-dim">
                  300 DPI Natif
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim truncate">
                {" Prêt à imprimer • Rendu vectoriel conforme • 1 feuille A4 recto (210 × 297 mm) "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-primary px-3 py-1.5 rounded-full shadow-inner">
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-variant/20 active:scale-95 transition-all text-on-primary" id="btn-zoom-out" title="Réduire">
              <span className="material-symbols-outlined text-lg">remove</span>
            </button>
            {" "}
            <span className="font-label-md text-label-md px-2 text-tertiary-fixed-dim select-none font-semibold" id="zoom-val">
              100%
            </span>
            {" "}
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-variant/20 active:scale-95 transition-all text-on-primary" id="btn-zoom-in" title="Agrandir">
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
            <div className="w-px h-4 bg-outline-variant/30 mx-1" />
            <button className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-variant/20 hover:bg-surface-variant/30 text-on-primary transition-all flex items-center gap-1" id="btn-zoom-fit">
              <span className="material-symbols-outlined text-sm">fit_screen</span>
              {" "}
              <span>Adapter à la page</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-label-md font-label-md bg-surface-variant/20 hover:bg-error/30 hover:text-white text-primary-fixed-dim transition-all active:scale-95">
              <span className="material-symbols-outlined text-lg">close</span>
              {" "}
              <span>Fermer (Échap)</span>
            </button>
          </div>
        </header>
        <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
          <main className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center bg-inverse-surface/30 backdrop-blur-sm relative">
            <div className="absolute top-4 left-6 pointer-events-none hidden md:flex items-center gap-2 text-label-sm font-label-sm text-outline-variant">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {" "}
              <span>Canal spooler actif: canon-c3530i.local (port 9100 RAW)</span>
            </div>
            <div className="bg-surface-container-lowest text-on-surface shadow-2xl rounded-sm w-full max-w-[800px] min-h-[1130px] p-8 sm:p-12 transition-transform duration-200 origin-top flex flex-col justify-between select-text relative" id="a4-sheet">
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.035] overflow-hidden select-none">
                <span className="font-display-lg text-[130px] font-bold text-primary transform -rotate-45 leading-none text-center">
                  {" ARCHIVES DIOCÉSAINES"}
                  <br />
                  {"DALOA "}
                </span>
              </div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-5 border-b border-surface-container-high">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-primary-container p-1 shadow-md">
                      <img alt="Armoiries et sceau CV-AV Daloa" className="w-full h-full object-contain" src="/assets/image-placeholder.svg" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim font-bold">
                        {" ÉGLISE CATHOLIQUE EN CÔTE D'IVOIRE "}
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight">
                        {" DIOCÈSE DE DALOA "}
                      </h2>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">
                        {" Doyenné Cathédrale • Paroisse Cathédrale Christ-Roi "}
                      </p>
                      <p className="font-label-sm text-label-sm text-primary-container font-semibold mt-0.5">
                        {" Mouvement d'Action Catholique Cœurs Vaillants – Âmes Vaillantes (CV-AV) "}
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-3.5 flex flex-col gap-1 text-right shrink-0 sm:min-w-[210px]">
                    <span className="font-label-sm text-label-sm text-secondary">Réf. Bordereau de Caisse</span>
                    {" "}
                    <span className="font-headline-sm text-headline-sm font-bold text-primary font-mono tracking-tight">
                      QC-DAL-2024-0199
                    </span>
                    <div className="text-body-sm font-body-sm text-on-surface-variant flex flex-col">
                      <span>Émission : 12/10/2024 11:15:32 GMT</span>
                      {" "}
                      <span className="text-primary font-semibold">Exercice : 2024–2025</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center flex flex-col items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-label-sm bg-tertiary-fixed/30 text-tertiary-fixed-dim font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    {" Bordereau de Caisse & Délivrance Pastorale "}
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mt-2 font-bold">
                    {" Quittance Officielle de Perception "}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary max-w-xl">
                    {" Reçu d'adhésion annuelle, affiliation canonique et souscription aux assurances diocésaines pour l'exercice pastoral 2024–2025. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-container-high">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-primary">person</span>
                          {" Militant Bénéficiaire "}
                        </span>
                        {" "}
                        <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-green-100 text-green-800 font-semibold">
                          {" Affiliation validée "}
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-primary font-bold">Moïse Koffi ASSI</h4>
                      <div className="mt-2 space-y-1 text-body-sm font-body-sm text-on-surface">
                        <div className="flex justify-between">
                          <span className="text-secondary">Matricule Diocésain :</span>
                          {" "}
                          <span className="font-mono font-semibold text-primary">REC-DAL-2024-8842</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Âge & Sexe :</span>
                          {" "}
                          <span className="font-medium">8 ans • Masculin</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Branche d'âge :</span>
                          {" "}
                          <span className="font-semibold text-tertiary-fixed-dim">Fripounets (6-8 ans)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Paroisse de baptême :</span>
                          {" "}
                          <span className="font-medium">Christ-Roi (Acte 2016/412)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-surface-container-high flex items-center gap-1.5 text-label-sm font-label-sm text-secondary">
                      <span className="material-symbols-outlined text-sm text-green-700">task_alt</span>
                      {" "}
                      <span>Carnet de progression & foulard attribués</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-container-high">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-primary">
                            family_restroom
                          </span>
                          {" Payeur / Responsable Légal "}
                        </span>
                        {" "}
                        <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-primary-container text-primary-fixed font-semibold">
                          {" Père de l'enfant "}
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-primary font-bold">
                        M. ASSI Kouamé Marcel
                      </h4>
                      <div className="mt-2 space-y-1 text-body-sm font-body-sm text-on-surface">
                        <div className="flex justify-between">
                          <span className="text-secondary">Profession :</span>
                          {" "}
                          <span className="font-medium">Artisan ébéniste</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Résidence :</span>
                          {" "}
                          <span className="font-medium">Daloa, Quartier Soleil</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Téléphone contact :</span>
                          {" "}
                          <span className="font-mono font-medium">+225 07 59 11 34 82</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Modalité de présence :</span>
                          {" "}
                          <span className="font-medium text-primary">Présence physique au guichet</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-surface-container-high flex items-center gap-1.5 text-label-sm font-label-sm text-secondary">
                      <span className="material-symbols-outlined text-sm text-blue-700">sms</span>
                      {" "}
                      <span>Notification SMS de confirmation émise</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary-container text-on-primary">
                        <th className="py-2.5 px-4 font-label-md text-label-md font-semibold w-12 text-center">
                          N°
                        </th>
                        <th className="py-2.5 px-4 font-label-md text-label-md font-semibold">
                          Désignation canonique de la prestation
                        </th>
                        <th className="py-2.5 px-4 font-label-md text-label-md font-semibold w-32">Compte</th>
                        <th className="py-2.5 px-4 font-label-md text-label-md font-semibold text-right w-36">
                          Montant
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-high text-body-sm font-body-sm">
                      <tr className="hover:bg-surface-container">
                        <td className="py-3 px-4 text-center font-mono text-secondary">01</td>
                        <td className="py-3 px-4 font-medium text-on-surface">
                          {" Cotisation annuelle diocésaine CV-AV 2024–2025 "}
                          <span className="block text-body-sm text-secondary font-normal">
                            Frais de fonctionnement section, insigne Fripounets, foulard officiel, carnet de vie
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-secondary">CPT-701-CV</td>
                        <td className="py-3 px-4 text-right font-semibold text-primary font-mono">
                          2 000 FCFA
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container">
                        <td className="py-3 px-4 text-center font-mono text-secondary">02</td>
                        <td className="py-3 px-4 font-medium text-on-surface">
                          {" Assurance Responsabilité Civile & Prévoyance Camps "}
                          <span className="block text-body-sm text-secondary font-normal">
                            Couverture intégrale diocésaine sorties récréatives, pèlerinages et mini-camps paroissiaux
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-secondary">CPT-704-ASS</td>
                        <td className="py-3 px-4 text-right font-semibold text-primary font-mono">
                          1 500 FCFA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-primary text-on-primary p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim">
                        account_balance_wallet
                      </span>
                      {" "}
                      <span className="font-title-md text-title-md font-bold tracking-wide uppercase">
                        Total Net Perçu en Caisse Paroissiale
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline-lg text-headline-lg font-bold text-tertiary-fixed-dim font-mono">
                        3 500
                      </span>
                      {" "}
                      <span className="font-label-lg text-label-lg font-semibold text-tertiary-fixed-dim">
                        FCFA
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-surface-container rounded-lg text-body-sm font-body-sm text-on-surface flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-primary">
                      ARRÊTÉ LA PRÉSENTE QUITTANCE À LA SOMME DE :
                    </span>
                    {" "}
                    <span className="font-medium italic text-on-surface-variant">
                      Trois mille cinq cents Francs CFA.
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-label-sm font-label-sm font-semibold text-primary">
                    {" Paiement Espèces • Sans réserve "}
                  </span>
                </div>
              </div>
              <div className="relative z-10 mt-8 pt-6 border-t-2 border-dashed border-surface-container-highest">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center items-start">
                  <div className="flex flex-col items-center justify-between h-32 bg-surface-container-low rounded-xl p-3">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                      Le Responsable Légal
                    </span>
                    <div className="font-display-lg text-primary text-lg italic rotate-[-5deg] opacity-80 select-none">
                      {" Assi Marcel "}
                    </div>
                    <span className="font-label-sm text-label-sm text-outline font-medium">
                      Émargement au guichet
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-between h-32 bg-surface-container-low rounded-xl p-2.5">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                      Sceau Numérique & Sécurité
                    </span>
                    <div className="w-16 h-16 bg-white p-1 rounded border border-surface-container-high shadow-xs flex items-center justify-center">
                      <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v2h-4v-2zm2-2h2v2h-2v-2zm-6-2h2v2h-2v-2zm0 4h2v2h-2v-2zM6 6h2v2H6V6zm12 0h2v2h-2V6zM6 18h2v2H6v-2z" />
                      </svg>
                    </div>
                    <span className="font-mono text-[10px] text-outline truncate max-w-full">
                      SHA256: 4c9e71f8...d842a1
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-between h-32 bg-surface-container-low rounded-xl p-3 relative overflow-hidden">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                      Le Caissier Paroissial
                    </span>
                    <div className="w-24 h-24 absolute top-4 rounded-full border-2 border-blue-700/70 border-dashed flex flex-col items-center justify-center p-1 transform rotate-6 pointer-events-none select-none">
                      <span className="text-[7px] font-bold text-blue-800 tracking-tighter uppercase">
                        PAROISSE CHRIST-ROI
                      </span>
                      {" "}
                      <span className="text-[8px] font-black text-blue-900 uppercase">CAISSE VALIDÉE</span>
                      {" "}
                      <span className="text-[7px] font-bold text-blue-800">12 OCT 2024</span>
                      {" "}
                      <span className="text-[6px] text-blue-700">DALOA (RCI)</span>
                    </div>
                    <div className="mt-4 z-10">
                      <span className="font-title-md text-title-md text-primary font-bold block">
                        Fr. Jean-Marc KOFFI
                      </span>
                      {" "}
                      <span className="text-label-sm font-label-sm text-secondary block">
                        Trésorier de Section CV-AV
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-green-700 font-medium z-10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      {" Validé & Encaissé "}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container text-center text-body-sm font-body-sm text-outline">
                  <p>
                    Conforme aux prescriptions du Livre V du Code de Droit Canonique (Canons 1284 à 1287 relatifs à la gestion des biens temporels de l'Église).
                  </p>
                  <p className="text-label-sm font-label-sm mt-0.5">
                    B.P. 41 Daloa • Conservation obligatoire de 10 ans aux registres de la fabrique paroissiale • daloa@eglisecatholique.ci
                  </p>
                </div>
              </div>
            </div>
          </main>
          <aside className="w-full lg:w-[380px] bg-primary border-l border-primary-container flex flex-col justify-between p-6 shrink-0 shadow-2xl z-30">
            <div className="space-y-6 overflow-y-auto pr-1">
              <div className="pb-4 border-b border-primary-container flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">tune</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-primary">Paramètres d'impression</h2>
                </div>
                <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-primary-container text-primary-fixed-dim">
                  A4 Réseau
                </span>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-primary-fixed flex items-center justify-between">
                  <span>Périphérique de sortie</span>
                  {" "}
                  <span className="text-tertiary-fixed-dim text-body-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    {" Prête "}
                  </span>
                </label>
                <div className="relative">
                  <select className="w-full bg-primary-container text-on-primary rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim text-body-md font-body-md pr-10 cursor-pointer shadow-inner" defaultValue="Canon imageRUNNER C3530i (Bac Cure Paroissiale)" />
                  {" "}
                  <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-primary-fixed-dim">
                    expand_more
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-outline-variant flex items-center gap-1.5 pl-1">
                  <span className="material-symbols-outlined text-sm">wifi</span>
                  {" "}
                  <span>192.168.1.45 • Bac 1 (Papier vergé blanc 90g)</span>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-primary-fixed">Nombre d'exemplaires</label>
                  <div className="flex items-center bg-primary-container rounded-xl p-1 shadow-inner">
                    <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-surface-variant/20 active:scale-95 text-on-primary transition-all" id="copy-minus">
                      <span className="material-symbols-outlined text-base">remove</span>
                    </button>
                    {" "}
                    <span className="flex-1 text-center font-bold text-on-primary font-mono text-body-lg" id="copy-count">
                      2
                    </span>
                    {" "}
                    <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-surface-variant/20 active:scale-95 text-on-primary transition-all" id="copy-plus">
                      <span className="material-symbols-outlined text-base">add</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-outline-variant italic">
                    1 pour le parent, 1 pour les archives
                  </p>
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-primary-fixed">Étendue des pages</label>
                  <div className="bg-primary-container rounded-xl px-3 py-2.5 text-body-md font-body-md text-on-primary flex items-center justify-between shadow-inner">
                    <span>Toutes</span>
                    {" "}
                    <span className="font-mono text-label-sm text-tertiary-fixed-dim">1 / 1</span>
                  </div>
                  <p className="text-[11px] text-outline-variant">Feuille unique (Recto)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-primary-fixed">Orientation</label>
                  <div className="bg-primary-container rounded-xl px-3 py-2 text-body-sm font-body-sm text-on-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-tertiary-fixed-dim">
                      portrait
                    </span>
                    {" "}
                    <span>Portrait</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-primary-fixed">Palette couleur</label>
                  <div className="bg-primary-container rounded-xl px-3 py-2 text-body-sm font-body-sm text-on-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-tertiary-fixed-dim">palette</span>
                    {" "}
                    <span>Couleur (300 DPI)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input defaultChecked className="mt-0.5 rounded text-tertiary bg-primary-container border-0 focus:ring-0 w-4 h-4 cursor-pointer accent-tertiary-fixed-dim" type="checkbox" />
                  <div className="flex flex-col text-body-sm font-body-sm">
                    <span className="text-on-primary font-medium group-hover:text-tertiary-fixed-dim transition-colors">
                      Graphismes d'arrière-plan
                    </span>
                    {" "}
                    <span className="text-outline-variant text-[11px]">
                      Inclure filigranes canoniques & sceaux en couleur
                    </span>
                  </div>
                </label>
                {" "}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input defaultChecked className="mt-0.5 rounded text-tertiary bg-primary-container border-0 focus:ring-0 w-4 h-4 cursor-pointer accent-tertiary-fixed-dim" type="checkbox" />
                  <div className="flex flex-col text-body-sm font-body-sm">
                    <span className="text-on-primary font-medium group-hover:text-tertiary-fixed-dim transition-colors">
                      Journal d'audit paroissial
                    </span>
                    {" "}
                    <span className="text-outline-variant text-[11px]">
                      Consigner l'empreinte SHA-256 au registre diocésain
                    </span>
                  </div>
                </label>
              </div>
              <div className="bg-primary-container/70 rounded-xl p-3.5 space-y-1.5 border border-primary-container">
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-primary-fixed-dim">Temps estimé :</span>
                  {" "}
                  <span className="text-on-primary font-mono font-medium">~ 2.4 secondes</span>
                </div>
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-primary-fixed-dim">Consommation toners :</span>
                  {" "}
                  <span className="text-green-400 font-medium">Cyan 84% • Or 92%</span>
                </div>
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-primary-fixed-dim">Coût unitaire estimé :</span>
                  {" "}
                  <span className="text-on-primary font-mono">15 FCFA / page</span>
                </div>
              </div>
            </div>
            <div className="pt-6 space-y-2.5 border-t border-primary-container">
              <button className="w-full py-3.5 px-6 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed hover:bg-tertiary-fixed active:scale-98 transition-all flex items-center justify-center gap-2.5 font-title-md text-title-md font-bold shadow-lg" id="btn-print-now">
                <span className="material-symbols-outlined text-2xl">print</span>
                {" "}
                <span>Lancer l'impression (Ctrl + P)</span>
              </button>
              <button className="w-full py-2.5 px-4 rounded-full bg-primary-container text-on-primary hover:bg-surface-variant/20 active:scale-98 transition-all flex items-center justify-center gap-2 text-label-md font-label-md font-semibold">
                <span className="material-symbols-outlined text-lg text-tertiary-fixed-dim">
                  send_to_mobile
                </span>
                {" "}
                <span>Imprimer & Décharge SMS (+225 07...)</span>
              </button>
              <button className="w-full py-2 text-center text-body-sm font-body-sm text-primary-fixed-dim hover:text-white transition-colors">
                {" Annuler et revenir au guichet "}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
