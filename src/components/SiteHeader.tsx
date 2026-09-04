'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ArrowRight, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Wordmark } from '@/components/Wordmark'
import { cn } from '@/lib/cn'

const links = [
  { href: '/riders/', label: 'Ride' },
  { href: '/drivers/', label: 'Drive' },
  { href: '/business/', label: 'Business' },
  { href: '/company/', label: 'Company' },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // The header is transparent over the hero and gains a background once the page moves,
  // so the hero reads as full-bleed without the nav becoming unreadable further down.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A menu open behind a scrolled page is a trap on a phone: the reader scrolls, the
  // page moves underneath, and the close button is gone.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-line bg-canvas/85 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="Orbit — home">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-pill px-3.5 py-2 text-sm text-fg-muted transition-colors hover:bg-card hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button href="/business/#guide" variant="primary">
              Free cost guide
              <ArrowRight />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-lg border border-line text-fg md:hidden"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-5">
              {open ? (
                <path
                  d="m5 5 10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 13h14"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-canvas md:hidden">
          <Container>
            <nav className="flex flex-col py-3" aria-label="Primary">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-3.5 text-[0.9375rem] text-fg-muted last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/business/#guide"
                className="mt-4 mb-4 w-full"
                onClick={() => setOpen(false)}
              >
                Free cost guide
                <ArrowRight />
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
