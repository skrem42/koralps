'use client';

interface Stat {
  value: string;
  label: string;
}

interface ProofBannerProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: '$10M+', label: 'Creator Revenue Generated' },
  { value: '#1', label: 'Agency in South Africa' },
  { value: '50+', label: 'Creators Managed' },
  { value: '2025', label: 'Scaling Creators Now' },
];

export default function ProofBanner({ stats = defaultStats }: ProofBannerProps) {
  return (
    <section className="bg-gray-950 border-y border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



