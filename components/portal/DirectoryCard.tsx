import Link from "next/link";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { getDeaneryPortrait } from "@/lib/portal/public-photos";
import { PublicPhoto } from "./PublicPhoto";

export function DeaneryCard({
  id,
  name,
  parishCount,
  hasUnverifiedParishes,
}: {
  id: string;
  name: string;
  parishCount: number;
  hasUnverifiedParishes: boolean;
}) {
  const portrait = getDeaneryPortrait(id);

  return (
    <Link href={`/doyennes/${encodeURIComponent(id)}`} className="group overflow-hidden rounded-card border border-outline-variant/70 bg-surface-container-lowest transition-colors hover:border-primary/50 hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      {portrait && <PublicPhoto src={portrait.src} alt={`Portrait de ${portrait.subject}, dont le doyenné porte le nom`} label="Portrait indisponible" className="aspect-[4/3] bg-stone-100" fit="contain" imageClassName="p-2" sizes="(max-width: 640px) 100vw, 50vw" />}
      <div className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Doyenné</p>
          <h2 className="mt-2 font-title-md text-title-md text-primary group-hover:underline">{name}</h2>
        </div>
        <span className="rounded-full bg-tertiary-fixed px-3 py-1 text-sm font-semibold text-on-tertiary-fixed">{parishCount}</span>
      </div>
      <p className="mt-4 text-sm text-on-surface-variant">
        {parishCount === 0 ? "Aucune paroisse suffisamment documentée dans le référentiel." : `${parishCount} paroisse${parishCount > 1 ? "s" : ""} documentée${parishCount > 1 ? "s" : ""}.`}
      </p>
      {hasUnverifiedParishes && <p className="mt-3 text-xs text-amber-800">Certaines affectations doivent encore être recoupées.</p>}
      </div>
    </Link>
  );
}
