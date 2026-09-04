'use client'

import { useState, type FormEvent } from 'react'

import { ArrowRight } from '@/components/Button'
import { company, leadMagnet } from '@/lib/content'
import { cn } from '@/lib/cn'

/**
 * The enterprise lead capture form.
 *
 * The site is statically exported, so there is no server of ours to post to. Rather than
 * pull in a third-party form service — a script, a cookie banner, and somebody else
 * holding the enquiries — this posts to whatever endpoint is configured at build time
 * and falls back to opening a pre-filled email when none is.
 *
 * The fallback is the important part. A misconfigured endpoint on a lead form is a
 * silent failure: the visitor sees "thank you", the enquiry goes nowhere, and nobody
 * finds out until a quarter later. Here, if there is no endpoint the enquiry still
 * reaches a human — through the visitor's own mail client, where they can see it was
 * sent.
 *
 * Set NEXT_PUBLIC_LEAD_ENDPOINT to a URL accepting a JSON POST to enable direct submission.
 */

const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT

type Status = 'idle' | 'sending' | 'sent' | 'mail' | 'error'

const fleetSizes = [
  'Fewer than 25 trips a month',
  '25–100 trips a month',
  '100–500 trips a month',
  'More than 500 trips a month',
] as const

export function LeadForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const lead = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      organisation: String(data.get('organisation') ?? ''),
      volume: String(data.get('volume') ?? ''),
      guide: leadMagnet.title,
    }

    if (endpoint === undefined || endpoint === '') {
      // No endpoint configured: hand the enquiry to the visitor's mail client with
      // everything already filled in, so it takes one click rather than retyping.
      const body = [
        `Please send me: ${lead.guide}`,
        '',
        `Name: ${lead.name}`,
        `Work email: ${lead.email}`,
        `Organisation: ${lead.organisation}`,
        `Estimated volume: ${lead.volume}`,
      ].join('\n')

      window.location.href =
        `mailto:${company.email}` +
        `?subject=${encodeURIComponent(`Guide request — ${lead.guide}`)}` +
        `&body=${encodeURIComponent(body)}`

      setStatus('mail')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      })

      setStatus(response.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <Result title="On its way." body={`We have sent ${leadMagnet.title} to your inbox. If it has not arrived in a few minutes, check your spam folder or email us at ${company.email}.`} />
  }

  if (status === 'mail') {
    return <Result title="Almost there." body="Your email app should have opened with the request ready to send. Press send and we will reply with the guide — usually within one working day." />
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" placeholder="Adaeze Nwosu" />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="adaeze@company.com"
        />
      </div>

      <Field
        label="Organisation"
        name="organisation"
        autoComplete="organization"
        placeholder="Company name"
      />

      <label className="block">
        <span className="mb-2 block text-sm text-fg-muted">Estimated travel volume</span>
        <select
          name="volume"
          required
          defaultValue=""
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-fg transition-colors outline-none focus:border-brand"
        >
          <option value="" disabled>
            Select a range
          </option>
          {fleetSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={cn(
          'inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand px-5 py-3 text-sm font-medium text-white',
          'shadow-[0_0_0_1px_rgba(61,130,255,0.5),0_8px_28px_-8px_rgba(27,95,217,0.75)]',
          'transition-colors hover:bg-brand-hover disabled:opacity-60',
        )}
      >
        {status === 'sending' ? 'Sending…' : 'Send me the guide'}
        {status !== 'sending' && <ArrowRight />}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-surge">
          That did not go through. Please email {company.email} and we will send it straight
          over.
        </p>
      )}

      <p className="text-xs leading-relaxed text-fg-dim">{leadMagnet.formNote}</p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  placeholder,
}: {
  readonly label: string
  readonly name: string
  readonly type?: string
  readonly autoComplete?: string
  readonly placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-fg-muted">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-fg placeholder:text-fg-dim/70 transition-colors outline-none focus:border-brand"
      />
    </label>
  )
}

function Result({ title, body }: { readonly title: string; readonly body: string }) {
  return (
    <div role="status" className="rounded-card border border-signal/35 bg-signal/[0.06] p-7">
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-5 text-signal">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="m5 8.2 2.1 2.1L11 6.2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-base font-semibold text-fg">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-fg-muted">{body}</p>
    </div>
  )
}
