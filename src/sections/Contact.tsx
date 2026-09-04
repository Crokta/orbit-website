import { ArrowRight, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { company } from '@/lib/content'

/**
 * The closing call to action, shared by every page.
 *
 * The one dark band on the site. After a long white page the eye stops registering
 * section breaks, and the last thing a reader sees needs to land — a slate field with
 * the orange button on it does that without a stock photograph of somebody smiling in
 * a car.
 *
 * A phone number as well as an email, deliberately. A driver deciding whether to spend
 * a week on an application, and a finance manager deciding whether to move a
 * department, both want to speak to someone — and a company that hides its phone
 * number is telling them something.
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-brand/10 blur-[100px]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            <span aria-hidden className="h-px w-6 bg-brand/60" />
            Get in touch
          </p>

          <h2 className="text-[length:var(--text-headline)] leading-[1.08] font-semibold text-white">
            Talk to a person about it
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Whether you want to ride, to drive, or to move your organisation&apos;s travel
            across — tell us what you need and we will tell you honestly whether we are the
            right fit.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${company.email}`}>
              Email {company.email}
              <ArrowRight />
            </Button>
            <Button href={`tel:${company.phoneHref}`} variant="onDark">
              Call {company.phone}
            </Button>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            {company.name} · Orbit is our platform for moving people.
          </p>
        </div>
      </Container>
    </section>
  )
}
