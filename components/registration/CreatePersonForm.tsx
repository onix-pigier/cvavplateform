"use client";

import { useActionState } from "react";
import { createPersonRecord, type CreatePersonState } from "@/app/admin/personnes/actions";

const initialState: CreatePersonState = {};
type Props = { scopeType: string; scopeId: string; scopeName: string };

export function CreatePersonForm({ scopeType, scopeId, scopeName }: Props) {
  const [state, action, pending] = useActionState(createPersonRecord, initialState);
  const fieldError = (name: string) => state.errors?.[name];
  const inputClass = (name: string) => `mt-1.5 min-h-12 w-full rounded-xl border bg-surface-container-lowest px-4 py-3 text-sm text-on-surface focus-visible:outline focus-visible:outline-2 ${fieldError(name) ? "border-error focus-visible:outline-error" : "border-outline-variant focus-visible:outline-primary"}`;

  if (state.created) return <section role="status" className="rounded-2xl border border-secondary/30 bg-secondary-container/30 p-5"><h2 className="font-title-md text-title-md text-primary">Personne enregistrée</h2><p className="mt-2 text-sm leading-6 text-on-surface-variant">La fiche est rattachée au registre de {scopeName}. Aucun compte, rôle applicatif, mandat ou appartenance n’a été créé.</p><a href="/admin/personnes" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-on-primary">Retour au registre</a></section>;

  return <form action={action} className="space-y-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-7">
    <input type="hidden" name="scopeType" value={scopeType} /><input type="hidden" name="scopeId" value={scopeId} />
    <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Identité uniquement</p><h2 className="mt-1 font-title-lg text-title-lg text-primary">Nouvelle personne</h2><p className="mt-2 text-sm leading-6 text-on-surface-variant">L’enregistrement n’attribue ni appartenance, ni fonction, ni compte.</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium" htmlFor="firstName">Prénom(s)<input id="firstName" name="firstName" required maxLength={80} autoComplete="given-name" className={inputClass("firstName")} />{fieldError("firstName") && <span className="mt-1 block text-sm text-error">{fieldError("firstName")}</span>}</label>
      <label className="text-sm font-medium" htmlFor="lastName">Nom<input id="lastName" name="lastName" required maxLength={80} autoComplete="family-name" className={inputClass("lastName")} />{fieldError("lastName") && <span className="mt-1 block text-sm text-error">{fieldError("lastName")}</span>}</label>
      <label className="text-sm font-medium" htmlFor="birthDate">Date de naissance<input id="birthDate" name="birthDate" type="date" required max={new Date().toISOString().slice(0, 10)} className={inputClass("birthDate")} />{fieldError("birthDate") && <span className="mt-1 block text-sm text-error">{fieldError("birthDate")}</span>}</label>
      <label className="text-sm font-medium" htmlFor="sex">Sexe<select id="sex" name="sex" required defaultValue="" className={inputClass("sex")}><option value="" disabled>Choisir</option><option value="F">Féminin</option><option value="M">Masculin</option></select>{fieldError("sex") && <span className="mt-1 block text-sm text-error">{fieldError("sex")}</span>}</label>
      <label className="text-sm font-medium" htmlFor="phone">Téléphone (facultatif)<input id="phone" name="phone" type="tel" maxLength={24} autoComplete="tel" className={inputClass("phone")} />{fieldError("phone") && <span className="mt-1 block text-sm text-error">{fieldError("phone")}</span>}</label>
      <label className="text-sm font-medium" htmlFor="email">E-mail (facultatif)<input id="email" name="email" type="email" maxLength={160} autoComplete="email" className={inputClass("email")} />{fieldError("email") && <span className="mt-1 block text-sm text-error">{fieldError("email")}</span>}</label>
    </div>
    <p className="rounded-xl bg-surface-container-low p-4 text-sm leading-6 text-on-surface-variant">Périmètre d’enregistrement : <strong className="text-primary">{scopeName}</strong>. Les données d’identité restent privées et visibles uniquement selon les permissions de ce périmètre.</p>
    {state.error && <p role="alert" className="rounded-xl border border-error/30 bg-error-container/50 p-4 text-sm text-on-error-container">{state.error}</p>}
    <button type="submit" disabled={pending} className="min-h-12 rounded-full bg-primary px-6 font-semibold text-on-primary disabled:cursor-wait disabled:opacity-60">{pending ? "Enregistrement…" : "Enregistrer la personne"}</button>
  </form>;
}
