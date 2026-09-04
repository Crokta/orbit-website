import type { Metadata } from 'next'

import { ArrowRight, Button } from '@/components/Button'
import { breadcrumbSchema, graph, driverFaqSchema } from '@/lib/seo'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Card, Section } from '@/components/Section'
import {
  company,
  driverBenefits,
  driverFaqs,
  driverRequirements,
  driverSteps,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Drive with Orbit',
  description:
    'Earn on your own hours with fares you see before you accept, daily payouts and support staffed by people. Here is exactly what it takes to get on the road with Orbit.',
  alternates: { canonical: '/drivers/' },
  openGraph: {
    type: 'website',
    title: 'Drive with Orbit',
    description: 'Earn on your own hours with fares you see before you accept, daily payouts and support staffed by people. Here is exactly what it takes to get on the road with Orbit.',
    url: '/drivers/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drive with Orbit',
    description: 'Earn on your own hours with fares you see before you accept, daily payouts and support staffed by people. Here is exactly what it takes to get on the road with Orbit.',
  },
}

export default function DriversPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="warm-wash absolute inset-0" />
          <div className="grid-backdrop absolute inset-0 opacity-40 sm:opacity-70" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>For drivers</Eyebrow>

            <h1 className="text-[length:var(--text-display)] leading-[1.0] font-semibold">
              Know what a trip pays{' '}
              <span className="text-gradient">before you take it.</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-fg-muted">
              Every offer shows the pickup distance, the destination and your earnings.
              Payouts land daily with every deduction itemised. And when something needs
              sorting out, you reach a person who can sort it out.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`mailto:${company.email}?subject=${encodeURIComponent('Driver application')}`}>
                Apply to drive
                <ArrowRight />
              </Button>
              <Button href="#requirements" variant="secondary">
                What you need
              </Button>
            </div>

            <p className="mt-8 text-sm text-fg-dim">
              Questions first? Call{' '}
              <a href={`tel:${company.phoneHref}`} className="text-brand-ink hover:text-brand-active">
                {company.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>

      <Section
        id="benefits"
        eyebrow="Why drive with us"
        title="The things that actually matter on a long day"
        lede="Not perks. The six things drivers tell us decide whether a platform is worth their time."
        className="border-y border-line bg-surface"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {driverBenefits.map((benefit) => (
            <Card key={benefit.title} className="bg-canvas">
              <h3 className="text-base font-semibold text-fg">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{benefit.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="onboarding"
        eyebrow="Getting started"
        title="Five steps, about a week"
        lede="You can see which step you are on at every point. Nobody has to guess, and nobody has to keep calling to ask."
      >
        <ol className="space-y-3">
          {driverSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-card border border-line bg-card lift p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
            >
              <span className="numeric grid size-9 shrink-0 place-items-center rounded-xl bg-brand/15 text-sm font-semibold text-brand-ink">
                {index + 1}
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h3 className="text-base font-semibold text-fg">{step.title}</h3>
                  <span className="rounded-pill bg-canvas px-2.5 py-1 text-[0.6875rem] text-fg-dim">
                    {step.duration}
                  </span>
                </div>

                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="requirements"
        eyebrow="Requirements"
        title="What you need to have ready"
        lede="Nothing here is a surprise later in the process. If you have these, you can complete the whole application in one sitting."
        className="border-y border-line bg-surface"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <ul className="space-y-3">
            {driverRequirements.map((requirement) => (
              <li
                key={requirement}
                className="flex items-start gap-3 rounded-xl border border-line bg-canvas px-5 py-4 text-sm text-fg-muted"
              >
                <svg viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-ink">
                  <path
                    d="m3.5 8.5 3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {requirement}
              </li>
            ))}
          </ul>

          <div className="rounded-card border border-line bg-canvas p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-fg">No vehicle of your own?</h3>

            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              You can still drive. We work with vetted fleet partners who rent vehicles to
              drivers on weekly terms. Tell us on your application that you need a vehicle
              and we will introduce you to a partner in your city.
            </p>

            <div className="mt-6 rounded-xl border border-caution/30 bg-caution/[0.06] p-5">
              <h4 className="text-sm font-semibold text-caution">One thing to know</h4>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                We will never ask you for money to apply, to be approved, or to get more
                trips. There is no application fee and no charge for the driver app. If
                anyone asks you to pay to join Orbit, that person is not from Orbit —
                report it to us at{' '}
                <a href={`mailto:${company.email}`} className="text-brand-ink hover:text-brand-active">
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="Questions" title="The ones drivers ask first">
        {/* <details>, not a grid of divs. The same questions are emitted as FAQPage
            structured data, and Google checks that the marked-up answer is actually
            present and readable on the page — collapsed is fine, hidden behind
            JavaScript is not. This also makes the list keyboard-navigable for free. */}
        <div className="overflow-hidden rounded-card border border-line">
          {driverFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-line bg-canvas last:border-0 open:bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold text-fg marker:content-none hover:bg-surface">
                {faq.q}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="size-4 shrink-0 text-brand transition-transform group-open:rotate-45"
                >
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </summary>

              <p className="px-6 pb-6 text-sm leading-relaxed text-fg-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden py-24 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-56 left-1/2 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/14 blur-[130px]" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[length:var(--text-headline)] leading-[1.08] font-semibold">
              Ready when you are
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-fg-muted">
              Send us your city and your vehicle details and we will come back with your
              next step. Most applications are decided within four working days.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button
                href={`mailto:${company.email}?subject=${encodeURIComponent('Driver application')}&body=${encodeURIComponent('City:\nVehicle make and model:\nYear:\nDo you own the vehicle? (yes/no):\nPhone number:')}`}
              >
                Apply to drive
                <ArrowRight />
              </Button>
              <Button href={`tel:${company.phoneHref}`} variant="secondary">
                Call {company.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: graph(breadcrumbSchema([{ name: 'Orbit', path: '/' }, { name: 'Drivers', path: '/drivers/' }]), driverFaqSchema) }}
      />
    </>
  )
}
