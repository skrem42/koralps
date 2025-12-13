import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  getAvatarConfig, 
  getAllAvatarSlugs, 
  parseAvatarSlug,
  isLeadMagnetSlug,
  parseLeadMagnetSlug,
  getLeadMagnetConfig,
} from '@/lib/config';
import { getIndexingPolicy, getRobotsContent } from '@/lib/seo';
import LandingPageV2 from '@/components/landing/LandingPageV2';
import LeadMagnetPage from '@/components/landing/LeadMagnetPage';

interface Props {
  params: Promise<{ avatar: string }>;
}

// Generate static params for all avatars and lead magnets (including variants)
export async function generateStaticParams() {
  const slugs = getAllAvatarSlugs();
  return slugs.map((avatar) => ({ avatar }));
}

// Generate metadata for each page (avatar or lead magnet)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { avatar } = await params;
  const policy = getIndexingPolicy(`/${avatar}`);
  
  // Check if this is a lead magnet page
  if (isLeadMagnetSlug(avatar)) {
    const parsed = parseLeadMagnetSlug(avatar);
    if (!parsed) {
      return { title: 'Page Not Found' };
    }
    
    const config = getLeadMagnetConfig(parsed.leadMagnetId, parsed.variant);
    if (!config) {
      return { title: 'Page Not Found' };
    }
    
    return {
      title: config.meta.title,
      description: config.meta.description,
      keywords: config.meta.keywords,
      robots: getRobotsContent(policy),
      alternates: policy.canonical ? { canonical: policy.canonical } : undefined,
      openGraph: {
        title: config.meta.title,
        description: config.meta.description,
        type: 'website',
      },
    };
  }
  
  // Regular avatar page
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
    robots: getRobotsContent(policy),
    alternates: policy.canonical ? { canonical: policy.canonical } : undefined,
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      type: 'website',
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { avatar } = await params;
  
  // Check if this is a lead magnet page (starts with lm-)
  if (isLeadMagnetSlug(avatar)) {
    const parsed = parseLeadMagnetSlug(avatar);
    if (!parsed) {
      notFound();
    }
    
    const config = getLeadMagnetConfig(parsed.leadMagnetId, parsed.variant);
    if (!config) {
      notFound();
    }
    
    return <LeadMagnetPage config={config} />;
  }
  
  // Regular avatar landing page
  const { avatarId, variant } = parseAvatarSlug(avatar);
  const config = getAvatarConfig(avatarId, variant);
  
  // If no config found (default returned), show 404
  if (!config || config.slug === 'default') {
    notFound();
  }

  return <LandingPageV2 config={config} />;
}
