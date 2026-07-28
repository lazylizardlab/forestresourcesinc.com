import Link from "next/link";
import { Metadata } from "next";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PhotoBand } from "@/components/site/PhotoBand";
import { MapEmbed } from "@/components/site/MapEmbed";
import { Duotone } from "@/components/site/Duotone";
import { StatBar } from "@/components/site/StatBar";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Forest Resources Inc. — Perry Bushue, with over 20 years of forestry experience serving Central & Southern Illinois. 650+ stewardship plans written for hundreds of landowners and several state parks.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com/about",
  },
};

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "650+", label: "Stewardship plans written" },
  { value: "100s", label: "Landowners partnered with" },
  { value: "Several", label: "State parks served" },
];

const approach = [
  {
    title: "Honest first.",
    body: "We tell you what your land and timber are actually worth, and what's worth doing — even when the answer is “wait.”",
  },
  {
    title: "Hands-on.",
    body: "Perry walks the property, makes the plan, and is on site for the work. You always know exactly who you're dealing with.",
  },
  {
    title: "Long-term.",
    body: "Good forestry plays out over decades. We plan for the woods you'll have in twenty years, not just the ones you have today.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="grid items-stretch bg-night-2 md:grid-cols-[1.05fr_.95fr]">
        <RevealStagger className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-12 md:py-16 lg:px-14">
          <div className="mb-5 self-start rounded-full border-2 border-[rgba(224,163,78,.5)] px-4 py-1.5 font-display text-[11.5px] uppercase tracking-[0.24em] text-gold">
            About Forest Resources Inc.
          </div>
          <h1 className="mb-5 font-slab text-[34px] uppercase leading-[0.98] text-cream sm:text-[46px] lg:text-[58px]">
            One forester.
            <br />
            Twenty years.
            <br />
            <span className="text-gold">A lot of woods.</span>
          </h1>
          <p className="max-w-[520px] text-[17px] leading-[1.65] text-dust sm:text-[18.5px]">
            Forest Resources Inc. is a family-run forestry business out of
            Shumway, in Effingham County. Since 2006 we&apos;ve been helping
            Illinois landowners understand, improve, and profit from ground they
            often didn&apos;t know what to do with.
          </p>
        </RevealStagger>

        <Duotone
          tone="portrait"
          src="/images/perry.jpg"
          alt="Perry Bushue of Forest Resources Inc. in the field."
          sizes="(min-width: 768px) 48vw, 100vw"
          priority
          className="min-h-[320px] md:min-h-[470px]"
        >
          {/* Name plate, pinned to the photo's bottom-left corner. */}
          <div className="absolute bottom-6 left-6 rounded-[10px] border-[3px] border-ink bg-cream px-[18px] py-3 shadow-[0_5px_0_rgba(28,21,16,.4)]">
            <div className="font-slab text-[17px] leading-[1.1]">
              Perry Bushue
            </div>
            <div className="mt-1 font-display text-[11.5px] uppercase tracking-[0.16em] text-rust-dark">
              Owner &amp; consulting forester
            </div>
          </div>
        </Duotone>
      </section>

      <StatBar stats={stats} className="border-y-4 border-rust" />

      {/* STORY */}
      <RevealStagger className="mx-auto max-w-[880px] px-5 py-14 sm:px-8 lg:py-16">
        <h2 className="mb-6 font-slab text-[28px] uppercase leading-[1.05] sm:text-[36px]">
          Twenty years of doing it right.
        </h2>
        <p className="mb-5 text-[16.5px] leading-[1.78] text-body-deep text-pretty sm:text-[18px]">
          Perry Bushue has spent his career in the woods. Over more than two
          decades he&apos;s worked every side of forestry in Illinois — planting
          new stands, thinning crowded ones, appraising and selling timber,
          building wildlife habitat, and writing the stewardship plans that tie
          it all together.
        </p>
        <p className="mb-5 text-[16.5px] leading-[1.78] text-body-deep text-pretty sm:text-[18px]">
          That adds up to more than 650 stewardship plans and projects all across
          the state, from private family woodlots to several Illinois state
          parks. It&apos;s hands-on work, and Perry does it personally — when you
          hire Forest Resources, you get the forester, not a subcontractor.
        </p>
        <p className="text-[16.5px] leading-[1.78] text-body-deep text-pretty sm:text-[18px]">
          The approach is simple: figure out what you want from your land, give
          you an honest plan to get there, and do the work right. No upselling,
          no jargon — just good forestry from somebody who lives in the same part
          of Illinois you do.
        </p>
      </RevealStagger>

      <PhotoBand
        image="/images/burn.jpg"
        alt="A prescribed burn moving through the understory of an Illinois woodland."
        focus="center 55%"
        eyebrow="Rooted in Illinois"
        quote="“We don't just write the plan. We walk the ground, mark the trees, and see the work through.”"
      />

      {/* HOW WE WORK */}
      <section className="texture-dots-ink bg-cream-2 px-5 py-14 sm:px-8 lg:px-14 lg:py-[60px]">
        <div className="mx-auto max-w-[1320px]">
          <Reveal
            as="h2"
            className="mb-7 font-slab text-[26px] uppercase leading-[1.05] sm:text-[34px]"
          >
            How we work
          </Reveal>
          <RevealStagger className="grid gap-5 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] border-[3px] border-night bg-night-2 px-6 py-7 shadow-[0_6px_0_rgba(28,21,16,.35)]"
              >
                <div className="mb-2.5 font-slab text-[22px] text-gold sm:text-[26px]">
                  {item.title}
                </div>
                <p className="text-[15.5px] leading-[1.65] text-dust">
                  {item.body}
                </p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* SERVICE AREA */}
      <RevealStagger className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-12 lg:px-14 lg:py-16">
        <div>
          <div className="mb-3 font-display text-xs uppercase tracking-[0.26em] text-rust">
            Where we work
          </div>
          <h2 className="mb-4 font-slab text-[28px] uppercase leading-[1.05] sm:text-[36px]">
            Central &amp; Southern
            <br />
            Illinois.
          </h2>
          <p className="mb-5 max-w-[480px] text-[16px] leading-[1.7] text-body sm:text-[17px]">
            Based in Shumway, Effingham County. We travel throughout Central and
            Southern Illinois for projects of every size. Not sure whether
            you&apos;re in our area? Call and ask — the answer is usually yes.
          </p>
          <Link
            href="/contact"
            className="inline-block border-b-2 border-rust pb-[3px] font-display text-sm font-semibold uppercase tracking-[0.1em] text-rust transition-colors hover:text-rust-dark"
          >
            Get in touch <Arrow />
          </Link>
        </div>
        <div className="h-[300px] overflow-hidden rounded-[14px] border-[3px] border-ink shadow-[0_6px_0_rgba(28,21,16,.28)]">
          <MapEmbed zoom={8} />
        </div>
      </RevealStagger>

      <CtaBand heading="Let's talk about your land." />
    </>
  );
}
