import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PreRegistrationQueue } from "@/components/registration/PreRegistrationQueue";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";

export const dynamic = "force-dynamic";

export default async function PreRegistrationPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const isSuperAdmin = session.roles.some((role) => role.roleCode === "SUPER_ADMIN" && role.scopeType === "DIOCESE");
  const adminParishIds = session.roles.filter((role) => role.roleCode === "ADMIN_PAROISSE" && role.scopeType === "PAROISSE" && role.scopeId).map((role) => role.scopeId as string);
  const isChef = session.roles.some((role) => role.roleCode === "CHEF" && role.scopeType === "EQUIPE" && role.scopeId);
  const chefTeamIds = session.roles.filter((role) => role.roleCode === "CHEF" && role.scopeType === "EQUIPE" && role.scopeId).map((role) => role.scopeId as string);
  const chefTeams = chefTeamIds.length ? await prisma.team.findMany({ where: { id: { in: chefTeamIds }, isActive: true }, select: { section: { select: { paroisseId: true } } } }) : [];
  const parishIds = [...new Set([...adminParishIds, ...chefTeams.map((team) => team.section.paroisseId)])];
  if (!isSuperAdmin && !parishIds.length) redirect("/espace");
  const context = await getAdminContext(session);
  if (!context) redirect("/espace");

  const requests = await prisma.preRegistration.findMany({
    where: {
      status: { in: ["PENDING", "IN_REVIEW", "PENDING_PROPOSAL", "ARBITRATION"] },
      ...(isSuperAdmin ? {} : { requestedParishId: { in: parishIds } }),
    },
    include: {
      requestedParish: { select: { id: true, name: true, doyenne: { select: { name: true } } } },
      originParish: { select: { name: true } },
    },
    orderBy: [{ status: "asc" }, { createdAt: "asc" }],
  });
  const targetParishIds = [...new Set(requests.map((request) => request.requestedParishId))];
  const sections = await prisma.section.findMany({
    where: { paroisseId: { in: targetParishIds }, isActive: true },
    include: { teams: { where: { isActive: true }, select: { id: true, name: true } } },
    orderBy: { name: "asc" },
  });
  const sectionOptions = sections.map((section) => ({ id: section.id, parishId: section.paroisseId, name: section.name, teams: section.teams }));

  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-6xl">
      <Link href="/admin/dashboard" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">← Retour à l’espace responsable</Link>
      <header className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Accès et rattachements</p><h1 className="mt-2 font-display-lg text-display-lg text-primary">Pré-inscriptions</h1><p className="mt-3 max-w-2xl leading-7 text-on-surface-variant">Vérifiez l’identité et la paroisse. Les litiges et correspondances possibles restent réservés à l’arbitrage diocésain.</p></div>
        <p className="rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2 text-sm">{requests.length} dossier{requests.length === 1 ? "" : "s"} à examiner</p>
      </header>
      {!sections.length && requests.length > 0 && <p className="mt-6 rounded-2xl border border-error/30 bg-error-container/50 p-5 text-sm leading-6 text-on-error-container">Aucune section active n’est configurée pour les paroisses de ces demandes. Vous pouvez examiner et refuser un dossier, mais son approbation est bloquée jusqu’à ce qu’une section réelle soit configurée. Aucune section n’a été créée automatiquement.</p>}
      <PreRegistrationQueue requests={requests.map((request) => ({
        id: request.id, referenceCode: request.referenceCode, kind: request.kind, status: request.status,
        proposalSectionId: request.proposalSectionId, proposalTeamId: request.proposalTeamId, proposalNote: request.proposalDecisionNote,
        firstName: request.firstName, lastName: request.lastName, birthDate: request.birthDate.toISOString().slice(0, 10), sex: request.sex,
        phone: request.phone, email: request.email, guardianFirstName: request.guardianFirstName, guardianLastName: request.guardianLastName,
        guardianPhone: request.guardianPhone, guardianRelationship: request.guardianRelationship,
        originParish: request.originParish?.name ?? null, originMemberNumber: request.originMemberNumber,
        requestedParishId: request.requestedParishId, requestedParish: request.requestedParish.name,
        doyenne: request.requestedParish.doyenne.name, possibleDuplicate: request.possibleDuplicate,
        createdAt: request.createdAt.toISOString(),
      }))} sections={sectionOptions} isSuperAdmin={isSuperAdmin} adminParishIds={adminParishIds} isChef={isChef} />
    </div>
  </ScopedAdminShell>;
}
