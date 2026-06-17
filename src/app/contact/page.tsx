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

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-forest text-white">
        <RevealStagger className="mx-auto max-w-[1320px] px-5 py-15 sm:px-8 lg:px-14">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-wheat">
            Get in touch
          </div>
          <h1 className="mb-3.5 font-display text-[34px] font-semibold uppercase leading-[1.05] sm:text-[48px]">
            Let&apos;s talk about your land.
          </h1>
          <p className="max-w-[560px] text-[18px] leading-relaxed text-sage-soft">
            Free consultation, no pressure. Call Perry directly, or send a note
            and we&apos;ll get back to you.
          </p>
        </RevealStagger>
      </section>

      {/* BODY */}
      <section className="mx-auto grid max-w-[1320px] items-start gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_.9fr] md:gap-14 lg:px-14">
        {/* Form */}
        <Reveal>
          <ContactForm />
        </Reveal>

        {/* Details */}
        <Reveal index={1} className="flex flex-col gap-5">
          <div className="rounded-[6px] bg-paper-soft p-7 sm:p-[30px]">
            <div className="mb-[18px] text-xs font-bold uppercase tracking-[0.1em] text-amber">
              Contact
            </div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#7d7a6c]">
                  Phone
                </div>
                <a
                  href="tel:2172591500"
                  className="font-display text-[24px] font-bold text-forest"
                >
                  217-259-1500
                </a>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#7d7a6c]">
                  Email
                </div>
                <a
                  href="mailto:perrybushue@forestresourcesinc.com"
                  className="break-words text-[16px] font-semibold text-forest"
                >
                  perrybushue@forestresourcesinc.com
                </a>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#7d7a6c]">
                  Location
                </div>
                <div className="text-[16px] font-semibold text-forest">
                  Shumway, IL · Effingham County
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#7d7a6c]">
                  Follow
                </div>
                <a
                  href="https://www.facebook.com/forestresources007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-semibold text-forest"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[6px] bg-forest p-7 text-[#eef0e6] sm:p-[30px]">
            <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.1em] text-wheat">
              Service area
            </div>
            <p className="mb-3.5 text-[15.5px] leading-relaxed text-sage-soft">
              We work throughout Central &amp; Southern Illinois. Not sure if
              you&apos;re in our area? Just call — we&apos;ll let you know.
            </p>
            <div className="h-[170px] overflow-hidden rounded-[4px]">
              <MapEmbed zoom={7} />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
