import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface CtaBandProps {
  heading: string;
}

/** Rust closing band with a diagonal hatch. Every page but Contact ends here. */
export function CtaBand({ heading }: CtaBandProps) {
  return (
    <section className="texture-hatch bg-rust">
      <Reveal className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-9 px-5 py-11 sm:px-8 lg:px-14">
        <div>
          <h2 className="mb-2 font-slab text-[26px] uppercase leading-[1.05] text-cream sm:text-[34px]">
            {heading}
          </h2>
          <p className="text-base text-[#f2cdc2]">
            Free consultation. No pressure, no upselling, no jargon.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="rounded-md bg-gold px-[26px] py-4 font-display text-[15.5px] font-semibold uppercase tracking-[0.08em] text-ink shadow-[0_4px_0_var(--color-gold-deep)] transition-colors hover:bg-gold-hi"
          >
            Schedule a walk-through
          </Link>
          <a
            href="tel:2172591500"
            className="font-slab text-2xl text-cream transition-colors hover:text-white sm:text-[26px]"
          >
            217-259-1500
          </a>
        </div>
      </Reveal>
    </section>
  );
}
