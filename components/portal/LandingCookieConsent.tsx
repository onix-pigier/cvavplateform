"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cvav-cookie-preferences-v1";

type ConsentChoice = {
  essential: true;
  audience: boolean;
  savedAt: string;
};

export function LandingCookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null | undefined>(undefined);
  const [customizing, setCustomizing] = useState(false);
  const [audience, setAudience] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setChoice(stored ? (JSON.parse(stored) as ConsentChoice) : null);
    } catch {
      setChoice(null);
    }
    const openSettings = () => setCustomizing(true);
    window.addEventListener("cvav:open-cookie-settings", openSettings);
    return () => window.removeEventListener("cvav:open-cookie-settings", openSettings);
  }, []);

  function save() {
    const nextChoice: ConsentChoice = { essential: true, audience: false, savedAt: new Date().toISOString() };
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextChoice)); } catch { /* Storage may be blocked; the page remains usable. */ }
    setChoice(nextChoice);
    setCustomizing(false);
  }

  if (choice === undefined || (choice && !customizing)) return null;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-cookie mx-auto max-w-5xl rounded-feature border border-outline-variant bg-surface-container-lowest p-5 shadow-floating sm:inset-x-6 sm:bottom-6 sm:p-7" aria-label="Préférences de confidentialité">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-title-md text-title-md text-primary">Votre vie privée compte.</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">Le portail utilise le stockage nécessaire à la mémorisation de votre choix. Aucun outil de mesure d’audience ou de publicité n’est actuellement activé.</p>
          <Link href="/legal/confidentialite" className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline">Lire la politique de confidentialité</Link>
        </div>
        <div className="flex flex-wrap gap-2 md:max-w-[24rem] md:justify-end">
          <button type="button" onClick={() => save()} className="min-h-11 rounded-full border border-outline px-4 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low">Refuser l’optionnel</button>
          <button type="button" onClick={() => setCustomizing((value) => !value)} aria-expanded={customizing} className="min-h-11 rounded-full border border-outline px-4 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low">Options</button>
          <button type="button" onClick={() => save()} className="min-h-11 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container">Continuer</button>
        </div>
      </div>
      {customizing && (
        <div className="mt-5 border-t border-outline-variant pt-5" aria-label="Options de stockage">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-outline-variant p-4">
              <p className="font-semibold text-primary">Stockage nécessaire <span className="text-xs font-normal text-on-surface-variant">Toujours actif</span></p>
              <p className="mt-1 text-sm leading-5 text-on-surface-variant">Mémorise votre préférence et assure le fonctionnement du site.</p>
            </div>
            <label className="flex cursor-not-allowed items-start gap-3 rounded-card border border-outline-variant p-4 opacity-75">
              <input type="checkbox" checked={audience} onChange={(event) => setAudience(event.target.checked)} disabled className="mt-1 h-4 w-4 accent-primary" />
              <span><span className="block font-semibold text-primary">Mesure d’audience</span><span className="mt-1 block text-sm leading-5 text-on-surface-variant">Indisponible : aucun outil de mesure n’est configuré.</span></span>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap justify-end gap-2">
            <button type="button" onClick={() => setCustomizing(false)} className="min-h-11 rounded-full px-4 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-low">Fermer</button>
            <button type="button" onClick={() => save()} className="min-h-11 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-container">Enregistrer mon choix</button>
          </div>
        </div>
      )}
    </aside>
  );
}
