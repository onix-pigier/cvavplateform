import Link from "next/link";
import { ConfidenceBadge } from "./ConfidenceBadge";

type Leader = { id: string; firstName: string; lastName: string; status: string };
type Team = { id: string; name: string; leaderships: { person: Leader; role: string }[] };

export type PublicParishCardData = {
  id: string;
  name: string;
  confidence: "CONFIRMED_CURRENT" | "OFFICIAL_HISTORICAL" | "HISTORICAL_TO_VERIFY" | "TO_DOCUMENT";
  ville: { name: string };
  sections: { id: string; name: string; teams: Team[] }[];
};

export function ParishCard({ parish }: { parish: PublicParishCardData }) {
  const teams = parish.sections.flatMap((section) => section.teams);
  const leaders = teams
    .flatMap((team) => team.leaderships.map((leadership) => leadership.person))
    .filter((person, index, people) => person.status === "ACTIVE" && people.findIndex((item) => item.id === person.id) === index);

  return (
    <article className="border-t border-outline-variant/70 py-6 first:border-t-0 first:pt-0 last:pb-0">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)_auto] lg:items-center">
        <div className="flex min-w-0 items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tertiary-fixed-dim text-lg font-semibold text-on-tertiary-fixed" aria-hidden="true">{parish.name.charAt(0).toUpperCase()}</span>
          <div className="min-w-0"><p className="text-xs uppercase tracking-[0.14em] text-secondary">{parish.ville.name}</p><h3 className="mt-2 break-words font-title-md text-title-md text-primary">{parish.name}</h3><div className="mt-3"><ConfidenceBadge confidence={parish.confidence} /></div></div>
        </div>
        <div className="min-w-0 text-sm text-on-surface-variant">
          {parish.sections.length > 0 ? <><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Organisation</p><p className="mt-2 leading-6">{parish.sections.map((section) => section.name).join(" · ")}</p><p className="mt-1 text-xs">{teams.length} équipe{teams.length > 1 ? "s" : ""}{leaders.length > 0 ? ` · ${leaders.length} responsable${leaders.length > 1 ? "s" : ""}` : ""}</p></> : <p className="text-sm leading-6">La composition de cette paroisse est en cours de documentation.</p>}
        </div>
        <Link href={`/paroisses/${encodeURIComponent(parish.id)}`} className="inline-flex items-center justify-between gap-4 self-start rounded-xl border border-primary/20 px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-surface-container-low lg:self-center"><span>Ouvrir la fiche</span><span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
