import Link from "next/link";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { PublicPhoto } from "./PublicPhoto";

type Leader = { id: string; firstName: string; lastName: string; status: string };
type Team = { id: string; name: string; leaderships: { person: Leader; role: string; pastoralYear?: string }[] };

export type PublicParishCardData = {
  id: string;
  name: string;
  confidence: "CONFIRMED_CURRENT" | "OFFICIAL_HISTORICAL" | "HISTORICAL_TO_VERIFY" | "TO_DOCUMENT";
  ville: { name: string };
  sections: { id: string; name: string; teams: Team[] }[];
};

export function ParishCard({ parish }: { parish: PublicParishCardData }) {
  const teams = parish.sections.flatMap((section) => section.teams.map((team) => ({ ...team, sectionName: section.name })));

  return (
    <article className="rounded-card border border-outline-variant/80 bg-surface-container-lowest p-4 sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">{parish.ville.name}</p>
          <h3 className="mt-1 break-words font-title-md text-title-md text-primary">{parish.name}</h3>
          <div className="mt-3"><ConfidenceBadge confidence={parish.confidence} /></div>
        </div>
        <div className="min-w-0 border-t border-outline-variant pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Équipes et responsables documentés</p>
          {teams.length > 0 ? <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {teams.slice(0, 4).map((team) => {
              const latestYear = team.leaderships[0]?.pastoralYear;
              const leaders = team.leaderships.filter((leadership) => leadership.person.status === "ACTIVE" && (!latestYear || leadership.pastoralYear === latestYear));
              return <li key={team.id} className="min-w-0 rounded-xl bg-surface-container-low px-3 py-2.5">
                <span className="block truncate text-sm font-semibold text-primary">{team.name}</span>
                {leaders.length > 0 ? leaders.map(({ person, role }) => <span key={person.id} className="mt-1 flex min-w-0 items-center gap-2 text-xs text-on-surface-variant"><PublicPhoto src={`/assets/public/responsables/${person.id}.webp`} alt={`Portrait de ${person.firstName} ${person.lastName}`} label={`${person.firstName[0] ?? ""}${person.lastName[0] ?? ""}`} className="h-8 w-8 shrink-0 rounded-full" sizes="32px" /><span className="min-w-0 truncate">{role === "LEADER" ? "Chef" : "Assistant"} · {person.firstName} {person.lastName}</span></span>) : <span className="mt-1 block text-xs text-on-surface-variant">Responsable à documenter</span>}
              </li>;
            })}
            {teams.length > 4 && <li className="self-center text-xs text-on-surface-variant">+ {teams.length - 4} autre{teams.length - 4 === 1 ? "" : "s"} équipe{teams.length - 4 === 1 ? "" : "s"}</li>}
          </ul> : <p className="mt-2 text-sm leading-6 text-on-surface-variant">La composition des équipes est à documenter.</p>}
        </div>
        <Link href={`/paroisses/${encodeURIComponent(parish.id)}`} className="inline-flex min-h-11 items-center justify-between gap-4 self-start rounded-full border border-primary/25 px-4 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:self-center"><span>Fiche paroisse</span><span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
