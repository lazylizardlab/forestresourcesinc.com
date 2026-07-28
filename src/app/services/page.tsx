import Link from "next/link";
import { Metadata } from "next";
import { RevealStagger } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { Duotone } from "@/components/site/Duotone";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Forestry Services",
  description:
    "Comprehensive forestry and land management services in Central & Southern Illinois. Forest stewardship plans, tree planting, wildlife enhancement, timber appraisals, and more.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative isolate overflow-hidden bg-night-2 px-5 py-14 sm:px-8 sm:py-[56px] lg:px-14">
        <div aria-hidden className="texture-dots-gold absolute inset-0 opacity-[0.09]" />
        <div className="relative mx-auto max-w-[1320px]">
          <div className="mb-5 inline-block rounded-full border-2 border-[rgba(224,163,78,.5)] px-4 py-1.5 font-display text-[11.5px] uppercase tracking-[0.24em] text-gold">
            The full list
          </div>
          <h1 className="mb-4 font-slab text-[36px] uppercase leading-[0.98] text-cream sm:text-[48px] lg:text-[62px]">
            Eight things
            <br />
            we do to woods.
          </h1>
          <p className="max-w-[600px] text-[17px] leading-[1.6] text-dust sm:text-[18px]">
            Planning, planting, improving, harvesting, protecting — the whole
            life of a stand. Not sure which one you need? Number 01 is usually
            the answer.
          </p>
        </div>
      </section>

      {/* THE LIST */}
      <RevealStagger className="mx-auto max-w-[1320px] px-5 pb-14 pt-4 sm:px-8 lg:px-14 lg:pb-[60px]">
        {servicesData.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group grid items-center gap-6 border-b-2 border-dashed border-[rgba(28,21,16,.22)] py-8 sm:py-[34px] lg:grid-cols-[96px_1fr_300px] lg:gap-[30px]"
          >
            {/* Outlined numeral — the design's loudest recurring device. */}
            <div className="font-slab text-[44px] leading-none text-gold [-webkit-text-stroke:2px_var(--color-ink)] sm:text-[56px]">
              {service.n}
            </div>

            <div>
              <h2 className="mb-2.5 font-slab text-[22px] leading-[1.1] transition-colors group-hover:text-rust sm:text-[28px]">
                {service.title}
              </h2>
              <p className="mb-3.5 max-w-[620px] text-[15.5px] leading-[1.65] text-body">
                {service.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-[1.5px] border-ink bg-cream-2 px-3 py-1.5 font-display text-[11.5px] uppercase tracking-[0.12em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Duotone
              tone="row"
              src={service.image}
              alt=""
              sizes="(min-width: 1024px) 300px, 100vw"
              className="order-first aspect-[16/9] rounded-[10px] border-[2.5px] border-ink shadow-[0_5px_0_rgba(28,21,16,.28)] lg:order-none lg:aspect-auto lg:h-[170px]"
            />
          </Link>
        ))}
      </RevealStagger>

      <CtaBand heading="Still not sure where to start?" />
    </>
  );
}
