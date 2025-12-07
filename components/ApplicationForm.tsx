'use client';

import { useState } from 'react';
import { trackCustomEvent } from '@/lib/analytics';
import { AvatarConfig } from '@/lib/config';

interface ApplicationFormProps {
  config: AvatarConfig;
}

export default function ApplicationForm({ config }: ApplicationFormProps) {
  const { form } = config;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    socialHandle: '',
    revenue: '',
    challenge: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackCustomEvent('Form_Submitted');

    try {
      if (form.webhookUrl) {
        await fetch(form.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: window.location.href,
          }),
        });
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-20 sm:py-28 bg-slate-950">
        <div className="w-full max-w-xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You're In! 🎉</h2>
          <p className="text-xl text-gray-300 mb-6">
            {form.successMessage}
          </p>
          <p className="text-gray-400">
            Check your inbox at <span className="text-white">{formData.email}</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 sm:py-28 bg-slate-950">
      <div className="w-full max-w-lg mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {form.headline}
          </h2>
          <p className="text-gray-400">
            {form.subheadline}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Best phone/WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="socialHandle" className="block text-sm font-medium text-gray-300 mb-2">
              Primary social handle * <span className="text-gray-500 font-normal">— Where should we look to learn about your brand?</span>
            </label>
            <input
              type="text"
              id="socialHandle"
              required
              value={formData.socialHandle}
              onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="@yourhandle"
            />
          </div>

          <div>
            <label htmlFor="revenue" className="block text-sm font-medium text-gray-300 mb-2">
              Current monthly revenue *
            </label>
            <select
              id="revenue"
              required
              value={formData.revenue}
              onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
            >
              <option value="" disabled className="text-gray-500">Select your revenue</option>
              <option value="under-1k">Under $1K</option>
              <option value="1k-3k">$1K - $3K</option>
              <option value="3k-5k">$3K - $5K</option>
              <option value="5k-10k">$5K - $10K</option>
              <option value="10k-plus">$10K+</option>
            </select>
          </div>

          {form.fields.challengeEnabled && (
            <div>
              <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-2">
                {form.fields.challengeLabel} <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="challenge"
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder={form.fields.challengePlaceholder}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : form.submitText}
          </button>
        </form>

        {/* Trust Badges */}
        <div className="mt-8 space-y-2 text-center">
          {form.trustBadges.map((badge, index) => (
            <p key={index} className="text-gray-500 text-sm">
              {badge}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
