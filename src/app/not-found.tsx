import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-night-2 px-5 py-20 sm:px-8">
      <div aria-hidden className="texture-dots-gold absolute inset-0 opacity-[0.09]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-5 inline-block rounded-full border-2 border-[rgba(224,163,78,.5)] px-4 py-1.5 font-display text-[11.5px] uppercase tracking-[0.24em] text-gold">
          Off the trail
        </div>
        <h1 className="mb-4 font-slab text-[40px] uppercase leading-[0.98] text-cream sm:text-[58px]">
          Nothing standing
          <br />
          <span className="text-gold">on this one.</span>
        </h1>
        <p className="mb-9 text-[17px] leading-[1.6] text-dust sm:text-[18px]">
          That page doesn&apos;t exist, or it moved. Here&apos;s where most
          people are headed anyway.
        </p>
        <div className="flex flex-col justify-center gap-3.5 sm:flex-row">
          <Button href="/services" variant="primary">
            All services
          </Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
          <Button href="/" variant="outline">
            Back home
          </Button>
        </div>
      </div>
    </section>
  );
}
