import type { Metadata, Viewport } from "next";
import "./globals.css";

// Epilogue est réservée aux titres. Le texte courant utilise la pile système
// pour rester lisible et éviter de charger une police unique partout.
export const metadata: Metadata = {
  title: "CVAV Platform — Diocèse de Daloa",
  description:
    "Système d'information diocésain du mouvement Cœurs Vaillants – Âmes Vaillantes, diocèse de Daloa.",
  icons: { icon: "/assets/cvav-emblem.png", apple: "/assets/cvav-emblem.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
