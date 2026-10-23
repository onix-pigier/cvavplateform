# Audit du projet CV-AV Platform — 7 octobre 2026

## Conclusion exécutive

**Appréciation globale : 5,5/10 pour l’état de préparation de la V1.** Le projet a un cadrage inhabituellement clair et plusieurs parcours réels déjà reliés à la base. Il n’est cependant pas encore une plateforme diocésaine complète ni une version prête à la production. La maturité du cadrage est supérieure à celle des fonctions livrées.

En l’état, je qualifierais le produit de **prototype fonctionnel avancé / pré-pilote**, pas de V1 opérationnelle complète. Les parcours publics, le compte individuel, la pré-inscription et une partie du traitement administratif sont concrets. Plusieurs modules importants sont encore des écrans de consultation, des API partielles, des modèles Prisma ou des maquettes Stitch, sans interface de gestion utilisable.

Cette note mesure la distance entre les besoins documentés et le fonctionnement vérifiable dans le dépôt. Elle ne prétend pas être un audit d’intrusion, une validation juridique ou un test visuel multi-navigateurs.

| Axe | Note | Motif |
|---|---:|---|
| Cadrage et frontières V1 | **8/10** | Le diocèse cible, les règles de fiabilité des données, la confidentialité et les exclusions sont explicités. |
| Portail public et annuaire | **6,8/10** | Bonne structure et données liées au référentiel, mais visuels et contenu réel manquants, référentiel 2026 incomplet. |
| Connexion et comptes individuels | **6,5/10** | Session sécurisée et espaces personnels présents; création/gestion des comptes de responsables et récupération finale incomplètes. |
| Administration et fonctions métier | **5/10** | Plusieurs listes, indicateurs et décisions existent; CRUD et opérations terrain restent lacunaires. |
| Sécurité applicative | **6/10** | Contrôles utiles présents, mais limitation distribuée, CSP et contrôles opérationnels de production non terminés. |
| Tests et preuve de fonctionnement | **4,5/10** | Tests locaux passants; intégration, parcours et contrats n’ont pas été exécutés contre un environnement configuré; charge en échec dans les essais fournis. |
| Exploitation / production | **3,5/10** | Stockage objet, sauvegardes restaurables, alertes et métriques distribuées ne sont pas raccordés. |

## Règles de notation des pages

- **8–10** : parcours largement livré et cohérent avec le périmètre.
- **6–7,9** : utilisable sur son cœur, mais il manque au moins une partie notable du parcours.
- **4–5,9** : réalisation partielle; la page existe mais ne permet pas encore de mener le métier de bout en bout.
- **0–3,9** : maquette, coquille ou écran qui ne devrait pas être présenté comme une fonction active.

Une note de page ne signifie pas que toutes les données réelles sont déjà disponibles. Les photos manquantes sont correctement signalées comme emplacements à remplir, mais cela reste un écart de livraison visuelle.

## Périmètre produit retenu

Le cadrage actif est **mono-diocèse** : Diocèse de Daloa → 9 doyennés → paroisses → sections/équipes. La V2 pourra ouvrir le multi-diocèse. Les comptes sont individuels; les grades (Benjamin, Cadet, Aîné, Meneur) ne sont pas des rôles d’administration; les qualifications AA/AC/AP/APHG ne remplacent pas le rôle `CHEF`. Les données privées et celles des mineurs ne doivent pas apparaître dans l’annuaire.

Les pièces de cadrage prioritaires dans le dépôt sont [`PROJECT_SCOPE.md`](../../docs/PROJECT_SCOPE.md), [`V1_MODULE_MATRIX.md`](../../docs/V1_MODULE_MATRIX.md), [`SCREEN_INVENTORY_V1.md`](../../docs/SCREEN_INVENTORY_V1.md), [`PRIVACY_AND_ACCESS.md`](../../docs/PRIVACY_AND_ACCESS.md), [`MEDIA_STORAGE.md`](../../docs/MEDIA_STORAGE.md) et [`TEST_PLAN_V1.md`](../../docs/TEST_PLAN_V1.md). Les règles UI se trouvent dans [`agents.md`](../agents.md), [`UI_UX_ENGINEERING.md`](../UI_UX_ENGINEERING.md) et [`DESIGN_GUARDRAILS.md`](DESIGN_GUARDRAILS.md).

