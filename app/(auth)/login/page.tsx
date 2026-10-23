"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useActionState, useState } from "react";
import { PublicPhoto } from "@/components/portal/PublicPhoto";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clientErrors, setClientErrors] = useState<LoginState["fieldErrors"]>({});
  const [dismissServerFieldErrors, setDismissServerFieldErrors] = useState(false);
  const usernameError = clientErrors?.username ?? (dismissServerFieldErrors ? undefined : state.fieldErrors?.username);
  const passwordError = clientErrors?.password ?? (dismissServerFieldErrors ? undefined : state.fieldErrors?.password);

  function clearFieldError(field: "username" | "password") {
    setDismissServerFieldErrors(true);
    setClientErrors((errors) => ({ ...errors, [field]: undefined }));
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-sand p-3 text-on-surface sm:p-6 lg:p-8">
      <div className="grid w-full max-w-[1440px] overflow-hidden rounded-feature border border-outline-variant/70 bg-surface-container-lowest shadow-floating lg:min-h-[680px] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <section className="flex items-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-md">
            <Link
              href="/"
              className="mb-8 inline-flex min-h-14 items-center gap-3 rounded-xl text-primary transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:mb-10"
              aria-label="Retour à l’accueil CV-AV Daloa"
            >
              <Image
                src="/assets/public/logo.png"
                alt="Logo CV-AV Daloa"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-contain"
              />
              <span>
                <strong className="block font-title-md text-title-md">CV-AV Daloa</strong>
                <span className="text-xs uppercase tracking-[0.16em] text-secondary">
                  Diocèse de Daloa
                </span>
              </span>
            </Link>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Espace personnel
              </p>
              <h1 className="mt-3 font-display-lg text-display-lg text-primary sm:text-5xl">
                Heureux de vous retrouver.
              </h1>
              <p className="mt-3 leading-7 text-on-surface-variant">
                Connectez-vous.
              </p>
            </div>

            <form
              action={formAction}
              onSubmit={() => setDismissServerFieldErrors(false)}
              className="mt-7 space-y-5 sm:mt-8"
            >
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-primary">
                  Numéro de membre
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    clearFieldError("username");
                  }}
                  onInvalid={() => setClientErrors((errors) => ({ ...errors, username: "Saisissez votre numéro de membre." }))}
                  aria-invalid={Boolean(usernameError)}
                  aria-describedby={usernameError ? "username-error" : undefined}
                  placeholder="Ex. CVAV-00125"
                  className={`mt-2 min-h-12 w-full rounded-2xl border bg-surface px-4 py-3 text-sm text-on-surface outline-none transition focus:ring-2 ${usernameError ? "border-error focus:border-error focus:ring-error/15" : "border-outline focus:border-primary focus:ring-primary/15"}`}
                />
                {usernameError && <p id="username-error" className="mt-2 text-sm font-medium text-error">{usernameError}</p>}
                {!usernameError && <p className="mt-2 text-xs leading-5 text-on-surface-variant"></p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-primary">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    clearFieldError("password");
                  }}
                  onInvalid={() => setClientErrors((errors) => ({ ...errors, password: "Saisissez votre mot de passe." }))}
                  aria-invalid={Boolean(passwordError)}
                  aria-describedby={passwordError ? "password-error" : undefined}
                  placeholder="Votre mot de passe"
                  className={`mt-2 min-h-12 w-full rounded-2xl border bg-surface px-4 py-3 text-sm text-on-surface outline-none transition focus:ring-2 ${passwordError ? "border-error focus:border-error focus:ring-error/15" : "border-outline focus:border-primary focus:ring-primary/15"}`}
                />
                {passwordError && <p id="password-error" className="mt-2 text-sm font-medium text-error">{passwordError}</p>}
                <div className="mt-2 text-right">
                  <Link href={"/forgot-password" as Route} className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Mot de passe oublié ?
                  </Link>
                </div>
              </div>

              {state.error && (
                <p
                  role="alert"
                  className="rounded-xl border border-error/20 bg-error-container/60 px-4 py-3 text-sm leading-6 text-on-error-container"
                >
                  {state.error}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="min-h-12 w-full rounded-full bg-primary px-5 py-3 font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60"
              >
                {pending ? "Connexion en cours…" : "Se connecter"}
              </button>
            </form>

            <p className="mt-6 border-t border-outline-variant pt-5 text-xs leading-5 text-on-surface-variant sm:mt-7">
              Besoin d’un accès ? Contactez le responsable CV-AV de votre paroisse.
            </p>
          </div>
        </section>

        <aside className="relative isolate min-h-[380px] overflow-hidden bg-primary text-on-primary sm:min-h-[460px] lg:min-h-full">
          <div className="absolute inset-0">
            <PublicPhoto
              src="/assets/public/formualire/login.jpeg"
              alt="Portrait d’un membre CV-AV"
              label="Photo du mouvement indisponible"
              placeholderPosition="center"
              className="h-full w-full"
              sizes="(max-width: 1023px) 100vw, 52vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-primary/35" aria-hidden="true" />
          <div className="relative flex min-h-[380px] flex-col justify-between p-6 sm:min-h-[460px] sm:p-10 lg:min-h-[680px] lg:p-12 xl:p-16">
            <div className="max-w-lg rounded-feature bg-primary/90 p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-fixed">
                CV-AV · Diocèse de Daloa
              </p>
              <h2 className="mt-4 font-display-lg text-display-lg sm:text-5xl">
                Grandir, servir et avancer ensemble.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-primary-fixed">
                Un espace personnel adapté à votre rôle, votre grade et votre rattachement.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-end justify-between gap-4 rounded-2xl bg-surface-container-lowest px-5 py-4 text-primary sm:px-6">
              <p className="max-w-sm text-sm leading-6">
                Vos informations restent limitées à votre périmètre d’autorisation.
              </p>
              <Link
                href="/"
                className="inline-flex min-h-11 shrink-0 items-center font-semibold underline-offset-4 hover:underline"
              >
                Retour au portail <span className="ml-2" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
