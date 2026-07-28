import { Suspense } from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { MapEmbed } from "@/components/site/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a free consultation with Forest Resources Inc. Contact Perry Bushue at 217-259-1500 for forestry services in Central & Southern Illinois.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com/contact",
  },
};

const railLabel =
  "mb-1.5 font-display text-[11px] uppercase tracking-[0.16em] text-dust-5";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-night px-5 py-14 sm:px-8 sm:py-[54px] lg:px-14">
        <div aria-hidden className="texture-dots-gold absolute inset-0 opacity-10" />
        <RevealStagger className="relative mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-10">
          <div>
            <div className="mb-5 inline-block rounded-full border-2 border-[rgba(224,163,78,.5)] px-4 py-1.5 font-display text-[11.5px] uppercase tracking-[0.24em] text-gold">
              Get in touch
            </div>
            <h1 className="mb-4 font-slab text-[34px] uppercase leading-[0.98] text-cream sm:text-[46px] lg:text-[58px]">
              Tell us about
              <br />
              your land.
            </h1>
            <p className="max-w-[560px] text-[17px] leading-[1.6] text-dust sm:text-[18px]">
              Free consultation, no pressure. Call Perry directly, or leave a
              note and he&apos;ll get back to you — usually the same day.
            </p>
          </div>
          <div className="flex-none text-center">
            <Image
              src="/logo.png"
              alt="Forest Resources Inc."
              width={170}
              height={170}
              priority
              className="mx-auto mb-3.5 h-auto w-[130px] drop-shadow-[0_10px_24px_rgba(0,0,0,.6)] sm:w-[170px]"
            />
            <a
              href="tel:2172591500"
              className="block font-slab text-[26px] leading-none text-gold transition-colors hover:text-gold-hi sm:text-[32px]"
            >
              217-259-1500
            </a>
          </div>
        </RevealStagger>
      </section>

      {/* BODY */}
      <section className="mx-auto grid max-w-[1320px] items-start gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-11 lg:px-14 lg:pb-[72px]">
        <Reveal>
          {/* useSearchParams needs a Suspense boundary to prerender. */}
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>

        <Reveal index={1} className="flex flex-col gap-[18px]">
          <div className="rounded-2xl border-[3px] border-night bg-night-2 px-6 py-7 text-dust-2 shadow-[0_7px_0_rgba(28,21,16,.28)]">
            <div className="mb-5 font-display text-[11.5px] uppercase tracking-[0.22em] text-gold">
              Direct line
            </div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <div className={railLabel}>Phone</div>
                <a
                  href="tel:2172591500"
                  className="font-slab text-[24px] leading-none text-cream transition-colors hover:text-gold sm:text-[27px]"
                >
                  217-259-1500
                </a>
              </div>
              <div>
                <div className={railLabel}>Email</div>
                <a
                  href="mailto:perrybushue@forestresourcesinc.com"
                  className="break-words text-[15px] font-semibold transition-colors hover:text-gold"
                >
                  perrybushue@forestresourcesinc.com
                </a>
              </div>
              <div>
                <div className={railLabel}>Where</div>
                <div className="text-[15px] font-semibold">
                  Shumway, IL · Effingham County
                </div>
              </div>
              <div>
                <div className={railLabel}>Follow</div>
                <a
                  href="https://www.facebook.com/forestresources007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-semibold text-gold transition-colors hover:text-gold-hi"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-[3px] border-ink bg-cream-2 px-6 py-[26px] shadow-[0_7px_0_rgba(28,21,16,.24)]">
            <div className="mb-3 font-display text-[11.5px] uppercase tracking-[0.22em] text-rust-dark">
              Service area
            </div>
            <p className="mb-4 text-[15px] leading-[1.6] text-body">
              We work throughout Central &amp; Southern Illinois. Not sure if
              you&apos;re in it? Just call — we&apos;ll tell you straight.
            </p>
            <div className="h-[150px] overflow-hidden rounded-[10px] border-[2.5px] border-ink">
              <MapEmbed zoom={7} />
            </div>
          </div>

          <div className="rounded-2xl bg-night px-6 py-[22px]">
            <div className="text-[14.5px] leading-[1.55] text-dust-4">
              Somebody actually reads these. Usually while standing in a field.
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