### Ce qui est correctement hors périmètre actif

Le multi-diocèse, les fonctions nationales, une messagerie bidirectionnelle, le dossier médical complet, la PKI X.509/PAdES, l’archivage canonique et les workflows entièrement configurables ne doivent pas être comptés comme des manquements V1. Les 359 écrans Stitch sont un inventaire de conception, pas 359 fonctions promises. Sept maquettes sont retenues pour revue; le reste est déclaré archive/hors parcours actif.

En revanche, le périmètre V1 documente bien des besoins de gestion des membres, activités/présences, attestations, cotisations, documents et administration. Leur absence d’interface métier est donc un **écart réel**, même si une partie des modèles ou des endpoints existe déjà.

## Notes par page et parcours visible

| Page / parcours | Note | Ce qui est effectivement présent | Écart principal entre attendu et livré |
|---|---:|---|---|
| `/` — landing page | **6,8** | Sections mouvement, parcours, carrousel, territoire/carte, annuaire, FAQ, contact, newsletter, réseaux sociaux, consentement cookies et liens. | La photo du hero, la carte officielle et les photos du carrousel sont des emplacements. Le carrousel n’est pas un registre d’événements réels et n’a pas de contenu éditorial vérifié. Certains réseaux restent inactifs si leurs URL d’environnement ne sont pas configurées. |
| `/paroisses` — annuaire central | **7,3** | Recherche et filtre par doyenné, regroupement territorial, compteurs et cartes de paroisses avec niveaux de fiabilité et responsables/équipes documentés. | La liste réelle reste tributaire des informations 2026 à confirmer. Les photos sont des fichiers à déposer manuellement; pas de recherche géographique cartographique interactive. |
| `/doyennes/[id]` | **6,5** | Fiche dynamique par doyenné, cartes photo de paroisses, équipes/responsables connus, navigation retour vers l’annuaire. | Photos, actualités et composition complète des doyennés restent à fournir/valider; le contenu réel ne peut dépasser le référentiel. |
| `/paroisses/[id]` | **6,8** | Hero de paroisse, fil d’Ariane, équipe, sections, activités/galerie et cinq emplacements ronds pour les photos d’équipe. | La couverture et les portraits sont des placeholders. Les activités passées/actualités ne deviennent pas automatiquement un flux éditorial; l’upload depuis l’application n’existe pas. |
| `/legal/cgu`, `/legal/confidentialite` | **5** | Pages dédiées, liens publics, explication de la séparation public/privé et mention des médias. | Le texte est un socle produit, pas une validation juridique complète (responsable de traitement, contacts, durée détaillée, droits et procédures); validation juridique à obtenir avant publication officielle. |
| `/login` | **7,3** | Connexion par identifiant, messages d’erreur, état de soumission, cookie de session HttpOnly, lien vers l’aide d’accès. Les rôles/scope sont reconstruits côté serveur après authentification. | Pas de MFA/OTP ni de page de gestion des sessions actives. L’authentification n’équivaut pas à un parcours complet de création et d’administration de tous les comptes. |
| `/forgot-password` | **5,8** | La demande crée une entrée, limite les répétitions et notifie les super-administrateurs dans l’application; écran de suivi et états de ticket présents. | C’est une **demande d’assistance**, pas une réinitialisation de mot de passe. Pas d’email/SMS d’alerte, de procédure de vérification d’identité/consignation complète, ni d’action sûre de délivrance de nouveaux accès dans cette interface. |
| `/pre-inscription` | **7** | Seul parcours public de création d’intention militante; nouvelle adhésion ou mutation, paroisse d’origine/destination, garde légale pour mineur, consentement, rate limit et détection de doublons. Aucun compte n’est créé à la soumission. | Pas d’OTP ni de vérification de téléphone/email. Le rapprochement d’identité est limité et peut nécessiter un arbitrage humain; la livraison des notifications dépend de comptes administrateurs actifs. |
| `/admin/pre-inscriptions` | **7** | File de traitement, validation/rejet et création du compte militant après approbation; contrôles de périmètre, transaction, prévention de double traitement et journalisation sont présents. | L’arbitrage et les cas d’exception demandent encore une revue métier. La remise du secret temporaire et le parcours de première connexion/changement de mot de passe doivent être vérifiés de bout en bout. |
| `/espace` | **6,5** | Sélection d’un espace associé aux rôles actifs; redirection vers l’espace militant ou l’administration appropriée. | Écran de routage, pas un profil ni une gestion des rôles. Dépend de la qualité des affectations déjà en base. |
| `/militant/dashboard` | **6,5** | Espace propre à la personne : rattachement, activités/présences, demandes/attestations et cotisations selon les données accessibles. | Consultation surtout; pas de profil complet éditable, ni d’action UI claire pour créer une demande d’attestation. Les paiements ne peuvent pas y être réglés. |
| `/admin/dashboard` | **6,5** | Indicateurs calculés depuis la base, période, comparaisons mensuelles et territoriales, accès adaptés aux rôles et au scope. | Ce n’est pas encore le centre d’opérations complet de la maquette : pas de panneau exhaustif de notifications/actions, pas de CRUD des personnes; l’analyse reste limitée aux événements et champs effectivement saisis. |
| `/admin/organisation` | **4** | Liste des doyennés/paroisses du scope, sources et niveaux de fiabilité; l’écran annonce explicitement une vue en consultation. | L’administrateur ne peut pas corriger/proposer/valider les rattachements. Le besoin « gérer le diocèse, les doyennés et les paroisses » n’est donc pas livré en CRUD contrôlé. |
| `/admin/militants` | **6,5** | Registre scoppé, recherche, grade/statut, pagination et détail limité aux champs utiles. | Pas de modification, archivage, mutation, dédoublonnage assisté complet ou filtres temporels. Les informations privées sont volontairement cachées, ce qui est bon. |
| `/admin/militants/nouveau` | **6,5** | Création d’un militant par un responsable autorisé, rattachement section/équipe vérifié, cas mineur/tuteur et contrôle du scope. | Pas de téléversement photo, pas de CRUD de grades/équipes; l’émission et la remise des identifiants de compte doivent être sécurisées et éprouvées sur le vrai parcours. |
| `/admin/militants/[id]` | **5,8** | Fiche de consultation avec rattachement, grade et qualifications; aucune donnée santé/coordonnée privée exposée dans cette vue. | Lecture seule, aucune action de correction/évolution de grade ou d’affectation; ce n’est pas la page de profil/gestion complète attendue. |
| `/admin/activites` | **4,8** | Registre filtré par période et API pour lister/créer des activités et lire/enregistrer les présences. | L’interface visible ne permet pas de créer/modifier une activité ni de faire l’appel/pointage. La présence d’un endpoint ne livre pas le parcours au chef sur son téléphone. |
| `/admin/demandes` | **5,8** | Liste filtrable, actions de décision à deux niveaux, motif de rejet et contrôle anti-auto-validation côté service. | Le militant n’a pas de formulaire UI de création identifié dans son espace; génération PDF finale et QR graphiquement intégré ne sont pas livrés. La décision ne suffit pas à un cycle complet de bout en bout. |
| `/verify/[number]` | **6** | Vérification publique du numéro d’attestation et distinction valide/révoquée/introuvable. | Pas de rendu QR dans le document final ni d’affichage public riche de preuve; génération PDF actuelle minimale. |
| `/admin/statistiques` | **6** | Statistiques bornées au scope, filtres de dates/périodes et séries calculées en base. | Peu de dimensions/export; dépend des permissions de lecture membres/activités. Pas de métriques distribuées ou d’alertes opérationnelles derrière cette page. |
| `/admin/audit` | **6,5** | Registre paginé avec filtres de date/recherche et accès super-administrateur. | Pas de revue indépendante ni export complet; le contenu visible est volontairement réduit. Toute mutation sensible ne semble pas encore uniformément auditée. |
| `/admin/access-requests` | **5** | Queue super-admin, étapes « nouvelle / en vérification / ticket créé / clôturée ». | C’est un suivi manuel minimal, pas un workflow de reset. Transitions d’état simples, peu de métadonnées de traitement et pas de piste d’audit visible. |
| `/ecrans` et `/ecrans/[slug]` | **3,5 en production** | Galerie de revue limitée à 7 écrans Stitch, chargés à la demande; les autres slugs sont refusés. | Route accessible sans authentification. Elle expose une galerie de conception, potentiellement avec données de maquette; à désactiver ou protéger en production pour ne pas faire passer la conception pour le produit. |

