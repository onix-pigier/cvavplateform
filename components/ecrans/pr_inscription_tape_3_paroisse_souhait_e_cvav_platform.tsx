// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/pr_inscription_tape_3_paroisse_souhait_e_cvav_platform/code.html
// par scripts/convert-stitch.mjs — NE PAS éditer à la main.
// Titre : Pr inscription tape 3 paroisse souhait e cvav platform — Domaine : Portail & Inscriptions

export default function PrInscriptionTape3ParoisseSouhaitECvavPlatform() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
  <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(4,21,52,0.04)] pt-safe">
    <div className="h-16 px-gutter-mobile flex items-center justify-between">
      <div className="flex items-center gap-space-sm">
        <a aria-label="Retour" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </a>
        <div className="flex items-center gap-space-sm">
          <img alt="Official emblem logo for CV-AV (Cœurs Vaillants – Âmes Vaillantes) movement Côte d'Ivoire. Clean, dignified ecclesiastical vector emblem featuring a stylized…" className="h-8 w-auto object-contain" src="/assets/cvav-emblem.png" />
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
              CV-AV CI
            </span>
            <span className="font-title-md text-title-md text-primary leading-tight">
              Étape 3 Engagement Et Contact
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-xs">
        <a aria-label="Quitter le formulaire" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:text-error hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </a>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
  <main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
    <div className="flex flex-col w-full px-gutter-mobile py-space-md">
      <div className="w-full bg-surface-container-lowest rounded-2xl p-space-md shadow-sm mb-space-md">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-surface-container rounded-full z-0" />
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-on-tertiary-container rounded-full z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm ring-4 ring-surface-container-lowest">
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary mt-1">Identité</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm ring-4 ring-surface-container-lowest">
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary mt-1">Coordonnées</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-on-tertiary-container flex items-center justify-center text-surface-container-lowest shadow-sm ring-4 ring-surface-container-lowest">
              <span className="font-label-md text-label-md font-semibold">3</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold mt-1">
              Paroisse
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col">
        <div className="flex items-start gap-space-sm mb-space-md">
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[22px]">church</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
              Où souhaites-tu rejoindre le mouvement ?
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-0.5">
              Sélectionne ton territoire pastoral pour rattacher ta section.
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-space-md" id="pre-inscription-step3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-label-md text-label-md text-primary font-medium" htmlFor="doyenne-select">
                Doyenné
              </label>
              {" "}
              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">map</span>
                {" Diocèse de Daloa "}
              </span>
            </div>
            <div className="relative w-full">
              <select className="w-full h-12 pl-3.5 pr-10 bg-surface-container-low text-on-surface rounded-xl font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#ba891f] transition-all cursor-pointer" id="doyenne-select" name="doyenne" defaultValue="cathedrale" />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-secondary">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-label-md text-label-md text-primary font-medium" htmlFor="paroisse-select">
                Paroisse
              </label>
              {" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[12px]">filter_list</span>
                {" Filtrée selon le doyenné "}
              </span>
            </div>
            <div className="relative w-full">
              <select className="w-full h-12 pl-3.5 pr-10 bg-surface-container-low text-on-surface rounded-xl font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#ba891f] transition-all cursor-pointer" id="paroisse-select" name="paroisse" defaultValue="cathedrale-christ-roi" />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-secondary">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[18px]">group</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-secondary truncate">
                Section suggérée selon l'âge
              </span>
              {" "}
              <span className="font-title-md text-title-md text-primary truncate">
                Cœurs Vaillants (9 - 12 ans)
              </span>
            </div>
            <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm font-semibold">
              {" Auto "}
            </span>
          </div>
          <div className="relative w-full h-28 rounded-xl overflow-hidden shadow-inner">
            <img className="w-full h-full object-cover" data-alt="Young joyful West African boys and girls wearing formal scout-style neckerchiefs smiling warmly in front of a modern cathedral nave in Cote d Ivoire. Warm golden sunlight streaming through sanctuary windows illuminating navy blue uniforms and golden insignia, dignified community ecclesiastical scene." src="/assets/image-placeholder.svg" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent flex items-end p-space-sm">
              <div className="flex items-center gap-1.5 text-on-primary">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">place</span>
                {" "}
                <span className="font-label-sm text-label-sm">
                  Section paroissiale de Daloa • Accueil bienveillant
                </span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface-container rounded-xl p-space-md flex gap-space-sm">
            <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[15px]">info</span>
            </div>
            <div className="flex flex-col">
              <p className="font-label-md text-label-md text-primary font-semibold">
                Ta demande sera examinée par un responsable avant validation.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                {" Ton dossier sera transmis au Chef de Section de la paroisse pour convocation et scellement pastoral. "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-space-xs mt-space-xs gap-space-sm">
            <button className="h-11 px-space-md rounded-full text-secondary hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-1 font-label-md text-label-md" type="button">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              {" "}
              <span>Retour</span>
            </button>
            {" "}
            <button className="flex-1 h-12 rounded-full bg-on-tertiary-container hover:bg-tertiary-container text-surface-container-lowest font-label-lg text-label-lg font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2" id="btn-submit" type="submit">
              <span>Envoyer ma pré-inscription</span>
              {" "}
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center text-center mt-space-md py-space-sm">
        <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">verified</span>
          {" "}
          <span>CVAV Diocèse de Daloa • Action Catholique des Enfants</span>
        </div>
        <span className="font-body-sm text-body-sm text-secondary/80 mt-0.5">« Toujours Tout Droit ! »</span>
      </div>
    </div>
  </main>
    </div>
  );
}
