// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pointage_terrain_basculement_automatique_nfc_cam_ra/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pointage terrain basculement automatique nfc cam ra — Domaine : Terrain & Sécurité

export default function PointageTerrainBasculementAutomatiqueNfcCamRa() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col">
  <header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(27,42,74,0.06)]">
    <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm min-w-0 flex-1">
        <button aria-label="Retour" className="w-11 h-11 -ml-space-xs flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors shrink-0 active:scale-95" type="button">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex items-center gap-space-xs shrink-0">
          <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
          <span className="font-headline-sm text-title-md font-bold text-primary tracking-tight hidden xs:inline">
            CV-AV
          </span>
        </div>
        <div className="flex flex-col min-w-0 flex-1 ml-space-xs">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">
            Pointage & Contrôle Terrain
          </span>
          <h1 className="font-title-md text-title-md text-primary truncate leading-tight">Scanner Actif</h1>
        </div>
      </div>
      <div className="flex items-center gap-space-xs shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex-1 w-full bg-surface pt-16 pb-safe flex flex-col relative">
    <div className="flex flex-col w-full">
      <div className="px-gutter-mobile py-space-sm flex flex-col gap-space-md">
        <div className="bg-primary text-on-primary rounded-xl px-space-md py-space-sm flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 shadow-sm font-headline-sm text-title-md font-bold">
              <span className="material-symbols-outlined text-[18px]">church</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-label-sm uppercase tracking-wider text-tertiary-fixed font-semibold truncate">
                Diocèse de Daloa
              </span>
              <p className="font-body-sm text-body-sm text-surface-container-highest truncate">
                CV-AV • Patrouille Saint-Joseph (Cadets)
              </p>
            </div>
          </div>
          <span className="bg-primary-container text-on-primary-fixed-variant text-label-sm font-label-sm px-space-sm py-1 rounded-full shrink-0 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
            {" Direct "}
          </span>
        </div>
        <div className="bg-surface-container-low rounded-xl p-space-sm flex items-start gap-space-sm shadow-sm">
          <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">sensors_off</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-0.5">
              <span className="font-label-md text-label-md text-primary font-semibold">
                Basculement Automatique Effectué
              </span>
              {" "}
              <span className="text-label-sm font-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                0,2s
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
              {" Capteur NFC non détecté ou désactivé sur cet appareil → Caméra QR Code active pour le contrôle terrain continu. "}
            </p>
          </div>
        </div>
        <div className="bg-surface-container-high p-1 rounded-full flex items-center justify-between shadow-inner">
          <button className="flex-1 py-2 px-space-sm rounded-full text-center transition-all flex items-center justify-center gap-1.5 text-secondary hover:text-primary font-label-md text-label-md opacity-70" id="tab-nfc" type="button">
            <span className="material-symbols-outlined text-[18px]">contactless</span>
            {" "}
            <span className="truncate">NFC (Dos)</span>
          </button>
          {" "}
          <button className="flex-1 py-2 px-space-sm rounded-full text-center bg-primary text-on-primary shadow-sm transition-all flex items-center justify-center gap-1.5 font-label-md text-label-md font-semibold" id="tab-camera" type="button">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">qr_code_scanner</span>
            {" "}
            <span className="truncate">Caméra QR (Actif)</span>
          </button>
        </div>
        <div className="bg-primary text-on-primary rounded-2xl p-space-md flex flex-col items-center relative overflow-hidden shadow-xl" id="camera-viewport-card">
          <div className="w-full flex items-center justify-between mb-space-sm z-10">
            <div className="flex items-center gap-1.5 bg-primary-container/80 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm text-surface-bright">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              {" "}
              <span>Visée Optique Active</span>
            </div>
            <button className="bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 active:scale-95 text-surface-bright px-3 py-1 rounded-full flex items-center gap-1.5 text-label-sm font-label-sm transition-all" id="torch-btn" type="button">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed" id="torch-icon">
                flash_on
              </span>
              {" "}
              <span id="torch-label">Torche</span>
            </button>
          </div>
          <div className="relative w-64 h-64 my-space-xs rounded-2xl flex items-center justify-center bg-primary-container/50 overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105" data-alt="High contrast liturgical outdoor youth camp gathering of CV-AV scouts in Côte d'Ivoire with boys in neat navy shirts gathered under tropical acacia trees, soft natural African daylight, subtle photographic texture" style={{ backgroundImage: "url(\"/assets/image-placeholder.svg\")" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/60" />
            <div className="absolute left-4 right-4 h-0.5 bg-tertiary-fixed shadow-[0_0_12px_#f5bd51] animate-[bounce_2.4s_infinite] z-20" />
            <div className="absolute inset-4 pointer-events-none z-10 flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <svg className="text-tertiary-fixed" fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M2 26V8C2 4.68629 4.68629 2 8 2H26" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
                <svg className="text-tertiary-fixed" fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M2 2H20C23.3137 2 26 4.68629 26 8V26" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </div>
              <div className="mx-auto opacity-20 flex flex-col items-center">
                <span className="material-symbols-outlined text-[54px] text-tertiary-fixed">favorite</span>
              </div>
              <div className="flex justify-between w-full">
                <svg className="text-tertiary-fixed" fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M2 2V20C2 23.3137 4.68629 26 8 26H26" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
                <svg className="text-tertiary-fixed" fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M26 2V20C26 23.3137 23.3137 26 20 26H2" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-space-sm text-center px-space-sm z-10">
            <p className="font-label-md text-label-md font-medium text-surface-bright flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">
                center_focus_strong
              </span>
              {" Pointez la caméra vers le QR code de la carte "}
            </p>
            <span className="font-body-sm text-body-sm text-surface-container-highest opacity-80 block mt-0.5">
              Verso de la carte PVC officielle ou badge provisoire
            </span>
          </div>
        </div>
        <div className="hidden bg-surface-container-lowest rounded-2xl p-space-lg flex-col items-center text-center shadow-md" id="nfc-viewport-card">
          <div className="w-20 h-20 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-space-sm animate-pulse">
            <span className="material-symbols-outlined text-[42px]">contactless</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Capteur NFC Inactif</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mb-space-md">
            {" Approchez la carte du dos de l'appareil. Si aucune réponse n'apparaît, activez le NFC dans les Réglages rapides d'Android/iOS. "}
          </p>
          <button className="rounded-full bg-primary text-on-primary px-space-lg py-2.5 font-label-md text-label-md flex items-center gap-2 shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">photo_camera</span>
            {" Revenir au mode Caméra instantané "}
          </button>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex items-start gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-headline-sm text-title-md font-semibold text-primary">
                Pratique & 100% Homologué
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {" Smartphone sans puce NFC ? Aucun problème ! Le scan optique caméra garantit la même vitesse ("}
              <span className="font-semibold text-primary">{"< 0,3s"}</span>
              {") et la même conformité diocésaine pour l'appel. "}
            </p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between pb-space-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
              {" "}
              <span className="font-headline-sm text-title-md text-primary font-semibold">
                Diagnostic Matériel & Réseau
              </span>
            </div>
            <span className="text-label-sm font-label-sm text-secondary">Temps réel</span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-space-sm rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-secondary text-[20px]">nfc</span>
              {" "}
              <span className="font-label-md text-label-md text-on-surface truncate">Capteur NFC</span>
            </div>
            <span className="bg-surface-container-highest text-secondary text-label-sm font-label-sm px-2.5 py-0.5 rounded-full font-medium shrink-0 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {" Inactif / Non supporté "}
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-space-sm rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-primary text-[20px]">videocam</span>
              {" "}
              <span className="font-label-md text-label-md text-on-surface truncate">Caméra Arrière</span>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-label-sm font-label-sm px-2.5 py-0.5 rounded-full font-medium shrink-0 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              {" HD 1080p active "}
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-space-sm rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-primary text-[20px]">cloud_sync</span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface truncate">
                  Mode Hors-Ligne (PWA)
                </span>
              </div>
            </div>
            <span className="bg-secondary-container text-on-secondary-container text-label-sm font-label-sm px-2.5 py-0.5 rounded-full font-medium shrink-0">
              {" Prêt (Différé) "}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-sm pt-space-xs pb-space-lg">
          <button className="w-full bg-tertiary-fixed hover:bg-tertiary-fixed-dim active:scale-[0.98] text-on-tertiary-fixed font-label-lg text-label-lg font-semibold py-3 px-space-lg rounded-full shadow-md flex items-center justify-center gap-2 transition-all" id="btn-retest-nfc" type="button">
            <span className="material-symbols-outlined text-[20px]" id="retest-icon">restart_alt</span>
            {" "}
            <span id="retest-text">Tester à nouveau le capteur NFC</span>
          </button>
          <button className="w-full bg-primary hover:bg-primary-container active:scale-[0.98] text-on-primary font-label-lg text-label-lg font-semibold py-3 px-space-lg rounded-full shadow-sm flex items-center justify-center gap-2 transition-all" type="button">
            <span className="material-symbols-outlined text-[20px]">keyboard</span>
            {" "}
            <span>Saisie manuelle du matricule</span>
          </button>
          <button className="w-full bg-surface-container-highest hover:bg-surface-container active:scale-[0.98] text-primary font-label-lg text-label-lg font-semibold py-3 px-space-lg rounded-full shadow-sm flex items-center justify-between transition-all" type="button">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary">assignment_turned_in</span>
              {" "}
              <span>Feuille d'émargement Patrouille</span>
            </span>
            {" "}
            <span className="bg-primary text-on-primary text-label-sm font-label-sm px-3 py-1 rounded-full">
              {" 25 / 28 présents "}
            </span>
          </button>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
