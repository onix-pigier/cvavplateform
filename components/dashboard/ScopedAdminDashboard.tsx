import Link from "next/link";
import type { Route } from "next";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import type { PeriodFilter } from "@/lib/admin/period";

type DoyenneSummary = { id: string; name: string; aliasLabel: string | null; parishes: { id: string; name: string; confidence: string }[] };
type UpcomingActivity = { id: string; name: string; startDate: Date; endDate: Date; location: string | null; status: string; type: string; attendanceRows: number };
type RecentAttendance = { name: string; date: Date; type: string; present: number; recorded: number };
type Props = {
  roleCode: string; scopeId: string | null; roleLabel: string; scopeName: string; userName: string;
  canCreateMilitants: boolean; canCreatePerson: boolean; canCreateActivity: boolean; canReviewPreRegistrations: boolean; canReadOrganisation: boolean;
  canReadPeople: boolean; canReadActivities: boolean; canReadRequests: boolean; canReadAudit: boolean;
  period: PeriodFilter;
  analytics: { activeMembers: number; allMembers: number; pendingPreRegistrations: number; pendingGradeProposals: number; pendingCertificates: number; teams: number; activeParishes: number; activityCount: number; attendanceCount: number; monthly: { month: string; memberships: number; activities: number; presences: number }[]; deaneryBreakdown: { id: string; name: string; members: number; parishes: number }[] } | null;
  upcomingActivities: UpcomingActivity[];
  recentAttendance: RecentAttendance | null;
  stats: { activeMembers: number; parishes: number; sections: number; pendingApprovals: number };
  doyennes: DoyenneSummary[];
};

function Stat({ label, value, note, href, tone = "blue" }: { label: string; value: number; note: string; href?: string; tone?: "blue" | "green" | "amber" | "neutral" }) {
  const tones = { blue: "bg-primary-fixed text-primary", green: "bg-secondary-container text-on-secondary-container", amber: "bg-tertiary-fixed text-on-tertiary-fixed", neutral: "bg-surface-container-high text-on-surface" };
  const content = <><div className="flex items-center justify-between gap-3"><p className="text-xs font-semibold uppercase tracking-[0.12em]">{label}</p><span className="h-2.5 w-2.5 rounded-full bg-current opacity-60" aria-hidden="true" /></div><p className="mt-4 font-display-lg text-display-lg tabular-nums">{value.toLocaleString("fr-FR")}</p><p className="mt-1 text-sm opacity-80">{note}</p></>;
  const className = `block min-h-32 rounded-2xl border border-outline-variant p-5 ${tones[tone]} ${href ? "transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" : ""}`;
  return href ? <Link href={href as Route} className={className}>{content}</Link> : <article className={className}>{content}</article>;
}

