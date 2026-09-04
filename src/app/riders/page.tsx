import type { Metadata } from 'next'

import { ArrowRight, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Card, Section } from '@/components/Section'
import { Contact } from '@/sections/Contact'
import { Safety } from '@/sections/Safety'
import { company, riderSteps } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Ride with Orbit',
  description:
    'Upfront fares that do not change, verified drivers, and support that can actually fix things. Here is what riding with Orbit is like.',
}

const promises = [
  {
    title: 'One price, agreed before you go',
    body: 'You see the fare before you book and that is what you are charged. Not an estimate, not a range, and not a number that drifts upward while you sit in traffic.',
  },
  {
    title: 'Pay how you want',
    body: 'Card or cash, your choice on every trip. Your receipt arrives the moment the trip ends, with the route and the fare on it.',
  },
  {
    title: 'The driver you were shown',
    body: 'Name, photo, vehicle and plate number, before they arrive. If the car that pulls up is not the car on your screen, do not get in — and tell us.',
  },
  {
    title: 'Refunds that actually happen',
    body: 'If you were charged wrongly we correct it, and the correction is recorded against your trip. You should not have to fight for your own money.',
  },
] as const

export default function RidersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="warm-wash absolute inset-0" />
          <div className="grid-backdrop absolute inset-0 opacity-40 sm:opacity-70" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>For riders</Eyebrow>

            <h1 className="text-[length:var(--text-display)] leading-[1.0] font-semibold">
              The fare you were quoted.{' '}
              <span className="text-gradient">Every time.</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-fg-muted">
              No surge you find out about at the end, no adjustment after you have got out
              of the car, and no wondering whether the driver on your screen is the one who
              will arrive.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#how">
                How it works
                <ArrowRight />
              </Button>
              <Button href="#safety" variant="secondary">
                Safety
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="how"
        eyebrow="How it works"
        title="Three steps, no surprises"
        className="border-y border-line bg-surface"
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {riderSteps.map((step, index) => (
            <li key={step.step} className="rounded-card border border-line bg-canvas p-7">
              <span className="numeric grid size-9 place-items-center rounded-xl bg-brand/15 text-sm font-semibold text-brand-ink">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-fg">{step.step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="What we promise"
        title="Four things we will not do to you"
        lede="Every one of these is a practice somewhere in this industry. We have built the platform so that we cannot do them, not so that we promise not to."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {promises.map((promise) => (
            <Card key={promise.title}>
              <h3 className="text-base font-semibold text-fg">{promise.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{promise.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Safety />

      <Section eyebrow="Need help" title="Something went wrong on a trip?">
        <div className="rounded-card border border-line bg-surface p-7 sm:p-9">
          <p className="max-w-2xl text-sm leading-relaxed text-fg-muted">
            Tell us the trip and what happened. Our support team can see the recorded route,
            the timing and the fare that was quoted, so most issues are settled the same day
            — and every action taken on your account is recorded.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`mailto:${company.email}?subject=${encodeURIComponent('Trip support')}`}>
              Email support
              <ArrowRight />
            </Button>
            <Button href={`tel:${company.phoneHref}`} variant="secondary">
              Call {company.phone}
            </Button>
          </div>
        </div>
      </Section>

      <Contact />
    </>
  )
}
