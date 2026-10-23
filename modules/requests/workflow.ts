import type { CertificateRequestStatus, ValidationLevel } from "@/lib/generated/prisma/client";
export type { ValidationLevel } from "@/lib/generated/prisma/client";

const HIERARCHY: ValidationLevel[] = ["PAROISSE", "DOYENNE", "DIOCESE"];

export const VALIDATION_OVERRIDE_DELAY_MS = 72 * 60 * 60 * 1000;

export function isOverrideDelayMet(stepCreatedAt: Date, now = new Date()): boolean {
  return now.getTime() - stepCreatedAt.getTime() >= VALIDATION_OVERRIDE_DELAY_MS;
}

export function validationPath(requiredLevel: ValidationLevel): ValidationLevel[] {
  const finalIndex = HIERARCHY.indexOf(requiredLevel as ValidationLevel);
  if (finalIndex < 0) throw new Error(`Niveau de validation non pris en charge : ${requiredLevel}`);
  return HIERARCHY.slice(0, finalIndex + 1);
}

export function nextValidationLevel(status: CertificateRequestStatus, requiredLevel: ValidationLevel): ValidationLevel | null {
  const path = validationPath(requiredLevel);
  const completedCount: Partial<Record<CertificateRequestStatus, number>> = {
    PENDING: 0,
    SECTION_APPROVED: 1,
    DOYENNE_APPROVED: 2,
  };
  const completed = completedCount[status];
  if (completed === undefined || completed >= path.length) return null;
  return path[completed] ?? null;
}

export function statusAfterApproval(current: ValidationLevel, requiredLevel: ValidationLevel): "APPROVED" | "SECTION_APPROVED" | "DOYENNE_APPROVED" {
  const path = validationPath(requiredLevel);
  const index = path.indexOf(current);
  if (index < 0) throw new Error(`Niveau ${current} absent du circuit configuré.`);
  if (index === path.length - 1) return "APPROVED";
  return current === "PAROISSE" ? "SECTION_APPROVED" : "DOYENNE_APPROVED";
}
