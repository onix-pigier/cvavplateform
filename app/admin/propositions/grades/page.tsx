import Link from "next/link";
import type { Route } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { prisma } from "@/lib/prisma";
import { scopeLabel } from "@/lib/admin/territory";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { GradeProposalDecision } from "@/components/registration/GradeProposalDecision";

export const dynamic = "force-dynamic";

export default async function GradeProposalsPage({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const query = await searchParams;
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context || context.assignment.roleCode !== "ADMIN_PAROISSE" || context.assignment.scopeType !== "PAROISSE" || !context.assignment.scopeId || !context.canReadPeople) redirect("/espace");
  const parishId = context.assignment.scopeId;
  const proposals = await prisma.gradeProposal.findMany({
    where: { status: "PENDING", person: { memberships: { some: { paroisseId: parishId, isActive: true, endDate: null } } } },
    orderBy: { createdAt: "asc" },
    include: { grade: { select: { name: true } }, proposedBy: { select: { person: { select: { firstName: true, lastName: true } } } }, person: { select: { id: true, firstName: true, lastName: true, memberships: { where: { paroisseId: parishId, isActive: true, endDate: null }, take: 1, include: { team: { select: { name: true } }, section: { select: { name: true } } } } } } },
  });
  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <main className="mx-auto max-w-5xl"><Link href={`/admin/personnes?role=${context.assignment.roleCode}&scopeId=${parishId}` as Route} className="text-sm font-semibold text-primary underline">← Registre des personnes</Link>
      <header className="my-5"><p className="text-xs font-semibold uppercase tracking-widest text-secondary">Grades · {scopeLabel(context.assignment.scopeType)}</p><h1 className="mt-2 text-3xl font-bold text-primary">Propositions de grade</h1><p className="mt-2 text-sm text-on-surface-variant">Le chef recommande une progression ; l’administrateur paroissial prend et trace la décision officielle.</p></header>
      {proposals.length === 0 ? <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6"><h2 className="font-semibold text-primary">Aucune proposition en attente</h2><p className="mt-1 text-sm text-on-surface-variant">Les nouvelles propositions des chefs apparaîtront ici.</p></section> : <ul className="space-y-3">{proposals.map((proposal) => { const membership = proposal.person.memberships[0]; return <li key={proposal.id} className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5"><div className="flex flex-wrap justify-between gap-3"><div><h2 className="font-semibold text-primary">{proposal.person.firstName} {proposal.person.lastName} → {proposal.grade.name}</h2><p className="mt-1 text-sm text-on-surface-variant">{membership?.section.name}{membership?.team ? ` · ${membership.team.name}` : ""} · Proposé par {proposal.proposedBy.person.firstName} {proposal.proposedBy.person.lastName}</p><p className="mt-1 text-xs text-on-surface-variant">Le {proposal.createdAt.toLocaleDateString("fr-FR")}</p></div><Link className="text-sm font-semibold text-primary underline" href={`/admin/personnes/${proposal.person.id}?role=${context.assignment.roleCode}&scopeId=${parishId}` as Route}>Voir la fiche</Link></div><div className="mt-4 border-t border-outline-variant pt-4"><GradeProposalDecision proposalId={proposal.id} parishId={parishId} /></div></li>; })}</ul>}
    </main>
  </ScopedAdminShell>;
}
