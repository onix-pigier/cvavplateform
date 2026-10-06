"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("pending");
    try {
      const response = await fetch("/api/public/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, consent, website: "" }),
      });
      if (!response.ok) throw new Error("newsletter_failed");
      setEmail("");
      setConsent(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 space-y-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse e-mail
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="votre@email.ci"
          className="min-w-0 flex-1 rounded-xl border border-primary-container bg-primary px-3 py-2.5 text-sm text-on-primary outline-none placeholder:text-primary-fixed focus:border-tertiary-fixed focus:ring-2 focus:ring-tertiary-fixed/30"
        />
        <button
          type="submit"
          disabled={status === "pending"}
          className="rounded-xl bg-tertiary-fixed-dim px-4 py-2.5 font-semibold text-on-tertiary-fixed transition hover:bg-tertiary-fixed disabled:cursor-wait disabled:opacity-60"
        >
          {status === "pending" ? "Envoi…" : "S’inscrire"}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs leading-5 text-primary-fixed">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 accent-tertiary-fixed"
        />
        <span>J’accepte de recevoir les nouvelles du mouvement.</span>
      </label>
      {status === "success" && <p role="status" className="text-xs text-tertiary-fixed">Inscription enregistrée.</p>}
      {status === "error" && <p role="alert" className="text-xs text-red-200">Impossible de finaliser l’inscription pour le moment.</p>}
    </form>
  );
}