## Notes par action et module métier

| Fonction attendue | État constaté | Note | Écart / jugement |
|---|---|---:|---|
| Session, rôles et scopes | Présents | **7/10** | JWT signé, cookie HttpOnly/SameSite, compte revérifié en base, rôles reconstruits. Pas de console de sessions et pas de révocation individuelle de token; durée de session 8 h. |
| Création de compte militant | Partielle mais réelle | **6,5/10** | Pré-inscription publique et création directe par responsable avec permission. Il manque le cycle complet d’activation, d’identifiants et de récupération testable avec des personnes réelles. |
| Création des comptes chef/admin/aumônier par supérieur | Non livrée en UI | **2/10** | Il existe des rôles dans le modèle et des comptes de test, mais pas de workflow de nomination/attribution, d’approbation et d’audit correspondant à la règle métier validée. |
| Dédoublonnage / mutation / arbitrage | Partiel | **6/10** | Contrôles de correspondance et arbitrage en base; OTP absent, contrôle humain et UX d’exception à renforcer. |
| Gestion CRUD membres, grades, équipes et organigramme | Partielle | **3,5/10** | Création simple et consultation existent; édition, archivage métier, historique de changement et CRUD de référentiels manquent. |
| Activités et présences | API partielle, UI faible | **4,5/10** | Service métier et endpoints sont présents; formulaire d’activité, liste de militants à appeler et feedback terrain ne sont pas livrés. |
| Demandes et attestations | Partiel | **5,5/10** | Circuit de validation existant; entrée utilisateur, PDF officiel final, QR intégré et contrôle complet du cycle sont à faire. |
| Cotisations / paiements / reçus | Lecture partielle | **3/10** | Consultation des contributions et modèle de paiement présents; encaissement, réconciliation, reçus et accès trésorier manquent. Aucun fournisseur de paiement raccordé. |
| Bibliothèque documentaire | Très partielle | **2,5/10** | Modèles et endpoint de lecture existent; publication, upload, droits d’accès complets et interface d’administration sont absents. Les schémas/service documents contiennent encore des placeholders. |
| Photos et vidéos | Non activé | **2,5/10** | Politique de stockage et modèle `MediaAsset` existent; ni fournisseur S3/MinIO opérationnel ni endpoint présigné d’upload/lecture. La base ne stocke pas les octets, ce qui est la bonne décision. |
| Notifications | Socle seulement | **4/10** | Notifications in-app listées/marquées comme lues. Pas de service email/SMS/WhatsApp configuré, de diffusion avancée ou de supervision des échecs. |
| Contact public / newsletter | Fonction de dépôt | **5,5/10** | Endpoints valident et écrivent en base; pas de console pour traiter/répondre aux contacts, pas de désabonnement newsletter, pas de fournisseur d’envoi. |
| Audit et logs | Socle présent | **6/10** | Audit DB, logs JSON et redaction de clés sensibles existent. Vérifier la couverture de toutes les mutations; les erreurs sérialisent actuellement message/stack et demandent une revue du risque d’informations techniques dans les logs. |
| Health/readiness et métriques | Partiel | **5/10** | `/api/health`, `/api/ready`, `/api/metrics` et compteurs locaux. Pas de backend métrique durable, alertes, dashboards d’exploitation ni health checks des fournisseurs absents. |
| Sauvegarde et restauration | Non opérationnel | **1,5/10** | Le modèle `Backup` existe; cela ne prouve ni planification, ni stockage protégé, ni sauvegarde automatique, ni test de restauration. |
| Référencement et erreurs | Bon socle | **7/10** | `robots.txt`, sitemap dynamique, métadonnées, favicon, 404, pages d’erreur et skeletons présents. Il reste la validation des URL publiques de production et la mesure réelle du SEO/performance. |

