import type { Metadata } from "next";
import { alfaSlabOne, oswald, publicSans } from "@/lib/fonts";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forestresourcesinc.com"),
  title: {
    default:
      "Forest Resources Inc. | Timber & Land Management Services in Central & Southern Illinois",
    template: "%s | Forest Resources Inc.",
  },
  description:
    "Professional forestry services in Central & Southern Illinois. Expert forest stewardship plans, tree planting, wildlife enhancement, timber appraisals & sales, and land management. 20+ years experience, 650+ plans written.",
  keywords: [
    "forestry services Illinois",
    "timber management",
    "forest stewardship plans",
    "tree planting",
    "wildlife enhancement",
    "timber appraisals",
    "CRP management",
    "invasive species control",
    "land management",
    "Shumway IL",
    "Effingham County forestry",
  ],
  authors: [{ name: "Forest Resources Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forestresourcesinc.com",
    siteName: "Forest Resources Inc.",
    title: "Forest Resources Inc. | Timber & Land Management Services",
    description:
      "Professional forestry services in Central & Southern Illinois. Expert forest stewardship, tree planting, wildlife enhancement, and timber management. 20+ years experience.",
    images: [{ url: "/images/tree.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Resources Inc. | Timber & Land Management Services",
    description:
      "Professional forestry services in Central & Southern Illinois. Expert forest stewardship, tree planting, wildlife enhancement, and timber management.",
    images: ["/images/tree.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.forestresourcesinc.com/#organization",
  name: "Forest Resources Inc.",
  image: "https://www.forestresourcesinc.com/logo.png",
  description:
    "Professional forestry and land management services in Central & Southern Illinois",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shumway",
    addressRegion: "IL",
    postalCode: "62461",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.1",
    longitude: "-88.7",
  },
  telephone: "+1-217-259-1500",
  email: "perrybushue@forestresourcesinc.com",
  url: "https://www.forestresourcesinc.com",
  sameAs: ["https://www.facebook.com/forestresources007"],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "39.1",
      longitude: "-88.7",
    },
    geoRadius: "160934",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-17:00",
  founder: { "@type": "Person", name: "Perry Bushue" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Forestry Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Forest Stewardship Plans" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Planting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wildlife Enhancement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Food Plots & CRP Seeding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Timber Appraisals & Sales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Forest Stand Improvement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRP Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Invasive Species Control" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alfaSlabOne.variable} ${oswald.variable} ${publicSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* No-JS fallback: reveal-on-scroll content should never stay hidden. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
