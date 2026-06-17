import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { RevealStagger } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Forestry Services",
  description:
    "Comprehensive forestry and land management services in Central & Southern Illinois. Forest stewardship plans, tree planting, wildlife enhancement, timber appraisals, and more.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com/services",
  },
};

const services = [
  {
    n: "01",
    slug: "forest-stewardship-plans",
    title: "Forest Stewardship Plans",
    body: "A written, long-term roadmap for your property built around your goals — whether that's timber income, wildlife, recreation, or simply healthy woods. Plans can qualify your land for reduced property-tax assessment and cost-share programs.",
    tags: ["Property walk-through", "Tax-program eligibility", "Year-by-year recommendations"],
  },
  {
    n: "02",
    slug: "tree-planting",
    title: "Tree Planting",
    body: "Reforestation and new stand establishment using native Illinois hardwoods and conifers. We handle site prep, species selection, planting, and early survival so your investment takes hold.",
    tags: ["Site preparation", "Native species", "Survival follow-up"],
  },
  {
    n: "03",
    slug: "wildlife-enhancement",
    title: "Wildlife Enhancement",
    body: "Practical habitat improvements that bring more deer, turkey, and songbirds to your land. From edge feathering to mast trees to water sources, we shape your property for the wildlife you want to see.",
    tags: ["Edge & cover work", "Mast trees", "Habitat planning"],
  },
  {
    n: "04",
    slug: "food-plots-crp-seeding",
    title: "Food Plots & CRP Seeding",
    body: "Seeding and food plots for both wildlife and conservation acres. We match seed mixes to your soil and goals, and handle establishment from ground prep to drilling.",
    tags: ["Custom seed mixes", "Ground prep", "CRP-compliant"],
  },
  {
    n: "05",
    slug: "timber-appraisals-sales",
    title: "Timber Appraisals & Sales",
    body: "Know what your timber is worth before you sell. We provide honest appraisals and manage the sale start to finish — marking, bidding, and contracts — so you get fair value and your land is left in good shape.",
    tags: ["Independent appraisal", "Marked & bid", "Contract oversight"],
  },
  {
    n: "06",
    slug: "forest-stand-improvement",
    title: "Forest Stand Improvement",
    body: "Targeted thinning and timber stand improvement (TSI) that removes low-value and competing trees so your best timber grows faster and healthier. Good for both wood value and wildlife.",
    tags: ["Thinning", "Crop-tree release", "TSI"],
  },
  {
    n: "07",
    slug: "crp-management",
    title: "CRP Management",
    body: "Keep your Conservation Reserve Program acres in compliance and in good condition. We handle the required mid-contract management — mowing, prescribed burning, and maintenance — on schedule.",
    tags: ["Mowing", "Prescribed burns", "Compliance upkeep"],
  },
  {
    n: "08",
    slug: "invasive-species-control",
    title: "Invasive Species Control",
    body: "Take back your woods from bush honeysuckle, autumn olive, and other invasives that crowd out native growth. We use targeted cutting and treatment to clear them and keep them from coming back.",
    tags: ["Honeysuckle removal", "Autumn olive", "Follow-up treatment"],
  },
];

/** Pull each card's photo from the canonical service data, keyed by slug. */
const imageBySlug: Record<string, string | undefined> = Object.fromEntries(
  servicesData.map((s) => [s.slug, s.image]),
);

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-forest text-white">
        <RevealStagger className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-14">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-wheat">
            Our Services
          </div>
          <h1 className="mb-4 max-w-[760px] font-display text-[34px] font-semibold uppercase leading-[1.05] sm:text-[48px]">
            Everything it takes to manage timber and land.
          </h1>
          <p className="max-w-[600px] text-[18px] leading-relaxed text-sage-soft">
            Eight core services covering the full life of your woods — planning,
            planting, improving, harvesting, and protecting. All across Central
            &amp; Southern Illinois.
          </p>
        </RevealStagger>
      </section>

      {/* SERVICES LIST */}
      <RevealStagger className="mx-auto max-w-[1100px] px-5 pb-8 pt-5 sm:px-8 lg:px-14">
        {services.map((service, i) => (
          <Link
            key={service.n}
            href={`/services/${service.slug}`}
            className={`group block py-[46px] ${
              i < services.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_clamp(240px,26vw,330px)] lg:items-center lg:gap-11">
              {/* Number + copy */}
              <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-9">
                <div className="w-9 font-display text-[24px] font-bold text-[#cdc3a3] sm:w-[54px] sm:text-[30px]">
                  {service.n}
                </div>
                <div>
                  <h2 className="mb-3 font-display text-[24px] font-bold transition-colors group-hover:text-amber sm:text-[30px]">
                    {service.title}
                  </h2>
                  <p className="mb-[18px] max-w-[680px] text-[16px] leading-relaxed text-bark-soft sm:text-[17px]">
                    {service.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[3px] bg-paper-soft px-[13px] py-1.5 text-[13px] font-semibold text-[#52604a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Photo — wide banner on mobile, right-hand rail on desktop */}
              {imageBySlug[service.slug] && (
                <div className="relative order-first aspect-[16/9] overflow-hidden rounded-[5px] border border-card-line lg:order-none lg:aspect-[4/3]">
                  <Image
                    src={imageBySlug[service.slug]!}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 330px, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </RevealStagger>

      {/* CTA */}
      <CtaBand
        heading="Not sure where to start?"
        copy="Tell us about your land and we'll point you in the right direction — free."
      />
    </>
  );
}
