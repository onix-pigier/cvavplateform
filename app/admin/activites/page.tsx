import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";
import { getActivityRegistry, getDashboardAnalytics, parsePeriod } from "@/lib/admin/portal-data";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { AdminAnalyticsSection } from "@/components/dashboard/AdminAnalyticsSection";
import Link from "next/link";
import type { Route } from "next";
import { authorize } from "@/lib/rbac/authorize";

export const dynamic = "force-dynamic";

export default async function AdminActivitiesPage({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string; period?: string; from?: string; to?: string; page?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const query = await searchParams;
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) redirect("/espace");
  const period = parsePeriod(new URLSearchParams(Object.entries(query).filter((entry): entry is [string, string] => typeof entry[1] === "string")));
  const page = Math.max(1, Number.parseInt(query.page ?? "1", 10) || 1);
  const [result, analytics] = await Promise.all([getActivityRegistry(context, period, page), getDashboardAnalytics(context, period)]);
  const canCreateActivity = context.assignment.scopeId ? (await authorize({ resourceCode: "ACTIVITE", actionCode: "CREATE", targetScopeType: context.assignment.scopeType, targetScopeId: context.assignment.scopeId })).allowed : false;
  const roleQuery = `role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(context.assignment.scopeId ?? "")}`;
  const periodQuery = `period=${period.value}${query.from ? `&from=${encodeURIComponent(query.from)}` : ""}${query.to ? `&to=${encodeURIComponent(query.to)}` : ""}`;
  const nextUrl = `/admin/activites?${roleQuery}&${periodQuery}&page=${page + 1}`;
  const previousUrl = `/admin/activites?${roleQuery}&${periodQuery}&page=${Math.max(1, page - 1)}`;
  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-[1500px]"><header className="border-b border-outline-variant pb-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Vie du mouvement · {scopeLabel(context.assignment.scopeType)}</p><h1 className="mt-2 font-display-lg text-display-lg text-primary">Activités et présences</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">Consultation des activités déclarées dans votre périmètre. Les présences indiquées correspondent aux saisies disponibles.</p></header>
      {!result ? <p className="mt-6 rounded-2xl border border-error/30 bg-error-container/40 p-5 text-sm text-on-error-container">Vous n’avez pas l’autorisation de consulter ces activités.</p> : <>{analytics && <AdminAnalyticsSection period={period} points={analytics.monthly} roleCode={context.assignment.roleCode} scopeId={context.assignment.scopeId} />}
        <section className="mt-7 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest"><div className="flex flex-wrap items-end justify-between gap-3 border-b border-outline-variant p-5"><div><h2 className="font-title-lg text-title-lg text-primary">Registre des activités</h2><p className="mt-1 text-sm text-on-surface-variant">{result.total.toLocaleString("fr-FR")} activité{result.total === 1 ? "" : "s"} · {period.label}</p></div>{canCreateActivity && <Link href={`/admin/activites/nouvelle?${roleQuery}` as Route} className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary hover:bg-primary/90">Planifier une activité</Link>}</div>
        {result.items.length ? <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-surface-container-low text-xs uppercase tracking-wide text-on-surface-variant"><tr><th className="px-5 py-3">Activité</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Date</th><th className="px-5 py-3">Lieu</th><th className="px-5 py-3">Statut</th><th className="px-5 py-3">Pointage</th></tr></thead><tbody className="divide-y divide-outline-variant">{result.items.map((activity) => <tr key={activity.id}><td className="px-5 py-4"><Link href={`/admin/activites/${activity.id}?${roleQuery}` as Route} className="font-semibold text-primary hover:underline">{activity.name}</Link></td><td className="px-5 py-4">{activity.activityType.name}</td><td className="px-5 py-4">{activity.startDate.toLocaleDateString("fr-FR")}</td><td className="px-5 py-4">{activity.location ?? "Non renseigné"}</td><td className="px-5 py-4">{activity.status === "COMPLETED" ? "Terminée" : activity.status === "ONGOING" ? "En cours" : activity.status === "ARCHIVED" ? "Archivée" : "Planifiée"}</td><td className="px-5 py-4 tabular-nums"><Link href={`/admin/activites/${activity.id}?${roleQuery}` as Route} className="font-medium text-primary hover:underline">{activity._count.presences} pointé{activity._count.presences === 1 ? "" : "s"} · ouvrir</Link></td></tr>)}</tbody></table></div> : <div className="p-8"><h3 className="font-semibold text-primary">Aucune activité sur cette période</h3><p className="mt-2 text-sm text-on-surface-variant">Aucune activité n’a été enregistrée dans le périmètre sélectionné.</p>{canCreateActivity && <Link href={`/admin/activites/nouvelle?${roleQuery}` as Route} className="mt-4 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary">Planifier la première activité</Link>}</div>}
        <footer className="flex justify-between gap-3 border-t border-outline-variant p-4 text-sm">{page > 1 ? <a href={previousUrl} className="rounded-full border border-outline px-4 py-2 font-medium text-primary">Précédent</a> : <span />}{result.page < result.pageCount && <a href={nextUrl} className="rounded-full border border-outline px-4 py-2 font-medium text-primary">Suivant</a>}</footer></section></>}
    </div>
  </ScopedAdminShell>;
}
