"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/lib/rbac/authorize";
import { getAdminContext } from "@/lib/admin/context";
import { getPersonRecord } from "@/lib/admin/portal-data";
import { revalidatePath } from "next/cache";

export type CreatePersonState = { error?: string; errors?: Record<string, string>; created?: boolean };
export type UpdatePersonState = { error?: string; errors?: Record<string, string>; updated?: boolean };

const optionalPhone = z.preprocess((value) => typeof value === "string" && !value.trim() ? undefined : value, z.string().trim().max(24).regex(/^[+0-9 ()-]+$/).optional());
const optionalEmail = z.preprocess((value) => typeof value === "string" && !value.trim() ? undefined : value, z.string().trim().email().max(160).optional());
const optionalText = (max: number) => z.preprocess((value) => typeof value === "string" && !value.trim() ? undefined : value, z.string().trim().max(max).optional());

const ownContactSchema = z.object({ phone: optionalPhone, email: optionalEmail, addressLine: optionalText(180), addressCity: optionalText(100), addressPostalCode: optionalText(20) });

export async function updateOwnContact(_previous: UpdatePersonState, formData: FormData): Promise<UpdatePersonState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = ownContactSchema.safeParse(Object.fromEntries(["phone", "email", "addressLine", "addressCity", "addressPostalCode"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] = issue.message;
    return { errors };
  }
  const permission = await authorize({ resourceCode: "UTILISATEUR", actionCode: "UPDATE", targetScopeType: "SELF", targetScopeId: session.personId });
  if (!permission.allowed) return { error: "La modification de vos coordonnées n’est pas autorisée." };
  const before = await prisma.person.findUnique({ where: { id: session.personId }, select: { phone: true, email: true, addressLine: true, addressCity: true, addressPostalCode: true } });
  if (!before) return { error: "Votre profil est introuvable." };
  const after = { phone: parsed.data.phone ?? null, email: parsed.data.email ?? null, addressLine: parsed.data.addressLine ?? null, addressCity: parsed.data.addressCity ?? null, addressPostalCode: parsed.data.addressPostalCode ?? null };
  const ipAddress = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      await tx.person.update({ where: { id: session.personId }, data: after });
      await tx.auditLog.create({ data: { accountId: session.accountId, action: "UPDATE_OWN_CONTACT", entityType: "PERSON", entityId: session.personId, before, after, ipAddress } });
    });
    revalidatePath("/espace/profil");
    return { updated: true };
  } catch {
    return { error: "La mise à jour n’a pas abouti. Réessayez." };
  }
}

const civilIdentitySchema = z.object({ personId: z.string().uuid(), role: z.enum(["SUPER_ADMIN", "ADMIN_DOYENNE", "ADMIN_PAROISSE"]), scopeId: z.string().min(1).max(80), firstName: z.string().trim().min(1).max(80), lastName: z.string().trim().min(1).max(80), birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), guardianId: z.preprocess((value) => value === "" ? undefined : value, z.string().uuid().optional()), guardianFirstName: optionalText(80), guardianLastName: optionalText(80) }).superRefine((value, ctx) => {
  if (value.guardianId && (!value.guardianFirstName || !value.guardianLastName)) ctx.addIssue({ code: "custom", path: ["guardianFirstName"], message: "Renseignez les deux noms du représentant légal." });
  if (!value.guardianId && (value.guardianFirstName || value.guardianLastName)) ctx.addIssue({ code: "custom", path: ["guardianId"], message: "Le représentant légal n’est plus associé à cette fiche." });
});

export async function updatePersonCivilIdentity(_previous: UpdatePersonState, formData: FormData): Promise<UpdatePersonState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = civilIdentitySchema.safeParse(Object.fromEntries(["personId", "role", "scopeId", "firstName", "lastName", "birthDate", "guardianId", "guardianFirstName", "guardianLastName"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] = issue.message;
    return { errors };
  }
  const data = parsed.data;
  const context = await getAdminContext(session, data.role, data.scopeId);
  if (!context?.canUpdateIdentity || !context.canReadPeople) return { error: "La modification d’état civil n’est pas autorisée dans ce périmètre." };
  const person = await getPersonRecord(context, data.personId);
  if (!person) return { error: "Cette personne n’est pas visible dans votre périmètre." };
  const birthDate = new Date(`${data.birthDate}T00:00:00.000Z`);
  if (!Number.isFinite(birthDate.getTime()) || birthDate > new Date() || birthDate.toISOString().slice(0, 10) !== data.birthDate) return { errors: { birthDate: "Indiquez une date de naissance valide." } };
  const duplicate = await prisma.person.findFirst({ where: { id: { not: data.personId }, firstName: { equals: data.firstName, mode: "insensitive" }, lastName: { equals: data.lastName, mode: "insensitive" }, birthDate }, select: { id: true } });
  if (duplicate) return { error: "Une autre personne possède déjà ces éléments d’identité. Vérifiez le registre avant de modifier." };
  const ipAddress = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      const before = await tx.person.findUniqueOrThrow({ where: { id: data.personId }, select: { firstName: true, lastName: true, birthDate: true } });
      const guardianBefore = data.guardianId ? await tx.tutor.findFirst({ where: { id: data.guardianId, minorPersonId: data.personId }, select: { firstName: true, lastName: true } }) : null;
      if (data.guardianId && !guardianBefore) throw new Error("GUARDIAN_NOT_FOUND");
      await tx.person.update({ where: { id: data.personId }, data: { firstName: data.firstName, lastName: data.lastName, birthDate } });
      if (data.guardianId && data.guardianFirstName && data.guardianLastName) await tx.tutor.update({ where: { id: data.guardianId }, data: { firstName: data.guardianFirstName, lastName: data.guardianLastName } });
      await tx.auditLog.create({ data: { accountId: session.accountId, action: "UPDATE_PERSON_CIVIL_IDENTITY", entityType: "PERSON", entityId: data.personId, before: { ...before, guardian: guardianBefore }, after: { firstName: data.firstName, lastName: data.lastName, birthDate, guardian: data.guardianId ? { firstName: data.guardianFirstName, lastName: data.guardianLastName } : null }, ipAddress } });
    });
    revalidatePath(`/admin/personnes/${data.personId}`);
    revalidatePath("/admin/personnes");
    return { updated: true };
  } catch {
    return { error: "La modification de l’état civil n’a pas abouti. Réessayez." };
  }
}

