import Link from "next/link";
import { notFound } from "next/navigation";
import { ConfidenceBadge, PortalFooter, PortalHeader } from "@/components/portal";
import { getPublicParoisse } from "@/modules/organisation/public";

export const dynamic = "force-dynamic";

const gradeLabels: Record<string, string> = { BENJAMIN: "Benjamin", CADET: "Cadet", AINE: "Aîné", MENEUR: "Meneur" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(date);
}

function initials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export default async function ParoisseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const paroisse = await getPublicParoisse(decodeURIComponent(id));
  if (!paroisse) notFound();

  const teams = paroisse.sections.flatMap((section) => section.teams.map((team) => ({ ...team, sectionName: section.name })));
  const leaders = teams.flatMap((team) => team.leaderships.map((leadership) => leadership.person)).filter((person, index, people) => person.status === "ACTIVE" && people.findIndex((item) => item.id === person.id) === index);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-surface text-on-surface">
      <PortalHeader />
      <main>
        <section className="px-5 pb-10 pt-8 sm:px-10 sm:pb-14 sm:pt-12 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-[1600px]"><Link href="/paroisses" className="text-sm font-semibold text-primary hover:underline">← Retour à l’annuaire</Link>
            <div className="mt-8 grid gap-8 overflow-hidden rounded-[2rem] bg-primary p-7 text-on-primary sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16 xl:p-20">
              <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-fixed">Fiche paroisse · {paroisse.doyenne.name}</p><h1 className="mt-5 max-w-3xl font-display-lg text-display-lg sm:text-6xl">{paroisse.name}</h1><p className="mt-4 text-lg text-primary-fixed">{paroisse.ville.name} · Diocèse de Daloa</p><p className="mt-6 max-w-2xl leading-7 text-primary-fixed">Retrouvez ici les équipes, les sections et les activités publiques documentées pour cette paroisse.</p><div className="mt-8"><ConfidenceBadge confidence={paroisse.confidence} /></div></div>
              <div className="grid grid-cols-2 gap-3 self-end sm:gap-4"><div className="rounded-2xl border border-primary-fixed-dim/50 bg-primary-container p-5"><strong className="block text-3xl text-on-primary">{paroisse.sections.length}</strong><span className="mt-2 block text-sm text-primary-fixed">sections</span></div><div className="rounded-2xl border border-primary-fixed-dim/50 bg-primary-container p-5"><strong className="block text-3xl text-on-primary">{teams.length}</strong><span className="mt-2 block text-sm text-primary-fixed">équipes</span></div><div className="rounded-2xl border border-primary-fixed-dim/50 bg-primary-container p-5"><strong className="block text-3xl text-on-primary">{paroisse.activities.length}</strong><span className="mt-2 block text-sm text-primary-fixed">activités</span></div><div className="rounded-2xl border border-primary-fixed-dim/50 bg-primary-container p-5"><strong className="block text-3xl text-on-primary">{leaders.length}</strong><span className="mt-2 block text-sm text-primary-fixed">responsables</span></div></div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1600px] gap-8 px-5 pb-20 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-16 xl:px-24">
          <aside className="h-fit rounded-[1.5rem] border border-outline-variant bg-surface-container-lowest p-6 lg:sticky lg:top-24"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Repères</p><nav className="mt-5 flex flex-wrap gap-2 lg:block lg:space-y-2" aria-label="Sections de la fiche"><a href="#equipes" className="inline-block rounded-xl bg-primary px-3 py-2.5 text-sm font-semibold text-on-primary">Équipes</a><a href="#activites" className="inline-block rounded-xl px-3 py-2.5 text-sm text-primary hover:bg-surface-container-low">Activités</a><a href="#source" className="inline-block rounded-xl px-3 py-2.5 text-sm text-primary hover:bg-surface-container-low">Fiabilité</a></nav>{paroisse.address && <div className="mt-7 border-t border-outline-variant/60 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Adresse</p><p className="mt-2 text-sm leading-6 text-on-surface-variant">{paroisse.address}</p></div>}<div className="mt-7 border-t border-outline-variant/60 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Doyenné</p><p className="mt-2 font-semibold text-primary">{paroisse.doyenne.name}</p><p className="mt-1 text-sm text-on-surface-variant">{paroisse.doyenne.diocese.name}</p></div></aside>

          <div className="space-y-10">
            <section id="equipes" className="scroll-mt-24 rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-6 sm:p-9"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Organisation locale</p><h2 className="mt-3 font-display-lg text-display-lg text-primary">Les équipes CV-AV.</h2></div><p className="text-sm text-on-surface-variant">{teams.length} équipe{teams.length > 1 ? "s" : ""} documentée{teams.length > 1 ? "s" : ""}</p></div>{teams.length > 0 ? <div className="mt-8 grid gap-4 sm:grid-cols-2">{teams.map((team) => <article key={team.id} className="rounded-2xl border border-outline-variant/70 bg-[#f7f4ed] p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">{team.sectionName}</p><h3 className="mt-2 font-title-md text-title-md text-primary">{team.name}</h3></div>{team.targetGradeCode && <span className="rounded-full bg-tertiary-fixed-dim px-2.5 py-1 text-xs font-semibold text-on-tertiary-fixed">{gradeLabels[team.targetGradeCode] ?? team.targetGradeCode}</span>}</div><div className="mt-5 border-t border-outline-variant/60 pt-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Encadrement documenté</p>{team.leaderships.length > 0 ? <div className="mt-3 space-y-2">{team.leaderships.filter((leadership) => leadership.person.status === "ACTIVE").map((leadership) => <div key={`${team.id}-${leadership.person.id}`} className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">{initials(leadership.person.firstName, leadership.person.lastName)}</span><div><p className="text-sm font-medium text-primary">{leadership.person.firstName} {leadership.person.lastName}</p><p className="text-xs text-on-surface-variant">{leadership.role === "LEADER" ? "Chef d’équipe" : "Assistant"}</p></div></div>)}</div> : <p className="mt-2 text-sm leading-6 text-on-surface-variant">Le responsable de cette équipe n’est pas encore documenté publiquement.</p>}</div></article>)}</div> : <div className="mt-8 rounded-2xl border border-dashed border-outline-variant bg-[#f7f4ed] p-8 text-center"><p className="font-semibold text-primary">Les équipes sont à documenter.</p><p className="mt-2 text-sm leading-6 text-on-surface-variant">Cette fiche affichera les branches, les équipes et les responsables après validation par la paroisse.</p></div>}</section>

            <section id="activites" className="scroll-mt-24 rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-6 sm:p-9"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Vie locale</p><h2 className="mt-3 font-display-lg text-display-lg text-primary">Activités et événements.</h2></div><span className="text-sm text-on-surface-variant">{paroisse.activities.length} publication{paroisse.activities.length > 1 ? "s" : ""}</span></div>{paroisse.activities.length > 0 ? <div className="mt-8 grid gap-4 sm:grid-cols-2">{paroisse.activities.map((activity) => <article key={activity.id} className="rounded-2xl border border-outline-variant/70 bg-[#f7f4ed] p-5"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-secondary-container px-3 py-1.5 text-xs font-semibold text-on-secondary-fixed">{activity.activityType.name}</span><time className="text-xs text-on-surface-variant" dateTime={activity.startDate.toISOString()}>{formatDate(activity.startDate)}</time></div><h3 className="mt-5 font-title-md text-title-md text-primary">{activity.name}</h3>{activity.location && <p className="mt-2 text-sm text-on-surface-variant">{activity.location}</p>}<p className="mt-4 text-xs text-secondary">{activity.status === "COMPLETED" ? "Événement réalisé" : activity.status === "ONGOING" ? "En cours" : "À venir"}</p></article>)}</div> : <div className="mt-8 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center"><div className="flex min-h-48 items-end rounded-2xl bg-primary p-5 text-on-primary"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-tertiary-fixed">Galerie de la paroisse</p><p className="mt-3 text-sm leading-6 text-primary-fixed">Les photos authentiques des activités apparaîtront ici après validation.</p></div></div><div><p className="font-semibold text-primary">Aucune activité publique publiée pour le moment.</p><p className="mt-2 text-sm leading-6 text-on-surface-variant">Les responsables pourront ajouter les événements passés ou à venir depuis l’espace d’administration, avec leurs médias et les autorisations nécessaires.</p></div></div>}</section>

            <section id="source" className="scroll-mt-24 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.16em]">Traçabilité de la donnée</p><p className="mt-3 text-sm leading-6">{paroisse.source ?? "La source de cette information doit encore être documentée."}{paroisse.sourceDate ? ` (${formatDate(paroisse.sourceDate)})` : ""}</p>{paroisse.confidence !== "CONFIRMED_CURRENT" && <p className="mt-3 text-sm leading-6">Le rattachement est affiché à titre documentaire et doit être confirmé avant d’être présenté comme actuel.</p>}</section>
          </div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
