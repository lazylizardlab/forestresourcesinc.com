"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import type { CSSProperties, ElementType, ReactElement, ReactNode } from "react";

/**
 * Scroll-reveal primitives that mirror the Workhorse design's animation:
 * sections and cards rise + fade as they enter view, card grids cascade with
 * a gentle stagger, and everything respects `prefers-reduced-motion`.
 *
 * The hidden initial state lives in CSS (`[data-reveal]`, see globals.css),
 * so it's applied on first paint with no flash — JS only flips `is-visible`.
 */

const STEP_MS = 70; // delay between staggered siblings
const MAX_MS = 350; // cap so long lists don't drag

const IO_OPTS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -6% 0px",
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Stagger position — multiplies the entrance delay. */
  index?: number;
}

/** Reveals a single element as it scrolls into view. */
export function Reveal({
  children,
  as,
  className,
  style,
  index = 0,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, IO_OPTS);
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{ ...style, transitionDelay: `${Math.min(index * STEP_MS, MAX_MS)}ms` }}
    >
      {children}
    </Tag>
  );
}

interface RevealStaggerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Container whose direct children cascade into view in sequence. Each child is
 * tagged at render time (no flash), and a single observer reveals them with an
 * index-based delay — matching the design's `[data-stagger]` behavior.
 */
export function RevealStagger({
  children,
  as,
  className,
  style,
}: RevealStaggerProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, IO_OPTS);
    Array.from(el.children).forEach((child) => io.observe(child));
    return () => io.disconnect();
  }, []);

  const items = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return child;
    const el = child as ReactElement<{ style?: CSSProperties }>;
    return cloneElement(el, {
      "data-reveal": "",
      style: {
        ...el.props.style,
        transitionDelay: `${Math.min(i * STEP_MS, MAX_MS)}ms`,
      },
    } as Partial<{ style?: CSSProperties }>);
  });

  return (
    <Tag ref={ref} className={className} style={style}>
      {items}
    </Tag>
  );
}