const schema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  sex: z.enum(["M", "F"]),
  phone: z.preprocess((value) => typeof value === "string" && !value.trim() ? undefined : value, z.string().trim().max(24).regex(/^[+0-9 ()-]+$/).optional()),
  email: z.preprocess((value) => typeof value === "string" && !value.trim() ? undefined : value, z.string().trim().email().max(160).optional()),
  scopeType: z.enum(["DIOCESE", "DOYENNE", "PAROISSE", "SECTION", "EQUIPE"]),
  scopeId: z.string().min(1).max(80),
});

export async function createPersonRecord(_previous: CreatePersonState, formData: FormData): Promise<CreatePersonState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = schema.safeParse(Object.fromEntries(["firstName", "lastName", "birthDate", "sex", "phone", "email", "scopeType", "scopeId"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] = issue.message;
    return { errors };
  }
  const data = parsed.data;
  const birthDate = new Date(`${data.birthDate}T00:00:00.000Z`);
  if (!Number.isFinite(birthDate.getTime()) || birthDate > new Date() || birthDate.toISOString().slice(0, 10) !== data.birthDate) return { errors: { birthDate: "Indiquez une date de naissance valide." } };
  const allowed = await authorize({ resourceCode: "PERSONNE", actionCode: "CREATE", targetScopeType: data.scopeType, targetScopeId: data.scopeId });
  if (!allowed.allowed) return { error: "Vous ne pouvez pas enregistrer une personne dans ce périmètre." };

  const activeScope = data.scopeType === "DIOCESE" ? await prisma.diocese.findFirst({ where: { id: data.scopeId, isActive: true }, select: { id: true } })
    : data.scopeType === "DOYENNE" ? await prisma.doyenne.findFirst({ where: { id: data.scopeId, isActive: true }, select: { id: true } })
    : data.scopeType === "PAROISSE" ? await prisma.paroisse.findFirst({ where: { id: data.scopeId, isActive: true, doyenne: { isActive: true } }, select: { id: true } })
      : data.scopeType === "SECTION" ? await prisma.section.findFirst({ where: { id: data.scopeId, isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } }, select: { id: true } })
        : await prisma.team.findFirst({ where: { id: data.scopeId, isActive: true, section: { isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } } }, select: { id: true } });
  if (!activeScope) return { error: "Ce périmètre n’existe plus ou n’est pas actif. Actualisez la page." };

  const duplicate = await prisma.person.findFirst({ where: { firstName: { equals: data.firstName, mode: "insensitive" }, lastName: { equals: data.lastName, mode: "insensitive" }, birthDate }, select: { id: true } });
  if (duplicate) return { error: "Une personne ayant ces éléments d’identité existe déjà. Vérifiez le dossier avant de continuer." };
  const requestHeaders = await headers();
  const ipAddress = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      const person = await tx.person.create({ data: { firstName: data.firstName, lastName: data.lastName, birthDate, sex: data.sex, phone: data.phone ?? null, email: data.email ?? null } });
      await tx.personRegistryEntry.create({ data: { personId: person.id, scopeType: data.scopeType, scopeId: data.scopeId, createdByAccountId: session.accountId } });
      await tx.auditLog.create({ data: { accountId: session.accountId, action: "CREATE_PERSON_RECORD", entityType: "PERSON", entityId: person.id, after: { scopeType: data.scopeType, scopeId: data.scopeId, accountCreated: false, membershipCreated: false }, ipAddress } });
    });
    return { created: true };
  } catch {
    return { error: "L’enregistrement n’a pas abouti. Actualisez la page puis réessayez." };
  }
}

export type CreateMembershipState = { error?: string; errors?: Record<string, string>; created?: boolean };

const membershipSchema = z.object({
  personId: z.string().uuid(),
  role: z.literal("ADMIN_PAROISSE"),
  scopeId: z.string().uuid(),
  sectionId: z.string().uuid(),
  teamId: z.preprocess((value) => value === "" ? undefined : value, z.string().uuid().optional()),
});

