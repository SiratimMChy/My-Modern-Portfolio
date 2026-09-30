import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ModernButton } from './ui/modern-button'
import SkillCategoryCard from './SkillCategoryCard'

import { CATEGORIES } from '../data/skillsData'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {

    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.skill-particle')
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -20 - Math.random() * 30,
          x: -10 + Math.random() * 20,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: index * 0.1,
          repeat: -1,
          ease: 'sine.inOut',
        })
      })
    }


    const badgeIcons = sectionRef.current?.querySelectorAll('.category-badge-icon')
    badgeIcons?.forEach((icon, index) => {

      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.5)',
          delay: index * 0.1,
        }
      )


      gsap.to(icon, {
        y: -4,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1 + 0.6,
      })


      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          boxShadow: `0 0 20px ${icon.dataset.color}80`,
          scale: 1.12,
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          boxShadow: `0 0 0px ${icon.dataset.color}00`,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    })


    const cards = sectionRef.current?.querySelectorAll('.skill-card')
    cards?.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          boxShadow: '0 8px 16px rgba(59, 130, 246, 0.08)',
          duration: 0.3,
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          boxShadow: '0 0px 0px rgba(59, 130, 246, 0)',
          duration: 0.3,
        })
      })
    })

    return () => {

    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 overflow-hidden
        bg-[#F5F5F0]/50 dark:bg-[#060810]
        transition-colors duration-300"
    >
      
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="skill-particle absolute w-1 h-1 rounded-full"
            style={{
              background: `hsl(${200 + i * 20}, 100%, 60%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
        bg-sky-200/25 dark:bg-sky-600/8 blur-[110px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full
        bg-violet-200/25 dark:bg-violet-700/8 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      
      <div className="absolute top-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        <motion.div className="flex flex-col items-center text-center mb-6 sm:mb-10" {...fade(0)}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border
            border-sky-400/25 dark:border-sky-500/20
            bg-sky-50 dark:bg-sky-500/5
            text-sky-600 dark:text-sky-400
            text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
            <i className="bx bx-chip text-sm" />
            Technical Expertise
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05]
              text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="mt-4 w-12 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }} />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CATEGORIES.map((cat, ci) => (
            <SkillCategoryCard key={ci} cat={cat} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fade(0.2)}
        >
          <ModernButton variant="gradient" className="group relative overflow-hidden" asChild>
            <a href="#contact">
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700
                bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              <i className="bx bx-chat text-base relative z-10" />
              <span className="relative z-10 gap-2 flex items-center">Let's Work Together</span>
            </a>
          </ModernButton>
          <ModernButton variant="outline" asChild>
            <a
              href="#projects"
              className="gap-2"
            >
              <i className="bx bx-folder text-base" />
              View Projects
            </a>
          </ModernButton>
        </motion.div>

      </div>
    </section>
  )
}
