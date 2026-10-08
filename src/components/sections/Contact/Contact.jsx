import { motion } from 'framer-motion'
import { Card } from '../../ui/card'
import { Button } from '../../ui/button'
import ContactForm from './ContactForm'
import { CONTACT_INFO, SOCIALS } from '../../../data/contactData'
import BackgroundParticles from '../../ui/BackgroundParticles'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Contact() {

  return (
    <section id="contact" className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 overflow-hidden bg-[#F5F5F0]/50 dark:bg-[#060810] transition-colors duration-300">
      <BackgroundParticles />

      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-violet-200/25 dark:bg-violet-700/8 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        
        <motion.div className="flex flex-col items-center text-center mb-6 sm:mb-10" {...fade(0)}>
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-sky-400/25 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5"
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          >
            <i className="bx bx-chat text-sm" /> Get In Touch
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Contact{' '}
            <span className='bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent'>
              Me
            </span>
          </motion.h2>
          <motion.div className="mt-4 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }}
            initial={{ width: 0 }} whileInView={{ width: 48 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
          <motion.p className="mt-5 text-sm text-slate-500 dark:text-slate-400 max-w-md" {...fade(0.35)}>
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
          </motion.p>
        </motion.div>

        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">

          
          <motion.div className="h-full" {...fade(0.1)}>
            <Card className="rounded-2xl bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 h-full flex flex-col overflow-hidden">

              
              <div className="p-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#38bdf8,#818cf8)' }}>
                    <i className="bx bx-user text-white text-base" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 dark:text-white">Let's Work Together</p>
                    <div className="h-[2px] w-5 rounded-full mt-1" style={{ background: '#38bdf8' }} />
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Have a project in mind or want to discuss a collaboration? I'd love to hear from you. Feel free to reach out - I typically respond within 24 hours.
                </p>
              </div>

              
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 space-y-3 flex-1">
                {CONTACT_INFO.map((c, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.08 }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: c.color + '15' }}>
                      <i className={`bx ${c.icon} text-sm`} style={{ color: c.color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold tracking-[0.12em] uppercase text-slate-400 dark:text-slate-600">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors truncate block">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{c.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              
              <div className="p-5">
                <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-600 mb-3">Connect with me</p>
                <div className="flex gap-3">
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
                        className="w-11 h-11 rounded-md group hover:bg-transparent dark:hover:bg-transparent transition-all duration-300 hover:shadow-sm"
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
              </div>

            </Card>
          </motion.div>

          
          <motion.div className="h-full" {...fade(0.2)}>
            <Card className="rounded-2xl p-6 sm:p-8 bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 h-full">
            <p className="text-sm font-black text-slate-900 dark:text-white mb-1">Send a Message</p>
            <div className="h-[2px] w-6 rounded-full mb-6" style={{ background: '#818cf8' }} />

            
            <ContactForm />
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
