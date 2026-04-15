import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Badge } from './ui/badge'

const CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: 'bx-code-alt',
    color: '#38bdf8',
    skills: [
      { name: 'Java',       icon: 'bxl-java',       color: '#e76f00' },
      { name: 'JavaScript', icon: 'bxl-javascript', color: '#f7df1e' },
      { name: 'TypeScript', icon: 'bxl-typescript', color: '#3178c6' },
      { name: 'Python',     icon: 'bxl-python',     color: '#3776ab' },
      { name: 'C',          icon: 'bx-code-curly',  color: '#a8b9cc' },
      { name: 'C++',        icon: 'bx-code-block',  color: '#00599c' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'bx-palette',
    color: '#34d399',
    skills: [
      { name: 'React.js',     icon: 'bxl-react',        color: '#61dafb' },
      { name: 'Next.js',      icon: null,                color: '#d1d5db', svg: true },
      { name: 'HTML5',        icon: 'bxl-html5',        color: '#e34f26' },
      { name: 'CSS3',         icon: 'bxl-css3',         color: '#1572b6' },
      { name: 'Tailwind CSS', icon: 'bxl-tailwind-css', color: '#06b6d4' },
      { name: 'DaisyUI',      icon: 'bx-paint',         color: '#ff69b4' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'bx-server',
    color: '#818cf8',
    skills: [
      { name: 'Node.js',     icon: 'bxl-nodejs',   color: '#339933' },
      { name: 'Express.js',  icon: 'bx-server',    color: '#d1d5db' },
      { name: 'JWT',         icon: 'bx-key',       color: '#d63aff' },
      { name: 'Firebase',    icon: 'bxl-firebase', color: '#ffca28' },
      { name: 'REST APIs',   icon: 'bx-link',      color: '#6366f1' },
    ],
  },
  {
    title: 'Databases, Cloud & Tools',
    icon: 'bx-data',
    color: '#fb923c',
    skills: [
      { name: 'MongoDB', icon: 'bxl-mongodb',    color: '#47a248' },
      { name: 'SQL',     icon: 'bx-data',        color: '#336791' },
      { name: 'Git',     icon: 'bxl-git',        color: '#f05032' },
      { name: 'GitHub',  icon: 'bxl-github',     color: '#d1d5db' },
      { name: 'Stripe',  icon: 'bx-credit-card', color: '#635bff' },
    ],
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

// Enhanced container animation
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

// Enhanced card animation with smooth entrance
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

// Skill chip animation - smooth
const chipVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Create floating particles animation
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

    // GSAP animation for category badge icons
    const badgeIcons = sectionRef.current?.querySelectorAll('.category-badge-icon')
    badgeIcons?.forEach((icon, index) => {
      // Entrance animation
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

      // Subtle floating animation
      gsap.to(icon, {
        y: -4,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1 + 0.6,
      })

      // Glow pulse on hover
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

    // Hover animation for category cards
    const cards = sectionRef.current?.querySelectorAll('.skill-card')
    cards?.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          boxShadow: '0 15px 30px rgba(59, 130, 246, 0.15)',
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
      // Cleanup
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 overflow-hidden
        bg-white dark:bg-[#060810]
        transition-colors duration-300"
    >
      {/* Animated background particles */}
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

      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
        bg-sky-200/25 dark:bg-sky-600/8 blur-[110px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full
        bg-violet-200/25 dark:bg-violet-700/8 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* top border */}
      <div className="absolute top-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── header ── */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fade(0)}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border
            border-sky-400/25 dark:border-sky-500/20
            bg-sky-50 dark:bg-sky-500/5
            text-sky-600 dark:text-sky-400
            text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
            <i className="bx bx-chip text-sm" />
            Technical Expertise
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]
              text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Skills &amp;{' '}
            <span style={{
              background: 'linear-gradient(90deg,#38bdf8,#818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Expertise
            </span>
          </h2>
          <div className="mt-4 w-12 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }} />
        </motion.div>

        {/* ── 4 cards ── */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={ci}
              className="skill-card rounded-2xl p-6 flex flex-col gap-5
                bg-slate-50 dark:bg-white/[0.03]
                border border-slate-200 dark:border-slate-800
                hover:border-slate-300 dark:hover:border-slate-700
                transition-all duration-300 cursor-default
                relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ 
                y: -3,
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)'
              }}
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br from-sky-500/5 to-violet-500/5 pointer-events-none" />

              {/* card header */}
              <div className="flex items-center gap-3 relative z-10">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <Badge 
                    className="category-badge-icon w-10 h-10 rounded-xl flex items-center justify-center p-0 border-2 cursor-pointer"
                    style={{ 
                      borderColor: cat.color,
                      background: `${cat.color}15`,
                    }}
                    data-color={cat.color}
                  >
                    <i className={`bx ${cat.icon} text-lg`} style={{ color: cat.color }} />
                  </Badge>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                    {cat.title}
                  </h3>
                  <motion.div 
                    className="h-[2px] w-6 rounded-full mt-1.5" 
                    style={{ background: cat.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 24 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </div>
                <motion.span 
                  className="text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0"
                  style={{ color: cat.color, background: `${cat.color}12` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {cat.skills.length}
                </motion.span>
              </div>

              {/* skill chips */}
              <motion.div 
                className="grid grid-cols-3 gap-2.5 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    className="chip flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-xl cursor-default select-none
                      bg-white dark:bg-white/[0.04]
                      border border-slate-200 dark:border-slate-800
                      hover:border-slate-300 dark:hover:border-slate-700
                      transition-all duration-150 relative overflow-hidden group/chip"
                    variants={chipVariants}
                    whileHover="hover"
                  >
                    {/* Animated background on chip hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300
                      bg-gradient-to-br from-sky-500/10 to-violet-500/10 pointer-events-none" />

                    <motion.div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center relative z-10"
                      style={{ background: `${skill.color}18` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.svg ? (
                        <svg viewBox="0 0 180 180" className="w-5 h-5" fill="currentColor" style={{ color: skill.color }}>
                          <mask id={`m${si}`} maskUnits="userSpaceOnUse">
                            <circle cx="90" cy="90" r="90" fill="white" />
                            <path d="M149 154L69.5 54H54v72.5h13V71l73 95.5a90.3 90.3 0 0 0 9-12.5z" fill="black" />
                            <rect x="107" y="54" width="13" height="72" fill="black" />
                          </mask>
                          <circle cx="90" cy="90" r="90" fill={skill.color} mask={`url(#m${si})`} />
                        </svg>
                      ) : (
                        <i className={`bx ${skill.icon} text-xl`} style={{ color: skill.color }} />
                      )}
                    </motion.div>
                    <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 text-center leading-tight px-1 relative z-10">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── bottom CTA ── */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fade(0.2)}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white rounded-sm overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}
          >
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700
              bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            <i className="bx bx-chat text-base relative z-10" />
            <span className="relative z-10">Let's Work Together</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200
              border border-slate-300 dark:border-slate-800
              text-slate-600 dark:text-slate-400
              hover:text-slate-900 dark:hover:text-white
              hover:border-slate-500 dark:hover:border-slate-500
              bg-white dark:bg-white/[0.02]"
          >
            <i className="bx bx-folder text-base" />
            View Projects
          </a>
        </motion.div>

      </div>
    </section>
  )
}
