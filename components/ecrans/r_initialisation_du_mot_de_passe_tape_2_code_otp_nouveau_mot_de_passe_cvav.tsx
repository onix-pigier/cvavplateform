// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/r_initialisation_du_mot_de_passe_tape_2_code_otp_nouveau_mot_de_passe_cvav/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : R initialisation du mot de passe tape 2 code otp nouveau mot de passe cvav — Domaine : Authentification

export default function RInitialisationDuMotDePasseTape2CodeOtpNouveauMotDePasseCvav() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
  <div className="min-h-screen w-full flex flex-col justify-between py-space-xl px-margin-mobile md:px-margin">
    <div className="w-full flex flex-col items-center pt-space-lg">
      <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-16 md:h-20 w-auto object-contain mb-space-xs" src="/assets/cvav-emblem.png" />
      <p className="font-label-sm text-label-sm text-secondary tracking-widest uppercase text-center">
        Mouvement Cœurs Vaillants – Âmes Vaillantes Côte d'Ivoire
      </p>
    </div>
    <main className="w-full max-w-md mx-auto my-auto py-space-lg">
      <div className="flex flex-col w-full">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-space-md sm:p-space-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-tertiary-fixed-dim to-primary" />
            <div className="flex flex-col items-center text-center mb-space-lg">
              <div className="relative mb-space-sm">
                <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center p-2 shadow-sm">
                  <img alt="Emblème CV-AV Côte d'Ivoire" className="w-full h-full object-contain" src="/assets/cvav-emblem.png" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[14px]">lock_reset</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed mb-space-sm">
                <span className="material-symbols-outlined text-[15px]">verified_user</span>
                {" "}
                <span className="font-label-sm text-label-sm tracking-wide">
                  Portail Pastoral Sécurisé • Étape 2 sur 2
                </span>
              </div>
              <h1 className="font-headline-md text-headline-md text-primary mb-space-xs font-semibold">
                {" Validation du code & Nouveau mot de passe "}
              </h1>
              <p className="font-body-md text-body-md text-secondary max-w-md">
                {" Saisissez le code de sécurité temporaire reçu par SMS, puis définissez votre nouveau mot de passe pastoral. "}
              </p>
              <div className="mt-space-md w-full py-2.5 px-space-md bg-surface-container-low rounded-xl flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="material-symbols-outlined text-secondary text-[20px]">smartphone</span>
                  {" "}
                  <span className="font-label-lg text-label-lg text-primary font-semibold tracking-wider truncate">
                    {" +225 07 •• •• 89 12 "}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 shrink-0">
                  <span className="material-symbols-outlined text-emerald-700 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm font-semibold">SMS délivré</span>
                </div>
              </div>
            </div>
            <form className="space-y-space-lg" id="resetForm">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-primary font-semibold">
                    {" Code de sécurité à 6 chiffres "}
                    <span className="text-error">*</span>
                  </label>
                  {" "}
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">timer</span>
                    {" "}
                    <span id="countdown">14 min 20s</span>
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-2 sm:gap-3" id="otpContainer">
                  <input className="otp-input w-full h-12 sm:h-14 text-center font-display-lg-mobile text-headline-sm sm:text-display-lg-mobile text-primary bg-surface-container-low rounded-xl focus:bg-surface-container-lowest focus:outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" defaultValue="4" />
                  {" "}
                  <input className="otp-input w-full h-12 sm:h-14 text-center font-display-lg-mobile text-headline-sm sm:text-display-lg-mobile text-primary bg-surface-container-low rounded-xl focus:bg-surface-container-lowest focus:outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" defaultValue="8" />
                  {" "}
                  <input className="otp-input w-full h-12 sm:h-14 text-center font-display-lg-mobile text-headline-sm sm:text-display-lg-mobile text-primary bg-surface-container-low rounded-xl focus:bg-surface-container-lowest focus:outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" defaultValue="1" />
                  {" "}
                  <input className="otp-input w-full h-12 sm:h-14 text-center font-display-lg-mobile text-headline-sm sm:text-display-lg-mobile text-primary bg-surface-container-low rounded-xl focus:bg-surface-container-lowest focus:outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" defaultValue="9" />
                  {" "}
                  <input className="otp-input w-full h-12 sm:h-14 text-center font-display-lg-mobile text-headline-sm sm:text-display-lg-mobile text-primary bg-surface-container-low rounded-xl focus:bg-surface-container-lowest focus:outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" defaultValue="2" />
                  {" "}
                  <input className="otp-input w-full h-12 sm:h-14 text-center font-display-lg-mobile text-headline-sm sm:text-display-lg-mobile text-primary bg-surface-container-low rounded-xl focus:bg-surface-container-lowest focus:outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" defaultValue="7" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-body-sm text-body-sm text-secondary">
                    Code envoyé par la centrale diocésaine
                  </span>
                  {" "}
                  <button className="font-label-md text-label-md text-primary hover:text-tertiary-fixed-variant font-medium underline underline-offset-4 transition-colors" type="button">
                    {" Renvoyer un nouveau code "}
                  </button>
                </div>
              </div>
              <div className="h-[1px] w-full bg-surface-container-high my-space-md" />
              <div className="space-y-space-md">
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between" htmlFor="newPassword">
                    <span>
                      {"Nouveau mot de passe "}
                      <span className="text-error">*</span>
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-secondary font-normal">
                      Min. 8 caractères
                    </span>
                  </label>
                  <div className="relative">
                    <input className="w-full h-11 sm:h-12 pl-4 pr-11 bg-surface-container-low text-primary rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all" id="newPassword" type="password" defaultValue="SanctaMaria2025#" />
                    {" "}
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-label-sm text-label-sm text-secondary">
                        Niveau de sécurité pastorale
                      </span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-emerald-700 font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">shield</span>
                        {" Robustesse : Très forte "}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 h-1.5">
                      <div className="rounded-full bg-emerald-600" />
                      <div className="rounded-full bg-emerald-600" />
                      <div className="rounded-full bg-emerald-600" />
                      <div className="rounded-full bg-emerald-600" />
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-sm space-y-1.5 mt-space-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700 text-[16px]">
                        check_circle
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Au moins 8 caractères (12 recommandés)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700 text-[16px]">
                        check_circle
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Au moins une lettre majuscule et une minuscule
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700 text-[16px]">
                        check_circle
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface">Au moins un chiffre</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700 text-[16px]">
                        check_circle
                      </span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Au moins un caractère spécial (@, #, !, etc.)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 pt-1">
                  <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="confirmPassword">
                    {" Confirmer le nouveau mot de passe "}
                    <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <input className="w-full h-11 sm:h-12 pl-4 pr-11 bg-surface-container-low text-primary rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all" id="confirmPassword" type="password" defaultValue="SanctaMaria2025#" />
                    {" "}
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 text-emerald-700">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    {" "}
                    <span className="font-label-sm text-label-sm font-medium">Mots de passe identiques</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-sm space-y-space-md">
                <button className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#C9962C] hover:bg-[#B38323] text-on-primary font-title-md text-title-md font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] transition-all" type="submit">
                  <span>Enregistrer le mot de passe & Me connecter</span>
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <div className="text-center">
                  <a className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-primary hover:text-secondary font-medium transition-colors" href="#">
                    <span className="material-symbols-outlined text-[18px]">west</span>
                    {" "}
                    <span>Annuler et retourner à la connexion</span>
                  </a>
                </div>
              </div>
            </form>
            <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-md -mb-space-md sm:-mx-space-xl sm:-mb-space-xl p-space-md text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                  support_agent
                </span>
                <p className="font-label-md text-label-md">
                  {" Besoin d'aide ? Contactez l'Aumônerie Diocésaine au "}
                  <a className="font-semibold text-primary underline underline-offset-2" href="tel:+2250700000000">
                    (+225) 07 00 00 00 00
                  </a>
                </p>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant max-w-sm mx-auto">
                {" Plateforme conforme aux chartes pastorales de la CECCI et dispositions statutaires du Droit Canonique. "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="w-full text-center pb-space-sm">
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        © Diocèses de Côte d'Ivoire • Commission Nationale CV-AV
      </p>
    </div>
  </div>
    </div>
  );
}