function ActivityList({ items, roleCode, scopeId }: { items: UpcomingActivity[]; roleCode: string; scopeId: string | null }) {
  const roleQuery = `role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`;
  if (!items.length) return <p className="rounded-xl border border-dashed border-outline-variant p-5 text-sm leading-6 text-on-surface-variant">Aucune activité à venir ou en cours n’est enregistrée dans ce périmètre.</p>;
  return <ul className="divide-y divide-outline-variant rounded-2xl border border-outline-variant bg-surface-container-lowest px-5">{items.map((activity) => <li key={activity.id} className="grid gap-3 py-4 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-center"><time dateTime={activity.startDate.toISOString()} className="text-sm font-medium tabular-nums text-on-surface-variant">{new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Abidjan" }).format(activity.startDate)}</time><span className="min-w-0"><strong className="block truncate text-primary">{activity.name}</strong><span className="mt-1 block text-xs text-on-surface-variant">{activity.type}{activity.location ? ` · ${activity.location}` : ""} · {activity.attendanceRows} pointage(s) saisi(s)</span></span><Link href={`/admin/activites/${activity.id}?${roleQuery}` as Route} className="inline-flex min-h-10 items-center justify-center rounded-full border border-outline px-4 text-sm font-semibold text-primary hover:bg-surface-container-low">{activity.status === "ONGOING" ? "Ouvrir l’appel" : "Préparer l’appel"} <span aria-hidden="true" className="ml-2">→</span></Link></li>)}</ul>;
}

export async function ScopedAdminDashboard({ roleCode, scopeId, roleLabel, scopeName, userName, canCreateMilitants, canCreatePerson, canCreateActivity, canReviewPreRegistrations, canReadOrganisation, canReadPeople, canReadActivities, canReadRequests, canReadAudit, period, analytics, upcomingActivities, recentAttendance, stats, doyennes }: Props) {
  const isChef = roleCode === "CHEF";
  const isDiocesan = roleCode === "SUPER_ADMIN";
  const isDeanery = roleCode === "ADMIN_DOYENNE";
  const roleQuery = `role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`;
  const orgHref = `/admin/organisation?${roleQuery}`;
  const peopleHref = `/admin/personnes?${roleQuery}`;
  const activityHref = `/admin/activites?${roleQuery}`;
  const requestHref = `/admin/demandes?${roleQuery}`;
  const gradeProposalsHref = `/admin/propositions/grades?${roleQuery}`;
  const preRegistrationHref = "/admin/pre-inscriptions";
  const reportingHref = `/admin/statistiques?${roleQuery}&period=${period.value}`;
  const pendingPreRegistrations = canReviewPreRegistrations ? (analytics?.pendingPreRegistrations ?? 0) : 0;
  const pendingCertificates = canReadRequests ? (analytics?.pendingCertificates ?? 0) : 0;
  const pendingGradeProposals = roleCode === "ADMIN_PAROISSE" ? (analytics?.pendingGradeProposals ?? 0) : 0;
  const hasPending = pendingPreRegistrations + pendingCertificates + pendingGradeProposals > 0;

  const quickActions = isChef
    ? [
      ...(upcomingActivities[0] ? [{ href: `/admin/activites/${upcomingActivities[0].id}?${roleQuery}`, label: "Ouvrir les présences" }] : []),
      ...(canReadPeople ? [{ href: peopleHref, label: "Voir mon équipe" }] : []),
      ...(canCreateActivity ? [{ href: `/admin/activites/nouvelle?${roleQuery}`, label: "Créer une activité" }] : []),
    ]
    : [
      ...(canCreatePerson ? [{ href: `/admin/personnes/nouvelle?${roleQuery}`, label: "Ajouter une personne" }] : []),
      ...(canCreateActivity ? [{ href: `/admin/activites/nouvelle?${roleQuery}`, label: "Créer une activité" }] : []),
      ...(canReadRequests ? [{ href: requestHref, label: "Voir les demandes" }] : []),
    ];

  return <ScopedAdminShell roleCode={roleCode} roleLabel={roleLabel} scopeLabel={scopeName} userName={userName} scopeId={scopeId} canCreateMilitants={canCreateMilitants} canReviewPreRegistrations={canReviewPreRegistrations} canReadOrganisation={canReadOrganisation} canReadPeople={canReadPeople} canReadActivities={canReadActivities} canReadRequests={canReadRequests} canReadAudit={canReadAudit}>
    <div className="mx-auto max-w-[1440px] space-y-7">
      <header className={`grid gap-5 rounded-3xl p-5 text-on-primary sm:p-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] xl:items-center ${isChef ? "bg-secondary" : "bg-primary"}`}>
        <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-fixed">{isChef ? "Espace terrain" : isDiocesan ? "Pilotage diocésain" : isDeanery ? "Coordination du doyenné" : "Administration locale"} · {scopeName}</p><h1 className="mt-2 font-display-lg text-display-lg">Bonjour, {userName}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-primary-fixed">{isChef ? "Votre équipe, ses activités et l’appel à préparer." : "Les dossiers et activités qui demandent votre attention dans le périmètre affiché."}</p><div className="mt-3 flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-surface-container-lowest/15 px-3 py-1.5 font-semibold">{roleLabel}</span><span className="rounded-full bg-surface-container-lowest/15 px-3 py-1.5">{isChef ? "Année pastorale en cours" : `Indicateurs actuels · ${period.label}`}</span></div></div>
        {canReadActivities && <aside className="rounded-2xl border border-primary-fixed/20 bg-surface-container-lowest/10 p-4" aria-label="Prochaine activité"><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-fixed">{upcomingActivities[0]?.status === "ONGOING" ? "En cours maintenant" : "Prochaine activité"}</p>{upcomingActivities[0] ? <><p className="mt-1 truncate font-semibold">{upcomingActivities[0].name}</p><p className="mt-1 text-sm text-primary-fixed">{new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Abidjan" }).format(upcomingActivities[0].startDate)}</p><Link href={`/admin/activites/${upcomingActivities[0].id}?${roleQuery}` as Route} className="mt-3 inline-flex min-h-9 items-center rounded-full bg-surface-container-lowest px-4 text-xs font-semibold text-primary">{isChef ? "Ouvrir l’appel" : "Ouvrir l’activité"} →</Link></> : <p className="mt-1 text-sm text-primary-fixed">Aucune activité planifiée.</p>}</aside>}
      </header>

      <section aria-labelledby="priority-title" className={`rounded-2xl border p-5 sm:p-6 ${hasPending ? "border-tertiary/40 bg-tertiary-fixed/35" : "border-outline-variant bg-surface-container-lowest"}`}>
        <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Priorités du périmètre</p><h2 id="priority-title" className="mt-1 font-headline-lg text-headline-lg text-primary">À traiter</h2></div><span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${hasPending ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-secondary-container text-on-secondary-container"}`}>{hasPending ? "Intervention requise" : "Aucune action en attente"}</span></div>
        {pendingPreRegistrations || pendingCertificates || pendingGradeProposals ? <ul className="mt-4 grid gap-3 sm:grid-cols-2">{pendingPreRegistrations > 0 && <li><Link href={preRegistrationHref as Route} className="flex min-h-20 items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 hover:border-primary"><span><strong className="block text-primary">Pré-inscriptions à examiner</strong><span className="mt-1 block text-sm text-on-surface-variant">Personnes en attente de décision</span></span><span className="font-display-lg text-display-lg tabular-nums text-primary">{pendingPreRegistrations}</span></Link></li>}{pendingGradeProposals > 0 && <li><Link href={gradeProposalsHref as Route} className="flex min-h-20 items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 hover:border-primary"><span><strong className="block text-primary">Propositions de grade</strong><span className="mt-1 block text-sm text-on-surface-variant">À examiner dans votre paroisse</span></span><span className="font-display-lg text-display-lg tabular-nums text-primary">{pendingGradeProposals}</span></Link></li>}{pendingCertificates > 0 && <li><Link href={requestHref as Route} className="flex min-h-20 items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 hover:border-primary"><span><strong className="block text-primary">Demandes d’attestation</strong><span className="mt-1 block text-sm text-on-surface-variant">Dossiers en attente de validation</span></span><span className="font-display-lg text-display-lg tabular-nums text-primary">{pendingCertificates}</span></Link></li>}</ul> : <p className="mt-3 text-sm leading-6 text-on-surface-variant">Aucun dossier nécessitant une décision n’est en attente dans les files que vous êtes autorisé à consulter.</p>}
      </section>

      <section aria-labelledby="upcoming-title"><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">{isChef ? "Mon équipe" : "Vie du mouvement"}</p><h2 id="upcoming-title" className="mt-1 font-headline-lg text-headline-lg text-primary">{isChef ? "Prochaine activité et présences" : "Activités en cours et à venir"}</h2></div>{canReadActivities && <Link href={activityHref as Route} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">Toutes les activités →</Link>}</div><ActivityList items={upcomingActivities} roleCode={roleCode} scopeId={scopeId} /></section>

      {isChef && recentAttendance && <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Dernier appel enregistré · {recentAttendance.type}</p><div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h2 className="font-title-lg text-title-lg text-primary">{recentAttendance.name}</h2><p className="mt-1 text-sm text-on-surface-variant">{new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "Africa/Abidjan" }).format(recentAttendance.date)}</p></div><p className="font-display-lg text-display-lg tabular-nums text-primary">{recentAttendance.present}<span className="text-lg text-on-surface-variant"> présence(s) confirmée(s) · {recentAttendance.recorded} réponse(s) d’appel</span></p></div><p className="mt-2 text-xs text-on-surface-variant">Le nombre de réponses ne constitue pas un effectif attendu ; les absences non saisies ne sont pas extrapolées.</p></section>}

      <section aria-label="Indicateurs utiles" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {canReadPeople && <Stat label={isChef ? "Membres de mon équipe" : "Personnes actives"} value={stats.activeMembers} note="Appartenances actives maintenant" href={peopleHref} tone="blue" />}
        {!isChef && canReadOrganisation && <Stat label="Paroisses actives" value={stats.parishes} note={isDiocesan ? "Dans le diocèse" : "Dans le périmètre autorisé"} href={orgHref} tone="green" />}
        {!isChef && canReadOrganisation && <Stat label="Sections actives" value={stats.sections} note="Référentiel actuel" href={orgHref} tone="amber" />}
        {canReadActivities && <Stat label="Activités suivies" value={analytics?.activityCount ?? 0} note={`Sur ${period.label}`} href={activityHref} tone="neutral" />}
      </section>

      <section aria-labelledby="actions-title" className="rounded-2xl border border-outline-variant bg-surface-container-low p-5 sm:p-6"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Passer à l’action</p><h2 id="actions-title" className="mt-1 font-headline-lg text-headline-lg text-primary">Actions rapides</h2></div>{!isChef && <Link href={reportingHref as Route} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">Ouvrir les statistiques →</Link>}</div><div className="mt-4 flex flex-wrap gap-3">{quickActions.map((item) => <Link key={item.label} href={item.href as Route} className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary hover:bg-primary-container">{item.label}<span aria-hidden="true" className="ml-2">→</span></Link>)}{isDiocesan && canReadAudit && <Link href="/admin/audit" className="inline-flex min-h-11 items-center rounded-full border border-outline bg-surface-container-lowest px-5 text-sm font-semibold text-primary">Journal d’audit</Link>}{isDiocesan && <Link href="/admin/access-requests" className="inline-flex min-h-11 items-center rounded-full border border-outline bg-surface-container-lowest px-5 text-sm font-semibold text-primary">Sécurité des comptes</Link>}</div></section>

      {(isDiocesan || isDeanery) && canReadOrganisation && <section aria-labelledby="territory-title"><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Coordination territoriale</p><h2 id="territory-title" className="mt-1 font-headline-lg text-headline-lg text-primary">Doyennés et paroisses de votre périmètre</h2></div><Link href={orgHref as Route} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">Ouvrir le référentiel →</Link></div>{doyennes.length ? <div className="grid gap-3 lg:grid-cols-2">{doyennes.map((doyenne) => <article key={doyenne.id} className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5"><p className="text-xs font-semibold uppercase tracking-wide text-secondary">{doyenne.aliasLabel || "Doyenné"}</p><h3 className="mt-1 font-title-lg text-title-lg text-primary">{doyenne.name}</h3><p className="mt-1 text-sm text-on-surface-variant">{doyenne.parishes.length} paroisses</p><ul className="mt-4 divide-y divide-outline-variant">{doyenne.parishes.slice(0, 5).map((parish) => <li key={parish.id} className="py-2 text-sm text-on-surface">{parish.name}<span className="ml-2 text-xs text-on-surface-variant">{parish.confidence === "CONFIRMED_CURRENT" ? "Confirmée" : parish.confidence === "OFFICIAL_HISTORICAL" ? "Source historique" : parish.confidence === "TO_DOCUMENT" ? "À documenter" : "À recouper"}</span></li>)}</ul></article>)}</div> : <p className="rounded-xl border border-outline-variant p-5 text-sm text-on-surface-variant">Aucune unité territoriale active n’est disponible dans ce périmètre.</p>}</section>}
    </div>
  </ScopedAdminShell>;
}
