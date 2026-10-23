"use server";

import { randomBytes, randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { z } from "zod";
import { getSession, hashPassword } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

export type ReviewState = { error?: string; success?: { username: string; temporaryPassword?: string; reference: string; proposalSubmitted?: boolean; proposalRejected?: boolean } };

const decisionSchema = z.object({
  requestId: z.string().uuid(),
  decision: z.enum(["APPROVE", "REJECT", "PROPOSE"]),
  sectionId: z.preprocess((value) => value === "" ? undefined : value, z.string().uuid().optional()),
  teamId: z.preprocess((value) => value === "" ? undefined : value, z.string().uuid().optional()),
  note: z.string().trim().max(500).optional(),
});

async function canReview(roles: { roleCode: string; scopeType: string; scopeId: string | null }[], parishId: string) {
  const arbitration = roles.some((role) => role.roleCode === "SUPER_ADMIN" && role.scopeType === "DIOCESE");
  const isParishAdmin = roles.some((role) => role.roleCode === "ADMIN_PAROISSE" && role.scopeType === "PAROISSE" && role.scopeId === parishId);
  if (arbitration || isParishAdmin) return { allowed: true, arbitration, isParishAdmin, isChef: false, chefSectionIds: [] as string[] };
  const teamIds = roles.filter((role) => role.roleCode === "CHEF" && role.scopeType === "EQUIPE" && role.scopeId).map((role) => role.scopeId as string);
  if (teamIds.length) {
    const teams = await prisma.team.findMany({ where: { id: { in: teamIds }, isActive: true, section: { paroisseId: parishId, isActive: true } }, select: { sectionId: true } });
    if (teams.length) return { allowed: true, arbitration: false, isParishAdmin: false, isChef: true, chefSectionIds: teams.map((team) => team.sectionId) };
  }
  return { allowed: false, arbitration: false, isParishAdmin: false, isChef: false, chefSectionIds: [] as string[] };
}

export async function reviewPreRegistration(_previous: ReviewState, formData: FormData): Promise<ReviewState> {
  const session = await getSession();
  if (!session) return { error: "Votre session a expiré. Reconnectez-vous." };
  const parsed = decisionSchema.safeParse({
    requestId: formData.get("requestId"), decision: formData.get("decision"),
    sectionId: formData.get("sectionId"), teamId: formData.get("teamId"), note: formData.get("note"),
  });
  if (!parsed.success) return { error: "Les informations de décision sont invalides. Actualisez la page." };

  const request = await prisma.preRegistration.findUnique({ where: { id: parsed.data.requestId }, include: { requestedParish: { select: { id: true, name: true } } } });
  if (!request) return { error: "Cette demande n’existe plus." };
  const permission = await canReview(session.roles, request.requestedParishId);
  if (!permission.allowed || (request.status === "ARBITRATION" && !permission.arbitration)) {
    return { error: "Vous n’êtes pas autorisé à traiter cette demande ou son arbitrage." };
  }
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  if (parsed.data.decision === "PROPOSE") {
    if (!permission.isChef || request.status === "ARBITRATION" || !["PENDING", "IN_REVIEW"].includes(request.status)) return { error: "Seul le chef du périmètre peut proposer un rattachement pour une demande en attente." };
    if (!parsed.data.sectionId) return { error: "Choisissez une section active de la paroisse pour soumettre la proposition." };
    const proposedSection = await prisma.section.findFirst({ where: { id: parsed.data.sectionId, paroisseId: request.requestedParishId, isActive: true }, select: { id: true } });
    if (!proposedSection) return { error: "La section proposée n’est pas active dans la paroisse demandée." };
    if (!permission.chefSectionIds.includes(proposedSection.id)) return { error: "Un chef ne peut proposer un rattachement qu’à la section de son équipe." };
    if (parsed.data.teamId) {
      const proposedTeam = await prisma.team.findFirst({ where: { id: parsed.data.teamId, sectionId: proposedSection.id, isActive: true }, select: { id: true } });
      if (!proposedTeam) return { error: "L’équipe proposée ne dépend pas de la section sélectionnée." };
    }
    const proposed = await prisma.$transaction(async (tx) => {
      const changed = await tx.preRegistration.updateMany({ where: { id: request.id, status: request.status, createdAccountId: null }, data: {
        status: "PENDING_PROPOSAL", proposalSectionId: proposedSection.id, proposalTeamId: parsed.data.teamId ?? null,
        proposalById: session.accountId, proposalSubmittedAt: new Date(), proposalDecisionNote: parsed.data.note || null,
      } });
      if (changed.count !== 1) return false;
      await tx.auditLog.create({ data: { accountId: session.accountId, action: "PROPOSE_PRE_REGISTRATION_MEMBERSHIP", entityType: "PRE_REGISTRATION", entityId: request.id, before: { status: request.status }, after: { status: "PENDING_PROPOSAL", sectionId: proposedSection.id, teamId: parsed.data.teamId ?? null }, ipAddress: ip } });
      return true;
    });
    if (!proposed) return { error: "La demande vient d’être modifiée. Actualisez la liste." };
    return { success: { username: "", reference: request.referenceCode, proposalSubmitted: true } };
  }

  if (request.status === "PENDING_PROPOSAL") {
    if (!permission.isParishAdmin && !permission.arbitration) return { error: "Seul l’administrateur paroissial peut décider sur cette proposition." };
    if (parsed.data.decision === "REJECT") {
      const rejected = await prisma.$transaction(async (tx) => {
        const changed = await tx.preRegistration.updateMany({ where: { id: request.id, status: "PENDING_PROPOSAL", createdAccountId: null }, data: {
          status: "PENDING", proposalSectionId: null, proposalTeamId: null, proposalDecisionNote: parsed.data.note || "Proposition non retenue.",
          proposalReviewedById: session.accountId, proposalReviewedAt: new Date(),
        } });
        if (changed.count !== 1) return false;
        await tx.auditLog.create({ data: { accountId: session.accountId, action: "REJECT_PRE_REGISTRATION_MEMBERSHIP_PROPOSAL", entityType: "PRE_REGISTRATION", entityId: request.id, before: { status: "PENDING_PROPOSAL", sectionId: request.proposalSectionId, teamId: request.proposalTeamId }, after: { status: "PENDING", note: parsed.data.note || null }, ipAddress: ip } });
        return true;
      });
      if (!rejected) return { error: "La proposition vient d’être décidée. Actualisez la liste." };
      return { success: { username: "", reference: request.referenceCode, proposalRejected: true } };
    }
  } else if (!["PENDING", "IN_REVIEW", "ARBITRATION"].includes(request.status)) return { error: "Cette demande a déjà été traitée." };

  if (permission.isChef) return { error: "Le chef peut soumettre une proposition, mais la validation finale appartient à l’administrateur paroissial." };
  if (request.status === "PENDING_PROPOSAL" && parsed.data.decision !== "APPROVE") return { error: "Décision de proposition invalide." };

  try {
    if (parsed.data.decision === "REJECT") {
      const updated = await prisma.$transaction(async (tx) => {
        const result = await tx.preRegistration.updateMany({
          where: { id: request.id, status: request.status, createdAccountId: null },
          data: { status: "REJECTED", decisionNote: parsed.data.note || "Demande non approuvée.", reviewedById: session.accountId, reviewedAt: new Date() },
        });
        if (result.count === 1) await tx.auditLog.create({ data: { accountId: session.accountId, action: "REJECT", entityType: "PRE_REGISTRATION", entityId: request.id, before: { status: request.status }, after: { status: "REJECTED", note: parsed.data.note || null }, ipAddress: ip } });
        return result;
      });
      if (updated.count !== 1) return { error: "La demande a été modifiée par un autre responsable. Actualisez la liste." };
      return { success: { username: "", reference: request.referenceCode } };
    }

    const sectionId = request.status === "PENDING_PROPOSAL" ? request.proposalSectionId : parsed.data.sectionId;
    const teamId = request.status === "PENDING_PROPOSAL" ? request.proposalTeamId : parsed.data.teamId;
    if (!sectionId) return { error: "Choisissez une section active de la paroisse avant d’approuver." };
    const section = await prisma.section.findFirst({ where: { id: sectionId, paroisseId: request.requestedParishId, isActive: true }, select: { id: true } });
    if (!section) return { error: "La section choisie n’est pas active dans cette paroisse." };
    if (teamId) {
      const team = await prisma.team.findFirst({ where: { id: teamId, sectionId: section.id, isActive: true }, select: { id: true } });
      if (!team) return { error: "L’équipe choisie ne dépend pas de la section sélectionnée." };
    }

    // Le secret temporaire n'est jamais écrit en base ni dans les journaux.
    const temporaryPassword = randomBytes(18).toString("base64url");
    const passwordHash = await hashPassword(temporaryPassword);
    const pastoralYear = `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`;
    const outcome = await prisma.$transaction(async (tx) => {
      const claimed = await tx.preRegistration.updateMany({
        where: { id: request.id, status: request.status, createdAccountId: null },
        data: { status: "IN_REVIEW", reviewedById: session.accountId },
      });
      if (claimed.count !== 1) throw new Error("REQUEST_ALREADY_CLAIMED");

      let personId: string;
      let accountId: string;
      let username: string;
      let createdNewAccount = false;

      if (request.kind === "TRANSFER") {
        const memberNumber = request.originMemberNumber?.toLocaleUpperCase("fr-FR");
        if (!memberNumber || !request.originParishId) throw new Error("TRANSFER_DATA_INCOMPLETE");
        let account = await tx.account.findUnique({ where: { username: memberNumber }, include: { person: { include: { memberships: { where: { isActive: true } } } } } });
        if (!account && permission.arbitration) {
          const matches = await tx.person.findMany({ where: { firstName: { equals: request.firstName, mode: "insensitive" }, lastName: { equals: request.lastName, mode: "insensitive" }, birthDate: request.birthDate }, include: { account: true, memberships: { where: { isActive: true } } }, take: 2 });
          const match = matches.length === 1 ? matches[0] : null;
          const matchMembership = match?.memberships[0];
          if (match?.account && match.memberships.length === 1 && matchMembership?.paroisseId === request.originParishId) {
            account = await tx.account.findUnique({ where: { id: match.account.id }, include: { person: { include: { memberships: { where: { isActive: true } } } } } });
          }
        }
        if (!account || account.status !== "ACTIVE" || account.person.status !== "ACTIVE") throw new Error("TRANSFER_ACCOUNT_NOT_FOUND");
        if (account.person.firstName.trim().toLocaleLowerCase("fr-FR") !== request.firstName.trim().toLocaleLowerCase("fr-FR") || account.person.lastName.trim().toLocaleLowerCase("fr-FR") !== request.lastName.trim().toLocaleLowerCase("fr-FR") || account.person.birthDate.toISOString().slice(0, 10) !== request.birthDate.toISOString().slice(0, 10)) throw new Error("TRANSFER_IDENTITY_MISMATCH");
        const activeOriginMembership = account.person.memberships[0];
        if (account.person.memberships.length !== 1 || !activeOriginMembership || activeOriginMembership.paroisseId !== request.originParishId) throw new Error("TRANSFER_ORIGIN_MISMATCH");
        const militantRole = await tx.role.findUnique({ where: { code: "MILITANT" }, select: { id: true } });
        if (!militantRole) throw new Error("MILITANT_ROLE_NOT_CONFIGURED");
        const hasMilitantRole = await tx.userRole.findFirst({ where: { accountId: account.id, roleId: militantRole.id, endDate: null } });
        if (!hasMilitantRole) await tx.userRole.create({ data: { accountId: account.id, roleId: militantRole.id, scopeType: "SELF", scopeId: account.personId } });
        await tx.membership.update({ where: { id: activeOriginMembership.id }, data: { isActive: false, endDate: new Date() } });
        await tx.membership.create({ data: { personId: account.personId, paroisseId: request.requestedParishId, sectionId: section.id, teamId: teamId ?? null, pastoralYear, isActive: true } });
        personId = account.personId;
        accountId = account.id;
        username = account.username;
      } else {
        const existingPeople = await tx.person.findMany({ where: { firstName: { equals: request.firstName, mode: "insensitive" }, lastName: { equals: request.lastName, mode: "insensitive" }, birthDate: request.birthDate }, include: { account: true, memberships: { where: { isActive: true } } }, take: 2 });
        if (existingPeople.length > 1 || existingPeople.some((person) => person.memberships.length)) throw new Error("POSSIBLE_DUPLICATE_NEEDS_MANUAL_REVIEW");
        const existingAccount = existingPeople[0]?.account;
        if (existingAccount && (!permission.arbitration || existingAccount.status !== "ACTIVE")) throw new Error("POSSIBLE_DUPLICATE_NEEDS_MANUAL_REVIEW");
        const existingPerson = existingPeople[0];
        const person = existingPerson
          ? await tx.person.update({ where: { id: existingPerson.id }, data: { phone: request.phone, email: request.email } })
          : await tx.person.create({ data: { firstName: request.firstName, lastName: request.lastName, birthDate: request.birthDate, sex: request.sex, phone: request.phone, email: request.email } });
        personId = person.id;
        if (existingAccount) {
          accountId = existingAccount.id;
          username = existingAccount.username;
          const militantRole = await tx.role.findUnique({ where: { code: "MILITANT" }, select: { id: true } });
          if (!militantRole) throw new Error("MILITANT_ROLE_NOT_CONFIGURED");
          const hasMilitantRole = await tx.userRole.findFirst({ where: { accountId, roleId: militantRole.id, endDate: null } });
          if (!hasMilitantRole) await tx.userRole.create({ data: { accountId, roleId: militantRole.id, scopeType: "SELF", scopeId: personId } });
        } else {
          const [sequenceRow] = await tx.$queryRaw<{ next: bigint }[]>`SELECT nextval('cvav_member_number_seq') AS next`;
          if (!sequenceRow) throw new Error("MEMBER_NUMBER_SEQUENCE_UNAVAILABLE");
          const { next } = sequenceRow;
          username = `CVAV-${new Date().getFullYear()}-${String(next).padStart(6, "0")}`;
          const account = await tx.account.create({ data: { personId, username, passwordHash, status: "ACTIVE", passwordChangeRequired: true } });
          accountId = account.id;
          createdNewAccount = true;
          const militantRole = await tx.role.findUnique({ where: { code: "MILITANT" }, select: { id: true } });
          if (!militantRole) throw new Error("MILITANT_ROLE_NOT_CONFIGURED");
          await tx.userRole.create({ data: { accountId, roleId: militantRole.id, scopeType: "SELF", scopeId: personId } });
        }
        await tx.membership.create({ data: { personId, paroisseId: request.requestedParishId, sectionId: section.id, teamId: teamId ?? null, pastoralYear, isActive: true } });
      }

      if (request.guardianFirstName && request.guardianLastName && request.guardianPhone && request.guardianRelationship) {
        const existingTutor = await tx.tutor.findFirst({ where: { minorPersonId: personId }, select: { id: true } });
        const tutorData = { firstName: request.guardianFirstName, lastName: request.guardianLastName, phone: request.guardianPhone, email: request.guardianEmail, relationship: request.guardianRelationship };
        if (existingTutor) await tx.tutor.update({ where: { id: existingTutor.id }, data: tutorData });
        else await tx.tutor.create({ data: { minorPersonId: personId, ...tutorData } });
      }

      await tx.preRegistration.update({ where: { id: request.id }, data: { status: "ACCOUNT_CREATED", createdAccountId: accountId, reviewedById: session.accountId, reviewedAt: new Date(), decisionNote: parsed.data.note || null, ...(request.status === "PENDING_PROPOSAL" ? { proposalReviewedById: session.accountId, proposalReviewedAt: new Date() } : {}) } });
      await tx.auditLog.create({ data: { accountId: session.accountId, action: request.status === "PENDING_PROPOSAL" ? "APPROVE_PRE_REGISTRATION_MEMBERSHIP_PROPOSAL" : request.kind === "TRANSFER" ? "TRANSFER_APPROVE" : "APPROVE_AND_CREATE_ACCOUNT", entityType: "PRE_REGISTRATION", entityId: request.id, before: { status: request.status }, after: { status: "ACCOUNT_CREATED", createdAccountId: accountId, username, sectionId: section.id, teamId: teamId ?? null }, ipAddress: ip } });
      await tx.notification.createMany({ data: [{ accountId: session.accountId, type: "PRE_REGISTRATION_APPROVED", message: `La demande ${request.referenceCode} a été approuvée.`, targetLink: "/admin/pre-inscriptions" }] });
      return { accountId, username, createdNewAccount };
    });
    logger.info("pre_registration_approved", { requestId: request.id, accountId: outcome.accountId, kind: request.kind });
    return { success: { username: outcome.username, temporaryPassword: outcome.createdNewAccount ? temporaryPassword : undefined, reference: request.referenceCode } };
  } catch (error) {
    const code = error instanceof Error ? error.message : "UNKNOWN";
    logger.error("pre_registration_decision_failed", { requestId: request.id, code });
    const messages: Record<string, string> = {
      REQUEST_ALREADY_CLAIMED: "La demande vient d’être traitée par un autre responsable. Actualisez la liste.",
      TRANSFER_DATA_INCOMPLETE: "Les informations de mutation sont incomplètes. Soumettez le dossier à l’arbitrage.",
      TRANSFER_ACCOUNT_NOT_FOUND: "Le matricule ne correspond à aucun compte actif. Vérifiez-le ou soumettez le dossier à l’arbitrage.",
      TRANSFER_IDENTITY_MISMATCH: "Le matricule et l’identité fournie ne correspondent pas. Aucun compte n’a été déplacé; un arbitrage est nécessaire.",
      TRANSFER_ORIGIN_MISMATCH: "Le compte n’a pas un rattachement actif unique dans la paroisse d’origine déclarée.",
      POSSIBLE_DUPLICATE_NEEDS_MANUAL_REVIEW: "Une personne ou un compte correspondant existe déjà. Aucun doublon n’a été créé; vérifiez le dossier manuellement.",
      MILITANT_ROLE_NOT_CONFIGURED: "Le rôle militant n’est pas configuré. Contactez l’administrateur diocésain.",
    };
    return { error: messages[code] ?? "La décision n’a pas pu être enregistrée. Actualisez la page puis réessayez." };
  }
}
