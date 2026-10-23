import Image from "next/image";

/** Keep the admin frame present while a route's server data is loading. */
export function AdminWorkspaceLoading({ label }: { label: string }) {
  return <div className="min-h-screen bg-surface text-on-surface">
    <header className="fixed inset-x-0 top-0 z-30 h-16 border-b border-outline-variant/40 bg-primary text-on-primary">
      <div className="mx-auto flex h-full items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Image src="/assets/public/logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
        <span><span className="block text-sm font-semibold">CV-AV · Diocèse de Daloa</span><span className="hidden text-xs text-primary-fixed sm:block">Espace d’administration</span></span>
      </div>
    </header>

    <aside aria-hidden="true" className="fixed bottom-0 left-0 top-16 z-20 hidden w-64 flex-col border-r border-outline-variant/60 bg-surface-container-lowest px-4 py-6 xl:w-72 lg:flex">
      <div className="mb-5 rounded-2xl bg-secondary-container p-4"><div className="h-3 w-32 animate-pulse rounded bg-primary/10" /><div className="mt-3 h-3 w-44 animate-pulse rounded bg-primary/10" /><div className="mt-2 h-3 w-36 animate-pulse rounded bg-primary/10" /></div>
      <div className="min-h-0 flex-1 space-y-5 overflow-hidden py-1 px-3">
        {Array.from({ length: 3 }, (_, group) => <div key={group} className="space-y-2"><div className="h-2 w-20 animate-pulse rounded bg-surface-container-high" />{Array.from({ length: group === 0 ? 1 : 2 }, (_, item) => <div key={item} className="h-11 animate-pulse rounded-xl bg-surface-container-low" />)}</div>)}
      </div>
      <div className="mt-4 shrink-0 border-t border-outline-variant pt-4"><div className="h-3 w-28 animate-pulse rounded bg-surface-container-high" /><div className="mt-2 h-3 w-36 animate-pulse rounded bg-surface-container-high" /></div>
    </aside>

    <div className="fixed inset-x-0 top-16 z-20 border-b border-outline-variant bg-surface-container-lowest px-4 py-2 lg:hidden" aria-hidden="true"><div className="h-11 animate-pulse rounded-xl bg-surface-container-low" /></div>
    <main aria-label={`Chargement : ${label}`} aria-busy="true" className="min-w-0 px-4 pb-12 pt-32 sm:px-6 lg:ml-64 lg:px-8 lg:pt-24 xl:ml-72">
      <div className="mx-auto max-w-[1500px] animate-pulse motion-reduce:animate-none">
        <div className="h-3 w-40 rounded bg-surface-container-high" /><div className="mt-3 h-10 max-w-md rounded-xl bg-surface-container-high" /><div className="mt-3 h-4 max-w-2xl rounded bg-surface-container-high" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <div key={index} className="h-36 rounded-2xl border border-outline-variant bg-surface-container-lowest p-5"><div className="h-3 w-28 rounded bg-surface-container-high" /><div className="mt-7 h-8 w-20 rounded bg-surface-container-high" /><div className="mt-3 h-3 w-40 rounded bg-surface-container-high" /></div>)}</div>
        <div className="mt-8 h-64 rounded-2xl border border-outline-variant bg-surface-container-lowest" />
      </div>
    </main>
  </div>;
}
