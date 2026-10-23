import { prisma } from "@/lib/prisma";
import { Prisma, type ValidationLevel } from "@/lib/generated/prisma/client";
import type { CertificatePdfSnapshot } from "@/lib/pdf/simple";
import type { CreateCertificateRequestInput } from "./schema";
import { isOverrideDelayMet } from "./workflow";
import { withSerializationRetry } from "./serialization-retry";

// Module requests : CertificateRequest, Certificate — WF-13, WF-27 (circuit anti-auto-validation D-062)
// Accès base de données uniquement — aucune règle métier ni contrôle RBAC
// ici (ça vit dans service.ts).
export const _prismaRef = prisma;

export function findRequestType(id: string) {
  return prisma.requestType.findUnique({ where: { id } });
}

export function findRequesterMembership(personId: string) {
  return prisma.membership.findFirst({
    where: { personId, isActive: true, endDate: null },
    include: { paroisse: { select: { id: true, doyenneId: true, doyenne: { select: { dioceseId: true } } } }, team: { select: { id: true } } },
    orderBy: { startDate: "desc" },
  });
}

export function findExistingPendingRequest(requesterId: string, requestTypeId: string) {
  return prisma.certificateRequest.findFirst({
    where: { requesterId, requestTypeId, status: { in: ["PENDING", "SECTION_APPROVED", "DOYENNE_APPROVED"] } },
    include: { requestType: true, certificate: true, validationSteps: true },
    orderBy: { createdAt: "desc" },
  });
}

export function createRequest(input: CreateCertificateRequestInput & { createdById: string; createdByAccountId: string; requiredValidationLevel: ValidationLevel }) {
  return prisma.$transaction(async (tx) => {
    const request = await tx.certificateRequest.create({
      data: {
        requestTypeId: input.requestTypeId,
        requesterId: input.requesterId,
        createdById: input.createdById,
        requiredValidationLevel: input.requiredValidationLevel,
        validationSteps: { create: { level: "PAROISSE" } },
      },
      include: { requestType: true, requester: { select: { id: true, firstName: true, lastName: true } }, certificate: true, validationSteps: true },
    });
    await tx.auditLog.create({ data: {
      accountId: input.createdByAccountId,
      action: "CREATE_CERTIFICATE_REQUEST",
      entityType: "CERTIFICATE_REQUEST",
      entityId: request.id,
      after: { requesterId: request.requesterId, requestTypeId: request.requestTypeId, requiredValidationLevel: request.requiredValidationLevel },
    } });
    return request;
  });
}

export function listRequests(personId: string, skip: number, take: number) {
  return Promise.all([
    prisma.certificateRequest.findMany({
      where: { OR: [{ requesterId: personId }, { createdById: personId }] },
      include: { requestType: true, requester: { select: { id: true, firstName: true, lastName: true } }, certificate: true, validationSteps: true },
      orderBy: { createdAt: "desc" }, skip, take,
    }),
    prisma.certificateRequest.count({ where: { OR: [{ requesterId: personId }, { createdById: personId }] } }),
  ]);
}

export function findRequestForApproval(id: string) {
  return prisma.certificateRequest.findUnique({
    where: { id },
    include: {
      requestType: true,
      validationSteps: true,
      requester: { include: { memberships: { where: { isActive: true, endDate: null }, include: { paroisse: { include: { doyenne: { select: { dioceseId: true } } } }, team: true }, take: 1 } } },
      certificate: true,
    },
  });
}

export function hasActiveValidator(level: ValidationLevel, scope: { type: string; id: string }, now = new Date()) {
  const roleCode = level === "PAROISSE" ? "ADMIN_PAROISSE" : level === "DOYENNE" ? "ADMIN_DOYENNE" : "SUPER_ADMIN";
  return prisma.userRole.findFirst({
    where: {
      role: { code: roleCode },
      scopeType: scope.type as "PAROISSE" | "DOYENNE" | "DIOCESE",
      scopeId: scope.id,
      startDate: { lte: now },
      OR: [{ endDate: null }, { endDate: { gte: now } }],
      account: { status: "ACTIVE", person: { status: "ACTIVE" } },
    },
    select: { id: true },
  });
}

