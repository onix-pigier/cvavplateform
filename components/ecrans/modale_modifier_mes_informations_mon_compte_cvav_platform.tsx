// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/modale_modifier_mes_informations_mon_compte_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Modale modifier mes informations mon compte cvav platform — Domaine : Espace Militant

export default function ModaleModifierMesInformationsMonCompteCvavPlatform() {
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
        <a className="flex items-center px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg" data-path="mes-cotisations" href="#">
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
      <div className="flex flex-col w-full relative">
        <div className="w-full px-margin py-space-lg pointer-events-none select-none filter blur-[1.5px] opacity-40 transition-all">
          <div className="w-full bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-space-lg">
            <div className="flex items-center gap-space-lg">
              <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-headline-lg font-headline-lg">
                {" MA "}
              </div>
              <div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-headline-md text-headline-md text-primary">Moïse ASSI</span>
                  {" "}
                  <span className="bg-primary/10 text-primary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full">
                    Matricule: CI-DAL-2021-0498
                  </span>
                </div>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Section Cœurs Vaillants (Patrouille des Aiglons) · Paroisse Le Plateau, Daloa
                </p>
                <div className="flex items-center gap-space-md mt-space-xs text-secondary font-label-md text-label-md">
                  <span>Date d'entrée : Octobre 2021</span>
                  {" "}
                  <span>•</span>
                  {" "}
                  <span>Promesse émise : 14 Mai 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-xs rounded-full">
                Cotisation 2024-2025 à jour
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest rounded-2xl p-space-md h-48" />
            <div className="bg-surface-container-lowest rounded-2xl p-space-md h-48" />
            <div className="bg-surface-container-lowest rounded-2xl p-space-md h-48" />
          </div>
        </div>
        <div className="fixed inset-0 top-16 left-0 right-0 bottom-0 md:left-72 bg-primary/75 backdrop-blur-sm z-50 flex items-center justify-center p-space-sm md:p-space-md overflow-y-auto" id="modal-backdrop">
          <div aria-labelledby="modal-title" aria-modal="true" className="relative w-full max-w-[820px] bg-surface-container-lowest rounded-2xl shadow-[0_20px_50px_-10px_rgba(4,21,52,0.35)] overflow-hidden my-auto flex flex-col max-h-[calc(100vh-5.5rem)] animate-in fade-in zoom-in-95 duration-200" role="dialog">
            <div className="px-space-lg pt-space-lg pb-space-md bg-surface-container-lowest flex flex-col gap-space-xs relative">
              <button aria-label="Fermer la boîte de dialogue" className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface-variant flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim" id="close-modal-btn" type="button">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">edit_note</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary" id="modal-title">
                    Modifier mes informations
                  </h2>
                </div>
              </div>
              <p className="font-body-md text-body-md text-secondary pr-10">
                {" Mise à jour des coordonnées personnelles, de scolarité et des contacts tuteurs légaux du militant "}
                <strong className="text-primary font-label-lg">Moïse ASSI</strong>
                {". "}
              </p>
              <div className="mt-space-xs flex flex-wrap items-center gap-space-sm">
                <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#C9962C]">verified_user</span>
                  {" "}
                  <span>Validation paroissiale requise pour tout changement critique</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-space-sm py-1 rounded-full">
                  {" Dernière mise à jour : 12 Oct. 2024 "}
                </span>
              </div>
            </div>
            <div className="px-space-lg pt-space-xs pb-space-sm bg-surface-container-lowest">
              <div className="p-1 bg-surface-container-low rounded-full flex flex-wrap gap-1 items-center" role="tablist">
                <button aria-selected="true" className="tab-button flex-1 min-w-[170px] py-2 px-space-md rounded-full font-label-md text-label-md text-center transition-all bg-primary-container text-on-primary shadow-sm font-semibold flex items-center justify-center gap-1.5" data-tab-target="tab-coordonnees" role="tab" type="button">
                  <span className="material-symbols-outlined text-[18px]">home_pin</span>
                  {" "}
                  <span>Coordonnées & Résidence</span>
                </button>
                {" "}
                <button aria-selected="false" className="tab-button flex-1 min-w-[170px] py-2 px-space-md rounded-full font-label-md text-label-md text-center transition-all text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center gap-1.5" data-tab-target="tab-tuteurs" role="tab" type="button">
                  <span className="material-symbols-outlined text-[18px]">family_restroom</span>
                  {" "}
                  <span>Tuteurs & Urgence</span>
                </button>
                {" "}
                <button aria-selected="false" className="tab-button flex-1 min-w-[160px] py-2 px-space-md rounded-full font-label-md text-label-md text-center transition-all text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center gap-1.5" data-tab-target="tab-scolaire" role="tab" type="button">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                  {" "}
                  <span>Établissement Scolaire</span>
                </button>
              </div>
              <div className="mt-space-sm px-space-md py-2 bg-surface-container-low rounded-xl flex items-center gap-space-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">lock</span>
                <p className="font-body-sm text-body-sm text-secondary leading-snug">
                  {" Les données canoniques ("}
                  <span className="font-semibold text-primary">
                    Nom, Date de naissance, Matricule, Patrouille
                  </span>
                  {") sont scellées et ne peuvent être modifiées qu'auprès du secrétariat paroissial avec extrait de baptême. "}
                </p>
              </div>
            </div>
            <form className="overflow-y-auto px-space-lg py-space-md flex-1 space-y-space-lg" id="edit-profile-form">
              <div className="tab-panel flex flex-col gap-space-md" id="tab-coordonnees">
                <div className="bg-surface-container-low/70 p-space-md rounded-2xl flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-[#C9962C]" />
                      {" "}
                      <span className="font-title-md text-title-md text-primary">
                        Bloc A — Résidence habituelle
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary">
                      Paroisse de rattachement : Le Plateau
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="ville-localite">
                        {" Ville / Localité "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          location_city
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="ville-localite" required type="text" defaultValue="Daloa" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="quartier">
                        {" Quartier "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          domain
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="quartier" required type="text" defaultValue="Le Plateau" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="adresse-precise">
                      {" Adresse / Repère précis "}
                      <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                        signpost
                      </span>
                      {" "}
                      <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="adresse-precise" required type="text" defaultValue="Rue des Jardins (Proximité Cathédrale Christ-Roi, Villa 42)" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center justify-between" htmlFor="telephone-fixe">
                        <span>Téléphone fixe / Domicile</span>
                        {" "}
                        <span className="font-label-sm text-label-sm text-secondary font-normal">
                          Facultatif
                        </span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          call
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="telephone-fixe" type="tel" defaultValue="+225 25 32 00 12" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium" htmlFor="zone-pastorale">
                        {" Secteur de base pastoral "}
                      </label>
                      {" "}
                      <select className="w-full h-11 px-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="zone-pastorale" defaultValue="Secteur 3 — Sainte-Thérèse de l'Enfant-Jésus" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-panel flex flex-col gap-space-md" id="tab-tuteurs">
                <div className="bg-surface-container-low/70 p-space-md rounded-2xl flex flex-col gap-space-md">
                  <div className="flex flex-wrap items-center justify-between gap-space-xs pb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-primary-container" />
                      {" "}
                      <span className="font-title-md text-title-md text-primary">
                        Bloc B — Tuteur Légal Principal
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm bg-primary-container text-on-primary px-space-xs py-0.5 rounded-full ml-1">
                        Père
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      M. Moïse Koffi ASSI
                    </span>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">verified</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                            Téléphone de notification principale
                          </span>
                          {" "}
                          <span className="bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-[11px] font-semibold px-2 py-0.5 rounded-full">
                            Vérifié OTP
                          </span>
                        </div>
                        <p className="font-headline-sm text-headline-sm text-primary tracking-wide mt-0.5">
                          +225 07 08 19 28 37
                        </p>
                      </div>
                    </div>
                    <button className="self-start sm:self-center px-space-md py-1.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[16px]">phonelink_setup</span>
                      {" "}
                      <span>Modifier le numéro</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="profession-pere">
                        {" Profession / Activité déclarée "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          work
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="profession-pere" required type="text" defaultValue="Fonctionnaire Enseignant (Éducation Nationale)" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="email-pere">
                        {" Adresse e-mail de correspondance "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          alternate_email
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="email-pere" required type="email" defaultValue="m.koffi.assi@education.ci" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low/70 p-space-md rounded-2xl flex flex-col gap-space-md">
                  <div className="flex flex-wrap items-center justify-between gap-space-xs pb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-[#C9962C]" />
                      {" "}
                      <span className="font-title-md text-title-md text-primary">
                        Bloc C — Contact Tuteur Secondaire & Urgence
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm bg-tertiary-fixed-dim/30 text-tertiary-container px-space-xs py-0.5 rounded-full ml-1">
                        Mère
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Mme Ahou Thérèse KOFFI
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="telephone-mere">
                        {" Téléphone mobile direct (Appels & SMS) "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          phone_iphone
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="telephone-mere" required type="tel" defaultValue="+225 05 44 33 22 11" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="profession-mere">
                        {" Profession / Engagement "}
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          storefront
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="profession-mere" type="text" defaultValue="Commerce & Gestion Paroissiale" />
                      </div>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded-xl flex items-center gap-space-sm">
                    <input defaultChecked className="w-4 h-4 rounded text-[#C9962C] focus:ring-[#C9962C] cursor-pointer" id="autorisation-urgences" type="checkbox" />
                    {" "}
                    <label className="font-body-sm text-body-sm text-on-surface cursor-pointer" htmlFor="autorisation-urgences">
                      {" Autoriser ce contact à être joint immédiatement en cas d'évacuation sanitaire ou d'incident lors des rassemblements diocésains et campings CV-AV. "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="tab-panel flex flex-col gap-space-md" id="tab-scolaire">
                <div className="bg-surface-container-low/70 p-space-md rounded-2xl flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-primary-container" />
                      {" "}
                      <span className="font-title-md text-title-md text-primary">
                        Bloc D — Établissement scolaire & Catéchèse
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full font-medium">
                      Scolarité Validée
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="ecole-selection">
                      {" Établissement actuel "}
                      <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                        account_balance
                      </span>
                      {" "}
                      <select className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="ecole-selection" defaultValue="Collège Saint-Joseph de Daloa (Enseignement Catholique Diocésain)" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="classe-niveau">
                        {" Niveau / Classe "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          class
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962C]" id="classe-niveau" required type="text" defaultValue="CM2 (Primaire Diocésain)" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium flex items-center gap-1" htmlFor="annee-scolaire">
                        {" Année scolaire en cours "}
                        <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-secondary">
                          event
                        </span>
                        {" "}
                        <input className="w-full h-11 pl-10 pr-space-md bg-surface-container font-body-md text-body-md text-secondary cursor-not-allowed rounded-xl" id="annee-scolaire" readOnly type="text" defaultValue="2024–2025" />
                      </div>
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded-xl flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 text-on-tertiary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">church</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-primary font-semibold">
                        Parcours d'initiation chrétienne
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Catéchèse 3e Année — Préparation à la Première Communion (Session Juin 2025)
                      </p>
                    </div>
                    <span className="bg-[#2E7D32]/10 text-[#2E7D32] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-medium">
                      Assiduité 100%
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-space-md flex items-start gap-space-md">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Charte diocésaine de protection des mineurs & traçabilité
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-[16px]">info</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {" Conformément à la Charte diocésaine de protection des mineurs et à l'ordonnance épiscopale de Daloa, toute modification du numéro de notification principale fait l'objet d'un code OTP transmis par SMS à l'ancien numéro avant validation définitive par l'Aumônier paroissial. "}
                  </p>
                </div>
              </div>
            </form>
            <div className="px-space-lg py-space-md bg-surface-container-lowest flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md">
              <button className="w-full sm:w-auto font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center justify-center gap-1.5 py-2 px-space-sm focus:outline-none" id="reset-form-btn" type="button">
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                {" "}
                <span>Réinitialiser les champs</span>
              </button>
              <div className="w-full sm:w-auto flex items-center gap-space-sm justify-end">
                <button className="flex-1 sm:flex-none h-11 px-space-lg rounded-full font-label-md text-label-md text-primary bg-surface-container-high hover:bg-surface-container-highest transition-all focus:outline-none focus:ring-2 focus:ring-primary/20" id="cancel-modal-btn" type="button">
                  {" Annuler "}
                </button>
                {" "}
                <button className="flex-1 sm:flex-none h-11 px-space-xl rounded-full font-label-md text-label-md font-semibold text-white bg-[#C9962C] hover:bg-[#B38323] active:scale-[0.98] shadow-sm transition-all flex items-center justify-center gap-space-xs focus:outline-none focus:ring-2 focus:ring-[#C9962C]/40" form="edit-profile-form" id="save-modal-btn" type="submit">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  {" "}
                  <span>Enregistrer les modifications</span>
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
