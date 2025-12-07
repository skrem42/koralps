import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-white font-bold text-xl">
              Kora<span className="text-blue-400">Creators</span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/blogs"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                href="/#apply"
                className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding for fixed nav */}
      <div className="pt-16">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kora Creators. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

