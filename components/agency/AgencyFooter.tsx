'use client';

import Link from 'next/link';

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/apply', label: 'Apply' },
  ],
  resources: [
    { href: '/blogs', label: 'Blog' },
  ],
};

export default function AgencyFooter() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black text-white">KORA</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-4">
              South Africa's leading creator management agency. We don't just manage accounts—we build influencers.
            </p>
            <p className="text-gray-600 text-sm">
              🇿🇦 Based in South Africa
            </p>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Kora. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs">
              Results vary. Individual outcomes depend on effort and commitment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



