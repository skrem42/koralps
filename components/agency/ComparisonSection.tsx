'use client';

interface ComparisonItem {
  title: string;
  points: string[];
  isPositive: boolean;
}

interface ComparisonSectionProps {
  headline?: string;
  subheadline?: string;
  comparisons?: ComparisonItem[];
}

const defaultComparisons: ComparisonItem[] = [
  {
    title: 'Overseas Agencies',
    points: [
      'Remote coaching via video calls',
      'Can\'t direct your content in person',
      'Timezone delays on everything',
      'Generic strategies that don\'t fit SA creators',
      'Weeks to implement changes',
    ],
    isPositive: false,
  },
  {
    title: 'Average Strategy',
    points: [
      '"Post 3x a day and hope"',
      'Copy what\'s trending',
      'No brand positioning',
      'Treat every creator the same',
      'Focus on quantity over quality',
    ],
    isPositive: false,
  },
  {
    title: 'Kora',
    points: [
      'In-person shoots & content direction',
      'Same timezone, instant communication',
      'Brilliant strategy tailored to YOU',
      'Build you into an influencer, not just a creator',
      'Deploy content faster than anyone',
    ],
    isPositive: true,
  },
];

export default function ComparisonSection({
  headline = "Average Strategy vs. Brilliant Strategy",
  subheadline = "There's a reason we're SA's biggest agency. We don't do what everyone else does.",
  comparisons = defaultComparisons,
}: ComparisonSectionProps) {
  return (
    <section className="bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>
        
        {/* Comparison cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 border ${
                comparison.isPositive
                  ? 'bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/30'
                  : 'bg-gray-900/50 border-gray-800'
              }`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl ${comparison.isPositive ? '' : 'grayscale opacity-50'}`}>
                  {comparison.isPositive ? '🏆' : '❌'}
                </span>
                <h3 className={`text-xl font-bold ${
                  comparison.isPositive ? 'text-amber-400' : 'text-gray-400'
                }`}>
                  {comparison.title}
                </h3>
              </div>
              
              {/* Points */}
              <ul className="space-y-3">
                {comparison.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <span className={`mt-0.5 ${
                      comparison.isPositive ? 'text-amber-400' : 'text-gray-600'
                    }`}>
                      {comparison.isPositive ? '✓' : '–'}
                    </span>
                    <span className={
                      comparison.isPositive ? 'text-gray-200' : 'text-gray-500'
                    }>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Highlight badge for Kora */}
              {comparison.isPositive && (
                <div className="mt-6 pt-6 border-t border-amber-500/20">
                  <p className="text-amber-400 font-semibold text-sm">
                    → This is why Lauren hit $500K/month
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
            We don't manage creators remotely.
          </p>
          <p className="text-gray-400 text-lg">
            We're on the ground, in the studio, building your brand with you.
          </p>
        </div>
      </div>
    </section>
  );
}

