"use client";

import Image from "next/image";
import { useState } from "react";

export function PublicPhoto({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  fit = "cover",
  containBackdrop = false,
  backgroundClassName = "bg-sand",
  placeholderPosition = "bottom",
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 90,
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
  fit?: "cover" | "contain";
  /** Remplit les bandes du mode contain avec la même photo, sans recadrer le sujet principal. */
  containBackdrop?: boolean;
  backgroundClassName?: string;
  placeholderPosition?: "bottom" | "center";
  sizes?: string;
  quality?: number;
  priority?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const available = failedSrc !== src;
  const fitClassName = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`relative isolate overflow-hidden ${backgroundClassName} ${className}`}>
      {available ? (
        <>
          {containBackdrop && fit === "contain" && (
            <Image
              src={src}
              alt=""
              fill
              sizes={sizes}
              quality={quality}
              aria-hidden="true"
              className="object-cover opacity-35"
            />
          )}
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            quality={quality}
            priority={priority}
            onError={() => setFailedSrc(src)}
            className={`${fitClassName} ${containBackdrop && fit === "contain" ? "z-10" : ""} ${imageClassName}`}
          />
        </>
      ) : (
        <div className={`absolute inset-0 flex bg-surface-container-low p-5 sm:p-7 ${placeholderPosition === "center" ? "items-center justify-center" : "items-end"}`} aria-hidden="true">
          <span className="rounded-full border border-primary/15 bg-surface-container-lowest/90 px-3 py-2 text-xs font-semibold text-primary">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
