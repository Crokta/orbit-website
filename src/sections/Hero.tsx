import { ArrowRight, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { RideVisual } from '@/sections/RideVisual'
import { capacity, company } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="warm-wash absolute inset-0" />
        <div className="grid-backdrop absolute inset-0 opacity-40 sm:opacity-70" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-pill border border-line bg-canvas lift py-1.5 pr-4 pl-1.5 text-xs text-fg-muted">
              <span className="rounded-pill bg-brand/15 px-2.5 py-1 text-[0.6875rem] font-medium text-brand-ink">
                Orbit
              </span>
              Rides, driving and business travel — one platform
            </p>

            <h1 className="mt-7 text-[length:var(--text-display)] leading-[0.98] font-semibold">
              Moving people,
              <br />
              <span className="text-gradient">without the small print.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted">
              The fare you are quoted is the fare you pay. The driver who arrives is the
              one who was verified. And when something goes wrong, a person answers who
              can actually put it right.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/riders/">
                Ride with Orbit
                <ArrowRight />
              </Button>
              <Button href="/drivers/" variant="secondary">
                Drive with Orbit
              </Button>
              <Button href="/business/" variant="ghost">
                For business
              </Button>
            </div>

            <p className="mt-8 text-sm text-fg-dim">
              A product of <span className="text-fg-muted">{company.name}</span>
            </p>
          </div>

          <RideVisual />
        </div>

        {/* Capability, not traction. These say what the platform is built to carry —
            which is a claim we can stand behind on day one, where a usage number would
            have to be earned first and defended afterwards. */}
        <dl className="mt-20 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {capacity.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-7">
              <dt className="text-sm text-fg-muted">{stat.label}</dt>
              <dd className="numeric mt-2 text-3xl font-semibold tracking-tight text-fg">
                {stat.value}
              </dd>
              <p className="mt-2 text-xs leading-relaxed text-fg-dim">{stat.note}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
