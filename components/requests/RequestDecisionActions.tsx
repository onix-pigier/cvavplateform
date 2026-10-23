"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function RequestDecisionActions({ requestId, status, requiredValidationLevel, roleCode }: { requestId: string; status: string; requiredValidationLevel: string; roleCode: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [reason, setReason] = useState("");
  const [overrideReason, setOverrideReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const nextLevel = status === "PENDING" ? "PAROISSE"
    : status === "SECTION_APPROVED" && ["DOYENNE", "DIOCESE"].includes(requiredValidationLevel) ? "DOYENNE"
    : status === "DOYENNE_APPROVED" && requiredValidationLevel === "DIOCESE" ? "DIOCESE"
    : null;
  const expectedRole = nextLevel === "PAROISSE" ? "ADMIN_PAROISSE"
    : nextLevel === "DOYENNE" ? "ADMIN_DOYENNE"
    : nextLevel === "DIOCESE" ? "SUPER_ADMIN"
    : null;
  const canDecide = Boolean(nextLevel && roleCode === expectedRole);
  const canOverride = Boolean(nextLevel && roleCode === "SUPER_ADMIN" && expectedRole !== "SUPER_ADMIN");
  if (!canDecide && !canOverride) return <span className="text-xs text-on-surface-variant">Consultation</span>;

  async function decide(action: "approve" | "reject" | "override") {
    if (busy) return;
    setBusy(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch(`/api/requests/${encodeURIComponent(requestId)}/${action}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        ...(action === "reject" ? { body: JSON.stringify({ reason: reason.trim() }) } : action === "override" ? { body: JSON.stringify({ reason: overrideReason.trim() }) } : {}),
      });
      const payload = await response.json() as { error?: { message?: string } };
      if (!response.ok) throw new Error(payload.error?.message ?? "La décision n’a pas pu être enregistrée.");
      setSuccess(action === "approve" ? "Avis enregistré." : action === "reject" ? "Demande rejetée." : "Dérogation enregistrée et auditée.");
      router.refresh();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Impossible de contacter le serveur. Réessayez.");
    } finally {
      setBusy(false);
    }
  }

  return <div className="flex min-w-48 flex-col items-start gap-2">
    <div className="flex flex-wrap gap-2">{canDecide && <button type="button" disabled={busy} onClick={() => decide("approve")} className="min-h-10 rounded-full bg-primary px-4 text-xs font-semibold text-on-primary disabled:cursor-not-allowed disabled:opacity-60">{busy ? "Envoi…" : nextLevel === requiredValidationLevel ? "Valider et clôturer" : `Valider · ${nextLevel === "PAROISSE" ? "paroisse" : nextLevel === "DOYENNE" ? "doyenné" : "diocèse"}`}</button>}
      {canDecide && <details className="group"><summary className="flex min-h-10 cursor-pointer list-none items-center rounded-full border border-outline px-4 text-xs font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Rejeter</summary><form className="mt-2 grid min-w-56 gap-2 rounded-xl border border-outline-variant bg-surface-container-low p-3" onSubmit={(event) => { event.preventDefault(); if (reason.trim().length >= 3) void decide("reject"); }}><label className="grid gap-1 text-xs font-medium text-on-surface-variant">Motif obligatoire<textarea required minLength={3} maxLength={1000} value={reason} onChange={(event) => setReason(event.target.value)} className="min-h-20 rounded-lg border border-outline bg-surface px-3 py-2 text-sm text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label><button disabled={busy || reason.trim().length < 3} className="min-h-10 rounded-full border border-error/50 px-4 text-xs font-semibold text-error disabled:opacity-50">Confirmer le rejet</button></form></details>}
      {canOverride && <details className="group"><summary className="flex min-h-10 cursor-pointer list-none items-center rounded-full border border-error/40 px-4 text-xs font-semibold text-error focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Dérogation diocésaine</summary><form className="mt-2 grid min-w-60 gap-2 rounded-xl border border-outline-variant bg-surface-container-low p-3" onSubmit={(event) => { event.preventDefault(); if (overrideReason.trim().length >= 10) void decide("override"); }}><p className="text-xs leading-5 text-on-surface-variant">Possible uniquement après 72 h d’attente et si aucun validateur actif n’existe pour cette étape. Le motif est conservé dans l’audit.</p><label className="grid gap-1 text-xs font-medium text-on-surface-variant">Motif obligatoire<textarea required minLength={10} maxLength={1000} value={overrideReason} onChange={(event) => setOverrideReason(event.target.value)} className="min-h-20 rounded-lg border border-outline bg-surface px-3 py-2 text-sm text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label><button disabled={busy || overrideReason.trim().length < 10} className="min-h-10 rounded-full border border-error/50 px-4 text-xs font-semibold text-error disabled:opacity-50">Confirmer la dérogation</button></form></details>}
    </div>
    {error && <p role="alert" className="max-w-56 text-xs text-error">{error}</p>}{success && <p role="status" className="max-w-56 text-xs text-primary">{success}</p>}
  </div>;
}
