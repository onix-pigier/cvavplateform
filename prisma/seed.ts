/**
 * Seed CVAV Platform — V1 strictement mono-diocèse (Daloa).
 *
 * Données organisationnelles sourcées de "Référentiel — Diocèse de Daloa &
 * CV-AV" (octobre 2026). Chaque Paroisse porte son niveau de confiance réel
 * (CONFIRMED_CURRENT / OFFICIAL_HISTORICAL / HISTORICAL_TO_VERIFY /
 * TO_DOCUMENT) — on ne publie jamais une donnée non vérifiée comme actuelle
 * (règle explicite du référentiel source, §8).
 *
 * Régions des villes : Daloa/Vavoua/Issia/Zoukougbeu/Bahoulifla/Dania/
 * Dananon/Pelezi/Saïoua/Boguédia/Iboguhé/Guessabo → Haut-Sassandra (vérifié).
 * Sinfra/Gadouan/Kononfla/Bouaflé/Gonaté/Bonon/Zuénoula/Gohitafla/Sucrivoire
 * → Marahoué (vérifié pour les chefs-lieux de département ; les villages
 * rattachés sont déduits par proximité de département, non vérifiés
 * individuellement — à recouper si besoin).
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, DataConfidence, GradeCategory } from "../lib/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const HS = "Haut-Sassandra";
const MA = "Marahoué";

async function main() {
  // ==========================================================================
  // ORGANISATION — Diocèse de Daloa (V1 : unique instance)
  // ==========================================================================
  const diocese = await prisma.diocese.upsert({
    where: { id: "diocese-daloa" },
    update: {},
    create: { id: "diocese-daloa", name: "Diocèse de Daloa" },
  });

  const villes = [
    ["Daloa", HS], ["Gboguhé", HS], ["Vavoua", HS], ["Bahoulifla", HS],
    ["Dania", HS], ["Dananon", HS], ["Pelezi", HS], ["Issia", HS],
    ["Saïoua", HS], ["Boguédia", HS], ["Iboguhé", HS], ["Guessabo", HS],
    ["Zoukougbeu", HS], ["Sinfra", MA], ["Gadouan", MA], ["Kononfla", MA],
    ["Bouaflé", MA], ["Gonaté", MA], ["Bonon", MA], ["Zuénoula", MA],
    ["Gohitafla", MA], ["Sucrivoire", MA],
  ] as const;

  const villeByName = new Map<string, string>();
  for (const [name, region] of villes) {
    const v = await prisma.ville.upsert({
      where: { id: `ville-${slug(name)}` },
      update: {},
      create: { id: `ville-${slug(name)}`, name, region },
    });
    villeByName.set(name, v.id);
  }

  // Les 9 doyennés confirmés pour le référentiel 2026 (composition paroissiale
  // encore en consolidation pour #7, #8, #9 — cf. doc source §10).
  const doyennesData = [
    "Doyenné Mgr Alphonse Kirmann",
    "Doyenné Louis Blé",
    "Doyenné Père Jean Meynier",
    "Doyenné Père Paul Pageaud",
    "Doyenné Père Alfred Dufour",
    "Doyenné Mgr Pierre-Marie Coty",
    "Doyenné Jean-Paul Benoît",
    "Doyenné Mgr Maurice Konan Kouassi",
    "Doyenné Mgr Pierre Rouanet",
  ];

  const doyenneByName = new Map<string, string>();
  for (const name of doyennesData) {
    const d = await prisma.doyenne.upsert({
      where: { id: `doyenne-${slug(name)}` },
      update: {},
      create: { id: `doyenne-${slug(name)}`, name, dioceseId: diocese.id },
    });
    doyenneByName.set(name, d.id);
  }

  interface ParoisseSeed {
    name: string;
    ville: string;
    confidence: DataConfidence;
    source: string;
    sourceDate?: string;
  }

  const TABLEAU_2020_2021 = "Document diocésain Affectations, Mutations et Nominations 2020-2021 (diocesedaloa.net)";
  const CVAV_FORMATION_2026 = "Document de mandat / formation CV-AV, avril 2026 (Doyenné Kirmann)";

  const paroissesParDoyenne: Record<string, ParoisseSeed[]> = {
    "Doyenné Mgr Alphonse Kirmann": [
      { name: "Cathédrale Christ-Roi", ville: "Daloa", confidence: "CONFIRMED_CURRENT", source: CVAV_FORMATION_2026, sourceDate: "2026-04-02" },
      { name: "Saint-Marc des Belles-Côtes", ville: "Daloa", confidence: "CONFIRMED_CURRENT", source: CVAV_FORMATION_2026, sourceDate: "2026-04-02" },
      { name: "Saint-Jean-Paul II Huberson", ville: "Daloa", confidence: "CONFIRMED_CURRENT", source: CVAV_FORMATION_2026, sourceDate: "2026-04-02" },
      { name: "Saint-Joseph de Belleville", ville: "Daloa", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Bernard", ville: "Gboguhé", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      // "Saint-Joseph Charpentier" cité comme section CV-AV 2026 mais non
      // assimilé automatiquement à Saint-Joseph de Belleville (ambiguïté
      // explicite du document source) : volontairement NON créé ici. À
      // trancher par l'Admin Paroisse une fois la source recoupée.
    ],
    "Doyenné Louis Blé": [
      { name: "Sainte-Hélène — Tazibouo II", ville: "Daloa", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Joseph Mukasa Labia", ville: "Daloa", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Sainte-Cécile — Orly II", ville: "Daloa", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Sainte-Thérèse — Abattoir II", ville: "Daloa", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
    ],
    "Doyenné Père Jean Meynier": [
      { name: "Sainte-Bernadette", ville: "Bahoulifla", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Cœur Immaculé de Marie", ville: "Vavoua", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Notre-Dame de la Tendresse", ville: "Dania", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Jean-Baptiste", ville: "Dananon", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Sacré-Cœur", ville: "Vavoua", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Étienne", ville: "Pelezi", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
    ],
    "Doyenné Père Paul Pageaud": [
      { name: "Notre-Dame de Lourdes", ville: "Issia", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Kizito", ville: "Issia", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Jacques", ville: "Saïoua", confidence: "CONFIRMED_CURRENT", source: "Activités diocésaines récentes confirmant l'existence pastorale de Saint-Jacques de Saïoua" },
      { name: "Saint-Pierre-Apôtre", ville: "Boguédia", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
    ],
    "Doyenné Père Alfred Dufour": [
      { name: "Saint-Jean-Marie Vianney", ville: "Iboguhé", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Notre-Dame de l'Immaculée Conception", ville: "Guessabo", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-François-Xavier", ville: "Zoukougbeu", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
    ],
    "Doyenné Mgr Pierre-Marie Coty": [
      { name: "Saint-Michel-Archange", ville: "Sinfra", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Maurice", ville: "Gadouan", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Notre-Dame de l'Assomption", ville: "Kononfla", confidence: "OFFICIAL_HISTORICAL", source: TABLEAU_2020_2021 },
      { name: "Saint-Benoît (quasi-paroisse en fondation)", ville: "Sinfra", confidence: "HISTORICAL_TO_VERIFY", source: TABLEAU_2020_2021 },
    ],
    "Doyenné Jean-Paul Benoît": [
      // 🔴 Aucune paroisse suffisamment sourcée (doc source §4.7).
      // Doyenné créé vide : à compléter via l'Admin dès qu'une source fiable existe.
    ],
    "Doyenné Mgr Maurice Konan Kouassi": [
      { name: "Saint-Jean", ville: "Gonaté", confidence: "HISTORICAL_TO_VERIFY", source: "Données historiques liées au secteur Mgr Maurice Konan Kouassi — à recouper" },
      { name: "Saint-François d'Assise", ville: "Bonon", confidence: "HISTORICAL_TO_VERIFY", source: "Données historiques liées au secteur Mgr Maurice Konan Kouassi — à recouper" },
      { name: "Saint-Augustin", ville: "Bouaflé", confidence: "HISTORICAL_TO_VERIFY", source: "Données historiques liées au secteur Mgr Maurice Konan Kouassi — à recouper" },
      { name: "Divine Miséricorde", ville: "Bouaflé", confidence: "HISTORICAL_TO_VERIFY", source: "Données historiques liées au secteur Mgr Maurice Konan Kouassi — à recouper" },
    ],
    "Doyenné Mgr Pierre Rouanet": [
      { name: "Saint-Matthieu", ville: "Sucrivoire", confidence: "HISTORICAL_TO_VERIFY", source: "Ancien secteur Mgr Rouanet, annuaire diocésain — rattachement 2026 à confirmer" },
      { name: "Sainte-Marie", ville: "Zuénoula", confidence: "HISTORICAL_TO_VERIFY", source: "Ancien secteur Mgr Rouanet, annuaire diocésain — rattachement 2026 à confirmer" },
      { name: "Saint-Paul", ville: "Gohitafla", confidence: "HISTORICAL_TO_VERIFY", source: "Ancien secteur Mgr Rouanet, annuaire diocésain — rattachement 2026 à confirmer" },
    ],
  };

  for (const [doyenneName, paroisses] of Object.entries(paroissesParDoyenne)) {
    const doyenneId = doyenneByName.get(doyenneName)!;
    for (const p of paroisses) {
      const villeId = villeByName.get(p.ville);
      if (!villeId) throw new Error(`Ville inconnue: ${p.ville}`);
      await prisma.paroisse.upsert({
        where: { id: `paroisse-${slug(doyenneName)}-${slug(p.name)}` },
        update: {},
        create: {
          id: `paroisse-${slug(doyenneName)}-${slug(p.name)}`,
          name: p.name,
          doyenneId,
          villeId,
          confidence: p.confidence,
          source: p.source,
          sourceDate: p.sourceDate ? new Date(p.sourceDate) : null,
        },
      });
    }
  }

  console.log(`Organisation : 1 diocèse, ${doyennesData.length} doyennés, ${villes.length} villes, ${
    Object.values(paroissesParDoyenne).reduce((n, arr) => n + arr.length, 0)
  } paroisses.`);

  // ==========================================================================
  // RBAC — Rôles (Volume 00 addendum) et Fonctions (D-079)
  // ==========================================================================
  const roles = [
    ["SUPER_ADMIN", "DIOCESE"],
    ["ADMIN_DOYENNE", "DOYENNE"],
    ["ADMIN_PAROISSE", "PAROISSE"],
    ["CHEF", "EQUIPE"],
    ["MILITANT", "SELF"],
    ["AUMONIER_DIOCESE", "DIOCESE"],
    ["AUMONIER_DOYENNE", "DOYENNE"],
    ["AUMONIER_PAROISSE", "PAROISSE"],
    ["PARRAIN_MARRAINE", "SECTION"],
  ] as const;
  for (const [code, scopeType] of roles) {
    await prisma.role.upsert({ where: { code }, update: {}, create: { code, scopeType } });
  }

  const fonctions = [
    ["TRESORIER", "Trésorier", true],
    ["SECRETAIRE", "Secrétaire", true],
    ["CHEF_SECTION", "Chef de Section", true],
    ["AUMONIER", "Aumônier", true],
    ["SOEUR_CONSEILLERE", "Sœur conseillère", false], // D-079 : pas de droit de vote
    ["REFERENT_SECURITE", "Référent Sécurité", false], // D-072 : fonction consultative bornée à une activité
    ["PRESIDENT", "Président", true],
    ["VICE_PRESIDENT", "Vice-Président", true],
  ] as const;
  for (const [code, label, votingRight] of fonctions) {
    await prisma.fonction.upsert({ where: { code }, update: {}, create: { code, label, votingRight } });
  }

  // ==========================================================================
  // GRADES — Benjamin/Cadet/Aîné (militant), Meneur (D-076)
  // Âges par défaut uniquement (D-081), 100% reconfigurables sans code.
  // ==========================================================================
  const grades: { code: string; name: string; category: GradeCategory; order: number; conditions: object }[] = [
    { code: "BENJAMIN", name: "Benjamin", category: "MILITANT", order: 1, conditions: { ageMin: 5, ageMax: 8 } },
    { code: "CADET", name: "Cadet", category: "MILITANT", order: 2, conditions: { ageMin: 9, ageMax: 11 } },
    { code: "AINE", name: "Aîné", category: "MILITANT", order: 3, conditions: { ageMin: 12, ageMax: 15 } },
    { code: "MENEUR", name: "Meneur", category: "MENEUR", order: 4, conditions: { ageMin: 15, selectionParPairs: true } },
  ];
  for (const g of grades) {
    await prisma.grade.upsert({ where: { code: g.code }, update: {}, create: g });
  }
  // Rappel : ChefQualificationCode (AA → AC → AP → APHG, D-075) est un enum
  // Prisma natif, pas un référentiel administrable — car la séquence est
  // statutaire (CVAV-CI) et non propre à chaque diocèse, contrairement aux
  // grades militants.

  // ==========================================================================
  // ACTIVITÉS & DEMANDES — référentiels (Volume 04 §4.4 / §4.6)
  // ==========================================================================
  const activityTypes = [
    "Réunion", "Camp", "Formation", "Retraite", "Sortie",
    "Action sociale", "Compétition", "Animation", "Pèlerinage", "Cérémonie",
  ];
  for (const name of activityTypes) {
    await prisma.activityType.upsert({
      where: { name },
      update: {},
      create: { name, requiresValidation: ["Camp", "Pèlerinage", "Cérémonie"].includes(name) },
    });
  }

  const requestTypes: { name: string; level: "PAROISSE" | "DOYENNE" | "DIOCESE" }[] = [
    { name: "Attestation de grade", level: "PAROISSE" },
    { name: "Attestation de réussite", level: "PAROISSE" },
    { name: "Attestation de fonction", level: "DOYENNE" },
    { name: "Demande de cérémonie", level: "PAROISSE" },
    { name: "Demande de nomination", level: "DOYENNE" },
    { name: "Demande exceptionnelle", level: "DIOCESE" },
  ];
  for (const rt of requestTypes) {
    await prisma.requestType.upsert({
      where: { name: rt.name },
      update: {},
      create: { name: rt.name, requiredValidationLevel: rt.level, generatesCertificate: rt.name.startsWith("Attestation") },
    });
  }

  // ==========================================================================
  // MOTEUR RBAC — Ressources, Actions, Permissions de base (Volume 11 §11.5)
  // Sous-ensemble de démarrage ; le reste de la matrice s'ajoute en
  // administration, jamais en dur dans le code.
  // ==========================================================================
  const resources = ["UTILISATEUR", "ORGANISATION", "ACTIVITE", "PRESENCE", "COTISATION", "DEMANDE", "ATTESTATION", "AUDIT", "FICHE_SANITAIRE", "CARTE_MEMBRE"];
  for (const code of resources) {
    await prisma.resource.upsert({ where: { code }, update: {}, create: { code, label: code } });
  }
  const actions = ["CREATE", "READ", "UPDATE", "VALIDATE", "REJECT", "ARCHIVE", "EXPORT", "ASSIGN", "SUSPEND", "REVOKE"];
  for (const code of actions) {
    await prisma.action.upsert({ where: { code }, update: {}, create: { code, label: code } });
  }

  const resourceId = async (code: string) => (await prisma.resource.findUniqueOrThrow({ where: { code } })).id;
  const actionId = async (code: string) => (await prisma.action.findUniqueOrThrow({ where: { code } })).id;
  const roleId = async (code: string) => (await prisma.role.findUniqueOrThrow({ where: { code } })).id;
  const fonctionId = async (code: string) => (await prisma.fonction.findUniqueOrThrow({ where: { code } })).id;

  const basePermissions: { role?: string; fonction?: string; resource: string; action: string; maxScopeType: "DIOCESE" | "DOYENNE" | "PAROISSE" | "SECTION" | "EQUIPE" | "SELF" }[] = [
    { role: "SUPER_ADMIN", resource: "ORGANISATION", action: "READ", maxScopeType: "DIOCESE" },
    { role: "SUPER_ADMIN", resource: "AUDIT", action: "READ", maxScopeType: "DIOCESE" },
    { role: "SUPER_ADMIN", resource: "ACTIVITE", action: "CREATE", maxScopeType: "DIOCESE" },
    { role: "SUPER_ADMIN", resource: "ACTIVITE", action: "READ", maxScopeType: "DIOCESE" },
    { role: "ADMIN_DOYENNE", resource: "ACTIVITE", action: "CREATE", maxScopeType: "DOYENNE" },
    { role: "ADMIN_DOYENNE", resource: "ACTIVITE", action: "READ", maxScopeType: "DOYENNE" },
    { role: "ADMIN_PAROISSE", resource: "ACTIVITE", action: "CREATE", maxScopeType: "PAROISSE" },
    { role: "ADMIN_PAROISSE", resource: "ACTIVITE", action: "READ", maxScopeType: "PAROISSE" },
    { role: "CHEF", resource: "ACTIVITE", action: "CREATE", maxScopeType: "EQUIPE" },
    { role: "CHEF", resource: "ACTIVITE", action: "READ", maxScopeType: "EQUIPE" },
    { role: "ADMIN_DOYENNE", resource: "ORGANISATION", action: "READ", maxScopeType: "DOYENNE" },
    { role: "ADMIN_DOYENNE", resource: "AUDIT", action: "READ", maxScopeType: "DOYENNE" },
    { role: "ADMIN_PAROISSE", resource: "ORGANISATION", action: "READ", maxScopeType: "PAROISSE" },
    { role: "ADMIN_PAROISSE", resource: "UTILISATEUR", action: "CREATE", maxScopeType: "PAROISSE" },
    { role: "ADMIN_PAROISSE", resource: "UTILISATEUR", action: "SUSPEND", maxScopeType: "PAROISSE" },
    { role: "ADMIN_PAROISSE", resource: "DEMANDE", action: "READ", maxScopeType: "PAROISSE" },
    { role: "ADMIN_PAROISSE", resource: "DEMANDE", action: "VALIDATE", maxScopeType: "PAROISSE" },
    { role: "ADMIN_PAROISSE", resource: "DEMANDE", action: "REJECT", maxScopeType: "PAROISSE" },
    { role: "ADMIN_DOYENNE", resource: "DEMANDE", action: "READ", maxScopeType: "DOYENNE" },
    { role: "ADMIN_DOYENNE", resource: "DEMANDE", action: "VALIDATE", maxScopeType: "DOYENNE" },
    { role: "ADMIN_DOYENNE", resource: "DEMANDE", action: "REJECT", maxScopeType: "DOYENNE" },
    { role: "SUPER_ADMIN", resource: "DEMANDE", action: "READ", maxScopeType: "DIOCESE" },
    { role: "SUPER_ADMIN", resource: "DEMANDE", action: "VALIDATE", maxScopeType: "DIOCESE" },
    { role: "SUPER_ADMIN", resource: "DEMANDE", action: "REJECT", maxScopeType: "DIOCESE" },
    { role: "CHEF", resource: "DEMANDE", action: "CREATE", maxScopeType: "EQUIPE" },
    { role: "MILITANT", resource: "DEMANDE", action: "READ", maxScopeType: "SELF" },
    { role: "MILITANT", resource: "ATTESTATION", action: "READ", maxScopeType: "SELF" },
    { role: "CHEF", resource: "PRESENCE", action: "CREATE", maxScopeType: "EQUIPE" },
    { role: "CHEF", resource: "DEMANDE", action: "CREATE", maxScopeType: "EQUIPE" },
    { role: "MILITANT", resource: "UTILISATEUR", action: "READ", maxScopeType: "SELF" },
    { role: "MILITANT", resource: "COTISATION", action: "READ", maxScopeType: "SELF" },
    { fonction: "TRESORIER", resource: "COTISATION", action: "CREATE", maxScopeType: "PAROISSE" },
    { fonction: "TRESORIER", resource: "COTISATION", action: "READ", maxScopeType: "PAROISSE" },
    { fonction: "REFERENT_SECURITE", resource: "FICHE_SANITAIRE", action: "READ", maxScopeType: "SECTION" }, // scope réel = ACTIVITY, résolu via Mandat
  ];

  for (const p of basePermissions) {
    const roleRef = p.role ? await roleId(p.role) : null;
    const fonctionRef = p.fonction ? await fonctionId(p.fonction) : null;
    const resourceRef = await resourceId(p.resource);
    const actionRef = await actionId(p.action);
    const data = {
      roleId: roleRef,
      fonctionId: fonctionRef,
      resourceId: resourceRef,
      actionId: actionRef,
      maxScopeType: p.maxScopeType,
    } as const;
    const existing = await prisma.permission.findFirst({ where: data });
    if (existing) await prisma.permission.update({ where: { id: existing.id }, data });
    else await prisma.permission.create({ data });
  }

  console.log(`RBAC : ${roles.length} rôles, ${fonctions.length} fonctions, ${basePermissions.length} permissions de base.`);
  console.log("Seed terminé.");
}

function slug(s: string): string {
  return s
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
