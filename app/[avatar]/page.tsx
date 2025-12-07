import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAvatarConfig, getAllAvatarSlugs, parseAvatarSlug } from '@/lib/config';
import LandingPageV2 from '@/components/landing/LandingPageV2';

interface Props {
  params: Promise<{ avatar: string }>;
}

// Generate static params for all avatars (including variants like 2a, 2b, 2c)
export async function generateStaticParams() {
  const slugs = getAllAvatarSlugs();
  return slugs.map((avatar) => ({ avatar }));
}

// Generate metadata for each avatar
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { avatar } = await params;
  const { avatarId, variant } = parseAvatarSlug(avatar);
  const config = getAvatarConfig(avatarId, variant);
  
  if (!config || config.slug === 'default') {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: config.meta.title,
    description: config.meta.description,
    keywords: config.meta.keywords,
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      type: 'website',
    },
  };
}

export default async function AvatarLandingPage({ params }: Props) {
  const { avatar } = await params;
  const { avatarId, variant } = parseAvatarSlug(avatar);
  const config = getAvatarConfig(avatarId, variant);
  
  // If no config found (default returned), show 404
  if (!config || config.slug === 'default') {
    notFound();
  }

  return <LandingPageV2 config={config} />;
}
