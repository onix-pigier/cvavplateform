"use client";

import { useActionState } from "react";
import { updatePersonCivilIdentity, type UpdatePersonState } from "@/app/admin/personnes/actions";

const initial: UpdatePersonState = {};
type Props = { personId: string; role: string; scopeId: string; firstName: string; lastName: string; birthDate: Date; guardian?: { id: string; firstName: string; lastName: string } };

export function PersonCivilIdentityForm({ personId, role, scopeId, firstName, lastName, birthDate, guardian }: Props) {
  const [state, action, pending] = useActionState(updatePersonCivilIdentity, initial);
  const input = "mt-1.5 min-h-12 w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";
  return <form action={action} className="space-y-4 rounded-xl bg-surface-container-low p-4">
    <input type="hidden" name="personId" value={personId} /><input type="hidden" name="role" value={role} /><input type="hidden" name="scopeId" value={scopeId} />
    <p className="text-sm text-on-surface-variant">Modification administrative, limitée au périmètre affiché et inscrite au journal d’audit.</p>
    <div className="grid gap-4 sm:grid-cols-3">
      <label className="text-sm font-medium" htmlFor="civil-first-name">Prénom(s)<input id="civil-first-name" name="firstName" required maxLength={80} defaultValue={firstName} className={input} />{state.errors?.firstName && <span className="text-error">{state.errors.firstName}</span>}</label>
      <label className="text-sm font-medium" htmlFor="civil-last-name">Nom<input id="civil-last-name" name="lastName" required maxLength={80} defaultValue={lastName} className={input} />{state.errors?.lastName && <span className="text-error">{state.errors.lastName}</span>}</label>
      <label className="text-sm font-medium" htmlFor="civil-birth-date">Date de naissance<input id="civil-birth-date" name="birthDate" type="date" required max={new Date().toISOString().slice(0, 10)} defaultValue={birthDate.toISOString().slice(0, 10)} className={input} />{state.errors?.birthDate && <span className="text-error">{state.errors.birthDate}</span>}</label>
    </div>
    {guardian && <div className="grid gap-4 border-t border-outline-variant pt-4 sm:grid-cols-2"><input type="hidden" name="guardianId" value={guardian.id} /><p className="text-sm font-semibold text-primary sm:col-span-2">Représentant légal</p><label className="text-sm font-medium" htmlFor="guardian-first-name">Prénom(s)<input id="guardian-first-name" name="guardianFirstName" required maxLength={80} defaultValue={guardian.firstName} className={input} />{state.errors?.guardianFirstName && <span className="text-error">{state.errors.guardianFirstName}</span>}</label><label className="text-sm font-medium" htmlFor="guardian-last-name">Nom<input id="guardian-last-name" name="guardianLastName" required maxLength={80} defaultValue={guardian.lastName} className={input} />{state.errors?.guardianLastName && <span className="text-error">{state.errors.guardianLastName}</span>}</label></div>}
    {state.error && <p role="alert" className="text-sm text-error">{state.error}</p>}{state.updated && <p role="status" className="text-sm font-medium text-secondary">État civil mis à jour et audité.</p>}
    <button disabled={pending} className="min-h-10 rounded-full border border-outline px-4 text-sm font-semibold text-primary disabled:opacity-60">{pending ? "Enregistrement…" : "Mettre à jour l’état civil"}</button>
  </form>;
}
