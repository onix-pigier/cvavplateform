# DESIGN.md — Règles UI/UX, motion et qualité frontend

> Fichier lu par l'agent (Claude Code / Codex) avant toute tâche touchant à l'interface.
> Règle d'or : **aucune décision visuelle n'est laissée au hasard**. Si une valeur n'est pas dans les tokens, on ne l'invente pas : on demande ou on propose d'étendre les tokens.

## 0. À remplir une fois par projet (obligatoire)

- Produit / audience : `<ex : app VTC grand public, Côte d'Ivoire, Android milieu/bas de gamme>`
- Ton visuel (3 adjectifs) : `<ex : sobre, rapide, fiable>`
- Couleur de marque : `<oklch(...)>`
- Polices : `<titres>` + `<texte>` (2 familles max)
- Références visuelles : `<liens ou captures dans /docs/design-refs/>`
- Contraintes perf : `<ex : LCP < 2,5 s sur 4G, bundle JS initial < 200 kB>`

## 1. Tokens (source de vérité unique)

Toutes les valeurs viennent de variables CSS (ou `@theme` Tailwind v4). **Interdit** : couleurs hex/rgb en dur, `p-[13px]`, `rounded-[7px]`, durées ou easings inline.

```css
:root {
  /* Couleurs — échelles OKLCH, neutres légèrement teintés */
  --color-brand: oklch(0.62 0.17 255);
  --color-bg: oklch(0.99 0.002 255);
  --color-surface: oklch(0.97 0.004 255);
  --color-border: oklch(0.90 0.006 255);
  --color-text: oklch(0.22 0.01 255);
  --color-text-muted: oklch(0.50 0.01 255);
  --color-success: oklch(0.65 0.15 150);
  --color-danger: oklch(0.60 0.20 25);

  /* Espacement : grille 4 px */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem;    --space-6: 1.5rem; --space-8: 2rem;
  --space-12: 3rem;   --space-16: 4rem;

  /* Rayons : 3 valeurs, pas plus */
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px;

  /* Élévation : 3 niveaux max */
  --shadow-1: 0 1px 2px oklch(0 0 0 / 0.06);
  --shadow-2: 0 4px 12px oklch(0 0 0 / 0.08);
  --shadow-3: 0 12px 32px oklch(0 0 0 / 0.12);

  /* Motion */
  --dur-fast: 120ms;   /* feedback : hover, press, toggle */
  --dur-base: 220ms;   /* composants : dropdown, tooltip, tabs */
  --dur-slow: 380ms;   /* layout, dialogs, page */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}

/* Dark mode : redéfinir les tokens, jamais dupliquer les composants */
@media (prefers-color-scheme: dark) { :root { /* ... */ } }
```

## 2. Typographie

- Échelle à ratio fixe (ex. 1.2), fluide via `clamp()`.
- `text-wrap: balance` sur les titres, `text-wrap: pretty` sur les paragraphes.
- `font-variant-numeric: tabular-nums` sur tout ce qui est chiffré (prix, tableaux, compteurs).
- Longueur de ligne 60–75 caractères max. Interlignage 1.5 (texte), 1.1–1.25 (titres).
- Pas d'Inter / Roboto / Arial par défaut : utiliser les polices définies en §0.

## 3. Layout et hiérarchie

- Un seul élément dominant par écran. Le reste est subordonné.
- Espacements uniquement via les tokens `--space-*`. Du vide assumé, pas de remplissage.
- Mobile-first. Tester à 360, 390, 768, 1024, 1440 px.
- Cibles tactiles ≥ 44×44 px. Pas de survol comme seule voie d'accès à une action.

## 4. États (aucun composant n'est « fini » sans eux)

