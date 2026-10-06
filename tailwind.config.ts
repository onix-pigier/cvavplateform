import type { Config } from "tailwindcss";

/**
 * Configuration Tailwind canonique de CVAV Platform.
 *
 * Fusionnée depuis les 359 maquettes Stitch (`design-stitch/`) : l'union des
 * ~100 configurations tailwind par écran a été calculée script par script
 * (aucun conflit de valeur détecté). Les clés reproduisent exactement les
 * tokens du design system « Ecclesiastical Youth Leadership System »
 * (bleu nuit diocésain #041534, ocre liturgique, surfaces claires,
 * typographies Epilogue / système, grille 8pt).
 *
 * NE PAS renommer les couleurs (primary, on-surface, surface-container...) :
 * les classes des écrans convertis s'y référent telles quelles.
 */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f1eee7",
        "on-tertiary": "#ffffff",
        "surface-container": "#edeef0",
        "tertiary": "#201400",
        "tertiary-container": "#3a2700",
        "on-tertiary-container": "#ba891f",
        "primary-fixed-dim": "#b7c6ee",
        "on-primary-container": "#8392b7",
        "surface-bright": "#f8f9fb",
        "on-secondary-fixed-variant": "#38485d",
        "inverse-surface": "#2e3132",
        "tertiary-fixed-dim": "#f5bd51",
        "error-container": "#ffdad6",
        "on-surface-variant": "#45464e",
        "on-error": "#ffffff",
        primary: "#041534",
        "surface-container-highest": "#e1e2e4",
        "on-primary-fixed-variant": "#384668",
        "on-primary": "#ffffff",
        "surface-variant": "#e1e2e4",
        "surface-container-low": "#f2f4f6",
        secondary: "#4f5f76",
        "on-tertiary-fixed": "#271900",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#c5c6cf",
        "secondary-container": "#d0e1fc",
        "on-secondary": "#ffffff",
        surface: "#f8f9fb",
        "secondary-fixed": "#d3e4fe",
        "primary-fixed": "#d9e2ff",
        "on-error-container": "#93000a",
        outline: "#75777f",
        "surface-tint": "#4f5e81",
        error: "#ba1a1a",
        "secondary-fixed-dim": "#b7c8e2",
        "on-primary-fixed": "#0a1a3a",
        "on-surface": "#191c1e",
        "on-secondary-fixed": "#0b1c30",
        "on-tertiary-fixed-variant": "#5e4200",
        "inverse-primary": "#b7c6ee",
        "on-secondary-container": "#54647a",
        "surface-dim": "#d9dadc",
        background: "#f8f9fb",
        "tertiary-fixed": "#ffdea7",
        "surface-container-high": "#e7e8ea",
        "primary-container": "#1b2a4a",
        "inverse-on-surface": "#f0f1f3",
        "on-background": "#191c1e",
      },
      spacing: {
        gutter: "1.5rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem",
        "margin-mobile": "1rem",
        "space-md": "1rem",
        "space-xl": "2rem",
        "space-lg": "1.5rem",
        margin: "2rem",
        "gutter-mobile": "1rem",
      },
      fontFamily: {
        "display-lg": ["Epilogue"],
        "display-lg-mobile": ["Epilogue"],
        "body-lg": ["ui-sans-serif", "system-ui", "sans-serif"],
        "label-lg": ["ui-sans-serif", "system-ui", "sans-serif"],
        "body-sm": ["ui-sans-serif", "system-ui", "sans-serif"],
        "headline-lg": ["Epilogue"],
        "label-sm": ["ui-sans-serif", "system-ui", "sans-serif"],
        "title-md": ["Epilogue"],
        "headline-lg-mobile": ["Epilogue"],
        "label-md": ["ui-sans-serif", "system-ui", "sans-serif"],
        "headline-md": ["Epilogue"],
        "headline-sm": ["Epilogue"],
        "body-md": ["ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg-mobile": ["30px", { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.02em", fontWeight: "600" }],
        "title-md": ["16px", { lineHeight: "22px", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "500" }],
        "headline-md": ["22px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-sm": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        card: "1.25rem",
        feature: "1.75rem",
        full: "9999px",
      },
      boxShadow: {
        floating: "0 12px 36px rgba(7, 26, 59, 0.16)",
      },
      zIndex: {
        cookie: "60",
      },
    },
  },
  plugins: [],
} satisfies Config;
