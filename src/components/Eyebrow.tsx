import { cn } from '@/lib/cn'

/** The small label above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  readonly children: string
  readonly className?: string
}) {
  return (
    <p
      className={cn(
        'mb-4 flex items-center gap-2.5 text-xs font-medium tracking-[0.18em] text-brand-ink uppercase',
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-brand/60" />
      {children}
    </p>
  )
}
