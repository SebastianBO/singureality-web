import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Site Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-serif text-white tracking-wide">Singureality</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Reflections on the far future of humanity. Exploring the social,
              technological, and existential transformations that await our species
              across millennia and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/essays" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  Essays
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Topics</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Posthuman Futures</li>
              <li className="text-gray-400 text-sm">Cosmic Civilization</li>
              <li className="text-gray-400 text-sm">Digital Consciousness</li>
              <li className="text-gray-400 text-sm">Social Evolution</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Singureality. Contemplating tomorrow.
          </p>
        </div>
      </div>
    </footer>
  )
}