export function approveAtLevel(input: {
  id: string;
  expectedStatus: "PENDING" | "SECTION_APPROVED" | "DOYENNE_APPROVED";
  nextStatus: "SECTION_APPROVED" | "DOYENNE_APPROVED" | "APPROVED";
  level: ValidationLevel;
  nextLevel: ValidationLevel | null;
  validatorId: string;
  validatorAccountId: string;
  override?: { reason: string; pendingForMs: number; targetScope: { type: string; id: string }; nextScope: { type: string; id: string } | null };
  certificate?: { uniqueNumber: string; qrCode: string; contentHash: string; pdfUrl: string; templateUsed: string; contentSnapshot: CertificatePdfSnapshot };
}) {
  const transaction = () => prisma.$transaction(async (tx) => {
    let overrideStepCreatedAt: Date | undefined;
    if (input.override) {
      const now = new Date();
      const step = await tx.certificateValidationStep.findFirst({
        where: { requestId: input.id, level: input.level, status: "PENDING" },
        select: { createdAt: true },
      });
      if (!step) throw new Error("REQUEST_STEP_NOT_PENDING");
      overrideStepCreatedAt = step.createdAt;
      const pendingForMs = now.getTime() - step.createdAt.getTime();
      if (!isOverrideDelayMet(step.createdAt, now)) throw new Error("OVERRIDE_DELAY_NOT_MET");
      const roleCode = input.level === "PAROISSE" ? "ADMIN_PAROISSE" : input.level === "DOYENNE" ? "ADMIN_DOYENNE" : "SUPER_ADMIN";
      const activeValidator = await tx.userRole.findFirst({
        where: {
          role: { code: roleCode },
          scopeType: input.override.targetScope.type as "PAROISSE" | "DOYENNE" | "DIOCESE",
          scopeId: input.override.targetScope.id,
          startDate: { lte: now },
          OR: [{ endDate: null }, { endDate: { gte: now } }],
          account: { status: "ACTIVE", person: { status: "ACTIVE" } },
        },
        select: { id: true },
      });
      if (activeValidator) throw new Error("OVERRIDE_VALIDATOR_AVAILABLE");
      input.override.pendingForMs = pendingForMs;
    }
    const validatorField = input.level === "PAROISSE" ? "level1ValidatorId" : input.level === "DOYENNE" ? "level2ValidatorId" : "level3ValidatorId";
    const changed = await tx.certificateRequest.updateMany({
      where: { id: input.id, status: input.expectedStatus },
      data: {
        status: input.nextStatus,
        [validatorField]: input.validatorId,
        ...(input.nextStatus === "APPROVED" ? { closedAt: new Date() } : {}),
      },
    });
    if (changed.count !== 1) throw new Error("REQUEST_ALREADY_DECIDED");
    const completedStep = await tx.certificateValidationStep.updateMany({
      where: { requestId: input.id, level: input.level, status: "PENDING" },
      data: { status: "APPROVED", validatedByPersonId: input.validatorId, validatedAt: new Date() },
    });
    if (completedStep.count !== 1) throw new Error("REQUEST_STEP_NOT_PENDING");
    if (input.override) {
      const marked = await tx.$executeRaw`
        UPDATE "certificate_validation_steps"
        SET "overridden" = TRUE, "comment" = ${input.override.reason}
        WHERE "requestId" = ${input.id} AND "level" = ${input.level}::"ValidationLevel"
          AND "status" = 'APPROVED'::"ValidationStepStatus"
      `;
      if (marked !== 1) throw new Error("REQUEST_STEP_NOT_PENDING");
    }
    if (input.nextLevel) await tx.certificateValidationStep.create({ data: { requestId: input.id, level: input.nextLevel } });
    if (input.override?.nextScope && input.nextLevel) {
      const nextRoleCode = input.nextLevel === "PAROISSE" ? "ADMIN_PAROISSE" : input.nextLevel === "DOYENNE" ? "ADMIN_DOYENNE" : "SUPER_ADMIN";
      const recipients = await tx.userRole.findMany({
        where: {
          role: { code: nextRoleCode },
          scopeType: input.override.nextScope.type as "PAROISSE" | "DOYENNE" | "DIOCESE",
          scopeId: input.override.nextScope.id,
          startDate: { lte: new Date() },
          OR: [{ endDate: null }, { endDate: { gte: new Date() } }],
          account: { status: "ACTIVE", person: { status: "ACTIVE" } },
        },
        select: { accountId: true },
      });
      if (recipients.length) await tx.notification.createMany({ data: [...new Set(recipients.map(({ accountId }) => accountId))].map((accountId) => ({
        accountId,
        type: "CERTIFICATE_REQUEST_ESCALATED",
        message: `Une demande (${input.id}) attend votre validation après une dérogation au niveau précédent.`,
        targetLink: "/admin/demandes",
      })) });
    }
    const request = await tx.certificateRequest.findUniqueOrThrow({ where: { id: input.id }, include: { validationSteps: true } });
    if (input.override) {
      const flags = await tx.$queryRaw<Array<{ id: string; overridden: boolean }>>`
        SELECT "id", "overridden" FROM "certificate_validation_steps" WHERE "requestId" = ${input.id}
      `;
      const flagById = new Map(flags.map((step) => [step.id, step.overridden]));
      request.validationSteps = request.validationSteps.map((step) => ({ ...step, overridden: flagById.get(step.id) ?? false }));
    }
    if (input.certificate) await tx.certificate.create({ data: { certificateRequestId: input.id, ...input.certificate } });
    await tx.auditLog.create({ data: {
      accountId: input.validatorAccountId,
      action: input.override ? "OVERRIDE_APPROVE_CERTIFICATE_REQUEST_LEVEL" : "APPROVE_CERTIFICATE_REQUEST_LEVEL",
      entityType: "CERTIFICATE_REQUEST",
      entityId: input.id,
      before: {
        status: input.expectedStatus,
        ...(input.override ? {
          validationLevel: input.level,
          stepStatus: "PENDING",
          stepCreatedAt: overrideStepCreatedAt?.toISOString(),
          scope: input.override.targetScope,
        } : {}),
      },
      after: {
        status: input.nextStatus,
        validationLevel: input.level,
        validatorPersonId: input.validatorId,
        certificateGenerated: Boolean(input.certificate),
        ...(input.override ? {
          overridden: true,
          overrideReason: input.override.reason,
          activeValidatorAvailable: false,
          pendingForMs: input.override.pendingForMs,
          scope: input.override.targetScope,
        } : {}),
      },
    } });
    return request;
  }, { isolationLevel: input.override ? Prisma.TransactionIsolationLevel.Serializable : Prisma.TransactionIsolationLevel.ReadCommitted });
  return input.override ? withSerializationRetry(transaction) : transaction();
}

