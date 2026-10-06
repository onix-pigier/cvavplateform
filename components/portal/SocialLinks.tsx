type SocialLink = { label: string; href?: string; icon: "facebook" | "instagram" | "youtube" | "x" };

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL, icon: "facebook" },
  { label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL, icon: "instagram" },
  { label: "YouTube", href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE_URL, icon: "youtube" },
  { label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X_URL, icon: "x" },
];

function Icon({ name }: { name: SocialLink["icon"] }) {
  if (name === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8.1v3h2.6v8h2.9Z" /></svg>;
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".8" className="fill-current stroke-none" /></svg>;
  if (name === "youtube") return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M21.4 7.1a2.8 2.8 0 0 0-2-2C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.4.5a2.8 2.8 0 0 0-2 2C2.1 8.8 2.1 12 2.1 12s0 3.2.5 4.9a2.8 2.8 0 0 0 2 2c1.7.5 7.4.5 7.4.5s5.7 0 7.4-.5a2.8 2.8 0 0 0 2-2c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="m18.8 3 2.2 0-4.8 5.5 5.6 7.5h-4.4l-3.5-4.6L9.8 16H7.6l4.9-5.7L7.1 3h4.5l3.1 4.1L18.8 3Zm-.8 11.7h1.2L10.7 4.2H9.4L18 14.7Z" /></svg>;
}

export function SocialLinks() {
  return (
    <div className="mt-6 flex gap-2" aria-label="Réseaux sociaux du mouvement">
      {socialLinks.map((social) => social.href ? <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-container text-primary-fixed transition hover:border-tertiary-fixed hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed"><Icon name={social.icon} /></a> : <span key={social.label} aria-label={`${social.label} — lien à configurer`} title={`${social.label} — lien à configurer`} className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-container/60 text-primary-fixed/55"><Icon name={social.icon} /></span>)}
    </div>
  );
}
