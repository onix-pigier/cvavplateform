"use client";

import { useActionState } from "react";
import { proposePersonGrade, type GradeProposalState } from "@/app/admin/personnes/actions";

const initial: GradeProposalState = {};

export function GradeProposalForm({ personId, teamId, grades }: { personId: string; teamId: string; grades: { id: string; name: string }[] }) {
  const [state, action, pending] = useActionState(proposePersonGrade, initial);
  return <form action={action} className="mt-4 rounded-xl border border-outline-variant bg-surface-container-low p-4">
    <input type="hidden" name="personId" value={personId} />
    <input type="hidden" name="teamId" value={teamId} />
    <label className="grid gap-1.5 text-sm font-medium text-on-surface" htmlFor="proposed-grade">Proposer le prochain grade militant
      <select id="proposed-grade" name="gradeId" required className="min-h-11 rounded-xl border border-outline-variant bg-surface-container-lowest px-3">
        <option value="">Choisir un grade</option>{grades.map((grade) => <option key={grade.id} value={grade.id}>{grade.name}</option>)}
      </select>
    </label>
    {state.error && <p role="alert" className="mt-2 text-sm text-error">{state.error}</p>}
    {state.submitted && <p role="status" className="mt-2 text-sm font-medium text-secondary">Proposition envoyée à l’administrateur paroissial.</p>}
    <button disabled={pending || grades.length === 0} className="mt-3 min-h-11 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary disabled:opacity-60">{pending ? "Envoi…" : "Envoyer la proposition"}</button>
  </form>;
}
