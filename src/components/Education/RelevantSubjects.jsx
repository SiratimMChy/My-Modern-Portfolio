import { motion } from 'framer-motion'
import { Card } from '../ui/card'
import { SUBJECTS } from '../../data/educationData'

const gradeStyle = g => {
  if (g === 'A+') return { color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)' }
  if (g === 'A')  return { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.25)' }
  return              { color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.25)' }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export default function RelevantSubjects() {
  return (
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

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
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
  )
}
