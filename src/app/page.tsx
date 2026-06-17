import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

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
  { value: "100s", label: "Illinois landowners served" },
  { value: "State", label: "Parks & public land too" },
];

const services = [
  { n: "01", title: "Forest Stewardship Plans", desc: "Long-term plans built around your land and goals." },
  { n: "02", title: "Tree Planting", desc: "Reforestation with native hardwoods and conifers." },
  { n: "03", title: "Wildlife Enhancement", desc: "Habitat work for deer, turkey, and songbirds." },
  { n: "04", title: "Food Plots & CRP Seeding", desc: "Seeding for wildlife and conservation acres." },
  { n: "05", title: "Timber Appraisals & Sales", desc: "Honest appraisals and sales that protect value." },
  { n: "06", title: "Forest Stand Improvement", desc: "Thinning and TSI for healthier, higher-value stands." },
  { n: "07", title: "CRP Management", desc: "Mowing, burning, and upkeep to stay compliant." },
  { n: "08", title: "Invasive Species Control", desc: "Removing honeysuckle, autumn olive, and more." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1320px] md:grid-cols-[1.05fr_.95fr]">
        <RevealStagger className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-14 md:py-20">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-amber">
            Family-owned · 20+ years · Central &amp; Southern Illinois
          </div>
          <h1 className="mb-[22px] font-display text-[34px] font-semibold uppercase leading-[1.06] tracking-[0.005em] sm:text-[46px]">
            Get more out of your land.
          </h1>
          <p className="mb-8 max-w-[440px] text-[18px] leading-relaxed text-bark-soft sm:text-[19px]">
            From timber sales to tree planting to wildlife habitat — we build a
            straightforward plan for your woods and stick around to do the work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-[3px] bg-forest px-[26px] py-[15px] text-[15px] font-bold text-white transition-[transform,filter] duration-200 hover:-translate-y-px hover:brightness-110"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:2172591500"
              className="rounded-[3px] border-[1.5px] border-forest px-[26px] py-[15px] text-[15px] font-bold text-forest transition-[transform] duration-200 hover:-translate-y-px"
            >
              Call 217-259-1500
            </a>
          </div>
        </RevealStagger>
        <Reveal className="relative min-h-[320px] md:min-h-[520px]">
          <Image
            src="/images/tree.jpg"
            alt="A forester measuring the diameter of a mature hardwood for a timber appraisal."
            fill
            priority
            sizes="(max-width: 768px) 100vw, 48vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-forest text-[#eef0e6]">
        <RevealStagger className="mx-auto grid max-w-[1320px] grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-forest-line px-8 py-7 sm:px-10 ${
                i % 2 === 1 ? "border-r-0" : "border-r"
              } ${i === 3 ? "sm:border-r-0" : "sm:border-r"} ${
                i < 2 ? "border-b sm:border-b-0" : ""
              }`}
            >
              <div className="font-display text-[34px] font-bold leading-none sm:text-[38px]">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[13px] font-medium text-sage">
                {stat.label}
              </div>
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1320px] px-5 py-[76px] sm:px-8 lg:px-14">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 font-display text-[32px] font-bold sm:text-[40px]">
              What we do
            </h2>
            <p className="text-[16px] text-[#5a5a4c]">
              Everything it takes to manage timber and land across Central &amp;
              Southern Illinois.
            </p>
          </div>
          <Link href="/services" className="text-sm font-bold text-amber">
            All services →
          </Link>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.n}
              href="/services"
              className="block rounded-[4px] border border-card-line bg-white px-5 py-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-wheat hover:shadow-[0_14px_28px_-16px_rgba(36,40,31,0.45)]"
            >
              <div className="mb-3 text-xs font-extrabold text-amber">
                {service.n}
              </div>
              <div className="mb-2 font-display text-[19px] font-semibold leading-tight">
                {service.title}
              </div>
              <div className="text-[13.5px] leading-relaxed text-[#6a6a5a]">
                {service.desc}
              </div>
            </Link>
          ))}
        </RevealStagger>
      </section>

      {/* MEET PERRY */}
      <section className="bg-paper-soft">
        <RevealStagger className="mx-auto grid max-w-[1320px] md:grid-cols-[.85fr_1.15fr]">
          <div className="relative min-h-[300px] md:min-h-[460px]">
            <Image
              src="/images/perry.jpg"
              alt="Perry Bushue, owner of Forest Resources Inc."
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 md:px-14 md:py-[72px]">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-amber">
              Meet Perry Bushue
            </div>
            <h2 className="mb-5 font-display text-[30px] font-bold leading-tight sm:text-[36px]">
              Twenty years of doing it right.
            </h2>
            <p className="mb-4 text-[16.5px] leading-relaxed text-bark-soft">
              Perry has spent over two decades in the forestry business —
              planting, thinning, appraising, and selling timber for landowners
              all across Illinois. He&apos;s written more than 650 stewardship
              plans and worked with hundreds of families and several state
              parks.
            </p>
            <p className="mb-6 text-[16.5px] leading-relaxed text-bark-soft">
              Based in Shumway, in Effingham County. When you call, you talk to
              Perry — not a call center.
            </p>
            <Link href="/about" className="text-sm font-bold text-amber">
              More about us →
            </Link>
          </div>
        </RevealStagger>
      </section>

      {/* CTA */}
      <CtaBand
        heading="Ready to talk about your land?"
        copy="Free consultation, no pressure. Give us a call or send a note."
      />
    </>
  );
}
