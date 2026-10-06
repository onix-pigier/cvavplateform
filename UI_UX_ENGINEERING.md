# UI/UX ENGINEERING STANDARD

## Standard permanent pour Codex, Claude Code et tout agent IA du projet

> **Statut : OBLIGATOIRE**
>
> Ce document définit les règles de conception et d'implémentation UI/UX
> du projet. L'agent IA ne doit pas seulement produire une interface
> "jolie". Il doit produire une interface cohérente, accessible,
> responsive, performante, maintenable et adaptée au métier.

---

# 1. PRINCIPES FONDAMENTAUX

## 1.1 L'IA assiste, elle ne décide pas seule

Avant toute implémentation importante :

1. Comprendre le besoin utilisateur.
2. Identifier le parcours utilisateur.
3. Identifier les états et cas limites.
4. Vérifier le design system existant.
5. Réutiliser les composants existants.
6. Proposer les changements importants avant de créer une nouvelle
   architecture UI.
7. Implémenter.
8. Tester visuellement et fonctionnellement.

Ne jamais créer une nouvelle solution simplement parce qu'elle paraît
plus "moderne".

## 1.2 Priorités

Toujours privilégier, dans cet ordre :

1. Clarté
2. Utilisabilité
3. Accessibilité
4. Cohérence
5. Feedback utilisateur
6. Performance
7. Esthétique
8. Effets visuels

L'esthétique ne doit jamais dégrader les six premiers points.

## 1.3 Anti-vibe-coding

INTERDIT :

* ajouter des gradients uniquement parce qu'ils sont populaires ;
* multiplier les animations sans raison ;
* utiliser du glassmorphism partout ;
* créer des composants dupliqués ;
* inventer un design différent sur chaque page ;
* utiliser des textes génériques de type "Transform your workflow" ;
* créer des données fictives dans une interface destinée à la
  production ;
* ajouter une librairie UI ou animation sans justification ;
* modifier une règle métier pour faciliter l'UI ;
* masquer une erreur métier derrière un fallback silencieux.

---

# 2. AVANT DE CODER UNE INTERFACE

Pour chaque nouvelle fonctionnalité, déterminer :

### Utilisateur

* Qui utilise cette fonctionnalité ?
* Quel est son objectif ?
* Quel est son niveau de connaissance ?
* Sur quel appareil l'utilise-t-il ?

### Parcours

* Où arrive-t-il ?
* Quelle action principale doit-il effectuer ?
* Quelle est l'action secondaire ?
* Que se passe-t-il après l'action ?
* Peut-il annuler ?
* Peut-il revenir en arrière ?

### États

Toujours considérer au minimum :

* loading
* empty
* success
* error
* disabled
* permission denied
* offline / réseau indisponible lorsque pertinent
* validation en cours
* données partielles lorsque pertinent

Ne jamais concevoir uniquement le "happy path".

---

# 3. DESIGN SYSTEM

Le projet doit utiliser un système de design cohérent.

## 3.1 Tokens

Centraliser autant que possible :

* couleurs
* typographie
* espacements
* rayons
* ombres
* tailles
* z-index
* transitions
* breakpoints

Ne pas inventer arbitrairement une nouvelle valeur sur chaque composant.

## 3.2 Couleurs

Utiliser des rôles sémantiques :

* background
* foreground
* surface
* muted
* border
* primary
* secondary
* accent
* success
* warning
* destructive
* focus

Éviter les couleurs codées en dur lorsqu'un token existe.

## 3.3 Typographie

Définir clairement :

* display
* heading
* subheading
* body
* label
* caption
* metadata

Respecter une hiérarchie visuelle claire.

Ne pas multiplier les familles de polices sans justification.

## 3.4 Espacement

Utiliser une échelle cohérente.

Exemple :

4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

Adapter si le design system du projet possède déjà une autre échelle.

---

# 4. COMPOSANTS

Avant de créer un composant :

1. Chercher s'il existe déjà.
2. Vérifier s'il peut être étendu.
3. Vérifier s'il doit être générique ou spécifique au domaine.

