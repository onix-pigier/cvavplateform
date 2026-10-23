"use server";

import { randomBytes, randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export type PreRegistrationState = { reference?: string; errors?: Record<string, string>; error?: string };

const blankToUndefined = (value: unknown) => value == null || (typeof value === "string" && value.trim() === "") ? undefined : value;
// The parish directory uses stable historical slugs; accept those and UUIDs,
// but reject arbitrary strings before looking them up in the active directory.
const parishIdSchema = z.string().trim().refine(
  (id) => z.string().uuid().safeParse(id).success || /^paroisse-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id),
  "Identifiant de paroisse invalide.",
);
const schema = z.object({
  kind: z.enum(["NEW_MEMBER", "TRANSFER"]),
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  sex: z.enum(["M", "F"]),
  phone: z.string().trim().min(8).max(24).regex(/^[+0-9 ()-]+$/),
  email: z.preprocess(blankToUndefined, z.string().email().max(160).optional()),
  requestedParishId: parishIdSchema,
  originParishId: z.preprocess(blankToUndefined, parishIdSchema.optional()),
  originMemberNumber: z.preprocess(blankToUndefined, z.string().trim().min(4).max(40).optional()),
  guardianFirstName: z.preprocess(blankToUndefined, z.string().trim().min(2).max(80).optional()),
  guardianLastName: z.preprocess(blankToUndefined, z.string().trim().min(2).max(80).optional()),
  guardianPhone: z.preprocess(blankToUndefined, z.string().trim().min(8).max(24).regex(/^[+0-9 ()-]+$/).optional()),
  guardianEmail: z.preprocess(blankToUndefined, z.string().email().max(160).optional()),
  guardianRelationship: z.preprocess(blankToUndefined, z.string().trim().min(2).max(40).optional()),
  consent: z.literal(true),
});

function isUnder18(birthDate: Date, now = new Date()) {
  let age = now.getFullYear() - birthDate.getFullYear();
  const month = now.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) age -= 1;
  return age < 18;
}

