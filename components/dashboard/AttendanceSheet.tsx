"use client";

import { useMemo, useState } from "react";

export type AttendanceMember = {
  personId: string;
  firstName: string;
  lastName: string;
  grade: string | null;
  section: string;
  team: string | null;
  present: boolean | null;
};

export function AttendanceSheet({ activityId, initialMembers }: { activityId: string; initialMembers: AttendanceMember[] }) {
  const [members, setMembers] = useState(initialMembers);
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("fr");
    return members.filter((member) => `${member.firstName} ${member.lastName} ${member.team ?? ""}`.toLocaleLowerCase("fr").includes(needle));
  }, [members, query]);
  const presentCount = members.filter((member) => member.present === true).length;
  const absentCount = members.filter((member) => member.present === false).length;
  const unmarkedCount = members.length - presentCount - absentCount;

  async function mark(personId: string, present: boolean) {
    if (saving) return;
    setSaving(personId);
    setFeedback("");
    try {
      const response = await fetch(`/api/activities/${activityId}/presences`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ personId, present }),
      });
      const result = await response.json().catch(() => null) as { error?: { message?: string } } | null;
      if (!response.ok) throw new Error(result?.error?.message ?? "La présence n’a pas été enregistrée.");
      setMembers((current) => current.map((member) => member.personId === personId ? { ...member, present } : member));
      setFeedback("Pointage enregistré.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Le serveur ne répond pas. Vérifiez votre connexion et réessayez.");
    } finally {
      setSaving(null);
    }
  }

  return <section className="mt-6 overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest">
    <div className="grid gap-4 border-b border-outline-variant p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
      <div><h2 className="font-title-lg text-title-lg text-primary">Feuille de présence</h2><p className="mt-1 text-sm text-on-surface-variant">Les personnes affichées sont les membres actifs du périmètre de cette activité.</p></div>
      <label className="block"><span className="sr-only">Rechercher un membre</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Rechercher un nom…" className="min-h-11 w-full rounded-full border border-outline-variant bg-surface px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-64" /></label>
    </div>
    <div className="grid grid-cols-3 divide-x divide-outline-variant border-b border-outline-variant bg-surface-container-low text-center">
      <div className="p-3"><p className="text-xl font-bold tabular-nums text-primary">{members.length}</p><p className="text-xs text-on-surface-variant">membres</p></div>
      <div className="p-3"><p className="text-xl font-bold tabular-nums text-green-800">{presentCount}</p><p className="text-xs text-on-surface-variant">présents</p></div>
      <div className="p-3"><p className="text-xl font-bold tabular-nums text-secondary">{unmarkedCount}</p><p className="text-xs text-on-surface-variant">à pointer{absentCount ? ` · ${absentCount} absents` : ""}</p></div>
    </div>
    {feedback && <p aria-live="polite" role="status" className="border-b border-outline-variant px-5 py-3 text-sm text-on-surface-variant">{feedback}</p>}
    {!members.length ? <div className="p-8 text-center"><h3 className="font-semibold text-primary">Aucun membre actif dans ce périmètre</h3><p className="mt-2 text-sm text-on-surface-variant">Vérifiez les rattachements avant de pointer cette activité.</p></div> : !filtered.length ? <p className="p-8 text-center text-sm text-on-surface-variant">Aucun membre ne correspond à cette recherche.</p> : <ul className="divide-y divide-outline-variant">{filtered.map((member) => {
      const busy = saving === member.personId;
      return <li key={member.personId} className="grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-5">
        <div className="min-w-0"><p className="truncate font-semibold text-primary">{member.firstName} {member.lastName}</p><p className="mt-1 truncate text-xs text-on-surface-variant">{[member.grade, member.section, member.team].filter(Boolean).join(" · ")}</p></div>
        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:items-center">
          <span aria-live="polite" className={`col-span-2 text-xs font-medium sm:col-span-1 sm:mr-2 sm:min-w-20 sm:text-right ${member.present === true ? "text-green-800" : member.present === false ? "text-error" : "text-on-surface-variant"}`}>{busy ? "Enregistrement…" : member.present === true ? "Présent" : member.present === false ? "Absent" : "Non pointé"}</span>
          <button type="button" disabled={busy} onClick={() => void mark(member.personId, true)} aria-label={`Marquer ${member.firstName} ${member.lastName} présent`} aria-pressed={member.present === true} className={`min-h-11 w-full rounded-full px-3 text-sm font-semibold transition-colors disabled:cursor-wait disabled:opacity-50 sm:w-auto sm:px-4 ${member.present === true ? "bg-green-800 text-white" : "border border-outline-variant text-primary hover:bg-green-50"}`}>Présent</button>
          <button type="button" disabled={busy} onClick={() => void mark(member.personId, false)} aria-label={`Marquer ${member.firstName} ${member.lastName} absent`} aria-pressed={member.present === false} className={`min-h-11 w-full rounded-full px-3 text-sm font-semibold transition-colors disabled:cursor-wait disabled:opacity-50 sm:w-auto sm:px-4 ${member.present === false ? "bg-error text-white" : "border border-outline-variant text-primary hover:bg-error-container/40"}`}>Absent</button>
        </div>
      </li>;
    })}</ul>}
  </section>;
}