export function rejectRequest(input: {
  id: string;
  expectedStatus: "PENDING" | "SECTION_APPROVED" | "DOYENNE_APPROVED";
  level: ValidationLevel;
  validatorId: string;
  validatorAccountId: string;
  decisionNote: string;
}) {
  return prisma.$transaction(async (tx) => {
    const validatorField = input.level === "PAROISSE" ? "level1ValidatorId" : input.level === "DOYENNE" ? "level2ValidatorId" : "level3ValidatorId";
    const changed = await tx.certificateRequest.updateMany({
      where: { id: input.id, status: input.expectedStatus },
      data: { status: "REJECTED", [validatorField]: input.validatorId, decisionNote: input.decisionNote, closedAt: new Date() },
    });
    if (changed.count !== 1) throw new Error("REQUEST_ALREADY_DECIDED");
    const rejectedStep = await tx.certificateValidationStep.updateMany({
      where: { requestId: input.id, level: input.level, status: "PENDING" },
      data: { status: "REJECTED", validatedByPersonId: input.validatorId, validatedAt: new Date(), comment: input.decisionNote },
    });
    if (rejectedStep.count !== 1) throw new Error("REQUEST_STEP_NOT_PENDING");
    const request = await tx.certificateRequest.findUniqueOrThrow({ where: { id: input.id }, include: { validationSteps: true } });
    await tx.auditLog.create({ data: {
      accountId: input.validatorAccountId,
      action: "REJECT_CERTIFICATE_REQUEST_LEVEL",
      entityType: "CERTIFICATE_REQUEST",
      entityId: input.id,
      before: { status: input.expectedStatus },
      after: { status: "REJECTED", validationLevel: input.level, validatorPersonId: input.validatorId, decisionNote: input.decisionNote },
    } });
    return request;
  });
}

export function findCertificateByNumber(uniqueNumber: string) {
  return prisma.certificate.findUnique({ where: { uniqueNumber }, select: { uniqueNumber: true, status: true, generatedAt: true, hashAlgorithm: true, contentHash: true } });
}

export function findCertificateForDownload(requestId: string) {
  return prisma.certificate.findUnique({
    where: { certificateRequestId: requestId },
    select: {
      uniqueNumber: true,
      status: true,
      generatedAt: true,
      contentHash: true,
      contentSnapshot: true,
      templateUsed: true,
      certificateRequest: { select: { requesterId: true, createdById: true, requestType: { select: { name: true } }, requester: { select: { firstName: true, lastName: true } } } },
    },
  });
}
