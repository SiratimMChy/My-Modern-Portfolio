import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const CONTACT_INFO = [
  {
    icon: 'bx-envelope',
    label: 'Email',
    value: 'chowdhurysiratimmustakim@gmail.com',
    href: 'mailto:chowdhurysiratimmustakim@gmail.com',
    color: '#38bdf8',
  },
  {
    icon: 'bx-phone',
    label: 'Phone',
    value: '+880 1727 419 001',
    href: 'tel:+8801727419001',
    color: '#34d399',
  },
  {
    icon: 'bx-map-pin',
    label: 'Location',
    value: 'Sylhet, Bangladesh',
    href: null,
    color: '#818cf8',
  },
]

const SOCIALS = [
  { icon: 'bxl-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/siratim-mustakim-chowdhury', color: '#38bdf8' },
  { icon: 'bxl-github',   label: 'GitHub',   href: 'https://github.com/SiratimMChy',                         color: '#818cf8' },
  { icon: 'bx-envelope',  label: 'Email',    href: 'mailto:chowdhurysiratimmustakim@gmail.com',               color: '#34d399' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', msg: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.id]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', msg: '' })

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' })
      setLoading(false)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
      setLoading(false)
      return
    }

    const svcId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const tplId  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!svcId || !tplId || !pubKey || svcId === 'your_service_id_here') {
      setStatus({ type: 'error', msg: 'Contact form not configured. Email me directly at chowdhurysiratimmustakim@gmail.com' })
      setLoading(false)
      return
    }

    try {
      await emailjs.send(svcId, tplId, {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.subject || 'New Contact Form Message',
        message:    form.message,
        reply_to:   form.email,
      }, pubKey)
      setStatus({ type: 'success', msg: "Message sent! I'll get back to you within 24 hours." })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus({ type: 'error', msg: 'Failed to send. Please email me directly at chowdhurysiratimmustakim@gmail.com' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-white dark:bg-[#060810] transition-colors duration-300">

      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-violet-200/25 dark:bg-violet-700/8 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* header */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fade(0)}>
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-sky-400/25 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5"
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          >
            <i className="bx bx-chat text-sm" /> Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Contact{' '}
            <span style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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

        {/* two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">

          {/* LEFT — info: single card, full height */}
          <motion.div className="h-full" {...fade(0.1)}>
            <div className="rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 h-full flex flex-col">

              {/* intro */}
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
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                  I'm currently available for freelance projects and full-time opportunities. Feel free to reach out — I typically respond within 24 hours.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-500/5 text-[10px]">
                    Available for opportunities
                  </Badge>
                </div>
              </div>

              {/* contact info */}
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

              {/* socials */}
              <div className="p-5">
                <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-600 mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {SOCIALS.map(s => (
                    <Button key={s.label} variant="outline" size="icon" className="w-11 h-11 rounded-xl" asChild>
                      <motion.a href={s.href} target="_blank" rel="noopener noreferrer"
                        aria-label={s.label}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                        <i className={`bx ${s.icon} text-xl`} style={{ color: s.color }} />
                      </motion.a>
                    </Button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 h-full"
            {...fade(0.2)}
          >
            <p className="text-sm font-black text-slate-900 dark:text-white mb-1">Send a Message</p>
            <div className="h-[2px] w-6 rounded-full mb-6" style={{ background: '#818cf8' }} />

            {/* status */}
            <AnimatePresence>
              {status.msg && (
                <motion.div
                  className={`flex items-start gap-3 p-4 rounded-xl mb-5 text-xs font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-500/8 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                      : 'bg-red-50 dark:bg-red-500/8 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400'
                  }`}
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <i className={`bx ${status.type === 'success' ? 'bx-check-circle' : 'bx-error-circle'} text-base flex-shrink-0 mt-0.5`} />
                  {status.msg}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'name',  label: 'Name *',    type: 'text',  placeholder: 'Your name' },
                  { id: 'email', label: 'Email *',   type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-1.5">{f.label}</label>
                    <input
                      id={f.id} type={f.type} placeholder={f.placeholder}
                      value={form[f.id]} onChange={onChange} required
                      className="w-full px-4 py-2.5 rounded-xl text-sm
                        bg-white dark:bg-white/[0.04]
                        border border-slate-200 dark:border-slate-800
                        text-slate-800 dark:text-slate-200
                        placeholder-slate-400 dark:placeholder-slate-600
                        focus:outline-none focus:border-sky-400 dark:focus:border-sky-500
                        transition-colors duration-150"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-1.5">Subject</label>
                <input
                  id="subject" type="text" placeholder="Project inquiry, collaboration..."
                  value={form.subject} onChange={onChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm
                    bg-white dark:bg-white/[0.04]
                    border border-slate-200 dark:border-slate-800
                    text-slate-800 dark:text-slate-200
                    placeholder-slate-400 dark:placeholder-slate-600
                    focus:outline-none focus:border-sky-400 dark:focus:border-sky-500
                    transition-colors duration-150"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-1.5">Message *</label>
                <textarea
                  id="message" rows={5} placeholder="Tell me about your project or idea..."
                  value={form.message} onChange={onChange} required
                  className="w-full px-4 py-2.5 rounded-xl text-sm resize-none
                    bg-white dark:bg-white/[0.04]
                    border border-slate-200 dark:border-slate-800
                    text-slate-800 dark:text-slate-200
                    placeholder-slate-400 dark:placeholder-slate-600
                    focus:outline-none focus:border-sky-400 dark:focus:border-sky-500
                    transition-colors duration-150"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="group relative w-full gap-2.5 text-sm font-semibold text-white overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}
                asChild
              >
                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.99 }}
                >
                  <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="bx bx-send text-base relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
