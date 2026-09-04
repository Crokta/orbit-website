import Link from 'next/link'

import { Container } from '@/components/Container'
import { OrbitMark } from '@/components/Wordmark'
import { company } from '@/lib/content'

const columns = [
  {
    heading: 'Orbit',
    links: [
      { href: '/riders/', label: 'Ride with Orbit' },
      { href: '/drivers/', label: 'Drive with Orbit' },
      { href: '/business/', label: 'Orbit for Business' },
      { href: '/#safety', label: 'Safety' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/company/', label: 'About Crokta' },
      { href: '/business/#guide', label: 'Free cost guide' },
      { href: '/#trust', label: 'Why trust us' },
      { href: '/#contact', label: 'Contact' },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <OrbitMark className="size-7 text-brand" />
              <span className="text-[1.0625rem] font-semibold tracking-tight">Orbit</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {company.tagline} Built and operated by {company.name}.
            </p>

            <div className="mt-5 flex flex-col gap-1.5 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="text-brand-ink transition-colors hover:text-brand-active"
              >
                {company.email}
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className="text-brand-ink transition-colors hover:text-brand-active"
              >
                {company.phone}
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-xs font-medium tracking-[0.16em] text-fg-dim uppercase">
                {column.heading}
              </h2>

              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-7 text-xs text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          {/* The year is rendered at build time. A client-side `new Date()` here would
              make the footer the one thing on a static page that needs JavaScript. */}
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Orbit is a product of {company.short}.</p>
        </div>
      </Container>
    </footer>
  )
}
