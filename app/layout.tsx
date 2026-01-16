import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Singularity',
  description: 'Singularity is a private technology investment firm focused on artificial intelligence, quantum computing, and transformative deep tech.',
  keywords: ['AI investment', 'technology', 'artificial intelligence', 'quantum computing', 'deep tech', 'venture capital'],
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
