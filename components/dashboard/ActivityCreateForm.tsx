"use client";

import { useRouter } from "next/navigation";
import type { Route } from "next";
import { useState, type FormEvent } from "react";

type ActivityType = { id: string; name: string; requiresValidation: boolean };

export function ActivityCreateForm({ types, scopeType, scopeId, returnTo }: {
  types: ActivityType[];
  scopeType: string;
  scopeId: string;
  returnTo: string;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError("");
    const values = new FormData(event.currentTarget);
    const startDate = new Date(String(values.get("startDate")));
    const endDate = new Date(String(values.get("endDate")));
    if (!Number.isFinite(startDate.getTime()) || !Number.isFinite(endDate.getTime())) {
      setError("Renseignez une date de début et une date de fin valides.");
      setPending(false);
      return;
    }
    try {
      const response = await fetch("/api/activities", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          activityTypeId: values.get("activityTypeId"),
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          location: values.get("location") || null,
          scopeType,
          scopeId,
        }),
      });
      const result = await response.json().catch(() => null) as { data?: { id?: string }; error?: { message?: string } } | null;
      if (!response.ok || !result?.data?.id) throw new Error(result?.error?.message ?? "L’activité n’a pas pu être enregistrée. Réessayez.");
      router.push(`/admin/activites/${result.data.id}?${returnTo}` as Route);
      router.refresh();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Le serveur ne répond pas. Vérifiez votre connexion et réessayez.");
      setPending(false);
    }
  }

  return <form onSubmit={submit} className="mt-6 rounded-3xl border border-outline-variant bg-surface-container-lowest p-5 sm:p-7">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-primary">Nom de l’activité</span><input required name="name" minLength={2} maxLength={160} autoComplete="off" className="min-h-12 w-full rounded-xl border border-outline-variant bg-surface px-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Ex. Rencontre de section" /></label>
      <label><span className="mb-2 block text-sm font-semibold text-primary">Type</span><select required name="activityTypeId" defaultValue="" className="min-h-12 w-full rounded-xl border border-outline-variant bg-surface px-4 text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="" disabled>Choisir un type</option>{types.map((type) => <option key={type.id} value={type.id}>{type.name}{type.requiresValidation ? " · validation requise" : ""}</option>)}</select></label>
      <label><span className="mb-2 block text-sm font-semibold text-primary">Lieu <span className="font-normal text-on-surface-variant">(facultatif)</span></span><input name="location" maxLength={240} className="min-h-12 w-full rounded-xl border border-outline-variant bg-surface px-4 text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label><span className="mb-2 block text-sm font-semibold text-primary">Début</span><input required type="datetime-local" name="startDate" className="min-h-12 w-full rounded-xl border border-outline-variant bg-surface px-4 text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
      <label><span className="mb-2 block text-sm font-semibold text-primary">Fin</span><input required type="datetime-local" name="endDate" className="min-h-12 w-full rounded-xl border border-outline-variant bg-surface px-4 text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
    </div>
    {error && <p role="alert" className="mt-4 rounded-xl border border-error/30 bg-error-container/40 p-3 text-sm text-on-error-container">{error}</p>}
    {!types.length && <p className="mt-4 rounded-xl bg-tertiary-container/40 p-3 text-sm text-on-tertiary-container">Aucun type d’activité n’est configuré. Demandez à un administrateur de compléter le référentiel.</p>}
    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><a href={`/admin/activites?${returnTo}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-5 font-semibold text-primary">Annuler</a><button disabled={pending || !types.length} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-on-primary disabled:cursor-not-allowed disabled:opacity-60">{pending ? "Enregistrement…" : "Créer l’activité"}</button></div>
  </form>;
}
