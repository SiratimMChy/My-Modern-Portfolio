import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { PROJECTS } from '../data/educationData'

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

export default function AcademicProjects() {
  return (
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
                    <span
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                      style={{ color: gs.color, background: gs.bg, border: `1px solid ${gs.border}` }}
                    >
                      {p.grade}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Card>
    </motion.div>
  )
}
