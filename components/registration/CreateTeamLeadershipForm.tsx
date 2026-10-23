"use client";

import { useActionState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { createTeamLeadership, type TeamLeadershipState } from "@/app/admin/personnes/actions";

const initialState: TeamLeadershipState = {};

export function CreateTeamLeadershipForm({ personId, actorScopeId, teams, returnHref }: {
  personId: string;
  actorScopeId: string;
  teams: { id: string; name: string; sectionName: string }[];
  returnHref: string;
}) {
  const [state, action, pending] = useActionState(createTeamLeadership, initialState);
  if (state.created) return <p role="status" className="rounded-xl border border-secondary/30 bg-secondary-container/40 p-4 text-sm leading-6 text-primary">Responsabilité d’équipe enregistrée et journalisée. Aucun compte ni rôle applicatif n’a été créé. <Link href={returnHref as Route} className="font-semibold underline underline-offset-4">Recharger la fiche</Link></p>;

  return <form action={action} className="space-y-4 rounded-xl bg-surface-container-low p-4">
    <input type="hidden" name="personId" value={personId} />
    <input type="hidden" name="actorScopeId" value={actorScopeId} />
    <div><h3 className="font-semibold text-primary">Désigner un responsable d’équipe</h3><p className="mt-1 text-sm leading-6 text-on-surface-variant">Réservé à l’administration paroissiale. Cette fonction d’encadrement ne donne pas automatiquement accès à l’application.</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label htmlFor="leadership-team" className="text-sm font-medium text-on-surface">Équipe<select id="leadership-team" name="teamId" required disabled={pending || teams.length === 0} defaultValue="" className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="" disabled>Choisir une équipe</option>{teams.map((team) => <option key={team.id} value={team.id}>{team.sectionName} · {team.name}</option>)}</select></label>
      <label htmlFor="leadership-role" className="text-sm font-medium text-on-surface">Responsabilité<select id="leadership-role" name="role" required disabled={pending} defaultValue="LEADER" className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="LEADER">Chef principal</option><option value="ASSISTANT">Assistant</option></select></label>
    </div>
    {!teams.length && <p className="text-sm text-on-surface-variant">Aucune équipe active n’est disponible dans cette paroisse.</p>}
    {state.error && <p role="alert" className="rounded-lg border border-error/30 bg-error-container/50 p-3 text-sm text-on-error-container">{state.error}</p>}
    <button type="submit" disabled={pending || !teams.length} className="min-h-11 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60">{pending ? "Enregistrement…" : "Enregistrer la responsabilité"}</button>
  </form>;
}
