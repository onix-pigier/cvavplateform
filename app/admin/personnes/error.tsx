"use client";

export default function PeopleRegistryError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main role="alert" className="mx-auto max-w-2xl rounded-2xl border border-error/30 bg-error-container/40 p-6 text-on-error-container sm:p-8">
    <p className="text-xs font-semibold uppercase tracking-wide">Registre des personnes</p>
    <h1 className="mt-2 text-xl font-semibold">Impossible de charger le registre</h1>
    <p className="mt-2 text-sm leading-6">Une erreur temporaire a interrompu le chargement. Réessayez ; si le problème continue, contactez l’administrateur.</p>
    <button type="button" onClick={() => reset()} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Réessayer</button>
  </main>;
}
