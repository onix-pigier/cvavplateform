"use client";

import Image from "next/image";
import { useState } from "react";

export function PublicPhoto({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [available, setAvailable] = useState(true);

  return (
    <div className={`relative isolate overflow-hidden bg-sand ${className}`}>
      {available ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setAvailable(false)}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex items-end bg-surface-container-low p-5 sm:p-7" aria-hidden="true">
          <span className="rounded-full border border-primary/15 bg-surface-container-lowest/90 px-3 py-2 text-xs font-semibold text-primary">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
