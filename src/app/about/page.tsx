import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PhotoBand } from "@/components/site/PhotoBand";
import { MapEmbed } from "@/components/site/MapEmbed";

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
    body: "We tell you what your land and timber are actually worth, and what's worth doing — even when the answer is \"wait.\"",
  },
  {
    title: "Hands-on.",
    body: "Perry walks the property, makes the plan, and is on site for the work. You always know who you're dealing with.",
  },
  {
    title: "Long-term.",
    body: "Good forestry plays out over decades. We plan for the woods you'll have in twenty years, not just today.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1320px] md:grid-cols-2">
        <RevealStagger className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-14 md:py-[76px]">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-amber">
            About Forest Resources Inc.
          </div>
          <h1 className="mb-5 font-display text-[34px] font-semibold uppercase leading-[1.05] sm:text-[48px]">
            A local forester who knows Illinois woods.
          </h1>
          <p className="max-w-[460px] text-[18px] leading-relaxed text-bark-soft">
            Forest Resources Inc. is a family-owned forestry business based in
            Shumway, in Effingham County. For over twenty years we&apos;ve helped
            Illinois landowners care for, improve, and profit from their land.
          </p>
        </RevealStagger>
        <Reveal className="relative min-h-[300px] md:min-h-[460px]">
          <Image
            src="/images/perry.jpg"
            alt="Perry Bushue of Forest Resources Inc. in the field"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* TRACK RECORD */}
      <section className="bg-forest text-[#eef0e6]">
        <RevealStagger className="mx-auto grid max-w-[1320px] grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-forest-line px-8 py-[30px] sm:px-10 ${
                i % 2 === 1 ? "border-r-0" : "border-r"
              } ${i === 3 ? "sm:border-r-0" : "sm:border-r"} ${
                i < 2 ? "border-b sm:border-b-0" : ""
              }`}
            >
              <div className="font-display text-[34px] font-bold leading-none sm:text-[40px]">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[13px] font-medium text-sage">
                {stat.label}
              </div>
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* STORY */}
      <RevealStagger className="mx-auto max-w-[820px] px-5 py-[76px] sm:px-8">
        <h2 className="mb-[22px] font-display text-[28px] font-bold sm:text-[34px]">
          Twenty years of doing it right.
        </h2>
        <p className="mb-5 text-[17.5px] leading-[1.75] text-[#42423a]">
          Perry Bushue has spent his career in the woods. Over more than two
          decades, he&apos;s worked every side of forestry in Illinois — planting
          new stands, thinning crowded ones, appraising and selling timber,
          building wildlife habitat, and writing the stewardship plans that tie
          it all together.
        </p>
        <p className="mb-5 text-[17.5px] leading-[1.75] text-[#42423a]">
          That experience adds up to more than 650 stewardship plans and projects
          all across the state, from private family woodlots to several Illinois
          state parks. It&apos;s hands-on work, and Perry does it personally —
          when you hire Forest Resources, you get the forester, not a
          subcontractor.
        </p>
        <p className="text-[17.5px] leading-[1.75] text-[#42423a]">
          The approach is simple: understand what you want from your land, give
          you an honest plan to get there, and do the work right. No upselling,
          no jargon — just good forestry from someone who lives and works in the
          same part of Illinois you do.
        </p>
      </RevealStagger>

      {/* PHOTO BAND — editorial divider */}
      <PhotoBand
        image="/images/logging.jpg"
        alt="A forester felling and limbing hardwood timber in the Illinois woods."
        focus="center 45%"
        eyebrow="Rooted in Illinois"
        quote="We don't just write the plan — we walk the ground, mark the trees, and see the work through."
      />

      {/* APPROACH */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-5 py-[72px] sm:px-8 lg:px-14">
          <h2 className="mb-9 font-display text-[28px] font-bold sm:text-[32px]">
            How we work
          </h2>
          <RevealStagger className="grid gap-7 sm:grid-cols-3">
            {approach.map((item) => (
              <div key={item.title}>
                <div className="mb-2.5 font-display text-[22px] font-bold text-amber">
                  {item.title}
                </div>
                <p className="text-[15.5px] leading-relaxed text-bark-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* SERVICE AREA */}
      <RevealStagger className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-[72px] sm:px-8 md:grid-cols-2 md:gap-[50px] lg:px-14">
        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-amber">
            Where we work
          </div>
          <h2 className="mb-4 font-display text-[28px] font-bold sm:text-[32px]">
            Central &amp; Southern Illinois.
          </h2>
          <p className="mb-4 text-[16.5px] leading-relaxed text-bark-soft">
            Based in Shumway (Effingham County), we travel throughout Central and
            Southern Illinois for projects of every size. If you&apos;re not sure
            whether you&apos;re in our area, just give us a call.
          </p>
          <Link href="/contact" className="text-sm font-bold text-amber">
            Get in touch →
          </Link>
        </div>
        <div className="h-[320px] overflow-hidden rounded-[4px]">
          <MapEmbed zoom={8} />
        </div>
      </RevealStagger>

      {/* CTA */}
      <CtaBand
        heading="Let's talk about your land."
        copy="Free consultation, no pressure. You'll talk to Perry directly."
      />
    </>
  );
}
