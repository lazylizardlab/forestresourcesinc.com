"use client";

import Link from "next/link";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  pathname: string;
}

export function MobileNav({ isOpen, onClose, links, pathname }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <motion.div
            className="absolute inset-0 bg-night/95 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 right-0 top-0 flex w-full max-w-sm flex-col border-l-[3px] border-rust bg-night"
          >
            <div className="flex h-[74px] items-center justify-between border-b-[3px] border-rust px-6">
              <div className="flex flex-col gap-[3px]">
                <span className="font-slab text-[15px] leading-none text-parch-2">
                  FOREST RESOURCES
                </span>
                <span className="font-display text-[9px] uppercase tracking-[0.22em] text-dust-5">
                  Timber &amp; Land Management
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gold transition-colors hover:text-gold-hi"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {links.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3.5 font-slab text-3xl uppercase transition-colors ${
                        active ? "text-gold" : "text-parch hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-t border-[#2a2113] p-8"
            >
              <a
                href="tel:2172591500"
                onClick={onClose}
                className="mb-5 block rounded-full bg-rust py-3.5 text-center font-display text-sm font-semibold tracking-[0.07em] text-cream shadow-[0_3px_0_var(--color-rust-deep)]"
              >
                CALL 217-259-1500
              </a>
              <div className="space-y-3.5">
                <a
                  href="mailto:perrybushue@forestresourcesinc.com"
                  className="flex items-center gap-3 text-dust-2 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="shrink-0" />
                  <span className="break-all text-sm">
                    perrybushue@forestresourcesinc.com
                  </span>
                </a>
                <div className="flex items-center gap-3 text-dust-5">
                  <MapPin size={16} className="shrink-0" />
                  <span className="text-sm">Shumway, IL · Effingham County</span>
                </div>
                <div className="flex items-center gap-3 text-dust-5">
                  <Phone size={16} className="shrink-0" />
                  <span className="text-sm">Mon–Fri, 8–5</span>
                </div>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