## Backend, sécurité et architecture

### Points solides observés

- Les mutations importantes examinées utilisent Zod côté serveur et Prisma plutôt que de construire du SQL par concaténation.
- Les permissions sont vérifiées par ressource/action/scope côté service pour activités, demandes et plusieurs lectures administratives.
- Le serveur réévalue l’état du compte et reconstruit les rôles depuis la base à la lecture de session; un compte suspendu n’est donc pas accepté simplement parce qu’un ancien JWT existe.
- Mot de passe hashé avec bcrypt (coût 12); cookie de session HttpOnly, SameSite Lax et Secure en production.
- Pagination et sélections Prisma limitées existent sur plusieurs registres; données sensibles exclues des listes publiques.
- Honeypot, validation et rate limiting sont présents sur plusieurs formulaires publics; erreurs, health checks et logs structurés ont une base.

### Risques et finitions nécessaires

1. **Rate limiting non distribué** : le compteur est une `Map` mémoire. Il se réinitialise au redémarrage et n’est pas cohérent entre plusieurs instances. Il ne constitue pas une protection production scalable.
2. **Pas de CSP configurée** dans les en-têtes observés. Les autres headers de sécurité constituent un bon départ, pas une revue complète.
3. **CAPTCHA absent** : honeypot et rate limit sont le niveau actuel. Une protection anti-robot côté serveur, éventuellement Turnstile, doit être décidée pour les formulaires publics selon le déploiement/abus.
4. **Pas de session store ou révocation individuelle** : expiration de 8 h et vérification de l’état du compte couvrent une partie du besoin, mais pas la liste/révocation par appareil.
5. **Double soumission** : quelques actions UI désactivent le bouton et le traitement de pré-inscription réclame la demande atomiquement; pas de clé d’idempotence transverse pour les formulaires publics, contacts ou futures mutations.
6. **API Gateway** : aucune passerelle distincte. Les Route Handlers Next.js sont l’API du monolithe. C’est cohérent à ce stade; circuit breaker/retry ne deviennent pertinents que lorsqu’un fournisseur externe est effectivement intégré.
7. **Limites de contenu** : vérifier les plafonds de corps HTTP et les contrôles systématiques contre payload volumineux sur tous les endpoints, en plus des limites par champ Zod.
8. **Matrice permission / pages** : la garde du middleware est une première barrière; chaque action doit encore être vérifiée côté service. Tester chaque rôle et chaque scope de bout en bout, notamment les cas section/équipe et les administrateurs créés par supérieur.
9. Les modules `documents`, `audit`, `identity` et `administration` ont des schémas/services explicitement placeholders ou très minces. L’architecture en dossiers existe, mais elle ne doit pas être confondue avec des modules métier complets.
10. Les règles UI contiennent des valeurs de référence à remplir dans `agents.md`; quelques tokens Tailwind/CSS restent codés en hexadécimal. La source de vérité de la charte et les checks visuels ne sont donc pas encore complètement verrouillés.

