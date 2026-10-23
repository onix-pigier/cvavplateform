"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { logout } from "@/app/(auth)/logout/actions";

export type AdminShellProps = {
  children: React.ReactNode;
  roleCode: string;
  roleLabel: string;
  scopeLabel: string;
  userName: string;
  scopeId: string | null;
  scopePath: string[];
  canCreateMilitants: boolean;
  canReviewPreRegistrations: boolean;
  canReadOrganisation?: boolean;
  canReadPeople?: boolean;
  canReadActivities?: boolean;
  canReadRequests?: boolean;
  canReadAudit?: boolean;
};

const labels: Record<string, string> = {
  SUPER_ADMIN: "Administration diocésaine", ADMIN_DOYENNE: "Administration du doyenné", ADMIN_PAROISSE: "Administration paroissiale",
  CHEF: "Espace chef de section", AUMONIER_DIOCESE: "Aumônerie diocésaine", AUMONIER_DOYENNE: "Aumônerie du doyenné",
  AUMONIER_PAROISSE: "Aumônerie paroissiale", PARRAIN_MARRAINE: "Espace parrain / marraine",
};

export function AdminShell({ children, roleCode, roleLabel, scopeLabel, userName, scopeId, scopePath, canReviewPreRegistrations, canReadOrganisation, canReadPeople, canReadActivities, canReadRequests, canReadAudit }: AdminShellProps) {
  const pathname = usePathname();
  const dashboard = `/admin/dashboard?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`;
  const items = [
    { group: "Pilotage", href: dashboard, label: "Tableau de bord", active: pathname === "/admin/dashboard" },
    ...(canReadOrganisation ? [{ group: "Territoire", href: `/admin/organisation?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Doyennés et paroisses", active: pathname.startsWith("/admin/organisation") }] : []),
    ...(canReadPeople ? [{ group: "Personnes", href: `/admin/personnes?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Registre des personnes", active: pathname.startsWith("/admin/personnes") || pathname === "/admin/militants" }] : []),
    ...(canReviewPreRegistrations ? [{ group: "Personnes", href: "/admin/pre-inscriptions", label: "Pré-inscriptions", active: pathname.startsWith("/admin/pre-inscriptions") }] : []),
    ...(roleCode === "ADMIN_PAROISSE" ? [{ group: "Personnes", href: `/admin/propositions/grades?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Propositions de grade", active: pathname.startsWith("/admin/propositions/grades") }] : []),
    ...(canReadActivities ? [{ group: "Vie du mouvement", href: `/admin/activites?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Activités", active: pathname.startsWith("/admin/activites") }] : []),
    ...(canReadRequests ? [{ group: "Vie du mouvement", href: `/admin/demandes?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Demandes et attestations", active: pathname.startsWith("/admin/demandes") }] : []),
    ...(canReadPeople || canReadActivities ? [{ group: "Suivi", href: `/admin/statistiques?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Statistiques", active: pathname.startsWith("/admin/statistiques") }] : []),
    ...(canReadAudit ? [{ group: "Suivi", href: `/admin/audit?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}`, label: "Journal d’audit", active: pathname.startsWith("/admin/audit") }] : []),
    ...(roleCode === "SUPER_ADMIN" ? [{ group: "Suivi", href: "/admin/access-requests", label: "Demandes d’accès", active: pathname.startsWith("/admin/access-requests") }] : []),
  ];
  const groups = Array.from(new Set(items.map((item) => item.group)));
  const nav = <nav aria-label="Navigation d’administration" className="space-y-5">{groups.map((group) => <section key={group} aria-label={group}><p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">{group}</p><div className="space-y-1">{items.filter((item) => item.group === group).map((item) => <Link key={item.href} href={item.href as Route} aria-current={item.active ? "page" : undefined} className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${item.active ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"}`}><span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${item.active ? "bg-tertiary-fixed-dim" : "bg-outline-variant"}`} />{item.label}</Link>)}</div></section>)}</nav>;

  return <div className="min-h-screen bg-surface text-on-surface">
    <header className="fixed inset-x-0 top-0 z-30 h-16 border-b border-outline-variant/40 bg-primary text-on-primary">
      <div className="mx-auto flex h-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href={dashboard as Route} className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-on-primary">
          <Image src="/assets/public/logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
          <span className="min-w-0"><span className="block truncate text-sm font-semibold">CV-AV · Diocèse de Daloa</span><span className="hidden text-xs text-primary-fixed sm:block">Espace d’administration</span></span>
        </Link>
        <div className="flex items-center gap-4"><div className="hidden text-right sm:block"><p className="text-sm font-semibold">{userName}</p><p className="text-xs text-primary-fixed">{roleLabel} · {scopeLabel}</p></div><Link href="/" className="hidden min-h-10 items-center rounded-full border border-primary-fixed/30 px-4 text-sm font-medium hover:bg-primary-container sm:inline-flex">Portail public</Link></div>
      </div>
    </header>

    <aside className="fixed bottom-0 left-0 top-16 z-20 hidden w-64 flex-col overflow-hidden border-r border-outline-variant/60 bg-surface-container-lowest px-4 py-6 lg:flex xl:w-72">
      <div className="mb-5 shrink-0 rounded-2xl bg-secondary-container px-4 py-3"><p className="text-xs font-semibold text-primary">Votre périmètre réel</p><ol className="mt-1 space-y-1 text-xs leading-5 text-on-secondary-container">{scopePath.map((part, index) => <li key={`${part}-${index}`} className={index === scopePath.length - 1 ? "font-semibold text-primary" : ""}>{index > 0 && <span aria-hidden="true" className="mr-1">›</span>}{part}</li>)}</ol><p className="mt-2 border-t border-primary/10 pt-2 text-xs leading-5 text-on-secondary-container">{roleLabel} · droits selon votre rôle</p></div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-1 pr-1">{nav}</div>
      <div className="mt-4 shrink-0 border-t border-outline-variant pt-4"><p className="px-3 text-xs font-semibold text-primary">{roleLabel}</p><p className="mt-1 px-3 text-xs text-on-surface-variant">Accès limité à votre périmètre actif.</p><div className="mt-3 grid gap-1"><Link href={"/espace/profil" as Route} className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface">Profil et coordonnées</Link><form action={logout}><button type="submit" className="flex min-h-10 w-full items-center rounded-xl px-3 text-left text-sm font-medium text-error hover:bg-error-container/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-error">Se déconnecter</button></form></div></div>
    </aside>

      <div className="fixed inset-x-0 top-16 z-20 border-b border-outline-variant bg-surface-container-lowest px-4 py-2 lg:hidden">
      <details className="group max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-semibold text-primary"><span className="min-w-0"><span className="block truncate">{scopePath.join(" › ") || scopeLabel}</span><span className="block text-xs font-normal text-on-surface-variant">Navigation · {labels[roleCode] ?? roleLabel}</span></span><span className="shrink-0 text-xl group-open:rotate-45" aria-hidden="true">+</span></summary><div className="grid gap-1 pb-2 sm:grid-cols-2">{nav}<Link href={"/espace/profil" as Route} className="flex min-h-11 items-center rounded-xl px-3 text-sm text-on-surface-variant hover:bg-surface-container-high">Profil et coordonnées</Link><form action={logout} className="sm:col-span-2"><button type="submit" className="flex min-h-11 w-full items-center rounded-xl px-3 text-left text-sm font-medium text-error hover:bg-error-container/60">Se déconnecter</button></form><Link href="/" className="flex min-h-11 items-center rounded-xl px-3 text-sm text-on-surface-variant hover:bg-surface-container-high">Portail public</Link></div></details>
    </div>

    <main className="min-w-0 px-4 pb-12 pt-32 sm:px-6 lg:ml-64 lg:px-8 lg:pt-24 xl:ml-72">{children}</main>
  </div>;
}
