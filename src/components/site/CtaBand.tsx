import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface CtaBandProps {
  heading: string;
  copy: string;
}

/** Forest-green call-to-action band that closes the Home, Services, and About pages. */
export function CtaBand({ heading, copy }: CtaBandProps) {
  return (
    <section className="bg-forest text-white">
      <Reveal className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-8 px-5 py-[62px] sm:px-8 lg:px-14">
        <div>
          <h2 className="font-display text-[30px] font-bold sm:text-[40px]">
            {heading}
          </h2>
          <p className="mt-2 text-[17px] text-sage-soft">{copy}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="rounded-[3px] bg-gold px-[26px] py-4 text-[15px] font-bold text-[#23271d] transition-[transform,filter] duration-200 hover:-translate-y-px hover:brightness-105"
          >
            Schedule a Consultation
          </Link>
          <a
            href="tel:2172591500"
            className="font-display text-[26px] font-bold text-white"
          >
            217-259-1500
          </a>
        </div>
      </Reveal>
    </section>
  );
}
