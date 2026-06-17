import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface PhotoBandProps {
  image: string;
  alt: string;
  quote: string;
  eyebrow?: string;
  attribution?: string;
  /** object-position for the cover crop, e.g. "center 40%". */
  focus?: string;
}

/**
 * Full-bleed photographic divider with a deep ink/forest wash and a pull-quote
 * — an editorial breath between content-heavy sections. The wash darkens the
 * left where the quote sits while letting the photo show warm on the right.
 */
export function PhotoBand({
  image,
  alt,
  quote,
  eyebrow,
  attribution,
  focus = "center",
}: PhotoBandProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Photo */}
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        style={{ objectPosition: focus }}
        className="-z-20 object-cover"
      />
      {/* Duotone wash: overall darken + left-to-right gradient for legibility */}
      <div className="absolute inset-0 -z-10 bg-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

      <Reveal className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="max-w-[760px]">
          {eyebrow && (
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-wheat">
              {eyebrow}
            </div>
          )}
          <blockquote className="font-display text-[27px] font-semibold leading-[1.18] text-white sm:text-[38px] lg:text-[44px]">
            {quote}
          </blockquote>
          {attribution && (
            <div className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-sage-soft">
              {attribution}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
