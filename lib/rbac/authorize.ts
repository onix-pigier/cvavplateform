import "server-only";
import { prisma } from "@/lib/prisma";
import { getSession, type SessionPayload } from "@/lib/auth";

// ----------------------------------------------------------------------------
// Hiérarchie des scopes (Volume 11 §11.4). ACTIVITY est un scope transversal
// (ex. REFERENT_SECURITE, D-072) : pas d'héritage descendant standard, il se
// vérifie par appartenance directe à l'activité du mandat en cours.
// ----------------------------------------------------------------------------
const SCOPE_ORDER = ["DIOCESE", "DOYENNE", "PAROISSE", "SECTION", "EQUIPE", "SELF"] as const;
type HierarchicalScope = (typeof SCOPE_ORDER)[number];

function scopeRank(scope: string): number {
  const idx = SCOPE_ORDER.indexOf(scope as HierarchicalScope);
  return idx === -1 ? Infinity : idx;
}

export interface AuthorizeInput {
  resourceCode: string;
  actionCode: string;
  /** Scope concret de la ressource ciblée par la requête. */
  targetScopeType: string;
  targetScopeId: string;
}

export interface AuthorizeResult {
  allowed: boolean;
  reason: string;
}

/// Implémente l'algorithme du Volume 11 §11.8, étapes 1 à 8.
export async function authorize(input: AuthorizeInput): Promise<AuthorizeResult> {
  const session = await getSession();
  if (!session) {
    return { allowed: false, reason: "NO_SESSION" };
  }

  const result = await evaluate(session, input);

  if (await isSensitiveResource(input.resourceCode)) {
    await prisma.auditLog.create({
      data: {
        accountId: session.accountId,
        action: `${input.actionCode}:${input.resourceCode}`,
        entityType: input.resourceCode,
        entityId: input.targetScopeId,
        after: { allowed: result.allowed, reason: result.reason },
      },
    });
  }

  return result;
}

async function evaluate(session: SessionPayload, input: AuthorizeInput): Promise<AuthorizeResult> {
  // Étape 3a/3b : permissions via rôle, puis via fonction (mandat actif).
  const candidates = await prisma.permission.findMany({
    where: {
      resource: { code: input.resourceCode },
      action: { code: input.actionCode },
      OR: [
        { role: { code: { in: session.roles.map((r) => r.roleCode) } } },
        { fonction: { code: { in: session.mandates.map((m) => m.fonctionCode) } } },
      ],
    },
    include: { role: true, fonction: true },
  });

  if (candidates.length === 0) {
    return { allowed: false, reason: "NO_PERMISSION" }; // étape 3c → 403
  }

  for (const permission of candidates) {
    // Étape 4 : résoudre le scope concret autorisé pour CETTE permission.
    const grantedScopes = permission.roleId
      ? session.roles.filter((r) => r.roleCode === permission.role?.code)
      : session.mandates
          .filter((m) => m.fonctionCode === permission.fonction?.code)
          .map((m) => ({ roleCode: m.fonctionCode, scopeType: m.scopeType, scopeId: m.scopeId }));

    for (const granted of grantedScopes) {
      // Étape 5 : la ressource ciblée appartient-elle au sous-arbre du scope accordé ?
      const within = await isWithinScope(
        { scopeType: granted.scopeType, scopeId: granted.scopeId },
        { scopeType: input.targetScopeType, scopeId: input.targetScopeId },
        session,
      );
      if (!within) continue;

      // Étape 6 : condition complémentaire (ex. accès SELF uniquement sur soi-même).
      const condition = permission.condition as { selfOnly?: boolean } | null;
      if (condition?.selfOnly && input.targetScopeId !== session.personId) continue;

      return { allowed: true, reason: "GRANTED" }; // étape 7
    }
  }

  return { allowed: false, reason: "OUT_OF_SCOPE" };
}

/// Héritage descendant uniquement (Volume 11 §11.4) : un scope DOYENNE couvre
/// toutes les PAROISSE/SECTION/EQUIPE qu'il contient, jamais l'inverse.
async function isWithinScope(
  granted: { scopeType: string; scopeId: string | null },
  target: { scopeType: string; scopeId: string },
  session: SessionPayload,
): Promise<boolean> {
  if (granted.scopeType === "SELF") {
    return target.scopeType === "SELF" && target.scopeId === session.personId;
  }
  if (granted.scopeType === "ACTIVITY") {
    return target.scopeType === "ACTIVITY" && target.scopeId === granted.scopeId;
  }
  if (granted.scopeType === "DIOCESE") {
    return true; // V1 mono-diocèse : DIOCESE couvre tout le reste par construction
  }
  if (!granted.scopeId) return false;
  if (scopeRank(granted.scopeType) > scopeRank(target.scopeType)) {
    return false; // le scope accordé est plus étroit que la cible : jamais autorisé
  }
  if (granted.scopeType === target.scopeType) {
    return granted.scopeId === target.scopeId;
  }

  // Remonte la cible jusqu'au niveau du scope accordé via les FK réelles.
  switch (target.scopeType) {
    case "PAROISSE": {
      const paroisse = await prisma.paroisse.findUnique({ where: { id: target.scopeId } });
      if (!paroisse) return false;
      if (granted.scopeType === "DOYENNE") return paroisse.doyenneId === granted.scopeId;
      return false;
    }
    case "SECTION": {
      const section = await prisma.section.findUnique({ where: { id: target.scopeId }, include: { paroisse: true } });
      if (!section) return false;
      if (granted.scopeType === "PAROISSE") return section.paroisseId === granted.scopeId;
      if (granted.scopeType === "DOYENNE") return section.paroisse.doyenneId === granted.scopeId;
      return false;
    }
    case "EQUIPE": {
      const team = await prisma.team.findUnique({
        where: { id: target.scopeId },
        include: { section: { include: { paroisse: true } } },
      });
      if (!team) return false;
      if (granted.scopeType === "SECTION") return team.sectionId === granted.scopeId;
      if (granted.scopeType === "PAROISSE") return team.section.paroisseId === granted.scopeId;
      if (granted.scopeType === "DOYENNE") return team.section.paroisse.doyenneId === granted.scopeId;
      return false;
    }
    default:
      return false;
  }
}

const SENSITIVE_RESOURCES = new Set([
  "UTILISATEUR", "FINANCE", "AUDIT", "FICHE_SANITAIRE", "CARTE_MEMBRE",
  "ACTIVITE", "PRESENCE", "DEMANDE", "ATTESTATION",
]);

async function isSensitiveResource(code: string): Promise<boolean> {
  return SENSITIVE_RESOURCES.has(code);
}
