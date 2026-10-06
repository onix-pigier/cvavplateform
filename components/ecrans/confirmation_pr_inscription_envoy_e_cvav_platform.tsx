// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/confirmation_pr_inscription_envoy_e_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Confirmation pr inscription envoy e cvav platform — Domaine : Portail & Inscriptions

export default function ConfirmationPrInscriptionEnvoyECvavPlatform() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
  <main className="min-h-screen w-full flex items-center justify-center p-margin-mobile md:p-margin">
    <div className="flex flex-col w-full items-center justify-center py-space-xl">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center px-gutter-mobile md:px-gutter">
        <div className="relative flex items-center justify-center mb-space-lg">
          <div className="absolute w-28 h-28 rounded-full bg-secondary-container/40 animate-ping opacity-30 pointer-events-none" />
          <div className="relative w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px] text-on-surface" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
                {" check_circle "}
              </span>
            </div>
          </div>
        </div>
        <p className="font-label-md text-label-md uppercase tracking-wider text-secondary mb-space-xs">
          {" Mouvement CV-AV • Diocèse "}
        </p>
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-md">
          {" Pré-inscription envoyée ! "}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed mb-space-lg">
          {" Merci "}
          <span className="font-title-md text-primary font-semibold">Ange-Emmanuel</span>
          {". Ta demande a été transmise à la paroisse "}
          <span className="font-title-md text-primary font-semibold">Cathédrale Christ-Roi</span>
          {". Un responsable diocésain va l'examiner sous peu. "}
        </p>
        <div className="inline-flex items-center gap-2 bg-surface-container px-space-md py-space-sm rounded-full mb-space-xl shadow-sm">
          <span className="material-symbols-outlined text-secondary text-[18px]">{" schedule "}</span>
          {" "}
          <span className="font-label-md text-label-md text-secondary">
            {" Statut actuel : "}
            <span className="text-primary font-semibold">En attente de validation</span>
          </span>
        </div>
        <div className="w-full bg-surface-container-lowest rounded-xl p-space-md mb-space-xl shadow-sm text-left flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">{" mark_email_read "}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-secondary">Identifiant de suivi</span>
              {" "}
              <span className="font-body-md text-body-md font-semibold text-primary tracking-wide">
                CVAV-2025-CI-0842
              </span>
            </div>
          </div>
          <div className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            {" Récépissé généré "}
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-space-sm">
          <a className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all" href="#">
            {" Retour à l'accueil "}
          </a>
          {" "}
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container font-label-lg text-label-lg transition-all" type="button">
            <span className="material-symbols-outlined text-[18px]">print</span>
            {" Imprimer le reçu "}
          </button>
        </div>
        <div className="mt-space-xl pt-space-md flex items-center justify-center gap-2 text-secondary opacity-75">
          <span className="material-symbols-outlined text-[16px]">church</span>
          {" "}
          <span className="font-label-sm text-label-sm">
            Secrétariat Diocésain des Cœurs Vaillants et Âmes Vaillantes
          </span>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
