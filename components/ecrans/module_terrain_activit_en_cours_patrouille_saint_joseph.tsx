// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/module_terrain_activit_en_cours_patrouille_saint_joseph/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Module terrain activit en cours patrouille saint joseph — Domaine : Terrain & Sécurité

export default function ModuleTerrainActivitEnCoursPatrouilleSaintJoseph() {
  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
  <header className="fixed top-0 w-full z-50 bg-primary-container text-on-primary pt-safe shadow-[0_2px_12px_rgba(4,21,52,0.18)]">
    <div className="h-20 px-margin-mobile flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm min-w-0">
        <button aria-label="Quitter la session" className="w-11 h-11 rounded-full flex items-center justify-center text-on-primary hover:bg-white/10 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-space-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-emerald-300">
              Séance en cours
            </span>
          </div>
          <span className="font-title-md text-title-md text-on-primary truncate leading-tight">
            Patrouille Saint-Joseph
          </span>
          <span className="font-label-sm text-label-sm text-on-primary-container truncate">
            Activité En Cours
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-xs flex-shrink-0">
        <button aria-label="Signaler une urgence" className="w-11 h-11 rounded-full flex items-center justify-center text-on-primary hover:bg-white/10 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[22px] text-tertiary-fixed-dim">campaign</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex flex-col relative w-full pt-20 pb-24 bg-surface min-h-screen">
    <div className="flex flex-col w-full px-margin-mobile pb-space-xl gap-space-md">
      <div className="bg-primary-container text-on-primary rounded-2xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-tertiary-container/30 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between gap-space-xs z-10">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-tertiary-fixed font-label-sm text-label-sm tracking-wide">
              <span className="h-2 w-2 rounded-full bg-tertiary-fixed animate-ping" />
              {" Session Ouverte • 16:10 "}
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-primary-container">PV #DAL-2024-892F</span>
        </div>
        <div className="z-10 mt-space-xs">
          <h1 className="font-headline-sm text-headline-sm text-on-primary font-semibold tracking-tight">
            Activité Statutaire en Cours
          </h1>
          <p className="font-body-sm text-body-sm text-tertiary-fixed-dim mt-0.5 font-medium">
            Thème : La Charité en Action & Compagnonnage CV-AV
          </p>
        </div>
        <div className="h-px bg-white/10 w-full my-space-xs z-10" />
        <div className="flex flex-col gap-space-xs z-10 font-body-sm text-body-sm text-on-primary-container">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">verified_user</span>
            {" "}
            <span className="text-on-primary font-medium">25 militants engagés</span>
            {" "}
            <span className="text-on-primary-container/80">(3 absents consignés)</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[18px] text-on-primary-container">church</span>
            {" "}
            <span className="truncate">Paroisse Cathédrale Christ-Roi • Troupe St-Jean-Paul II</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[18px] text-on-primary-container">badge</span>
            {" "}
            <span>Chef responsable : Fr. Jean-Marc KOFFI</span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs text-primary">
            <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">timelapse</span>
            {" "}
            <span className="font-title-md text-title-md">Cadence & Horloge Terrain</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
            {" 18:00 GMT Fin "}
          </span>
        </div>
        <div className="flex flex-col items-center py-space-xs bg-surface-container-low rounded-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Temps Écoulé
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tight font-bold" id="chrono-display">
              00:15:32
            </span>
            {" "}
            <span className="font-label-md text-label-md text-secondary">/ 02h00</span>
          </div>
          <div className="w-11/12 mt-space-sm">
            <div className="flex justify-between font-label-sm text-label-sm text-secondary mb-1">
              <span>Progression</span>
              {" "}
              <span className="font-semibold text-primary">12% complété</span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
              <div className="bg-on-tertiary-container h-2 rounded-full w-[12%] transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-start gap-space-sm p-space-xs rounded-lg">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[16px] text-primary font-bold">check</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1 opacity-70">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md line-through text-on-surface">
                  Accueil & Émargement NFC
                </span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">16:00 - 16:15</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary">Terminé avec succès (25 validés)</span>
            </div>
          </div>
          <div className="flex items-start gap-space-sm p-space-xs rounded-xl bg-tertiary-fixed/30">
            <div className="w-6 h-6 rounded-full bg-on-tertiary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[16px] text-on-primary">play_arrow</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md font-semibold text-primary">
                  Prière & Grand Jeu d'Orientation
                </span>
                {" "}
                <span className="px-2 py-0.5 rounded-full bg-on-tertiary-container text-on-primary font-label-sm text-label-sm">
                  En cours
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Esplanade Nord & parvis basilique (16:15 - 16:45)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-space-sm p-space-xs rounded-lg">
            <div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0 mt-0.5 font-label-sm">
              {" 3 "}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md text-on-surface">Atelier Thématique CV-AV</span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">16:45 - 17:30</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Étude du Manuel & gestes de solidarité
              </span>
            </div>
          </div>
          <div className="flex items-start gap-space-sm p-space-xs rounded-lg">
            <div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0 mt-0.5 font-label-sm">
              {" 4 "}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md text-on-surface">
                  Chant, Bilan & Bénédiction d'Envoi
                </span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">17:30 - 18:00</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Clôture statutaire avec l'aumônier
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
          <button className="h-11 px-space-xs rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest active:scale-95 transition-all flex items-center justify-center gap-1 font-label-md text-label-md" id="btn-pause">
            <span className="material-symbols-outlined text-[18px]">pause</span>
            {" "}
            <span>Pause</span>
          </button>
          {" "}
          <button className="h-11 px-space-xs rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest active:scale-95 transition-all flex items-center justify-center gap-1 font-label-md text-label-md" id="btn-add5">
            <span className="material-symbols-outlined text-[18px]">more_time</span>
            {" "}
            <span>+5 min</span>
          </button>
          {" "}
          <button className="h-11 px-space-xs rounded-full bg-primary-container text-on-primary hover:bg-primary active:scale-95 transition-all flex items-center justify-center gap-1 font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">skip_next</span>
            {" "}
            <span>Étape</span>
          </button>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs text-primary">
            <span className="material-symbols-outlined text-[20px] text-primary">explore</span>
            {" "}
            <span className="font-title-md text-title-md">Fiche Jeu de Piste Actif</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium">
            Fiche #ACT-04
          </span>
        </div>
        <div className="rounded-xl overflow-hidden relative h-28 w-full bg-surface-container">
          <img className="w-full h-full object-cover" data-alt="Catholic scouts during an outdoor orienteering activity in West Africa, holding topographic compasses and paper maps on a sunlit parish esplanade with tropical foliage and palm trees, golden hour warm lighting, documentary photography style." src="/assets/image-placeholder.svg" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-sm">
            <span className="font-title-md text-title-md text-on-primary font-semibold">
              La Parabole du Bon Samaritain
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs mt-1">
          <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
            Objectifs Pédagogiques & Spirituels
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm">
              Esprit d'équipe
            </span>
            {" "}
            <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm">
              Secourisme de base
            </span>
            {" "}
            <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm">
              Orientation topo
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs pt-space-xs">
          <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
            Matériel Déployé sur le Terrain
          </span>
          <div className="grid grid-cols-1 gap-1.5 font-body-sm text-body-sm text-on-surface">
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">map</span>
                {" "}
                <span>Cartes topographiques de l'Esplanade</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">5 ex.</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-error">medical_services</span>
                {" "}
                <span>Trousse de premiers secours vérifiée</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">1 unité</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                  menu_book
                </span>
                {" "}
                <span>Carnet de chants & manuel de patrouille</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">3 livrets</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs text-primary">
            <span className="material-symbols-outlined text-[20px] text-primary">diversity_3</span>
            {" "}
            <span className="font-title-md text-title-md">Sizaines en Mouvement</span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary">3 équipes actives</span>
        </div>
        <div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low gap-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 rounded-full bg-primary-container" />
              {" "}
              <span className="font-label-lg text-label-lg font-semibold text-primary">
                Équipe Alpha (Lion Courageux)
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
              8 militants
            </span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
            <span>Menée par : Jean-Philippe KANGA (#0492)</span>
            {" "}
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
              {" Poste 1 validé "}
            </span>
          </div>
          <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
            <div className="bg-primary-container h-1.5 rounded-full w-2/3" />
          </div>
        </div>
        <div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low gap-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 rounded-full bg-on-tertiary-container" />
              {" "}
              <span className="font-label-lg text-label-lg font-semibold text-primary">
                Équipe Bêta (Aigle Vaillant)
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
              8 militants
            </span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
            <span>Menée par : Ange-Emmanuel KOUAME (NFC)</span>
            {" "}
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container font-semibold">
              <span className="material-symbols-outlined text-[16px]">directions_walk</span>
              {" Vers Poste 2 "}
            </span>
          </div>
          <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
            <div className="bg-on-tertiary-container h-1.5 rounded-full w-1/3" />
          </div>
        </div>
        <div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low gap-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              {" "}
              <span className="font-label-lg text-label-lg font-semibold text-primary">
                Équipe Gamma (Étoile Flamboyante)
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
              9 militants
            </span>
          </div>
          <div className="flex flex-col gap-0.5 font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-center justify-between">
              <span>Surveillance : Emmanuel KOFFI (Asthme modéré)</span>
              {" "}
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                {" Poste 3 "}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-tertiary mt-0.5">
              Régularisé guichet de départ • R.A.S.
            </span>
          </div>
          <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
            <div className="bg-secondary h-1.5 rounded-full w-full" />
          </div>
        </div>
        <div className="p-space-sm rounded-xl bg-secondary-container/40 flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[24px]">health_and_safety</span>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-semibold text-primary">
              Protocole Sanitaire : Niveau Vert
            </span>
            {" "}
            <span className="font-body-sm text-body-sm text-on-secondary-container">
              Trousse sous surveillance active • Ventoline disponible au QG Chef
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-space-sm">
        <div className="grid grid-cols-2 gap-space-sm">
          <button className="min-h-[48px] px-space-md rounded-full bg-surface-container-highest text-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-surface-variant active:scale-95 transition-all shadow-sm" id="btn-flash-check">
            <span className="material-symbols-outlined text-[20px] text-primary">fact_check</span>
            {" "}
            <span>Appel Éclair 25/25</span>
          </button>
          <button className="min-h-[48px] px-space-md rounded-full bg-error text-on-error font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-on-error-container active:scale-95 transition-all shadow-sm">
            <span className="material-symbols-outlined text-[20px]">medical_services</span>
            {" "}
            <span>Incident / Soin</span>
          </button>
        </div>
        <button className="min-h-[50px] w-full rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-title-md text-title-md font-semibold flex items-center justify-center gap-2 hover:bg-on-tertiary-container hover:text-on-primary active:scale-98 transition-all shadow-md">
          <span className="material-symbols-outlined text-[22px]">gavel</span>
          {" "}
          <span>Sceller la Clôture à 18h00</span>
        </button>
      </div>
    </div>
  </main>
  <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(4,21,52,0.06)]" data-active-classes="text-primary-container font-semibold">
    <div className="flex justify-around items-center h-20 px-space-xs">
      <a className="flex flex-col items-center justify-center w-16 h-16 rounded-xl text-on-surface-variant hover:text-on-surface transition-colors" data-path="activite-en-cours" href="#">
        <span className="material-symbols-outlined text-[24px]">sports_score</span>
        <span className="font-label-sm text-label-sm mt-space-xs">Activité</span>
      </a>
      <a className="flex flex-col items-center justify-center w-16 h-16 rounded-xl text-on-surface-variant hover:text-on-surface transition-colors" data-path="chrono-session" href="#">
        <span className="material-symbols-outlined text-[24px]">timer</span>
        <span className="font-label-sm text-label-sm mt-space-xs">Chrono</span>
      </a>
      <a className="flex flex-col items-center justify-center w-16 h-16 rounded-xl text-on-surface-variant hover:text-on-surface transition-colors" data-path="effectifs-patrouille" href="#">
        <span className="material-symbols-outlined text-[24px]">groups</span>
        <span className="font-label-sm text-label-sm mt-space-xs">Effectifs</span>
      </a>
      <a className="flex flex-col items-center justify-center w-16 h-16 rounded-xl text-error hover:text-on-error-container transition-colors" data-path="incidents-secours" href="#">
        <span className="material-symbols-outlined text-[24px]">medical_services</span>
        <span className="font-label-sm text-label-sm mt-space-xs">Secours</span>
      </a>
    </div>
  </nav>
    </div>
  );
}