## Tests et preuve — ce qui a été vérifié pour cet audit

- `npm run typecheck` : **réussi**.
- `npm test` : **réussi**, suites unitaires, sécurité, régression et fuzz exécutées.
- `npm run test:integration`, `npm run test:functional`, `npm run test:contract` : les fichiers de suite ont démarré, mais aucun cas fonctionnel n’a été exécuté dans cet environnement, car ces tests sont conditionnels à `TEST_DATABASE_URL` / `TEST_BASE_URL`. Ce n’est pas une validation d’intégration/contrat.
- Pas de preuve de test Playwright/capture multi-tailles clair/sombre dans le dépôt exécutée pour cet audit.
- Les logs de charge partagés par le propriétaire montrent **1 000 échecs sur 1 000**, puis **20 000 sur 20 000**, malgré un `curl` isolé en HTTP 200. Ces résultats ne valident pas la charge; ils indiquent un échec total dans l’environnement/configuration testés. Le script actuel sait distinguer échecs HTTP et connexion, mais il faut refaire le test sur une version/build et un environnement isolé en enregistrant ces détails.
- Le stress à 20 000 requêtes ne doit pas être répété sur une production ou une base partagée.

## Écarts les plus importants entre l’attendu et le livré

| Priorité | Écart | Pourquoi c’est important |
|---|---|---|
| **P0 — avant pilote réel** | Tester les migrations et parcours métier sur une base de test indépendante; diagnostiquer le test de charge en échec. | Sans preuve DB/parcours/performance, les tests locaux ne démontrent pas la stabilité réelle. |
| **P0 — avant production** | Rate limiting distribué, CSP/revue headers, sauvegardes automatiques et test de restauration, alertes et métriques. | Le code local ne remplace pas l’exploitation, l’observabilité ou la reprise après incident. |
| **P0 — avant médias** | Choisir S3/MinIO et terminer les endpoints d’upload/lecture présignés, validation, consentement et contrôle de scope. | Les cadres photo du site ne permettent pas encore d’ajouter les photos depuis l’interface. |
| **P1 — cœur administratif** | Interface de gestion des comptes responsables, rôles, affectations et mandats par un rôle supérieur; CRUD contrôlé du référentiel, grades et équipes. | C’est la base pour administrer les personnes et territoires sans partage d’identifiants ni modification manuelle de la base. |
| **P1 — terrain** | Formulaires d’activité et de saisie/édition des présences réellement utilisables par un chef sur mobile. | L’API existante n’est pas une expérience terrain exploitable. |
| **P1 — démarches** | Formulaire militant de demande d’attestation, suivi complet, PDF final et QR intégré graphiquement; workflow réel de récupération du compte. | Les flux sont visibles en partie mais pas achevés côté demandeur et délivrance. |
| **P1 — gestion quotidienne** | Paiements/cotisations avec reçus et bibliothèque documentaire administrable; traitement des messages de contact. | Les modèles et endpoints de lecture ne permettent pas la gestion quotidienne promise. |
| **P2 — contenu public** | Déposer les photos autorisées, carte diocésaine officielle, contenus d’activités vérifiés et URLs officielles des réseaux. | Le design est structuré, mais les emplacements vides donnent encore une impression de site inachevé. |
| **P2 — conformité** | Revue juridique des CGU/confidentialité, conservation des données, consentement mineurs et données personnelles. | Le contenu actuel est informatif et doit être validé pour le vrai traitement diocésain. |

