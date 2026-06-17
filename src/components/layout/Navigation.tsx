"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 flex items-center justify-between border-b border-line bg-white/95 px-5 py-4 backdrop-blur-sm backdrop-saturate-150 transition-shadow duration-300 sm:px-8 lg:px-12 ${
          isScrolled ? "shadow-[0_8px_22px_-14px_rgba(36,40,31,0.55)]" : ""
        }`}
      >
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-dark.png"
            alt="Forest Resources Inc."
            width={31}
            height={44}
            priority
            className="h-11 w-auto -translate-y-1"
          />
          <span className="flex flex-col">
            <span className="whitespace-nowrap font-display text-[15px] font-bold leading-none sm:text-[17px]">
              FOREST RESOURCES INC.
            </span>
            <span className="mt-1 hidden text-[11px] font-medium text-[#7d7a6c] sm:block">
              Timber &amp; Land Management · Shumway, IL
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex gap-6 text-sm font-semibold text-forest">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`pb-0.5 transition-colors hover:text-amber ${
                    isActive ? "border-b-2 border-amber" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <a
            href="tel:2172591500"
            className="rounded-[3px] bg-forest px-[18px] py-[11px] text-sm font-bold text-white transition-[transform,filter] duration-200 hover:-translate-y-px hover:brightness-110"
          >
            Call 217-259-1500
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="p-1.5 text-forest lg:hidden"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
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
