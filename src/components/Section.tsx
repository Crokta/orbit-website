import type { ReactNode } from 'react'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { cn } from '@/lib/cn'

/**
 * A page section with its heading furniture.
 *
 * Sections carry an `id` so the header's in-page links and any deep link a reader
 * shares both land in the right place; `scroll-padding-top` on `html` keeps the heading
 * clear of the sticky header.
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
  align = 'left',
}: {
  readonly id?: string
  readonly eyebrow?: string
  readonly title?: ReactNode
  readonly lede?: ReactNode
  readonly children: ReactNode
  readonly className?: string
  readonly align?: 'left' | 'center'
}) {
  const centered = align === 'center'

  return (
    <section id={id} className={cn('py-20 sm:py-28', className)}>
      <Container>
        {(eyebrow ?? title ?? lede) !== undefined && (
          <header className={cn('mb-12 sm:mb-16', centered && 'mx-auto max-w-2xl text-center')}>
            {eyebrow !== undefined && (
              <Eyebrow className={cn(centered && 'justify-center')}>{eyebrow}</Eyebrow>
            )}

            {title !== undefined && (
              <h2 className="text-[length:var(--text-headline)] leading-[1.08] font-semibold">
                {title}
              </h2>
            )}

            {lede !== undefined && (
              <p
                className={cn(
                  'mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg',
                  centered && 'mx-auto',
                )}
              >
                {lede}
              </p>
            )}
          </header>
        )}

        {children}
      </Container>
    </section>
  )
}

/** The standard bordered panel. */
export function Card({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-card border border-line bg-card p-6 transition-[border-color,box-shadow] duration-300 lift hover:border-brand/45 hover:lift-lg sm:p-7',
        className,
      )}
    >
      {children}
    </div>
  )
}