/** Crée uniquement un rattachement initial. Une mutation/transfert suit le
 * workflow de pré-inscription et son arbitrage, jamais cette action directe. */
export async function createPersonMembership(_previous: CreateMembershipState, formData: FormData): Promise<CreateMembershipState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = membershipSchema.safeParse(Object.fromEntries(["personId", "role", "scopeId", "sectionId", "teamId"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] = issue.message;
    return { errors };
  }
  const data = parsed.data;
  const context = await getAdminContext(session, data.role, data.scopeId);
  if (!context?.canManageMembership || !context.canReadPeople) return { error: "Vous n’avez pas le droit de rattacher une personne dans ce périmètre." };
  if (context.assignment.scopeType !== "PAROISSE") return { error: "Le périmètre paroissial sélectionné n’est pas valide." };
  const person = await getPersonRecord(context, data.personId);
  if (!person) return { error: "Cette personne n’est pas visible dans votre périmètre." };
  if (person.status !== "ACTIVE") return { error: "Une personne suspendue ou archivée ne peut pas recevoir de nouvelle appartenance." };

  let parishId: string;
  let sectionId: string;
  let teamId: string | null = data.teamId ?? null;
  const section = await prisma.section.findFirst({
    where: { id: data.sectionId, paroisseId: context.assignment.scopeId ?? "", isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } },
    select: { id: true, paroisseId: true },
  });
  if (!section) return { error: "La section sélectionnée n’est pas active dans votre paroisse." };
  if (teamId) {
    const team = await prisma.team.findFirst({ where: { id: teamId, sectionId: section.id, isActive: true }, select: { id: true } });
    if (!team) return { error: "L’équipe sélectionnée ne dépend pas de cette section ou n’est plus active." };
  }
  parishId = section.paroisseId;
  sectionId = section.id;

  const allowed = await authorize({ resourceCode: "APPARTENANCE", actionCode: "CREATE", targetScopeType: "PAROISSE", targetScopeId: parishId });
  if (!allowed.allowed) return { error: "L’autorisation de rattachement a été refusée." };

  const now = new Date();
  const year = now.getUTCFullYear();
  const pastoralYear = `${year}-${year + 1}`;
  const requestHeaders = await headers();
  const ipAddress = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      const person = await tx.person.findFirst({ where: { id: data.personId, status: "ACTIVE" }, select: { id: true } });
      if (!person) throw new Error("PERSON_NOT_ACTIVE");
      const activeMembership = await tx.membership.findFirst({ where: { personId: person.id, isActive: true }, select: { id: true } });
      if (activeMembership) throw new Error("ACTIVE_MEMBERSHIP_EXISTS");
      const membership = await tx.membership.create({ data: { personId: person.id, paroisseId: parishId, sectionId, teamId, pastoralYear, isActive: true, startDate: now } });
      await tx.auditLog.create({ data: {
        accountId: session.accountId, action: "CREATE_PERSON_MEMBERSHIP", entityType: "MEMBERSHIP", entityId: membership.id,
        after: { personId: person.id, parishId, sectionId, teamId, pastoralYear, accountCreated: false, appRoleAssigned: false, mandateCreated: false }, ipAddress,
      } });
    }, { isolationLevel: "Serializable" });
    return { created: true };
  } catch (error) {
    const code = typeof error === "object" && error && "code" in error ? String(error.code) : error instanceof Error ? error.message : "UNKNOWN";
    if (code === "ACTIVE_MEMBERSHIP_EXISTS") return { error: "Cette personne a déjà une appartenance active. Pour un changement ou un transfert, utilisez le workflow de mutation avec validation." };
    if (code === "PERSON_NOT_ACTIVE") return { error: "Une personne suspendue ou archivée ne peut pas recevoir une nouvelle appartenance." };
    if (code === "P2034") return { error: "Un rattachement concurrent a été détecté. Actualisez la fiche avant de réessayer." };
    return { error: "Le rattachement n’a pas abouti. Actualisez la fiche puis réessayez." };
  }
}

