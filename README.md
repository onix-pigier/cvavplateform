# CVAV Platform — Diocèse de Daloa

## Périmètre V1

La V1 est strictement mono-diocèse : Diocèse de Daloa → 9 doyennés → paroisses. Le parcours actif est centré sur le référentiel, l’annuaire public et l'administration bornée par rôle. Le cadrage détaillé, les statuts de fiabilité et les exclusions sont dans [`../docs/PROJECT_SCOPE.md`](../docs/PROJECT_SCOPE.md).

Les écrans Stitch et modules spécialisés conservés dans le dépôt constituent des archives de conception tant qu'ils ne sont pas validés dans ce périmètre. Ils ne doivent pas être interprétés comme des fonctionnalités V1 disponibles.

Système d'information diocésain du mouvement Cœurs Vaillants – Âmes Vaillantes
— périmètre V1 strictement mono-diocèse (Daloa).

Ce dépôt porte une V1 en construction : le socle organisationnel, les profils
privés, les activités/présences, les demandes/attestations, les erreurs HTTP,
la sécurité de session, le référencement public et le stockage média hybride
sont déjà câblés. Les modules qui restent volontairement encadrés ou à
compléter sont listés dans [`../docs/V1_MODULE_MATRIX.md`](../docs/V1_MODULE_MATRIX.md)
et ne doivent pas être traités comme disponibles tant que leur API n'est pas
implémentée.

## Démarrage

```bash
cp .env.example .env   # renseigner DATABASE_URL (PostgreSQL) et SESSION_SECRET
npm install
npx prisma generate
npx prisma migrate dev --name init
npx tsx prisma/seed.ts
npm run dev
```

## Documentation de référence

Ce code s'appuie directement sur le dossier de conception produit :

| Document | Contenu |
| --- | --- |
| Volume 01-02 | Vision produit, cahier des charges fonctionnel |
| Volume 04 | Domain Model initial (DDD, 9 bounded contexts) |
| Volume 00 / 00-B / 00-C | Journal des décisions (ADR D-001 à D-081) |
| Volume 05 | 20 workflows métier détaillés |
| Carte Maîtresse des Processus | 24 workflows chaînés, ordre de construction en 8 paliers |
| Volume 11 | RBAC + Scope + moteur de permissions |
| TDD | Architecture technique et garde-fous de la V1 |
| Référentiel — Diocèse de Daloa & CV-AV | Données organisationnelles réelles (seed) |

Pour cette refonte, [`docs/PROJECT_SCOPE.md`](../docs/PROJECT_SCOPE.md) est le
cadrage actif de la V1. Les anciens volumes et les maquettes spécialisées sont
des archives de conception ; en cas de divergence, le périmètre V1 actif et
les sources de fiabilité du référentiel priment sur ces archives.

## Arborescence

```
app/
  (public)/        landing page
  (auth)/login/    connexion (WF-21)
  militant/        portail militant (authentifié, tout rôle)
  admin/           portails admin (Paroisse/Doyenné/Super/Aumônier)
  api/*/           API REST, un préfixe par bounded context (TDD §5)
modules/*/         logique métier : schema.ts (Zod) → service.ts (RBAC +
                    règles) → repository.ts (Prisma). organisation/ est la
                    règles) → repository.ts). Les modules incomplets restent
                    explicitement signalés dans la matrice V1.
lib/
  prisma.ts        client Prisma singleton
  auth.ts           hashage mot de passe, session JWT httpOnly
  rbac/authorize.ts  moteur RBAC + Scope (Volume 11 §11.8)
  http.ts           format de réponse API standard
middleware.ts       isolation des routes /militant vs /admin (D-015)
prisma/
  schema.prisma     modèle canonique et index métier
  seed.ts           référentiels RBAC/grades + données réelles Daloa
```

## Points de vigilance avant toute mise en production

- **Fiche sanitaire (`HealthProfile`)** : loi ivoirienne n°2013-450 sur les
  données à caractère personnel, régime renforcé pour les mineurs,
  supervision ARTCI. Avis juridique requis avant activation réelle
  (D-072, Volume 00-B).
- **Données organisationnelles** : les paroisses des doyennés 8 et 9
  (`HISTORICAL_TO_VERIFY`) et une partie du doyenné 6 n'ont pas été
  reconfirmées pour 2026 — ne pas les présenter comme définitives sur la
  landing page publique sans recoupement (champ `Paroisse.confidence`).
- **Doyenné Jean-Paul Benoît** : créé sans aucune paroisse (aucune source
  suffisamment fiable à ce jour) — à compléter via l'administration.
- Les migrations média et demandes doivent être appliquées sur la base de
  l'environnement avant démarrage. Le stockage S3/MinIO reste à configurer
  par environnement ; aucune vidéo ou photo n'est écrite dans PostgreSQL.
- La limitation distribuée, les métriques/alertes et les sauvegardes doivent
  être raccordées à l'infrastructure de production ; le code fournit déjà
  les points d'intégration et les traces structurées, mais ne simule pas une
  garantie d'exploitation qui n'est pas configurée.
