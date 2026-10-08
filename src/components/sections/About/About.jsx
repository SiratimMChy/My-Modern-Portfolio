import { useRef } from 'react'
import { useInView } from 'framer-motion'
import AboutHeader from './AboutHeader'
import AboutImage from './AboutImage'
import AboutContent from './AboutContent'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="about"
      className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 overflow-hidden bg-[#F5F5F0] dark:bg-[#07090f] transition-colors duration-300"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-200/30 dark:bg-violet-700/8 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-sky-200/30 dark:bg-sky-600/8 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <AboutHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  )
}
