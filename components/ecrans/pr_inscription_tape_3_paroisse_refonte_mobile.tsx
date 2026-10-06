// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pr_inscription_tape_3_paroisse_refonte_mobile/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pr inscription tape 3 paroisse refonte mobile — Domaine : Portail & Inscriptions

export default function PrInscriptionTape3ParoisseRefonteMobile() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased">
  <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(4,21,52,0.04)] pt-safe">
    <div className="h-16 px-space-sm flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-xs min-w-0">
        <button aria-label="Retour" className="w-11 h-11 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all focus:outline-none">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-7 w-auto object-contain hidden sm:block" src="/assets/cvav-emblem.png" />
        <h1 className="font-title-md text-title-md text-primary truncate max-w-[200px] sm:max-w-xs">
          Pré Inscription Cv Av
        </h1>
      </div>
      <div className="flex items-center gap-space-xs flex-shrink-0">
        <button aria-label="Fermer" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors focus:outline-none">
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
    <div className="flex flex-col w-full pb-8">
      <div className="px-space-md pt-2 pb-4">
        <div className="bg-surface-container-low rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                3
              </span>
              {" "}
              <span className="font-label-md text-label-md text-primary font-semibold tracking-wide uppercase">
                Étape 3 sur 3
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-secondary-container/50 px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-[15px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              {" "}
              <span className="font-label-sm text-label-sm text-primary font-medium">100% complétée</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 h-1.5 w-full">
            <div className="bg-primary rounded-full" />
            <div className="bg-primary rounded-full" />
            <div className="bg-primary rounded-full" />
          </div>
          <p className="font-body-sm text-body-sm text-secondary mt-2.5 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
              stars
            </span>
            {" Dernière formalité diocésaine avant accueil officiel "}
          </p>
        </div>
      </div>
      <div className="px-space-md pt-1 pb-4">
        <div className="relative overflow-hidden bg-primary-container text-on-primary rounded-2xl p-5 shadow-md">
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-tertiary-fixed/10 pointer-events-none blur-xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-surface-container-lowest/15 backdrop-blur-sm px-2.5 py-1 rounded-full text-tertiary-fixed font-label-sm text-label-sm mb-2.5">
              <span className="material-symbols-outlined text-[14px]">church</span>
              {" Diocèse de Daloa • Côte d'Ivoire "}
            </div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-surface-container-lowest font-semibold tracking-tight">
              {" Où souhaites-tu rejoindre le mouvement ? "}
            </h2>
            <p className="font-body-md text-body-md text-surface-variant mt-1.5 leading-relaxed">
              {" Choisis ton doyenné pour rattacher l'enfant à sa communauté de base et rencontrer son équipe locale. "}
            </p>
          </div>
        </div>
      </div>
      <div className="px-space-md space-y-4">
        <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <label className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5" htmlFor="doyenne-select">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                account_tree
              </span>
              {" Doyenné pastoral "}
              <span className="text-error font-bold">*</span>
            </label>
            {" "}
            <span className="font-label-sm text-label-sm text-secondary">Région Ouest</span>
          </div>
          <div className="relative">
            <select className="w-full h-12 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl px-3.5 pr-11 appearance-none focus:outline-none transition-all" id="doyenne-select" defaultValue="cathedrale" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-secondary">
              <span className="material-symbols-outlined text-[22px]">expand_more</span>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-secondary">info</span>
            {" Regroupe 5 paroisses de la zone centrale. "}
          </p>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <label className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5" htmlFor="paroisse-select">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">location_on</span>
              {" Paroisse de rattachement "}
              <span className="text-error font-bold">*</span>
            </label>
            {" "}
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant" id="paroisse-counter">
              3 disponibles
            </span>
          </div>
          <div className="relative">
            <select className="w-full h-12 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl px-3.5 pr-11 appearance-none focus:outline-none transition-all" id="paroisse-select" defaultValue="p1" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-secondary">
              <span className="material-symbols-outlined text-[22px]">keyboard_arrow_down</span>
            </div>
          </div>
          <div className="mt-3 bg-surface-container-low/70 rounded-xl p-3 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-container text-surface-container-lowest flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-label-md text-label-md text-primary font-semibold truncate" id="parish-label-display">
                Cathédrale Christ-Roi
              </p>
              <p className="font-body-sm text-body-sm text-secondary truncate">
                Aumônerie diocésaine active • 140 membres
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-secondary">schedule</span>
                {" Rencontre chaque samedi de 15h00 à 17h30 "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <div>
                <h3 className="font-title-md text-title-md text-primary">Section suggérée selon l'âge</h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Calculé pour Paul-Marie (10 ans et demi)
                </p>
              </div>
            </div>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold tracking-wide">
              {" Recommandé "}
            </span>
          </div>
          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3.5">
            <img className="w-full h-full object-cover" data-alt="Groupe joyeux d'enfants ivoiriens membres des Cœurs Vaillants portant leurs uniformes et foulards sous la véranda ensoleillée d'une paroisse à Daloa, Côte d'Ivoire. Lumière chaude et bienveillante, ambiance fraternelle et dynamique catholique, photographie documentaire lumineuse et digne." src="/assets/image-placeholder.svg" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-surface-container-lowest">
              <div className="min-w-0">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed">
                  Branche Garçons
                </span>
                <p className="font-headline-sm text-headline-sm font-semibold truncate">
                  Section Cœurs Vaillants
                </p>
              </div>
              <span className="bg-surface-container-lowest/20 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm font-medium">
                9 à 12 ans
              </span>
            </div>
          </div>
          <div className="space-y-2 mb-3.5">
            <div className="flex items-center gap-2.5 bg-surface-container-low px-3 py-2 rounded-xl">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                diversity_1
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">
                Pédagogie active : courage, prière, franchise et service communautaire.
              </p>
            </div>
            <div className="flex items-center gap-2.5 bg-surface-container-low px-3 py-2 rounded-xl">
              <span className="material-symbols-outlined text-[18px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                family_restroom
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">
                Accompagnateurs formés par la Direction Diocésaine CV-AV.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-secondary-container/40 p-3 rounded-xl">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-label-md text-primary font-semibold">
                  Accueil pastoral garanti
                </p>
                <p className="font-body-sm text-body-sm text-secondary truncate">
                  Kit de bienvenue et carnet remis au premier rassemblement
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <label className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5" htmlFor="parent-notes">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">notes</span>
              <span className="">Remarques ou attentes particulières</span>
            </label>
            <span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded-full">
              Facultatif
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
            Partagez vos souhaits particuliers, besoins spécifiques ou disponibilités pour soutenir la vie de la section.
          </p>
          <div className="relative">
            <textarea className="w-full min-h-[96px] bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl p-3.5 focus:outline-none transition-all resize-none placeholder:text-on-surface-variant/60" id="parent-notes" name="parent_notes" placeholder="Précisez ici les attentes éducatives, souhaits particuliers ou disponibilités des parents pour accompagner l'équipe..." rows={3} defaultValue="" />
          </div>
        </div>
        <div className="bg-tertiary-fixed/30 rounded-2xl p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                assignment_turned_in
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-title-md text-title-md text-on-tertiary-fixed font-semibold mb-1">
                {" Validation par le Chef de Section "}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {" Cette pré-inscription sera directement transmise à l'équipe paroissiale choisie. Le Chef de Section prendra attache avec les parents sous 48h pour un premier contact fraternel. "}
              </p>
              <div className="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-on-tertiary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                {" Protection & encadrement certifiés CV-AV Côte d'Ivoire "}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-3.5 rounded-2xl shadow-sm flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
            <img className="w-full h-full object-cover" data-alt="Gros plan sur un carnet de chants et de promesses du mouvement catholique Cœurs Vaillants posé à côté d'une croix en bois et d'un foulard aux teintes ocre et bleu profond, lumière matinale douce, solennité et joie scoutique d'Afrique de l'Ouest." src="/assets/image-placeholder.svg" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-label-md text-label-md text-primary font-semibold truncate">
              Devise : « À cœur vaillant, rien d'impossible ! »
            </p>
            <p className="font-body-sm text-body-sm text-secondary truncate">
              Section affiliée à l'Aumônerie Diocésaine
            </p>
          </div>
          <span className="material-symbols-outlined text-secondary text-[20px]">flag</span>
        </div>
      </div>
      <div className="px-space-md pt-5 space-y-3">
        <button className="w-full h-[52px] rounded-full bg-tertiary-fixed-dim text-tertiary-container font-headline-sm text-headline-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all" id="submit-pre-inscription">
          <span className="">Envoyer ma pré-inscription</span>
          {" "}
          <span className="material-symbols-outlined text-[22px]">send</span>
        </button>
        <div className="flex items-center justify-center pt-1 pb-2">
          <button className="inline-flex items-center gap-1.5 py-2 px-4 rounded-full text-secondary hover:text-primary transition-colors font-label-lg text-label-lg">
            <span className="material-symbols-outlined text-[18px]">arrow_back_ios_new</span>
            {" "}
            <span className="">Modifier l'étape 2 (Identité enfant)</span>
          </button>
        </div>
        <p className="text-center font-body-sm text-body-sm text-on-surface-variant/80 px-4">
          {" En soumettant ce formulaire, vous acceptez la charte éducative et pastorale du mouvement CV-AV diocésain. "}
        </p>
      </div>
    </div>
  </main>
    </div>
  );
}
