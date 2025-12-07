import type { Metadata } from "next";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";
import { HeroUIProvider } from "@/components/providers/HeroUIProvider";

export const metadata: Metadata = {
  title: "Add $50K+ to Your OnlyFans in 90 Days - Guaranteed | OnlyFans Growth Agency",
  description: "Join 500+ creators who've scaled their OnlyFans with our proven system. Full-service management: content strategy, chatting, paid ads & coaching. Apply for a free strategy call.",
  keywords: "onlyfans management, onlyfans agency, onlyfans growth, scale onlyfans, onlyfans marketing, creator management, content monetization",
  openGraph: {
    title: "Add $50K+ to Your OnlyFans in 90 Days - Guaranteed",
    description: "We help OnlyFans creators scale from $3K to $50K+/month with our complete growth system. See if you qualify for our program.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <HeroUIProvider>
          <FacebookPixel />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
