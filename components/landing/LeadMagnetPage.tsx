'use client';

import { useState, useEffect } from 'react';
import { trackLead } from '@/lib/analytics';
import { LeadMagnetConfig } from '@/lib/config';
import PhoneInput from '@/components/ui/PhoneInput';

interface LeadMagnetPageProps {
  config: LeadMagnetConfig;
}

// Color schemes
const colorSchemes = {
  blue: {
    // Backgrounds
    mainBg: 'bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-900',
    sectionBg: 'bg-slate-950/50',
    footerBg: 'bg-slate-950',
    // Blur elements
    blur1: 'bg-blue-500',
    blur2: 'bg-purple-500',
    // Badge
    badgeBg: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/40',
    badgeText: 'text-green-400',
    badgeStars: 'text-green-400',
    // Accent text
    accentText: 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent',
    // Form
    formShadow: 'shadow-blue-500/10',
    inputFocus: 'focus:border-blue-500 focus:ring-blue-500',
    // Button
    buttonBg: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500',
    buttonText: 'text-white',
    buttonShadow: 'hover:shadow-blue-500/25',
    // Checkmarks
    checkBg: 'bg-gradient-to-r from-green-500 to-emerald-500',
    // Success state
    successBg: 'bg-gradient-to-r from-green-500 to-emerald-500',
    successIcon: 'text-white',
    // Resource placeholder
    resourceBg: 'bg-blue-500/20',
    resourceIcon: 'text-blue-400',
    resourceShadow: 'shadow-blue-500/20',
  },
  amber: {
    // Backgrounds
    mainBg: 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950',
    sectionBg: 'bg-white',
    footerBg: 'bg-slate-950',
    // Blur elements (none for amber)
    blur1: 'hidden',
    blur2: 'hidden',
    // Badge
    badgeBg: 'bg-slate-800/50 border-slate-700',
    badgeText: 'text-gray-300',
    badgeStars: 'text-amber-400',
    // Accent text
    accentText: 'text-amber-400',
    // Form
    formShadow: 'shadow-black/20',
    inputFocus: 'focus:border-amber-500 focus:ring-amber-500',
    // Button
    buttonBg: 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400',
    buttonText: 'text-slate-900',
    buttonShadow: 'hover:shadow-amber-500/25',
    // Checkmarks
    checkBg: 'bg-amber-500',
    // Success state
    successBg: 'bg-gradient-to-r from-amber-500 to-yellow-500',
    successIcon: 'text-slate-900',
    // Resource placeholder
    resourceBg: 'bg-amber-500/20',
    resourceIcon: 'text-amber-400',
    resourceShadow: 'shadow-black/20',
  },
};

