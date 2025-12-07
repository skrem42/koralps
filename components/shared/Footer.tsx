import Link from 'next/link';
import { AvatarConfig } from '@/lib/config';

interface FooterProps {
  config: AvatarConfig;
}

export default function Footer({ config }: FooterProps) {
  const { footer } = config;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{footer.brandName}</h3>
            <p className="text-gray-500 text-sm">
              {footer.tagline}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-gray-300 font-semibold text-sm mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#apply" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-gray-300 font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {footer.brandName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
