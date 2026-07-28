interface ArrowProps {
  /** "right" trails a forward link; "left" leads a back link. */
  dir?: "right" | "left";
}

/**
 * The trailing arrow on the site's link and button labels.
 *
 * U+2192 sits on the math axis — around half x-height — so against the
 * all-caps Oswald labels it carries, its ink centers ~0.2em below the caps'
 * and visibly rides low. The nudge is in em so it holds at every size the
 * glyph is used at (13.5px through 16px).
 *
 * aria-hidden because it's decoration: the label already says where the link
 * goes, and screen readers would otherwise announce "right arrow" every time.
 */
export function Arrow({ dir = "right" }: ArrowProps) {
  return (
    <span aria-hidden className="relative top-[-0.2em] inline-block">
      {dir === "left" ? "←" : "→"}
    </span>
  );
}
