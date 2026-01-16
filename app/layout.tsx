import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Singularity',
  description: 'Reflections on the far future of humanity. Exploring the social, technological, and existential transformations that await our species across millennia.',
  keywords: ['future', 'humanity', 'technology', 'philosophy', 'civilization', 'posthuman', 'far future', 'speculation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
