import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { name: "Stewardship Plans", href: "/services/forest-stewardship-plans" },
  { name: "Tree Planting", href: "/services/tree-planting" },
  { name: "Wildlife Enhancement", href: "/services/wildlife-enhancement" },
  { name: "Timber Sales", href: "/services/timber-appraisals-sales" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-[#cdd1c2]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-10 px-5 pb-8 pt-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-14">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Forest Resources Inc."
              width={34}
              height={48}
              className="h-12 w-auto"
            />
            <div className="font-display text-lg font-bold text-white">
              FOREST RESOURCES INC.
            </div>
          </div>
          <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-[#9aa28c]">
            Comprehensive forestry services for Central &amp; Southern Illinois.
            Over 20 years of timber and land management.
          </p>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#7e886c]">
            Services
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {serviceLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-wheat"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#7e886c]">
            Company
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-wheat"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#7e886c]">
            Contact
          </div>
          <div className="flex flex-col gap-1.5 text-sm leading-relaxed">
            <span>Perry Bushue</span>
            <span>Shumway, IL</span>
            <a href="tel:2172591500" className="transition-colors hover:text-wheat">
              217-259-1500
            </a>
            <a
              href="mailto:perrybushue@forestresourcesinc.com"
              className="break-words transition-colors hover:text-wheat"
            >
              perrybushue@forestresourcesinc.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-col gap-2 border-t border-ink-line px-5 pb-7 pt-[18px] text-xs text-[#6f7a5b] sm:flex-row sm:justify-between sm:px-8 lg:px-14">
        <span>
          © {new Date().getFullYear()} Forest Resources Inc. — All rights
          reserved.
        </span>
        <span>Serving Central &amp; Southern Illinois</span>
      </div>
    </footer>
  );
}
