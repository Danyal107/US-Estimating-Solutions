import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'USA Estimating Solutions - Professional Construction Estimating Services',
  description:
    'We provide professional construction estimating services and detailed material takeoff solutions. Bid smarter, price accurately, and win more work.',
  keywords: [
    'construction estimating',
    'material takeoff',
    'cost estimation',
    'construction takeoff',
    'bid estimation',
  ],
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
