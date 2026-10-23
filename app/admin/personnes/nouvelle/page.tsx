import Link from "next/link";
import type { Route } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";
import { prisma } from "@/lib/prisma";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { CreatePersonForm } from "@/components/registration/CreatePersonForm";

export const dynamic = "force-dynamic";

export default async function NewPersonPage({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const query = await searchParams;
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) redirect("/espace");
  if (!context.canCreatePerson || !context.assignment.scopeId) redirect("/admin/personnes" as Route);
  const { scopeType, scopeId } = context.assignment;
  const scope = scopeType === "DIOCESE" ? await prisma.diocese.findUnique({ where: { id: scopeId }, select: { name: true } })
    : scopeType === "DOYENNE" ? await prisma.doyenne.findUnique({ where: { id: scopeId }, select: { name: true } })
      : scopeType === "PAROISSE" ? await prisma.paroisse.findUnique({ where: { id: scopeId }, select: { name: true } })
        : scopeType === "SECTION" ? await prisma.section.findUnique({ where: { id: scopeId }, select: { name: true } })
          : scopeType === "EQUIPE" ? await prisma.team.findUnique({ where: { id: scopeId }, select: { name: true } }) : null;
  if (!scope) redirect("/admin/personnes" as Route);
  const registryHref = `/admin/personnes?role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(scopeId)}`;

  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(scopeType)} userName={context.userName} scopeId={scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-4xl"><Link href={registryHref as Route} className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline">← Retour aux personnes</Link><header className="mb-6 mt-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Personnes · {scopeLabel(scopeType)}</p><h1 className="mt-2 font-display-lg text-display-lg text-primary">Enregistrer une personne</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">Cette première opération crée uniquement une identité et son ancrage au registre de {scope.name}. L’appartenance, les fonctions et l’accès à l’application restent des opérations distinctes.</p></header><CreatePersonForm scopeType={scopeType} scopeId={scopeId} scopeName={scope.name} /></div>
  </ScopedAdminShell>;
}
