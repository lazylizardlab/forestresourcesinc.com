import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-paper py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.13em] text-amber">
          404 Error
        </span>
        <h1 className="mb-4 mt-3 font-display text-4xl font-bold uppercase text-bark md:text-5xl">
          Page Not Found
        </h1>
        <p className="mb-10 text-lg text-bark-soft">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Return Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Services
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
