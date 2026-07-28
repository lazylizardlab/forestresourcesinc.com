"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function isActiveLink(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 flex h-[74px] items-center justify-between gap-6 border-b-[3px] border-rust bg-night px-5 sm:px-8 lg:px-10">
        {/* Wordmark — set in the slab, with the Oswald descriptor beneath. */}
        <Link href="/" className="flex flex-col gap-[3px]">
          <span className="font-slab text-[15px] leading-none text-parch-2 sm:text-[17px]">
            FOREST RESOURCES
          </span>
          <span className="font-display text-[9px] uppercase tracking-[0.22em] text-dust-5 sm:text-[10px]">
            Timber &amp; Land Management
          </span>
        </Link>

        <div className="flex items-center gap-7">
          <nav className="hidden gap-[26px] font-display text-[13.5px] uppercase tracking-[0.14em] lg:flex">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href, pathname);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-[3px] pb-1 transition-colors ${
                    active
                      ? "border-gold text-gold"
                      : "border-transparent text-dust-2 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <a
            href="tel:2172591500"
            className="hidden rounded-full bg-rust px-5 py-[11px] font-display text-sm font-semibold tracking-[0.07em] text-cream shadow-[0_3px_0_var(--color-rust-deep)] transition-colors hover:bg-rust-hi hover:text-white sm:block"
          >
            CALL 217-259-1500
          </a>

          <button
            className="p-1.5 text-gold lg:hidden"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
