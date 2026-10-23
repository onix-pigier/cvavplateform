import Link from "next/link";
import type { Route } from "next";
import { getSession } from "@/lib/auth";

const roleLabels: Record<string, string> = {
  SUPER_ADMIN: "Administration diocésaine", ADMIN_DOYENNE: "Administration du doyenné", ADMIN_PAROISSE: "Administration paroissiale",
  CHEF: "Espace Chef d’équipe", MILITANT: "Espace militant", AUMONIER_DIOCESE: "Aumônerie diocésaine",
  AUMONIER_DOYENNE: "Aumônerie du doyenné", AUMONIER_PAROISSE: "Aumônerie paroissiale", PARRAIN_MARRAINE: "Espace Parrain / Marraine",
};
const scopeLabels: Record<string, string> = { DIOCESE: "Diocèse de Daloa", DOYENNE: "Doyenné rattaché", PAROISSE: "Paroisse rattachée", SECTION: "Section rattachée", EQUIPE: "Équipe rattachée", SELF: "Compte personnel" };

function destination(roleCode: string, scopeId: string | null): Route {
  if (roleCode === "MILITANT") return "/militant/dashboard";
  return `/admin/dashboard?role=${encodeURIComponent(roleCode)}&scopeId=${encodeURIComponent(scopeId ?? "")}` as Route;
}

export default async function WorkspacePage() {
  const session = await getSession();
  if (!session) return <main className="flex min-h-screen items-center justify-center bg-sand p-4 text-on-surface"><section className="w-full max-w-lg rounded-feature border border-outline-variant bg-surface-container-lowest p-7"><h1 className="font-headline-lg text-headline-lg text-primary">Votre espace CV-AV</h1><p className="mt-3 text-on-surface-variant">Connectez-vous pour accéder à votre espace personnel.</p><Link href="/login" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-on-primary">Se connecter</Link></section></main>;
  const roles = session.roles.filter((role) => roleLabels[role.roleCode]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-sand p-4 text-on-surface sm:p-8">
      <section className="w-full max-w-3xl rounded-feature border border-outline-variant bg-surface-container-lowest p-6 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">CV-AV · Espace personnel</p>
        <h1 className="mt-3 font-display-lg text-display-lg text-primary">{roles.length ? "Choisir mon espace" : "Aucun rôle actif"}</h1>
        <p className="mt-3 leading-7 text-on-surface-variant">{roles.length > 1 ? "Ce compte possède plusieurs rôles. Choisissez le périmètre de travail pour cette visite." : roles.length === 1 ? "Votre espace personnel est prêt." : "Aucun rôle actif n’est rattaché à ce compte. Contactez l’administrateur diocésain."}</p>
        {roles.length === 0 && <Link href="/login" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-on-primary">Retour à la connexion</Link>}
        <Link href={"/espace/profil" as Route} className="mt-6 inline-flex min-h-11 items-center rounded-full border border-outline px-5 text-sm font-semibold text-primary hover:bg-surface-container-low">Mon profil et mes coordonnées</Link>
        <ul className="mt-7 divide-y divide-outline-variant border-y border-outline-variant">
          {roles.map((role) => <li key={`${role.roleCode}-${role.scopeId}`}>
            <Link href={destination(role.roleCode, role.scopeId)} className="flex min-h-16 items-center justify-between gap-4 py-4 font-semibold text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
              <span>{roleLabels[role.roleCode]}<span className="mt-1 block text-xs font-normal text-on-surface-variant">{scopeLabels[role.scopeType] ?? "Périmètre rattaché"}</span></span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>)}
        </ul>
      </section>
    </main>
  );
}