export type MandateState = { error?: string; errors?: Record<string, string>; created?: boolean; ended?: boolean };
type MandateScopeType = "DIOCESE" | "DOYENNE" | "PAROISSE" | "SECTION" | "EQUIPE";
const mandateSchema = z.object({
  personId: z.string().uuid(),
  role: z.enum(["SUPER_ADMIN", "ADMIN_DOYENNE", "ADMIN_PAROISSE"]),
  actorScopeId: z.string().uuid().or(z.literal("")),
  fonctionCode: z.string().trim().min(2).max(50),
  scopeType: z.enum(["DIOCESE", "DOYENNE", "PAROISSE", "SECTION", "EQUIPE"]),
  scopeId: z.string().uuid(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z.preprocess((value) => value === "" ? undefined : value, z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()),
  appointmentReference: z.preprocess((value) => typeof value === "string" && !value.trim() ? undefined : value, z.string().trim().max(160).optional()),
});

type AdminContext = NonNullable<Awaited<ReturnType<typeof getAdminContext>>>;

async function isMandateTargetAllowed(context: AdminContext, target: { scopeType: MandateScopeType; scopeId: string }) {
  const { roleCode, scopeType, scopeId } = context.assignment;
  if (roleCode === "ADMIN_DOYENNE") {
    if (target.scopeType !== "DOYENNE" || target.scopeId !== scopeId) return false;
    const deanery = await prisma.doyenne.findFirst({ where: { id: target.scopeId, isActive: true, diocese: { isActive: true } }, select: { id: true } });
    return Boolean(deanery);
  }
  if (roleCode === "ADMIN_PAROISSE") {
    if (!scopeId || !["PAROISSE", "SECTION", "EQUIPE"].includes(target.scopeType)) return false;
    let parishId: string | undefined;
    if (target.scopeType === "PAROISSE") parishId = target.scopeId;
    if (target.scopeType === "SECTION") {
      const section = await prisma.section.findFirst({
        where: { id: target.scopeId, isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } },
        select: { paroisseId: true },
      });
      parishId = section?.paroisseId;
    }
    if (target.scopeType === "EQUIPE") {
      const team = await prisma.team.findFirst({
        where: { id: target.scopeId, isActive: true, section: { isActive: true, paroisse: { isActive: true, doyenne: { isActive: true } } } },
        select: { section: { select: { paroisseId: true } } },
      });
      parishId = team?.section.paroisseId;
    }
    if (parishId !== scopeId) return false;
    const activeParish = await prisma.paroisse.findFirst({ where: { id: parishId, isActive: true, doyenne: { isActive: true } }, select: { id: true } });
    return Boolean(activeParish);
  }
  if (roleCode !== "SUPER_ADMIN" || scopeType !== "DIOCESE") return false;
  let dioceseId: string | undefined;
  if (target.scopeType === "DIOCESE") dioceseId = (await prisma.diocese.findFirst({ where: { id: target.scopeId, isActive: true }, select: { id: true } }))?.id;
  if (target.scopeType === "DOYENNE") dioceseId = (await prisma.doyenne.findFirst({ where: { id: target.scopeId, isActive: true, diocese: { isActive: true } }, select: { dioceseId: true } }))?.dioceseId;
  if (target.scopeType === "PAROISSE") {
    const parish = await prisma.paroisse.findFirst({ where: { id: target.scopeId, isActive: true, doyenne: { isActive: true, diocese: { isActive: true } } }, select: { doyenne: { select: { dioceseId: true } } } });
    dioceseId = parish?.doyenne.dioceseId;
  }
  if (target.scopeType === "SECTION") {
    const section = await prisma.section.findFirst({
      where: { id: target.scopeId, isActive: true, paroisse: { isActive: true, doyenne: { isActive: true, diocese: { isActive: true } } } },
      select: { paroisse: { select: { doyenne: { select: { dioceseId: true } } } } },
    });
    dioceseId = section?.paroisse.doyenne.dioceseId;
  }
  if (target.scopeType === "EQUIPE") {
    const team = await prisma.team.findFirst({
      where: { id: target.scopeId, isActive: true, section: { isActive: true, paroisse: { isActive: true, doyenne: { isActive: true, diocese: { isActive: true } } } } },
      select: {
        section: {
          select: {
            paroisse: {
              select: { doyenne: { select: { dioceseId: true } } },
            },
          },
        },
      },
    });
    dioceseId = team?.section.paroisse.doyenne.dioceseId;
  }
  return Boolean(dioceseId && (!scopeId || dioceseId === scopeId));
}

function parseMandateDate(value: string) {
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? date : null;
}

