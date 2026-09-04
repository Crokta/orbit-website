import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { LeadForm } from '@/components/LeadForm'
import { leadMagnet } from '@/lib/content'

/**
 * The enterprise lead magnet.
 *
 * The guide is genuinely useful whether or not the reader ever buys from us, which is
 * the only version of this that works twice: a download that turns out to be a brochure
 * costs more goodwill than the address was worth.
 */
export function LeadMagnet() {
  return (
    <section id="guide" className="relative overflow-hidden border-y border-line bg-surface py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-[26rem] w-[40rem] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Free guide</Eyebrow>

            <h2 className="text-[length:var(--text-headline)] leading-[1.08] font-semibold">
              {leadMagnet.title}
            </h2>

            <p className="mt-3 text-sm font-medium text-brand-ink">{leadMagnet.subtitle}</p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
              {leadMagnet.blurb}
            </p>

            <h3 className="mt-9 text-xs font-medium tracking-[0.16em] text-fg-dim uppercase">
              What is inside
            </h3>

            <ul className="mt-4 space-y-3">
              {leadMagnet.contents.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1 size-3.5 shrink-0 text-brand-ink">
                    <path
                      d="m3.5 8.5 3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-line bg-canvas p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-fg">Where should we send it?</h3>
            <p className="mt-2 mb-6 text-sm text-fg-muted">
              Four fields. You will have the guide in your inbox in a minute.
            </p>

            <LeadForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
