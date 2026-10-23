"use client";

import { useActionState, useState } from "react";
import { endPersonMandate, type MandateState } from "@/app/admin/personnes/actions";

type Props = { mandateId: string; personId: string; role: "SUPER_ADMIN" | "ADMIN_DOYENNE" | "ADMIN_PAROISSE"; actorScopeId: string | null };
const initialState: MandateState = {};

export function EndMandateButton({ mandateId, personId, role, actorScopeId }: Props) {
  const [state, action, pending] = useActionState(endPersonMandate, initialState);
  const [confirming, setConfirming] = useState(false);
  if (state.ended) return <span role="status" className="text-sm font-medium text-secondary">Mandat terminé.</span>;

  return <form action={action} className="mt-3">
    <input type="hidden" name="mandateId" value={mandateId} /><input type="hidden" name="personId" value={personId} /><input type="hidden" name="role" value={role} /><input type="hidden" name="actorScopeId" value={actorScopeId ?? ""} />
    {state.error && <p role="alert" className="mb-2 text-sm text-error">{state.error}</p>}
    {!confirming ? <button type="button" onClick={() => setConfirming(true)} disabled={pending} className="min-h-11 rounded-full border border-outline px-4 text-sm font-semibold text-primary hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Terminer le mandat</button> : <div className="flex flex-wrap items-center gap-2"><p className="w-full text-sm text-on-surface-variant">Confirmer la fin à la date du jour ?</p><button type="submit" disabled={pending} className="min-h-11 rounded-full bg-error px-4 text-sm font-semibold text-on-error hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-error disabled:opacity-60">{pending ? "Enregistrement…" : "Confirmer la fin"}</button><button type="button" disabled={pending} onClick={() => setConfirming(false)} className="min-h-11 rounded-full border border-outline px-4 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Annuler</button></div>}
  </form>;
}
