import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { OwnContactForm } from "@/components/registration/OwnContactForm";

export const dynamic = "force-dynamic";

export default async function PersonalProfilePage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const person = await prisma.person.findUnique({ where: { id: session.personId }, select: { firstName: true, lastName: true, birthDate: true, phone: true, email: true, addressLine: true, addressCity: true, addressPostalCode: true } });
  if (!person) redirect("/espace");
  return <main className="min-h-screen bg-sand px-4 py-8 text-on-surface sm:px-8"><div className="mx-auto max-w-4xl">
    <Link href="/espace" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">← Retour à mon espace</Link>
    <header className="my-6 rounded-2xl bg-primary p-6 text-on-primary sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-container">Profil personnel</p><h1 className="mt-2 font-display-lg text-display-lg">{person.firstName} {person.lastName}</h1><p className="mt-2 text-sm text-on-primary/80">Date de naissance : {new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "Africa/Abidjan" }).format(person.birthDate)}</p></header>
    <OwnContactForm phone={person.phone} email={person.email} addressLine={person.addressLine} addressCity={person.addressCity} addressPostalCode={person.addressPostalCode} />
    <p className="mt-4 text-xs leading-5 text-on-surface-variant">La photo de profil sera activée lorsque le service de stockage sécurisé des médias sera configuré.</p>
  </div></main>;
}