export async function createPersonMandate(_previous: MandateState, formData: FormData): Promise<MandateState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = mandateSchema.safeParse(Object.fromEntries(["personId", "role", "actorScopeId", "fonctionCode", "scopeType", "scopeId", "startDate", "endDate", "appointmentReference"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0] ?? "form")] = issue.message;
    return { errors };
  }
  const data = parsed.data;
  const context = await getAdminContext(session, data.role, data.actorScopeId);
  if (!context?.canCreateMandate || !context.canReadPeople) return { error: "Vous n’êtes pas autorisé à enregistrer un mandat dans ce périmètre." };
  const person = await getPersonRecord(context, data.personId);
  if (!person) return { error: "Cette personne n’est pas visible dans votre périmètre." };
  if (person.status !== "ACTIVE") return { error: "Une personne suspendue ou archivée ne peut pas recevoir de nouveau mandat." };

  const startDate = parseMandateDate(data.startDate);
  const endDate = data.endDate ? parseMandateDate(data.endDate) : null;
  if (!startDate) return { errors: { startDate: "Indiquez une date de début valide." } };
  if (data.endDate && !endDate) return { errors: { endDate: "Indiquez une date de fin valide." } };
  if (endDate && endDate < startDate) return { errors: { endDate: "La fin du mandat ne peut pas précéder son début." } };
  if (!(await isMandateTargetAllowed(context, { scopeType: data.scopeType, scopeId: data.scopeId }))) return { error: "Le périmètre choisi est inactif ou dépasse votre autorité." };

  const fonction = await prisma.fonction.findUnique({ where: { code: data.fonctionCode }, select: { id: true, code: true } });
  if (!fonction || fonction.code === "REFERENT_SECURITE") return { error: "Cette fonction n’est pas attribuable depuis la fiche personne." };
  if (fonction.code === "AUMONIER" && (data.role !== "SUPER_ADMIN" || !data.appointmentReference)) return { error: "Une nomination d’aumônier doit être enregistrée par le diocèse avec la référence de la décision déjà validée." };
  if (fonction.code === "CHEF_SECTION" && (data.role !== "ADMIN_PAROISSE" || data.scopeType !== "SECTION")) return { error: "La fonction Chef de section doit être attribuée par l’administrateur paroissial au périmètre d’une section." };

  const permission = await authorize({ resourceCode: "MANDAT", actionCode: "CREATE", targetScopeType: data.scopeType, targetScopeId: data.scopeId });
  if (!permission.allowed) return { error: "L’autorisation d’enregistrer ce mandat a été refusée." };
  const now = new Date();
  const headersList = await headers();
  const ipAddress = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      const overlap = await tx.mandate.findFirst({ where: {
        personId: data.personId, fonctionId: fonction.id, scopeType: data.scopeType, scopeId: data.scopeId,
        status: "ACTIVE", startDate: { lte: endDate ?? new Date("9999-12-31T00:00:00.000Z") },
        OR: [{ endDate: null }, { endDate: { gte: startDate } }],
      }, select: { id: true } });
      if (overlap) throw new Error("OVERLAPPING_MANDATE");
      const mandate = await tx.mandate.create({ data: {
        personId: data.personId, fonctionId: fonction.id, scopeType: data.scopeType, scopeId: data.scopeId,
        startDate, endDate, status: "ACTIVE", createdByAccountId: session.accountId, updatedByAccountId: session.accountId,
        ...(fonction.code === "AUMONIER" ? { appointmentReference: data.appointmentReference, validatedAt: now, validatedByAccountId: session.accountId } : {}),
      } });
      await tx.auditLog.create({ data: {
        accountId: session.accountId, action: fonction.code === "AUMONIER" ? "RECORD_DIOCESAN_CHAPLAIN_NOMINATION" : "CREATE_MANDATE",
        entityType: "MANDATE", entityId: mandate.id,
        after: { personId: data.personId, fonctionCode: fonction.code, scopeType: data.scopeType, scopeId: data.scopeId, startDate, endDate, validatedByDiocese: fonction.code === "AUMONIER", appointmentReference: fonction.code === "AUMONIER" ? data.appointmentReference : null }, ipAddress,
      } });
    }, { isolationLevel: "Serializable" });
    revalidatePath(`/admin/personnes/${data.personId}`);
    return { created: true };
  } catch (error) {
    const code = typeof error === "object" && error && "code" in error ? String(error.code) : error instanceof Error ? error.message : "UNKNOWN";
    if (code === "OVERLAPPING_MANDATE") return { error: "Un mandat identique chevauche déjà cette période pour cette personne." };
    if (code === "P2034") return { error: "Une modification concurrente a été détectée. Actualisez la fiche avant de réessayer." };
    return { error: "Le mandat n’a pas pu être enregistré. Actualisez la fiche puis réessayez." };
  }
}

const endMandateSchema = z.object({ mandateId: z.string().uuid(), personId: z.string().uuid(), role: z.enum(["SUPER_ADMIN", "ADMIN_DOYENNE", "ADMIN_PAROISSE"]), actorScopeId: z.string().uuid().or(z.literal("")) });

export async function endPersonMandate(_previous: MandateState, formData: FormData): Promise<MandateState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = endMandateSchema.safeParse(Object.fromEntries(["mandateId", "personId", "role", "actorScopeId"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) return { error: "Les informations de fin de mandat sont invalides. Actualisez la fiche." };
  const data = parsed.data;
  const context = await getAdminContext(session, data.role, data.actorScopeId);
  if (!context?.canEndMandate || !context.canReadPeople || !(await getPersonRecord(context, data.personId))) return { error: "Vous n’êtes pas autorisé à terminer ce mandat dans ce périmètre." };
  const mandate = await prisma.mandate.findFirst({ where: { id: data.mandateId, personId: data.personId, status: "ACTIVE" }, select: { scopeType: true, scopeId: true, startDate: true, endDate: true, fonction: { select: { code: true } } } });
  if (!mandate || !mandate.scopeId || !["DIOCESE", "DOYENNE", "PAROISSE", "SECTION", "EQUIPE"].includes(mandate.scopeType)) return { error: "Ce mandat n’est plus actif ou ne peut pas être terminé depuis cette fiche." };
  const now = new Date();
  if (mandate.startDate > now || (mandate.endDate && mandate.endDate < now)) return { error: "Seul un mandat actuellement en cours peut être terminé depuis cette action." };
  if (!(await isMandateTargetAllowed(context, { scopeType: mandate.scopeType as MandateScopeType, scopeId: mandate.scopeId }))) return { error: "Ce mandat dépasse votre périmètre d’autorité." };
  const permission = await authorize({ resourceCode: "MANDAT", actionCode: "REVOKE", targetScopeType: mandate.scopeType, targetScopeId: mandate.scopeId });
  if (!permission.allowed) return { error: "L’autorisation de fin de mandat a été refusée." };
  const headersList = await headers();
  const ipAddress = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    const result = await prisma.$transaction(async (tx) => {
      const updated = await tx.mandate.updateMany({ where: { id: data.mandateId, personId: data.personId, status: "ACTIVE" }, data: { status: "ENDED", endDate: now, updatedByAccountId: session.accountId } });
      if (updated.count !== 1) return false;
      await tx.auditLog.create({ data: { accountId: session.accountId, action: "END_MANDATE", entityType: "MANDATE", entityId: data.mandateId, after: { personId: data.personId, fonctionCode: mandate.fonction.code, status: "ENDED", endDate: now }, ipAddress } });
      return true;
    }, { isolationLevel: "Serializable" });
    if (!result) return { error: "Le mandat vient d’être terminé ou modifié. Actualisez la fiche." };
    revalidatePath(`/admin/personnes/${data.personId}`);
    return { ended: true };
  } catch {
    return { error: "La fin du mandat n’a pas abouti. Actualisez la fiche puis réessayez." };
  }
}