Préférer :

```text
Button
Input
Modal
Drawer
Toast
Tooltip
Tabs
Card
Table
Form
Navigation
```

à une multitude de composants quasi identiques.

## Ne pas sur-abstraire

Ne pas créer une architecture complexe pour un composant utilisé une
seule fois.

L'abstraction doit être justifiée par :

* réutilisation réelle ;
* cohérence ;
* complexité ;
* besoin métier.

---

# 5. RESPONSIVE DESIGN

Concevoir pour plusieurs contextes :

* mobile
* tablette
* desktop
* grands écrans lorsque pertinent

Ne pas simplement "réduire" la version desktop.

Sur mobile, vérifier :

* navigation ;
* taille des boutons ;
* zones tactiles ;
* formulaires ;
* tableaux ;
* modales ;
* scroll horizontal ;
* clavier virtuel ;
* contenu long.

Le responsive doit être testé avec de vraies dimensions, pas uniquement
en redimensionnant approximativement la fenêtre.

---

# 6. ACCESSIBILITÉ

Respecter autant que possible WCAG.

Toujours vérifier :

* contraste ;
* navigation clavier ;
* focus visible ;
* labels de formulaire ;
* structure sémantique ;
* alternatives textuelles ;
* lecteurs d'écran ;
* ordre de tabulation ;
* messages d'erreur compréhensibles.

Ne jamais utiliser la couleur seule pour communiquer un état.

Exemple :

Mauvais :

```text
Rouge = erreur
Vert = succès
```

Préférer :

```text
Icône + couleur + texte
```

Respecter également :

```text
prefers-reduced-motion
```

pour les utilisateurs sensibles aux animations.

---

# 7. MOTION DESIGN

## 7.1 Règle principale

Une animation doit avoir une fonction.

Elle peut servir à :

* donner un feedback ;
* expliquer une transition ;
* montrer une relation ;
* attirer l'attention ;
* confirmer une action ;
* orienter la lecture ;
* améliorer la perception de continuité.

Ne pas animer uniquement pour "faire premium".

## 7.2 Hiérarchie du mouvement

### Micro-interaction

Environ 100--200 ms.

Exemples :

* hover ;
* press ;
* focus ;
* toggle ;
* petite transition.

### Composant

Environ 200--350 ms.

Exemples :

* modal ;
* drawer ;
* dropdown ;
* accordion ;
* changement d'état.

### Transition importante

Environ 300--500 ms.

Exemples :

* changement de page ;
* apparition d'un grand panneau ;
* transition structurante.

Ces valeurs sont des repères, pas des règles absolues.

## 7.3 Préférer la qualité à la quantité

Une page doit pouvoir rester compréhensible si toutes les animations
sont désactivées.

Les animations ne doivent pas empêcher :

* la lecture ;
* le clic ;
* la navigation ;
* la compréhension ;
* les performances.

## 7.4 Technologies

Pour React/Next.js :

### Motion

À privilégier pour :

* micro-interactions ;
* transitions ;
* layout animations ;
* gestures ;
* composants interactifs.

### GSAP

À utiliser lorsque la complexité le justifie :

* timelines complexes ;
* storytelling ;
* scroll-driven animation ;
* SVG avancé ;
* séquences coordonnées.

### Lottie / Rive

À utiliser pour des animations graphiques ou interactives spécifiques.

### Three.js / WebGL

Uniquement lorsqu'une expérience 3D apporte une vraie valeur.

Ne jamais ajouter une technologie uniquement pour impressionner.

---

# 8. MICRO-INTERACTIONS

Chaque action importante doit avoir un feedback approprié.

Exemples :

### Bouton

```text
default
→ hover
→ pressed
→ loading
→ success / error
```

### Formulaire

```text
idle
→ focus
→ validating
→ error / success
```

### Suppression

Toujours rendre clair :

* ce qui va être supprimé ;
* si l'action est irréversible ;
* comment confirmer ;
* comment récupérer lorsque cela est possible.

---

# 9. LOADING / EMPTY / ERROR / SUCCESS

