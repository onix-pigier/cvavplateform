// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/mot_de_passe_oubli_r_initialisation_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Mot de passe oubli r initialisation cvav platform — Domaine : Authentification

export default function MotDePasseOubliRInitialisationCvavPlatform() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen flex flex-col justify-between selection:bg-secondary-container selection:text-on-secondary-container">
  <main className="w-full flex-1 flex flex-col items-center justify-center p-margin-mobile md:p-margin">
    <div className="flex flex-col w-full items-center justify-center relative">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-tertiary-fixed-dim/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="w-full max-w-[490px] mx-auto">
        <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-on-tertiary-container to-primary-container" />
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 flex items-center justify-center p-2 rounded-2xl bg-surface-container-low shadow-sm">
              <img alt="Emblème Officiel CV-AV Diocèse de Daloa" className="h-14 w-14 object-contain" src="/assets/cvav-emblem.png" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm tracking-wide mb-3">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              {" "}
              <span>Portail Pastoral Sécurisé • Diocèse de Daloa</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-primary-container mb-2 tracking-tight">
              {" Mot de passe oublié ? "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              {" Saisissez votre identifiant diocésain, votre adresse e-mail pastorale ou votre numéro de téléphone enregistré pour recevoir votre code d'accès temporaire. "}
            </p>
          </div>
          <form className="mt-8 space-y-6" id="reset-form">
            <div className="space-y-1.5 text-left">
              <label className="block font-label-lg text-label-lg text-primary-container" htmlFor="identifier">
                {" Identifiant, E-mail ou Téléphone "}
                <span aria-hidden="true" className="text-error font-bold">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 flex items-center pointer-events-none text-secondary">
                  <span className="material-symbols-outlined text-[20px]">badge</span>
                </div>
                <input autoComplete="username" className="w-full h-12 pl-11 pr-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline transition-all duration-200 outline-none focus:bg-surface-container-lowest focus:shadow-md" id="identifier" name="identifier" placeholder="ex: 0708091011 ou nom@diocese-daloa.ci" required type="text" />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-0.5">
                {" Compatible numéro mobile national (Côte d'Ivoire) ou matricule paroissial. "}
              </p>
            </div>
            <div className="space-y-2.5 text-left">
              <span className="block font-label-md text-label-md text-primary-container">
                {" Canal de transmission du code de sécurité : "}
              </span>
              <div aria-label="Canal de délivrance du code" className="grid grid-cols-1 gap-2.5" role="radiogroup">
                <label className="relative flex items-start gap-3.5 p-3.5 rounded-xl cursor-pointer transition-all duration-200 bg-surface-container-low hover:bg-surface-container" id="channel-sms-card">
                  <input defaultChecked className="mt-1 h-4 w-4 text-on-tertiary-container accent-on-tertiary-container cursor-pointer" name="delivery_channel" type="radio" defaultValue="sms" />
                  <div className="flex-1 min-w-0 pr-16">
                    <div className="flex items-center gap-1.5 font-label-lg text-label-lg text-primary-container">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        smartphone
                      </span>
                      {" "}
                      <span className="truncate">Par SMS (Téléphone de confiance)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {" Code instantané par SMS sur votre mobile certifié. "}
                    </p>
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container font-label-sm text-label-sm font-semibold tracking-wide">
                    {" Recommandé "}
                  </span>
                </label>
                <label className="relative flex items-start gap-3.5 p-3.5 rounded-xl cursor-pointer transition-all duration-200 bg-surface-container-low hover:bg-surface-container" id="channel-email-card">
                  <input className="mt-1 h-4 w-4 text-on-tertiary-container accent-on-tertiary-container cursor-pointer" name="delivery_channel" type="radio" defaultValue="email" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 font-label-lg text-label-lg text-primary-container">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        mark_email_read
                      </span>
                      {" "}
                      <span className="truncate">Par E-mail pastoral</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {" Lien sécurisé et clé numérique transmis sur votre messagerie. "}
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-secondary-container/40 text-on-surface flex items-start gap-3 text-left">
              <span className="material-symbols-outlined text-secondary text-[22px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                {" info "}
              </span>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                {" Un code d'authentification sécurisé à 6 chiffres (OTP) à usage unique valable "}
                <strong>15 minutes</strong>
                {" vous sera délivré sous 60 secondes. En cas d'inaccessibilité de votre numéro, veuillez contacter le secrétariat de votre paroisse. "}
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <button className="w-full h-12 px-6 rounded-full bg-on-tertiary-container hover:bg-on-tertiary-fixed-variant text-on-tertiary font-label-lg text-label-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]" id="submit-btn" type="submit">
                <span>Envoyer le code de réinitialisation</span>
                {" "}
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  {" arrow_forward "}
                </span>
              </button>
              <div className="pt-1 flex items-center justify-center">
                <a className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-primary-container hover:text-on-tertiary-container transition-colors duration-150 group" href="#">
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-150 group-hover:-translate-x-1">
                    {" arrow_back "}
                  </span>
                  {" "}
                  <span>Retour à l'écran de connexion</span>
                </a>
              </div>
            </div>
          </form>
          <div className="hidden mt-6 p-4 rounded-xl bg-surface-container text-primary-container text-left space-y-2" id="success-banner">
            <div className="flex items-center gap-2 text-on-tertiary-container font-headline-sm text-headline-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              {" "}
              <span>Demande transmise avec succès</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {" Le code de validation temporaire a été acheminé. Veuillez vérifier vos messages puis saisir votre code sur la fenêtre suivante. "}
            </p>
          </div>
          <div className="mt-8 pt-6 bg-surface-container-low rounded-xl p-4 text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-primary-container font-label-md text-label-md font-medium">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                support_agent
              </span>
              {" "}
              <span>Besoin d'aide ? Contactez l'Aumônerie Diocésaine au</span>
            </div>
            <a className="inline-block font-label-lg text-label-lg font-semibold text-on-tertiary-container hover:underline" href="tel:+2250700000000">
              {" (+225) 07 00 00 00 00 "}
            </a>
            <p className="font-label-sm text-label-sm text-on-surface-variant pt-1">
              {" Plateforme certifiée • Protection des données pastorales conforme au droit canonique et à la législation CECCI. "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="w-full py-space-md text-center bg-transparent">
    <div className="max-w-7xl mx-auto px-margin-mobile flex flex-col items-center justify-center gap-space-xs">
      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
        <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
        <span>Aumônerie Nationale • Coordination Diocésaine CV-AV Côte d'Ivoire</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">
        © 2025 Mouvement Cœurs Vaillants – Âmes Vaillantes. Tous droits réservés.
      </p>
    </div>
  </footer>
    </div>
  );
}
