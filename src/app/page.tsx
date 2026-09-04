import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/Hero'
import { LeadMagnet } from '@/sections/LeadMagnet'
import { Offerings } from '@/sections/Offerings'
import { Safety } from '@/sections/Safety'
import { Trust } from '@/sections/Trust'

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
