'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Architecture } from '@/components/sections/Architecture'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Metrics } from '@/components/sections/Metrics'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative bg-primary-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Architecture />
      <Experience />
      <Projects />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  )
}
