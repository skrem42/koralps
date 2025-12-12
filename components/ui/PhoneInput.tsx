'use client';

import { useEffect, useState } from 'react';
import { PhoneInput as ReactPhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  id?: string;
  variant?: 'light' | 'dark';
}

export default function PhoneInput({ value, onChange, required, placeholder, id, variant = 'dark' }: PhoneInputProps) {
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Detect user's country on mount
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/country_code/', {
          signal: AbortSignal.timeout(3000),
        });
        const countryCode = await response.text();
        if (countryCode && countryCode.length === 2) {
          setDetectedCountry(countryCode.toLowerCase());
        } else {
          setDetectedCountry('za');
        }
      } catch (error) {
        console.log('Country detection failed, defaulting to ZA');
        setDetectedCountry('za');
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const isDark = variant === 'dark';

  if (isLoading) {
    return (
      <div className={`w-full h-[50px] border rounded-lg animate-pulse ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-slate-50 border-slate-300'
      }`} />
    );
  }

  return (
    <div className="flex w-full">
      <ReactPhoneInput
        defaultCountry={detectedCountry || 'za'}
        value={value}
        onChange={(phone) => onChange(phone)}
        inputProps={{
          id,
          required,
          placeholder: placeholder || 'Phone number',
        }}
        style={{
          // Container styles
          '--react-international-phone-height': '50px',
          '--react-international-phone-background-color': isDark ? '#1f2937' : '#ffffff',
          '--react-international-phone-text-color': isDark ? '#ffffff' : '#0f172a',
          '--react-international-phone-font-size': '16px',
          '--react-international-phone-border-radius': '8px',
          '--react-international-phone-border-color': isDark ? '#374151' : '#cbd5e1',
          '--react-international-phone-disabled-background-color': isDark ? '#111827' : '#f8fafc',
          '--react-international-phone-selected-dropdown-item-background-color': isDark ? '#374151' : '#dbeafe',
          '--react-international-phone-country-selector-background-color-hover': isDark ? '#374151' : '#f1f5f9',
          '--react-international-phone-dropdown-item-background-color-hover': isDark ? '#374151' : '#f8fafc',
          width: '100%',
        } as React.CSSProperties}
      />
    </div>
  );
}
