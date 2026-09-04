import type { Metadata } from 'next'

import { ArrowRight, Button } from '@/components/Button'
import { breadcrumbSchema, graph } from '@/lib/seo'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Card, Section } from '@/components/Section'
import { Contact } from '@/sections/Contact'
import { LeadMagnet } from '@/sections/LeadMagnet'
import { businessFeatures, company } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Orbit for Business',
  description:
    'Corporate ground travel with policy enforced at booking, one invoice coded to your cost centres, and live visibility of every trip. Free cost guide inside.',
  alternates: { canonical: '/business/' },
  openGraph: {
    type: 'website',
    title: 'Orbit for Business',
    description: 'Corporate ground travel with policy enforced at booking, one invoice coded to your cost centres, and live visibility of every trip. Free cost guide inside.',
    url: '/business/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit for Business',
    description: 'Corporate ground travel with policy enforced at booking, one invoice coded to your cost centres, and live visibility of every trip. Free cost guide inside.',
  },
}

const problems = [
  {
    problem: 'Reimbursement claims',
    cost: 'Every trip becomes a receipt, a form, an approval and a payment run. The admin often costs more than the ride.',
  },
  {
    problem: 'Policy nobody reads',
    cost: 'A travel policy in a PDF is enforced after the money is spent, in a conversation nobody wants to have.',
  },
  {
    problem: 'No visibility until month end',
    cost: 'Finance finds out what a department spent three weeks after it could have done anything about it.',
  },
  {
    problem: 'Duty of care by group chat',
    cost: 'When a colleague is travelling late, knowing where they are should not depend on them remembering to text.',
  },
] as const

export default function BusinessPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="warm-wash absolute inset-0" />
          <div className="grid-backdrop absolute inset-0 opacity-40 sm:opacity-70" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>For business</Eyebrow>

            <h1 className="text-[length:var(--text-display)] leading-[1.0] font-semibold">
              Ground travel your finance team{' '}
              <span className="text-gradient">stops chasing.</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-fg-muted">
              Policy and budgets applied as the trip is booked. One invoice at month end,
              already coded to your cost centres. And a live view of where your people are
              when they are travelling on your account.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#guide">
                Get the free cost guide
                <ArrowRight />
              </Button>
              <Button href="#contact" variant="secondary">
                Talk to us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="The problem"
        title="Four ways ground travel quietly costs more than it should"
        lede="None of these show up as a line item. They show up as finance time, manager time, and money spent before anyone could question it."
        className="border-y border-line bg-surface"
      >
        <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {problems.map((item) => (
            <div key={item.problem} className="bg-canvas p-7">
              <h3 className="flex items-center gap-2.5 text-base font-semibold text-fg">
                <span className="size-1.5 rounded-full bg-surge" />
                {item.problem}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.cost}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What you get"
        title="Built for the people who sign off the bill"
        lede="Travel managers, finance and the employees who just need to get to a meeting — all working from the same booking."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {businessFeatures.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-base font-semibold text-fg">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{feature.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <LeadMagnet />

      <Section
        eyebrow="Getting started"
        title="Pilot one department first"
        lede="We would rather you moved twenty people across, saw the invoice, and then decided — than signed for the whole organisation on a demo."
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'A short call',
              body: 'Twenty minutes on how your people travel now, what your policy says, and what finance actually needs to see.',
            },
            {
              title: 'Configured with you',
              body: 'We set up your cost centres, approvers and policy rules together, and load the employees taking part in the pilot.',
            },
            {
              title: 'One month, one invoice',
              body: 'Run the pilot for a month. You get one reconciled invoice and a usage breakdown, and then you decide.',
            },
          ].map((step, index) => (
            <li key={step.title} className="rounded-card border border-line bg-card lift p-7">
              <span className="numeric text-xs text-fg-dim">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-base font-semibold text-fg">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-fg-dim">
          Prefer to talk it through first? Call{' '}
          <a href={`tel:${company.phoneHref}`} className="text-brand-ink hover:text-brand-active">
            {company.phone}
          </a>
          .
        </p>
      </Section>

      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: graph(breadcrumbSchema([{ name: 'Orbit', path: '/' }, { name: 'For business', path: '/business/' }])) }}
      />
    </>
  )
}
