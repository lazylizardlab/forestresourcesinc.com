import { Duotone } from "@/components/site/Duotone";

interface PhotoBandProps {
  image: string;
  alt: string;
  quote: string;
  eyebrow?: string;
  /** object-position for the cover crop, e.g. "center 55%". */
  focus?: string;
}

/**
 * Full-bleed photographic divider carrying a pull-quote — an editorial breath
 * between content-heavy sections. The `quote` duotone falls from night on the
 * left, where the type sits, out to gold on the right.
 */
export function PhotoBand({
  image,
  alt,
  quote,
  eyebrow,
  focus = "center",
}: PhotoBandProps) {
  return (
    <Duotone
      tone="quote"
      src={image}
      alt={alt}
      focus={focus}
      sizes="100vw"
      className="min-h-[260px] sm:min-h-[320px]"
    >
      <div className="relative flex min-h-[260px] max-w-[900px] flex-col justify-center px-5 py-14 sm:min-h-[320px] sm:px-8 lg:px-14">
        {eyebrow && (
          <div className="mb-4 font-display text-[11.5px] uppercase tracking-[0.26em] text-gold">
            {eyebrow}
          </div>
        )}
        <blockquote className="font-slab text-[22px] leading-[1.25] text-cream [text-shadow:0_3px_14px_rgba(0,0,0,.45)] sm:text-[28px] lg:text-[32px]">
          {quote}
        </blockquote>
      </div>
    </Duotone>
  );
}
