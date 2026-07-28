import Image from "next/image";

/**
 * The site's photographic treatment: every photo is desaturated, punched for
 * contrast, screened over a colored plate, then multiplied under a gradient.
 * The result is a two-ink press look — gold and either night or moss — that
 * keeps wildly different source photos reading as one set.
 *
 * `tone` picks the plate/gradient pairing. They differ enough per placement
 * (a 112px card thumb needs far more punch than a 340px hero) that they're
 * named rather than parameterized.
 */

interface ToneSpec {
  /** Plate color the photo is screened over. */
  plate: string;
  /** grayscale + contrast baked into the img. */
  filter: string;
  /** Screen opacity — lower means the plate shows through more. */
  opacity: number;
  /** Multiplied gradient laid over the top. */
  overlay: string;
}

const TONES = {
  /** Home hero — the photo sinks almost all the way into the night plate. */
  hero: {
    plate: "#161009",
    filter: "grayscale(1) contrast(1.45) brightness(.82)",
    opacity: 0.44,
    overlay: "linear-gradient(180deg,rgba(15,11,6,.35),rgba(15,11,6,.1) 40%,rgba(15,11,6,.85))",
  },
  /** Home service-card thumbnails — small, so contrast runs hot. */
  card: {
    plate: "#33452a",
    filter: "grayscale(1) contrast(1.3)",
    opacity: 0.8,
    overlay: "linear-gradient(160deg,rgba(224,163,78,.42),rgba(22,16,9,.65))",
  },
  /** Services-index row thumbnails — brightened so they hold on cream. */
  row: {
    plate: "#33452a",
    filter: "grayscale(1) contrast(1.25) brightness(1.08)",
    opacity: 0.86,
    overlay: "linear-gradient(160deg,rgba(224,163,78,.5),rgba(51,69,42,.55))",
  },
  /** The home page's Perry band — cut straight out of the night panel. */
  figure: {
    plate: "#161009",
    filter: "grayscale(1) contrast(1.25)",
    opacity: 0.82,
    overlay: "linear-gradient(150deg,rgba(224,163,78,.35),rgba(22,16,9,.7))",
  },
  /** The about hero portrait — warmer, over moss. */
  portrait: {
    plate: "#33452a",
    filter: "grayscale(1) contrast(1.2)",
    opacity: 0.86,
    overlay: "linear-gradient(150deg,rgba(224,163,78,.38),rgba(22,16,9,.6))",
  },
  /** Service-detail banner — darkest at the left, where the headline sits. */
  banner: {
    plate: "#0f0b06",
    filter: "grayscale(1) contrast(1.3)",
    opacity: 0.62,
    overlay: "linear-gradient(120deg,rgba(15,11,6,.9) 12%,rgba(224,163,78,.28) 100%)",
  },
  /** Pull-quote band — a long left-to-right fall from night to gold. */
  quote: {
    plate: "#0f0b06",
    filter: "grayscale(1) contrast(1.3)",
    opacity: 0.6,
    overlay:
      "linear-gradient(100deg,rgba(15,11,6,.92) 10%,rgba(51,69,42,.5) 70%,rgba(224,163,78,.28) 100%)",
  },
} satisfies Record<string, ToneSpec>;

export type DuotoneTone = keyof typeof TONES;

interface DuotoneProps {
  tone: DuotoneTone;
  src: string;
  /** Empty for purely decorative photos, which most of these are. */
  alt: string;
  sizes: string;
  priority?: boolean;
  /** object-position for the cover crop, e.g. "center 62%". */
  focus?: string;
  /** Sizing/positioning for the wrapper. It must establish a height. */
  className?: string;
  /** Rendered above the wash — glows, scrims, or the content itself. */
  children?: React.ReactNode;
}

export function Duotone({
  tone,
  src,
  alt,
  sizes,
  priority,
  focus = "center",
  className = "",
  children,
}: DuotoneProps) {
  const spec = TONES[tone];

  return (
    // `isolate` keeps the blend modes inside this stacking context — without
    // it the photo would screen against whatever section sits behind it.
    <div
      className={`relative isolate overflow-hidden ${className}`}
      style={{ backgroundColor: spec.plate }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{
          filter: spec.filter,
          mixBlendMode: "screen",
          opacity: spec.opacity,
          objectPosition: focus,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: spec.overlay, mixBlendMode: "multiply" }}
      />
      {children}
    </div>
  );
}
