import type { Metadata } from 'next'

import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/Hero'
import { LeadMagnet } from '@/sections/LeadMagnet'
import { Offerings } from '@/sections/Offerings'
import { Safety } from '@/sections/Safety'
import { Trust } from '@/sections/Trust'

export const metadata: Metadata = {
  // The home page's canonical is the bare origin. The layout already sets this as the
  // default, but stating it here means the home page keeps its canonical if the default
  // ever changes for another reason.
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offerings />
      <Trust />
      <Safety />
      <LeadMagnet />
      <Contact />
    </>
  )
}
