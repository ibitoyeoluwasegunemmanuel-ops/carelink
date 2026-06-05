import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'CareLink Africa - Support for Special Needs Families',
  description: 'Connect, Learn, and Support - A comprehensive platform for families and caregivers of children with special needs across Africa.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-neutral-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
