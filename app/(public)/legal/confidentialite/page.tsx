import type { Metadata } from "next";
import { PublicDocumentLayout } from "@/components/portal";

export const metadata: Metadata = { title: "Confidentialité · CV-AV Daloa", description: "Informations de confidentialité du portail CV-AV du Diocèse de Daloa." };

export default function ConfidentialitePage() {
  return (
    <PublicDocumentLayout title="Politique de confidentialité">
      <div className="space-y-8 text-sm leading-7 text-on-surface-variant">
        <p>Le portail CV-AV du Diocèse de Daloa distingue les informations destinées à l’annuaire public des données nécessaires à l’espace personnel et à la gestion du mouvement.</p>
        <section><h2 className="font-title-md text-title-md text-primary">Données de l’espace membre</h2><p className="mt-2">L’accès aux informations est limité selon le rôle et le périmètre attribués au compte. Les coordonnées privées et les données sensibles ne sont pas destinées à l’annuaire public.</p></section>
        <section><h2 className="font-title-md text-title-md text-primary">Formulaire de contact et newsletter</h2><p className="mt-2">Les informations transmises via ces formulaires servent à traiter la demande ou l’abonnement choisi. Le consentement demandé au formulaire est nécessaire à son envoi. Chaque formulaire indique son objet avant soumission.</p></section>
        <section><h2 className="font-title-md text-title-md text-primary">Stockage sur cet appareil</h2><p className="mt-2">Le portail mémorise localement votre choix relatif au bandeau de confidentialité. Aucun outil de publicité ou de mesure d’audience n’est actuellement configuré sur le site public.</p></section>
        <section><h2 className="font-title-md text-title-md text-primary">Photos et autres médias</h2><p className="mt-2">Les images publiées dans l’annuaire doivent être validées par les responsables concernés et accompagnées des autorisations nécessaires, en particulier lorsqu’elles représentent des mineurs. Les moyens de stockage des médias de l’espace membre ne sont pas encore activés.</p></section>
      </div>
    </PublicDocumentLayout>
  );
}
