import Link from "next/link";
import type { Route } from "next";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { getPersonRecord } from "@/lib/admin/portal-data";
import { getScopeBreadcrumb, scopeLabel } from "@/lib/admin/territory";
import { prisma } from "@/lib/prisma";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { CreateMembershipForm } from "@/components/registration/CreateMembershipForm";
import { CreateMandateForm } from "@/components/registration/CreateMandateForm";
import { EndMandateButton } from "@/components/registration/EndMandateButton";
import { CreateTeamLeadershipForm } from "@/components/registration/CreateTeamLeadershipForm";
import { EndTeamLeadershipButton } from "@/components/registration/EndTeamLeadershipButton";
import { PersonCivilIdentityForm } from "@/components/registration/PersonCivilIdentityForm";
import { PersonAvatar } from "@/components/admin/PersonAvatar";
import { GradeProposalForm } from "@/components/registration/GradeProposalForm";

export const dynamic = "force-dynamic";

const dateLabel = (date: Date) => new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "Africa/Abidjan" }).format(date);
const personStatus = (status: string) => status === "ACTIVE" ? "Active" : status === "SUSPENDED" ? "Suspendue" : "Archivée";
const roleLabels: Record<string, string> = {
  SUPER_ADMIN: "Administrateur diocésain", ADMIN_DOYENNE: "Administrateur de doyenné",
  ADMIN_PAROISSE: "Administrateur paroissial", CHEF: "Chef", MILITANT: "Militant",
  AUMONIER_DIOCESE: "Aumônier diocésain", AUMONIER_DOYENNE: "Aumônier de doyenné",
  AUMONIER_PAROISSE: "Aumônier paroissial", PARRAIN_MARRAINE: "Parrain ou marraine",
};

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-6"><div className="mb-4 border-b border-outline-variant pb-3"><h2 className="font-title-lg text-title-lg text-primary">{title}</h2>{description && <p className="mt-1 text-sm leading-6 text-on-surface-variant">{description}</p>}</div>{children}</section>;
}

