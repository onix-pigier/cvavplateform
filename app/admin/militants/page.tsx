import { redirect } from "next/navigation";
import type { Route } from "next";

export default async function LegacyMilitantRegistry({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    if (typeof value === "string") params.set(key === "grade" ? "grade" : key, value);
  }
  redirect(`/admin/personnes${params.size ? `?${params.toString()}` : ""}` as Route);
}
