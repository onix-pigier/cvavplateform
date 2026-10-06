#!/usr/bin/env node
/**
 * Convertit les maquettes Stitch (HTML autonomes) de CVAV Platform en composants React TSX.
 *
 * Usage :
 *   node scripts/convert-stitch.mjs                 # convertit les 359 écrans
 *   node scripts/convert-stitch.mjs --only slug1,slug2   # convertit un sous-ensemble
 *
 * Entrée  : ../design-stitch/stitch_cvav_platform_dioc_se_ci/<slug>/code.html
 * Sortie  : components/ecrans/<slug>.tsx          (359 composants)
 *           components/ecrans/registre.ts         (chargeurs paresseux par slug)
 *           components/ecrans/meta.ts             (slug / titre / domaine)
 *
 * Règles de conversion (statique fidèle au rendu par défaut) :
 *   - <script>, commentaires et attributs on* sont supprimés ;
 *   - class → className, for → htmlFor, kebab → camelCase (SVG compris) ;
 *   - style="..." → objet JSX (URLs externes mortes → placeholders locaux) ;
 *   - value → defaultValue, checked → defaultChecked, option[selected] →
 *     select[defaultValue], <textarea> → defaultValue (contenu) ;
 *   - <img> externes (lh3.googleusercontent.com, HTTP 403) → assets locaux ;
 *   - espaces HTML préservés via expressions {" "} / {"texte "} ;
 *   - classes du <body> portées par une <div> racine.
 *
 * Généré une fois par import de maquettes — NE PAS éditer les fichiers produits à la main.
 */
import { readdirSync, readFileSync, writeFileSync, rmSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "parse5";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = join(__dirname, "..");
const SRC_DEFAULT = join(APP, "..", "design-stitch", "stitch_cvav_platform_dioc_se_ci");
const OUT_DIR = join(APP, "components", "ecrans");

// ---------------------------------------------------------------------------
// Arguments
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
let SRC = SRC_DEFAULT;
let only = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--src" && args[i + 1]) SRC = args[i + 1];
  if (args[i] === "--only" && args[i + 1]) only = args[i + 1].split(",").map((s) => s.trim()).filter(Boolean);
}

// ---------------------------------------------------------------------------
// Tables de conversion attributs
// ---------------------------------------------------------------------------
const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  valign: "vAlign",
  accesskey: "accessKey",
  contenteditable: "contentEditable",
  crossorigin: "crossOrigin",
  datetime: "dateTime",
  enctype: "encType",
  formaction: "formAction",
  novalidate: "noValidate",
  usemap: "useMap",
  autofocus: "autoFocus",
  autocomplete: "autoComplete",
  playsinline: "playsInline",
  referrerpolicy: "referrerPolicy",
  inputmode: "inputMode",
  frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen",
  spellcheck: "spellCheck",
  srcset: "srcSet",
  // SVG kebab → camel (générique ci-dessous, liste pour lisibilité)
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-width": "strokeWidth",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "stroke-miterlimit": "strokeMiterlimit",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-rule": "clipRule",
  "text-anchor": "textAnchor",
  "dominant-baseline": "dominantBaseline",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "paint-order": "paintOrder",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-weight": "fontWeight",
  "text-decoration": "textDecoration",
};

const BOOLEAN_ATTRS = new Set([
  "disabled", "checked", "selected", "multiple", "readonly", "required",
  "autofocus", "autoplay", "controls", "loop", "muted", "hidden", "open",
  "novalidate", "reversed", "playsinline", "itemscope", "defer", "async",
  "nomodule", "download", "ismap", "default", "inert", "seamless", "compact",
]);

const INLINE_ELEMENTS = new Set([
  "a", "span", "strong", "em", "b", "i", "u", "small", "code", "abbr",
  "button", "label", "img", "input", "select", "textarea", "sup", "sub", "br",
]);

