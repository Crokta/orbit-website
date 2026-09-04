import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

/** The one place the page's maximum width and gutters are decided. */
export function Container({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
  )
}
