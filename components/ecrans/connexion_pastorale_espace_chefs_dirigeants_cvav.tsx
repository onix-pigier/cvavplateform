// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/connexion_pastorale_espace_chefs_dirigeants_cvav/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Connexion pastorale espace chefs dirigeants cvav — Domaine : Authentification

export default function ConnexionPastoraleEspaceChefsDirigeantsCvav() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex items-center justify-center p-gutter">
  <main className="w-full max-w-lg bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(27,42,74,0.12)]">
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col items-center w-full">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col items-center text-center w-full mb-6">
          <div className="relative mb-4 group">
            <div className="w-20 h-20 rounded-2xl bg-surface-container-low shadow-sm flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105">
              <img alt="Emblème Officiel CV-AV Côte d'Ivoire" className="w-full h-full object-contain" src="/assets/cvav-emblem.png" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-container text-white shadow-sm">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-sm">church</span>
            {" "}
            <span>Archidiocèse d'Abidjan</span>
          </div>
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight mb-1.5">
            {" Espace Encadrement & Gestion Pastorale "}
          </h1>
          <p className="font-body-sm text-body-sm text-secondary max-w-sm">
            {" Portail réservé aux Chefs de Section, Responsables Paroissiaux et Aumôniers diocésains. "}
          </p>
        </div>
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary flex items-center justify-between" htmlFor="identifier">
              <span>
                {"Identifiant Diocésain / Code Chef "}
                <span className="text-error">*</span>
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-secondary">Ex: CHF-ABJ-0428</span>
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-secondary pointer-events-none text-[20px]">
                badge
              </span>
              {" "}
              <input className="w-full h-11 pl-11 pr-4 bg-surface-container-lowest rounded-xl shadow-sm text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:bg-surface-container-lowest transition-all" id="identifier" placeholder="Code d'investiture ou courriel ecclésial" required type="text" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-primary flex items-center justify-between" htmlFor="password">
              <span>
                {"Mot de passe confidentiel "}
                <span className="text-error">*</span>
              </span>
              {" "}
              <a className="font-label-sm text-label-sm text-on-tertiary-container hover:underline" href="#">
                {" Code d'accès oublié ? "}
              </a>
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-secondary pointer-events-none text-[20px]">
                lock
              </span>
              {" "}
              <input className="w-full h-11 pl-11 pr-11 bg-surface-container-lowest rounded-xl shadow-sm text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none transition-all" id="password" placeholder="••••••••••••" required type="password" />
              {" "}
              <button aria-label="Afficher ou masquer le mot de passe" className="absolute right-3 text-secondary hover:text-primary transition-colors p-1" id="togglePassword" type="button">
                <span className="material-symbols-outlined text-[20px]" id="pwdIcon">visibility</span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-3.5 flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-on-tertiary-container text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_tree
              </span>
              {" "}
              <span className="font-label-md text-label-md text-primary font-semibold">
                Juridiction & Mission pastorale active
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col">
                <label className="font-label-sm text-label-sm text-secondary mb-1" htmlFor="diocese">
                  Diocèse d'érection
                </label>
                <div className="relative">
                  <select className="w-full h-9 pl-3 pr-8 bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none appearance-none cursor-pointer" id="diocese" defaultValue="Archidiocèse d'Abidjan" />
                  {" "}
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-secondary pointer-events-none text-base">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-secondary mb-1" htmlFor="parish">
                    Paroisse d'ancrage
                  </label>
                  <div className="relative">
                    <select className="w-full h-9 pl-3 pr-8 bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none appearance-none cursor-pointer" id="parish" defaultValue="St-Jean de Cocody" />
                    {" "}
                    <span className="material-symbols-outlined absolute right-2.5 top-2 text-secondary pointer-events-none text-base">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-secondary mb-1" htmlFor="branch">
                    Branche d'encadrement
                  </label>
                  <div className="relative">
                    <select className="w-full h-9 pl-3 pr-8 bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none appearance-none cursor-pointer" id="branch" defaultValue="Cœurs Vaillants (10 - 14 ans)" />
                    {" "}
                    <span className="material-symbols-outlined absolute right-2.5 top-2 text-secondary pointer-events-none text-base">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="flex items-center gap-2.5 cursor-pointer mt-1 group">
            <input className="w-4 h-4 rounded text-on-tertiary-container focus:ring-0 accent-[#C9962C] cursor-pointer" id="rememberSession" type="checkbox" />
            {" "}
            <span className="font-body-sm text-body-sm text-secondary group-hover:text-primary transition-colors">
              {" Maintenir la session pastorale active sur cet ordinateur de paroisse "}
            </span>
          </label>
          {" "}
          <button className="w-full h-[46px] rounded-full bg-[#C9962C] hover:bg-[#B38323] active:scale-[0.98] text-white font-title-md text-title-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all mt-1" type="submit">
            <span className="material-symbols-outlined text-[20px]">login</span>
            {" "}
            <span>Se connecter à la console paroissiale</span>
          </button>
          <div className="flex items-center justify-center text-center mt-1">
            <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" href="#">
              <span className="material-symbols-outlined text-on-tertiary-container text-base">sms</span>
              {" "}
              <span>Activer mon mandat d'encadrant (Code Aumônerie par SMS)</span>
            </a>
          </div>
          <div className="bg-surface-container-low rounded-xl p-3 flex items-start gap-2.5 text-left mt-2">
            <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
              security
            </span>
            <p className="font-body-sm text-[11px] leading-[15px] text-secondary">
              <strong className="text-primary font-medium">Contrôle canonique :</strong>
              {" Accès tracé conformément au Règlement Intérieur de l'Aumônerie Diocésaine et de la CECCI. Toute connexion frauduleuse est passible de sanctions canoniques et administratives. "}
            </p>
          </div>
        </form>
        <div className="mt-6 pt-4 w-full flex flex-col items-center justify-center text-center bg-surface-container-lowest">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9962C]" />
            <p className="font-headline-sm text-headline-sm text-primary italic tracking-wide">
              {" « Toujours Joyeux, Servir en Tout ! » "}
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9962C]" />
          </div>
          <p className="font-label-sm text-label-sm text-secondary/80">
            {" © Archidiocèse d'Abidjan • Commission Diocésaine pour l'Apostolat des Enfants (CV-AV CI) "}
          </p>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
}
