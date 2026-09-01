import { Metadata } from "next";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { MapEmbed } from "@/components/site/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a free consultation with Forest Resources Inc. Call Perry Bushue at 217-259-1500 for forestry services in Central & Southern Illinois.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com/contact",
  },
};

const railLabel =
  "mb-1.5 font-display text-[11px] uppercase tracking-[0.16em] text-dust-5";

/** What makes the first call useful. Worth having in front of you. */
const HAVE_HANDY = [
  "County, and roughly how many acres",
  "What you'd like the ground to do for you",
  "Anything already in place — CRP, a plan, a past sale",
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-night px-5 py-14 sm:px-8 sm:py-[54px] lg:px-14">
        <div aria-hidden className="texture-dots-gold absolute inset-0 opacity-10" />
        <RevealStagger className="relative mx-auto max-w-[1320px]">
          <div className="mb-5 inline-block rounded-full border-2 border-[rgba(224,163,78,.5)] px-4 py-1.5 font-display text-[11.5px] uppercase tracking-[0.24em] text-gold">
            Get in touch
          </div>
          <h1 className="mb-4 font-slab text-[34px] uppercase leading-[0.98] text-cream sm:text-[46px] lg:text-[58px]">
            Tell us about
            <br />
            your land.
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.6] text-dust sm:text-[18px]">
            Free consultation, no pressure. Call Perry directly — no phone tree,
            no answering service, no forms to fill out.
          </p>
        </RevealStagger>
      </section>

      {/* BODY */}
      <section className="mx-auto grid max-w-[1320px] items-start gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-11 lg:px-14 lg:pb-[72px]">
        <Reveal>
          <div className="rounded-2xl border-[3px] border-ink bg-cream-3 px-6 py-8 shadow-[0_7px_0_rgba(28,21,16,.28)] sm:px-[34px]">
            <div className="mb-4 font-display text-[11.5px] uppercase tracking-[0.22em] text-rust-dark">
              Give us a call
            </div>

            <a
              href="tel:2172591500"
              className="block font-slab text-[clamp(2rem,8.6vw,4rem)] leading-[1.05] text-ink transition-colors hover:text-rust"
            >
              217-259-1500
            </a>

            <div className="mt-3 font-display text-[14px] uppercase tracking-[0.1em] text-body-soft">
              Perry Bushue · Consulting Forester
            </div>

            <p className="mt-6 text-[16px] leading-[1.65] text-body sm:text-[17px]">
              He&apos;ll ask a few questions about the property and tell you
              straight whether there&apos;s anything worth doing. If there is,
              we&apos;ll set a time to walk it together.
            </p>

            <div className="mt-7 border-t-[2.5px] border-dashed border-[rgba(28,21,16,.28)] pt-6">
              <div className="mb-3.5 font-display text-[11.5px] uppercase tracking-[0.16em] text-body">
                Worth having handy
              </div>
              <ul className="flex flex-col gap-[11px]">
                {HAVE_HANDY.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15.5px] leading-[1.5] text-body"
                  >
                    <span aria-hidden className="font-slab text-rust">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-7 text-[13.5px] text-sand">
              Miss him? He&apos;s in the timber. Leave a message and he&apos;ll
              call back, usually the same day.
            </p>
          </div>
        </Reveal>

        <Reveal index={1} className="flex flex-col gap-[18px]">
          <div className="rounded-2xl border-[3px] border-night bg-night-2 px-6 py-7 text-dust-2 shadow-[0_7px_0_rgba(28,21,16,.28)]">
            <div className="mb-5 font-display text-[11.5px] uppercase tracking-[0.22em] text-gold">
              Other ways to reach us
            </div>
            <div className="flex flex-col gap-[18px]">
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
              Perry answers his own phone. Usually while standing in a field.
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
