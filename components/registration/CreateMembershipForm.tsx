"use client";

import Link from "next/link";
import type { Route } from "next";
import { useActionState, useMemo, useState } from "react";
import { createPersonMembership, type CreateMembershipState } from "@/app/admin/personnes/actions";

type SectionOption = { id: string; name: string; teams: { id: string; name: string }[] };
type Props = {
  personId: string;
  role: "ADMIN_PAROISSE" | "CHEF";
  scopeId: string;
  sections: SectionOption[];
  fixedTeamId?: string;
  fixedTeamName?: string;
  returnHref: string;
};

const initialState: CreateMembershipState = {};

export function CreateMembershipForm({ personId, role, scopeId, sections, fixedTeamId, fixedTeamName, returnHref }: Props) {
  const [state, action, pending] = useActionState(createPersonMembership, initialState);
  const [sectionId, setSectionId] = useState(sections[0]?.id ?? "");
  const currentSection = useMemo(() => sections.find((section) => section.id === sectionId), [sections, sectionId]);

  if (state.created) return <div role="status" className="rounded-xl border border-secondary/30 bg-secondary-container/40 p-4"><h3 className="font-semibold text-primary">Appartenance enregistrée</h3><p className="mt-1 text-sm leading-6 text-on-surface-variant">La personne est maintenant rattachée à cette section. Aucun compte, rôle applicatif ni mandat n’a été créé.</p><Link href={returnHref as Route} className="mt-3 inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 hover:underline">Revenir à la fiche</Link></div>;

  return <form action={action} className="space-y-4 rounded-xl bg-surface-container-low p-4">
    <input type="hidden" name="personId" value={personId} />
    <input type="hidden" name="role" value={role} />
    <input type="hidden" name="scopeId" value={scopeId} />
    {fixedTeamId && <input type="hidden" name="teamId" value={fixedTeamId} />}
    <div><h3 className="font-semibold text-primary">Rattacher à une appartenance</h3><p className="mt-1 text-sm leading-6 text-on-surface-variant">Cette action crée uniquement le rattachement pour l’année pastorale en cours. Une mutation d’une appartenance active doit suivre le workflow de transfert.</p></div>

    {role === "ADMIN_PAROISSE" ? <>
      <label htmlFor="membership-section" className="block text-sm font-medium text-on-surface">Section active<select id="membership-section" name="sectionId" required value={sectionId} onChange={(event) => setSectionId(event.target.value)} disabled={pending || sections.length === 0} className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="" disabled>Choisir une section</option>{sections.map((section) => <option key={section.id} value={section.id}>{section.name}</option>)}</select>{state.errors?.sectionId && <span className="mt-1 block text-sm text-error">{state.errors.sectionId}</span>}</label>
      <label htmlFor="membership-team" className="block text-sm font-medium text-on-surface">Équipe <span className="font-normal text-on-surface-variant">(facultatif)</span><select id="membership-team" name="teamId" disabled={pending || !currentSection || currentSection.teams.length === 0} defaultValue="" key={sectionId} className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="">Rattachement à la section, sans équipe</option>{currentSection?.teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}</select></label>
    </> : <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-3 text-sm"><p className="font-semibold text-primary">Équipe : {fixedTeamName}</p><p className="mt-1 text-on-surface-variant">Le chef ne peut rattacher une personne qu’à son équipe propre.</p><input type="hidden" name="sectionId" value={sections[0]?.id ?? ""} /></div>}

    {!sections.length && <p role="alert" className="rounded-lg bg-error-container p-3 text-sm text-on-error-container">Aucune section active et autorisée n’est disponible. Vérifiez le référentiel de la paroisse.</p>}
    {state.error && <p role="alert" className="rounded-lg border border-error/30 bg-error-container/50 p-3 text-sm text-on-error-container">{state.error}</p>}
    <button type="submit" disabled={pending || !sections.length || (role === "CHEF" && !fixedTeamId)} className="min-h-11 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60">{pending ? "Enregistrement…" : "Enregistrer l’appartenance"}</button>
  </form>;
}