Pour chaque composant interactif ou data-driven : `default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, `empty`, `error`, `success`.

- **Loading** : skeleton qui reproduit le layout final (pas de spinner générique plein écran).
- **Empty** : explique pourquoi c'est vide + action suivante.
- **Error** : message humain, action de récupération, jamais de stack trace brute.
- **Optimistic UI** pour les actions fréquentes, avec rollback propre en cas d'échec.
- `focus-visible` toujours visible et contrasté. Ne jamais faire `outline: none` sans remplacement.

## 5. Motion — principes

1. **Chaque animation a une fonction** : orienter, donner du feedback, préserver la continuité, hiérarchiser. Pas de fonction nommable → pas d'animation.
2. **Durées** : tokens `--dur-*` uniquement. Les sorties sont plus courtes que les entrées.
3. **Easing** : jamais `linear` ni `ease` par défaut. `--ease-out` pour les entrées, `--ease-in-out` pour les déplacements. **Springs** pour tout ce qui est manipulé directement (drag, sheet, toggle).
4. **Stagger** : 30–60 ms entre éléments, plafonné à ~400 ms au total.
5. **Interruptible** : toute animation peut être annulée/inversée en cours de route sans glitch.
6. **Un seul moment fort par écran.** Le reste est discret.

### Choix d'outil (par ordre de préférence)

1. CSS natif (`transition`, `@starting-style`, `interpolate-size`, scroll-driven animations).
2. View Transitions API pour les transitions entre états/pages.
3. Motion (React) pour layout animations, `AnimatePresence`, gestures, springs.
4. GSAP uniquement pour timelines complexes / storytelling scroll. Ne pas charger Motion et GSAP ensemble sans justification écrite.
5. Rive/Lottie pour illustrations animées ; Three.js/R3F seulement si la 3D est le produit.

### Perf et accessibilité du motion

- Animer **uniquement `transform` et `opacity`**. Jamais `width`, `height`, `top`, `left`, `box-shadow` en animation. Pour les hauteurs : `grid-template-rows: 0fr → 1fr` ou `interpolate-size`.
- `will-change` ciblé et temporaire, jamais global.
- **`prefers-reduced-motion` obligatoire**, géré de façon centralisée (un hook/wrapper, pas composant par composant) : mouvements spatiaux → fondus ou suppression.
- Une animation ne doit jamais bloquer l'interaction ni masquer le focus.

## 6. Interdits (signaux « généré par IA »)

- Dégradés violet/indigo/rose par défaut, glassmorphism gratuit, ombres colorées néon.
- Emojis ou icônes décoratives dans les titres, boutons et listes de features.
- Badge « ✨ New » au-dessus du hero, structure Hero → 3 cartes → témoignages → pricing 3 tiers → FAQ → CTA par réflexe.
- Fade-in-up sur chaque section au scroll.
- Faux contenu : témoignages inventés, logos « trusted by », stats rondes (10K+, 99.9 %), avatars générés.
- Copywriting LLM : « seamless », « elevate », « unlock the power of », « streamline », tirets cadratins en rafale, « Ce n'est pas juste X, c'est Y ».
- Cartes arrondies + ombre douce uniformes partout sans hiérarchie.
- Lorem ipsum ou mock data qui reste en prod. Boutons qui ne font rien.
- Favicon, `<title>` et métadonnées par défaut du template.

## 7. Accessibilité (WCAG AA minimum)

- Contraste texte ≥ 4.5:1 (3:1 pour grand texte et composants UI).
- Primitives accessibles (Radix / React Aria / Base UI) pour dialogs, menus, selects, tabs. Ne pas recoder un focus trap à la main.
- HTML sémantique d'abord (`button`, `nav`, `main`, `label`), ARIA en dernier recours.
- Navigation clavier complète, ordre de tab logique, `Escape` ferme les overlays.
- Labels visibles sur les champs, erreurs liées via `aria-describedby`.

## 8. Performance frontend

- Images : AVIF/WebP, `width`/`height` explicites (zéro CLS), `loading="lazy"` hors viewport initial, `fetchpriority="high"` sur l'image LCP.
- Polices : sous-ensemble, `font-display: swap`, préchargement des 1–2 fichiers critiques.
- Code-splitting par route, imports dynamiques pour les libs lourdes (3D, éditeurs, charts).
- Pas de lib lourde pour un besoin trivial : vérifier le coût du bundle avant d'ajouter une dépendance.
- Cible de test : Android milieu/bas de gamme en 4G, pas le laptop de dev.

## 9. Workflow imposé à l'agent

Ordre de construction : **tokens → primitives → composants → pages → motion en dernier.**

Avant de coder une feature UI non triviale :
1. Lire ce fichier et les tokens existants.
2. Proposer un plan (composants, états, comportement motion, impacts a11y/perf) et **attendre validation**.
3. Lister les tradeoffs pour toute décision structurante (lib, pattern, animation complexe).

Après avoir codé :
1. Vérifier tous les états du §4.
2. Prendre des captures via Playwright à 360 / 768 / 1440 px, clair et sombre, et se corriger.
3. Lancer lint, typecheck et tests.
4. Passer la checklist ci-dessous.

## 10. Checklist de fin de tâche UI

- [ ] Aucune valeur en dur hors tokens
- [ ] Tous les états gérés (loading, empty, error inclus)
- [ ] Focus visible, navigation clavier OK, contrastes AA
- [ ] `prefers-reduced-motion` respecté
- [ ] Animations limitées à `transform` / `opacity`, durées et easings via tokens
- [ ] Responsive vérifié sur 360 px minimum
- [ ] Aucun élément de la liste §6 présent
- [ ] Pas de nouvelle dépendance non justifiée
- [ ] Captures avant/après fournies dans la PR

---

# Installation

## Claude Code

1. Place ce fichier à la racine du repo : `DESIGN.md`.
2. Dans `CLAUDE.md`, ajoute :

```md
## UI / Frontend
Avant toute tâche touchant à l'interface, lis @DESIGN.md et respecte-le strictement.
Pour toute feature UI non triviale : plan d'abord, validation, puis code.
Ne jamais introduire de valeur visuelle hors tokens.
```

3. Optionnel : crée un subagent `ui-reviewer` (lecture seule) chargé de relire chaque diff UI contre §6, §7 et §10, et un hook post-édition qui lance lint + typecheck.

## Codex

1. Même emplacement : `DESIGN.md` à la racine.
2. Dans `AGENTS.md`, ajoute :

```md
## UI / Frontend
Avant toute tâche touchant à l'interface, lis DESIGN.md et respecte-le strictement.
Pour toute feature UI non triviale : propose un plan et attends validation avant de coder.
Ne jamais introduire de valeur visuelle hors tokens.
```

## Les deux outils

Garde **un seul** `DESIGN.md` comme source de vérité, référencé depuis `CLAUDE.md` et `AGENTS.md`. Ne duplique pas son contenu dans les deux : ils dériveraient.

## Maintenance

- Remplis le §0 dès le début du projet, c'est ce qui différencie ton produit du look générique.
- Quand l'agent fait une erreur de design récurrente, ajoute une ligne dans §6 plutôt que de la corriger à la main à chaque fois.
- Garde le fichier court : s'il dépasse ~300 lignes, scinde (`DESIGN.md` + `docs/motion.md`) et référence.