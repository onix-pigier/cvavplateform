import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

type Membership = {
  id: string;
  parish: string;
  deanery: string;
  section: string;
  team: string | null;
  pastoralYear: string;
};
type PresenceItem = { id: string; date: Date; activity: string; present: boolean };
type ActivityItem = { id: string; name: string; startDate: Date; endDate: Date; location: string | null; type: string; status: string };
type ContributionItem = { id: string; year: string; code: string; expected: number; paid: number; status: string };
type CertificateRequestItem = { id: string; type: string; status: string; createdAt: Date; number: string | null; certificateStatus: string | null };

type Props = {
  person: { firstName: string; lastName: string; username: string };
  memberships: Membership[];
  currentGrade: string | null;
  presentCount: number;
  attendanceTotal: number;
  pastoralYear: string | null;
  recentPresences: PresenceItem[];
  upcomingActivities: ActivityItem[];
  contributions: ContributionItem[];
  certificateRequests: CertificateRequestItem[];
};

const requestStatuses: Record<string, string> = {
  PENDING: "En attente de vérification",
  SECTION_APPROVED: "En attente de validation au doyenné",
  DOYENNE_APPROVED: "En attente de validation au diocèse",
  APPROVED: "Approuvée",
  ISSUED: "Attestation émise",
  REJECTED: "Refusée",
};
const paymentStatuses: Record<string, string> = {
  UP_TO_DATE: "À jour",
  PARTIAL: "Partielle",
  LATE: "En attente de régularisation",
};
const money = (value: number) => `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value)} FCFA`;
const date = (value: Date) => new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeZone: "Africa/Abidjan" }).format(value);

function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return <div id={id} className="scroll-mt-24 border-b border-outline-variant pb-4">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">{eyebrow}</p>
    <h2 className="mt-2 font-headline-lg text-headline-lg text-primary">{title}</h2>
  </div>;
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return <p className="rounded-card border border-dashed border-outline-variant bg-surface-container-lowest p-5 text-sm leading-6 text-on-surface-variant">{children}</p>;
}

