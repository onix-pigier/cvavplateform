# CV-AV Platform — point de reprise

**État observé le 19 octobre 2026** · Diocèse de Daloa · V1 mono-diocèse

Ce document sert à reprendre le projet sans repartir de zéro. Il décrit le
dépôt local tel qu’il est aujourd’hui. Il ne prouve pas que ces changements
sont déployés ni que les migrations et les données ont été appliquées à une
base.

## En bref

Le projet possède déjà un portail public, une authentification à comptes
individuels, des espaces admin scoppés, un registre des personnes, une
pré-inscription militante et plusieurs parcours métier. La conception est
plus avancée que la validation opérationnelle : le principal manque n’est
pas d’ajouter des écrans, mais de terminer et tester les parcours de bout en
bout contre une vraie base locale.

À la dernière vérification, PostgreSQL ne répondait pas sur
`localhost:5432`. On ne peut donc pas confirmer quelles migrations sont
appliquées, lancer le seed, ni vérifier que les données affichées dans le
navigateur correspondent au seed actuel.

Vérifications locales effectuées pour ce point de reprise :

- `npm run typecheck` : réussi.
- `npm test` : réussi (tests unitaires, sécurité, régression et fuzz).
- `npx prisma validate` : réussi.
- `git diff --check` : réussi.
- PostgreSQL : indisponible sur `localhost:5432`.
- Tests d’intégration, parcours navigateur et build de production : non
  vérifiés dans cette passe.

## Cap produit à conserver

La V1 vise un seul diocèse : Diocèse de Daloa → doyennés → paroisses →
sections/équipes. La V2 multi-diocèse est hors du chantier immédiat.

Règle métier centrale :

```text
Personne → Appartenance → Fonction / mandat → Compte → Rôle + périmètre
```

Une personne peut exister sans compte. Une fonction d’organisation n’est
pas un rôle applicatif. Les grades de militant, les qualifications de chef
et les accès au logiciel restent des concepts distincts. Les droits doivent
être limités par rôle et périmètre, et vérifiés côté serveur.

Répartition d’autorité retenue : le diocèse supervise et arbitre, le doyenné
coordonne, la paroisse administre, le chef encadre son équipe, le militant
consulte et participe. Les interfaces publiques ne doivent pas inventer de
personnes, photos, événements ou coordonnées : une donnée absente doit être
signalée comme à documenter.

Les règles visuelles et d’implémentation sont dans
[`DESIGN_GUARDRAILS.md`](DESIGN_GUARDRAILS.md) et
[`../UI_UX_ENGINEERING.md`](../UI_UX_ENGINEERING.md). Clarté,
accessibilité, cohérence, états de chargement/erreur/vide et responsive
priment sur les effets décoratifs.

## Ce qui est déjà présent dans le dépôt

### Portail public

- Landing page avec sections de présentation, annuaire et carrousel.
- Annuaire des doyennés et paroisses, filtres/recherche, fiches de doyenné et
  de paroisse.
- Fiches paroissiales avec emplacement de couverture, équipes et cadres
  photo; photos publiques associées dans `lib/portal/public-photos.ts`.
- Photos du hero, carrousel, login, logo, doyennés et paroisses déposées sous
  `public/assets/public/`.
- Pages de confidentialité/CGU, contact, newsletter et vérification
  d’attestation.

Le contenu et les images statiques sont gérés par l’équipe technique; un
outil d’upload média n’est pas confirmé comme livré.

### Connexion et espaces

- Connexion par identifiant et mot de passe, erreurs de formulaire et lien
  de récupération d’accès.
- Session JWT en cookie `HttpOnly`, `SameSite=Lax`, `Secure` en production;
  le compte est relu côté serveur et `sessionVersion` est vérifié.
- Routes de logout, espace personnel et tableaux de bord différents selon
  le rôle/périmètre.
- La récupération du mot de passe est une demande d’assistance suivie par
  un administrateur; ce n’est pas encore un flux autonome de réinitialisation.

### Administration et métier

- Shell de navigation admin scoppé et données territoriales dans le
  contexte des pages.
- Registre **Personnes** avec recherche et filtres (appartenance, fonction,
  grade, qualification, accès, statut), création et fiche détaillée.
- Registre des militants et écrans de création/détail historiques encore
  présents.
- File d’approbation des pré-inscriptions; la règle visée est de créer le
  compte militant après approbation, pas à la soumission publique.
- Écrans de demandes d’accès, demandes/attestations, organisation,
  activités, statistiques, audit et listes d’administration.
- Création d’activité, détail et feuille de présence/composant
  `AttendanceSheet` présents dans l’arbre; le parcours terrain doit encore
  être éprouvé réellement sur mobile et contre la base.

### Modèle et infrastructure applicative

- Prisma inclut notamment `Person`, `Membership`, `Mandate`,
  `TeamLeadership`, `Account`, rôles, scopes, pré-inscriptions,
  demandes d’accès et `sessionVersion`.
- Treize répertoires de migrations se trouvent dans `prisma/migrations/`,
  dont les changements du registre, mandats, intégrité, sessions et adresse.
- Les migrations ne sont pas confirmées comme appliquées : la base locale
  n’était pas joignable pendant la vérification.
- Les 362 maquettes `components/ecrans/` sont une réserve de conception,
  pas 362 fonctionnalités livrées. Les pages actives doivent réutiliser
  seulement les écrans et composants nécessaires au périmètre V1.

## État de travail et prudence

