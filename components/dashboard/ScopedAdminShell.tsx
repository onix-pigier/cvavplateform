import { AdminShell, type AdminShellProps } from "@/components/dashboard/AdminShell";
import { getScopeBreadcrumb } from "@/lib/admin/territory";

type Props = Omit<AdminShellProps, "scopePath">;

/** Server wrapper keeps the actual territorial hierarchy visible on every
 * administrative screen, while AdminShellClient handles navigation state. */
export async function ScopedAdminShell(props: Props) {
  const scopeTypeByRole: Record<string, string> = {
    SUPER_ADMIN: "DIOCESE", AUMONIER_DIOCESE: "DIOCESE",
    ADMIN_DOYENNE: "DOYENNE", AUMONIER_DOYENNE: "DOYENNE",
    ADMIN_PAROISSE: "PAROISSE", AUMONIER_PAROISSE: "PAROISSE",
    CHEF: "EQUIPE", PARRAIN_MARRAINE: "SECTION",
  };
  const scopePath = await getScopeBreadcrumb(scopeTypeByRole[props.roleCode] ?? "SELF", props.scopeId);
  return <AdminShell {...props} scopePath={scopePath} />;
}
