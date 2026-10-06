// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pointage_nfc_terrain_scan_r_ussi_carte_jean_philippe_kanga/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pointage nfc terrain scan r ussi carte jean philippe kanga — Domaine : Terrain & Sécurité

export default function PointageNfcTerrainScanRUssiCarteJeanPhilippeKanga() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen antialiased">
  <header className="fixed top-0 w-full z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] pt-safe">
    <div className="h-16 px-gutter-mobile flex items-center justify-between">
      <div className="flex items-center gap-space-xs">
        <button aria-label="Retour" className="w-11 h-11 flex items-center justify-center rounded-full text-on-primary hover:bg-white/10 transition-colors" type="button">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider">
            Diocèse de Daloa
          </span>
          <h1 className="font-title-md text-title-md text-on-primary line-clamp-1">Pointage Nfc</h1>
        </div>
      </div>
      <div className="flex items-center gap-space-xs">
        <button aria-label="Activer torche ou flash" className="w-11 h-11 flex items-center justify-center rounded-full text-on-tertiary-container bg-tertiary-container hover:bg-tertiary-container/80 transition-colors" type="button">
          <span className="material-symbols-outlined text-[22px]">flash_on</span>
        </button>
        <button aria-label="Statut du capteur" className="w-11 h-11 flex items-center justify-center rounded-full text-on-primary hover:bg-white/10 transition-colors" type="button">
          <span className="material-symbols-outlined text-[22px]">sensors</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen">
    <div className="flex flex-col w-full pb-safe">
      <section className="px-gutter-mobile pt-space-sm pb-space-sm bg-surface-container-low shadow-sm">
        <div className="flex items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs min-w-0">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75" />
              {" "}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2E7D32]" />
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-on-surface truncate">ISO 14443-A Actif</span>
            {" "}
            <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-space-xs py-0.5 rounded-full shrink-0">
              13.56 MHz
            </span>
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <div className="flex items-center gap-1 bg-surface-container-high px-space-sm py-1 rounded-full">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-variant">
                cloud_off
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                Mode Terrain Offline
              </span>
            </div>
            <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-1 rounded-full font-medium">
              42 en attente
            </span>
          </div>
        </div>
      </section>
      <section className="px-gutter-mobile pt-space-md pb-space-xs flex flex-col items-center">
        <div className="relative w-28 h-28 flex items-center justify-center mb-space-sm">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-60" />
          <div className="absolute inset-2 rounded-full bg-tertiary-fixed-dim/20 animate-pulse" />
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="44" stroke="#EDEFE0" strokeWidth="4" />
            <circle className="transition-all duration-700 ease-out" cx="50" cy="50" fill="none" r="44" stroke="#C9962C" strokeDasharray="276" strokeDashoffset="0" strokeLinecap="round" strokeWidth="4" />
          </svg>
          <div className="relative w-20 h-20 rounded-full bg-primary-container flex flex-col items-center justify-center shadow-lg text-on-primary">
            <span className="material-symbols-outlined text-[36px] text-[#2E7D32]" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            {" "}
            <span className="font-label-sm text-[10px] tracking-widest uppercase text-tertiary-fixed-dim mt-[-4px]">
              NFC SCANNÉ
            </span>
          </div>
          <div className="absolute -bottom-1 bg-[#2E7D32] text-on-primary px-space-sm py-0.5 rounded-full flex items-center gap-1 shadow-md">
            <span className="material-symbols-outlined text-[13px]">speed</span>
            {" "}
            <span className="font-label-sm text-[10px] font-bold">0.04s</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container px-space-md py-1.5 rounded-full shadow-sm">
          <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">vibration</span>
          {" "}
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Puce MIFARE Classic 1K Scellée
          </span>
          {" "}
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
          {" "}
          <span className="font-label-sm text-label-sm text-[#2E7D32] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[14px]">volume_up</span>
            {" Bip Validé "}
          </span>
        </div>
      </section>
      <main className="px-gutter-mobile mt-space-sm">
        <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-space-md overflow-hidden relative">
          <div className="absolute right-0 top-0 w-36 h-36 bg-gradient-to-bl from-primary-fixed/30 via-tertiary-fixed/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="flex items-start gap-space-md relative">
            <div className="relative shrink-0">
              <div className="w-20 h-24 rounded-xl overflow-hidden shadow-md bg-surface-container-highest">
                <img className="w-full h-full object-cover" data-alt="Portrait d'identité formel d'un jeune garçon ivoirien souriant et fier de 12 ans, nommé Jean-Philippe KANGA, portant l'uniforme officiel bleu nuit des Cœurs Vaillants avec foulard et insigne doré sur la poitrine, éclairage studio doux et chaleureux, fond neutre sobre de chancellerie paroissiale." src="/assets/image-placeholder.svg" />
              </div>
              <span className="absolute -bottom-2 -right-1 bg-primary text-on-primary text-[10px] font-label-sm font-bold px-1.5 py-0.5 rounded-full shadow">
                {" CV-B "}
              </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between gap-space-xs">
                <span className="font-label-sm text-label-sm text-tertiary-container font-semibold tracking-wide uppercase">
                  Cœurs Vaillants B
                </span>
                {" "}
                <span className="font-label-sm text-label-sm bg-[#2E7D32]/15 text-[#2E7D32] px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                  {" Scellé "}
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold truncate mt-0.5">
                Jean-Philippe KANGA
              </h2>
              <p className="font-body-sm text-body-sm text-secondary font-medium">12 ans • Né le 14/03/2012</p>
              <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                <span className="font-label-sm text-label-sm font-semibold tracking-wider text-on-surface bg-surface-container-high px-2 py-0.5 rounded-lg">
                  {" CI-DAL-2024-0484 "}
                </span>
                {" "}
                <span className="font-label-sm text-[11px] text-tertiary-fixed-variant bg-tertiary-fixed/30 px-1.5 py-0.5 rounded">
                  {" Secteur 03 OK "}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-space-sm bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-1">
            <div className="flex items-center gap-space-xs text-on-surface">
              <span className="material-symbols-outlined text-[18px] text-primary">church</span>
              {" "}
              <span className="font-label-md text-label-md font-semibold truncate">
                Cathédrale Christ-Roi de Daloa
              </span>
            </div>
            <div className="flex items-center justify-between text-secondary pl-6">
              <span className="font-body-sm text-body-sm">
                {"Patrouille : "}
                <strong className="text-on-surface">Saint-Michel</strong>
              </span>
              {" "}
              <span className="font-body-sm text-body-sm">
                {"Rang : "}
                <strong>Second de sizaine</strong>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-space-xs mt-space-sm">
            <div className="bg-surface-container-high rounded-xl p-space-sm flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-[#2E7D32]">payments</span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-[10px] uppercase text-secondary">Cotisation 24-25</span>
                {" "}
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  Soldée (Wave)
                </span>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl p-space-sm flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">security</span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-[10px] uppercase text-secondary">Assurance Diocèse</span>
                {" "}
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  Active • SANLAM
                </span>
              </div>
            </div>
          </div>
          <div className="mt-space-md pt-space-sm bg-error-container/20 rounded-xl p-space-sm">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase font-bold text-error flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">medical_services</span>
                {" Urgences Médicales Terrain "}
              </span>
              {" "}
              <span className="font-label-sm text-label-sm font-black bg-error text-on-error px-2 py-0.5 rounded-full">
                {" Groupe O+ "}
              </span>
            </div>
            <div className="flex items-center justify-between text-on-surface py-1">
              <span className="font-body-sm text-body-sm text-secondary">Allergies connues :</span>
              {" "}
              <span className="font-label-md text-label-md font-semibold text-[#2E7D32]">
                Aucune déclarée (RAS)
              </span>
            </div>
            <div className="flex items-center justify-between text-on-surface py-1">
              <span className="font-body-sm text-body-sm text-secondary">Bivouac & Grand Camp 2025 :</span>
              {" "}
              <span className="font-label-md text-label-md font-bold text-primary">Autorisé par tuteur</span>
            </div>
            <div className="mt-space-xs pt-space-xs bg-surface-container-lowest rounded-lg p-2 flex items-center justify-between">
              <div className="flex flex-col min-w-0 pr-2">
                <span className="font-label-sm text-[10px] uppercase text-secondary font-medium">
                  Tuteur légal déclaré
                </span>
                {" "}
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  M. Antoine KANGA
                </span>
                {" "}
                <span className="font-body-sm text-[12px] text-secondary font-mono">+225 07 59 14 20 88</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a aria-label="Appeler tuteur" className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary shadow active:scale-95 transition-transform" href="tel:+2250759142088">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </a>
                {" "}
                <a aria-label="WhatsApp d'urgence" className="w-11 h-11 rounded-full bg-[#2E7D32] flex items-center justify-center text-on-primary shadow active:scale-95 transition-transform" href="https://wa.me/2250759142088">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-space-md flex flex-col gap-space-xs">
            <div className="flex items-center justify-between bg-surface-container px-3 py-1.5 rounded-lg">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container">event</span>
                {" "}
                <span className="font-label-sm text-label-sm font-semibold text-on-surface truncate">
                  Rassemblement Hebdo • 26 Octobre 2024
                </span>
              </div>
              <span className="font-label-sm text-[11px] font-bold text-secondary shrink-0">15h00</span>
            </div>
            <button className="w-full h-12 rounded-full bg-[#C9962C] hover:bg-[#B38323] active:scale-98 text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-lg transition-all" id="btn-pointage" type="button">
              <span className="material-symbols-outlined text-[24px]">how_to_reg</span>
              {" "}
              <span>Confirmer Présence (Pointé 15:04)</span>
            </button>
            <div className="grid grid-cols-2 gap-space-xs mt-1">
              <button className="h-11 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface active:scale-95 font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px] text-tertiary-container">schedule</span>
                {" "}
                <span>Retard (+15 min)</span>
              </button>
              {" "}
              <button className="h-11 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-error active:scale-95 font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">local_hospital</span>
                {" "}
                <span>Infirmerie</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="px-gutter-mobile mt-space-md mb-space-lg">
        <div className="flex items-center justify-between mb-space-xs">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px] text-secondary">history</span>
            <h3 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
              Derniers Scans Réussis
            </h3>
          </div>
          <span className="font-label-sm text-label-sm text-secondary">Aujourd'hui</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container shrink-0">
                <img className="w-full h-full object-cover" data-alt="Visage souriant d'un jeune scout ivoirien Moïse ASSI portant le béret bleu et foulard scout catholique, plan serré éclairé naturellement." src="/assets/image-placeholder.svg" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  Moïse ASSI
                </span>
                {" "}
                <span className="font-body-sm text-[11px] text-secondary">CV-B • Patrouille St-Pierre</span>
              </div>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="font-label-sm text-label-sm font-bold text-[#2E7D32]">Présent</span>
              {" "}
              <span className="font-label-sm text-[10px] text-secondary">Il y a 2 min</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container shrink-0">
                <img className="w-full h-full object-cover" data-alt="Portrait chaleureux d'une fillette ivoirienne de 11 ans nommée Marie-Grâce YAO avec tresse soignée et polo bleu des Âmes Vaillantes, lumière douce du soleil couchant." src="/assets/image-placeholder.svg" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  Marie-Grâce YAO
                </span>
                {" "}
                <span className="font-body-sm text-[11px] text-secondary">AV-B • Patrouille Ste-Anne</span>
              </div>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="font-label-sm text-label-sm font-bold text-[#2E7D32]">Présente</span>
              {" "}
              <span className="font-label-sm text-[10px] text-secondary">Il y a 5 min</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container shrink-0">
                <div className="w-full h-full flex items-center justify-center bg-primary text-on-primary font-bold text-xs">
                  {" EK "}
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  Emmanuel KOFFI
                </span>
                {" "}
                <span className="font-body-sm text-[11px] text-secondary">CV-A • Patrouille St-Joseph</span>
              </div>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="font-label-sm text-label-sm font-bold text-tertiary-container">
                Retard (10m)
              </span>
              {" "}
              <span className="font-label-sm text-[10px] text-secondary">Il y a 12 min</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
    </div>
  );
}
