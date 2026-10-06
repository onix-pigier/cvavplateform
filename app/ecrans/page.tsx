import Link from "next/link";
import { metaEcrans, type MetaEcran } from "@/components/ecrans/meta";
import { v1ScreenSlugs } from "@/components/ecrans/v1";

// Galerie de revue des écrans retenus pour la V1. Les autres conversions
// restent dans le dépôt comme archives de conception.
const parDomaine = new Map<string, MetaEcran[]>();
for (const ecran of metaEcrans.filter((item) => v1ScreenSlugs.has(item.slug))) {
  const liste = parDomaine.get(ecran.domaine) ?? [];
  liste.push(ecran);
  parDomaine.set(ecran.domaine, liste);
}

export default function GalerieEcransPage() {
  return (
    <main className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased">
      <header className="bg-surface-container-lowest border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin py-space-lg flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm text-primary tracking-wide uppercase">
            Atelier UI — revue du périmètre V1
          </span>
          <h1 className="font-display-lg text-display-lg text-primary">Galerie des écrans</h1>
          <p className="text-on-surface-variant">
            {metaEcrans.filter((item) => v1ScreenSlugs.has(item.slug)).length} maquettes retenues. Les autres artefacts sont conservés hors produit.
          </p>
          <nav className="flex gap-space-md text-primary font-label-lg text-label-lg">
            <Link className="hover:underline" href="/">Portail public</Link>
            <Link className="hover:underline" href="/login">Connexion</Link>
          </nav>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-margin py-space-lg flex flex-col gap-space-xl">
        {Array.from(parDomaine.entries()).map(([domaine, ecrans]) => (
          <section key={domaine} className="flex flex-col gap-space-md">
            <div className="flex items-baseline gap-space-sm">
              <h2 className="font-headline-md text-headline-md text-primary">{domaine}</h2>
              <span className="font-label-md text-label-md text-on-surface-variant">
                {ecrans.length} écran{ecrans.length > 1 ? "s" : ""}
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {ecrans.map((ecran) => (
                <li key={ecran.slug}>
                  <Link
                    href={`/ecrans/${ecran.slug}`}
                    className="block bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-space-md shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="block font-title-md text-title-md text-primary">{ecran.titre}</span>
                    <span className="mt-space-xs block font-body-sm text-body-sm text-on-surface-variant break-all">
                      {ecran.slug}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <strong>Archives non activées :</strong> finance avancée, dossier sanitaire complet, camps complexes, NFC/QR de terrain, cartes PVC, archivage canonique, X.509/PAdES et workflows de chancellerie restent hors V1. Les activités, présences, demandes et attestations ne sont promues qu'une fois reliées à leurs APIs et contrôles d'accès.
        </section>
      </div>
    </main>
  );
}
