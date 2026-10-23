"use client";

import Link from "next/link";
import { useActionState } from "react";
import { requestAccessReset, type ForgotPasswordState } from "./actions";

const initialState: ForgotPasswordState = {};

export default function ForgotPasswordPage() {
  const [state, action, pending] = useActionState(requestAccessReset, initialState);
  return (
    <main className="flex min-h-screen items-center justify-center bg-sand p-4 text-on-surface sm:p-8">
      <section className="w-full max-w-xl rounded-feature border border-outline-variant bg-surface-container-lowest p-6 shadow-floating sm:p-10">
        <Link href="/login" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">← Retour à la connexion</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Assistance au compte</p>
        <h1 className="mt-3 font-display-lg text-display-lg text-primary">Mot de passe oublié ?</h1>
        <p className="mt-3 leading-7 text-on-surface-variant">Indiquez votre numéro de membre. Votre demande sera transmise à l’administration pour vérification. Aucun mot de passe ne sera modifié automatiquement.</p>

        {state.success ? (
          <div role="status" className="mt-7 rounded-2xl border border-primary/20 bg-primary/5 p-5 leading-7 text-primary">
            Si votre numéro correspond à un compte, la demande a été transmise à l’administration. Un responsable vérifiera votre identité et ouvrira la procédure de réinitialisation. Vous ne recevrez pas de nouveau mot de passe automatiquement.
          </div>
        ) : (
          <form action={action} className="mt-7 space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-primary">Numéro de membre</label>
              <input id="username" name="username" required maxLength={40} autoComplete="username" placeholder="Ex. CVAV-00125" aria-invalid={Boolean(state.fieldError)} aria-describedby={state.fieldError ? "identifier-error" : "identifier-help"} className={`mt-2 min-h-12 w-full rounded-2xl border bg-surface px-4 py-3 text-sm outline-none focus:ring-2 ${state.fieldError ? "border-error focus:ring-error/15" : "border-outline focus:border-primary focus:ring-primary/15"}`} />
            </div>
            <div className="hidden" aria-hidden="true"><label htmlFor="website">Site web</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
            {state.error && <p role="alert" className="rounded-xl border border-error/20 bg-error-container/60 px-4 py-3 text-sm text-on-error-container">{state.error}</p>}
            <button disabled={pending} className="min-h-12 w-full rounded-full bg-primary px-5 py-3 font-semibold text-on-primary hover:bg-primary-container disabled:cursor-wait disabled:opacity-60">{pending ? "Transmission…" : "Demander l’aide d’un administrateur"}</button>
          </form>
        )}
      </section>
    </main>
  );
}
