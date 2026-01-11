import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Instagram Got Banned. Now What? | Kora',
  description: 'Got banned? Build a ban-proof brand and platform ecosystem so one algorithm can never destroy your business again. Book a free strategy call.',
  keywords: 'instagram ban, account banned, ban proof, creator platform, multi platform strategy',
  openGraph: {
    title: 'Your Instagram Got Banned. Now What?',
    description: 'Build a ban-proof brand and platform ecosystem. Book a free strategy call.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Instagram Got Banned. Now What?',
    description: 'Build a ban-proof brand and platform ecosystem. Book a free strategy call.',
  },
};

export default function BanProofLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

