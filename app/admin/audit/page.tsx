import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";
import { getAuditRegistry } from "@/lib/admin/portal-data";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";

export const dynamic = "force-dynamic";

export default async function AdminAuditPage({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string; q?: string; from?: string; to?: string; page?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const query = await searchParams;
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) redirect("/espace");
  const parseDate = (value?: string, endOfDay = false) => {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
    const date = new Date(`${value}T${endOfDay ? "23:59:59.999" : "00:00:00.000"}Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? date : undefined;
  };
  const from = parseDate(query.from);
  const to = parseDate(query.to, true);
  const page = Math.max(1, Number.parseInt(query.page ?? "1", 10) || 1);
  const result = await getAuditRegistry(context, { query: query.q, from, to, page });
  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-[1400px]"><header className="border-b border-outline-variant pb-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Sécurité · accès réservé au diocèse</p><h1 className="mt-2 font-display-lg text-display-lg text-primary">Journal d’audit</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">Historique paginé des actions tracées. Les valeurs avant/après et les données privées ne sont pas exposées dans cette liste.</p></header>
      {!result ? <p className="mt-6 rounded-2xl border border-error/30 bg-error-container/40 p-5 text-sm text-on-error-container">Cette page est réservée à l’administration diocésaine autorisée.</p> : <><form method="get" className="mt-5 grid gap-3 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 sm:grid-cols-2 xl:grid-cols-[minmax(15rem,1fr)_12rem_12rem_auto]"><input type="hidden" name="role" value={context.assignment.roleCode} /><input type="hidden" name="scopeId" value={context.assignment.scopeId ?? ""} /><label className="grid gap-1.5 text-xs font-semibold text-on-surface-variant">Action, type ou identifiant<input name="q" defaultValue={query.q} maxLength={80} className="min-h-11 rounded-xl border border-outline bg-surface px-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label><label className="grid gap-1.5 text-xs font-semibold text-on-surface-variant">Du<input type="date" name="from" defaultValue={query.from} className="min-h-11 rounded-xl border border-outline bg-surface px-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label><label className="grid gap-1.5 text-xs font-semibold text-on-surface-variant">Au<input type="date" name="to" defaultValue={query.to} className="min-h-11 rounded-xl border border-outline bg-surface px-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label><button className="min-h-11 self-end rounded-full bg-primary px-5 text-sm font-semibold text-on-primary">Filtrer</button></form>
        <section className="mt-5 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-surface-container-low text-xs uppercase tracking-wide text-on-surface-variant"><tr><th className="px-5 py-3">Date et heure</th><th className="px-5 py-3">Acteur</th><th className="px-5 py-3">Action</th><th className="px-5 py-3">Type d’objet</th><th className="px-5 py-3">Référence</th></tr></thead><tbody className="divide-y divide-outline-variant">{result.items.map((entry) => <tr key={entry.id}><td className="whitespace-nowrap px-5 py-4">{entry.timestamp.toLocaleString("fr-FR")}</td><td className="px-5 py-4">{entry.account?.person ? `${entry.account.person.firstName} ${entry.account.person.lastName}` : "Système ou compte inconnu"}</td><td className="px-5 py-4 font-medium">{entry.action}</td><td className="px-5 py-4">{entry.entityType}</td><td className="max-w-48 truncate px-5 py-4 font-mono text-xs">{entry.entityId}</td></tr>)}</tbody></table></div>{result.items.length === 0 && <p className="p-8 text-sm text-on-surface-variant">Aucun événement ne correspond aux filtres.</p>}<footer className="flex justify-between gap-3 border-t border-outline-variant p-4 text-sm text-on-surface-variant"><span>{result.total.toLocaleString("fr-FR")} événements · page {result.page}/{Math.max(1, result.pageCount)}</span>{result.page < result.pageCount && <a className="rounded-full border border-outline px-4 py-2 font-medium text-primary" href={`?role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(context.assignment.scopeId ?? "")}&q=${encodeURIComponent(query.q ?? "")}&from=${query.from ?? ""}&to=${query.to ?? ""}&page=${page + 1}`}>Suivant</a>}</footer></section></>}
    </div>
  </ScopedAdminShell>;
}
