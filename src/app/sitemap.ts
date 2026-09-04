import type { MetadataRoute } from 'next'

import { ROUTES, absolute } from '@/lib/seo'

// Emitted as a file at build time. `output: 'export'` has no server to generate it on
// request, and without this Next refuses the build rather than silently shipping a route
// nobody can reach.
export const dynamic = 'force-static'

/**
 * The sitemap.
 *
 * `lastModified` is the build time rather than a hand-kept date. It is honest — the page
 * really was last produced then — and it means nobody has to remember to bump a constant,
 * which is the failure mode of every hand-maintained sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map((route) => ({
    url: absolute(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