export function ScopedMemberDashboard({ person, memberships, currentGrade, presentCount, attendanceTotal, pastoralYear, recentPresences, upcomingActivities, contributions, certificateRequests }: Props) {
  const nav = <nav aria-label="Navigation de mon espace" className="grid gap-1">
    {[["#resume", "Mon tableau de bord"], ["#rattachement", "Mon rattachement"], ["#activites", "Activités et présences"], ["#attestations", "Demandes et attestations"], ["#cotisations", "Cotisations"]].map(([href, label]) => <a key={href} href={href} className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-on-surface-variant hover:bg-surface-container-high hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{label}</a>)}
  </nav>;

  return <div className="min-h-screen bg-surface text-on-surface">
    <header className="border-b border-outline-variant/60 bg-primary text-on-primary">
      <div className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-8">
        <Link href="/militant/dashboard" className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-on-primary">
          <Image src="/assets/public/logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
          <span className="min-w-0"><span className="block truncate text-sm font-semibold">CV-AV · Diocèse de Daloa</span><span className="block truncate text-xs text-primary-fixed">Espace personnel · {person.username}</span></span>
        </Link>
        <Link href="/" className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-primary-fixed/40 px-4 text-sm font-medium hover:bg-primary-container">Portail public</Link>
      </div>
    </header>

    <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[17rem_minmax(0,1fr)]">
      <aside className="hidden border-r border-outline-variant/60 bg-surface-container-lowest p-4 lg:block">
        <div className="sticky top-5">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">Mon espace</p>
          {nav}
          <div className="mt-8 border-t border-outline-variant px-3 pt-4">
            <p className="text-sm font-semibold text-primary">{person.firstName} {person.lastName}</p>
            <p className="mt-1 text-xs leading-5 text-on-surface-variant">Compte personnel. Ces informations ne sont visibles que par vous et les responsables habilités.</p>
          </div>
        </div>
      </aside>

      <main className="min-w-0 px-4 pb-12 pt-5 sm:px-8 sm:pt-8 lg:px-10">
        <details className="mb-6 rounded-xl border border-outline-variant bg-surface-container-lowest p-3 lg:hidden">
          <summary className="flex min-h-10 cursor-pointer items-center justify-between font-semibold text-primary">Navigation de mon espace <span aria-hidden="true">+</span></summary>
          <div className="pt-2">{nav}</div>
        </details>

        <div className="mx-auto max-w-6xl space-y-9">
          <section id="resume" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Tableau de bord personnel</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h1 className="font-display-lg text-display-lg text-primary">Bonjour, {person.firstName}.</h1><p className="mt-2 text-sm leading-6 text-on-surface-variant">Votre espace personnel · {memberships.length ? `année pastorale ${pastoralYear ?? memberships[0]?.pastoralYear}` : "aucun rattachement actif"}</p></div><Link href={"/espace/profil" as Route} className="inline-flex min-h-11 items-center rounded-full border border-outline px-4 text-sm font-semibold text-primary hover:bg-surface-container-low">Mon profil</Link></div>
            {memberships[0] && <p className="mt-4 rounded-xl bg-secondary-container px-4 py-3 text-sm leading-6 text-on-secondary-container"><strong>{memberships[0].section}</strong>{memberships[0].team ? ` · ${memberships[0].team}` : ""} · {memberships[0].parish} · Doyenné {memberships[0].deanery}{memberships.length > 1 ? ` · +${memberships.length - 1} rattachement(s)` : ""}</p>}
            <article className="mt-4 rounded-2xl border border-outline-variant bg-primary p-5 text-on-primary sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-fixed">Prochaine activité</p>{upcomingActivities[0] ? <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="font-headline-lg text-headline-lg">{upcomingActivities[0].name}</h2><p className="mt-1 text-sm text-primary-fixed">{date(upcomingActivities[0].startDate)}{upcomingActivities[0].location ? ` · ${upcomingActivities[0].location}` : ""}</p></div><a href="#activites" className="inline-flex min-h-11 items-center justify-center rounded-full bg-surface-container-lowest px-5 text-sm font-semibold text-primary">Voir les détails <span className="ml-2" aria-hidden="true">→</span></a></div> : <p className="mt-2 text-sm leading-6 text-primary-fixed">Aucune activité à venir n’est publiée pour vos rattachements actifs.</p>}</article>
            <div className="mt-3 grid gap-3 sm:grid-cols-2"><article className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-4"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">Grade actuel</p><p className="mt-2 font-title-lg text-title-lg text-primary">{currentGrade ?? "Non renseigné"}</p><p className="mt-1 text-xs text-on-surface-variant">Distinct d’une fonction de chef.</p></article><article className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-4"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">Appels de la période saisis</p><p className="mt-2 font-title-lg text-title-lg tabular-nums text-primary">{presentCount} présence(s) sur {attendanceTotal} feuille(s)</p><p className="mt-1 text-xs text-on-surface-variant">Depuis le rattachement actif{pastoralYear ? ` · ${pastoralYear}` : ""}</p></article></div>
          </section>

          <section aria-labelledby="upcoming-title" className="space-y-4">
            <SectionTitle id="activites" eyebrow="Vie du mouvement" title="Activités et présences" />
            <h3 id="upcoming-title" className="sr-only">Activités à venir</h3>
            {upcomingActivities.length ? <ul className="divide-y divide-outline-variant rounded-2xl border border-outline-variant bg-surface-container-lowest px-5">{upcomingActivities.map((activity) => <li key={activity.id} className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-center"><time className="text-sm tabular-nums text-on-surface-variant" dateTime={activity.startDate.toISOString()}>{date(activity.startDate)}</time><span><strong className="block text-sm text-primary">{activity.name}</strong><span className="mt-1 block text-xs text-on-surface-variant">{activity.type}{activity.location ? ` · ${activity.location}` : ""}</span></span><span className="text-xs text-on-surface-variant">{activity.status === "ONGOING" ? "En cours" : "À venir"}</span></li>)}</ul> : <EmptyState>Aucune activité à venir n’est publiée pour vos rattachements actifs.</EmptyState>}
            <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5">
              <h3 className="font-title-md text-title-md text-primary">Présences récentes</h3>
              {recentPresences.length ? <ul className="mt-3 divide-y divide-outline-variant">{recentPresences.map((presence) => <li key={presence.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"><span><strong className="text-primary">{presence.activity}</strong><span className="ml-2 text-on-surface-variant">{date(presence.date)}</span></span><span className={`rounded-full px-3 py-1 text-xs font-semibold ${presence.present ? "bg-secondary-container text-on-secondary-container" : "bg-surface-container-high text-on-surface-variant"}`}>{presence.present ? "Présence confirmée" : "Absence enregistrée"}</span></li>)}</ul> : <p className="mt-3 text-sm leading-6 text-on-surface-variant">Aucune présence n’a encore été enregistrée.</p>}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle id="attestations" eyebrow="Suivi de mes démarches" title="Demandes et attestations" />
            {certificateRequests.length ? <ul className="divide-y divide-outline-variant rounded-2xl border border-outline-variant bg-surface-container-lowest px-5">{certificateRequests.map((request) => <li key={request.id} className="flex flex-wrap items-center justify-between gap-4 py-4"><div><p className="font-semibold text-primary">{request.type}</p><p className="mt-1 text-xs text-on-surface-variant">Demande du {date(request.createdAt)} · {requestStatuses[request.status] ?? "Statut à vérifier"}</p>{request.number && <p className="mt-1 font-mono text-xs text-on-surface-variant">N° {request.number}</p>}</div>{request.certificateStatus === "VALID" ? <a href={`/api/requests/${encodeURIComponent(request.id)}/certificate`} className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-container">Télécharger le PDF</a> : request.certificateStatus === "REVOKED" ? <span className="text-xs font-semibold text-error">Attestation révoquée</span> : <span className="text-xs text-on-surface-variant">Aucun document émis</span>}</li>)}</ul> : <EmptyState>Vous n’avez pas encore de demande d’attestation enregistrée. Cette page affiche uniquement les demandes qui vous appartiennent.</EmptyState>}
          </section>

          <section className="space-y-4">
            <SectionTitle id="cotisations" eyebrow="Situation personnelle" title="Cotisations" />
            {contributions.length ? <ul className="divide-y divide-outline-variant rounded-2xl border border-outline-variant bg-surface-container-lowest px-5">{contributions.map((item) => <li key={item.id} className="flex flex-wrap items-center justify-between gap-4 py-4"><div><p className="font-semibold text-primary">{item.year} · {item.code}</p><p className="mt-1 text-xs text-on-surface-variant">{paymentStatuses[item.status] ?? "Statut à vérifier"}</p></div><p className="text-right text-sm tabular-nums"><strong className="block text-primary">{money(item.paid)} versés</strong><span className="mt-1 block text-xs text-on-surface-variant">sur {money(item.expected)}</span></p></li>)}</ul> : <EmptyState>Aucune cotisation n’est enregistrée dans votre dossier.</EmptyState>}
          </section>

          <section className="space-y-4">
            <SectionTitle id="rattachement" eyebrow="Informations privées" title="Mon rattachement CV-AV" />
            {memberships.length ? <div className="grid gap-3 md:grid-cols-2">{memberships.map((membership) => <article key={membership.id} className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">Année pastorale · {membership.pastoralYear}</p><h3 className="mt-3 font-title-md text-title-md text-primary">{membership.parish}</h3><dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-xs text-on-surface-variant">Doyenné</dt><dd className="mt-1 font-medium">{membership.deanery}</dd></div><div><dt className="text-xs text-on-surface-variant">Section</dt><dd className="mt-1 font-medium">{membership.section}</dd></div>{membership.team && <div className="sm:col-span-2"><dt className="text-xs text-on-surface-variant">Équipe</dt><dd className="mt-1 font-medium">{membership.team}</dd></div>}</dl></article>)}</div> : <EmptyState>Aucun rattachement actif n’est associé à votre compte. Contactez le responsable de votre paroisse.</EmptyState>}
          </section>

          <p className="border-t border-outline-variant pt-5 text-xs leading-5 text-on-surface-variant">Les informations de cet espace sont personnelles. Seuls les responsables autorisés dans votre périmètre peuvent consulter les éléments nécessaires à leur mission.</p>
        </div>
      </main>
    </div>
  </div>;
}
