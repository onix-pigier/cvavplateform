import Link from "next/link";

export default function NotFound() {
  return <main className="flex min-h-screen items-center justify-center bg-surface px-4 text-center"><div><p className="text-sm font-semibold uppercase tracking-widest text-secondary">404</p><h1 className="mt-3 font-headline-lg text-headline-lg text-primary">Page introuvable</h1><p className="mt-3 text-on-surface-variant">Cette page n’existe pas ou n’est plus disponible.</p><Link className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary" href="/">Retour à l’accueil</Link></div></main>;
}