export type TeamLeadershipState = { error?: string; errors?: Record<string, string>; created?: boolean; ended?: boolean };

const teamLeadershipSchema = z.object({
  personId: z.string().uuid(),
  teamId: z.string().uuid(),
  role: z.enum(["LEADER", "ASSISTANT"]),
  actorScopeId: z.string().uuid(),
});

/** Désigne un chef ou assistant d'équipe. Cette responsabilité métier ne
 * crée jamais de compte applicatif ni de rôle CHEF. */
export async function createTeamLeadership(_previous: TeamLeadershipState, formData: FormData): Promise<TeamLeadershipState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = teamLeadershipSchema.safeParse(Object.fromEntries(["personId", "teamId", "role", "actorScopeId"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) return { error: "Les informations de désignation sont invalides. Actualisez la fiche." };
  const data = parsed.data;
  const context = await getAdminContext(session, "ADMIN_PAROISSE", data.actorScopeId);
  if (!context?.canManageTeamLeadership || !context.canReadPeople || context.assignment.scopeType !== "PAROISSE" || context.assignment.scopeId !== data.actorScopeId) {
    return { error: "Seul l’administrateur paroissial peut gérer les responsables d’équipe de sa paroisse." };
  }
  const person = await getPersonRecord(context, data.personId);
  if (!person || person.status !== "ACTIVE") return { error: "Cette personne n’est pas active ou visible dans votre paroisse." };
  const team = await prisma.team.findFirst({
    where: { id: data.teamId, isActive: true, section: { isActive: true, paroisseId: data.actorScopeId, paroisse: { isActive: true, doyenne: { isActive: true } } } },
    select: { id: true, section: { select: { paroisseId: true } } },
  });
  if (!team || team.section.paroisseId !== data.actorScopeId) return { error: "Cette équipe est inactive ou ne dépend pas de votre paroisse." };
  const permission = await authorize({ resourceCode: "RESPONSABILITE_EQUIPE", actionCode: "CREATE", targetScopeType: "PAROISSE", targetScopeId: data.actorScopeId });
  if (!permission.allowed) return { error: "L’autorisation de désigner un responsable d’équipe a été refusée." };

  const year = new Date().getFullYear();
  const pastoralYear = `${year}-${year + 1}`;
  const headersList = await headers();
  const ipAddress = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      const existing = await tx.teamLeadership.findFirst({ where: { teamId: data.teamId, personId: data.personId, pastoralYear, endedAt: null }, select: { id: true } });
      if (existing) throw new Error("DUPLICATE_LEADERSHIP");
      if (data.role === "LEADER") {
        const leader = await tx.teamLeadership.findFirst({ where: { teamId: data.teamId, role: "LEADER", pastoralYear, endedAt: null }, select: { id: true } });
        if (leader) throw new Error("LEADER_ALREADY_ASSIGNED");
      }
      const leadership = await tx.teamLeadership.create({ data: {
        teamId: data.teamId, personId: data.personId, role: data.role, pastoralYear,
        createdByAccountId: session.accountId, updatedByAccountId: session.accountId,
      } });
      await tx.auditLog.create({ data: {
        accountId: session.accountId, action: "ASSIGN_TEAM_LEADERSHIP", entityType: "TEAM_LEADERSHIP", entityId: leadership.id,
        after: { personId: data.personId, teamId: data.teamId, role: data.role, pastoralYear, accountCreated: false, appRoleAssigned: false }, ipAddress,
      } });
    }, { isolationLevel: "Serializable" });
    revalidatePath(`/admin/personnes/${data.personId}`);
    revalidatePath("/admin/personnes");
    return { created: true };
  } catch (error) {
    const code = error instanceof Error ? error.message : "UNKNOWN";
    if (code === "DUPLICATE_LEADERSHIP") return { error: "Cette personne est déjà enregistrée dans l’équipe pour l’année pastorale en cours." };
    if (code === "LEADER_ALREADY_ASSIGNED") return { error: "Cette équipe a déjà un chef principal pour l’année pastorale en cours. Terminez d’abord sa responsabilité." };
    if (code === "P2034") return { error: "Une modification concurrente a été détectée. Actualisez la fiche puis réessayez." };
    return { error: "La désignation n’a pas abouti. Actualisez la fiche puis réessayez." };
  }
}

