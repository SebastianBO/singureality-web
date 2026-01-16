import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-violet-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-serif text-white tracking-wide">Singularity</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              A private technology investment firm focused on artificial intelligence,
              quantum computing, and transformative deep tech shaping the future.
            </p>
            <div className="text-gray-400 text-sm">
              <p>San Francisco, California</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@singularity.vc"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200"
                >
                  contact@singularity.vc
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Singularity. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
