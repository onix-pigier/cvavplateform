import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { updateAccessRequest } from "./actions";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";

const labels: Record<string, string> = { NEW: "Nouvelle", IN_REVIEW: "En vérification", TICKET_CREATED: "Ticket créé", CLOSED: "Clôturée" };

export default async function AccessRequestsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const context = await getAdminContext(session, "SUPER_ADMIN");
  if (!context) redirect("/admin/dashboard");
  const requests = await prisma.accountAccessRequest.findMany({ orderBy: { createdAt: "desc" }, take: 100 });
  return (
    <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
      <div className="mx-auto max-w-5xl">
        <Link href="/admin/dashboard" className="text-sm font-semibold text-primary hover:underline">← Administration</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Comptes & sécurité</p>
        <h1 className="mt-3 font-display-lg text-display-lg text-primary">Demandes d’accès</h1>
        <p className="mt-3 max-w-2xl leading-7 text-on-surface-variant">Vérifiez l’identité du demandeur avant toute réinitialisation. Cette page ne modifie aucun mot de passe et ne révèle pas si un numéro correspond à un compte.</p>
        <div className="mt-8 space-y-4">
          {requests.length === 0 ? <p className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 text-on-surface-variant">Aucune demande pour le moment.</p> : requests.map((request) => (
            <article id={request.id} key={request.id} className="flex flex-col gap-5 rounded-feature border border-outline-variant bg-surface-container-lowest p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">{labels[request.status] ?? request.status}</p>
                <h2 className="mt-2 text-lg font-semibold text-primary">{request.submittedIdentifier}</h2>
                <time className="mt-1 block text-sm text-on-surface-variant" dateTime={request.createdAt.toISOString()}>{request.createdAt.toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Abidjan" })}</time>
              </div>
              <div className="flex flex-wrap gap-2">
                {request.status === "NEW" && <form action={updateAccessRequest}><input type="hidden" name="id" value={request.id} /><input type="hidden" name="status" value="IN_REVIEW" /><button className="min-h-10 rounded-full border border-outline px-4 text-sm font-semibold text-primary hover:bg-surface">Prendre en charge</button></form>}
                {request.status !== "TICKET_CREATED" && request.status !== "CLOSED" && <form action={updateAccessRequest}><input type="hidden" name="id" value={request.id} /><input type="hidden" name="status" value="TICKET_CREATED" /><button className="min-h-10 rounded-full bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-container">Ticket créé</button></form>}
                {request.status !== "CLOSED" && <form action={updateAccessRequest}><input type="hidden" name="id" value={request.id} /><input type="hidden" name="status" value="CLOSED" /><button className="min-h-10 rounded-full border border-outline px-4 text-sm font-semibold text-primary hover:bg-surface">Clôturer</button></form>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScopedAdminShell>
  );
}
