import { motion } from 'framer-motion'

const HIGHLIGHTS = [
  { icon: 'bx-code-alt', label: 'Full Stack', desc: 'MERN Stack', color: '#38bdf8' },
  { icon: 'bxl-android', label: 'Android', desc: 'Java Development', color: '#a3e635' },
  { icon: 'bx-shield-alt-2', label: 'Secure APIs', desc: 'JWT & Firebase', color: '#818cf8' },
  { icon: 'bx-devices', label: 'Responsive', desc: 'UI/UX Design', color: '#f472b6' },
]

export default function AboutImage() {
  return (
    <motion.div
      className="relative flex justify-center lg:justify-start lg:pl-5 order-2 lg:order-1"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-sky-400 to-violet-500" />
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex-shrink-0">
        <div className="w-full h-full rounded-3xl p-[2.5px]" style={{ background: 'linear-gradient(135deg,#38bdf8,#818cf8,#c084fc)' }}>
          <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#EBE8E0] dark:bg-slate-900">
            <img src="/profile-image.jpg" alt="Siratim Mustakim Chowdhury" className="w-full h-full object-cover" style={{ objectPosition: '50% 10%' }} />
          </div>
        </div>

        <motion.div
          className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-xl bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">CS</p>
          <p className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase mt-0.5">Graduate</p>
        </motion.div>

        <motion.div
          className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
          style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          animate={{ y: [0, -6, 0] }}
        >
          <i className="bx bx-code-alt text-white text-xl" />
        </motion.div>

        <div className="absolute -right-32 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {HIGHLIGHTS.slice(0, 2).map((h, i) => (
            <motion.div
              key={h.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg shadow-slate-200/60 dark:shadow-lg w-44 bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${h.color}18` }}>
                <i className={`bx ${h.icon} text-base`} style={{ color: h.color }} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-none">{h.label}</p>
                <p className="text-[9px] text-slate-400 mt-0.5">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
