import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { ModernButton } from '../../ui/modern-button'

const ROLES = ['Full Stack Developer', 'MERN Stack Developer', 'Android Developer (Java)', 'AI/ML Enthusiast']

const SOCIALS = [
  { icon: 'bxl-linkedin', href: 'https://www.linkedin.com/in/siratim-mustakim-chowdhury', label: 'LinkedIn' },
  { icon: 'bxl-github',   href: 'https://github.com/SiratimMChy',                         label: 'GitHub' },
  { icon: 'bx-envelope',  href: 'mailto:chysiratimmustakim@gmail.com',               label: 'Email' },
]

export default function HeroContent() {
  const [text, setText] = useState('')
  const [idx,  setIdx]  = useState(0)
  const [del,  setDel]  = useState(false)

  useEffect(() => {
    const full = ROLES[idx]
    const t = setTimeout(() => {
      if (!del && text === full)  return setTimeout(() => setDel(true), 1800)
      if (del  && text === '')    { setDel(false); setIdx(p => (p + 1) % ROLES.length); return }
      setText(p => del ? full.slice(0, p.length - 1) : full.slice(0, p.length + 1))
    }, del ? 40 : 85)
    return () => clearTimeout(t)
  }, [text, idx, del])

  return (
    <div className="flex-1 space-y-8 text-center lg:text-left">
      <div className="overflow-hidden pb-4 -mb-4">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Hello, I'm
          </p>
          <h1 className="font-black leading-[0.95] tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="block text-[clamp(2.4rem,5.5vw,4rem)] text-slate-900 dark:text-white">
              Siratim Mustakim
            </span>
            <span className="block text-[clamp(2.4rem,5.5vw,4rem)] pb-4 -mb-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Chowdhury
            </span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="inline-flex items-center gap-2 font-mono text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-slate-400 dark:text-slate-600 select-none">~/portfolio</span>
        <span className="text-violet-500 dark:text-violet-400 select-none">❯</span>
        <span className="text-sky-600 dark:text-sky-300">{text}</span>
        <span className="w-[2px] h-4 bg-sky-500 dark:bg-sky-400 animate-pulse rounded-full" />
      </motion.div>

      <motion.p
        className="text-slate-500 dark:text-slate-500 text-sm leading-[1.9] max-w-[480px] mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Full Stack Web Developer specializing in the{' '}
        <span className="text-slate-700 dark:text-slate-300 font-medium">MERN stack</span>, with additional experience in{' '}
        <span className="text-slate-700 dark:text-slate-300 font-medium">Android development (Java)</span>.
        As a Computer Science graduate, I enjoy building scalable, secure, and user-friendly applications that solve real-world problems.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3 justify-center lg:justify-start"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <ModernButton variant="gradient" className="group relative overflow-hidden" asChild>
          <a href="#contact">
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            <i className="bx bx-send text-base relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
            <span className="relative z-10 gap-2 flex items-center">Get In Touch</span>
          </a>
        </ModernButton>

        <ModernButton variant="outline" asChild>
          <a href="/SIRATIM MUSTAKIM CHOWDHURY_MERN Stack Developer.pdf" target="_blank" rel="noopener noreferrer" className="gap-2">
            <i className="bx bx-file text-base" />
            View Resume
          </a>
        </ModernButton>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center lg:items-start gap-5 justify-center lg:justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
      >
        <div className="flex items-center gap-2">
          {SOCIALS.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="icon" className="w-11 h-11 rounded-md group hover:bg-transparent dark:hover:bg-transparent transition-all duration-300 hover:shadow-sm" asChild>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={`bx ${s.icon} text-xl transition-all duration-300 ${
                    s.icon === 'bxl-linkedin' ? 'group-hover:text-[#0077b5]' :
                    s.icon === 'bxl-github' ? 'group-hover:text-slate-900 dark:group-hover:text-white' :
                    'group-hover:text-sky-500'
                  } group-hover:scale-110 group-hover:rotate-12`} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <span className="hidden sm:block w-px h-7 bg-slate-200 dark:bg-slate-800" />

        <div className="flex items-center gap-5">
          {[['5+', 'Projects'], ['10+', 'Technologies']].map(([v, l], i) => (
            <div key={l} className="flex items-center gap-5">
              {i > 0 && <span className="w-px h-5 bg-slate-200 dark:bg-slate-800" />}
              <div>
                <p className="text-lg font-black leading-none text-slate-900 dark:text-white">{v}</p>
                <p className="text-[10px] mt-0.5 font-medium tracking-wide text-slate-400 dark:text-slate-600">{l}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
