export default function Loading() {
  return <main className="flex min-h-screen items-center justify-center bg-surface px-4"><div className="w-full max-w-md animate-pulse space-y-4"><div className="h-4 w-32 rounded bg-surface-container-high" /><div className="h-10 w-3/4 rounded bg-surface-container-high" /><div className="h-24 rounded-2xl bg-surface-container-low" /><p className="text-center text-sm text-on-surface-variant">Chargement…</p></div></main>;
}
