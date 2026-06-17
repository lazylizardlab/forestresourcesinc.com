interface MapEmbedProps {
  className?: string;
  /** Adjust framing — About uses a wider view, Contact a tighter panel. */
  zoom?: number;
}

/**
 * Keyless Google Maps embed of the service area, centered on Shumway, IL.
 * Drops into the "Map — Service area" slots from the design.
 */
export function MapEmbed({ className = "", zoom = 8 }: MapEmbedProps) {
  return (
    <iframe
      title="Forest Resources Inc. service area — Central & Southern Illinois"
      src={`https://www.google.com/maps?q=Shumway,+Illinois&z=${zoom}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`block h-full w-full border-0 ${className}`}
    />
  );
}
