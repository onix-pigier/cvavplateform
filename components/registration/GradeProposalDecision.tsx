"use client";

import { useActionState } from "react";
import { decideGradeProposal, type GradeProposalState } from "@/app/admin/personnes/actions";

const initial: GradeProposalState = {};

export function GradeProposalDecision({ proposalId, parishId }: { proposalId: string; parishId: string }) {
  const [state, action, pending] = useActionState(decideGradeProposal, initial);
  return <form action={action} className="flex flex-wrap items-end gap-2">
    <input type="hidden" name="proposalId" value={proposalId} /><input type="hidden" name="parishId" value={parishId} />
    <label className="sr-only" htmlFor={`grade-note-${proposalId}`}>Note de décision</label>
    <input id={`grade-note-${proposalId}`} name="note" maxLength={500} placeholder="Note facultative" className="min-h-10 min-w-40 flex-1 rounded-lg border border-outline-variant bg-surface-container-lowest px-3 text-sm" />
    {state.error && <p role="alert" className="w-full text-sm text-error">{state.error}</p>}
    <button name="decision" value="APPROVE" disabled={pending} className="min-h-10 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary disabled:opacity-60">Valider</button>
    <button name="decision" value="REJECT" disabled={pending} className="min-h-10 rounded-full border border-outline px-4 text-sm font-semibold text-primary disabled:opacity-60">Rejeter</button>
  </form>;
}
