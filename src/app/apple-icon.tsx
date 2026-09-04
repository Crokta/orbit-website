import { ImageResponse } from 'next/og'

// Emitted as a file at build time. `output: 'export'` has no server to generate it on
// request, and without this Next refuses the build rather than silently shipping a route
// nobody can reach.
export const dynamic = 'force-static'

/**
 * The home-screen icon, generated from the same geometry as the SVG favicon.
 *
 * iOS ignores SVG icons and will fall back to a screenshot of the page if there is no
 * PNG — which is how a bookmarked site ends up with an illegible thumbnail of its own
 * header.
 */
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ff6b00',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="4.75" fill="#fff" />
          <ellipse
            cx="16"
            cy="16"
            rx="12.5"
            ry="6.25"
            transform="rotate(-28 16 16)"
            stroke="#fff"
            strokeOpacity="0.6"
            strokeWidth="1.75"
          />
          <circle cx="6" cy="11" r="2.3" fill="#fff" />
        </svg>
      </div>
    ),
    size,
  )
}
