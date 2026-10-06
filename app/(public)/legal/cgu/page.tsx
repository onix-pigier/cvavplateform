import Link from "next/link";
import { PortalFooter, PortalHeader } from "@/components/portal";

export default function CguPage() {
  return <div className="min-h-screen bg-surface text-on-surface"><PortalHeader /><main className="mx-auto max-w-3xl px-4 py-12 sm:px-8"><Link href="/" className="text-sm font-semibold text-primary hover:underline">← Accueil</Link><h1 className="mt-8 font-headline-lg text-headline-lg text-primary">Conditions générales d’utilisation</h1><div className="mt-6 space-y-6 text-sm leading-6 text-on-surface-variant"><p>La plateforme est un service numérique du Diocèse de Daloa destiné à l’information, à l’administration encadrée et aux workflows CV-AV validés.</p><p>Chaque compte est personnel. Il est interdit de partager ses identifiants, de contourner un périmètre d’accès ou de publier des données concernant un tiers sans autorisation.</p><p>Les informations historiques ou à vérifier sont signalées comme telles et ne valent pas confirmation officielle 2026.</p></div></main><PortalFooter /></div>;
}
