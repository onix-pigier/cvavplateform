// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/alerte_incident_soin_terrain_appel_clair_patrouille_saint_joseph/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Alerte incident soin terrain appel clair patrouille saint joseph — Domaine : Terrain & Sécurité

export default function AlerteIncidentSoinTerrainAppelClairPatrouilleSaintJoseph() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen">
  <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm min-w-0">
        <button aria-label="Fermer l'alerte ou retour" className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[13px] text-error">emergency</span>
              URGENCE
            </span>
          </div>
          <h1 className="font-title-md text-title-md text-primary truncate leading-tight">
            Alerte Incident Terrain — Appel Éclair
          </h1>
        </div>
      </div>
      <div className="flex items-center flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
    <div className="flex flex-col w-full pb-8">
      <section className="px-gutter-mobile pt-space-sm">
        <div className="rounded-2xl p-space-md shadow-md bg-error-container text-on-error-container relative overflow-hidden">
          <span className="material-symbols-outlined text-[110px] text-error/10 absolute -right-4 -bottom-6 pointer-events-none select-none">
            minor_crash
          </span>
          <div className="relative z-10 flex flex-col gap-space-xs">
            <div className="flex items-center justify-between gap-space-xs flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-on-error animate-ping" />
                {" INCIDENT TERRAIN SIGNALÉ — LOCALISÉ "}
              </span>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-error">timer</span>
                {" "}
                <span className="font-semibold tabular-nums" id="incident-timer">02:15 min</span>
              </div>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Appel Éclair : 24 / 25 Présents
                </h2>
                <p className="font-body-sm text-body-sm text-on-error-container mt-0.5">
                  Balise 2 • Jeu « Parabole du Bon Samaritain »
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-error/15 text-error font-label-sm text-label-sm font-bold tracking-wide">
                {" 1 MANQUANT "}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-gutter-mobile pt-space-md">
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-md">
          <div className="flex items-center justify-between pb-space-sm mb-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim" />
              <h3 className="font-title-md text-title-md text-primary">Fiche Individuelle d'Incident</h3>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
              {" #DAL-2024-0621 "}
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm flex-shrink-0 bg-surface-container">
              <img className="w-full h-full object-cover" data-alt="Portrait photography of Christian Aké, a 10-year-old Ivorian boy wearing a neat diocesan Catholic youth scout scarf and navy blue beret, outdoor daylight under tropical trees, calm resilient expression, rich warm skin tones." src="/assets/image-placeholder.svg" />
              {" "}
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary-fixed-dim rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-tertiary-container">verified</span>
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                  Christian Aké
                </span>
                {" "}
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  10 ans
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary truncate">
                Âmes Vaillantes • Équipe Bêta (Aigle Vaillant)
              </p>
              <div className="flex items-center gap-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px] text-secondary">church</span>
                {" "}
                <span>Patrouille Saint-Joseph • Daloa</span>
              </div>
            </div>
          </div>
          <div className="mt-space-md rounded-xl p-space-sm bg-surface-container-low flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-on-secondary mt-0.5">
              <span className="material-symbols-outlined text-[18px]">near_me</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-primary font-semibold">
                Localisé à 60m • Grand Manguier
              </span>
              {" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sécurisé et accompagné par Patrick Diallo (Sous-chef de sizaine)
              </span>
            </div>
          </div>
          <div className="mt-space-md flex flex-col gap-space-sm">
            <div className="p-space-sm rounded-xl bg-surface-container">
              <div className="flex items-center gap-1.5 text-error">
                <span className="material-symbols-outlined text-[16px]">stethoscope</span>
                {" "}
                <span className="font-label-md text-label-md font-bold text-error">
                  Constat Terrain Préliminaire (16:36 GMT)
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface mt-1">
                {" Chute bénigne en course sur sentier. Écorchure au genou droit avec saignement superficiel. Conscience intacte, mobilité conservée, aucune suspicion de fracture. "}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <div className="rounded-xl p-space-sm bg-surface-container-low flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary">Groupe Sanguin</span>
                {" "}
                <span className="font-headline-sm text-headline-sm text-primary font-bold">O+</span>
                {" "}
                <span className="font-label-sm text-label-sm text-secondary">Allergies : Aucune</span>
              </div>
              <div className="rounded-xl p-space-sm bg-surface-container-low flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-secondary">Contact Référent</span>
                {" "}
                <span className="font-label-md text-label-md text-primary font-semibold truncate">
                  M. Aké Noël (Père)
                </span>
                {" "}
                <span className="font-label-sm text-label-sm text-on-tertiary-container font-mono">
                  +225 07 48 12 34 56
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-gutter-mobile pt-space-md">
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
              <h3 className="font-title-md text-title-md text-primary">Topographie du Secteur Balise 2</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
              Rayon 100m
            </span>
          </div>
          <div className="w-full h-36 rounded-xl bg-surface-container relative overflow-hidden flex flex-col justify-between p-space-sm shadow-sm" data-location="Cathédrale Christ Roi, Daloa, Côte d'Ivoire" style={{ backgroundImage: "url(\"/assets/image-placeholder.svg\")" }}>
            <div className="flex items-center justify-between w-full relative z-10">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-on-primary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                  location_on
                </span>
                {" Balise 2 (Arbre à Palabres) "}
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm shadow-sm">
                <span className="material-symbols-outlined text-[13px]">warning</span>
                {" Bosquet Ouest (-60m) "}
              </span>
            </div>
            <div className="relative z-10 self-center bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-[14px] text-tertiary-container">straighten</span>
              {" "}
              <span className="font-label-sm text-label-sm font-semibold">
                Trajet de ralliement : ~1 min à pied
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-gutter-mobile pt-space-md">
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
              <h3 className="font-title-md text-title-md text-primary">Protocole d'Assistance Terrain</h3>
            </div>
            <span className="font-label-sm text-label-sm text-secondary" id="checklist-progress-text">
              2 sur 4 validés
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
            <div className="h-full bg-tertiary-fixed-dim transition-all duration-300 w-1/2" id="checklist-progress-bar" />
          </div>
          <div className="flex flex-col gap-2 pt-1" id="protocol-checklist">
            <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low transition-colors">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-primary font-medium truncate">
                    Enfant localisé et sécurisé à l'ombre
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-secondary">16:36 • Par Patrick Diallo</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary px-2 py-0.5 rounded-full bg-surface-container-high">
                Fait
              </span>
            </div>
            <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low transition-colors">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-primary font-medium truncate">
                    Trousse 1ers secours sur place
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-secondary">
                    Fr. Jean-Marc (Bétadine, Compresses, Sérum)
                  </span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary px-2 py-0.5 rounded-full bg-surface-container-high">
                Fait
              </span>
            </div>
            <button className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container transition-all text-left group active:scale-[0.99]" type="button">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="task-checkbox w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px] animate-spin">autorenew</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="task-label font-label-md text-label-md text-primary font-semibold truncate">
                    Désinfection & pansement genou droit
                  </span>
                  {" "}
                  <span className="task-sub font-body-sm text-body-sm text-on-tertiary-container font-medium">
                    Soin terrain en cours d'application
                  </span>
                </div>
              </div>
              <span className="task-badge font-label-sm text-label-sm text-on-tertiary-fixed bg-tertiary-fixed px-2 py-0.5 rounded-full">
                En cours
              </span>
            </button>
            <button className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low transition-all text-left group active:scale-[0.99]" type="button">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="task-checkbox w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">notifications</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="task-label font-label-md text-label-md text-primary font-medium truncate">
                    Avis SMS informatif envoyé au père
                  </span>
                  {" "}
                  <span className="task-sub font-body-sm text-body-sm text-secondary">
                    Optionnel si blessure superficielle
                  </span>
                </div>
              </div>
              <span className="task-badge font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                En attente
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="px-gutter-mobile pt-space-lg flex flex-col gap-space-sm">
        <button className="w-full h-12 rounded-full bg-error hover:bg-on-error-container text-on-error font-title-md text-title-md flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all" id="btn-reintegrate" type="button">
          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
          {" "}
          <span>Consigner Soin & Réintégrer à l'Appel (25/25)</span>
        </button>
        <a className="w-full h-11 rounded-full bg-tertiary-fixed-dim hover:bg-on-tertiary-container text-on-tertiary-fixed font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all" href="tel:+2250748123456">
          <span className="material-symbols-outlined text-[20px]">call</span>
          {" "}
          <span>Appeler le Tuteur (+225 07 48 12 34 56)</span>
        </a>
        <button className="w-full h-11 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors" type="button">
          <span className="material-symbols-outlined text-[18px] text-error">emergency_home</span>
          {" "}
          <span>Alerter le Médecin Camp / Évacuation</span>
        </button>
      </section>
      <div className="fixed bottom-6 left-4 right-4 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="toast-notification">
        <div className="rounded-2xl p-space-md shadow-xl bg-primary text-on-primary flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-title-md text-title-md font-semibold truncate">Appel Régularisé !</span>
              {" "}
              <span className="font-body-sm text-body-sm text-primary-fixed truncate">
                25/25 présents. Clôture de l'alerte Balise 2.
              </span>
            </div>
          </div>
          <button className="text-on-primary-container p-1 rounded-full hover:text-on-primary">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-end justify-center hidden opacity-0 transition-opacity duration-200" id="escalation-modal">
        <div className="w-full max-w-lg bg-surface-container-lowest rounded-t-3xl p-space-lg flex flex-col gap-space-md shadow-2xl transform translate-y-full transition-transform duration-300" id="escalation-sheet">
          <div className="w-12 h-1 rounded-full bg-surface-variant self-center" />
          <div className="flex items-center gap-space-sm text-error">
            <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-[24px]">ambulance</span>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-primary font-bold">Protocole Médical Avancé</h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Coordination Sanitaire Diocésaine Daloa
              </p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface">
            {" Cette commande alerte immédiatement le Dr. Kassi au camp de base et mobilise le véhicule 4x4 de liaison pour une prise en charge médicale. "}
          </p>
          <div className="flex flex-col gap-space-sm pt-space-xs">
            <button className="w-full h-12 rounded-full bg-error text-on-error font-title-md text-title-md flex items-center justify-center gap-2 shadow-md" type="button">
              <span className="material-symbols-outlined text-[20px]">e911_emergency</span>
              {" Confirmer l'Évacuation Sanitaire "}
            </button>
            {" "}
            <button className="w-full h-11 rounded-full bg-surface-container text-primary font-label-lg text-label-lg" type="button">
              {" Annuler & Revenir au Diagnostic "}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
