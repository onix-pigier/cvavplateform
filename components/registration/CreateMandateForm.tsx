"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { createPersonMandate, type MandateState } from "@/app/admin/personnes/actions";

type ScopeOption = { type: "DIOCESE" | "DOYENNE" | "PAROISSE" | "SECTION" | "EQUIPE"; id: string; name: string; path: string };
type FonctionOption = { code: string; label: string };
type Props = {
  personId: string;
  role: "SUPER_ADMIN" | "ADMIN_DOYENNE" | "ADMIN_PAROISSE";
  actorScopeId: string | null;
  scopes: ScopeOption[];
  fonctions: FonctionOption[];
  returnHref: string;
  today: string;
};

const initialState: MandateState = {};

export function CreateMandateForm({ personId, role, actorScopeId, scopes, fonctions, returnHref, today }: Props) {
  const [state, action, pending] = useActionState(createPersonMandate, initialState);
  const [fonctionCode, setFonctionCode] = useState("");
  const [scopeKey, setScopeKey] = useState("");
  const [scopeType, scopeId] = scopeKey.split("|");

  if (state.created) return <p role="status" className="rounded-xl border border-secondary/30 bg-secondary-container/40 p-4 text-sm leading-6 text-primary">Mandat enregistré et journalisé. Aucun compte ou rôle applicatif n’a été créé. <Link href={returnHref as Route} className="font-semibold underline underline-offset-4">Recharger la fiche</Link></p>;

  return <form action={action} className="space-y-4 rounded-xl bg-surface-container-low p-4">
    <input type="hidden" name="personId" value={personId} />
    <input type="hidden" name="role" value={role} />
    <input type="hidden" name="actorScopeId" value={actorScopeId ?? ""} />
    <div><h3 className="font-semibold text-primary">Enregistrer une fonction</h3><p className="mt-1 text-sm leading-6 text-on-surface-variant">Cette nomination décrit une responsabilité dans le mouvement ; elle ne donne aucun accès à l’application.</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label htmlFor="mandate-function" className="text-sm font-medium text-on-surface">Fonction<select id="mandate-function" name="fonctionCode" required value={fonctionCode} onChange={(event) => setFonctionCode(event.target.value)} disabled={pending || fonctions.length === 0} className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="" disabled>Choisir une fonction</option>{fonctions.map((fonction) => <option key={fonction.code} value={fonction.code}>{fonction.label}</option>)}</select></label>
      <label htmlFor="mandate-scope" className="text-sm font-medium text-on-surface">Périmètre<select id="mandate-scope" required disabled={pending || scopes.length === 0} value={scopeKey} onChange={(event) => setScopeKey(event.target.value)} className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><option value="" disabled>Choisir le périmètre</option>{scopes.map((scope) => <option key={`${scope.type}:${scope.id}`} value={`${scope.type}|${scope.id}`}>{scope.path}</option>)}</select></label>
      <input type="hidden" name="scopeType" value={scopeType ?? ""} /><input type="hidden" name="scopeId" value={scopeId ?? ""} />
      <label htmlFor="mandate-start" className="text-sm font-medium text-on-surface">Début du mandat<input id="mandate-start" type="date" name="startDate" required defaultValue={today} disabled={pending} className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" />{state.errors?.startDate && <span className="mt-1 block text-sm text-error">{state.errors.startDate}</span>}</label>
      <label htmlFor="mandate-end" className="text-sm font-medium text-on-surface">Fin prévue <span className="font-normal text-on-surface-variant">(facultatif)</span><input id="mandate-end" type="date" name="endDate" disabled={pending} className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" />{state.errors?.endDate && <span className="mt-1 block text-sm text-error">{state.errors.endDate}</span>}</label>
      <label htmlFor="mandate-reference" className="text-sm font-medium text-on-surface sm:col-span-2">Référence de la décision d’aumônerie <span className="font-normal text-on-surface-variant">(obligatoire pour une nomination d’aumônier)</span><input id="mandate-reference" name="appointmentReference" maxLength={160} disabled={pending} placeholder="Référence du décret ou de la décision déjà validée" className="mt-1.5 min-h-11 w-full rounded-xl border border-outline bg-surface-container-lowest px-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" /></label>
    </div>
    <p className="rounded-lg bg-surface-container-lowest p-3 text-xs leading-5 text-on-surface-variant">L’attribution d’un mandat d’aumônier est réservée au diocèse et exige la référence de la décision déjà prise. Le référent sécurité, lié à une activité, n’est pas attribuable depuis cette fiche.</p>
    {state.error && <p role="alert" className="rounded-lg border border-error/30 bg-error-container/50 p-3 text-sm text-on-error-container">{state.error}</p>}
    <button type="submit" disabled={pending || !scopes.length || !fonctions.length || !scopeId || !fonctionCode} className="min-h-11 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60">{pending ? "Enregistrement…" : "Enregistrer le mandat"}</button>
  </form>;
}
