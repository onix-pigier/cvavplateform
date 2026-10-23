"use client";

export default function AdminError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main role="alert" className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-12">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Espace d’administration</p>
    <h1 className="mt-2 font-headline-lg text-headline-lg text-primary">Cette page n’a pas pu être chargée</h1>
    <p className="mt-3 text-sm leading-6 text-on-surface-variant">Vos données n’ont pas été modifiées. Vous pouvez réessayer; si le problème continue, contactez l’administrateur du portail.</p>
    <button type="button" onClick={reset} className="mt-6 min-h-11 w-fit rounded-full bg-primary px-5 text-sm font-semibold text-on-primary hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Réessayer</button>
  </main>;
}
