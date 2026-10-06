"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  { number: "01", title: "Réunions et vie d’équipe", text: "Les rencontres régulières donnent un rythme au parcours de chaque branche." },
  { number: "02", title: "Formations et transmission", text: "Les responsables accompagnent les jeunes avec des repères adaptés à leur âge." },
  { number: "03", title: "Actions solidaires", text: "Le service se construit dans les paroisses et dans les initiatives du diocèse." },
  { number: "04", title: "Cérémonies et étapes", text: "Les temps forts marquent les passages et les engagements du mouvement." },
];

export function ActivityCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index] ?? slides[0]!;

  function move(step: number) {
    setIndex((current) => (current + step + slides.length) % slides.length);
  }

  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[1.5rem] bg-primary text-on-primary shadow-[0_18px_60px_rgba(7,26,59,0.18)] sm:min-h-[560px] sm:rounded-[2rem]">
      <Image
        src="/assets/image-placeholder.svg"
        alt="Visuel temporaire de la galerie CV-AV"
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-primary/60" aria-hidden="true" />
      <div className="relative flex min-h-[460px] flex-col justify-between p-6 sm:min-h-[560px] sm:p-12 lg:p-16 xl:p-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-fixed">La vie du mouvement</p>
            <p className="mt-3 text-sm text-primary-fixed">Album CV-AV · {slide.number}/{String(slides.length).padStart(2, "0")}</p>
          </div>
          <span className="rounded-full border border-primary-fixed-dim px-4 py-2 text-xs text-primary-fixed">Photos validées à publier</span>
        </div>

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-tertiary-fixed">{slide.number}</p>
          <h3 className="mt-4 max-w-3xl font-display-lg text-display-lg sm:text-6xl">{slide.title}</h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-fixed sm:text-lg">{slide.text}</p>
          <p className="mt-7 max-w-lg border-l-2 border-tertiary-fixed pl-4 text-xs leading-5 text-primary-fixed">La photo de cette activité sera chargée par un responsable après validation du droit à l’image.</p>
        </div>

        <div className="flex flex-col gap-5 border-t border-primary-fixed-dim pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1.5" aria-label="Position dans la galerie">
            {slides.map((item, itemIndex) => <button key={item.number} type="button" aria-label={`Afficher ${item.title}`} aria-current={itemIndex === index} onClick={() => setIndex(itemIndex)} className={`h-1.5 transition-all ${itemIndex === index ? "w-12 bg-tertiary-fixed" : "w-5 bg-primary-fixed-dim"}`} />)}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-primary-fixed sm:inline">Naviguer dans les activités</span>
            <button type="button" onClick={() => move(-1)} aria-label="Activité précédente" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-fixed-dim text-lg hover:bg-primary-container">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Activité suivante" className="flex h-11 w-11 items-center justify-center rounded-full bg-tertiary-fixed-dim text-lg text-on-tertiary-fixed hover:bg-tertiary-fixed">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
