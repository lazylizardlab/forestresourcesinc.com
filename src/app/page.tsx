import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { Duotone } from "@/components/site/Duotone";
import { StatBar } from "@/components/site/StatBar";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title:
    "Forest Resources Inc. | Forestry & Timber Management Services in Central & Southern Illinois",
  description:
    "Professional forestry services in Shumway, IL serving Central & Southern Illinois. Forest stewardship plans, tree planting, timber appraisals & sales, wildlife enhancement, and CRP management. 20+ years experience, 650+ plans written. Call 217-259-1500.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com",
  },
};

const stats = [
  { value: "20+", label: "Years in the woods" },
  { value: "650+", label: "Stewardship plans written" },
  { value: "100s", label: "Illinois landowners" },
  { value: "State", label: "Parks & public land too" },
];

/**
 * The three self-diagnosis cards. Most callers can't name the service they
 * need but can name the outcome they want, so the entry point is the outcome.
 */
const routes = [
  {
    option: "Option 01",
    head: "Make money off my timber",
    copy: "Find out what's standing out there and what it's worth before anybody cuts it.",
    cta: "Timber appraisals & sales →",
    slug: "timber-appraisals-sales",
    tone: "dark" as const,
  },
  {
    option: "Option 02",
    head: "See more deer & turkey",
    copy: "Food plots, edge feathering, cover and water — habitat work that actually moves game.",
    cta: "Wildlife enhancement →",
    slug: "wildlife-enhancement",
    tone: "dark" as const,
  },
  {
    option: "Option 03",
    head: "Honestly? I have no idea",
    copy: "Perry walks the ground with you and writes down what you've got and what it could be.",
    cta: "Forest stewardship plans →",
    slug: "forest-stewardship-plans",
    tone: "rust" as const,
  },
];

