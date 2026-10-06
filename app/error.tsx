"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="flex min-h-screen items-center justify-center bg-surface px-4 text-center"><div><p className="text-sm font-semibold uppercase tracking-widest text-error">Erreur</p><h1 className="mt-3 font-headline-lg text-headline-lg text-primary">Une erreur est survenue</h1><p className="mt-3 text-on-surface-variant">L’incident a été enregistré. Vous pouvez réessayer.</p><button className="mt-6 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary" onClick={reset}>Réessayer</button></div></main>;
}
