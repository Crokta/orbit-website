import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import '@/design/theme.css'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { company } from '@/lib/content'
import { SITE_URL, graph, organisationSchema, serviceSchema, websiteSchema } from '@/lib/seo'

// Self-hosted by next/font at build time: no request to Google on page load, no layout
// shift while a webfont arrives, and nothing about the reader sent to a third party.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  // Every relative URL in this metadata — canonicals, OG images — resolves against this.
  // Without it Next emits relative OG URLs, which most crawlers refuse to follow.
  metadataBase: new URL(SITE_URL),

  // The default canonical. Each page overrides it with its own path; a site whose pages
  // all claim the same canonical is a site with one indexed page.
  alternates: { canonical: '/' },
  title: {
    default: `${company.product} — ${company.tagline}`,
    template: `%s — ${company.product}`,
  },
  description:
    'Upfront fares that do not change, verified drivers, daily payouts, and corporate travel your finance team stops chasing. By Crokta Engineering Limited.',
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
    url: SITE_URL,
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.product} — ${company.tagline}`,
    description: 'Rides, driving and business travel — one platform, by Crokta Engineering Limited.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google use a full-length snippet, a large image and the whole video preview.
      // The defaults are conservative and cost click-through for no benefit here.
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // Locale and region. Orbit operates in Nigeria; a search engine that knows this ranks
  // the site for people looking for a ride in Lagos rather than in Manchester.
  category: 'transportation',
  formatDetection: { telephone: true, address: false, email: true },

  // Next infers these from the icon.svg and apple-icon.tsx files, but declaring them
  // makes the set explicit — and the shortcut entry is what a browser reaches for when
  // it wants a favicon and does not read the SVG one.
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en-NG" className={inter.variable}>
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

        {/* The organisation and site graph, emitted once for the whole site. Pages add
            their own nodes; none of them repeats this one, because a crawler that sees
            five slightly different definitions of the same company picks one, and not
            necessarily the one you meant. */}
        <script
          type="application/ld+json"
          // The content is built from typed constants in this repository, never from user
          // input, so there is nothing here for an injection to come from.
          dangerouslySetInnerHTML={{ __html: graph(organisationSchema, websiteSchema, serviceSchema) }}
        />
      </body>
    </html>
  )
}
