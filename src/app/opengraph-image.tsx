import { ImageResponse } from 'next/og'

// Emitted as a file at build time. `output: 'export'` has no server to generate it on
// request, and without this Next refuses the build rather than silently shipping a route
// nobody can reach.
export const dynamic = 'force-static'

/**
 * The card people see when the site is pasted into WhatsApp, Slack or a tweet.
 *
 * Generated rather than designed in a file, so it cannot fall out of step with the brand
 * — and so the same code produces the Twitter card. A missing OG image is not a neutral
 * outcome: a link with no card gets a bare grey box, and materially fewer clicks.
 */
export const alt = 'Orbit — moving people, without the small print'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(140deg, #ffffff 0%, #fff3eb 55%, #ffe0c9 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 34, height: 34, borderRadius: 17, background: '#ff6b00' }} />
          <div style={{ fontSize: 34, fontWeight: 700, color: '#0f172a', letterSpacing: -1 }}>
            Orbit
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: -3,
              lineHeight: 1.03,
            }}
          >
            Moving people,
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: '#ff6b00',
              letterSpacing: -3,
              lineHeight: 1.03,
            }}
          >
            without the small print.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 4, background: '#ff6b00' }} />
          <div style={{ fontSize: 26, color: '#475569' }}>
            A product of Crokta Engineering Limited
          </div>
        </div>
      </div>
    ),
    size,
  )
}
