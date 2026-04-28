import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Button } from './ui/button'

function useParallax(strength = 0.012) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 18 })
  const sy = useSpring(y, { stiffness: 60, damping: 18 })
  useEffect(() => {
    const move = e => {
      x.set((e.clientX - window.innerWidth / 2) * strength)
      y.set((e.clientY - window.innerHeight / 2) * strength)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return { x: sx, y: sy }
}

const ROLES = ['Full Stack Web Developer', 'MERN Stack Developer', 'Android Developer (Java)']

const TECH = [
  { icon: 'bxl-react',      label: 'React',   color: '#38bdf8' },
  { icon: 'bxl-nodejs',     label: 'Node.js', color: '#4ade80' },
  { icon: 'bxl-mongodb',    label: 'MongoDB', color: '#34d399' },
  { icon: 'bxl-javascript', label: 'JS',      color: '#facc15' },
  { icon: 'bxl-typescript', label: 'TS',      color: '#60a5fa' },
  { icon: 'bxl-android',    label: 'Android', color: '#a3e635' },
]

const SOCIALS = [
  { icon: 'bxl-linkedin', href: 'https://www.linkedin.com/in/siratim-mustakim-chowdhury', label: 'LinkedIn' },
  { icon: 'bxl-github',   href: 'https://github.com/SiratimMChy',                         label: 'GitHub' },
  { icon: 'bx-envelope',  href: 'mailto:chowdhurysiratimmustakim@gmail.com',               label: 'Email' },
]



export default function Hero() {
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

  const para = useParallax()


  return (
    <main className="relative min-h-screen flex items-center overflow-hidden
      bg-white dark:bg-[#060810]
      transition-colors duration-300">

      {/* blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full
        bg-sky-200/40 dark:bg-sky-600/10 blur-[120px] transition-colors duration-300" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full
        bg-violet-200/40 dark:bg-violet-700/10 blur-[100px] transition-colors duration-300" />

      {/* noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />

      {/* vertical rule */}
      <div className="hidden lg:block absolute left-[7%] top-0 bottom-0 w-px
        bg-gradient-to-b from-transparent via-slate-300/50 dark:via-slate-700/40 to-transparent" />

      {/* top border */}
      <div className="absolute top-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-sky-400/30 dark:via-sky-500/25 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-28 pt-36">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">

          {/* ── LEFT ── */}
          <div className="flex-1 space-y-8 text-center lg:text-left">

            {/* status chip */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border
                border-emerald-400/30 dark:border-emerald-500/20
                bg-emerald-50 dark:bg-emerald-500/5
                text-emerald-600 dark:text-emerald-400
                text-[10px] font-bold tracking-[0.18em] uppercase"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* name */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                  Hello, I'm
                </p>
                <h1 className="font-black leading-[0.95] tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="block text-[clamp(2.4rem,5.5vw,4rem)] text-slate-900 dark:text-white">
                    Siratim Mustakim
                  </span>
                  <span
                    className="block text-[clamp(2.4rem,5.5vw,4rem)]"
                    style={{
                      background: 'linear-gradient(90deg,#38bdf8 0%,#818cf8 50%,#c084fc 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Chowdhury
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* terminal role */}
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

            {/* bio */}
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

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white overflow-hidden rounded-sm"
                style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}
              >
                <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                <i className="bx bx-send text-base relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                <span className="relative z-10">Get In Touch</span>
              </a>

              <a
                href="/My_resume_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200
                  border border-slate-300 dark:border-slate-800
                  text-slate-600 dark:text-slate-400
                  hover:text-slate-900 dark:hover:text-white
                  hover:border-slate-500 dark:hover:border-slate-500
                  bg-slate-50 dark:bg-white/[0.02]
                  hover:bg-slate-100 dark:hover:bg-white/[0.05]"
              >
                <i className="bx bx-file text-base" />
                View Resume
              </a>
            </motion.div>

            {/* socials + stats */}
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
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-11 h-11 rounded-sm group hover:bg-transparent dark:hover:bg-transparent transition-all duration-300 hover:shadow-sm"
                      asChild
                    >
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                      >
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

          {/* ── RIGHT — tilted photo card + floating chips ── */}
          <motion.div
            className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-auto"
            style={{ x: para.x, y: para.y }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">

              {/* ── main photo card ── */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ rotate: 3 }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* gradient top bar */}
                <div className="absolute top-0 inset-x-0 h-1 z-10"
                  style={{ background: 'linear-gradient(90deg,#38bdf8,#6366f1,#c084fc)' }} />

                <img
                  src="/profile-image.jpg"
                  alt="Siratim Mustakim Chowdhury"
                  className="w-full aspect-[3/4] object-cover"
                  style={{ objectPosition: '50% 10%' }}
                />

                {/* bottom overlay */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-4">
                  <p className="text-white text-xs font-bold tracking-wide">Siratim Mustakim</p>
                  <p className="text-white/60 text-[10px] mt-0.5">Full Stack Developer</p>
                </div>
              </motion.div>

              {/* ── floating stat chips ── */}
              <motion.div
                className="absolute -top-5 -left-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-xl
                  bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{ opacity: { delay: 0.8 }, y: { delay: 0.8, duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}>
                  <i className="bx bx-code-alt text-white text-base" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-none">5+</p>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">Projects</p>
                </div>
              </motion.div>

              {/* top-right: 10+ Technologies */}
              <motion.div
                className="absolute -top-5 -right-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-xl
                  bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{ opacity: { delay: 1 }, y: { delay: 1, duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-violet-500/10">
                  <i className="bx bx-layer text-violet-500 text-base" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-none">10+</p>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">Technologies</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-xl
                  bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [0, 5, 0] }}
                transition={{ opacity: { delay: 1.2 }, y: { delay: 1.2, duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-none">Open to Work</p>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">Available now</p>
                </div>
              </motion.div>

              {/* ── tech stack row ── */}
              <motion.div
                className="absolute -bottom-5 -right-4 flex items-center gap-1.5 px-3 py-2 rounded-xl shadow-xl
                  bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {TECH.slice(0, 4).map(t => (
                  <i key={t.label} className={`bx ${t.icon} text-lg`} style={{ color: t.color }} title={t.label} />
                ))}
                <span className="text-[10px] text-slate-400 dark:text-slate-600 font-bold ml-0.5">+2</span>
              </motion.div>

              {/* background card (depth effect) */}
              <div
                className="absolute inset-0 rounded-2xl -z-10 border border-slate-200 dark:border-slate-800
                  bg-slate-100 dark:bg-slate-900"
                style={{ transform: 'rotate(6deg) translate(8px, 8px)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  )
}