export async function submitPreRegistration(_previous: PreRegistrationState, formData: FormData): Promise<PreRegistrationState> {
  if (String(formData.get("website") ?? "")) return { reference: "" };
  const candidate = {
    kind: formData.get("kind"), firstName: formData.get("firstName"), lastName: formData.get("lastName"),
    birthDate: formData.get("birthDate"), sex: formData.get("sex"), phone: formData.get("phone"), email: formData.get("email"),
    requestedParishId: formData.get("requestedParishId"), originParishId: formData.get("originParishId"),
    originMemberNumber: formData.get("originMemberNumber"), guardianFirstName: formData.get("guardianFirstName"),
    guardianLastName: formData.get("guardianLastName"), guardianPhone: formData.get("guardianPhone"),
    guardianEmail: formData.get("guardianEmail"), guardianRelationship: formData.get("guardianRelationship"),
    consent: formData.get("consent") === "on",
  };
  const parsed = schema.safeParse(candidate);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] = issue.message;
    return { errors };
  }
  const data = parsed.data;
  const birthDate = new Date(`${data.birthDate}T00:00:00.000Z`);
  if (Number.isNaN(birthDate.getTime()) || birthDate > new Date()) return { errors: { birthDate: "Saisissez une date de naissance valide." } };
  if (data.kind === "TRANSFER" && (!data.originParishId || !data.originMemberNumber)) {
    return { errors: { originParishId: "Pour une mutation, indiquez la paroisse d’origine et le matricule actuel." } };
  }
  if (data.kind === "TRANSFER" && data.originParishId === data.requestedParishId) {
    return { errors: { originParishId: "La paroisse d’origine et la paroisse demandée doivent être différentes." } };
  }
  if (data.kind === "NEW_MEMBER" && (data.originParishId || data.originMemberNumber)) {
    return { errors: { kind: "Choisissez le parcours mutation si le demandeur est déjà membre." } };
  }
  if (isUnder18(birthDate) && !(data.guardianFirstName && data.guardianLastName && data.guardianPhone && data.guardianRelationship)) {
    return { errors: { guardianFirstName: "Pour un mineur, les coordonnées du parent ou tuteur sont obligatoires." } };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!consumeRateLimit(`pre-registration:${ip}`, 4, 60 * 60 * 1000).allowed) {
    return { error: "Trop de demandes depuis cet appareil. Réessayez plus tard ou contactez la paroisse." };
  }

  try {
    const [destination, origin] = await Promise.all([
      prisma.paroisse.findFirst({ where: { id: data.requestedParishId, isActive: true }, select: { id: true, name: true } }),
      data.originParishId ? prisma.paroisse.findFirst({ where: { id: data.originParishId, isActive: true }, select: { id: true } }) : Promise.resolve(null),
    ]);
    if (!destination || (data.originParishId && !origin)) return { error: "La paroisse choisie n’est plus disponible. Actualisez la page et réessayez." };

    let possibleDuplicate = false;
    if (data.kind === "TRANSFER") {
      const originMemberNumber = data.originMemberNumber;
      if (!originMemberNumber) return { errors: { originMemberNumber: "Indiquez le matricule actuel pour vérifier la mutation." } };
      const normalizedMemberNumber = originMemberNumber.toLocaleUpperCase("fr-FR");
      const account = await prisma.account.findUnique({ where: { username: normalizedMemberNumber }, include: { person: { include: { memberships: { where: { isActive: true } } } } } });
      const activeMembership = account?.person.memberships[0];
      possibleDuplicate = !account || account.person.memberships.length !== 1 || activeMembership?.paroisseId !== origin?.id;
    } else {
      const exactPerson = await prisma.person.findFirst({ where: { firstName: { equals: data.firstName, mode: "insensitive" }, lastName: { equals: data.lastName, mode: "insensitive" }, birthDate } });
      possibleDuplicate = Boolean(exactPerson);
    }

    const id = randomUUID();
    const referenceCode = `PR-${new Date().getFullYear()}-${randomBytes(4).toString("hex").toUpperCase()}`;
    const status = possibleDuplicate ? "ARBITRATION" as const : "PENDING" as const;
    await prisma.$transaction(async (tx) => {
      await tx.preRegistration.create({
        data: {
          id, referenceCode, kind: data.kind, status, possibleDuplicate,
          firstName: data.firstName, lastName: data.lastName, birthDate, sex: data.sex,
          phone: data.phone, email: data.email ?? null,
          guardianFirstName: data.guardianFirstName ?? null, guardianLastName: data.guardianLastName ?? null,
          guardianPhone: data.guardianPhone ?? null, guardianEmail: data.guardianEmail ?? null,
          guardianRelationship: data.guardianRelationship ?? null,
          originParishId: origin?.id ?? null, originMemberNumber: data.originMemberNumber?.toLocaleUpperCase("fr-FR") ?? null,
          requestedParishId: destination.id, consentedAt: new Date(),
        },
      });
      const parishApprovers = await tx.userRole.findMany({
        where: { endDate: null, role: { code: { in: ["ADMIN_PAROISSE", "CHEF"] } }, account: { status: "ACTIVE", person: { status: "ACTIVE" } } },
        select: { accountId: true, role: { select: { code: true } }, scopeType: true, scopeId: true },
      });
      const teamIds = parishApprovers.filter((role) => role.role.code === "CHEF" && role.scopeType === "EQUIPE" && role.scopeId).map((role) => role.scopeId as string);
      const matchingTeams = teamIds.length ? await tx.team.findMany({ where: { id: { in: teamIds }, section: { paroisseId: destination.id } }, select: { id: true } }) : [];
      const teamSet = new Set(matchingTeams.map((team) => team.id));
      const recipients = new Set(parishApprovers.filter((role) =>
        (role.role.code === "ADMIN_PAROISSE" && role.scopeType === "PAROISSE" && role.scopeId === destination.id) ||
        (role.role.code === "CHEF" && role.scopeId && teamSet.has(role.scopeId)),
      ).map((role) => role.accountId));
      if (status === "ARBITRATION") {
        const diocesanAdmins = await tx.userRole.findMany({ where: { endDate: null, role: { code: "SUPER_ADMIN" }, account: { status: "ACTIVE" } }, select: { accountId: true } });
        diocesanAdmins.forEach(({ accountId }) => recipients.add(accountId));
      }
      if (!recipients.size) {
        const fallbackAdmins = await tx.userRole.findMany({ where: { endDate: null, role: { code: "SUPER_ADMIN" }, account: { status: "ACTIVE" } }, select: { accountId: true } });
        fallbackAdmins.forEach(({ accountId }) => recipients.add(accountId));
      }
      if (recipients.size) await tx.notification.createMany({ data: [...recipients].map((accountId) => ({
        accountId, type: status === "ARBITRATION" ? "PRE_REGISTRATION_ARBITRATION" : "PRE_REGISTRATION_PENDING",
        message: status === "ARBITRATION" ? `Une pré-inscription nécessite un contrôle de doublon (${referenceCode}).` : `Une pré-inscription attend une vérification paroissiale (${referenceCode}).`,
        targetLink: "/admin/pre-inscriptions",
      })) });
      await tx.auditLog.create({ data: { action: "SUBMIT", entityType: "PRE_REGISTRATION", entityId: id, after: { kind: data.kind, status, requestedParishId: destination.id } } });
    });
    logger.info("pre_registration_received", { kind: data.kind, status });
    return { reference: referenceCode };
  } catch (error) {
    logger.error("pre_registration_submission_failed", { error });
    return { error: "La demande n’a pas pu être enregistrée. Réessayez ou contactez la paroisse choisie." };
  }
}
