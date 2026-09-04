import { company, driverFaqs } from '@/lib/content'

/**
 * The site's canonical origin.
 *
 * Every absolute URL on the site derives from this one constant — canonicals, the sitemap,
 * Open Graph, and the structured data. Hard-coding the origin in each of those is how a
 * staging deploy ends up telling Google that its canonical page is on production, or worse,
 * that production's canonical is on staging.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orbit.crokta.com'

export const absolute = (path: string): string => new URL(path, SITE_URL).toString()

/**
 * Every indexable route, with the crawl priorities.
 *
 * A hand-maintained list rather than a filesystem walk. The site has five pages; a
 * directory scan would be cleverer and would also happily publish a route that was added
 * for a campaign and is not meant to be indexed.
 */
export const ROUTES = [
  { path: '/', changeFrequency: 'monthly', priority: 1.0 },
  { path: '/riders/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/drivers/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/business/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/company/', changeFrequency: 'yearly', priority: 0.5 },
] as const

/**
 * The organisation, as structured data.
 *
 * Emitted once, on the home page, and referenced by `@id` from everything else. Repeating
 * the full organisation object on every page is common and wrong: a crawler that sees five
 * slightly different definitions of the same company picks one, and not necessarily yours.
 */
export const organisationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: company.name,
  alternateName: company.short,
  url: SITE_URL,
  email: company.email,
  telephone: company.phoneHref,

  // SVG is an accepted logo format for structured data and is the one asset that stays
  // sharp wherever it is placed. The PNG is listed alongside it for the consumers that
  // will not rasterise one.
  logo: {
    '@type': 'ImageObject',
    url: absolute('/icon.svg'),
    contentUrl: absolute('/apple-icon.png'),
    width: 180,
    height: 180,
    caption: `${company.product} logo`,
  },

  image: absolute('/opengraph-image'),
  description:
    'Crokta Engineering Limited builds and operates Orbit, a ride-hailing platform for riders, drivers and corporate travel.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: company.phoneHref,
      email: company.email,
      contactType: 'customer support',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      email: company.email,
      contactType: 'sales',
      availableLanguage: ['English'],
    },
  ],
}

/** The site itself, so a search engine can offer the name rather than the domain. */
export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.product,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-NG',
}

/** The product, described as the service it is. */
export const serviceSchema = {
  '@type': 'Service',
  '@id': `${SITE_URL}/#service`,
  name: 'Orbit',
  serviceType: 'Ride-hailing and corporate ground transport',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  audience: [
    { '@type': 'Audience', audienceType: 'Riders' },
    { '@type': 'Audience', audienceType: 'Drivers' },
    { '@type': 'Audience', audienceType: 'Businesses' },
  ],
}

/**
 * The driver FAQs, marked up.
 *
 * Drawn from the same array the page renders, not retyped. Structured data that disagrees
 * with the visible page is a manual-action risk, and the only reliable way to keep the two
 * in step is to give them one source.
 */
export const driverFaqSchema = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/drivers/#faq`,
  mainEntity: driverFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

/** A breadcrumb trail for one page. */
export const breadcrumbSchema = (trail: readonly { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absolute(crumb.path),
  })),
})

/**
 * Wraps schema objects in the single graph a page emits.
 *
 * One `<script>` holding a `@graph` rather than several separate blocks: the objects
 * reference each other by `@id`, and a crawler resolves those references within a graph
 * far more reliably than across sibling scripts.
 */
export const graph = (...nodes: readonly object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes })
