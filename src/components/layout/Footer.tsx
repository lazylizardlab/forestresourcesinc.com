import Link from "next/link";
import { servicesData } from "@/lib/services-data";

const companyLinks = [
  { name: "About Perry", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const columnLabel =
  "mb-4 font-display text-[11.5px] uppercase tracking-[0.22em] text-dust-6";

export function Footer() {
  // The first five services, matching the design's footer column.
  const serviceLinks = servicesData.slice(0, 5);

  return (
    <footer className="bg-night px-5 pb-7 pt-11 text-dust-2 sm:px-8 sm:pt-[52px] lg:px-14">
      {/* No brand column — the header wordmark is sticky, so the footer is
          purely wayfinding and contact. */}
      <div className="mx-auto grid max-w-[1320px] gap-10 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.2fr]">
        <div>
          <div className={columnLabel}>Services</div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            {serviceLinks.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="transition-colors hover:text-gold"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={columnLabel}>Company</div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-gold"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.facebook.com/forestresources007"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <div className={columnLabel}>Get in touch</div>
          <a
            href="tel:2172591500"
            className="mb-2.5 block font-slab text-[22px] text-gold transition-colors hover:text-gold-hi"
          >
            217-259-1500
          </a>
          <div className="flex flex-col gap-2 text-[14.5px]">
            <a
              href="mailto:perrybushue@forestresourcesinc.com"
              className="break-words transition-colors hover:text-gold"
            >
              perrybushue@forestresourcesinc.com
            </a>
            <span className="text-dust-5">Shumway, IL · Effingham County</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 max-w-[1320px] border-t border-[#2a2113] pt-[18px] text-[12.5px] text-[#5c5039]">
        © {new Date().getFullYear()} Forest Resources Inc.
      </div>
    </footer>
  );
}
