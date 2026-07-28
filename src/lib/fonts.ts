import { Alfa_Slab_One, Oswald, Public_Sans } from "next/font/google";

// Headline face — a heavy slab serif. Every h1/h2/stat/number is set in this.
export const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  variable: "--font-alfa",
  display: "swap",
  weight: ["400"],
});

// Utility face — condensed. Eyebrows, nav, buttons, labels, tags. Usually
// uppercase with wide tracking.
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
