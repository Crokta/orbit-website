/**
 * The hero visual: the moment a rider has just booked.
 *
 * A phone screen rather than an abstract illustration, because the promise the headline
 * makes — you see the price first — is a thing you can only really show by showing it.
 * Entirely static markup and inline SVG: no image to download, sharp on every display,
 * and it costs the page no JavaScript.
 */
export function RideVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-sm overflow-hidden rounded-[1.5rem] border border-line-strong bg-surface p-2 lift-lg">
        <div className="overflow-hidden rounded-[1.15rem] bg-canvas">
          <MiniMap />

          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-fg-dim">Your fare</p>
                <p className="numeric mt-1 text-3xl font-semibold tracking-tight text-fg">
                  ₦4,850
                </p>
              </div>

              <span className="mt-1 rounded-pill bg-signal/12 px-3 py-1.5 text-[0.6875rem] font-medium text-signal">
                Fixed price
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-fg-muted">
              This is what you pay. It does not change unless you change the trip.
            </p>

            <div className="mt-5 space-y-3 border-t border-line pt-5">
              <Row label="Pickup" value="Awolowo Road" muted="in 3 min" />
              <Row label="Dropoff" value="Victoria Island" muted="18 min trip" />
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-line bg-surface p-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/15 text-sm font-semibold text-brand-ink">
                AO
              </div>

              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 text-sm text-fg">
                  Adebayo O.
                  <VerifiedBadge />
                </p>
                <p className="numeric text-xs text-fg-dim">Toyota Corolla · KJA‑481‑XA</p>
              </div>

              <div className="numeric shrink-0 text-right">
                <p className="text-sm text-fg">4.9</p>
                <p className="text-[0.625rem] text-fg-dim">rating</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <span className="rounded-pill border border-line py-2.5 text-center text-xs text-fg-muted">
                Share trip
              </span>
              <span className="rounded-pill bg-brand py-2.5 text-center text-xs font-medium text-white">
                Confirm ride
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  muted,
}: {
  readonly label: string
  readonly value: string
  readonly muted: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-xs text-fg-dim">{label}</span>
      <span className="min-w-0 flex-1 truncate text-sm text-fg">{value}</span>
      <span className="shrink-0 text-xs text-fg-dim">{muted}</span>
    </div>
  )
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-label="Verified driver" className="size-3.5">
      <title>Verified driver</title>
      <path
        d="M8 1.5 9.9 3l2.4-.2.4 2.3 1.8 1.6-1.3 2 .5 2.3-2.3.8L8 14l-1.4-2.2-2.3-.8.5-2.3-1.3-2 1.8-1.6.4-2.3L8.1 3 8 1.5Z"
        fill="#047857"
        fillOpacity="0.2"
        stroke="#047857"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="m5.75 8 1.6 1.6L10.4 6.5"
        stroke="#047857"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** The map strip: a route from pickup to dropoff with the car on its way. */
function MiniMap() {
  return (
    <div className="relative h-44 overflow-hidden border-b border-line bg-surface sm:h-52">
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 size-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Street grid, skewed so it reads as a city rather than graph paper. */}
        <g stroke="#e2e8f0" strokeWidth="1">
          {[24, 62, 100, 138, 176].map((y) => (
            <line key={y} x1="-20" y1={y} x2="420" y2={y + 26} />
          ))}
          {[40, 96, 152, 208, 264, 320, 376].map((x) => (
            <line key={x} x1={x} y1="-10" x2={x - 22} y2="210" />
          ))}
        </g>

        <g stroke="#cbd5e1" strokeWidth="2.5">
          <line x1="-20" y1="104" x2="420" y2="130" />
          <line x1="212" y1="-10" x2="190" y2="210" />
        </g>

        <circle cx="96" cy="140" r="55" fill="url(#pin-glow)" />

        {/* The route. Solid ahead of the car, so the eye follows it to the destination. */}
        <path
          d="M96 140 C 150 138, 176 108, 214 92 S 288 66, 320 52"
          stroke="#ff6b00"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Pickup. */}
        <circle cx="96" cy="140" r="8.5" fill="#0f172a" />
        <circle cx="96" cy="140" r="3.5" fill="#ffffff" />

        {/* Dropoff. */}
        <g transform="translate(320 52)">
          <path
            d="M0-13c-5 0-9 4-9 9 0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9Z"
            fill="#ff6b00"
          />
          <circle cy="-4" r="3.2" fill="#ffffff" />
        </g>

        {/* The car, part-way along the route. */}
        <g transform="translate(214 92)">
          <circle r="11" fill="#ff6b00" fillOpacity="0.22" />
          <rect x="-6.5" y="-4.5" width="13" height="9" rx="2.5" fill="#0f172a" />
        </g>
      </svg>

      <div className="absolute top-3 left-4 rounded-pill bg-canvas/85 px-3 py-1.5 text-[0.6875rem] text-fg-muted backdrop-blur">
        Driver arriving in 3 min
      </div>
    </div>
  )
}
