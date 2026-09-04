import Link from 'next/link'

import { ArrowRight } from '@/components/Button'
import { Section } from '@/components/Section'
import { offerings } from '@/lib/content'

/** The three doors into the product. Everything else on the home page supports these. */
export function Offerings() {
  return (
    <Section
      id="offerings"
      eyebrow="One platform, three sides"
      title="Whichever side of the trip you are on"
      lede="A ride only works when it works for everybody in it. We build all three sides ourselves rather than treating drivers or finance teams as an afterthought."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {offerings.map((offering) => (
          <Link
            key={offering.slug}
            href={offering.slug}
            className="group flex flex-col rounded-card border border-line bg-card p-7 lift transition-[border-color,box-shadow] hover:border-brand/50 hover:lift-lg"
          >
            <div className="flex-1">
              <p className="text-xs font-medium tracking-[0.16em] text-brand-ink uppercase">
                {offering.audience}
              </p>

              <h3 className="mt-4 text-[length:var(--text-title)] leading-tight font-semibold text-fg">
                {offering.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-fg-muted">{offering.body}</p>
            </div>

            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {offering.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-fg-muted">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-ink">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-ink transition-transform group-hover:translate-x-0.5">
              {offering.cta}
              <ArrowRight />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