const endTeamLeadershipSchema = z.object({ leadershipId: z.string().uuid(), personId: z.string().uuid(), actorScopeId: z.string().uuid() });

export async function endTeamLeadership(_previous: TeamLeadershipState, formData: FormData): Promise<TeamLeadershipState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = endTeamLeadershipSchema.safeParse(Object.fromEntries(["leadershipId", "personId", "actorScopeId"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) return { error: "Les informations de fin de responsabilité sont invalides." };
  const data = parsed.data;
  const context = await getAdminContext(session, "ADMIN_PAROISSE", data.actorScopeId);
  if (!context?.canManageTeamLeadership || context.assignment.scopeType !== "PAROISSE" || context.assignment.scopeId !== data.actorScopeId || !(await getPersonRecord(context, data.personId))) {
    return { error: "Vous n’êtes pas autorisé à terminer cette responsabilité dans ce périmètre." };
  }
  const leadership = await prisma.teamLeadership.findFirst({
    where: { id: data.leadershipId, personId: data.personId, endedAt: null, team: { section: { paroisseId: data.actorScopeId } } },
    select: { id: true, teamId: true, role: true, pastoralYear: true },
  });
  if (!leadership) return { error: "Cette responsabilité est déjà terminée ou n’appartient pas à votre paroisse." };
  const permission = await authorize({ resourceCode: "RESPONSABILITE_EQUIPE", actionCode: "REVOKE", targetScopeType: "PAROISSE", targetScopeId: data.actorScopeId });
  if (!permission.allowed) return { error: "L’autorisation de fin de responsabilité a été refusée." };
  const now = new Date();
  const headersList = await headers();
  const ipAddress = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    const ended = await prisma.$transaction(async (tx) => {
      const result = await tx.teamLeadership.updateMany({ where: { id: leadership.id, endedAt: null }, data: { endedAt: now, updatedByAccountId: session.accountId } });
      if (result.count !== 1) return false;
      await tx.auditLog.create({ data: {
        accountId: session.accountId, action: "END_TEAM_LEADERSHIP", entityType: "TEAM_LEADERSHIP", entityId: leadership.id,
        after: { personId: data.personId, teamId: leadership.teamId, role: leadership.role, pastoralYear: leadership.pastoralYear, endedAt: now }, ipAddress,
      } });
      return true;
    }, { isolationLevel: "Serializable" });
    if (!ended) return { error: "La responsabilité vient d’être terminée. Actualisez la fiche." };
    revalidatePath(`/admin/personnes/${data.personId}`);
    revalidatePath("/admin/personnes");
    return { ended: true };
  } catch {
    return { error: "La fin de responsabilité n’a pas abouti. Actualisez la fiche puis réessayez." };
  }
}

export type GradeProposalState = { error?: string; submitted?: boolean; decided?: boolean };

const proposeGradeSchema = z.object({ personId: z.string().uuid(), gradeId: z.string().uuid(), teamId: z.string().uuid() });

/** Le chef recommande un grade pour un membre de son équipe ; il ne modifie
 * jamais GradeHistory. Seul l'administrateur paroissial applique la décision. */
export async function proposePersonGrade(_previous: GradeProposalState, formData: FormData): Promise<GradeProposalState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = proposeGradeSchema.safeParse(Object.fromEntries(["personId", "gradeId", "teamId"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) return { error: "Les informations de proposition sont invalides." };
  const { personId, gradeId, teamId } = parsed.data;
  const context = await getAdminContext(session, "CHEF", teamId);
  if (!context || context.assignment.scopeType !== "EQUIPE" || context.assignment.scopeId !== teamId || !context.canReadPeople) return { error: "Seul le chef autorisé de cette équipe peut proposer un grade." };
  const person = await getPersonRecord(context, personId);
  if (!person || person.status !== "ACTIVE") return { error: "La personne n’est pas active ou visible dans votre équipe." };
  const membership = await prisma.membership.findFirst({ where: { personId, isActive: true, endDate: null, teamId }, select: { id: true } });
  if (!membership) return { error: "Vous ne pouvez proposer un grade que pour un membre actif de votre équipe." };
  const [grade, activeGrade, pending] = await Promise.all([
    prisma.grade.findFirst({ where: { id: gradeId, isActive: true, category: "MILITANT" }, select: { id: true, name: true, order: true } }),
    prisma.gradeHistory.findFirst({ where: { personId, endedAt: null }, select: { grade: { select: { order: true } } } }),
    prisma.gradeProposal.findFirst({ where: { personId, status: "PENDING" }, select: { id: true } }),
  ]);
  if (!grade) return { error: "Le grade proposé n’est pas un grade militant actif." };
  if (activeGrade && grade.order <= activeGrade.grade.order) return { error: "La proposition doit viser une étape supérieure au grade actuel." };
  if (pending) return { error: "Une proposition de grade est déjà en attente pour cette personne." };
  const requestHeaders = await headers();
  const ipAddress = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    await prisma.$transaction(async (tx) => {
      const proposal = await tx.gradeProposal.create({ data: { personId, gradeId, proposedByAccountId: session.accountId } });
      await tx.auditLog.create({ data: { accountId: session.accountId, action: "PROPOSE_MILITANT_GRADE", entityType: "GRADE_PROPOSAL", entityId: proposal.id, after: { personId, gradeId, gradeName: grade.name, teamId }, ipAddress } });
    }, { isolationLevel: "Serializable" });
    revalidatePath(`/admin/personnes/${personId}`);
    revalidatePath("/admin/propositions/grades");
    return { submitted: true };
  } catch {
    return { error: "La proposition n’a pas été enregistrée. Actualisez la fiche et réessayez." };
  }
}

