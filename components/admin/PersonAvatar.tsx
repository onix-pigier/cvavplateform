type PersonAvatarProps = {
  firstName: string;
  lastName: string;
  size?: "sm" | "md" | "lg";
};

/** An honest portrait fallback until an approved person photo is available. */
export function PersonAvatar({ firstName, lastName, size = "md" }: PersonAvatarProps) {
  const initials = `${firstName.trim().charAt(0)}${lastName.trim().charAt(0)}`.toLocaleUpperCase("fr-FR");
  const dimensions = {
    sm: "size-9 text-xs",
    md: "size-11 text-sm",
    lg: "size-20 text-2xl sm:size-24",
  }[size];

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-primary-fixed font-semibold tracking-wide text-primary ${dimensions}`}
    >
      {initials || "?"}
    </span>
  );
}
