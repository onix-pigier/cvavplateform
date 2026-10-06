// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/connexion_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Connexion cvav platform — Domaine : Authentification

export default function ConnexionCvavPlatform() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col justify-center items-center">
  <main className="flex flex-col relative w-full max-w-md min-h-screen px-margin-mobile pt-safe pb-safe justify-center bg-surface">
    <div className="flex flex-col w-full items-center justify-center py-space-md">
      <div className="w-full max-w-[400px] bg-surface-container-lowest rounded-2xl p-7 sm:p-8 shadow-[0_4px_20px_-2px_rgba(27,42,74,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] border border-surface-container-highest transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-16 h-16 mb-2 rounded-2xl bg-surface-container-low flex items-center justify-center p-2 shadow-sm">
            <img alt="Emblème officiel CV-AV" className="w-full h-full object-contain" src="/assets/cvav-emblem.png" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-primary mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
            {" "}
            <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold text-primary">
              Diocèse de Daloa
            </span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">Plateforme Pastorale • CV-AV</p>
        </div>
        <div className="text-center mt-4 mb-6">
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Connexion</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Accédez à votre espace pastoral sécurisé
          </p>
        </div>
        <form className="flex flex-col" id="loginForm">
          <div className="flex flex-col">
            <label className="font-label-lg text-label-lg font-medium text-on-surface mb-1.5 flex items-center justify-between" htmlFor="identifier">
              <span>Identifiant ou e-mail</span>
              {" "}
              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                Ex: ML-4902
              </span>
            </label>
            <div className="relative rounded-xl transition-all duration-200">
              <input className="w-full h-11 px-4 rounded-xl font-body-md text-body-md text-on-surface bg-surface-container-lowest border border-outline-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 placeholder:text-outline transition-all" id="identifier" name="identifier" placeholder="nom@exemple.ci ou matricule" required type="text" />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-label-lg text-label-lg font-medium text-on-surface mb-1.5" htmlFor="password">
              {" Mot de passe "}
            </label>
            <div className="relative rounded-xl">
              <input className="w-full h-11 pl-4 pr-11 rounded-xl font-body-md text-body-md text-on-surface bg-surface-container-lowest border border-outline-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 placeholder:text-outline transition-all tracking-wider" id="password" name="password" placeholder="••••••••" required type="password" />
              {" "}
              <button aria-label="Afficher ou masquer le mot de passe" className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-on-surface-variant transition-colors focus:outline-none" id="togglePasswordBtn" type="button">
                <span className="material-symbols-outlined text-[20px]" id="eyeIcon">visibility</span>
              </button>
            </div>
          </div>
          <div className="text-right mt-2 mb-6">
            <a className="font-label-md text-label-md font-medium text-primary hover:text-on-tertiary-container hover:underline transition-colors" href="#recuperation">
              {" Mot de passe oublié ? "}
            </a>
          </div>
          <button className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-on-tertiary-container hover:bg-[#a67a1b] active:scale-[0.98] text-white font-headline-sm text-label-lg font-semibold tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer" id="submitBtn" type="submit">
            <span>Se connecter</span>
            {" "}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </form>
        <div className="relative flex items-center justify-center my-6">
          <div className="w-full border-t border-surface-container-highest" />
          <span className="absolute px-3 bg-surface-container-lowest font-label-sm text-label-sm text-outline uppercase tracking-wider">
            {" Pas encore de compte ? "}
          </span>
        </div>
        <div className="text-center">
          <a className="font-title-md text-title-md text-primary font-semibold underline decoration-2 underline-offset-4 hover:text-on-tertiary-container hover:decoration-on-tertiary-container transition-all cursor-pointer" href="#pre-inscription">
            {" Se pré-inscrire "}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 text-center space-y-3">
        <a className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-secondary hover:text-primary transition-colors cursor-pointer group" href="#accueil">
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          {" "}
          <span>Retour à l'accueil</span>
        </a>
        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm opacity-80 pt-1">
          <span className="material-symbols-outlined text-[15px] text-on-tertiary-container">
            verified_user
          </span>
          {" "}
          <span>CVAV Diocèse de Daloa • Pastorale sécurisée</span>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
