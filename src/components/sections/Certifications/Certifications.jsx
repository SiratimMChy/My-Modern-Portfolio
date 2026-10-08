import { motion } from 'framer-motion'
import { Card, CardContent } from '../../ui/card'
import { CERTIFICATIONS } from '../../../data/certificationsData'

export default function Certifications() {
  return (
    <section id="certifications" className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 overflow-hidden bg-[#F5F5F0]/50 dark:bg-[#060810] transition-colors duration-300">
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-pink-200/20 dark:bg-pink-600/5 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        <motion.div className="flex flex-col items-center text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-pink-400/25 dark:border-pink-500/20 bg-pink-50 dark:bg-pink-500/5 text-pink-600 dark:text-pink-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
            <i className="bx bx-certification text-sm" /> Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Licenses &{' '}
            <span className='bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>
              Certifications
            </span>
          </h2>
          <motion.div className="mt-4 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#f472b6,#c084fc)' }}
            initial={{ width: 0 }} whileInView={{ width: 48 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={i}
              className="group block h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card className="h-full rounded-2xl bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 overflow-hidden w-full transition-colors group-hover:border-slate-300 dark:group-hover:border-slate-700">
                <CardContent className="p-5 sm:p-6 flex items-center gap-4 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cert.color + '15' }}>
                    <i className={`bx ${cert.icon} text-2xl sm:text-3xl`} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] sm:text-[15px] font-black text-slate-800 dark:text-slate-100 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 truncate">
                      {cert.issuer}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 font-mono">
                      Issued {cert.date}
                    </p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                    <i className="bx bx-link-external text-lg sm:text-xl text-slate-400 dark:text-slate-500 group-hover:text-pink-400" />
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
