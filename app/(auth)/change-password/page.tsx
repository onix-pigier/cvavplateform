"use client";

import { useActionState } from "react";
import { changeInitialPassword, type ChangePasswordState } from "./actions";

const initialState: ChangePasswordState = {};

export default function ChangeInitialPasswordPage() {
  const [state, action, pending] = useActionState(changeInitialPassword, initialState);
  return (
    <main className="flex min-h-screen items-center justify-center bg-sand p-4 text-on-surface sm:p-8">
      <section className="w-full max-w-xl rounded-feature border border-outline-variant bg-surface-container-lowest p-6 shadow-floating sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Sécurisation du compte</p>
        <h1 className="mt-3 font-display-lg text-display-lg text-primary">Choisissez votre mot de passe</h1>
        <p className="mt-3 leading-7 text-on-surface-variant">Votre secret temporaire a été utilisé et ne fonctionnera plus. Définissez un mot de passe personnel pour accéder à votre espace.</p>
        <form action={action} className="mt-7 space-y-5">
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-primary">Nouveau mot de passe</label>
            <input id="password" name="password" type="password" required minLength={12} maxLength={128} autoComplete="new-password" className="mt-2 min-h-12 w-full rounded-2xl border border-outline bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
            <p className="mt-1 text-xs text-on-surface-variant">12 caractères minimum.</p>
          </div>
          <div>
            <label htmlFor="confirmation" className="block text-sm font-semibold text-primary">Confirmer le mot de passe</label>
            <input id="confirmation" name="confirmation" type="password" required minLength={12} maxLength={128} autoComplete="new-password" className="mt-2 min-h-12 w-full rounded-2xl border border-outline bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
          </div>
          {state.error && <p role="alert" className="rounded-xl border border-error/20 bg-error-container/60 px-4 py-3 text-sm text-on-error-container">{state.error}</p>}
          <button disabled={pending} className="min-h-12 w-full rounded-full bg-primary px-5 py-3 font-semibold text-on-primary hover:bg-primary-container disabled:cursor-wait disabled:opacity-60">{pending ? "Enregistrement…" : "Enregistrer et continuer"}</button>
        </form>
      </section>
    </main>
  );
}