## Ordre de livraison recommandé

1. **Fermer la boucle compte/pré-inscription** : rôles d’approbation exacts, arbitrage, prévention doublons, création du compte, première connexion, changement du secret et notifications effectivement reçues.
2. **Terminer administration des personnes et du référentiel** : comptes responsables assignés par supérieur; édition/audit des membres, grades, équipes et rattachements avec scope strict.
3. **Livrer les opérations du chef** : créer activité, sélectionner son équipe, pointer les présences, modifier avec trace et retour d’erreur; valider sur mobile.
4. **Terminer attestations** : formulaire demandeur, circuit, PDF/QR final, vérification et révocation.
5. **Raccorder les services de production** : S3/MinIO, notifications, paiements si retenus, sauvegarde/restauration, rate limiting distribué, alerting/métriques.
6. **Appliquer le contenu réel et faire la validation visuelle** aux breakpoints 360/768/1440 px, clavier, contrastes et reduced motion; protéger ou retirer `/ecrans` de la production.
7. **Exécuter la CI complète** avec une base jetable, serveur de test et test de charge contrôlé; ajouter des tests fonctionnels des rôles et des scopes, pas seulement des réponses HTTP publiques.

## État du dépôt et réserves

L’audit porte sur l’arbre de travail local au 7 octobre 2026, pas seulement sur le dernier commit. Le dépôt contient de nombreuses modifications non commitées et des fichiers générés Prisma modifiés. Je ne peux donc pas attribuer chaque modification à un commit ni conclure qu’elles sont déployées. Les notes ci-dessus décrivent ce qui est présent dans le code analysé.

**Verdict final :** le projet a une bonne direction produit, de bons garde-fous de confidentialité et une base de code capable d’évoluer. Le principal problème n’est pas le manque d’écrans de conception; c’est l’écart entre les écrans et les opérations de bout en bout, plus l’absence des services d’exploitation. La priorité devrait être de rendre trois chaînes irréprochables — **pré-inscription → approbation → compte**, **activité → présences**, **demande → validation → attestation vérifiable** — avant d’élargir les modules.
