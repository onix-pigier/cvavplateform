import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { ScopedAdminDashboard } from "@/components/dashboard/ScopedAdminDashboard";

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.roles[0]?.roleCode ?? "COMPTE";
  const roleLabels: Record<string, string> = {
    SUPER_ADMIN: "Administrateur diocésain",
    ADMIN_DOYENNE: "Administrateur de doyenné",
    ADMIN_PAROISSE: "Administrateur paroissial",
    AUMONIER_DIOCESE: "Aumônier diocésain",
    AUMONIER_DOYENNE: "Aumônier de doyenné",
    AUMONIER_PAROISSE: "Aumônier paroissial",
    CHEF: "Chef de section",
  };
  return <ScopedAdminDashboard roleLabel={roleLabels[role] ?? role} />;
}
