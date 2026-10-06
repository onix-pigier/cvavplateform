"use client";

import { FormEvent, useState } from "react";

type ContactStatus = "idle" | "pending" | "success" | "error";

export function PublicContact() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("pending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      const response = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          email: form.get("email"),
          phone: form.get("phone"),
          subject: form.get("subject"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
          website: form.get("website"),
        }),
      });
      if (!response.ok) throw new Error("contact_failed");
      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-primary">Nom et prénom</label>
        <input id="contact-name" name="fullName" autoComplete="name" required minLength={2} maxLength={120} placeholder="Votre nom complet" className="mt-2 min-h-12 w-full rounded-card border border-outline bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-primary">E-mail</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={160} placeholder="vous@exemple.ci" className="mt-2 min-h-12 w-full rounded-card border border-outline bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-primary">Téléphone <span className="font-normal text-on-surface-variant">(facultatif)</span></label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="+225 …" className="mt-2 min-h-12 w-full rounded-card border border-outline bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-primary">Motif</label>
        <select id="contact-subject" name="subject" defaultValue="JOIN" className="mt-2 min-h-12 w-full rounded-card border border-outline bg-surface-container-low px-4 py-3 text-sm text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
          <option value="JOIN">Rejoindre le mouvement</option>
          <option value="ACTIVITY">Informations sur les activités</option>
          <option value="PARTNERSHIP">Partenariat</option>
          <option value="OTHER">Autre demande</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="block text-sm font-semibold text-primary">Votre message</label>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Décrivez votre demande en quelques lignes…" className="mt-2 w-full resize-y rounded-card border border-outline bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-2 text-xs leading-5 text-on-surface-variant">
          <input name="consent" type="checkbox" required className="mt-1 accent-primary" />
          <span>J’accepte que le diocèse utilise ces informations pour répondre à ma demande.</span>
        </label>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-on-surface-variant">Le motif choisi aide l’équipe à classer votre demande. N’indiquez pas de données médicales ou confidentielles dans ce formulaire.</p>
        <button type="submit" disabled={status === "pending"} className="min-h-12 rounded-full bg-primary px-6 font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
          {status === "pending" ? "Envoi en cours…" : "Envoyer le message"}
        </button>
      </div>
      {status === "success" && <p role="status" className="border-l-2 border-green-700 bg-green-50 px-4 py-3 text-sm text-green-900 sm:col-span-2">Votre message a bien été transmis. Merci pour votre prise de contact.</p>}
      {status === "error" && <p role="alert" className="border-l-2 border-error bg-error-container/60 px-4 py-3 text-sm text-on-error-container sm:col-span-2">Votre message n’a pas pu être transmis. Réessayez dans quelques instants.</p>}
    </form>
  );
}
