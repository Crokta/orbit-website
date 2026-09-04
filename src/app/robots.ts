import type { MetadataRoute } from 'next'

import { absolute } from '@/lib/seo'

// Emitted as a file at build time. `output: 'export'` has no server to generate it on
// request, and without this Next refuses the build rather than silently shipping a route
// nobody can reach.
export const dynamic = 'force-static'

/**
 * robots.txt.
 *
 * Everything is allowed except Next's build output directory, which contains no page a
 * person would ever land on and burns crawl budget when a crawler walks it.
 *
 * No blanket block on AI crawlers. This is a marketing site whose entire purpose is to be
 * found and quoted, and a company that wants to be recommended by an assistant has to let
 * the assistant read it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/_next/'] }],
    sitemap: absolute('/sitemap.xml'),
    host: absolute('/'),
  }
}
