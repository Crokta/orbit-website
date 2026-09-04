import { Section } from '@/components/Section'
import { safety } from '@/lib/content'

export function Safety() {
  return (
    <Section
      id="safety"
      eyebrow="Safety"
      title="What we do before, during and after the trip"
      lede="Safety is mostly the unglamorous work that happens before anyone gets in a car — and the ability to reconstruct exactly what happened if something goes wrong."
    >
      <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {safety.map((item) => (
          <div key={item.title} className="bg-surface p-7">
            <h3 className="text-base font-semibold text-fg">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
