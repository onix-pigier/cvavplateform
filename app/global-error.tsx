"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <html lang="fr"><body><main className="flex min-h-screen items-center justify-center bg-surface px-4 text-center"><div><h1 className="font-headline-lg text-headline-lg text-primary">Service temporairement indisponible</h1><p className="mt-3 text-on-surface-variant">Réessayez dans un instant.</p><button className="mt-6 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary" onClick={reset}>Réessayer</button></div></main></body></html>;
}
