import type { PeriodFilter } from "@/lib/admin/period";

type Point = { month: string; memberships: number; activities: number; presences: number };
type SeriesKey = "memberships" | "activities" | "presences";
const series: { key: SeriesKey; label: string; color: string; surface: string }[] = [
  { key: "memberships", label: "Rattachements", color: "bg-primary", surface: "bg-primary-fixed" },
  { key: "activities", label: "Activités", color: "bg-secondary", surface: "bg-secondary-container" },
  { key: "presences", label: "Présences", color: "bg-tertiary-fixed-dim", surface: "bg-tertiary-fixed" },
];

export function AdminAnalyticsSection({ period, points, roleCode, scopeId }: { period: PeriodFilter; points: Point[]; roleCode: string; scopeId: string | null }) {
  const from = period.from.toISOString().slice(0, 10);
  const to = period.to.toISOString().slice(0, 10);
  const totals = Object.fromEntries(series.map(({ key }) => [key, points.reduce((sum, point) => sum + point[key], 0)])) as Record<SeriesKey, number>;
  const max = Math.max(1, ...points.flatMap((point) => series.map(({ key }) => point[key])));
  const hasData = Object.values(totals).some((value) => value > 0);

  return <section className="mt-8" aria-labelledby="activity-trends-title">
    <div className="flex flex-col gap-4 border-b border-outline-variant pb-4 xl:flex-row xl:items-end xl:justify-between">
      <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Suivi de l’activité</p><h2 id="activity-trends-title" className="mt-1 font-headline-lg text-headline-lg text-primary">Évolution du périmètre</h2><p className="mt-1 text-sm text-on-surface-variant">{period.label} · données issues des registres autorisés.</p></div>
      <form method="get" className="flex flex-wrap items-end gap-2 rounded-2xl border border-outline-variant bg-surface-container-lowest p-3">
        <input type="hidden" name="role" value={roleCode} /><input type="hidden" name="scopeId" value={scopeId ?? ""} />
        <label className="grid gap-1 text-xs font-medium text-on-surface-variant">Période<select name="period" defaultValue={period.value} className="min-h-10 rounded-xl border border-outline bg-surface px-3 text-sm text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="30d">30 jours</option><option value="90d">90 jours</option><option value="12m">12 mois</option><option value="year">Année civile</option><option value="custom">Personnalisée</option></select></label>
        <label className="grid gap-1 text-xs font-medium text-on-surface-variant">Du<input type="date" name="from" defaultValue={from} className="min-h-10 rounded-xl border border-outline bg-surface px-3 text-sm text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label>
        <label className="grid gap-1 text-xs font-medium text-on-surface-variant">Au<input type="date" name="to" defaultValue={to} className="min-h-10 rounded-xl border border-outline bg-surface px-3 text-sm text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label>
        <button className="min-h-10 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-container">Appliquer</button>
      </form>
    </div>

    <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.8fr)_minmax(16rem,0.8fr)]">
      <article className="min-w-0 rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-6" aria-labelledby="monthly-activity-title">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><h3 id="monthly-activity-title" className="font-title-lg text-title-lg text-primary">Registres mensuels</h3><p className="mt-1 text-sm text-on-surface-variant">Comparaison des événements enregistrés par mois</p></div><div className="flex flex-wrap gap-x-4 gap-y-2">{series.map((item) => <span key={item.key} className="inline-flex items-center gap-2 text-xs font-medium text-on-surface-variant"><span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${item.color}`} />{item.label}</span>)}</div></div>
        {hasData ? <>
          <div className="mt-6 flex h-48 items-end gap-1 border-b border-outline-variant px-1 sm:gap-2" role="img" aria-label={`Volumes mensuels. ${series.map(({ key, label }) => `${label}: ${points.map((point) => `${point.month} ${point[key]}`).join(", ")}`).join(". ")}`}>
            {points.map((point) => <div key={point.month} className="flex h-full min-w-0 flex-1 items-end justify-center gap-0.5 sm:gap-1" title={`${point.month} · ${series.map(({ key, label }) => `${label}: ${point[key]}`).join(" · ")}`}>
              {series.map(({ key, color }) => <div key={key} className={`w-full max-w-5 rounded-t-sm ${color}`} style={{ height: `${Math.max(point[key] > 0 ? 5 : 1, (point[key] / max) * 100)}%` }} />)}
            </div>)}
          </div>
          <div className="mt-2 flex gap-1 text-[10px] text-on-surface-variant sm:gap-2">{points.map((point) => <span key={point.month} className="min-w-0 flex-1 truncate text-center">{point.month}</span>)}</div>
        </> : <p className="mt-6 rounded-xl bg-surface-container-low p-5 text-sm text-on-surface-variant">Aucune activité n’est enregistrée pour cette période. Les données apparaîtront ici dès la première saisie autorisée.</p>}
        <p className="mt-4 border-t border-outline-variant pt-3 text-xs text-on-surface-variant">Les volumes représentent les enregistrements du périmètre, pas une estimation.</p>
      </article>

      <aside className="rounded-2xl border border-outline-variant bg-surface-container-low p-4 sm:p-5" aria-label="Totaux de la période">
        <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">En bref</p><h3 className="mt-1 font-title-lg text-title-lg text-primary">Sur la période</h3></div><span className="rounded-full bg-surface-container-lowest px-3 py-1 text-xs font-medium text-on-surface-variant">{points.length} mois</span></div>
        <div className="mt-4 space-y-3">{series.map((item) => <div key={item.key} className={`rounded-xl ${item.surface} p-4`}><div className="flex items-center justify-between gap-3"><span className="text-sm font-medium text-primary">{item.label}</span><span className={`h-2.5 w-2.5 rounded-full ${item.color}`} aria-hidden="true" /></div><p className="mt-2 font-display-lg text-display-lg tabular-nums text-primary">{totals[item.key].toLocaleString("fr-FR")}</p></div>)}</div>
      </aside>
    </div>
  </section>;
}
