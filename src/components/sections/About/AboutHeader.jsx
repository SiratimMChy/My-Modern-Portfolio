import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function AboutHeader() {
  return (
    <motion.div className="flex flex-col items-center text-center mb-2 sm:mb-6" {...fade(0)}>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-violet-400/25 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/5 text-violet-600 dark:text-violet-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
        <i className="bx bx-user text-sm" />
        About Me
      </span>
      <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Who Am{' '}
        <span className='bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent'>I</span>
      </h2>
      <div className="mt-4 w-12 h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg,#818cf8,#38bdf8)' }} />
    </motion.div>
  )
}
