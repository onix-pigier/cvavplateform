"use client";

export function CookieSettingsLink() {
  return <button type="button" onClick={() => window.dispatchEvent(new Event("cvav:open-cookie-settings"))} className="min-h-11 self-start text-left hover:text-white">Préférences de confidentialité</button>;
}
