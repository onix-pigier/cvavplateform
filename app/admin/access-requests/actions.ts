"use server";

import { redirect } from "next/navigation";
import type { Route } from "next";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function updateAccessRequest(formData: FormData) {
  const session = await getSession();
  if (!session?.roles.some((role) => role.roleCode === "SUPER_ADMIN")) redirect("/login");
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(id) || !["IN_REVIEW", "TICKET_CREATED", "CLOSED"].includes(status)) {
    redirect("/admin/access-requests" as Route);
  }
  await prisma.accountAccessRequest.update({ where: { id }, data: { status } });
  redirect("/admin/access-requests" as Route);
}
