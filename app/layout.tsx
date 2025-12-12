import type { Metadata } from "next";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";
import { HeroUIProvider } from "@/components/providers/HeroUIProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Kora | South Africa's Leading Creator Management Agency",
  description: "The agency behind SA's top creators. In-person content direction, brilliant organic strategy, and the fastest deployment in the game. We scaled Lauren from $1K to $500K/month.",
  keywords: "creator management, onlyfans agency, south africa creator agency, content management, influencer agency, kora",
  openGraph: {
    title: "Kora | South Africa's Leading Creator Management Agency",
    description: "We don't just manage accounts. We build influencers. In-person content direction, brilliant strategy, and results like $1K to $500K/month.",
    type: "website",
    siteName: "Kora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kora | SA's #1 Creator Agency",
    description: "In-person content direction. Brilliant strategy. Results like $1K to $500K/month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="antialiased bg-black text-white">
        <HeroUIProvider>
          <FacebookPixel />
          {children}
          <SpeedInsights />
          <Analytics />
        </HeroUIProvider>
      </body>
    </html>
  );
}
