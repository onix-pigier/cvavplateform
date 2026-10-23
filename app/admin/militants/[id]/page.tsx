import { redirect } from "next/navigation";
import type { Route } from "next";

export default async function LegacyMilitantProfile({ searchParams }: { searchParams: Promise<{ role?: string; scopeId?: string }> }) {
  const query = await searchParams;
  const params = new URLSearchParams();
  if (query.role) params.set("role", query.role);
  if (query.scopeId) params.set("scopeId", query.scopeId);
  redirect(`/admin/personnes${params.size ? `?${params.toString()}` : ""}` as Route);
}
