import type { MetadataRoute } from 'next'

import { company } from '@/lib/content'

// Emitted as a file at build time. `output: 'export'` has no server to generate it on
// request, and without this Next refuses the build rather than silently shipping a route
// nobody can reach.
export const dynamic = 'force-static'

/**
 * The web app manifest.
 *
 * Not because the site is an installable app — it is five pages of marketing — but because
 * it is what supplies the name, the theme colour and the icons when somebody adds the page
 * to a home screen or shares it into a chat client that reads one.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.product} — ${company.tagline}`,
    short_name: company.product,
    description:
      'Upfront fares, verified drivers, daily driver payouts, and corporate travel with policy and one invoice.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#ff6b00',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