// ---------------------------------------------------------------------------
// Domaines fonctionnels (alignés sur l'inventaire des 359 écrans) — 1re règle gagnante
// ---------------------------------------------------------------------------
const DOMAINES = [
  ["Authentification", /(_|^)(login|connexion|auth|mot_de_passe|mdp|otp|code_?de_?v|r_?initialis|verrouill|oubli|session)/],
  ["Portail & Inscriptions", /(accueil|portail|landing|inscription|admission|adhesion|pr_?inscription|carte_d_identit|presentation|a_propos|contact|faq)/],
  ["Espace Militant", /(militant|espace_jeune|mon_espace|mon_profil|carnet|ma_progression|mes_|ma_carte|carte_de_membre|profil_?de|notification)/],
  ["Console Paroissiale", /(paroissiale|approbation|console|cur_|pasteur|validation_pr|responsable_?d|aumonier|aum_nier|fifo|file_d|en_attente|dossiers_d_adh|modale_de_suspension|lev_e_de_suspension|ordre_de_gravure|succ_s_carte_provisoire|suivi_des_demandes|visa_sacerdotal)/],
  ["Gouvernance & Synodalité", /(gouvernance|synod|conseil|chapitre|election|mandat|scr_gov|arbitrage|bascule_d|cl_ture_synodale|vote|d_?lib_?r|ex_?cution_wf|wf_0|comit)/],
  ["Finances & Cotisations", /(financ|cotisation|tr_sor|panier|budget|factur|quittance|recette|d_pense|comptab|paiement|reversal|escort|caisse|note_de_frais|remboursement|busines|subvention|don_|offrande)/],
  ["Terrain & Sécurité", /(terrain|nfc|rfid|mifare|patrouille|appel_|incident|alerte|clair|secours|urgenc|pointage|badgeage|scan|contr_le_instantan|int_gration_christian|s_curit(?!_alimentaire))/],
  ["Camps & Pèlerinages", /(camp|pelerinage|lourdes|rome|voyage|t_l_com|dlr|brevet_s|d_part|retour|h_bergement|bus|caravan|journ_e_mondial|jmj|telecom|t_l_?copi|sms|pastoraux_d_livr|cuisine|bivouac|isotherme|casier|guidage|azimut|balise|suivi_filtr|t_l_m_trie)/],
  ["Pédagogie & Investiture", /(p_dagogie|investiture|grade|progression|brevet|formation|cours|exercice|cat_ch|promesse|engagement|atelier|journ_e_de_formation|badge|comp_tences|animation_p_diatrique)/],
  ["Registres & Tabularium", /(registre|tabularium|archives_canoniques|archivage|dossier_?num|paraphe|scell)/],
  ["Mutations & Exeat", /(mutation|exeat|transfert|r_?affectation)/],
  ["Chancellerie & Bibliothèque", /(chancellerie|biblioth|mediath|lettre|certificat|acte_notari|l_galisation|recommand|courrier|document|margement|signature|dsig|x\.509|pades|lecteur_pdf|inspecteur|inspection|planche_d_impression|spooler|impression_directe|accus_de_r_ception|attestation|citation|mandement|circulaire|paroisse_?de|cran_a4|export_pdf|pdf_a_3b|a4_imprimable)/],
  ["Assainissement", /(assaini|sanit(?!_alimentaire)|hygi|latrine|toilette|eau_|propret)/],
  ["Statistiques & Pilotage", /(statistiqu|stats|rapport|sauvegarde|backup|restauration|bac_sable|sandbox|export|tableau_de_bord|dashboard|kpi|observatoire|indicateur|synth_se|bilan)/],
  ["Administration & Référentiels", /(administration|r_f_rentiel|crud|param_trage|superadmin|sys|config|utilisateur|compte|journal_?des|audit|fiche_administrative)/],
];
function domaineDuSlug(slug) {
  for (const [nom, re] of DOMAINES) if (re.test(slug)) return nom;
  return "Divers";
}

// ---------------------------------------------------------------------------
// Nettoyage alt / mapping images externes mortes
// ---------------------------------------------------------------------------
function cleanAlt(alt) {
  if (!alt) return alt;
  let a = alt.replace(/[ \t\r\n\f\v]+/g, " ").trim();
  const i = a.indexOf(". Design context");
  if (i > 0) a = a.slice(0, i).trimEnd();
  if (a.length > 160) a = a.slice(0, 157).trimEnd() + "…";
  return a;
}

