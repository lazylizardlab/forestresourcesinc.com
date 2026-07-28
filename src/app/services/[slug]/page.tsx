import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData, getService } from "@/lib/services-data";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { BenefitsList } from "@/components/services/BenefitsList";
import { CtaBand } from "@/components/site/CtaBand";
import { Duotone } from "@/components/site/Duotone";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Arrow";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const description = `${service.summary} Professional ${service.title.toLowerCase()} in Central & Southern Illinois from Forest Resources Inc. Call 217-259-1500.`;

  return {
    title: service.title,
    description,
    alternates: {
      canonical: `https://www.forestresourcesinc.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Forest Resources Inc.`,
      description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const others = servicesData.filter((s) => s.slug !== service.slug).slice(0, 4);
  const total = String(servicesData.length).padStart(2, "0");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.forestresourcesinc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.forestresourcesinc.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://www.forestresourcesinc.com/services/${service.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.full,
    provider: {
      "@type": "LocalBusiness",
      name: "Forest Resources Inc.",
      url: "https://www.forestresourcesinc.com",
    },
    areaServed: { "@type": "State", name: "Illinois" },
    url: `https://www.forestresourcesinc.com/services/${service.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.steps.map((step) => ({
      "@type": "Question",
      name: step.title,
      acceptedAnswer: { "@type": "Answer", text: step.body },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* BANNER */}
      <Duotone
        tone="banner"
        src={service.image}
        alt=""
        sizes="100vw"
        priority
        className="min-h-[260px] sm:min-h-[340px]"
      >
        <div className="relative mx-auto flex min-h-[260px] max-w-[1320px] flex-col justify-center px-5 py-12 sm:min-h-[340px] sm:px-8 lg:px-14">
          <Link
            href="/services"
            className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-hi"
          >
            <Arrow dir="left" /> All services &nbsp;·&nbsp; Service {service.n} of{" "}
            {total}
          </Link>
          <h1 className="mb-3.5 max-w-[860px] font-slab text-[32px] uppercase leading-[0.98] text-cream [text-shadow:0_3px_14px_rgba(0,0,0,.5)] sm:text-[44px] lg:text-[58px]">
            {service.title}
          </h1>
          <p className="max-w-[660px] text-[17px] text-[#d6cbaf] sm:text-[19px]">
            {service.hook}
          </p>
        </div>
      </Duotone>

      {/* BODY */}
      <div className="mx-auto grid max-w-[1320px] items-start gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1fr_320px] lg:gap-[52px] lg:px-14 lg:pt-14">
        <div>
          <Reveal
            as="p"
            className="mb-10 text-[17px] leading-[1.7] text-body-deep text-pretty sm:text-[19px] sm:mb-11"
          >
            {service.full}
          </Reveal>

          <Reveal
            as="h2"
            className="mb-6 font-slab text-[26px] uppercase leading-[1.05] sm:text-[32px]"
          >
            How it goes
          </Reveal>
          <ProcessTimeline steps={service.steps} />

          {service.feature && (
            <Reveal className="mt-3.5 rounded-[14px] border-[3px] border-night bg-night-2 px-7 py-7 shadow-[0_6px_0_rgba(28,21,16,.3)]">
              <div className="mb-2.5 font-display text-[11px] uppercase tracking-[0.24em] text-gold">
                Worth knowing
              </div>
              <div className="mb-3 font-slab text-[21px] leading-[1.15] text-cream sm:text-[23px]">
                {service.feature.title}
              </div>
              <p className="text-[15.5px] leading-[1.7] text-dust">
                {service.feature.body}
              </p>
            </Reveal>
          )}

          <Reveal
            as="h2"
            className="mb-6 mt-12 font-slab text-[26px] uppercase leading-[1.05] sm:text-[32px] lg:mt-[52px]"
          >
            Why bother
          </Reveal>
          <BenefitsList benefits={service.benefits} />
        </div>

        {/* RAIL */}
        <div className="flex flex-col gap-[18px] lg:sticky lg:top-[96px]">
          <div className="rounded-xl bg-night px-6 py-[26px] text-dust-2 shadow-[0_6px_0_rgba(28,21,16,.3)]">
            <div className="mb-3 font-display text-[11px] uppercase tracking-[0.22em] text-gold">
              Interested?
            </div>
            <div className="mb-3 font-slab text-[22px] leading-[1.15] text-cream">
              Let&apos;s get on the calendar.
            </div>
            <p className="mb-[18px] text-[14.5px] leading-[1.6] text-dust-4">
              Free walk-through of your property. You&apos;ll know more when we
              leave than when we got there.
            </p>
            {/* Carries the service through so the contact form arrives pre-tagged. */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="block rounded-md bg-rust py-3.5 text-center font-display text-sm font-semibold uppercase tracking-[0.08em] text-cream shadow-[0_4px_0_var(--color-rust-deep)] transition-colors hover:bg-rust-hi"
            >
              Ask about this
            </Link>
          </div>

          <div className="rounded-xl border-[2.5px] border-ink bg-cream-2 px-[22px] py-[22px] shadow-[0_5px_0_rgba(28,21,16,.25)]">
            <div className="mb-3.5 font-display text-[11px] uppercase tracking-[0.22em] text-rust-dark">
              Other services
            </div>
            <div className="flex flex-col gap-[11px]">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="flex items-baseline justify-between gap-3 border-b-[1.5px] border-dashed border-[rgba(28,21,16,.28)] pb-[9px] transition-colors hover:text-rust"
                >
                  <span className="font-display text-[15px] tracking-[0.03em]">
                    {other.title}
                  </span>
                  <span className="font-display text-xs text-sand">
                    {other.n}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBand heading="Ready to talk about your land?" />
    </>
  );
}
