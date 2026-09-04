# orbit-website

The public website for **Orbit**, the ride-hailing platform built and operated by
**Crokta Engineering Limited**.

Five pages, no backend, no third-party scripts. It exists to do three things: explain the
product to a rider, get a driver to apply, and get a finance manager to ask for the guide.

```bash
pnpm install
pnpm dev          # http://localhost:5175
```

## The pages

| Route | Audience | What it has to achieve |
|---|---|---|
| `/` | Everyone | Say what Orbit is in one screen, then route the visitor to their own page |
| `/riders/` | Riders | Upfront pricing, verified drivers, safety, how to get help |
| `/drivers/` | Drivers | Benefits, the five onboarding steps, requirements, FAQs, apply |
| `/business/` | Enterprise | The cost problem, what they get, **the lead magnet**, pilot process |
| `/company/` | Everyone | Who Crokta are, what we believe, what we can be held to |

## The lead magnet

`/business/#guide` offers *The Ground Transport Cost Audit* in exchange for a name, work
email, organisation and volume band. The form lives in
[`src/components/LeadForm.tsx`](src/components/LeadForm.tsx) and has two modes:

- **`NEXT_PUBLIC_LEAD_ENDPOINT` set** — posts the lead as JSON to that URL.
- **not set (the default)** — opens the visitor's mail client with the enquiry
  pre-filled and addressed to `orbit@crokta.com`.

The fallback exists because a misconfigured lead form is a *silent* failure: the visitor
sees "thank you", the enquiry goes nowhere, and nobody finds out for a quarter. With the
fallback the enquiry still reaches a person, and the visitor can see it was sent.

> **Before launch:** the guide itself has to exist. The page promises a 14-page PDF; write
> it, or change the offer. A download that turns out to be a brochure costs more goodwill
> than the email address was worth.

## Content

Every claim on the site is in [`src/lib/content.ts`](src/lib/content.ts) — one file, so a
brand or legal review is a single pull request rather than a hunt through thirty
components.

Two rules that file follows:

1. **No traction claims.** The figures in the hero are what the platform is *engineered to
   carry*, and they are worded that way. Usage numbers go in only when they are measured
   and can be defended.
2. **No invented social proof.** There are no testimonials, customer logos or review counts
   anywhere on this site, because there are no real ones yet. When there are, the natural
   places for them are below the offerings on `/` and above the FAQs on `/drivers/`.

## Design

The palette is the Orbit product design tokens — Orbit Orange `#ff6b00` on white, slate
neutrals — mapped onto Tailwind theme variables in
[`src/design/theme.css`](src/design/theme.css). Tokens are named by role (`brand`,
`surface`, `fg-muted`) rather than by value, so a palette change is that one file.

Two details worth knowing before editing:

- **`text-brand-ink`, not `text-brand`, for words.** `#ff6b00` is 2.9:1 on white — right
  for a filled button with white text on it, unreadable as orange text on a card.
- **The dark band is deliberate.** The closing call to action is the one slate section on
  the site. After a long white page the eye stops registering section breaks, and the last
  thing a visitor sees needs to land.

## Build and deploy

```bash
pnpm build        # static export to ./out
```

`next.config.ts` sets `output: 'export'`, so the result is plain files. Serve them from any
CDN or bucket, or use the container:

```bash
cp .env.example .env
docker compose up -d --build   # http://localhost:8120
```

The runtime image is nginx over the exported files — no Node process to keep alive or
patch. It runs unprivileged on a read-only filesystem and sets a content security policy
strict enough to mean something, which it can only do because the site loads no
third-party script, frame or stylesheet.

> Running `pnpm build` while `pnpm dev` is running overwrites the dev server's `.next`
> directory and breaks it until restarted. Stop the dev server first.

## Checks

```bash
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
```

Both run as part of `pnpm build`, and both fail it.
