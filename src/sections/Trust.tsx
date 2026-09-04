import { Card, Section } from '@/components/Section'
import { trustPillars } from '@/lib/content'

export function Trust() {
  return (
    <Section
      id="trust"
      eyebrow="Why trust us"
      title="Six reasons, none of them a slogan"
      lede="Trust is not something a new company can assert. What it can do is be specific about how the thing is built, and then be held to it."
      className="border-y border-line bg-surface"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trustPillars.map((pillar) => (
          <Card key={pillar.title} className="bg-canvas">
            <h3 className="text-base font-semibold text-fg">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{pillar.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
