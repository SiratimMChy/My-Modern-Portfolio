import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HIGHLIGHTS = [
  { icon: 'bx-code-alt',     label: 'Full Stack',    desc: 'MERN Stack',         color: '#38bdf8' },
  { icon: 'bxl-android',     label: 'Android',       desc: 'Java Development',   color: '#a3e635' },
  { icon: 'bx-shield-alt-2', label: 'Secure APIs',   desc: 'JWT & Firebase',     color: '#818cf8' },
  { icon: 'bx-devices',      label: 'Responsive',    desc: 'UI/UX Design',       color: '#f472b6' },
]

const HOBBIES = [
  { icon: 'bx-cricket-ball', label: 'Cricket' },
  { icon: 'bx-heart',        label: 'Animal Lover' },
  { icon: 'bx-code-curly',   label: 'Coding' },
  { icon: 'bx-book-open',    label: 'Learning' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 overflow-hidden
        bg-slate-50 dark:bg-[#07090f]
        transition-colors duration-300"
    >
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
        bg-violet-200/30 dark:bg-violet-700/8 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full
        bg-sky-200/30 dark:bg-sky-600/8 blur-[100px]" />

      {/* top border */}
      <div className="absolute top-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── section label ── */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fade(0)}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border
            border-violet-400/25 dark:border-violet-500/20
            bg-violet-50 dark:bg-violet-500/5
            text-violet-600 dark:text-violet-400
            text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
            <i className="bx bx-user text-sm" />
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]
            text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Who I{' '}
            <span style={{
              background: 'linear-gradient(90deg,#818cf8,#38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Am</span>
          </h2>
          <div className="mt-4 w-12 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#818cf8,#38bdf8)' }} />
        </motion.div>

        {/* ── main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — image + highlight cards */}
          <motion.div
            className="relative flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* glow */}
            <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-20
              bg-gradient-to-tr from-sky-400 to-violet-500" />

            {/* photo */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex-shrink-0">
              <div className="w-full h-full rounded-3xl p-[2.5px]"
                style={{ background: 'linear-gradient(135deg,#38bdf8,#818cf8,#c084fc)' }}>
                <div className="w-full h-full rounded-[22px] overflow-hidden
                  bg-slate-100 dark:bg-slate-900">
                  <img
                    src="/profile-image.jpg"
                    alt="Siratim Mustakim Chowdhury"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 10%' }}
                  />
                </div>
              </div>

              {/* experience badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl shadow-xl
                  bg-white dark:bg-[#0d1117]
                  border border-slate-200 dark:border-slate-800"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">CS</p>
                <p className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase mt-0.5">Graduate</p>
              </motion.div>

              {/* top-left badge */}
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
            </div>

            {/* highlight cards — 2×2 grid below image on mobile, absolute on lg */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
              {HIGHLIGHTS.slice(0, 2).map((h, i) => (
                <motion.div
                  key={h.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg w-44
                    bg-white dark:bg-[#0d1117]
                    border border-slate-200 dark:border-slate-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${h.color}18` }}>
                    <i className={`bx ${h.icon} text-base`} style={{ color: h.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-none">{h.label}</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — text content */}
          <div className="space-y-7 text-center lg:text-left order-1 lg:order-2">

            <motion.h3
              className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200"
              {...fade(0.1)}
            >
              Full Stack Web & Android Developer
            </motion.h3>

            <motion.div className="space-y-4 text-slate-500 dark:text-slate-400 text-sm leading-[1.9]" {...fade(0.2)}>
              <p>
                I am a B.Sc. graduate in Computer Science and Engineering with strong expertise in{' '}
                <span className="text-slate-700 dark:text-slate-300 font-medium">Java and JavaScript</span>,
                specializing in building scalable, secure, and high-performance applications across both web and mobile platforms.
                I develop modern solutions using the{' '}
                <span className="text-slate-700 dark:text-slate-300 font-medium">MERN stack</span>,
                Android (Java), Firebase, JWT-secured REST APIs, and responsive UI/UX design principles.
              </p>
              <p>
                I have successfully designed and developed multiple real-world projects, including{' '}
                <span className="text-sky-600 dark:text-sky-400 font-medium">Navora</span>,{' '}
                <span className="text-violet-600 dark:text-violet-400 font-medium">Orvella</span>,{' '}
                <span className="text-sky-600 dark:text-sky-400 font-medium">PawMart</span>,{' '}
                <span className="text-violet-600 dark:text-violet-400 font-medium">Hemovia</span>,{' '}
                <span className="text-sky-600 dark:text-sky-400 font-medium">CLASSMATE</span>, and a{' '}
                <span className="text-violet-600 dark:text-violet-400 font-medium">Women's Safety Android</span> application.
                These projects demonstrate my ability to architect full-stack systems, implement secure authentication
                and payment workflows, and deliver user-focused, production-ready applications.
              </p>
              <p>
                I am passionate about problem-solving, clean architecture, and continuously improving my skills
                while building impactful digital products that solve real-world problems.
              </p>
            </motion.div>

            {/* highlight cards — mobile/tablet (shown below lg) */}
            <motion.div className="grid grid-cols-2 gap-3 lg:hidden" {...fade(0.3)}>
              {HIGHLIGHTS.map(h => (
                <div key={h.label}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl
                    bg-white dark:bg-white/[0.03]
                    border border-slate-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${h.color}18` }}>
                    <i className={`bx ${h.icon} text-base`} style={{ color: h.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-none">{h.label}</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* hobbies */}
            <motion.div {...fade(0.35)}>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 dark:text-slate-600 mb-3">
                Interests & Hobbies
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {HOBBIES.map(h => (
                  <span key={h.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                      bg-white dark:bg-white/[0.04]
                      border border-slate-200 dark:border-slate-800
                      text-slate-600 dark:text-slate-400">
                    <i className={`bx ${h.icon} text-sm text-violet-500 dark:text-violet-400`} />
                    {h.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div className="flex flex-wrap gap-3 justify-center lg:justify-start" {...fade(0.45)}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#818cf8,#38bdf8)' }}
              >
                <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700
                  bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                <i className="bx bx-send text-base relative z-10" />
                <span className="relative z-10">Let's Connect</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200
                  border border-slate-300 dark:border-slate-800
                  text-slate-600 dark:text-slate-400
                  hover:text-slate-900 dark:hover:text-white
                  hover:border-slate-500 dark:hover:border-slate-500
                  bg-white dark:bg-white/[0.02]"
              >
                <i className="bx bx-folder text-base" />
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
