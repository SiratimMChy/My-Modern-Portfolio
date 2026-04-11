import { useRef } from 'react'
import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: 'bx-code-alt',
    color: '#38bdf8',
    skills: [
      { name: 'Java',       icon: 'bxl-java',       color: '#e76f00' },
      { name: 'JavaScript', icon: 'bxl-javascript', color: '#f7df1e' },
      { name: 'TypeScript', icon: 'bxl-typescript', color: '#3178c6' },
      { name: 'Python',     icon: 'bxl-python',     color: '#3776ab' },
      { name: 'C',          icon: 'bx-code-curly',  color: '#a8b9cc' },
      { name: 'C++',        icon: 'bx-code-block',  color: '#00599c' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'bx-palette',
    color: '#34d399',
    skills: [
      { name: 'React.js',     icon: 'bxl-react',        color: '#61dafb' },
      { name: 'Next.js',      icon: null,                color: '#888', svg: true },
      { name: 'HTML5',        icon: 'bxl-html5',        color: '#e34f26' },
      { name: 'CSS3',         icon: 'bxl-css3',         color: '#1572b6' },
      { name: 'Tailwind CSS', icon: 'bxl-tailwind-css', color: '#06b6d4' },
      { name: 'DaisyUI',      icon: 'bx-paint',         color: '#ff69b4' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'bx-server',
    color: '#818cf8',
    skills: [
      { name: 'Node.js',     icon: 'bxl-nodejs',   color: '#339933' },
      { name: 'Express.js',  icon: 'bx-server',    color: '#888' },
      { name: 'JWT',         icon: 'bx-key',       color: '#d63aff' },
      { name: 'Firebase',    icon: 'bxl-firebase', color: '#ffca28' },
      { name: 'REST APIs',   icon: 'bx-link',      color: '#6366f1' },
    ],
  },
  {
    title: 'Databases, Cloud & Tools',
    icon: 'bx-data',
    color: '#fb923c',
    skills: [
      { name: 'MongoDB', icon: 'bxl-mongodb',    color: '#47a248' },
      { name: 'SQL',     icon: 'bx-data',        color: '#336791' },
      { name: 'Git',     icon: 'bxl-git',        color: '#f05032' },
      { name: 'GitHub',  icon: 'bxl-github',     color: '#888' },
      { name: 'Stripe',  icon: 'bx-credit-card', color: '#635bff' },
    ],
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Skills() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 overflow-hidden
        bg-white dark:bg-[#060810]
        transition-colors duration-300"
    >
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
        bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full
        bg-violet-200/25 dark:bg-violet-700/8 blur-[100px]" />

      {/* top border */}
      <div className="absolute top-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── header ── */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fade(0)}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border
            border-sky-400/25 dark:border-sky-500/20
            bg-sky-50 dark:bg-sky-500/5
            text-sky-600 dark:text-sky-400
            text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
            <i className="bx bx-chip text-sm" />
            Technical Expertise
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]
              text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Skills &amp;{' '}
            <span style={{
              background: 'linear-gradient(90deg,#38bdf8,#818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Expertise
            </span>
          </h2>
          <div className="mt-4 w-12 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }} />
        </motion.div>

        {/* ── 4 cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={ci}
              className="rounded-2xl p-6 flex flex-col gap-5
                bg-slate-50 dark:bg-white/[0.03]
                border border-slate-200 dark:border-slate-800
                hover:border-slate-300 dark:hover:border-slate-700
                transition-colors duration-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* card header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cat.color}15` }}>
                  <i className={`bx ${cat.icon} text-xl`} style={{ color: cat.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                    {cat.title}
                  </h3>
                  <div className="h-[2px] w-6 rounded-full mt-1.5" style={{ background: cat.color }} />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0"
                  style={{ color: cat.color, background: `${cat.color}12` }}>
                  {cat.skills.length}
                </span>
              </div>

              {/* skill chips */}
              <div className="grid grid-cols-3 gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    className="chip flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-xl cursor-default select-none
                      bg-white dark:bg-white/[0.04]
                      border border-slate-200 dark:border-slate-800
                      hover:border-slate-300 dark:hover:border-slate-700
                      transition-colors duration-150"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.06 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${skill.color}18` }}>
                      {skill.svg ? (
                        <svg viewBox="0 0 180 180" className="w-5 h-5" fill="currentColor" style={{ color: skill.color }}>
                          <mask id={`m${si}`} maskUnits="userSpaceOnUse">
                            <circle cx="90" cy="90" r="90" fill="white" />
                            <path d="M149 154L69.5 54H54v72.5h13V71l73 95.5a90.3 90.3 0 0 0 9-12.5z" fill="black" />
                            <rect x="107" y="54" width="13" height="72" fill="black" />
                          </mask>
                          <circle cx="90" cy="90" r="90" fill={skill.color} mask={`url(#m${si})`} />
                        </svg>
                      ) : (
                        <i className={`bx ${skill.icon} text-xl`} style={{ color: skill.color }} />
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 text-center leading-tight px-1">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── bottom CTA ── */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fade(0.2)}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white rounded-sm overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#6366f1)' }}
          >
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700
              bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            <i className="bx bx-chat text-base relative z-10" />
            <span className="relative z-10">Let's Work Together</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200
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
    </section>
  )
}
