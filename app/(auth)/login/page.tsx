"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <main className="min-h-screen bg-[#f1eee7] text-on-surface">
      <div className="grid min-h-screen w-full lg:grid-cols-[minmax(540px,0.9fr)_minmax(560px,1.1fr)]">
        <section className="order-1 flex min-h-screen items-center px-6 py-10 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
          <div className="w-full max-w-xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-3 text-primary transition-opacity hover:opacity-75"
              aria-label="Retour à l’accueil"
            >
              <Image
                src="/assets/cvav-emblem.png"
                alt="Emblème CV-AV"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <span>
                <strong className="block font-title-md text-title-md">CV-AV Daloa</strong>
                <span className="text-xs uppercase tracking-[0.16em] text-secondary">
                  Diocèse de Daloa
                </span>
              </span>
            </Link>

            <div className="border-b border-outline-variant/70 pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Connexion sécurisée
              </p>
              <h1 className="mt-4 max-w-lg font-display-lg text-display-lg text-primary">
                Bienvenue dans votre espace.
              </h1>
              <p className="mt-4 max-w-lg leading-7 text-on-surface-variant">
                Utilisez votre identifiant personnel. Ne partagez jamais vos accès avec une équipe
                ou une autre personne.
              </p>
            </div>

            <form action={formAction} className="mt-8 space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-primary">
                  Identifiant
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="mt-2 w-full rounded-2xl border border-primary/20 bg-[#fffdf8] px-4 py-4 text-sm text-on-surface shadow-[0_5px_20px_rgba(7,26,59,0.06)] outline-none transition placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-2 focus:ring-tertiary-fixed/40"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor="password" className="block text-sm font-semibold text-primary">
                    Mot de passe
                  </label>
                  <span className="text-xs text-on-surface-variant">Compte personnel</span>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-2 w-full rounded-2xl border border-primary/20 bg-[#fffdf8] px-4 py-4 text-sm text-on-surface shadow-[0_5px_20px_rgba(7,26,59,0.06)] outline-none transition placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-2 focus:ring-tertiary-fixed/40"
                />
              </div>

              {state.error && (
                <p
                  role="alert"
                  className="border-l-2 border-error bg-error-container/60 px-4 py-3 text-sm leading-6 text-on-error-container"
                >
                  {state.error}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-2xl bg-primary px-5 py-4 font-semibold text-on-primary shadow-[0_8px_20px_rgba(7,26,59,0.16)] transition hover:bg-primary-container disabled:cursor-wait disabled:opacity-60"
              >
                {pending ? "Connexion en cours…" : "Se connecter"}
              </button>
            </form>

            <p className="mt-8 border-t border-outline-variant/70 pt-5 text-xs leading-5 text-on-surface-variant">
              Besoin d’un accès ? Contactez le responsable CV-AV de votre paroisse. Les comptes
              sont créés et attribués individuellement.
            </p>
          </div>
        </section>

        <aside className="order-2 relative min-h-[520px] overflow-hidden bg-primary text-on-primary lg:min-h-screen">
          <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-24">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed">
                Un mouvement, des visages, un chemin
              </p>
              <h2 className="mt-5 max-w-2xl font-display-lg text-display-lg">
                Grandir, servir et avancer ensemble.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-primary-fixed">
                Chaque membre dispose d’un espace personnel adapté à son rôle, son grade et son
                rattachement.
              </p>
            </div>

            <div className="mt-12 flex flex-1 items-center justify-center py-10 lg:justify-end lg:pr-8 xl:pr-16">
              <div className="relative w-full max-w-[360px]">
                <div className="absolute -inset-5 border border-primary-container/70" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e8ea]">
                  <Image
                    src="/assets/avatar-placeholder.svg"
                    alt="Emplacement du portrait d’un membre CV-AV"
                    fill
                    sizes="(min-width: 1280px) 360px, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-7 -left-8 max-w-[250px] bg-[#f7f4ed] px-5 py-4 text-primary shadow-sm sm:-left-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    Espace membre
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    Vos données restent privées et limitées à votre périmètre d’autorisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-8 border-t border-primary-container/70 pt-5 text-sm text-primary-fixed">
              <p>CV-AV · Diocèse de Daloa</p>
              <Link href="/" className="shrink-0 underline-offset-4 hover:underline">
                Retour au portail
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