Chaque écran important doit avoir une stratégie pour :

### Loading

Éviter un écran vide.

Utiliser selon le contexte :

* skeleton ;
* spinner ;
* progress indicator.

### Empty

Ne pas afficher uniquement :

> "No data."

Expliquer :

* pourquoi il n'y a pas de données ;
* ce que l'utilisateur peut faire.

### Error

Afficher :

* ce qui s'est passé ;
* ce que l'utilisateur peut faire ;
* éventuellement une action de retry.

### Success

Confirmer clairement l'action lorsque cela est nécessaire.

---

# 10. UX WRITING

Les textes d'interface doivent être :

* courts ;
* précis ;
* humains ;
* orientés action.

Éviter :

```text
Something went wrong.
```

Préférer un message contextualisé lorsque l'information est disponible.

Éviter les textes marketing génériques dans les interfaces métier.

Les boutons doivent décrire l'action :

```text
Créer le trajet
Enregistrer
Confirmer la réservation
Envoyer la demande
```

plutôt que :

```text
Continue
Proceed
Submit
Click here
```

lorsque le contexte permet d'être plus précis.

---

# 11. FORMULAIRES

Un formulaire professionnel doit gérer :

* labels ;
* placeholders pertinents ;
* validation ;
* erreurs ;
* champs obligatoires ;
* états disabled ;
* loading ;
* succès ;
* conservation des données saisies lorsqu'une erreur survient.

Ne pas utiliser le placeholder comme remplacement du label.

Les erreurs doivent apparaître près du champ concerné et être
compréhensibles.

---

# 12. TABLEAUX ET DONNÉES

Pour les interfaces administratives :

* hiérarchiser les informations ;
* éviter les colonnes inutiles ;
* prévoir les états vides ;
* prévoir le loading ;
* prévoir pagination ou virtualisation si nécessaire ;
* gérer les actions de masse lorsque pertinent ;
* rendre les actions destructives explicites.

Sur mobile, ne pas simplement laisser un tableau déborder
horizontalement sans réflexion UX.

---

# 13. PERFORMANCE UI

Toujours surveiller :

* taille des images ;
* lazy loading ;
* animations coûteuses ;
* re-renders inutiles ;
* bundle JavaScript ;
* composants lourds ;
* polices ;
* vidéos ;
* effets de blur ;
* canvas ;
* 3D.

Ne pas utiliser une animation basée sur `width`, `height`, `top` ou
`left` lorsque `transform` ou `opacity` suffit.

Préférer autant que possible :

```text
transform
opacity
```

pour les animations performantes.

---

# 14. IMAGES ET ASSETS

Ne pas utiliser d'images génériques simplement pour remplir une section.

Pour une marque réelle :

* privilégier les vrais produits ;
* vraies photos ;
* vrais lieux ;
* vraie identité visuelle ;
* illustrations cohérentes.

Les assets doivent servir le contenu.

---

# 15. ICONOGRAPHIE

Utiliser une bibliothèque cohérente.

Exemple :

* Lucide

Ne pas mélanger sans raison :

* Lucide
* Font Awesome
* Material Icons
* icônes générées
* emojis

Les icônes doivent être cohérentes en :

* taille ;
* stroke ;
* style ;
* alignement.

---

# 16. Figma → CODE

Lorsqu'un design Figma existe :

1. Comprendre le design.
2. Identifier les tokens.
3. Identifier les composants.
4. Identifier les états.
5. Identifier les breakpoints.
6. Identifier les animations.
7. Implémenter avec les composants du projet.
8. Comparer visuellement avec le design.

Ne pas reproduire aveuglément chaque pixel si cela crée une mauvaise UX
responsive.

---

# 17. IA ET GÉNÉRATION UI

L'IA peut :

* proposer des layouts ;
* générer des composants ;
* proposer des variantes ;
* écrire du CSS ;
* créer des animations ;
* analyser l'accessibilité ;
* refactoriser ;
* proposer des améliorations UX.

Mais l'IA ne doit pas :

