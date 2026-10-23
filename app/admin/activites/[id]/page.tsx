import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { getAdminContext } from "@/lib/admin/context";
import { scopeLabel } from "@/lib/admin/territory";
import { ScopedAdminShell } from "@/components/dashboard/ScopedAdminShell";
import { AttendanceSheet } from "@/components/dashboard/AttendanceSheet";
import { listActivityPresences, ActivitiesForbiddenError, ActivitiesValidationError } from "@/modules/activities/service";

export const dynamic = "force-dynamic";

export default async function ActivityAttendancePage({ params, searchParams }: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ role?: string; scopeId?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const context = await getAdminContext(session, query.role, query.scopeId);
  if (!context) redirect("/espace");
  let attendance;
  try {
    attendance = await listActivityPresences(id);
  } catch (error) {
    if (error instanceof ActivitiesForbiddenError || error instanceof ActivitiesValidationError) notFound();
    throw error;
  }
  const returnTo = `role=${encodeURIComponent(context.assignment.roleCode)}&scopeId=${encodeURIComponent(context.assignment.scopeId ?? "")}`;
  const start = attendance.activity.startDate.toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" });
  const end = attendance.activity.endDate.toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });

  return <ScopedAdminShell roleCode={context.assignment.roleCode} roleLabel={context.roleLabel} scopeLabel={scopeLabel(context.assignment.scopeType)} userName={context.userName} scopeId={context.assignment.scopeId} canCreateMilitants={context.canCreateMilitants} canReviewPreRegistrations={context.canReviewPreRegistrations} canReadOrganisation={context.canReadOrganisation} canReadPeople={context.canReadPeople} canReadActivities={context.canReadActivities} canReadRequests={context.canReadRequests} canReadAudit={context.canReadAudit}>
    <div className="mx-auto max-w-5xl"><Link href={`/admin/activites?${returnTo}`} className="text-sm font-semibold text-primary hover:underline">← Registre des activités</Link>
      <header className="mt-5 rounded-3xl bg-primary p-6 text-on-primary sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-fixed">{attendance.activity.activityType.name} · {scopeLabel(attendance.activity.scopeType)}</p><h1 className="mt-3 max-w-3xl font-display-lg text-display-lg">{attendance.activity.name}</h1><p className="mt-3 text-sm text-primary-fixed">{start} – {end}{attendance.activity.location ? ` · ${attendance.activity.location}` : ""}</p><p className="mt-1 text-sm text-primary-fixed">Périmètre : {scopeLabel(context.assignment.scopeType)}</p></header>
      <AttendanceSheet activityId={id} initialMembers={attendance.members} />
    </div>
  </ScopedAdminShell>;
}