const routeTones = {
  dark: {
    card: "bg-night-2",
    eyebrow: "text-gold",
    copy: "text-dust",
    link: "text-gold",
  },
  rust: {
    card: "bg-rust",
    eyebrow: "text-[#f0c7ba]",
    copy: "text-[#f0d3c9]",
    link: "text-cream",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Duotone
        tone="hero"
        src="/images/logging.jpg"
        alt=""
        focus="center 62%"
        sizes="100vw"
        priority
      >
        {/* Warm key light behind the headline, over the wash. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 480px at 74% 34%,rgba(224,163,78,.3),transparent 72%)",
          }}
        />
        <RevealStagger className="relative mx-auto grid max-w-[1320px] items-center gap-6 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 lg:px-14 lg:py-[92px]">
          <div>
            <h1 className="mb-5 font-slab text-[clamp(40px,7vw,78px)] leading-[0.93] text-cream [text-shadow:0_4px_24px_rgba(0,0,0,.55)]">
              KNOW WHAT
              <br />
              YOU&apos;RE
              <br />
              <span className="text-gold">STANDING ON.</span>
            </h1>
            <p className="mb-7 max-w-[520px] text-[17px] leading-[1.62] text-[#bdb096] text-pretty sm:text-[19px]">
              Most folks inherit forty acres of timber and no idea what to do
              with it. That&apos;s our favorite phone call. Twenty years of
              Illinois woods, 650 stewardship plans, one forester who actually
              shows up.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/services"
                className="rounded-md bg-rust px-7 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.07em] text-cream shadow-[0_4px_0_var(--color-rust-deep)] transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-rust-hi sm:text-base"
              >
                Figure out what I need →
              </Link>
              <a
                href="tel:2172591500"
                className="rounded-md border-[2.5px] border-gold px-7 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.07em] text-gold transition-colors hover:bg-gold hover:text-ink sm:text-base"
              >
                Call 217-259-1500
              </a>
            </div>
          </div>
          {/* Sits beside the headline on desktop. Below md the grid collapses
              to one column and it moves above the headline at badge size.
              Centered only on phones: a circular seal has no true left edge,
              so at narrow widths it reads as orphaned against the dead space
              to its right. Past sm there's enough canvas that a centered mark
              instead floats away from the left-aligned copy, so it anchors
              back to the shared left edge. */}
          <Image
            src="/logo.png"
            alt="Forest Resources Inc."
            width={358}
            height={358}
            priority
            className="order-first mx-auto h-auto w-[175px] drop-shadow-[0_16px_40px_rgba(0,0,0,.75)] sm:mx-0 md:order-none md:w-[32vw] md:max-w-[358px]"
          />
        </RevealStagger>
      </Duotone>

      <StatBar stats={stats} className="border-b-4 border-rust" />

      {/* SELF-DIAGNOSIS — "what do you want out of it?" */}
      <section className="texture-dots-ink bg-cream-2 px-5 py-14 sm:px-8 sm:py-[60px] lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="mb-8 text-center">
            <div className="mb-3 font-display text-xs uppercase tracking-[0.26em] text-rust-dark">
              Start here
            </div>
            <h2 className="mb-2.5 font-slab text-[28px] uppercase leading-[1.05] sm:text-[40px]">
              What do you want out of it?
            </h2>
            <p className="text-[16.5px] text-body">
              Pick the one that sounds like you. We&apos;ll take you to the right
              service — free, no pressure.
            </p>
          </Reveal>
          <RevealStagger className="grid gap-5 md:grid-cols-3">
            {routes.map((route) => {
              const tone = routeTones[route.tone];
              return (
                <Link
                  key={route.option}
                  href={`/services/${route.slug}`}
                  className={`block rounded-[14px] border-[3px] border-night px-6 pb-6 pt-7 shadow-[0_6px_0_rgba(28,21,16,.4)] transition-transform duration-150 hover:-translate-y-[3px] ${tone.card}`}
                >
                  <div
                    className={`mb-2.5 font-display text-[11px] uppercase tracking-[0.2em] ${tone.eyebrow}`}
                  >
                    {route.option}
                  </div>
                  <div className="mb-2.5 font-slab text-[21px] leading-[1.15] text-cream sm:text-[23px]">
                    {route.head}
                  </div>
                  <p className={`mb-4 text-[14.5px] leading-[1.6] ${tone.copy}`}>
                    {route.copy}
                  </p>
                  <div
                    className={`font-display text-[13.5px] font-semibold uppercase tracking-[0.09em] ${tone.link}`}
                  >
                    {route.cta}
                  </div>
                </Link>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* EVERYTHING WE DO */}
      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-14 lg:py-[66px]">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-2.5 font-display text-xs uppercase tracking-[0.26em] text-rust">
              Eight ways in
            </div>
            <h2 className="mb-2 font-slab text-[30px] uppercase leading-none sm:text-[44px]">
              Everything we do
            </h2>
            <p className="text-[16.5px] text-body">
              Planning, planting, improving, harvesting, protecting. All of it,
              across Central &amp; Southern Illinois.
            </p>
          </div>
          <Link
            href="/services"
            className="whitespace-nowrap border-b-2 border-rust pb-[3px] font-display text-sm font-semibold uppercase tracking-[0.1em] text-rust transition-colors hover:text-rust-dark"
          >
            All services →
          </Link>
        </Reveal>

        <RevealStagger className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block overflow-hidden rounded-[10px] border-[2.5px] border-night bg-night-2 shadow-[0_5px_0_rgba(28,21,16,.32)] transition-transform duration-150 hover:-translate-y-1"
            >
              <Duotone
                tone="card"
                src={service.image}
                alt=""
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="h-28"
              />
              <div className="px-4 pb-[18px] pt-4">
                <div className="mb-1.5 font-display text-[11px] tracking-[0.2em] text-gold">
                  {service.n}
                </div>
                <div className="mb-[7px] font-slab text-[16.5px] leading-[1.2] text-cream">
                  {service.title}
                </div>
                <div className="text-[13.5px] leading-[1.55] text-dust-3">
                  {service.blurb}
                </div>
              </div>
            </Link>
          ))}
        </RevealStagger>
      </section>

      {/* PERRY */}
      <section className="grid bg-night-2 md:grid-cols-[.9fr_1.1fr]">
        <Duotone
          tone="figure"
          src="/images/perry.jpg"
          alt="Perry Bushue, owner of Forest Resources Inc., in the field."
          sizes="(min-width: 768px) 45vw, 100vw"
          className="min-h-[280px] md:min-h-[440px]"
        />
        <RevealStagger className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-12 md:py-14 lg:px-14">
          <div className="mb-3.5 font-display text-xs uppercase tracking-[0.26em] text-gold">
            The whole company
          </div>
          <h2 className="mb-5 font-slab text-[30px] uppercase leading-[1.04] text-cream sm:text-[42px]">
            Perry picks up
            <br />
            the phone.
          </h2>
          <p className="mb-4 max-w-[520px] text-[16px] leading-[1.7] text-dust sm:text-[17px]">
            Twenty-plus years planting, thinning, appraising, and selling timber
            for Illinois landowners. More than 650 stewardship plans. Hundreds of
            families, and a few state parks besides.
          </p>
          <p className="mb-6 max-w-[520px] text-[16px] leading-[1.7] text-dust sm:text-[17px]">
            Based in Shumway, Effingham County. When you call, you get Perry —
            not a call center, not a subcontractor.
          </p>
          <Link
            href="/about"
            className="self-start border-b-2 border-gold pb-[3px] font-display text-sm font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:text-gold-hi"
          >
            Read the whole story →
          </Link>
        </RevealStagger>
      </section>

      <CtaBand heading="Ready to talk about your land?" />
    </>
  );
}
