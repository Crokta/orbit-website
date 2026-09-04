import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Card, Section } from '@/components/Section'
import { Contact } from '@/sections/Contact'
import { company } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Crokta',
  description: `${company.name} builds and operates Orbit — a platform for moving people, built on upfront pricing, verified drivers and support that can actually help.`,
}

const beliefs = [
  {
    title: 'Say the price first',
    body: 'A fare you find out at the end is not a price, it is a bill. Everything about how we quote, charge and refund follows from deciding that the number you are shown before the trip is the number that stands.',
  },
  {
    title: 'A ride has three sides',
    body: 'It only works if it works for the rider, the driver and — where a company is paying — the person who signs off the invoice. We build all three, because a platform that treats one of them as a cost centre eventually loses all three.',
  },
  {
    title: 'Be specific about how we fail',
    body: 'Things break. We would rather tell you what we do when they do — what still works, who to call, how a dispute gets settled — than claim it never happens and be discovered.',
  },
  {
    title: 'A person has the last word',
    body: 'Automated systems flag problems; they do not decide them. Anything that affects someone’s income or access to the platform is reviewed by a human, and can be appealed.',
  },
] as const

const commitments = [
  {
    title: 'No pay-to-join, ever',
    body: 'We never charge a driver to apply, to be approved, or to get more trips. Anyone asking for that money is not us.',
  },
  {
    title: 'Your data is not the product',
    body: 'We collect what a ride needs. We do not sell it and we do not build advertising profiles from it.',
  },
  {
    title: 'Money is accounted for',
    body: 'Every fare, deduction and refund is recorded on both sides of a ledger, so an amount can always be explained.',
  },
  {
    title: 'Support you can reach',
    body: 'A published email and a published phone number, answered by people who can look up your trip and act on it.',
  },
] as const

export default function CompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="warm-wash absolute inset-0" />
          <div className="grid-backdrop absolute inset-0 opacity-40 sm:opacity-70" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>Company</Eyebrow>

            <h1 className="text-[length:var(--text-display)] leading-[1.0] font-semibold">
              {company.short} <span className="text-gradient">Engineering</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-fg-muted">
              {company.name} builds and operates Orbit. We are an engineering company that
              decided the way to compete in this industry was not to be cheapest or
              loudest, but to be the one whose numbers add up and whose phone gets
              answered.
            </p>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="What we believe"
        title="Four positions that shape everything we ship"
        lede="These are not values on a wall. Each one costs us something, and we hold them anyway."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {beliefs.map((belief, index) => (
            <Card key={belief.title}>
              <span className="numeric text-xs text-fg-dim">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-fg">{belief.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{belief.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="commitments"
        eyebrow="Our commitments"
        title="Four things you can hold us to"
        lede="Short enough to remember, specific enough to complain about if we break one."
        className="border-y border-line bg-surface"
      >
        <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {commitments.map((item) => (
            <div key={item.title} className="bg-canvas p-7">
              <h3 className="flex items-center gap-2.5 text-base font-semibold text-fg">
                <span className="size-1.5 rounded-full bg-signal" />
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Behind the product" title="Built by engineers who will still be here">
        <div className="rounded-card border border-line bg-surface p-7 sm:p-9">
          <p className="max-w-3xl text-sm leading-relaxed text-fg-muted">
            Orbit is our own platform, built in house rather than assembled from
            off-the-shelf parts and a white label. That matters for a reason that is not
            obvious from the outside: when a rider reports a fare that looks wrong, or a
            driver a payout that does not add up, the people who can look at the actual
            record and fix it work here. There is no vendor to escalate to and no support
            tier where the trail goes cold.
          </p>

          <dl className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-fg-muted">Company</dt>
              <dd className="mt-1 text-sm text-fg">{company.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-fg-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-brand-ink transition-colors hover:text-brand-active"
                >
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-fg-muted">Phone</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-sm text-brand-ink transition-colors hover:text-brand-active"
                >
                  {company.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Contact />
    </>
  )
}