* inventer une règle métier ;
* supprimer une contrainte pour faire fonctionner l'UI ;
* créer une nouvelle librairie sans justification ;
* remplacer une décision UX importante sans validation ;
* considérer une interface terminée simplement parce qu'elle compile.

---

# 18. PROCESSUS DE TRAVAIL OBLIGATOIRE

Pour une nouvelle page :

```text
Besoin
  ↓
User flow
  ↓
Wireframe / Figma si nécessaire
  ↓
Design system
  ↓
Composants existants
  ↓
États
  ↓
Responsive
  ↓
Accessibilité
  ↓
Motion
  ↓
Implémentation
  ↓
Test
  ↓
Revue visuelle
  ↓
Validation
```

Pour une petite modification :

```text
Comprendre
→ vérifier les composants existants
→ modifier
→ tester
→ vérifier les régressions
```

---

# 19. CHECKLIST AVANT DE CONSIDÉRER UNE UI TERMINÉE

## UX

* [ ] Le parcours utilisateur est clair.
* [ ] L'action principale est évidente.
* [ ] Les erreurs sont compréhensibles.
* [ ] Les états loading/empty/error/success existent.
* [ ] Les actions destructives sont explicites.

## UI

* [ ] Le design system est respecté.
* [ ] La hiérarchie visuelle est claire.
* [ ] Les espacements sont cohérents.
* [ ] La typographie est cohérente.
* [ ] Les composants existants sont réutilisés.

## Responsive

* [ ] Mobile vérifié.
* [ ] Tablette vérifiée si pertinente.
* [ ] Desktop vérifié.
* [ ] Pas de débordement inattendu.
* [ ] Zones tactiles correctes.

## Accessibilité

* [ ] Navigation clavier.
* [ ] Focus visible.
* [ ] Contraste suffisant.
* [ ] Labels présents.
* [ ] Messages d'erreur accessibles.
* [ ] Reduced motion pris en compte.

## Motion

* [ ] Chaque animation a une raison.
* [ ] Les animations ne gênent pas l'utilisateur.
* [ ] Les transitions sont cohérentes.
* [ ] Pas de sur-animation.
* [ ] Les performances sont acceptables.

## Performance

* [ ] Images optimisées.
* [ ] Animations raisonnables.
* [ ] Pas de dépendance inutile.
* [ ] Pas de gros composant chargé inutilement.
* [ ] Pas de re-render évident et inutile.

---

# 20. DEFINITION OF DONE --- UI/UX

Une interface n'est PAS considérée comme terminée parce que :

* elle compile ;
* elle ressemble au screenshot ;
* elle fonctionne dans Chrome desktop ;
* l'IA affirme qu'elle est terminée.

Elle est terminée lorsque :

```text
UX
+
UI
+
Responsive
+
Accessibility
+
States
+
Motion
+
Performance
+
Consistency
+
Tests
```

sont vérifiés.

---

# 21. INSTRUCTION FINALE POUR L'AGENT IA

Avant chaque implémentation UI importante, demande-toi :

1. Quel problème utilisateur cette interface résout-elle ?
2. Existe-t-il déjà un composant permettant de la construire ?
3. Quels sont tous ses états ?
4. Comment fonctionne-t-elle sur mobile ?
5. Est-elle accessible ?
6. Quelle animation apporte réellement de la valeur ?
7. Cette animation est-elle nécessaire ?
8. Est-ce cohérent avec le design system ?
9. Cette solution ajoute-t-elle une dépendance inutile ?
10. Comment cette interface se comporte-t-elle en cas d'erreur ?
11. Ai-je vérifié les cas limites ?
12. Est-ce une amélioration réelle ou simplement un effet visuel ?

**Principe directeur :**

> Ne cherche pas à produire l'interface la plus spectaculaire. Cherche à
> produire l'interface la plus claire, cohérente, accessible, agréable
> et maîtrisée.

**Une interface professionnelle ne montre pas tout ce que l'IA sait
faire. Elle montre que l'équipe sait décider ce qu'il faut faire.**
