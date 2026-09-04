import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'

const base =
  'inline-flex items-center justify-center gap-2 rounded-control text-sm font-semibold ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-200 ' +
  'active:translate-y-px whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand px-5 py-2.5 text-fg-on-brand hover:bg-brand-hover active:bg-brand-active ' +
    // Tinted with the button's own hue rather than black. A grey drop shadow under a
    // saturated orange reads as dirt; the same shadow warmed reads as depth.
    'shadow-[0_1px_2px_rgb(15_23_42/0.06),0_10px_20px_-10px_rgb(255_107_0/0.55)]',

  secondary:
    'border border-line bg-canvas px-5 py-2.5 text-fg lift hover:border-line-strong hover:bg-surface',

  ghost: 'px-3 py-2 text-fg-muted hover:text-fg',

  // For the dark closing band, where a white button would fight the orange one beside
  // it. A translucent fill keeps the slate visible through it.
  onDark:
    'border border-white/20 bg-white/5 px-5 py-2.5 text-white hover:border-white/35 hover:bg-white/10',
}

/**
 * A link styled as a button.
 *
 * Every call to action on this site navigates — there is nothing to submit — so this
 * renders an anchor. A `<button>` that navigates is unreachable by keyboard shortcut,
 * cannot be opened in a new tab, and is invisible to a crawler.
 */
export function Button({
  href,
  variant = 'primary',
  className,
  children,
  ...rest
}: {
  readonly href: string
  readonly variant?: Variant
  readonly className?: string
  readonly children: ReactNode
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  const external = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  )
}

/** The chevron used on primary calls to action. */
export function ArrowRight({ className }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn('size-3.5', className)}
    >
      <path
        d="M6 3.5 10.5 8 6 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