Le worktree est très chargé : **49 fichiers suivis modifiés**, ainsi que de
nombreux fichiers/répertoires non suivis (pages, composants, migrations,
assets, tests et documents). Il n’y a pas de commit propre permettant
d’attribuer chaque changement ou de distinguer à coup sûr les changements
utilisateur des changements antérieurs de l’agent.

Ne pas lancer `git reset`, `git clean`, ni écraser/régénérer globalement les
fichiers Prisma sans examiner les changements. Les fichiers générés Prisma
sont eux-mêmes modifiés dans l’arbre.

## À reprendre en premier

### P0 — Base, migrations et seed

1. Démarrer PostgreSQL et vérifier `DATABASE_URL` sans publier sa valeur.
2. Exécuter `npx prisma migrate status`; lire les migrations en attente
   avant de les appliquer. Ne pas réinitialiser la base.
3. Une fois les migrations à jour, exécuter `npm run prisma:seed` et
   contrôler les nombres de doyennés/paroisses, notamment Jean-Paul Benoît.
4. Le seed utilise Bazra et Bozi comme villes; elles ont été ajoutées à sa
   liste car une ville manquante interrompait l’exécution avant la fin.
   Leurs rattachements régionaux sont signalés dans le seed comme restant à
   recouper.
5. Le seed met à jour les enregistrements identifiés par ID. Pour les
   paroisses renommées, des IDs historiques sont gardés afin d’éviter une
   duplication; vérifier que ces changements de libellé sont bien des
   renommages voulus avant d’appliquer les données à une base contenant déjà
   d’anciennes entrées.

### P0/P1 — Trois parcours complets

1. **Pré-inscription → examen/arbitrage → approbation → compte militant →
   première connexion.** Tester doublons, refus, notifications, scope,
   secret initial et changement de secret.
2. **Activité → appel de l’équipe → enregistrement/modification des
   présences → audit.** Tester les droits du chef et une largeur mobile de
   360 px.
3. **Demande d’attestation → validation → PDF/numéro/QR → vérification →
   révocation.** Tester les droits, l’audit et les erreurs de bout en bout.

Les tests unitaires actuels ne remplacent pas ces preuves navigateur/base.
Les suites integration/functional/contract existent, mais n’ont pas été
exécutées dans cette vérification sans environnement DB/base URL.

### P1 — Cohérence personne, autorité et accès

- Confirmer que création d’une personne, appartenance, mandat et compte
  restent des opérations explicites et auditées.
- Compléter/valider les modifications d’état civil, appartenance, grades,
  qualifications, mandats et accès avec les autorités définies.
- Terminer l’attribution d’accès aux responsables par un rôle supérieur;
  pas de compte partagé ni d’élévation de rôle hors périmètre.
- Vérifier la navigation par permission et les vues SUPER_ADMIN,
  ADMIN_DOYENNE, ADMIN_PAROISSE, CHEF et MILITANT avec des utilisateurs
  de test distincts.

### P1/P2 — Finitions fonctionnelles et exploitation

- Distinguer clairement ce qui est en lecture seule de ce qui est modifiable
  dans organisation, personnes, activités et demandes.
- Finaliser le PDF/QR et le workflow de récupération d’accès.
- Décider pour cotisations, bibliothèque documentaire, notifications et
  stockage des médias : terminer dans la V1 ou les marquer explicitement
  hors périmètre.
- Avant production : rate limiting multi-instance, politique CSP, stratégie
  de sauvegarde/restauration testée, supervision/alertes, configuration des
  fournisseurs d’envoi et de stockage, revue juridique.
- Remplacer les assets manquants seulement par du contenu autorisé et
  vérifié; tester réellement l’affichage des photos et les breakpoints.

## Documentation à remettre d’aplomb

- [`AUDIT_PROJET_V1_2026-10-07.md`](AUDIT_PROJET_V1_2026-10-07.md) est un
  ancien instantané, pas l’état actuel. Certaines conclusions sont déjà
  dépassées, par exemple sur le registre des personnes et le seed du
  doyenné Jean-Paul Benoît.
- `README.md` pointe vers plusieurs documents de cadrage absents du dossier
  `docs/` actuel (`PROJECT_SCOPE.md`, `V1_MODULE_MATRIX.md`,
  `SCREEN_INVENTORY_V1.md`, `PRIVACY_AND_ACCESS.md`, `MEDIA_STORAGE.md`,
  `TEST_PLAN_V1.md`). Les retrouver ou remettre les références en cohérence.
- Le README décrit certains modules comme « déjà câblés » tout en
  précisant ensuite qu’ils peuvent être incomplets : clarifier pour éviter
  de prendre une route ou un modèle pour un workflow achevé.
- Ce point de reprise complète l’ancien audit; il ne remplace pas le
  référentiel métier et ne certifie pas la conformité de production.

## Commandes de reprise

```bash
# depuis cvav-platform/
pg_isready -h localhost -p 5432
npx prisma migrate status
npx prisma validate
npm run prisma:seed
npm run typecheck
npm test
```

Ne lancer le seed qu’après avoir confirmé la base ciblée et vérifié les
migrations en attente. Ne jamais coller ici le contenu du fichier `.env`.

## Décision pour le prochain échange

Le prochain chantier devrait commencer par la base/seed et un état fiable
des données, puis choisir **un** parcours métier de bout en bout. Éviter
d’ajouter de nouveaux modules ou de recopier en bloc les maquettes Stitch
avant d’avoir validé ce parcours.
