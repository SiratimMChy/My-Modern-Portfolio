import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { ModernButton } from './ui/modern-button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', msg: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }))

  const onSubmit = async (e) => {
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

    const svcId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const tplId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!svcId || !tplId || !pubKey || svcId === 'your_service_id_here') {
      setStatus({
        type: 'error',
        msg: 'Contact form not configured. Email me directly at chowdhurysiratimmustakim@gmail.com',
      })
      setLoading(false)
      return
    }

    try {
      await emailjs.send(
        svcId,
        tplId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'New Contact Form Message',
          message: form.message,
          reply_to: form.email,
        },
        pubKey
      )
      setStatus({ type: 'success', msg: "Message sent! I'll get back to you within 24 hours." })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        msg: 'Failed to send. Please email me directly at chowdhurysiratimmustakim@gmail.com',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {status.msg && (
          <motion.div
            className={`flex items-start gap-3 p-4 rounded-xl mb-5 text-xs font-medium ${
              status.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-500/8 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                : 'bg-red-50 dark:bg-red-500/8 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <i
              className={`bx ${
                status.type === 'success' ? 'bx-check-circle' : 'bx-error-circle'
              } text-base flex-shrink-0 mt-0.5`}
            />
            {status.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'name', label: 'Name *', type: 'text', placeholder: 'Your name' },
            { id: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com' },
          ].map((f) => (
            <div key={f.id}>
              <label
                htmlFor={f.id}
                className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-1.5"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.id]}
                onChange={onChange}
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-400 dark:focus:border-sky-500 transition-colors duration-150"
              />
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-1.5"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project inquiry, collaboration..."
            value={form.subject}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-400 dark:focus:border-sky-500 transition-colors duration-150"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-1.5"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project or idea..."
            value={form.message}
            onChange={onChange}
            required
            className="w-full px-4 py-2.5 rounded-xl text-sm resize-none bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-400 dark:focus:border-sky-500 transition-colors duration-150"
          />
        </div>

        <ModernButton
          type="submit"
          disabled={loading}
          variant="gradient"
          className="group relative w-full overflow-hidden"
          asChild
        >
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: loading ? 1 : 0.99 }}
          >
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            {loading ? (
              <span className="gap-2 flex items-center">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                <span className="relative z-10">Sending...</span>
              </span>
            ) : (
              <span className="gap-2 flex items-center">
                <i className="bx bx-send text-base relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                <span className="relative z-10">Send Message</span>
              </span>
            )}
          </motion.button>
        </ModernButton>
      </form>
    </>
  )
}
