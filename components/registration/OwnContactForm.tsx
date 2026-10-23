"use client";

import { useActionState } from "react";
import { updateOwnContact, type UpdatePersonState } from "@/app/admin/personnes/actions";

const initial: UpdatePersonState = {};
type Props = { phone: string | null; email: string | null; addressLine: string | null; addressCity: string | null; addressPostalCode: string | null };

export function OwnContactForm({ phone, email, addressLine, addressCity, addressPostalCode }: Props) {
  const [state, action, pending] = useActionState(updateOwnContact, initial);
  const input = "mt-1.5 min-h-12 w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";
  return <form action={action} className="space-y-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-7">
    <div><h2 className="font-title-lg text-title-lg text-primary">Coordonnées personnelles</h2><p className="mt-1 text-sm leading-6 text-on-surface-variant">Vous pouvez modifier vos coordonnées. L’état civil reste géré par l’administration de votre périmètre.</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium" htmlFor="contact-phone">Téléphone<input id="contact-phone" name="phone" type="tel" maxLength={24} defaultValue={phone ?? ""} className={input} />{state.errors?.phone && <span className="text-sm text-error">{state.errors.phone}</span>}</label>
      <label className="text-sm font-medium" htmlFor="contact-email">E-mail<input id="contact-email" name="email" type="email" maxLength={160} defaultValue={email ?? ""} className={input} />{state.errors?.email && <span className="text-sm text-error">{state.errors.email}</span>}</label>
      <label className="text-sm font-medium sm:col-span-2" htmlFor="contact-address">Adresse<input id="contact-address" name="addressLine" maxLength={180} autoComplete="street-address" defaultValue={addressLine ?? ""} className={input} />{state.errors?.addressLine && <span className="text-sm text-error">{state.errors.addressLine}</span>}</label>
      <label className="text-sm font-medium" htmlFor="contact-city">Ville / commune<input id="contact-city" name="addressCity" maxLength={100} autoComplete="address-level2" defaultValue={addressCity ?? ""} className={input} />{state.errors?.addressCity && <span className="text-sm text-error">{state.errors.addressCity}</span>}</label>
      <label className="text-sm font-medium" htmlFor="contact-postal">Code postal<input id="contact-postal" name="addressPostalCode" maxLength={20} autoComplete="postal-code" defaultValue={addressPostalCode ?? ""} className={input} />{state.errors?.addressPostalCode && <span className="text-sm text-error">{state.errors.addressPostalCode}</span>}</label>
    </div>
    {state.error && <p role="alert" className="rounded-xl bg-error-container p-3 text-sm text-on-error-container">{state.error}</p>}
    {state.updated && <p role="status" className="rounded-xl bg-secondary-container p-3 text-sm text-primary">Vos coordonnées ont été enregistrées.</p>}
    <button disabled={pending} className="min-h-11 rounded-full bg-primary px-5 font-semibold text-on-primary disabled:opacity-60">{pending ? "Enregistrement…" : "Enregistrer mes coordonnées"}</button>
  </form>;
}
