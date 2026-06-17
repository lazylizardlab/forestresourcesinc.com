import { Oswald, Public_Sans } from "next/font/google";

// Display / headline face — condensed, rugged. Hero statements set uppercase.
export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Body / UI face — plain, sturdy, very readable.
export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