const gradeProposalDecisionSchema = z.object({ proposalId: z.string().uuid(), parishId: z.string().uuid(), decision: z.enum(["APPROVE", "REJECT"]), note: z.string().trim().max(500).optional() });

export async function decideGradeProposal(_previous: GradeProposalState, formData: FormData): Promise<GradeProposalState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = gradeProposalDecisionSchema.safeParse(Object.fromEntries(["proposalId", "parishId", "decision", "note"].map((key) => [key, formData.get(key)])));
  if (!parsed.success) return { error: "Les informations de décision sont invalides." };
  const data = parsed.data;
  const context = await getAdminContext(session, "ADMIN_PAROISSE", data.parishId);
  if (!context || context.assignment.scopeType !== "PAROISSE" || context.assignment.scopeId !== data.parishId || !context.canUpdateIdentity || !context.canReadPeople) return { error: "Seul l’administrateur autorisé de cette paroisse peut traiter la proposition." };
  const permission = await authorize({ resourceCode: "PERSONNE", actionCode: "UPDATE", targetScopeType: "PAROISSE", targetScopeId: data.parishId });
  if (!permission.allowed) return { error: "L’autorisation de validation du grade a été refusée." };
  const proposal = await prisma.gradeProposal.findUnique({
    where: { id: data.proposalId },
    include: {
      grade: true,
      person: { include: { memberships: {
        where: { isActive: true, endDate: null },
        include: { paroisse: { select: { id: true } } },
        take: 1,
      } } },
    },
  });
  const activeMembership = proposal?.person.memberships[0];
  if (!proposal || proposal.status !== "PENDING" || proposal.grade.category !== "MILITANT" || !activeMembership || activeMembership.paroisseId !== data.parishId || !proposal.grade.isActive) return { error: "Cette proposition n’est plus valide dans votre paroisse." };
  const requestHeaders = await headers();
  const ipAddress = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    const decided = await prisma.$transaction(async (tx) => {
      const changed = await tx.gradeProposal.updateMany({ where: { id: proposal.id, status: "PENDING" }, data: { status: data.decision === "APPROVE" ? "APPROVED" : "REJECTED", decisionNote: data.note || null, decidedByAccountId: session.accountId, decidedAt: new Date() } });
      if (changed.count !== 1) return false;
      if (data.decision === "APPROVE") {
        const current = await tx.gradeHistory.findFirst({ where: { personId: proposal.personId, endedAt: null }, include: { grade: { select: { id: true, order: true } } } });
        if (current && proposal.grade.order <= current.grade.order) throw new Error("GRADE_NO_LONGER_PROGRESSIVE");
        const now = new Date();
        if (current) await tx.gradeHistory.update({ where: { id: current.id }, data: { endedAt: now } });
        const history = await tx.gradeHistory.create({ data: { personId: proposal.personId, gradeId: proposal.gradeId, obtainedAt: now, awardedById: session.personId, justification: data.note || "Proposition du chef validée par l’administrateur paroissial." } });
        await tx.auditLog.create({ data: { accountId: session.accountId, action: "APPROVE_MILITANT_GRADE_PROPOSAL", entityType: "GRADE_HISTORY", entityId: history.id, ...(current ? { before: { gradeId: current.grade.id } } : {}), after: { personId: proposal.personId, gradeId: proposal.gradeId, proposalId: proposal.id }, ipAddress } });
      } else {
        await tx.auditLog.create({ data: { accountId: session.accountId, action: "REJECT_MILITANT_GRADE_PROPOSAL", entityType: "GRADE_PROPOSAL", entityId: proposal.id, before: { status: "PENDING" }, after: { status: "REJECTED", note: data.note || null }, ipAddress } });
      }
      return true;
    }, { isolationLevel: "Serializable" });
    if (!decided) return { error: "La proposition vient d’être traitée. Actualisez la liste." };
    revalidatePath(`/admin/personnes/${proposal.personId}`);
    revalidatePath("/admin/propositions/grades");
    return { decided: true };
  } catch (error) {
    if (error instanceof Error && error.message === "GRADE_NO_LONGER_PROGRESSIVE") return { error: "Le grade actuel a changé depuis la proposition. Aucune attribution n’a été faite." };
    return { error: "La décision n’a pas été enregistrée. Actualisez la liste puis réessayez." };
  }
}
