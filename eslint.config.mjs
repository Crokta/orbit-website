import { FlatCompat } from '@eslint/eslintrc'

// next/core-web-vitals still ships as an eslintrc-style config, so it is bridged
// rather than imported directly. It is worth the bridge: the rules in it catch the
// Next-specific mistakes — an <img> where next/image belongs, a client component
// imported into a server one — that a generic React config knows nothing about.
const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

const config = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default config
