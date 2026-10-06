"use client";

import { useState } from "react";
import { PublicPhoto } from "./PublicPhoto";

const slides = [
  { number: "01", src: "/assets/public/activites/activite-01.webp" },
  { number: "02", src: "/assets/public/activites/activite-02.webp" },
  { number: "03", src: "/assets/public/activites/activite-03.webp" },
];

export function ActivityCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index]!;

  function move(step: number) {
    setIndex((current) => (current + step + slides.length) % slides.length);
  }

  return (
    <div className="relative isolate min-h-[28rem] overflow-hidden rounded-feature bg-primary text-on-primary sm:min-h-[36rem]">
      <PublicPhoto src={slide.src} alt="Photographie d’une activité du mouvement CV-AV" label={`Ajouter la photo ${slide.number}`} className="absolute inset-0" sizes="(max-width: 768px) 100vw, 90vw" />
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
      <div className="relative flex min-h-[28rem] flex-col justify-between p-5 sm:min-h-[36rem] sm:p-10 lg:p-14">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-tertiary-fixed">Album du mouvement</p><p className="mt-2 text-sm text-primary-fixed">Activités CV-AV · Diocèse de Daloa</p></div>
          <span className="rounded-full border border-primary-fixed-dim/70 px-3 py-2 text-xs text-primary-fixed">{slide.number} / 03</span>
        </div>
        <div className="max-w-3xl" aria-live="polite" aria-atomic="true">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-tertiary-fixed">La vie en images</p>
          <h3 className="mt-4 max-w-2xl font-display-lg text-display-lg leading-tight sm:text-6xl">Grandir et servir, ensemble.</h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-fixed sm:text-lg">Les photos du mouvement seront publiées ici après ajout des visuels validés.</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary-fixed-dim/50 pt-4">
          <div className="flex gap-2" aria-label="Choisir une photo">
            {slides.map((item, itemIndex) => <button key={item.number} type="button" aria-label={`Afficher la photo ${item.number}`} aria-current={itemIndex === index ? "true" : undefined} onClick={() => setIndex(itemIndex)} className={`min-h-11 min-w-11 rounded-full border px-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-fixed ${itemIndex === index ? "border-tertiary-fixed bg-tertiary-fixed text-on-tertiary-fixed" : "border-primary-fixed-dim text-primary-fixed hover:bg-primary-container"}`}>{item.number}</button>)}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Photo précédente" className="min-h-11 min-w-11 rounded-full border border-primary-fixed-dim text-lg text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-fixed">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Photo suivante" className="min-h-11 min-w-11 rounded-full bg-tertiary-fixed-dim text-lg text-on-tertiary-fixed transition-colors hover:bg-tertiary-fixed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-fixed">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
