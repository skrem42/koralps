import { defaultAvatarConfig } from '@/lib/config';
import LandingPageV2 from '@/components/landing/LandingPageV2';

export default function Home() {
  return <LandingPageV2 config={defaultAvatarConfig} />;
}
