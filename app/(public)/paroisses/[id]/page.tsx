import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfidenceBadge, DirectoryFooter, DirectoryHeader, PublicPhoto } from "@/components/portal";
import { getPublicParoisse } from "@/modules/organisation/public";
import { getParishCoverPhoto } from "@/lib/portal/public-photos";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const paroisse = await getPublicParoisse(decodeURIComponent(id));
  return paroisse
    ? { title: `${paroisse.name} | Annuaire CV-AV Daloa`, description: `Équipes, responsables et informations documentées de la paroisse ${paroisse.name}, ${paroisse.ville.name}.` }
    : { title: "Paroisse introuvable | CV-AV Daloa", robots: { index: false, follow: true } };
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(date);
}

function latestLeaders(leaderships: { pastoralYear: string; role: string; person: { id: string; firstName: string; lastName: string; status: string } }[]) {
  const latestYear = leaderships[0]?.pastoralYear;
  return leaderships.filter(({ pastoralYear, person }) => person.status === "ACTIVE" && pastoralYear === latestYear);
}

export default async function ParoisseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const paroisse = await getPublicParoisse(decodeURIComponent(id));
  if (!paroisse) notFound();

  const teams = paroisse.sections.flatMap((section) => section.teams.map((team) => ({ ...team, sectionName: section.name, currentLeaders: latestLeaders(team.leaderships) })));
  const coverPhoto = getParishCoverPhoto(paroisse.id);
  const leaders = teams.flatMap((team) => team.currentLeaders.map((leadership) => leadership.person)).filter((person, index, people) => people.findIndex((item) => item.id === person.id) === index);
  const teamPhotoSlots = Array.from({ length: 5 }, (_, index) => teams[index] ?? null);

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <DirectoryHeader />
      <main className="flex-1">
        <section className="relative isolate min-h-[760px] overflow-hidden bg-primary text-white sm:min-h-[700px]">
          <div className="absolute inset-0" aria-hidden="true">
            <PublicPhoto src={coverPhoto ?? `/assets/public/paroisses/${paroisse.id}/couverture.webp`} alt="" label={coverPhoto ? "Photo indisponible" : "Photo de couverture à ajouter"} placeholderPosition="center" className="h-full w-full" fit="contain" containBackdrop backgroundClassName="bg-primary" sizes="100vw" priority />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-primary/55" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1600px] flex-col px-4 py-6 sm:min-h-[700px] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
            <nav aria-label="Fil d’Ariane" className="flex flex-wrap items-center gap-2 self-start rounded-full bg-primary/90 px-4 text-sm text-white">
              <Link href="/paroisses" className="inline-flex min-h-11 items-center font-semibold text-white hover:underline">Annuaire</Link><span aria-hidden="true">/</span><Link href={`/doyennes/${encodeURIComponent(paroisse.doyenne.id)}`} className="inline-flex min-h-11 items-center font-semibold text-white hover:underline">{paroisse.doyenne.name}</Link><span aria-hidden="true">/</span><span aria-current="page">{paroisse.name}</span>
            </nav>

            <div className="mt-10 grid flex-1 content-start gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-center">
              <div className="max-w-3xl rounded-feature bg-primary/90 p-5 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Fiche paroisse · {paroisse.doyenne.name}</p>
                <h1 className="mt-3 font-display-lg text-display-lg text-white sm:text-6xl">{paroisse.name}</h1>
                <p className="mt-3 text-lg text-white/90">{paroisse.ville.name} · Diocèse de Daloa</p>
                <p className="mt-4 max-w-2xl leading-7 text-white/90">Équipes, responsables et activités documentés pour cette paroisse.</p>
                <div className="mt-5"><ConfidenceBadge confidence={paroisse.confidence} /></div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/25 pt-5">
                  <div><strong className="block text-2xl tabular-nums text-white">{paroisse.sections.length}</strong><span className="text-xs text-white/80">sections</span></div>
                  <div><strong className="block text-2xl tabular-nums text-white">{teams.length}</strong><span className="text-xs text-white/80">équipes</span></div>
                  <div><strong className="block text-2xl tabular-nums text-white">{leaders.length}</strong><span className="text-xs text-white/80">responsables</span></div>
                </div>
              </div>

              <section aria-labelledby="equipe-photos-title" className="rounded-feature bg-surface-container-lowest p-4 text-primary sm:p-6">
                <h2 id="equipe-photos-title" className="font-title-md text-title-md">Les équipes de la paroisse</h2>
                <p className="mt-1 text-sm text-on-surface-variant">Portraits des équipes · emplacements à compléter</p>
                <ul className="mt-5 grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 sm:grid-cols-5 sm:gap-3">
                  {teamPhotoSlots.map((team, index) => (
                    <li key={team?.id ?? `team-photo-slot-${index + 1}`} className="flex min-w-0 flex-col items-center gap-2 text-center">
                      {team ? (
                        <PublicPhoto src={`/assets/public/paroisses/${paroisse.id}/equipes/${team.id}.webp`} alt={`Photo de l’équipe ${team.name}`} label="Photo à ajouter" placeholderPosition="center" className="h-16 w-16 rounded-full border-2 border-outline-variant sm:h-[4.5rem] sm:w-[4.5rem]" sizes="72px" />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-outline bg-surface-container-low text-center text-[10px] font-semibold leading-tight text-on-surface-variant sm:h-[4.5rem] sm:w-[4.5rem]">Photo<br />à ajouter</div>
                      )}
                      <span className="w-full max-w-24 truncate text-xs font-medium text-primary" title={team?.name ?? "Équipe à documenter"}>{team?.name ?? "Équipe à documenter"}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-8 sm:px-8 sm:py-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:px-12 lg:py-14">
          <aside className="h-fit rounded-feature border border-outline-variant bg-surface-container-lowest p-5 lg:sticky lg:top-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Dans cette fiche</p><nav className="mt-3 grid" aria-label="Sections de la fiche"><a href="#equipes" className="inline-flex min-h-11 items-center border-b border-outline-variant text-sm font-medium text-primary hover:underline">Équipes</a><a href="#activites" className="inline-flex min-h-11 items-center border-b border-outline-variant text-sm font-medium text-primary hover:underline">Activités</a><a href="#photos" className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline">Galerie photo</a></nav>{paroisse.address && <div className="mt-5 border-t border-outline-variant pt-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Adresse publiée</p><p className="mt-2 text-sm leading-6 text-on-surface-variant">{paroisse.address}</p></div>}<div className="mt-5 border-t border-outline-variant pt-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Doyenné</p><Link href={`/doyennes/${encodeURIComponent(paroisse.doyenne.id)}`} className="mt-2 inline-flex min-h-11 items-center font-semibold text-primary hover:underline">{paroisse.doyenne.name} ↗</Link></div></aside>

          <div className="min-w-0 space-y-8">
            <section id="equipes" className="scroll-mt-6 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-8"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Organisation locale</p><h2 className="mt-2 font-headline-lg text-headline-lg text-primary">Sections et équipes.</h2></div><p className="text-sm text-on-surface-variant">{teams.length} équipe{teams.length === 1 ? "" : "s"}</p></div>
              {teams.length ? <div className="mt-6 grid gap-3 md:grid-cols-2">{teams.map((team) => <article key={team.id} className="rounded-card border border-outline-variant bg-surface-container-low p-4 sm:p-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">{team.sectionName}</p><h3 className="mt-2 font-title-md text-title-md text-primary">{team.name}</h3>{team.targetGradeCode && <p className="mt-1 text-sm text-on-surface-variant">Parcours : {team.targetGradeCode.toLocaleLowerCase("fr-FR")}</p>}<div className="mt-4 border-t border-outline-variant pt-4"><p className="text-xs font-semibold uppercase tracking-[0.13em] text-secondary">Encadrement</p>{team.currentLeaders.length ? <ul className="mt-3 grid gap-3">{team.currentLeaders.map(({ person, role }) => <li key={`${team.id}-${person.id}`} className="flex min-w-0 items-center gap-3"><PublicPhoto src={`/assets/public/responsables/${person.id}.webp`} alt={`Portrait de ${person.firstName} ${person.lastName}`} label={`${person.firstName[0] ?? ""}${person.lastName[0] ?? ""}`} className="h-12 w-12 shrink-0 rounded-full" sizes="48px" /><span className="min-w-0"><strong className="block truncate text-sm text-primary">{person.firstName} {person.lastName}</strong><span className="text-xs text-on-surface-variant">{role === "LEADER" ? "Chef d’équipe" : "Assistant"}</span></span></li>)}</ul> : <p className="mt-2 text-sm leading-6 text-on-surface-variant">Le responsable de cette équipe n’est pas encore documenté.</p>}</div></article>)}</div> : <div className="mt-6 rounded-card border border-dashed border-outline-variant p-6"><h3 className="font-semibold text-primary">Les équipes sont à documenter.</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">La fiche sera complétée lorsque la paroisse aura transmis son organisation.</p></div>}
            </section>

            <section id="activites" className="scroll-mt-6 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-8"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Vie locale</p><h2 className="mt-2 font-headline-lg text-headline-lg text-primary">Activités et événements.</h2></div><p className="text-sm text-on-surface-variant">{paroisse.activities.length} publication{paroisse.activities.length === 1 ? "" : "s"}</p></div>{paroisse.activities.length ? <div className="mt-6 divide-y divide-outline-variant border-y border-outline-variant">{paroisse.activities.map((activity) => <article key={activity.id} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr_auto] sm:items-center"><time className="text-sm tabular-nums text-on-surface-variant" dateTime={activity.startDate.toISOString()}>{formatDate(activity.startDate)}</time><div><h3 className="font-semibold text-primary">{activity.name}</h3><p className="mt-1 text-sm text-on-surface-variant">{activity.activityType.name}{activity.location ? ` · ${activity.location}` : ""}</p></div><span className="text-xs font-medium text-secondary">{activity.status === "COMPLETED" ? "Terminée" : activity.status === "ONGOING" ? "En cours" : "À venir"}</span></article>)}</div> : <div className="mt-6 rounded-card border border-dashed border-outline-variant p-6"><h3 className="font-semibold text-primary">Aucune activité publiée.</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">Les actualités apparaîtront ici lorsqu’elles seront renseignées et validées pour publication.</p></div>}</section>

            <section id="photos" className="scroll-mt-6 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-8"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Galerie</p><h2 className="mt-2 font-headline-lg text-headline-lg text-primary">La vie de la paroisse en images.</h2></div><p className="text-xs leading-5 text-on-surface-variant">Visuels à publier avec les autorisations nécessaires.</p></div><div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{[1, 2, 3].map((number) => <figure key={number}><PublicPhoto src={`/assets/public/paroisses/${paroisse.id}/activite-0${number}.webp`} alt={`Photographie d’une activité CV-AV à ${paroisse.name}`} label={`Ajouter la photo ${number}`} className="aspect-[4/3] rounded-card" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw" /><figcaption className="mt-2 text-xs text-on-surface-variant">Photo {number} · {paroisse.name}</figcaption></figure>)}</div></section>

            <section className="rounded-feature border border-outline-variant bg-surface-container-low p-5 sm:p-7"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Source et mise à jour</p><p className="mt-3 text-sm leading-6 text-on-surface-variant">{paroisse.source ?? "La source de cette information doit encore être documentée."}{paroisse.sourceDate ? ` (${formatDate(paroisse.sourceDate)})` : ""}</p>{paroisse.confidence !== "CONFIRMED_CURRENT" && <p className="mt-3 text-sm leading-6 text-on-surface-variant">Le rattachement est affiché à titre documentaire et doit être confirmé avant d’être présenté comme actuel.</p>}</section>
          </div>
        </div>
      </main>
      <DirectoryFooter />
    </div>
  );
}
