// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pointage_terrain_tentative_de_scan_carte_suspendue_refus_d_authentification/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pointage terrain tentative de scan carte suspendue refus d authentification — Domaine : Authentification

export default function PointageTerrainTentativeDeScanCarteSuspendueRefusDAuthentification() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen">
  <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
    <div className="h-20 px-margin-mobile flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm min-w-0">
        <button aria-label="Retour" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
        <div className="flex flex-col min-w-0 pl-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider font-semibold">
              Diocèse de Daloa
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-outline-variant" />
            <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
              Aumônerie Diocésaine
            </span>
          </div>
          <h1 className="font-title-md text-title-md text-primary font-bold truncate leading-tight">
            Alerte Sécurité Blacklist
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-space-xs">
        <div className="hidden sm:flex flex-col items-end pr-space-xs">
          <span className="font-label-sm text-label-sm text-primary font-semibold">#TERM-DAL-04</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">NFC Actif</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex flex-col relative w-full pt-20 bg-surface flex-1">
    <div className="flex flex-col w-full pb-safe">
      <div className="px-margin-mobile pt-space-sm pb-space-xs">
        <div className="bg-surface-container-high rounded-full px-space-md py-space-xs flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-space-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
              {" "}
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-error" />
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-error font-semibold tracking-wide uppercase">
              Rejet Haptique Simulé
            </span>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
              vibration
            </span>
            {" "}
            <span>Bip d'alerte double • Rejet NFC</span>
          </div>
        </div>
      </div>
      <div className="px-margin-mobile py-space-xs flex flex-col gap-space-md">
        <div className="bg-error text-on-error rounded-2xl p-space-md shadow-md relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none text-on-error">
            <span className="material-symbols-outlined text-[130px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              gpp_bad
            </span>
          </div>
          <div className="relative z-10 flex items-start gap-space-sm">
            <div className="w-12 h-12 rounded-full bg-on-error/20 flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-on-error text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock_person
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm bg-on-error/25 text-on-error px-space-xs py-0.5 rounded-full font-semibold uppercase tracking-wider">
                  Erreur 0x4F9 • Sécurité
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm font-bold text-on-error uppercase tracking-tight mt-0.5">
                Scan Refusé • Carte Suspendue
              </h2>
              <p className="font-body-sm text-body-sm text-on-error/90 mt-0.5 leading-snug">
                Puce RFID/NFC inscrite sur la Blacklist Diocésaine (#BLK-2024-019)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
              Identité Pastorale Enregistrée
            </span>
            {" "}
            <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-error/15 text-error font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-error" />
              {" Carte Bloquée • Perte Signalée "}
            </span>
          </div>
          <div className="flex items-center gap-space-md pt-space-xs">
            <div className="relative shrink-0">
              <img alt="Amenan Grâce BROU" className="w-20 h-20 rounded-2xl object-cover shadow-sm bg-surface-container" src="/assets/image-placeholder.svg" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center shadow">
                <span className="material-symbols-outlined text-[14px]">cancel</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                Amenan Grâce BROU
              </h3>
              <span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-semibold tracking-wide">
                9 ans • Fille
              </span>
              <div className="mt-1 flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-space-xs py-0.5 rounded font-mono">
                  CVAV-DAL-2024-8845-A
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary truncate mt-1">
                Âmes Vaillantes A (AV-1) • Cathédrale Christ-Roi
              </p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between pb-space-xs">
            <div className="flex items-center gap-space-xs text-primary">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <h4 className="font-title-md text-title-md font-bold">Traçabilité & Déclaration de Perte</h4>
            </div>
            <span className="font-label-sm text-label-sm text-outline font-mono">AES-128 REV</span>
          </div>
          <div className="grid grid-cols-2 gap-space-xs bg-surface-container-low p-space-sm rounded-xl">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">UID Puce scannée</span>
              {" "}
              <span className="font-label-md text-label-md font-mono text-primary font-bold">
                04:E2:89:1A:3C:99
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-outline">MIFARE Classic 1K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Tentative rejetée</span>
              {" "}
              <span className="font-label-md text-label-md font-mono text-error font-bold">16:12:44 GMT</span>
              {" "}
              <span className="font-label-sm text-label-sm text-outline">À l'instant • Local</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs">
            <div className="flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0 mt-0.5">
                person_outline
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Déclarant légal</span>
                {" "}
                <span className="font-body-sm text-body-sm text-primary font-medium">
                  Paul Kouamé BROU (Père / Tuteur légal)
                </span>
              </div>
            </div>
            <div className="flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                report_problem
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Motif consigné</span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface">
                  Perte de la carte physique déclarée au secrétariat paroissial (13 Oct à 16:05:00 GMT).
                </span>
              </div>
            </div>
            <div className="flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-error shrink-0 mt-0.5">
                security_update_warning
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  État cryptographique
                </span>
                {" "}
                <span className="font-body-sm text-body-sm text-error font-medium">
                  Échec handshake Secteur 01 • Clé révoquée par serveur central
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-container text-on-primary-container rounded-2xl p-space-md shadow-sm">
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              assignment_turned_in
            </span>
            <h4 className="font-title-md text-title-md text-on-primary font-bold">
              Consignes de l'Encadrant / Fr. Jean-Marc
            </h4>
          </div>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim mb-space-sm leading-relaxed">
            {" Application stricte des règles diocésaines de bienveillance et de sécurité des mineurs : "}
          </p>
          <ol className="space-y-space-xs pl-space-xs">
            <li className="flex items-start gap-space-xs text-body-sm font-body-sm text-white">
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center font-label-sm text-label-sm text-tertiary-fixed-dim shrink-0 mt-0.5">
                1
              </span>
              {" "}
              <span>
                <strong>Retenir cordialement</strong>
                {" la carte physique présentée si elle a été retrouvée ou apportée par un tiers."}
              </span>
            </li>
            <li className="flex items-start gap-space-xs text-body-sm font-body-sm text-white">
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center font-label-sm text-label-sm text-tertiary-fixed-dim shrink-0 mt-0.5">
                2
              </span>
              {" "}
              <span>
                <strong>Vérifier la présence</strong>
                {" réelle de l'enfant Amenan Grâce BROU au rassemblement des Âmes Vaillantes."}
              </span>
            </li>
            <li className="flex items-start gap-space-xs text-body-sm font-body-sm text-white">
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center font-label-sm text-label-sm text-tertiary-fixed-dim shrink-0 mt-0.5">
                3
              </span>
              {" "}
              <span>
                {"Si l'enfant est bien présente, "}
                <strong>valider son entrée manuellement</strong>
                {" ou avertir son père pour confirmation."}
              </span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-space-sm pt-space-xs">
          <button className="w-full min-h-[50px] px-space-lg rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-title-md text-title-md font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-space-xs">
            <span className="material-symbols-outlined text-[22px]">how_to_reg</span>
            {" "}
            <span>Pointer manuellement sur dérogation</span>
          </button>
          <a className="w-full min-h-[48px] px-space-lg rounded-full bg-primary text-on-primary font-title-md text-title-md font-bold shadow-sm active:scale-95 transition-all flex items-center justify-center gap-space-xs" href="tel:+2250748921105">
            <span className="material-symbols-outlined text-[20px]">call</span>
            {" "}
            <span>Appeler le tuteur (+225 07 48 92 11 05)</span>
          </a>
          <button className="w-full min-h-[48px] px-space-lg rounded-full bg-surface-container-highest text-on-surface font-title-md text-title-md font-semibold active:scale-95 transition-all flex items-center justify-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-error">inventory_2</span>
            {" "}
            <span>Confisquer la carte & Reprendre le scan</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-space-xs py-space-sm px-space-md text-center">
          <span className="material-symbols-outlined text-[16px] text-outline">cloud_sync</span>
          {" "}
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {" Incident de sécurité transmis automatiquement au registre paroissial (#SRV-DAL-01). "}
          </span>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
