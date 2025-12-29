import { Metadata } from 'next';
import ThankYouPage from '@/components/landing/ThankYouPage';

export const metadata: Metadata = {
  title: 'Book Your Call | Kora',
  description: 'Your branding framework is on its way. Book a call to see if you qualify for our guarantee.',
  robots: 'noindex, nofollow', // Don't index thank you pages
};

export default function ThankYouBrandingPage() {
  return (
    <ThankYouPage
      headline="Your Playbook Is On Its Way. But First..."
      subheadline="You'll leave your call with a crystal-clear roadmap to scale"
      guarantee={{
        amount: "$10K/month",
        timeframe: "90 days",
        description: "Book a call below. We guarantee it's the best positioning & strategy session you've ever had."
      }}
      calendlyUrl="https://calendly.com/calum-koracreative/30-minute-call-with-kora-team"
      testimonials={[
        {
          name: "Lauren",
          result: "R18K → R9M/month",
          quote: "Complete brand transformation. In-person shoots. US audience targeting. Results in months."
        },
        {
          name: "Sarah M.",
          result: "$3K → $14K/month",
          quote: "My chat conversion went from 4% to 18%. Now I work 2 hours/day on content only."
        },
        {
          name: "Anonymous Creator",
          result: "$0 → $450K/month",
          quote: "Positioned correctly from day one. No more copying trends. Just being me."
        },
        {
          name: "Jessica T.",
          result: "$4K → $13K/month",
          quote: "6 months on Reddit, zero bans. Reddit now drives 45% of my traffic."
        },
        {
          name: "Emma L.",
          result: "R50K → R180K/month",
          quote: "Built anonymous Reddit system. 70% of fans now US-based. Still completely anonymous."
        },
        {
          name: "Maya K.",
          result: "$2K → $12K/month",
          quote: "Stopped depending on Instagram. Multi-platform strategy changed everything."
        },
      ]}
      disclaimer="Individual experiences presented here may not be typical. Their background, education, effort, and application affected their experience. The information shared here are for example purposes and not a guarantee of a rate of return or a specific result. Your results may vary."
    />
  );
}


