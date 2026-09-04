import { cn } from '@/lib/cn'

/**
 * The Orbit mark: a body on an inclined orbital path.
 *
 * Drawn rather than imported as a file so it inherits `currentColor` and stays crisp at
 * every size, including the 16 px favicon where a raster asset turns to mush.
 */
export function OrbitMark({ className }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('size-8', className)}
    >
      <circle cx="16" cy="16" r="5.25" fill="currentColor" />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="7"
        transform="rotate(-28 16 16)"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.75"
      />
      {/* The satellite sits on the ellipse at roughly 145°, which reads as motion
          without needing an arrow. */}
      <circle cx="4.6" cy="10.4" r="2.6" fill="currentColor" />
    </svg>
  )
}

/** Mark plus name, for the header and footer. */
export function Wordmark({ className }: { readonly className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <OrbitMark className="size-7 text-brand" />
      <span className="text-[1.0625rem] font-semibold tracking-tight text-fg">Orbit</span>
    </span>
  )
}
