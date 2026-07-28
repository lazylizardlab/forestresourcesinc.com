interface MapEmbedProps {
  className?: string;
  /** Adjust framing — About uses a wider view, Contact a tighter panel. */
  zoom?: number;
}

/**
 * Keyless Google Maps embed of the service area, centered on Shumway, IL.
 *
 * Google's default palette — bright green land, blue interstate shields —
 * is the one thing on the site that isn't in the palette, and it stands out
 * badly next to photos that all go through the Duotone treatment. The filter
 * pulls it into the cream/tan family so it reads as art-directed rather than
 * pasted in.
 *
 * Deliberately partial rather than a full duotone: enough saturation survives
 * that the pin stays a warm red (landing near the site's rust) instead of
 * going grey, so it still reads as a marker. A CSS filter is visual only —
 * the map stays fully interactive, and the embed stays keyless.
 */
export function MapEmbed({ className = "", zoom = 8 }: MapEmbedProps) {
  return (
    <iframe
      title="Forest Resources Inc. service area — Central & Southern Illinois"
      src={`https://www.google.com/maps?q=Shumway,+Illinois&z=${zoom}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`block h-full w-full border-0 [filter:saturate(.35)_sepia(.4)_contrast(1.02)_brightness(1.02)] ${className}`}
    />
  );
}
