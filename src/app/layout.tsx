import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import '@/design/theme.css'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { company } from '@/lib/content'

// Self-hosted by next/font at build time: no request to Google on page load, no layout
// shift while a webfont arrives, and nothing about the reader sent to a third party.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://orbit.crokta.com'),
  title: {
    default: `${company.product} — ${company.tagline}`,
    template: `%s — ${company.product}`,
  },
  description:
    'Upfront fares that do not change, verified drivers, daily driver payouts and corporate travel your finance team stops chasing. Orbit is built and operated by Crokta Engineering Limited.',
  applicationName: company.product,
  authors: [{ name: company.name }],
  creator: company.name,
  keywords: [
    'ride hailing',
    'book a ride',
    'drive with Orbit',
    'become a driver',
    'corporate travel',
    'business ground transport',
    'Crokta Engineering',
  ],
  openGraph: {
    type: 'website',
    siteName: company.product,
    title: `${company.product} — ${company.tagline}`,
    description:
      'Upfront fares. Verified drivers. Daily payouts. Corporate travel with policy and one invoice. Orbit, by Crokta Engineering Limited.',
    url: 'https://orbit.crokta.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.product} — ${company.tagline}`,
    description: 'Rides, driving and business travel — one platform, by Crokta Engineering Limited.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        {/* First thing in the tab order, hidden until focused. A page this long is
            otherwise a lot of header to tab past on every visit. */}
        <a
          href="#main"
          className="sr-only rounded-pill focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
