// Tailwind 4 configures itself in CSS. There is no tailwind.config.js on purpose —
// the theme lives in src/design/theme.css beside the tokens it maps, and having it
// in two places is how a token and a utility class drift apart.
const config = {
  plugins: { '@tailwindcss/postcss': {} },
}

export default config
