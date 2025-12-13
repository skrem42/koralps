'use client';

import { useState } from 'react';
import { Button, Input, Textarea } from '@heroui/react';
import PhoneInput from '@/components/ui/PhoneInput';

interface CreatorApplicationProps {
  headline?: string;
  subheadline?: string;
  webhookUrl?: string;
}

export default function CreatorApplication({
  headline = "Ready to Scale?",
  subheadline = "We're selective about who we work with. If you're serious about growth, apply below.",
  webhookUrl,
}: CreatorApplicationProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: '',
    currentRevenue: '',
    about: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to API route
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'agency-website',
          page: '/apply',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-black py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 rounded-2xl p-8 sm:p-12">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Application Received
            </h2>
            <p className="text-gray-400">
              Thanks for applying. If you're a good fit, we'll be in touch within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="bg-black py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Apply Now
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>
        
        {/* Form */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  classNames={{
                    input: 'bg-gray-800 text-white',
                    inputWrapper: 'bg-gray-800 border-gray-700 hover:border-gray-600',
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  classNames={{
                    input: 'bg-gray-800 text-white',
                    inputWrapper: 'bg-gray-800 border-gray-700 hover:border-gray-600',
                  }}
                />
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                classNames={{
                  input: 'bg-gray-800 text-white',
                  inputWrapper: 'bg-gray-800 border-gray-700 hover:border-gray-600',
                }}
              />
            </div>
            
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <PhoneInput
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
              />
            </div>
            
            {/* Instagram */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Instagram Handle *
              </label>
              <Input
                type="text"
                required
                placeholder="@yourhandle"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                classNames={{
                  input: 'bg-gray-800 text-white',
                  inputWrapper: 'bg-gray-800 border-gray-700 hover:border-gray-600',
                }}
              />
            </div>
            
            {/* Current Revenue */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current Monthly Revenue
              </label>
              <select
                value={formData.currentRevenue}
                onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="">Select range...</option>
                <option value="0-1k">$0 - $1,000</option>
                <option value="1k-5k">$1,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k+">$25,000+</option>
              </select>
            </div>
            
            {/* About */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tell us about yourself and your goals
              </label>
              <Textarea
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                placeholder="What's your current situation? What are you looking to achieve?"
                minRows={4}
                classNames={{
                  input: 'bg-gray-800 text-white',
                  inputWrapper: 'bg-gray-800 border-gray-700 hover:border-gray-600',
                }}
              />
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>🔒 100% Confidential</span>
              <span>⚡ Response within 48 hours</span>
              <span>💬 No obligation</span>
            </div>
            
            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-6 text-lg rounded-xl"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