export default function LeadMagnetPage({ config }: LeadMagnetPageProps) {
  const { hero, form, whatYouGet, footer } = config;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);

  // Get color scheme (default to blue)
  const scheme = colorSchemes[config.colorScheme || 'blue'];
  const isAmber = config.colorScheme === 'amber';

  // Handle redirect countdown after submission
  useEffect(() => {
    if (isSubmitted && form.successRedirect && redirectCountdown === null) {
      // Start 3-second countdown
      setRedirectCountdown(3);
    }
  }, [isSubmitted, form.successRedirect, redirectCountdown]);

  useEffect(() => {
    if (redirectCountdown !== null && redirectCountdown > 0) {
      const timer = setTimeout(() => {
        setRedirectCountdown(redirectCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (redirectCountdown === 0 && form.successRedirect) {
      window.location.href = form.successRedirect;
    }
  }, [redirectCountdown, form.successRedirect]);

  const handleFieldChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const getFieldKey = (field: typeof form.fields[0], index: number): string => {
    if (field.type === 'custom' && field.customKey) {
      return field.customKey;
    }
    // Map field types to database column names
    if (field.type === 'firstName') return 'firstName';
    if (field.type === 'lastName') return 'lastName';
    if (field.type === 'instagram') return 'instagram';
    return field.type;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackLead({
      content_name: config.name,
      content_category: 'Lead Magnet',
    });

    try {
      // Save to Neon database
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: window.location.href,
          leadMagnet: config.slug,
          leadType: 'lead_magnet',
        }),
      });

      // Subscribe to Mailchimp
      await fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          instagram: formData.instagram,
          phone: formData.phone,
          leadMagnet: config.slug,
          tags: [config.slug, 'lead-magnet'],
        }),
      });

      // Also send to webhook if configured
      if (form.webhookUrl) {
        await fetch(form.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: window.location.href,
            leadMagnet: config.slug,
          }),
        });
      }

      // Always show thank you page first (redirect handled by useEffect if configured)
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className={`min-h-screen ${scheme.mainBg}`}>
        <div className="w-full max-w-xl mx-auto px-6 py-32 text-center">
          <div className={`w-20 h-20 ${scheme.successBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <svg className={`w-10 h-10 ${scheme.successIcon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You're In!</h2>
          <p className="text-xl text-gray-300 mb-6">
            {form.successMessage || 'Check your email for instant access!'}
          </p>
          {formData.email && (
            <p className="text-gray-400 mb-4">
              Check your inbox at <span className="text-white">{formData.email}</span>
            </p>
          )}
          {form.successRedirect && redirectCountdown !== null && (
            <p className="text-gray-500 text-sm">
              Redirecting in {redirectCountdown}...
            </p>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen ${scheme.mainBg}`}>
      {/* Background blur elements (blue scheme only) */}
      {!isAmber && (
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${scheme.blur1} rounded-full mix-blend-multiply filter blur-[128px]`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] ${scheme.blur2} rounded-full mix-blend-multiply filter blur-[128px]`}></div>
        </div>
      )}

      {/* Background pattern (amber scheme only) */}
      {isAmber && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}

      {/* Hero Section with Form */}
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
          {/* Trust Badge */}
          {hero.trustBadge && (
            <div className="flex justify-center mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${scheme.badgeBg} rounded-full border`}>
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`${scheme.badgeStars} text-sm`}>★</span>
                  ))}
                </div>
                <span className={`text-xs sm:text-sm ${scheme.badgeText} font-medium tracking-wider uppercase`}>
                  {hero.trustBadge}
                </span>
              </div>
            </div>
          )}

          {/* Main Headline */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 leading-tight ${isAmber ? 'uppercase tracking-tight' : ''}`}
              style={isAmber ? { fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif', letterSpacing: '0.02em' } : undefined}>
            <span className={scheme.accentText}></span>{' '}
            {hero.headline.replace(/^Free Download:\s*/i, '')}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 text-center mx-auto mb-10 sm:mb-16 font-light pb-5">
            {hero.subheadline}
          </p>

          {/* Two Column Layout: Resource Image + Form */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Resource Image */}
            <div className="flex justify-center md:justify-end">
              {hero.resourceImage ? (
                <img 
                  src={hero.resourceImage} 
                  alt="Resource Preview" 
                  className={`max-w-sm sm:max-w-md lg:max-w-lg w-full h-auto rounded-2xl shadow-2xl ${scheme.resourceShadow}`}
                />
              ) : (
                <div className={`max-w-xs sm:max-w-sm w-full aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl ${scheme.resourceShadow} border border-slate-700/50 flex items-center justify-center`}>
                  <div className="text-center p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 ${scheme.resourceBg} rounded-full flex items-center justify-center`}>
                      <svg className={`w-8 h-8 ${scheme.resourceIcon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-sm">Resource Preview</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Form */}
            <div className={`bg-white rounded-2xl shadow-2xl ${scheme.formShadow} p-6 sm:p-8`}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
                {form.headline}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {form.fields.map((field, index) => {
                  const fieldKey = getFieldKey(field, index);
                  const fieldId = `field-${fieldKey}-${index}`;

                  return (
                    <div key={fieldId}>
                      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700 mb-1.5">
                        {field.label}
                        {field.required !== false && <span className="text-red-500 ml-0.5">*</span>}
                      </label>
                      {field.type === 'phone' ? (
                        <PhoneInput
                          id={fieldId}
                          value={formData[fieldKey] || ''}
                          onChange={(value) => handleFieldChange(fieldKey, value)}
                          required={field.required !== false}
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <input
                          type={field.type === 'email' ? 'email' : 'text'}
                          id={fieldId}
                          required={field.required !== false}
                          value={formData[fieldKey] || ''}
                          onChange={(e) => handleFieldChange(fieldKey, e.target.value)}
                          className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none ${scheme.inputFocus} transition-colors`}
                          placeholder={field.placeholder || (field.type === 'instagram' ? '@yourhandle' : '')}
                        />
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 mt-4 text-lg font-bold ${scheme.buttonBg} ${scheme.buttonText} rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl ${scheme.buttonShadow} ${isAmber ? 'uppercase tracking-wide' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : form.submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className={`relative py-16 sm:py-24 ${scheme.sectionBg}`}>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 ${isAmber ? 'text-slate-900 uppercase tracking-tight' : 'text-white'}`}
              style={isAmber ? { fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' } : undefined}>
            {whatYouGet.headline}
          </h2>

          {whatYouGet.intro && (
            <p className={`text-lg text-center max-w-2xl mx-auto mb-10 ${isAmber ? 'text-slate-600' : 'text-gray-400'}`}>
              {whatYouGet.intro}
            </p>
          )}

          <ul className="space-y-4 sm:space-y-5">
            {whatYouGet.items.map((item, index) => (
              <li key={index} className={`flex items-start gap-4 ${isAmber ? '' : 'bg-slate-800/30 rounded-lg p-4'}`}>
                <div className={`flex-shrink-0 w-6 h-6 ${isAmber ? '' : 'rounded-full'} ${scheme.checkBg} flex items-center justify-center mt-0.5`}>
                  <svg className={`w-${isAmber ? '6' : '4'} h-${isAmber ? '6' : '4'} ${isAmber ? 'text-amber-500' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className={`font-${isAmber ? 'bold' : 'semibold'} ${isAmber ? 'text-slate-900' : 'text-white'}`}>{item.title}:</span>{' '}
                  <span className={isAmber ? 'text-slate-600' : 'text-gray-400'}>{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-12 ${scheme.footerBg}`}>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className={`${scheme.accentText} font-bold text-xl mb-6 uppercase tracking-wider text-center`}>
            {footer.brandName}
          </p>
          <p className="text-slate-500 text-xs leading-relaxed mx-auto text-center">
            {footer.disclaimer}
          </p>
        </div>
      </footer>
    </main>
  );
}
