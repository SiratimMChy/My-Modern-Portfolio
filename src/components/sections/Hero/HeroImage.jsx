import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

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
  }, [strength, x, y])
  return { x: sx, y: sy }
}

const TECH = [
  { icon: 'bxl-react',      label: 'React',   color: '#38bdf8' },
  { icon: 'bxl-nodejs',     label: 'Node.js', color: '#4ade80' },
  { icon: 'bxl-mongodb',    label: 'MongoDB', color: '#34d399' },
  { icon: 'bxl-javascript', label: 'JS',      color: '#facc15' },
  { icon: 'bxl-typescript', label: 'TS',      color: '#60a5fa' },
  { icon: 'bxl-android',    label: 'Android', color: '#a3e635' },
]

export default function HeroImage() {
  const para = useParallax()

  return (
    <motion.div
      className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-auto"
      style={{ x: para.x, y: para.y }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] max-[360px]:scale-[0.8] max-[360px]:origin-center transition-transform duration-300">

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ rotate: 3 }}
          whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 inset-x-0 h-1 z-10" style={{ background: 'linear-gradient(90deg,#38bdf8,#6366f1,#c084fc)' }} />

          <img
            src="/profile-image.jpg"
            alt="Siratim Mustakim Chowdhury"
            className="w-full aspect-[3/4] object-cover"
            style={{ objectPosition: '50% 10%' }}
          />

          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-4">
            <p className="text-white text-xs font-bold tracking-wide">Siratim Mustakim</p>
            <p className="text-white/60 text-[10px] mt-0.5">Full Stack Developer</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -top-5 -left-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-xl shadow-slate-200/60 dark:shadow-xl bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ opacity: { delay: 0.8 }, y: { delay: 0.8, duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}>
            <i className="bx bx-code-alt text-white text-base" />
          </div>
          <div>
            <p className="text-xs font-black text-slate-900 dark:text-white leading-none">5+</p>
            <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">Projects</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -top-5 -right-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-xl shadow-slate-200/60 dark:shadow-xl bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
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
          className="absolute -bottom-5 -left-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-xl shadow-slate-200/60 dark:shadow-xl bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
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

        <motion.div
          className="absolute -bottom-8 -right-4 flex items-center gap-1.5 px-3 py-2 rounded-xl shadow-xl shadow-slate-200/60 dark:shadow-xl bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ opacity: { delay: 1.4 }, y: { delay: 1.4, duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
        >
          {TECH.slice(0, 4).map(t => (
            <i key={t.label} className={`bx ${t.icon} text-lg`} style={{ color: t.color }} title={t.label} />
          ))}
          <span className="text-[10px] text-slate-400 dark:text-slate-600 font-bold ml-0.5">+2</span>
        </motion.div>

        <div
          className="absolute inset-0 rounded-2xl -z-10 border border-slate-200 dark:border-slate-800 bg-[#EBE8E0] dark:bg-slate-900"
          style={{ transform: 'rotate(6deg) translate(8px, 8px)' }}
        />
      </div>
    </motion.div>
  )
}
