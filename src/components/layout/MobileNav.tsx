"use client";

import Link from "next/link";
import Image from "next/image";
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
            className="absolute inset-0 bg-ink/95 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 right-0 top-0 flex w-full max-w-sm flex-col bg-ink"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Forest Resources Inc."
                  width={28}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-display text-base font-bold text-white">
                  FOREST RESOURCES INC.
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/70 transition-colors hover:text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {links.map((link, i) => {
                const isActive =
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
                      className={`block py-4 font-display text-3xl font-bold uppercase transition-colors ${
                        isActive ? "text-wheat" : "text-white/80 hover:text-white"
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
              className="space-y-4 border-t border-white/10 p-8"
            >
              <a
                href="tel:2172591500"
                className="flex items-center gap-3 text-sage transition-colors hover:text-white"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">217-259-1500</span>
              </a>
              <a
                href="mailto:perrybushue@forestresourcesinc.com"
                className="flex items-center gap-3 text-sage transition-colors hover:text-white"
              >
                <Mail size={16} />
                <span className="break-all text-sm font-medium">
                  perrybushue@forestresourcesinc.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-sage/70">
                <MapPin size={16} />
                <span className="text-sm">Shumway, IL · Effingham County</span>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
