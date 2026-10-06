// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/registre_scell_verrouill_patrouille_saint_joseph_25_28/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Registre scell verrouill patrouille saint joseph 25 28 — Domaine : Authentification

export default function RegistreScellVerrouillPatrouilleSaintJoseph2528() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen">
  <header className="fixed top-0 w-full z-50 pt-safe bg-primary-container shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <div className="h-20 px-gutter-mobile flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-xs flex-1 min-w-0">
        <button aria-label="Retour" className="w-11 h-11 flex items-center justify-center rounded-full text-on-primary hover:bg-white/10 active:scale-95 transition-all shrink-0">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col min-w-0 pr-space-xs">
          <div className="flex items-center gap-space-xs">
            <h1 className="font-title-md text-title-md text-on-primary truncate tracking-tight">
              Registre Scellé & Verrouillé
            </h1>
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] shrink-0" title="Verrouillé">
              lock
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="font-body-sm text-body-sm text-on-primary-container truncate">
              Patrouille Saint-Joseph • Daloa
            </span>
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[15px] shrink-0" title="Synchronisé au cloud diocésain">
              cloud_done
            </span>
          </div>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
      </div>
    </div>
  </header>
  <main className="flex flex-col relative w-full pt-20 pb-safe bg-surface min-h-screen">
    <div className="flex flex-col w-full pb-10">
      <div className="relative w-full overflow-hidden">
        <canvas className="pointer-events-none absolute inset-0 z-20 w-full h-full" id="confettiCanvas" />
        <div className="relative bg-primary-container px-gutter-mobile pt-8 pb-10 flex flex-col items-center text-center shadow-md">
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative mb-5 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-tertiary-fixed-dim/20 animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-tertiary-fixed-dim via-on-tertiary-container to-tertiary-container p-[3px] shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-primary-container flex flex-col items-center justify-center relative">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-surface-container-lowest rounded-full p-[2px] shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-[#2E7D32] rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[16px] font-bold">
                      check
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-space-xs bg-white/10 px-3 py-1 rounded-full mb-3 shadow-sm">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              military_tech
            </span>
            {" "}
            <span className="font-label-sm text-label-sm text-tertiary-fixed-dim tracking-wider uppercase font-semibold">
              Validation Canonique Complétée
            </span>
          </div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary tracking-tight mb-2">
            {" Registre Scellé avec Succès "}
          </h2>
          <p className="font-body-sm text-body-sm text-on-primary-container max-w-xs mx-auto mb-5 leading-relaxed">
            {" Horodatage canonique scellé à "}
            <strong className="text-on-primary font-medium">16:05:42 GMT</strong>
            {" le 26 Oct. 2024 "}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#2E7D32]/20 text-[#69f0ae] px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold tracking-wide">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              {" VERROUILLÉ & INFALSIFIABLE "}
            </span>
            {" "}
            <span className="inline-flex items-center gap-1 bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              {" ACTE OFFICIEL #DAL-2024-PV-892F "}
            </span>
          </div>
        </div>
      </div>
      <div className="px-gutter-mobile -mt-4 flex flex-col gap-space-md z-30">
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.06)]">
          <div className="flex items-center justify-between pb-3 mb-3 bg-surface-container-lowest">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[20px]">how_to_reg</span>
              <h3 className="font-headline-sm text-headline-sm text-primary-container">
                Quorum & Émargement Final
              </h3>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Effectif: 28
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#2E7D32]/5 rounded-xl p-2.5 flex flex-col items-center text-center">
              <span className="font-label-sm text-label-sm text-[#2E7D32] font-semibold mb-1">Présents</span>
              {" "}
              <span className="font-headline-md text-headline-md text-on-surface font-bold leading-none mb-1">
                25
              </span>
              {" "}
              <span className="font-label-sm text-[10px] text-on-surface-variant leading-tight mb-2">
                / 28 (89.3%)
              </span>
              {" "}
              <span className="inline-flex items-center gap-0.5 bg-[#2E7D32]/15 text-[#2E7D32] px-2 py-0.5 rounded-full font-label-sm text-[10px] font-semibold">
                <span className="material-symbols-outlined text-[12px]">done_all</span>
                {" Validé "}
              </span>
            </div>
            <div className="bg-secondary-container/40 rounded-xl p-2.5 flex flex-col items-center text-center">
              <span className="font-label-sm text-label-sm text-secondary font-semibold mb-1">Régularisés</span>
              {" "}
              <span className="font-headline-md text-headline-md text-on-surface font-bold leading-none mb-1">
                02
              </span>
              {" "}
              <span className="font-label-sm text-[10px] text-on-surface-variant leading-tight mb-2">
                Cotisations
              </span>
              {" "}
              <span className="inline-flex items-center gap-0.5 bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-label-sm text-[10px] font-semibold">
                {" Régularisés "}
              </span>
            </div>
            <div className="bg-[#C62828]/5 rounded-xl p-2.5 flex flex-col items-center text-center">
              <span className="font-label-sm text-label-sm text-error font-semibold mb-1">Absents</span>
              {" "}
              <span className="font-headline-md text-headline-md text-on-surface font-bold leading-none mb-1">
                03
              </span>
              {" "}
              <span className="font-label-sm text-[10px] text-on-surface-variant leading-tight mb-2">
                1 exc. / 2 nj.
              </span>
              {" "}
              <span className="inline-flex items-center gap-0.5 bg-[#C62828]/15 text-[#C62828] px-2 py-0.5 rounded-full font-label-sm text-[10px] font-semibold">
                {" Consignés "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.06)] relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-[0.04] text-primary select-none">
            <span className="material-symbols-outlined text-[160px]">policy</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[20px]">fingerprint</span>
              <h3 className="font-headline-sm text-headline-sm text-primary-container">
                Audit & Sceau Cryptographique
              </h3>
            </div>
            <span className="font-label-sm text-label-sm text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
              {" SHA-256 "}
            </span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Empreinte Cryptographique
              </span>
              {" "}
              <button className="flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium hover:text-on-tertiary-container active:scale-95 transition-all" id="copyHashBtn">
                <span className="material-symbols-outlined text-[16px]" id="copyIcon">content_copy</span>
                {" "}
                <span id="copyText">Copier</span>
              </button>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface font-mono break-all select-all leading-tight bg-surface-container-lowest p-2 rounded-lg" id="hashValue">
              {" e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 "}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-3 bg-surface rounded-xl p-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Signataire principal
                </span>
                {" "}
                <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                  Fr. Jean-Marc KOFFI
                </span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Chef de Patrouille Saint-Joseph
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-surface rounded-xl p-2.5">
              <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">church</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Contreseing d'aumônerie
                </span>
                {" "}
                <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                  Abbé Paul K.
                </span>
                {" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Aumônier Paroissial Christ-Roi • Daloa
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-1 pt-1">
              <span className="material-symbols-outlined text-primary text-[16px]">cloud_sync</span>
              {" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Nœud Diocésain : Diocèse de Daloa / Archevêché CI
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_4px_20px_-2px_rgba(27,42,74,0.06)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[20px]">badge</span>
              <h3 className="font-headline-sm text-headline-sm text-primary-container">
                Aperçu Scellé des Présences
              </h3>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">5/28 illustrés</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-semibold text-xs shrink-0">
                  {" AK "}
                  <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] text-[#2E7D32] bg-surface-container-lowest rounded-full">
                    lock
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-lg text-label-lg text-on-surface font-medium truncate">
                    Ange-Emmanuel KOUAME
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Pointé 16:00:12 NFC • Carte active
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-[#2E7D32]/10 text-[#2E7D32] px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shrink-0">
                <span className="material-symbols-outlined text-[13px]">lock</span>
                {" Présent "}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-semibold text-xs shrink-0">
                  {" EK "}
                  <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] text-[#2E7D32] bg-surface-container-lowest rounded-full">
                    lock
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-lg text-label-lg text-on-surface font-medium truncate">
                    Emmanuel KOFFI
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Pointé 15:52 NFC • Quittance #0412
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5 shrink-0">
                <span className="inline-flex items-center gap-1 bg-[#2E7D32]/10 text-[#2E7D32] px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[13px]">lock</span>
                  {" Présent "}
                </span>
                {" "}
                <span className="font-label-sm text-[10px] text-secondary font-medium">Régularisé</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-semibold text-xs shrink-0">
                  {" JK "}
                  <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] text-[#2E7D32] bg-surface-container-lowest rounded-full">
                    lock
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-lg text-label-lg text-on-surface font-medium truncate">
                    Jean-Philippe KANGA
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Pointé 15:04 NFC • Carte #0492
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-[#2E7D32]/10 text-[#2E7D32] px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shrink-0">
                <span className="material-symbols-outlined text-[13px]">lock</span>
                {" Présent "}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-error font-semibold text-xs shrink-0">
                  {" AB "}
                  <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] text-[#C62828] bg-surface-container-lowest rounded-full">
                    lock
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-lg text-label-lg text-on-surface font-medium truncate">
                    Alexandre BAMBA
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Justificatif légal archivé diocèse
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shrink-0">
                <span className="material-symbols-outlined text-[13px]">event_busy</span>
                {" Excusé "}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-error font-semibold text-xs shrink-0">
                  {" 2+ "}
                  <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] text-[#C62828] bg-surface-container-lowest rounded-full">
                    lock
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-lg text-label-lg text-on-surface font-medium truncate">
                    S. Kouadio & D. Koné
                  </span>
                  {" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Absents notifiés • Relance SMS effectuée
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-[#C62828]/10 text-[#C62828] px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shrink-0">
                <span className="material-symbols-outlined text-[13px]">cancel</span>
                {" Absent "}
              </span>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-xl bg-surface-container flex items-start gap-2.5">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px] shrink-0 mt-0.5">
              verified
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {" Ce registre est désormais clos en écriture. Toute modification ultérieure requiert une dispense officielle de l'Aumônerie Diocésaine. "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <button className="w-full h-12 bg-on-tertiary-container hover:bg-tertiary-fixed-dim text-surface-container-lowest rounded-full font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all">
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            {" "}
            <span>Télécharger le Procès-Verbal Scellé (PDF/A)</span>
          </button>
          <button className="w-full h-12 bg-primary-container text-on-primary rounded-full font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-98 hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
              forward_to_inbox
            </span>
            {" "}
            <span>Transmettre au Secrétariat & Curé</span>
          </button>
          <button className="w-full h-12 bg-surface-container hover:bg-surface-container-high text-primary rounded-full font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 active:scale-98 transition-all">
            <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">explore</span>
            {" "}
            <span>Lancer l'Activité (Module Terrain)</span>
          </button>
          <div className="text-center pt-2">
            <button className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary font-label-md text-label-md underline underline-offset-4">
              <span className="material-symbols-outlined text-[16px]">history_edu</span>
              {" "}
              <span>Consulter l'historique des PV de la patrouille</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
