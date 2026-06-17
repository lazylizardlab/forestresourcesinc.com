import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { BenefitsList } from "@/components/services/BenefitsList";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  const description = `${service.description} Professional ${service.title.toLowerCase()} services in Central & Southern Illinois from Forest Resources Inc. Call 217-259-1500.`;

  return {
    title: service.title,
    description,
    alternates: {
      canonical: `https://www.forestresourcesinc.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Forest Resources Inc.`,
      description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) notFound();

  // Find related services (next and previous)
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const related = servicesData
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

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
    description: service.fullDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Forest Resources Inc.",
      url: "https://www.forestresourcesinc.com",
    },
    areaServed: {
      "@type": "State",
      name: "Illinois",
    },
    url: `https://www.forestresourcesinc.com/services/${service.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.howItWorks.map((step) => ({
      "@type": "Question",
      name: step.title,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          step.description +
          (step.subItems ? " " + step.subItems.join(". ") : ""),
      },
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

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {service.image ? (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/60 to-forest-950/90" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-forest-900" />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-forest-300 hover:text-white transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft size={16} />
            All Services
          </Link>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold uppercase leading-[1.05] mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-10 md:h-16"
          >
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full Description */}
          <div className="mb-16">
            <p className="text-lg text-stone-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">
              How Does It Work?
            </h2>
            <ProcessTimeline steps={service.howItWorks} />
          </div>

          {/* Special Feature */}
          {service.specialFeature && (
            <div className="mb-16 bg-forest-50 border-l-4 border-forest-600 p-8 rounded-r-2xl">
              <h3 className="text-xl font-bold text-forest-900 mb-3">
                {service.specialFeature.title}
              </h3>
              <p className="text-stone-700 leading-relaxed">
                {service.specialFeature.description}
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">
              Benefits
            </h2>
            <BenefitsList benefits={service.benefits} />
          </div>

          {/* CTA */}
          <div className="py-12 border-t border-stone-200 text-center">
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Interested in {service.title.toLowerCase()}?
            </h3>
            <p className="text-stone-600 mb-8 text-lg">
              Get in touch today to discuss your forestry and land management
              needs.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="group p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-stone-900 mb-2 group-hover:text-forest-700 transition-colors">
                  {rel.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  {rel.description}
                </p>
                <span className="inline-flex items-center text-forest-700 text-sm font-semibold gap-1">
                  View details
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
