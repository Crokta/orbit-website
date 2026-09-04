import type { NextConfig } from 'next'

/**
 * Static export.
 *
 * The site has no server-side logic: no sessions, no personalisation, no database.
 * Exporting it as files means it can be served from a CDN or any bucket, there is no
 * Node process to keep alive or patch, and the failure modes of a marketing site
 * reduce to "did the upload finish".
 */
const config: NextConfig = {
  output: 'export',

  // A static host cannot rewrite /pricing to /pricing.html, so emit directories with
  // an index.html and let the trailing slash do it.
  trailingSlash: true,

  images: { unoptimized: true },

  // A type error is a broken build, not a warning to be scrolled past.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
}

export default config