const RE_EMBLEM = /embl[eè]me|logo|blason|[eé]cusson/i;
const RE_PERSONNE = /portrait|personne|personne\b|man\b|woman|girl|boy|child|pr[eê]tre|p[eè]re\b|abb[eé]|r[eé]v|chef\b|jeune|animateur|militant|membre|tuteur|tutrice|aum[oô]nier|smiling|wearing|headshot|character|photo d|homme|femme|gar[cç]on|fille\b|visage| visage|curinga/i;

function mapImageSrc(src, alt) {
  if (!src) return src;
  if (!/^https?:\/\//i.test(src)) return src; // chemins relatifs conservés
  if (RE_EMBLEM.test(alt || "")) return "/assets/cvav-emblem.png";
  if (RE_PERSONNE.test(alt || "")) return "/assets/avatar-placeholder.svg";
  return "/assets/image-placeholder.svg";
}

// ---------------------------------------------------------------------------
// style="..." → objet JSX
// ---------------------------------------------------------------------------
function splitCssDeclarations(css) {
  const out = [];
  let cur = "", depth = 0, quote = null;
  for (const ch of css) {
    if (quote) {
      cur += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"') { quote = ch; cur += ch; continue; }
    if (ch === "(") { depth++; cur += ch; continue; }
    if (ch === ")") { depth--; cur += ch; continue; }
    if (ch === ";" && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.filter((d) => d.includes(":"));
}

function cssUrlsLocales(val) {
  return val.replace(/url\(\s*['"]?https?:\/\/[^'")\s]+['"]?\s*\)/gi, 'url("/assets/image-placeholder.svg")');
}

function jsStr(s) {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r")}"`;
}

function styleToJsxAttr(css) {
  const parts = [];
  for (const decl of splitCssDeclarations(css)) {
    const i = decl.indexOf(":");
    let prop = decl.slice(0, i).trim().toLowerCase();
    let val = cssUrlsLocales(decl.slice(i + 1).trim());
    if (!prop || !val) continue;
    prop = prop.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
    parts.push(`${prop}: ${jsStr(val)}`);
  }
  if (!parts.length) return null;
  return `{{ ${parts.join(", ")} }}`;
}

// ---------------------------------------------------------------------------
// Échappement de texte JSX
// ---------------------------------------------------------------------------
const WS = /[ \t\r\n\f\v]+/g; // NBSP volontairement exclu (\s le mangerait)

function jsxText(value) {
  // Collapse des blancs ASCII (sémantique HTML), NBSP préservé.
  let t = value.replace(WS, " ");
  if (!t.trim()) return null;
  const needsExpr = /[{<>}]/.test(t) || t.startsWith(" ") || t.endsWith(" ");
  if (!needsExpr) return { raw: true, text: t };
  return { raw: false, text: jsStr(t) };
}

// ---------------------------------------------------------------------------
// Arbre → lignes JSX
// ---------------------------------------------------------------------------
// Attributs dont React exige un nombre — « 8 » → {8}
const NUMERIC_ATTRS = new Set(["maxlength", "minlength", "size", "cols", "rows", "span", "colspan", "rowspan", "start"]);

const BOGUS_ATTRS = new Set(["main"]); // artefacts de balises cassées dans l'export Stitch

function attrList(el) {
  const out = [];
  const seen = new Set();
  const altAttr = el.attrs.find((a) => a.name === "alt");
  for (const { name, value } of el.attrs) {
    if (/^on[a-z]+$/i.test(name)) continue;
    if (name === "srcdoc" || name === "srcset") continue;
    if (name === "selected" && el.tagName === "option") continue; // via select[defaultValue]
    // Noms d'attributs invalides en JSX (ex. « class< » issu d'une balise cassée de la source)
    if (!/^[a-zA-Z_:][a-zA-Z0-9:._-]*$/.test(name)) continue;
    let n = ATTR_MAP[name] ?? name;
    if (BOGUS_ATTRS.has(n)) continue;
    if (n.includes("-") && !n.startsWith("data-") && !n.startsWith("aria-")) {
      n = n.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
    }
    if (seen.has(n)) continue;
    let v = value;
    switch (name) {
      case "style": {
        const s = styleToJsxAttr(v);
        if (s) { out.push(`style=${s}`); seen.add("style"); }
        continue;
      }
      case "alt": v = cleanAlt(v); break;
      case "src": v = mapImageSrc(v, altAttr ? altAttr.value : ""); break;
      case "value":
        if (el.tagName === "input" || el.tagName === "textarea") n = "defaultValue";
        break;
      case "checked": n = "defaultChecked"; break;
    }
    if (BOOLEAN_ATTRS.has(name) && v === "") { out.push(n); seen.add(n); continue; }
    if (NUMERIC_ATTRS.has(name) && /^\d+$/.test(v)) { out.push(`${n}={${v}}`); seen.add(n); continue; }
    out.push(emitAttr(n, v));
    seen.add(n);
  }
  return out;
}

function emitAttr(name, value) {
  if (value.includes("\n") || value.includes('"')) return `${name}=${jsStr(value)}`;
  return `${name}="${value}"`;
}

function textOf(node) {
  if (node.nodeName === "#text") return node.value;
  if (node.childNodes) return node.childNodes.map(textOf).join("");
  return "";
}

function selectDefaultValue(el) {
  for (const child of el.childNodes || []) {
    if (child.nodeName !== "option") continue;
    if (child.attrs.some((a) => a.name === "selected")) {
      const v = child.attrs.find((a) => a.name === "value");
      return v ? v.value : textOf(child).trim();
    }
  }
  return null;
}

// Ajustement de casse des balises SVG (table standard HTML5) — certains exports
// Stitch les écrivent en minuscules (ex. « fedropshadow ») et React exige la casse exacte.
const SVG_TAG_ADJUST = {
  altglyph: "altGlyph", altglyphdef: "altGlyphDef", altglyphitem: "altGlyphItem",
  animatecolor: "animateColor", animatemotion: "animateMotion", animatetransform: "animateTransform",
  clippath: "clipPath", feblend: "feBlend", fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer", fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix", fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap", fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow", feflood: "feFlood", fefunca: "feFuncA", fefuncb: "feFuncB",
  fefuncg: "feFuncG", fefuncr: "feFuncR", fegaussianblur: "feGaussianBlur", feimage: "feImage",
  femerge: "feMerge", femergenode: "feMergeNode", femorphology: "feMorphology",
  feoffset: "feOffset", fepointlight: "fePointLight", fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight", fetile: "feTile", feturbulence: "feTurbulence",
  foreignobject: "foreignObject", glyphref: "glyphRef", lineargradient: "linearGradient",
  radialgradient: "radialGradient", textpath: "textPath",
};

function emitNode(node, indent, siblings, index, lines) {
  const pad = "  ".repeat(indent);
  if (node.nodeName === "#comment" || node.nodeName === "#documentType") return;
  if (node.nodeName === "#text") {
    // Blancs purs : un espace HTML entre deux éléments inline doit survivre au JSX.
    const collapsed = node.value.replace(WS, " ");
    if (!collapsed.trim()) {
      const prev = siblings[index - 1];
      const next = siblings[index + 1];
      const inlineBetween =
        prev && prev.tagName && INLINE_ELEMENTS.has(prev.tagName) &&
        next && next.tagName && INLINE_ELEMENTS.has(next.tagName);
      if (inlineBetween) lines.push(`${pad}{" "}`);
      return;
    }
    const t = jsxText(node.value);
    if (!t) return;
    lines.push(t.raw ? `${pad}${t.text}` : `${pad}{${t.text}}`);
    return;
  }
  // Balises de <head> égarées dans le corps (artefacts d'export) : sans objet en JSX
  if (["script", "style", "meta", "link", "title"].includes(node.nodeName)) return;
  if (!node.tagName) return;

  const tag = SVG_TAG_ADJUST[node.tagName] ?? node.tagName;

  // Cas spéciaux
  if (tag === "textarea") {
    const attrs = attrList(node).filter((a) => !a.startsWith("defaultValue"));
    const valueAttr = node.attrs.find((a) => a.name === "value");
    const dv = valueAttr ? valueAttr.value : textOf(node);
    const all = [...attrs, `defaultValue=${jsStr(dv)}`];
    lines.push(`${pad}<${tag} ${all.join(" ")} />`);
    return;
  }
  if (tag === "select") {
    const attrs = attrList(node);
    const dv = selectDefaultValue(node);
    const all = dv != null && !attrs.some((a) => a.startsWith("defaultValue"))
      ? [...attrs, `defaultValue=${jsStr(dv)}`]
      : attrs;
    emitGeneric(node, tag, all, indent, lines, true);
    return;
  }

  emitGeneric(node, tag, attrList(node), indent, lines, VOID_ELEMENTS.has(tag));
}

function emitGeneric(node, tag, attrs, indent, lines, voidOrEmpty) {
  const pad = "  ".repeat(indent);
  const attrStr = attrs.length ? ` ${attrs.join(" ")}` : "";
  const meaningful = (node.childNodes || []).filter(
    (c) => c.nodeName === "#comment" || c.nodeName === "#documentType" ? false : true
  );
  const onlyText = meaningful.length > 0 && meaningful.every((c) => c.nodeName === "#text");
  const textContent = onlyText
    ? meaningful.map((c) => c.value.replace(WS, " ")).join("")
    : null;

  if (voidOrEmpty || meaningful.length === 0) {
    lines.push(`${pad}<${tag}${attrStr} />`);
    return;
  }
  if (onlyText && textContent.trim()) {
    const t = jsxText(textContent);
    const single = `${pad}<${tag}${attrStr}>${t.raw ? t.text : `{${t.text}}`}</${tag}>`;
    if (single.length <= 110 && !single.includes("\n")) { lines.push(single); return; }
  }
  lines.push(`${pad}<${tag}${attrStr}>`);
  for (let i = 0; i < meaningful.length; i++) {
    const child = meaningful[i];
    if (child) emitNode(child, indent + 1, meaningful, i, lines);
  }
  lines.push(`${pad}</${tag}>`);
}

// ---------------------------------------------------------------------------
// Nom de composant — slug → PascalCase valide (les points « x.509 », « Dr. »… sont écartés)
// ---------------------------------------------------------------------------
function pascalFromSlug(slug) {
  const name = slug
    .split(/[_-]+/)
    .filter(Boolean)
    .map((s) => s.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");
  return /^[A-Za-z]/.test(name) ? name : `E${name}`;
}

// ---------------------------------------------------------------------------
// Conversion d'un écran
// ---------------------------------------------------------------------------
function findChild(el, name) {
  return (el?.childNodes || []).find((n) => n.nodeName === name);
}

function convertScreen(slug, srcDir) {
  const html = readFileSync(join(srcDir, "code.html"), "utf8");
  const doc = parse(html);
  const htmlEl = findChild(doc, "html");
  const body = findChild(htmlEl, "body");

  // Les <title> ne sont présents que sur 25 écrans A4 (et génériques) : on dérive
  // un titre lisible et uniforme depuis le slug, plus informatif pour la galerie.
  const titre = slug.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());

  const bodyClass = (body.attrs || []).find((a) => a.name === "class");
  const bodyClasses = bodyClass ? bodyClass.value.replace(WS, " ").trim() : "";

  const meaningful = (body.childNodes || []).filter((c) => c.nodeName !== "#comment" && c.nodeName !== "#documentType");
  const lines = [];
  for (let i = 0; i < meaningful.length; i++) {
    const child = meaningful[i];
    if (child) emitNode(child, 0, meaningful, i, lines);
  }

  const componentName = pascalFromSlug(slug);
  const domaine = domaineDuSlug(slug);

  const out = [];
  out.push("// Écran converti automatiquement depuis design-stitch/stitch_cvav_platform_dioc_se_ci/" + slug + "/code.html");
  out.push("// par scripts/convert-stitch.mjs — NE PAS éditer à la main.");
  out.push(`// Titre : ${titre} — Domaine : ${domaine}`);
  out.push("");
  out.push(`export default function ${componentName}() {`);
  out.push("  return (");
  out.push(`    <div${bodyClasses ? ` className=${jsStr(bodyClasses)}` : ""}>`);
  for (const l of lines) out.push(`  ${l}`);
  out.push("    </div>");
  out.push("  );");
  out.push("}");
  out.push("");

  return { slug, titre, domaine, componentName, code: out.join("\n") };
}

// ---------------------------------------------------------------------------
// Programme principal
// ---------------------------------------------------------------------------
function main() {
  const screens = readdirSync(SRC)
    .map((d) => join(SRC, d))
    .filter((d) => statSync(d).isDirectory() && existsSync(join(d, "code.html")))
    .map((d) => basename(d))
    .sort();
  const selected = only ? screens.filter((s) => only.includes(s)) : screens;
  if (!selected.length) {
    console.error("Aucun écran à convertir.");
    process.exit(1);
  }

  rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });
  const metas = [];
  const parDomaine = new Map();
  const nomsUtilises = new Map(); // garde anti-collision de noms de composants

  for (const slug of selected) {
    const r = convertScreen(slug, join(SRC, slug));
    let componentName = r.componentName;
    if (nomsUtilises.has(componentName)) {
      const n = nomsUtilises.get(componentName) + 1;
      nomsUtilises.set(componentName, n);
      componentName = `${componentName}${n}`;
      console.warn(`⚠ collision de nom : ${componentName} (${slug})`);
    } else {
      nomsUtilises.set(componentName, 1);
    }
    const code = r.code.replace(`function ${r.componentName}()`, `function ${componentName}()`);
    writeFileSync(join(OUT_DIR, `${slug}.tsx`), code);
    metas.push({ ...r, componentName });
    parDomaine.set(r.domaine, (parDomaine.get(r.domaine) ?? 0) + 1);
  }

  // registre.ts — chargeurs paresseux (un import() statique par écran)
  const reg = [];
  reg.push("// Registre des écrans convertis — généré par scripts/convert-stitch.mjs. Ne pas éditer.");
  reg.push('import type { ComponentType } from "react";');
  reg.push("");
  reg.push("export const chargeursEcrans: Record<string, () => Promise<{ default: ComponentType }>> = {");
  for (const m of metas) reg.push(`  ${jsStr(m.slug)}: () => import(${jsStr("./" + m.slug)}),`);
  reg.push("};");
  reg.push("");
  writeFileSync(join(OUT_DIR, "registre.ts"), reg.join("\n"));

  // meta.ts — index documentaire
  const meta = [];
  meta.push("// Index documentaire des écrans — généré par scripts/convert-stitch.mjs. Ne pas éditer.");
  meta.push("");
  meta.push("export type MetaEcran = { slug: string; titre: string; domaine: string };");
  meta.push("");
  meta.push("export const metaEcrans: MetaEcran[] = [");
  for (const m of metas) meta.push(`  { slug: ${jsStr(m.slug)}, titre: ${jsStr(m.titre)}, domaine: ${jsStr(m.domaine)} },`);
  meta.push("];");
  meta.push("");
  writeFileSync(join(OUT_DIR, "meta.ts"), meta.join("\n"));

  // Rapport
  console.log(`✓ ${metas.length} écrans convertis → ${relative(process.cwd(), OUT_DIR)}`);
  for (const [d, n] of [...parDomaine.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(3)}  ${d}`);
  }
  const divers = metas.filter((m) => m.domaine === "Divers");
  if (divers.length) {
    console.log(`\n⚠ ${divers.length} écrans non classés (« Divers ») :`);
    for (const m of divers.slice(0, 40)) console.log(`    ${m.slug}`);
    if (divers.length > 40) console.log(`    … et ${divers.length - 40} autres`);
  }
}

function basename(p) { return p.split(/[\\/]/).pop(); }

main();
