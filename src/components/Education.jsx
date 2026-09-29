import { motion } from 'framer-motion'
import { Card } from './ui/card'

import { EDUCATION, PROJECTS, SUBJECTS } from '../data/educationData'

const gradeStyle = g => {
  if (g === 'A+') return { color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)' }
  if (g === 'A')  return { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.25)' }
  return              { color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.25)' }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 overflow-hidden bg-[#F5F5F0] dark:bg-[#07090f] transition-colors duration-300"
    >
      
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-200/25 dark:bg-indigo-700/8 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        
        <motion.div
          className="flex flex-col items-center text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-indigo-400/25 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <i className="bx bxs-graduation text-sm" />
            Academic Background
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            My{' '}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>

          <motion.div
            className="mt-4 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#0ea5e9,#6366f1)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        
        <motion.div
          className="mb-10 group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
        >
          <Card className="rounded-2xl p-6 sm:p-8 bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 group-hover:border-indigo-400/40 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <i className="bx bxs-school text-white text-2xl" />
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25 }}
              >
                {EDUCATION.degree}
              </motion.h3>
              <motion.p
                className="text-sm font-semibold mt-1"
                style={{ color: '#0ea5e9' }}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32 }}
              >
                {EDUCATION.institution}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-2 sm:flex-col sm:items-end"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#EBE8E0] dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                <i className="bx bx-calendar text-sm" />
                {EDUCATION.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-500/5">
                <i className="bx bxs-badge-check text-sm" />
                {EDUCATION.status}
              </span>
            </motion.div>
          </div>
          </Card>
        </motion.div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          
          <motion.div
            className="group h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="rounded-2xl p-6 bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 h-full">
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(56,189,248,0.12)' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25, type: 'spring', stiffness: 220 }}
              >
                <i className="bx bxs-trophy text-lg" style={{ color: '#38bdf8' }} />
              </motion.div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Key Projects</h4>
                <motion.div
                  className="h-[2px] rounded-full mt-1"
                  style={{ background: '#38bdf8' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                />
              </div>
            </div>

            <motion.div className="space-y-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {PROJECTS.map((p, i) => {
                const gs = gradeStyle(p.grade)
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-4 rounded-xl cursor-default bg-[#F5F5F0] dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 transition-colors duration-150"
                    whileHover={{ borderColor: p.color + '55', x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${p.color}15` }}
                      whileHover={{ scale: 1.15, rotate: 8, transition: { duration: 0.2 } }}
                    >
                      <i className={`bx ${p.icon} text-base`} style={{ color: p.color }} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{p.title}</p>
                        <motion.span
                          className="text-[10px] font-black px-2 py-0.5 rounded-md flex-shrink-0"
                          style={{ color: gs.color, background: gs.bg, border: `1px solid ${gs.border}` }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {p.grade}
                        </motion.span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
            </Card>
          </motion.div>

          
          <motion.div
            className="group h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="rounded-2xl p-6 bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(99,102,241,0.12)' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 220 }}
              >
                <i className="bx bxs-book-content text-lg" style={{ color: '#6366f1' }} />
              </motion.div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Key Subjects</h4>
                <motion.div
                  className="h-[2px] rounded-full mt-1"
                  style={{ background: '#6366f1' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                />
              </div>
            </div>

            <motion.div className="space-y-2.5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {SUBJECTS.map((s, i) => {
                const gs = gradeStyle(s.grade)
                return (
                  <motion.div
                    key={i}
                    variants={fadeRight}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default bg-[#F5F5F0] dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 transition-colors duration-150"
                    whileHover={{ borderColor: s.color + '55', x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${s.color}15` }}
                      whileHover={{ scale: 1.15, rotate: 8, transition: { duration: 0.2 } }}
                    >
                      <i className={`bx ${s.icon} text-base`} style={{ color: s.color }} />
                    </motion.div>
                    <p className="flex-1 text-xs font-medium text-slate-700 dark:text-slate-300 min-w-0">{s.name}</p>
                    <motion.span
                      className="text-[10px] font-black px-2 py-0.5 rounded-md flex-shrink-0"
                      style={{ color: gs.color, background: gs.bg, border: `1px solid ${gs.border}` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {s.grade}
                    </motion.span>
                  </motion.div>
                )
              })}
            </motion.div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
