// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pointage_rassemblement_margement_actualis_patrouille_saint_joseph/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pointage rassemblement margement actualis patrouille saint joseph — Domaine : Terrain & Sécurité

export default function PointageRassemblementMargementActualisPatrouilleSaintJoseph() {
  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
  <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="h-20 px-margin-mobile flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm">
        <button aria-label="Retour" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col min-w-0">
          <span className="font-label-sm text-on-tertiary-container uppercase tracking-wider truncate">
            Patrouille Saint-Joseph
          </span>
          <h1 className="font-title-md text-primary truncate leading-tight">Notifications Et Alertes</h1>
        </div>
      </div>
      <div className="flex items-center gap-space-xs">
        <div className="flex items-center gap-1.5 px-space-xs py-1 rounded-full bg-surface-container-low">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-label-sm text-secondary hidden sm:inline">Sync</span>
        </div>
        <a className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors" data-path="notifications-alertes" href="#">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-error" />
        </a>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex-1 flex flex-col relative w-full pt-20 pb-safe bg-surface">
    <div className="flex flex-col w-full">
      <div className="w-full bg-primary text-on-primary px-margin-mobile pt-space-md pb-space-lg shadow-md rounded-b-[1.75rem]">
        <div className="flex items-center justify-between gap-space-xs mb-space-sm">
          <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {" "}
            <span className="font-label-sm tracking-wide text-primary-fixed">4G Connecté • Sync en direct</span>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-highest/20 text-inverse-on-surface">
            <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">verified_user</span>
            {" "}
            <span className="font-label-sm text-surface-bright">Fr. Jean-Marc KOFFI</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-headline-lg-mobile text-on-primary tracking-tight font-semibold">
            Pointage Rassemblement
          </h2>
          <p className="font-body-sm text-inverse-primary flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim">church</span>
            {" Cathédrale Christ-Roi • 26 Octobre • 15:55 "}
          </p>
        </div>
        <div className="mt-space-md p-space-sm bg-primary-container/80 rounded-2xl">
          <div className="flex items-center justify-between gap-space-sm mb-1.5">
            <span className="font-label-md text-primary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">how_to_reg</span>
              {" Appel d'effectif "}
            </span>
            {" "}
            <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-primary font-label-md font-semibold shadow-sm">
              {" 24 / 28 Présents (86%) "}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-highest/30 overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-tertiary-fixed-dim via-emerald-400 to-emerald-500 rounded-full" style={{ width: "86%" }} />
          </div>
        </div>
      </div>
      <div className="px-margin-mobile flex flex-col gap-space-md -mt-2">
        <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex items-start gap-space-sm relative overflow-hidden transition-all duration-300" id="toast-banner">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
          </div>
          <div className="flex flex-col min-w-0 pr-6">
            <div className="flex items-center gap-1.5">
              <span className="font-label-sm text-emerald-800 uppercase tracking-wider font-semibold">
                Réserve levée en temps réel
              </span>
              {" "}
              <span className="text-[10px] font-label-sm text-secondary bg-surface-container-low px-1.5 py-0.2 rounded-full">
                15:52
              </span>
            </div>
            <p className="font-body-sm text-on-surface mt-0.5">
              <strong className="font-medium text-primary">Emmanuel KOFFI</strong>
              {" régularisé & admis. Quittance "}
              <code className="text-tertiary-container bg-surface-container-low px-1 rounded">
                QT-DAL-2024-0412
              </code>
              {". "}
            </p>
          </div>
          <button aria-label="Fermer la notification" className="absolute top-2 right-2 text-outline hover:text-on-surface w-6 h-6 flex items-center justify-center rounded-full">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
        <div className="w-full bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim" />
              {" "}
              <span className="font-title-md text-primary font-semibold">Emargement Rapide</span>
            </div>
            <span className="font-label-sm text-secondary">Borne mobile #02</span>
          </div>
          <div className="grid grid-cols-2 gap-space-sm mt-1">
            <button className="flex flex-col items-center justify-center gap-1.5 p-space-sm bg-primary text-on-primary rounded-xl active:scale-95 transition-transform shadow-sm group" type="button">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[24px]">
                  contactless
                </span>
              </div>
              <span className="font-label-md font-semibold text-center leading-snug">
                Scanner Carte / Foulard NFC
              </span>
              {" "}
              <span className="text-[10px] font-label-sm text-on-primary-container text-center">
                Approcher le badge
              </span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 p-space-sm bg-surface-container text-primary rounded-xl active:scale-95 transition-transform group" type="button">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
              </div>
              <span className="font-label-md font-semibold text-center leading-snug">
                Caméra QR / Matricule
              </span>
              {" "}
              <span className="text-[10px] font-label-sm text-secondary text-center">
                Saisie manuelle ou flux
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button className="shrink-0 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm font-semibold shadow-sm">
            {" Tous (28) "}
          </button>
          {" "}
          <button className="shrink-0 px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm hover:bg-surface-container-high">
            {" Présents (24) "}
          </button>
          {" "}
          <button className="shrink-0 px-3.5 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
            {" Régularisés (1) "}
          </button>
          {" "}
          <button className="shrink-0 px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm hover:bg-surface-container-high">
            {" En attente / Retard (4) "}
          </button>
        </div>
        <div className="flex flex-col gap-space-sm mb-space-xl">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm uppercase tracking-wider text-secondary font-semibold">
              Membres émargés en direct
            </span>
            {" "}
            <span className="font-label-sm text-on-tertiary-container flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">sort</span>
              {" Par heure d'entrée "}
            </span>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex flex-col gap-2 relative overflow-hidden bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest to-surface-container-low">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img alt="Portrait scout Emmanuel KOFFI" className="w-14 h-14 rounded-full object-cover shadow-sm" src="/assets/avatar-placeholder.svg" />
                {" "}
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-on-primary shadow">
                  <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                </span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="font-title-md text-primary font-semibold truncate">Emmanuel KOFFI</h3>
                  <span className="px-2 py-0.5 rounded-full bg-primary-container text-surface-bright font-label-sm font-semibold shrink-0">
                    CV-A • 11 ans
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                      verified
                    </span>
                    {" Présent • Régularisé (15:52) "}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-surface-container-low flex flex-col gap-1 text-on-surface-variant font-body-sm">
              <div className="flex items-center gap-1.5 text-emerald-900 font-label-sm">
                <span className="material-symbols-outlined text-[14px] text-emerald-700">payments</span>
                {" "}
                <span>Cotisation 100% soldée (3 500 FCFA) • Quittance #0412</span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary font-label-sm">
                <span className="material-symbols-outlined text-[14px]">health_and_safety</span>
                {" "}
                <span>Police SANLAM active • Trousse Ventoline vérifiée</span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-1">
              <button className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm flex items-center gap-1 hover:bg-surface-container-high">
                <span className="material-symbols-outlined text-[14px]">badge</span>
                {" Fiche Complète "}
              </button>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shadow-inner">
                <img className="w-full h-full object-cover" data-alt="Portrait photo of a young 12 year old Ivorian scout boy smiling wearing a dark navy blue CV-AV uniform with a bright golden scarf, outdoor natural daylight, clean church yard background, sharp focus" src="/assets/image-placeholder.svg" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[10px]">check</span>
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-title-md text-primary font-semibold truncate">Jean-Philippe KANGA</h3>
                <span className="text-secondary font-label-sm">CV-A • 12a</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm">
                  Pointé NFC (15:04)
                </span>
                {" "}
                <span className="text-outline font-label-sm">• Carte #0492</span>
              </div>
              <p className="font-body-sm text-secondary truncate mt-0.5">
                Fiche santé saisie au guichet • En ordre
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shadow-inner">
                <img className="w-full h-full object-cover" data-alt="Portrait photo of a 10 year old Ivorian scout girl with neat braids wearing a navy CV-AV uniform and warm ochre scarf, soft friendly expression, cathedral plaza backdrop" src="/assets/image-placeholder.svg" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[10px]">check</span>
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-title-md text-primary font-semibold truncate">Marie-Grâce YAO</h3>
                <span className="text-secondary font-label-sm">AV-B • 10a</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm">
                  Espèces soldées (14:59)
                </span>
              </div>
              <p className="font-body-sm text-secondary truncate mt-0.5">
                Dossier complet • Assurance SANLAM OK
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shadow-inner">
                <img className="w-full h-full object-cover" data-alt="Portrait of an 11 year old African boy scout in neat blue CVAV uniform with gold neckerchief, dignified calm gaze, warm sunlight, official membership photo" src="/assets/image-placeholder.svg" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[10px]">check</span>
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-title-md text-primary font-semibold truncate">Moïse ASSI</h3>
                <span className="text-secondary font-label-sm">CV-A • 11a</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm">
                  Pointé NFC (15:02)
                </span>
              </div>
              <p className="font-body-sm text-secondary truncate mt-0.5">
                Dossier complet • Dotation foulard OK
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex items-start gap-3">
            <div className="relative shrink-0 mt-0.5">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[10px]">hourglass_top</span>
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-title-md text-primary font-semibold truncate">Ange-Emmanuel KOUAME</h3>
                <span className="text-secondary font-label-sm">CV-A • 11a</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-label-sm font-medium">
                  Retard justifié (SMS reçu)
                </span>
              </div>
              <p className="font-body-sm text-secondary mt-0.5">Arrivée estimée à 16h00 avec son père.</p>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">person_off</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-title-md text-primary font-semibold truncate">David KONE</h3>
                <span className="text-secondary font-label-sm">CV-A • 10a</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm">
                  Non pointé • 0 contact
                </span>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 active:bg-surface-variant shrink-0">
              <span className="material-symbols-outlined text-[14px] text-error">sms</span>
              {" "}
              <span>Relancer</span>
            </button>
          </div>
        </div>
        <div className="p-space-sm rounded-xl bg-surface-container flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">verified</span>
          {" "}
          <span className="font-body-sm text-secondary">
            {" Validation diocésaine conforme au registre Daloa 2024-2025. "}
          </span>
        </div>
      </div>
      <div className="sticky bottom-0 w-full bg-surface/95 backdrop-blur-md p-space-sm pb-space-md shadow-lg rounded-t-2xl mt-auto z-40">
        <div className="flex flex-col gap-2 max-w-md mx-auto">
          <button className="w-full h-12 rounded-full bg-on-tertiary-container text-on-primary font-label-lg font-semibold flex items-center justify-center gap-2 shadow active:scale-[0.98] transition-transform" type="button">
            <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            {" Clôturer l'émargement du rassemblement "}
          </button>
          <div className="flex items-center justify-between px-2 pt-0.5">
            <button className="font-label-sm text-primary flex items-center gap-1 hover:underline">
              <span className="material-symbols-outlined text-[16px]">outgoing_mail</span>
              {" Rapport au Chef de Troupe "}
            </button>
            {" "}
            <button className="font-label-sm text-secondary flex items-center gap-1 hover:underline">
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              {" Feuille PDF "}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
