import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/lib/rbac/authorize";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { ActivityCreateForm } from "@/components/dashboard/ActivityCreateForm";

export const dynamic = "force-dynamic";

export default async function NewActivityPage({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const query = await searchParams;
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) redirect("/espace");
  const { scopeType, scopeId } = context.assignment;
  const permission = scopeId ? await authorize({ resourceCode: "ACTIVITE", actionCode: "CREATE", targetScopeType: scopeType, targetScopeId: scopeId }) : { allowed: false };
  const types = permission.allowed ? await prisma.activityType.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, requiresValidation: true } }) : [];
  const returnTo = `role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`;

  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(scopeType)} userName={context.userName} scopeId={scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-4xl"><Link href={`/admin/activites?${returnTo}`} className="text-sm font-semibold text-primary hover:underline">← Retour aux activités</Link><header className="mt-5 border-b border-outline-variant pb-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Vie du mouvement · {scopeLabel(scopeType)}</p><h1 className="mt-2 font-display-lg text-display-lg text-primary">Planifier une activité</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">La nouvelle activité sera rattachée à votre périmètre actif. Vous pourrez ensuite ouvrir sa feuille de présence.</p></header>
      {!permission.allowed ? <p role="alert" className="mt-6 rounded-2xl border border-error/30 bg-error-container/40 p-5 text-sm text-on-error-container">Votre rôle ne permet pas de créer une activité dans ce périmètre.</p> : <ActivityCreateForm types={types} scopeType={scopeType} scopeId={scopeId!} returnTo={returnTo} />}
    </div>
  </ScopedAdminShell>;
}