export default async function PersonProfilePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ role?: string; scopeId?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) redirect("/espace");
  if (!context.canReadPeople) notFound();
  const person = await getPersonRecord(context, id);
  if (!person) notFound();

  const scopePath = await getScopeBreadcrumb(context.assignment.scopeType, context.assignment.scopeId);
  const registryLocations = await Promise.all(person.registryEntries.map(async (entry) => {
    const path = await getScopeBreadcrumb(entry.scopeType, entry.scopeId);
    return { ...entry, path };
  }));
  const registryHref = `/admin/personnes?role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(context.assignment.scopeId ?? "")}`;
  const profileHref = `/admin/personnes/${encodeURIComponent(person.id)}?role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(context.assignment.scopeId ?? "")}`;
  const activeRoles = person.account?.userRoles.filter((assignment) => !assignment.endDate) ?? [];
  const guardian = person.tutorsAsMinor[0];
  const activeGrade = person.gradeHistory.find((grade) => !grade.endedAt);
  let gradeProposalOptions: { id: string; name: string }[] = [];
  let hasPendingGradeProposal = false;
  if (context.assignment.roleCode === "CHEF" && context.assignment.scopeType === "EQUIPE" && context.assignment.scopeId) {
    const currentTeamMembership = await prisma.membership.findFirst({ where: { personId: person.id, teamId: context.assignment.scopeId, isActive: true, endDate: null }, select: { id: true } });
    if (currentTeamMembership) {
      const [grades, pendingProposal] = await Promise.all([
        prisma.grade.findMany({ where: { isActive: true, category: "MILITANT", ...(activeGrade ? { order: { gt: activeGrade.grade.order } } : {}) }, orderBy: { order: "asc" }, select: { id: true, name: true } }),
        prisma.gradeProposal.findFirst({ where: { personId: person.id, status: "PENDING" }, select: { id: true } }),
      ]);
      gradeProposalOptions = grades;
      hasPendingGradeProposal = Boolean(pendingProposal);
    }
  }
  const activeQualifications = person.chefQualifications.filter((qualification) => !qualification.endedAt);
  let membershipSections: { id: string; name: string; teams: { id: string; name: string }[] }[] = [];
  let fixedTeam: { id: string; name: string } | undefined;
  let mandateScopes: { type: "DIOCESE" | "DOYENNE" | "PAROISSE" | "SECTION" | "EQUIPE"; id: string; name: string; path: string }[] = [];
  let mandateFonctions: { code: string; label: string }[] = [];
  let leadershipTeams: { id: string; name: string; sectionName: string }[] = [];
  const mandateRole = ["SUPER_ADMIN", "ADMIN_DOYENNE", "ADMIN_PAROISSE"].includes(context.assignment.roleCode)
    ? context.assignment.roleCode as "SUPER_ADMIN" | "ADMIN_DOYENNE" | "ADMIN_PAROISSE"
    : null;
  if (context.canManageMembership && person.status === "ACTIVE" && person.activeMembershipCount === 0) {
    if (context.assignment.roleCode === "ADMIN_PAROISSE" && context.assignment.scopeType === "PAROISSE" && context.assignment.scopeId) {
      membershipSections = await prisma.section.findMany({
        where: { paroisseId: context.assignment.scopeId, isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } },
        orderBy: { name: "asc" }, select: { id: true, name: true, teams: { where: { isActive: true }, orderBy: { name: "asc" }, select: { id: true, name: true } } },
      });
    } else if (context.assignment.roleCode === "CHEF" && context.assignment.scopeType === "EQUIPE" && context.assignment.scopeId) {
      const team = await prisma.team.findFirst({
        where: { id: context.assignment.scopeId, isActive: true, section: { isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } } },
        select: { id: true, name: true, section: { select: { id: true, name: true } } },
      });
      if (team) {
        fixedTeam = { id: team.id, name: team.name };
        membershipSections = [{ ...team.section, teams: [{ id: team.id, name: team.name }] }];
      }
    }
  }
  if (context.canCreateMandate && mandateRole) {
    mandateFonctions = await prisma.fonction.findMany({
      where: { code: { notIn: mandateRole === "SUPER_ADMIN" ? ["REFERENT_SECURITE"] : mandateRole === "ADMIN_PAROISSE" ? ["REFERENT_SECURITE", "AUMONIER"] : ["REFERENT_SECURITE", "AUMONIER", "CHEF_SECTION"] } },
      orderBy: { label: "asc" }, select: { code: true, label: true },
    });
    if (mandateRole === "ADMIN_DOYENNE" && context.assignment.scopeId) {
      const deanery = await prisma.doyenne.findFirst({ where: { id: context.assignment.scopeId, isActive: true, diocese: { isActive: true } }, select: { id: true, name: true } });
      if (deanery) mandateScopes = [{ type: "DOYENNE", id: deanery.id, name: deanery.name, path: `Doyenné · ${deanery.name}` }];
    } else if (mandateRole === "ADMIN_PAROISSE" && context.assignment.scopeId) {
      const parish = await prisma.paroisse.findFirst({ where: { id: context.assignment.scopeId, isActive: true, doyenne: { isActive: true } }, select: { id: true, name: true, doyenne: { select: { name: true } } } });
      if (parish) {
        mandateScopes.push({ type: "PAROISSE", id: parish.id, name: parish.name, path: `Paroisse · ${parish.name}` });
        const sections = await prisma.section.findMany({ where: { paroisseId: parish.id, isActive: true }, orderBy: { name: "asc" }, select: { id: true, name: true } });
        const teams = await prisma.team.findMany({ where: { isActive: true, section: { paroisseId: parish.id, isActive: true } }, orderBy: { name: "asc" }, select: { id: true, name: true, section: { select: { name: true } } } });
        mandateScopes.push(...sections.map((section) => ({ type: "SECTION" as const, id: section.id, name: section.name, path: `Section · ${section.name} · ${parish.name}` })));
        mandateScopes.push(...teams.map((team) => ({ type: "EQUIPE" as const, id: team.id, name: team.name, path: `Équipe · ${team.name} · ${team.section.name} · ${parish.name}` })));
      }
    } else if (mandateRole === "SUPER_ADMIN") {
      const dioceses = await prisma.diocese.findMany({ where: { isActive: true, ...(context.assignment.scopeId ? { id: context.assignment.scopeId } : {}) }, orderBy: { name: "asc" }, select: { id: true, name: true } });
      for (const diocese of dioceses) {
        mandateScopes.push({ type: "DIOCESE", id: diocese.id, name: diocese.name, path: `Diocèse · ${diocese.name}` });
        const deaneries = await prisma.doyenne.findMany({ where: { dioceseId: diocese.id, isActive: true }, orderBy: { name: "asc" }, select: { id: true, name: true } });
        mandateScopes.push(...deaneries.map((deanery) => ({ type: "DOYENNE" as const, id: deanery.id, name: deanery.name, path: `Doyenné · ${deanery.name}` })));
        const parishes = await prisma.paroisse.findMany({ where: { isActive: true, doyenne: { dioceseId: diocese.id, isActive: true } }, orderBy: { name: "asc" }, select: { id: true, name: true, doyenne: { select: { name: true } } } });
        const parishIds = parishes.map((parish) => parish.id);
        mandateScopes.push(...parishes.map((parish) => ({ type: "PAROISSE" as const, id: parish.id, name: parish.name, path: `Paroisse · ${parish.name} · ${parish.doyenne.name}` })));
        const sections = await prisma.section.findMany({ where: { paroisseId: { in: parishIds }, isActive: true }, orderBy: { name: "asc" }, select: { id: true, name: true, paroisse: { select: { name: true } } } });
        mandateScopes.push(...sections.map((section) => ({ type: "SECTION" as const, id: section.id, name: section.name, path: `Section · ${section.name} · ${section.paroisse.name}` })));
        const teams = await prisma.team.findMany({ where: { isActive: true, section: { paroisseId: { in: parishIds }, isActive: true } }, orderBy: { name: "asc" }, select: { id: true, name: true, section: { select: { name: true, paroisse: { select: { name: true } } } } } });
        mandateScopes.push(...teams.map((team) => ({ type: "EQUIPE" as const, id: team.id, name: team.name, path: `Équipe · ${team.name} · ${team.section.name} · ${team.section.paroisse.name}` })));
      }
    }
  }
  if (context.canManageTeamLeadership && context.assignment.scopeType === "PAROISSE" && context.assignment.scopeId) {
    leadershipTeams = (await prisma.team.findMany({
      where: { isActive: true, section: { isActive: true, paroisseId: context.assignment.scopeId, paroisse: { isActive: true, doyenne: { isActive: true } } } },
      orderBy: [{ section: { name: "asc" } }, { name: "asc" }], select: { id: true, name: true, section: { select: { name: true } } },
    })).map((team) => ({ id: team.id, name: team.name, sectionName: team.section.name }));
  }

  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-[1200px]">
      <nav aria-label="Fil d’Ariane" className="mb-4 text-xs text-on-surface-variant"><Link href="/admin/dashboard" className="hover:text-primary">Administration</Link><span className="mx-2" aria-hidden="true">/</span><Link href={registryHref as Route} className="hover:text-primary">Personnes</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page" className="font-semibold text-primary">Fiche</span></nav>
      <Link href={registryHref as Route} className="inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">← Retour au registre</Link>

      <header className="mt-4 rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <PersonAvatar firstName={person.firstName} lastName={person.lastName} size="lg" />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">{scopePath.join(" › ") || scopeLabel(context.assignment.scopeType)}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3"><h1 className="break-words font-display-lg text-display-lg text-primary">{person.firstName} {person.lastName}</h1><span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${person.status === "ACTIVE" ? "bg-secondary-container text-primary" : person.status === "SUSPENDED" ? "bg-error-container text-on-error-container" : "bg-surface-container-high text-on-surface-variant"}`}>{personStatus(person.status)}</span></div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-on-surface-variant">Une personne, ses appartenances, ses fonctions et son accès applicatif sont des éléments distincts.</p>
            </div>
          </div>
          <p className="shrink-0 rounded-xl bg-surface-container-low px-4 py-3 text-sm text-on-surface-variant">Au registre depuis <strong className="text-primary">{dateLabel(person.createdAt)}</strong></p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-outline-variant pt-4 text-xs">
          <span className="rounded-full bg-primary-fixed px-3 py-1.5 font-semibold text-primary">{person.memberships.length ? `${person.memberships.length} appartenance${person.memberships.length === 1 ? "" : "s"}` : "Aucune appartenance"}</span>
          <span className="rounded-full bg-tertiary-container/60 px-3 py-1.5 font-semibold text-on-tertiary-container">{person.mandatesHeld.length + person.teamLeaderships.length ? `${person.mandatesHeld.length + person.teamLeaderships.length} fonction${person.mandatesHeld.length + person.teamLeaderships.length === 1 ? "" : "s"}` : "Aucune fonction"}</span>
          <span className={`rounded-full px-3 py-1.5 font-semibold ${person.account ? "bg-secondary-container text-primary" : "bg-surface-container-high text-on-surface-variant"}`}>{person.account ? "Compte applicatif associé" : "Sans compte applicatif"}</span>
        </div>
      </header>

      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        <Section title="Identité" description="Données personnelles visibles dans votre périmètre autorisé.">
          <dl className="grid gap-4 sm:grid-cols-2"><div><dt className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Nom complet</dt><dd className="mt-1 font-medium text-on-surface">{person.firstName} {person.lastName}</dd></div><div><dt className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Date de naissance</dt><dd className="mt-1 font-medium text-on-surface">{dateLabel(person.birthDate)}</dd></div><div><dt className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Sexe</dt><dd className="mt-1 font-medium text-on-surface">{person.sex === "F" ? "Féminin" : "Masculin"}</dd></div><div><dt className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Téléphone</dt><dd className="mt-1 font-medium text-on-surface">{person.phone || "Non renseigné"}</dd></div><div className="sm:col-span-2"><dt className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">E-mail</dt><dd className="mt-1 break-all font-medium text-on-surface">{person.email || "Non renseigné"}</dd></div><div><dt className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Adresse</dt><dd className="mt-1 font-medium text-on-surface">{[person.addressLine, person.addressCity, person.addressPostalCode].filter(Boolean).join(", ") || "Non renseignée"}</dd></div></dl>
          {context.canUpdateIdentity && <div className="mt-5 border-t border-outline-variant pt-4"><PersonCivilIdentityForm personId={person.id} role={context.assignment.roleCode} scopeId={context.assignment.scopeId ?? ""} firstName={person.firstName} lastName={person.lastName} birthDate={person.birthDate} guardian={guardian ? { id: guardian.id, firstName: guardian.firstName, lastName: guardian.lastName } : undefined} /></div>}
          {guardian && <div className="mt-4 rounded-xl bg-surface-container-low p-4"><p className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">Représentant légal</p><p className="mt-1 font-medium text-primary">{guardian.firstName} {guardian.lastName} · {guardian.relationship}</p><p className="mt-1 text-sm text-on-surface-variant">{guardian.phone}{guardian.email ? ` · ${guardian.email}` : ""}</p></div>}
        </Section>

        <Section title="Ancrage au registre" description="Le périmètre où cette fiche personne a été enregistrée, sans créer automatiquement d’adhésion.">
          {registryLocations.length ? <ul className="space-y-2">{registryLocations.map((entry) => <li key={entry.scopeId} className="rounded-xl bg-surface-container-low p-4"><p className="font-semibold text-primary">{entry.path.join(" › ") || scopeLabel(entry.scopeType)}</p><p className="mt-1 text-xs text-on-surface-variant">Enregistrée le {dateLabel(entry.createdAt)}</p></li>)}</ul> : <p className="text-sm text-on-surface-variant">Aucun ancrage direct au registre dans ce périmètre. La fiche est visible via une appartenance, une fonction ou un accès applicatif autorisé.</p>}
        </Section>

        <Section title="Appartenances" description="Historique des rattachements visibles depuis ce périmètre.">
          {person.memberships.length ? <ol className="space-y-3">{person.memberships.map((membership, index) => <li key={`${membership.pastoralYear}-${membership.startDate.toISOString()}-${index}`} className="rounded-xl bg-surface-container-low p-4"><div className="flex flex-wrap items-start justify-between gap-2"><p className="font-semibold text-primary">{membership.paroisse.name} · {membership.section.name}{membership.team ? ` · ${membership.team.name}` : ""}</p><span className={`rounded-full px-3 py-1 text-xs font-semibold ${membership.isActive ? "bg-secondary-container text-primary" : "bg-surface-container-high text-on-surface-variant"}`}>{membership.isActive ? "Active" : "Terminée"}</span></div><p className="mt-2 text-sm text-on-surface-variant">Doyenné {membership.paroisse.doyenne.name} · année pastorale {membership.pastoralYear}</p><p className="mt-1 text-xs text-on-surface-variant">Du {dateLabel(membership.startDate)}{membership.endDate ? ` au ${dateLabel(membership.endDate)}` : ""}</p></li>)}</ol> : <p className="rounded-xl bg-surface-container-low p-4 text-sm leading-6 text-on-surface-variant">Aucune appartenance n’est enregistrée dans ce périmètre. La personne peut exister au registre sans être rattachée à une équipe.</p>}
          {context.canManageMembership && person.status === "ACTIVE" && person.activeMembershipCount === 0 && <div className="mt-4"><CreateMembershipForm personId={person.id} role={context.assignment.roleCode as "ADMIN_PAROISSE" | "CHEF"} scopeId={context.assignment.scopeId ?? ""} sections={membershipSections} fixedTeamId={fixedTeam?.id} fixedTeamName={fixedTeam?.name} returnHref={profileHref} /></div>}
          {context.canManageMembership && person.status === "ACTIVE" && person.activeMembershipCount > 0 && <p className="mt-4 rounded-xl border border-outline-variant bg-surface-container-low p-4 text-sm leading-6 text-on-surface-variant">Cette personne possède déjà une appartenance active. Pour la déplacer ou la modifier, utilisez le workflow de mutation avec validation ; cette action rapide ne remplace pas ce circuit.</p>}
        </Section>

        <Section title="Grades et qualifications" description="La progression militante et le parcours de chef sont suivis séparément.">
          <div className="grid gap-5 sm:grid-cols-2"><div><h3 className="font-semibold text-primary">Grade militant</h3>{activeGrade ? <p className="mt-2 rounded-xl bg-secondary-container/60 p-4 text-sm"><strong>{activeGrade.grade.name}</strong><span className="mt-1 block text-on-surface-variant">Depuis le {dateLabel(activeGrade.obtainedAt)}</span></p> : <p className="mt-2 text-sm text-on-surface-variant">Aucun grade actif enregistré.</p>}{person.gradeHistory.filter((grade) => grade.endedAt).length > 0 && <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">{person.gradeHistory.filter((grade) => grade.endedAt).map((grade, index) => <li key={`${grade.grade.name}-${index}`}>{grade.grade.name} · {dateLabel(grade.obtainedAt)} – {grade.endedAt ? dateLabel(grade.endedAt) : ""}</li>)}</ul>}{context.assignment.roleCode === "CHEF" && (hasPendingGradeProposal ? <p className="mt-4 rounded-xl bg-tertiary-container/50 p-4 text-sm text-on-surface-variant">Une proposition de grade est déjà en attente pour cette personne.</p> : gradeProposalOptions.length > 0 ? <GradeProposalForm personId={person.id} teamId={context.assignment.scopeId!} grades={gradeProposalOptions} /> : null)}</div><div><h3 className="font-semibold text-primary">Qualification de chef</h3>{activeQualifications.length ? <ul className="mt-2 space-y-2">{activeQualifications.map((qualification, index) => <li key={`${qualification.code}-${index}`} className="rounded-xl bg-tertiary-container/50 p-3 text-sm"><strong>{qualification.code}</strong><span className="mt-1 block text-on-surface-variant">Obtenue le {dateLabel(qualification.obtainedAt)}</span></li>)}</ul> : <p className="mt-2 text-sm text-on-surface-variant">Aucune qualification active enregistrée.</p>}</div></div>
        </Section>

        <Section title="Fonctions et mandats" description="Une fonction organisationnelle n’accorde pas automatiquement un accès au logiciel. Le chef d’équipe relève de TeamLeadership, pas d’un mandat générique.">
          {person.mandatesHeld.length || person.teamLeaderships.length ? <div className="space-y-3">{person.mandatesHeld.map((mandate) => {
            const current = mandate.status === "ACTIVE" && mandate.startDate <= new Date() && (!mandate.endDate || mandate.endDate >= new Date());
            const scheduled = mandate.status === "ACTIVE" && mandate.startDate > new Date();
            const canEnd = context.canEndMandate && mandateRole && (mandateRole !== "ADMIN_DOYENNE" || (mandate.scopeType === "DOYENNE" && mandate.scopeId === context.assignment.scopeId));
            return <article key={mandate.id} className="rounded-xl bg-surface-container-low p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-semibold text-primary">{mandate.fonction.label}</h3><span className={`rounded-full px-3 py-1 text-xs font-semibold ${current ? "bg-secondary-container text-primary" : scheduled ? "bg-tertiary-container text-on-tertiary-container" : "bg-surface-container-high text-on-surface-variant"}`}>{current ? "En cours" : scheduled ? "À venir" : "Terminé"}</span></div><p className="mt-1 text-sm text-on-surface-variant">{mandate.governanceBody?.name ?? `Périmètre ${scopeLabel(mandate.scopeType)}`} · du {dateLabel(mandate.startDate)}{mandate.endDate ? ` au ${dateLabel(mandate.endDate)}` : " · sans date de fin"}</p>{mandate.validatedAt && <p className="mt-2 text-xs text-on-surface-variant">Nomination d’aumônier enregistrée le {dateLabel(mandate.validatedAt)} · référence : {mandate.appointmentReference}</p>}{canEnd && current && <EndMandateButton mandateId={mandate.id} personId={person.id} role={mandateRole} actorScopeId={context.assignment.scopeId} />}</article>;
          })}{person.teamLeaderships.map((leadership) => <article key={leadership.id} className="rounded-xl bg-surface-container-low p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-semibold text-primary">{leadership.role === "LEADER" ? "Chef d’équipe" : "Assistant d’équipe"}</h3><span className={`rounded-full px-3 py-1 text-xs font-semibold ${leadership.endedAt ? "bg-surface-container-high text-on-surface-variant" : "bg-secondary-container text-primary"}`}>{leadership.endedAt ? "Terminée" : "En cours"}</span></div><p className="mt-1 text-sm text-on-surface-variant">{leadership.team.name} · {leadership.team.section.name} · année pastorale {leadership.pastoralYear}{leadership.endedAt ? ` · terminée le ${dateLabel(leadership.endedAt)}` : ""}</p>{context.canManageTeamLeadership && !leadership.endedAt && <EndTeamLeadershipButton leadershipId={leadership.id} personId={person.id} actorScopeId={context.assignment.scopeId!} />}</article>)}</div> : <p className="rounded-xl bg-surface-container-low p-4 text-sm leading-6 text-on-surface-variant">Aucune fonction ni mandat n’est enregistré dans ce périmètre.</p>}
          {context.canCreateMandate && mandateRole && person.status === "ACTIVE" && <div className="mt-4"><CreateMandateForm personId={person.id} role={mandateRole} actorScopeId={context.assignment.scopeId} scopes={mandateScopes} fonctions={mandateFonctions} returnHref={profileHref} today={new Date().toISOString().slice(0, 10)} /></div>}
          {context.canManageTeamLeadership && person.status === "ACTIVE" && context.assignment.scopeId && <div className="mt-4"><CreateTeamLeadershipForm personId={person.id} actorScopeId={context.assignment.scopeId} teams={leadershipTeams} returnHref={profileHref} /></div>}
        </Section>

        <Section title="Accès à l’application" description="Le compte applicatif est indépendant de l’existence de la personne et de ses fonctions.">
          {!person.account ? <p className="rounded-xl bg-surface-container-low p-4 text-sm leading-6 text-on-surface-variant">Aucun compte applicatif n’est associé à cette personne. Cela n’empêche pas son enregistrement ni son appartenance au mouvement.</p> : <div><div className="flex flex-wrap items-center gap-3"><span className={`rounded-full px-3 py-1 text-sm font-semibold ${person.account.status === "ACTIVE" ? "bg-secondary-container text-primary" : "bg-error-container text-on-error-container"}`}>{person.account.status === "ACTIVE" ? "Compte actif" : person.account.status === "SUSPENDED" ? "Compte suspendu" : "Compte bloqué"}</span><span className="text-sm text-on-surface-variant">{activeRoles.length} rôle{activeRoles.length === 1 ? "" : "s"} actif{activeRoles.length === 1 ? "" : "s"} visible{activeRoles.length === 1 ? "" : "s"} dans ce périmètre</span></div>{activeRoles.length ? <ul className="mt-4 space-y-2">{activeRoles.map((assignment) => <li key={`${assignment.role.code}-${assignment.scopeType}-${assignment.scopeId ?? "global"}`} className="rounded-xl bg-surface-container-low p-3 text-sm"><strong className="text-primary">{roleLabels[assignment.role.code] ?? assignment.role.code}</strong><span className="ml-2 text-on-surface-variant">· {scopeLabel(assignment.scopeType)}</span><span className="mt-1 block text-xs text-on-surface-variant">Attribué le {dateLabel(assignment.startDate)}</span></li>)}</ul> : <p className="mt-4 text-sm text-on-surface-variant">Aucun rôle applicatif actif n’est visible dans ce périmètre.</p>}</div>}
        </Section>
      </div>

      <p className="mt-5 rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm leading-6 text-on-surface-variant">L’état civil est modifiable uniquement par les administrateurs autorisés du périmètre et chaque changement est journalisé. Les mandats, appartenances et accès restent des opérations séparées ; les transferts suivent leur workflow de validation.</p>
    </div>
  </ScopedAdminShell>;
}
