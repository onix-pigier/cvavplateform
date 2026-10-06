// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pointage_nfc_terrain_alerte_retard_assurance_emmanuel_koffi/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pointage nfc terrain alerte retard assurance emmanuel koffi — Domaine : Terrain & Sécurité

export default function PointageNfcTerrainAlerteRetardAssuranceEmmanuelKoffi() {
  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
  <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-xs">
      <div className="flex items-center gap-space-xs">
        <button aria-label="Retour arrière" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:scale-95 transition-transform" type="button">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col">
          <h1 className="font-title-md text-title-md text-primary tracking-tight">Pointage Nfc</h1>
          <span className="font-label-sm text-label-sm text-secondary">Diocèse de Daloa • CV-AV</span>
        </div>
      </div>
      <div className="flex items-center gap-space-xs">
        <button aria-label="Activer torche de terrain" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[20px]">flash_on</span>
        </button>
        <div className="flex items-center gap-space-xs px-space-xs py-space-xs bg-secondary-container/40 rounded-full">
          <span className="material-symbols-outlined text-[18px] text-on-secondary-container animate-pulse">
            nfc
          </span>
          <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
    <div className="px-gutter-mobile py-space-xs bg-tertiary-container/10 flex items-center justify-between">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">cloud_sync</span>
        <span className="font-label-sm text-label-sm text-on-tertiary-container font-medium">
          Mode Terrain Actif • 3 en attente
        </span>
      </div>
      <span className="font-label-sm text-label-sm text-secondary">Sync Auto</span>
    </div>
  </header>
  <main className="flex flex-col relative w-full px-gutter-mobile pt-16 pb-safe bg-surface min-h-screen">
    <div className="flex flex-col w-full pb-10 space-y-4">
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-tertiary-fixed-dim/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-error-container/30 rounded-full blur-xl pointer-events-none" />
        <div className="relative my-2 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-tertiary-fixed/30 animate-ping absolute opacity-60" />
          <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center shadow-md relative z-10 shadow-[0_0_18px_rgba(217,119,6,0.35)]">
            <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px] text-tertiary-fixed-dim">nfc</span>
            </div>
          </div>
          <div className="absolute -bottom-1 z-20 flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
            {" "}
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              ISO 14443-A • 13.56 MHz
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 px-3 py-1 bg-tertiary-container/10 rounded-full">
          <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified</span>
          {" "}
          <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold tracking-wide">
            NFC SCANNÉ EN 0.05s • MIFARE SCELLÉE
          </span>
        </div>
        <div className="w-full mt-3 pt-2.5 flex items-center justify-between text-secondary">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-secondary">wifi_off</span>
            {" "}
            <span className="font-label-sm text-label-sm font-medium">Mode Terrain Offline</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50">
            <span className="material-symbols-outlined text-[14px] text-on-secondary-container">
              inventory_2
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-on-secondary-container font-semibold">
              43 pointages en attente sync
            </span>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-fixed/40 rounded-2xl p-4 shadow-sm relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px] text-tertiary-fixed-dim">warning</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-title-md text-title-md text-on-tertiary-fixed font-bold tracking-tight">
                ATTENTION : 2 ANOMALIES DÉTECTÉES
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant mt-0.5">
              {" Émargement soumis à vérification préalable du Chef de Patrouille. "}
            </p>
            <div className="mt-3 space-y-2">
              <div className="bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl p-2.5 flex items-start gap-2 shadow-xs">
                <span className="material-symbols-outlined text-[18px] text-error shrink-0 mt-0.5">
                  schedule
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-error font-bold">
                    1. Retard critique : +35 min
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Rassemblement fixé à 15h00 • Scanné à 15h35 sur le parvis.
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl p-2.5 flex items-start gap-2 shadow-xs">
                <span className="material-symbols-outlined text-[18px] text-error shrink-0 mt-0.5">
                  gpp_bad
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-error font-bold">
                    2. Assurance Diocésaine Échue (2024-2025)
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Cotisation SANLAM non active pour l'exercice. Couverture physique suspendue.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col space-y-3 relative">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
            Fiche Militant Scellée
          </span>
          {" "}
          <span className="font-label-sm text-label-sm text-primary font-mono bg-surface-container px-2 py-0.5 rounded-full">
            Puce #0512-OK
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            <img alt="Portrait Emmanuel KOFFI" className="w-20 h-20 rounded-2xl object-cover shadow-md" src="/assets/avatar-placeholder.svg" />
            <span className="absolute -bottom-1.5 -right-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full shadow-sm font-bold">
              CV-A
            </span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h2 className="font-title-md text-title-md text-primary font-bold truncate">Emmanuel KOFFI</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">11 ans • Né le 18/09/2013</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-secondary">fingerprint</span>
              {" "}
              <span className="font-label-sm text-label-sm font-mono text-primary font-medium">
                CI-DAL-2024-0512
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-3 flex flex-col space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary">church</span>
            {" "}
            <span className="font-label-sm text-label-sm text-primary font-bold">
              Cathédrale Christ-Roi de Daloa
            </span>
          </div>
          <div className="flex items-center justify-between text-secondary pt-0.5">
            <span className="font-body-sm text-body-sm">Patrouille Saint-Joseph</span>
            {" "}
            <span className="font-label-sm text-label-sm bg-surface-container-lowest px-2 py-0.5 rounded-full text-on-surface font-semibold">
              Rang : Équipier
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 pt-1">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-tertiary-container/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">payments</span>
              {" "}
              <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">
                Cotisation Annuelle
              </span>
            </div>
            <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-0.5 rounded-full font-bold">
              Partielle (2 000 / 3 500 F)
            </span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-error-container/60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-error">security_update_warning</span>
              {" "}
              <span className="font-label-sm text-label-sm text-on-error-container font-semibold">
                Assurance Diocèse
              </span>
            </div>
            <span className="font-label-sm text-label-sm bg-error text-on-error px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">block</span>
              {" Échue (Non couverte) "}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-error">medical_services</span>
            {" "}
            <span className="font-title-md text-title-md text-primary font-bold">Fiche Médicale & Tuteur</span>
          </div>
          <span className="font-label-sm text-label-sm bg-error-container text-on-error-container font-bold px-2 py-0.5 rounded-full">
            Groupe A+
          </span>
        </div>
        <div className="bg-surface-container-low rounded-xl p-3 space-y-2">
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] text-on-tertiary-container mt-0.5">air</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                Vigilance Respiratoire
              </span>
              {" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Asthme modéré d'effort (Penser impérativement à la Ventoline en sacoche).
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="font-body-sm text-body-sm text-secondary">Bivouac & Grand Camp</span>
            {" "}
            <span className="font-label-sm text-label-sm text-error bg-error-container/50 px-2 py-0.5 rounded-full font-bold">
              Inéligible sans assurance
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container">
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm text-secondary">Tuteur Légal Déclaré</span>
            {" "}
            <span className="font-label-md text-label-md text-primary font-bold truncate">
              Mme Blandine KOFFI (Mère)
            </span>
            {" "}
            <span className="font-body-sm text-body-sm text-on-surface-variant font-mono mt-0.5">
              +225 05 44 19 82 10
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a aria-label="Appeler Mme KOFFI" className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm active:scale-95 transition-transform" href="tel:+2250544198210">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            {" "}
            <a aria-label="Message WhatsApp Mme KOFFI" className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm active:scale-95 transition-transform" href="https://wa.me/2250544198210">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2.5 pt-1">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold px-1">
          Décision Chef de Section
        </span>
        <button className="w-full min-h-[48px] py-3 px-6 rounded-full bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-title-md font-bold shadow-md active:scale-98 transition-all flex items-center justify-center gap-2" id="btn-retard" type="button">
          <span className="material-symbols-outlined text-[22px]">alarm_on</span>
          {" "}
          <span>Enregistrer en Retard (+35 min • 15h35)</span>
        </button>
        <button className="w-full min-h-[48px] py-3 px-6 rounded-full bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md font-bold shadow-md active:scale-98 transition-all flex items-center justify-center gap-2" id="btn-reserve" type="button">
          <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">rule</span>
          {" "}
          <span>Admettre sous réserve & Alerter Trésorier</span>
        </button>
        <button className="w-full min-h-[48px] py-2.5 px-6 rounded-full bg-error-container text-on-error-container font-label-lg text-label-lg font-bold active:scale-98 transition-all flex items-center justify-center gap-2" id="btn-refus" type="button">
          <span className="material-symbols-outlined text-[20px]">sports_kabaddi</span>
          {" "}
          <span>Refuser l'accès aux activités physiques / terrain</span>
        </button>
        <div className="flex items-center justify-center gap-1.5 pt-1 text-center">
          <span className="material-symbols-outlined text-[15px] text-secondary">info</span>
          <p className="font-label-sm text-label-sm text-secondary">
            En cas de litige, contacter le secrétariat paroissial.
          </p>
        </div>
      </div>
      <div className="hidden bg-primary text-on-primary px-4 py-3 rounded-2xl shadow-lg flex items-center justify-between transition-all" id="toast-action">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">check_circle</span>
          {" "}
          <span className="font-label-md text-label-md font-semibold" id="toast-text">
            Décision enregistrée en cache local
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-primary-fixed">Mode Hors-Ligne</span>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col space-y-2.5 mt-2">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-secondary">history</span>
            <h3 className="font-title-md text-title-md text-primary font-bold">Derniers Scans Rassemblement</h3>
          </div>
          <span className="font-label-sm text-label-sm text-secondary font-mono">15:00 - 15:35</span>
        </div>
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold font-label-sm text-label-sm">
                {" JK "}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold">Jean-Philippe KANGA</span>
                {" "}
                <span className="font-body-sm text-body-sm text-secondary">CV-B • Patrouille St-Jean</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-label-sm text-label-sm bg-[#2E7D32]/10 text-[#2E7D32] px-2 py-0.5 rounded-full font-bold">
                Présent (15:04)
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold font-label-sm text-label-sm">
                {" MA "}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold">Moïse ASSI</span>
                {" "}
                <span className="font-body-sm text-body-sm text-secondary">CV-A • Patrouille St-Paul</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-label-sm text-label-sm bg-[#2E7D32]/10 text-[#2E7D32] px-2 py-0.5 rounded-full font-bold">
                Présent (15:02)
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold font-label-sm text-label-sm">
                {" MY "}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold">Marie-Grâce YAO</span>
                {" "}
                <span className="font-body-sm text-body-sm text-secondary">AV • Patrouille Ste-Anne</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-label-sm text-label-sm bg-[#2E7D32]/10 text-[#2E7D32] px-2 py-0.5 rounded-full font-bold">
                Présente (14:59)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
