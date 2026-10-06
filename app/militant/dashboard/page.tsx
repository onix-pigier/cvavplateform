import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { ScopedMemberDashboard } from "@/components/dashboard/ScopedMemberDashboard";

export default async function MilitantDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return <ScopedMemberDashboard />;
}
