"use client";

import { useActionState, useMemo, useState } from "react";
import { submitPreRegistration, type PreRegistrationState } from "@/app/(public)/pre-inscription/actions";

type ParishOption = { id: string; name: string; doyenne: { name: string }; ville: { name: string } };
const initialState: PreRegistrationState = {};

function isMinor(value: string) {
  if (!value) return false;
  const birth = new Date(`${value}T00:00:00`);
  if (Number.isNaN(birth.getTime())) return false;
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) age--;
  return age < 18;
}

export function PreRegistrationForm({ parishes }: { parishes: ParishOption[] }) {
  const [state, action, pending] = useActionState(submitPreRegistration, initialState);
  const [kind, setKind] = useState("NEW_MEMBER");
  const [birthDate, setBirthDate] = useState("");
  const minor = useMemo(() => isMinor(birthDate), [birthDate]);
  const today = new Date().toISOString().slice(0, 10);
  const field = (name: string) => state.errors?.[name];
  const inputClass = (name: string) => `mt-1.5 min-h-12 w-full rounded-xl border bg-surface-container-lowest px-4 py-3 text-sm text-on-surface outline-none focus:ring-2 ${field(name) ? "border-error focus:ring-error/15" : "border-outline-variant focus:border-primary focus:ring-primary/15"}`;
  const error = (name: string) => field(name) ? <p className="mt-1 text-sm text-error" id={`${name}-error`}>{field(name)}</p> : null;

  if (state.reference !== undefined) return <section role="status" className="mt-8 rounded-feature border border-outline-variant bg-surface-container-lowest p-6 sm:p-9">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Demande transmise</p>
    <h2 className="mt-3 font-headline-lg text-headline-lg text-primary">Merci. Votre demande est enregistrée.</h2>
    {state.reference && <p className="mt-5 rounded-xl bg-surface-container-low p-4 text-sm">Référence à conserver : <strong className="font-mono text-primary">{state.reference}</strong></p>}
    <p className="mt-4 leading-7 text-on-surface-variant">La paroisse choisie examinera le dossier. Si un rapprochement ou une mutation doit être vérifié, le diocèse pourra intervenir. Aucun accès ne sera créé avant approbation.</p>
    <a href="/" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-on-primary">Retour au portail</a>
  </section>;

  return <form action={action} className="mt-8 space-y-6 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:p-8">
    {state.error && <p role="alert" className="rounded-xl border border-error/30 bg-error/5 p-4 text-sm text-error">{state.error}</p>}
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-primary">Quel est votre parcours ?</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-xl border p-4 ${kind === "NEW_MEMBER" ? "border-primary bg-primary/5" : "border-outline-variant"}`}>
          <input type="radio" name="kind" value="NEW_MEMBER" checked={kind === "NEW_MEMBER"} onChange={() => setKind("NEW_MEMBER")} />
          <span><strong className="block text-sm text-primary">Nouvelle adhésion</strong><span className="text-xs text-on-surface-variant">La personne ne possède pas de rattachement CV-AV antérieur.</span></span>
        </label>
        <label className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-xl border p-4 ${kind === "TRANSFER" ? "border-primary bg-primary/5" : "border-outline-variant"}`}>
          <input type="radio" name="kind" value="TRANSFER" checked={kind === "TRANSFER"} onChange={() => setKind("TRANSFER")} />
          <span><strong className="block text-sm text-primary">Mutation</strong><span className="text-xs text-on-surface-variant">La personne est déjà membre d’une autre paroisse.</span></span>
        </label>
      </div>
    </fieldset>

    <section className="space-y-4">
      <h2 className="border-b border-outline-variant pb-2 font-title-md text-title-md text-primary">Identité du demandeur</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="firstName" className="text-sm font-medium">Prénom(s) *</label><input id="firstName" name="firstName" required autoComplete="given-name" maxLength={80} className={inputClass("firstName")} aria-invalid={Boolean(field("firstName"))} />{error("firstName")}</div>
        <div><label htmlFor="lastName" className="text-sm font-medium">Nom *</label><input id="lastName" name="lastName" required autoComplete="family-name" maxLength={80} className={inputClass("lastName")} aria-invalid={Boolean(field("lastName"))} />{error("lastName")}</div>
        <div><label htmlFor="birthDate" className="text-sm font-medium">Date de naissance *</label><input id="birthDate" name="birthDate" type="date" required max={today} value={birthDate} onChange={(event) => setBirthDate(event.target.value)} className={inputClass("birthDate")} aria-invalid={Boolean(field("birthDate"))} />{error("birthDate")}</div>
        <div><label htmlFor="sex" className="text-sm font-medium">Sexe *</label><select id="sex" name="sex" required defaultValue="" className={inputClass("sex")}><option value="" disabled>Choisir</option><option value="F">Féminin</option><option value="M">Masculin</option></select>{error("sex")}</div>
        <div><label htmlFor="phone" className="text-sm font-medium">Téléphone de contact *</label><input id="phone" name="phone" type="tel" required autoComplete="tel" maxLength={24} placeholder="+225 07 00 00 00 00" className={inputClass("phone")} aria-invalid={Boolean(field("phone"))} />{error("phone")}</div>
        <div><label htmlFor="email" className="text-sm font-medium">E-mail (facultatif)</label><input id="email" name="email" type="email" autoComplete="email" maxLength={160} className={inputClass("email")} aria-invalid={Boolean(field("email"))} />{error("email")}</div>
      </div>
    </section>

    {minor && <section className="space-y-4 rounded-2xl border border-outline-variant bg-surface-container-low p-4 sm:p-5">
      <div><h2 className="font-title-md text-title-md text-primary">Parent ou représentant légal</h2><p className="mt-1 text-sm text-on-surface-variant">Ces coordonnées sont requises pour un demandeur de moins de 18 ans.</p></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="guardianFirstName" className="text-sm font-medium">Prénom(s) *</label><input id="guardianFirstName" name="guardianFirstName" required maxLength={80} className={inputClass("guardianFirstName")} aria-invalid={Boolean(field("guardianFirstName"))} />{error("guardianFirstName")}</div>
        <div><label htmlFor="guardianLastName" className="text-sm font-medium">Nom *</label><input id="guardianLastName" name="guardianLastName" required maxLength={80} className={inputClass("guardianLastName")} aria-invalid={Boolean(field("guardianLastName"))} />{error("guardianLastName")}</div>
        <div><label htmlFor="guardianPhone" className="text-sm font-medium">Téléphone *</label><input id="guardianPhone" name="guardianPhone" type="tel" required maxLength={24} className={inputClass("guardianPhone")} aria-invalid={Boolean(field("guardianPhone"))} />{error("guardianPhone")}</div>
        <div><label htmlFor="guardianRelationship" className="text-sm font-medium">Lien avec le jeune *</label><select id="guardianRelationship" name="guardianRelationship" required defaultValue="" className={inputClass("guardianRelationship")}><option value="" disabled>Choisir</option><option>Père</option><option>Mère</option><option>Tuteur légal</option><option>Autre représentant légal</option></select>{error("guardianRelationship")}</div>
        <div className="sm:col-span-2"><label htmlFor="guardianEmail" className="text-sm font-medium">E-mail du représentant (facultatif)</label><input id="guardianEmail" name="guardianEmail" type="email" maxLength={160} className={inputClass("guardianEmail")} />{error("guardianEmail")}</div>
      </div>
    </section>}

    <section className="space-y-4">
      <h2 className="border-b border-outline-variant pb-2 font-title-md text-title-md text-primary">Rattachement CV-AV</h2>
      {kind === "TRANSFER" && <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="originParishId" className="text-sm font-medium">Paroisse d’origine *</label><select id="originParishId" name="originParishId" required defaultValue="" className={inputClass("originParishId")}><option value="" disabled>Choisir</option>{parishes.map((p) => <option value={p.id} key={p.id}>{p.name} · {p.ville.name}</option>)}</select>{error("originParishId")}</div>
        <div><label htmlFor="originMemberNumber" className="text-sm font-medium">Matricule actuel *</label><input id="originMemberNumber" name="originMemberNumber" required maxLength={40} placeholder="Ex. CVAV-2026-000123" className={inputClass("originMemberNumber")} aria-invalid={Boolean(field("originMemberNumber"))} />{error("originMemberNumber")}</div>
      </div>}
      <div><label htmlFor="requestedParishId" className="text-sm font-medium">Paroisse souhaitée *</label><select id="requestedParishId" name="requestedParishId" required defaultValue="" className={inputClass("requestedParishId")}><option value="" disabled>Choisir une paroisse</option>{parishes.map((p) => <option value={p.id} key={p.id}>{p.name} · {p.ville.name} · {p.doyenne.name}</option>)}</select>{error("requestedParishId")}</div>
    </section>

    <div className="hidden" aria-hidden="true"><label htmlFor="website">Site web</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <label className="flex items-start gap-3 rounded-xl border border-outline-variant p-4 text-sm leading-6"><input className="mt-1" type="checkbox" name="consent" required /><span>Je confirme l’exactitude des informations et autorise leur utilisation pour examiner cette demande d’adhésion ou de mutation. Elles ne seront pas publiées dans l’annuaire. *</span></label>
    {field("consent") && <p className="text-sm text-error">{field("consent")}</p>}
    {state.error && <p role="alert" className="rounded-xl border border-error/30 bg-error-container/50 p-4 text-sm text-on-error-container">{state.error}</p>}
    <div className="flex flex-col gap-3 border-t border-outline-variant pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-xs leading-5 text-on-surface-variant">La transmission ne vaut pas approbation. Un contrôle complémentaire peut être requis en cas de doublon ou de mutation non confirmée.</p><button type="submit" disabled={pending} className="min-h-12 shrink-0 rounded-full bg-primary px-6 font-semibold text-on-primary hover:bg-primary-container disabled:cursor-wait disabled:opacity-60">{pending ? "Transmission…" : "Envoyer la demande"}</button></div>
  </form>;
}
