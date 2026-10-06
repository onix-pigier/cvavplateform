import type { Metadata } from "next";
import { PublicDocumentLayout } from "@/components/portal";

export const metadata: Metadata = { title: "Conditions d’utilisation · CV-AV Daloa", robots: { index: false, follow: true } };

export default function CguPage() {
  return <PublicDocumentLayout title="Conditions générales d’utilisation"><div className="space-y-6 text-sm leading-7 text-on-surface-variant"><p>La plateforme est un service numérique du Diocèse de Daloa destiné à l’information, à l’administration encadrée et aux workflows CV-AV validés.</p><p>Chaque compte est personnel. Il est interdit de partager ses identifiants, de contourner un périmètre d’accès ou de publier des données concernant un tiers sans autorisation.</p><p>Les informations historiques ou à vérifier sont signalées comme telles et ne valent pas confirmation officielle actuelle.</p></div></PublicDocumentLayout>;
}
