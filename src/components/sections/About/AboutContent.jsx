import { motion } from 'framer-motion'
import { ModernButton } from '../../ui/modern-button'

const HIGHLIGHTS = [
  { icon: 'bx-code-alt', label: 'Full Stack', desc: 'MERN Stack', color: '#38bdf8' },
  { icon: 'bxl-android', label: 'Android', desc: 'Java Development', color: '#a3e635' },
  { icon: 'bx-shield-alt-2', label: 'Secure APIs', desc: 'JWT & Firebase', color: '#818cf8' },
  { icon: 'bx-devices', label: 'Responsive', desc: 'UI/UX Design', color: '#f472b6' },
]

const HOBBIES = [
  { icon: 'bx-cricket-ball', label: 'Cricket' },
  { icon: 'bx-heart', label: 'Animal Lover' },
  { icon: 'bx-code-curly', label: 'Coding' },
  { icon: 'bx-book-open', label: 'Learning' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function AboutContent() {
  return (
    <div className="space-y-7 text-center lg:text-left order-1 lg:order-2">
      <motion.h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-200" {...fade(0.1)}>
        Full Stack & Android Developer
      </motion.h3>

      <motion.div className="space-y-4 text-slate-700 dark:text-slate-300 font-medium text-sm leading-[1.9] text-justify tracking-tight" {...fade(0.2)}>
        <p>
          I recently graduated with a B.Sc. in Computer Science and Engineering from{' '}
          <span className="text-slate-900 dark:text-white font-bold">Leading University, Sylhet</span>. I have a strong foundation in{' '}
          <span className="text-slate-900 dark:text-white font-bold">JavaScript and Java</span>, 
          specializing in the{' '}
          <span className="text-slate-900 dark:text-white font-bold">MERN stack</span>, 
          Next.js, Android, and Firebase.
        </p>
        <p>
          During university, I led development teams for my major academic projects. For my third-year Android development project, I built a Java-based women's safety app called{' '}
          <span className="text-sky-600 dark:text-sky-400 font-bold">She</span>. 
          For my fourth-year web development project, I created a collaborative platform called{' '}
          <span className="text-violet-600 dark:text-violet-400 font-bold">ClassMate</span>. 
          I earned an A+ grade for both, and my work on ClassMate earned me strong personal and team recommendations from my supervisor. Professionally, I recently worked as a Web Developer at{' '}
          <span className="text-sky-600 dark:text-sky-400 font-bold">Javed Paribahan</span>{' '}
          to digitize their billing process. I have also built several full-stack projects, including{' '}
          <span className="text-violet-600 dark:text-violet-400 font-bold">Cashnivo</span>, a personal finance tracker with a smart AI advisor;{' '}
          <span className="text-sky-600 dark:text-sky-400 font-bold">Navora</span>, an AI-powered travel guide; and{' '}
          <span className="text-violet-600 dark:text-violet-400 font-bold">Hemovia</span>, a comprehensive blood donation platform. Through these experiences, I learned how to integrate AI features, handle databases securely, manage teams, and build reliable applications.
        </p>
        <p>
          Outside of web development, I actively solve problems on platforms like{' '}
          <span className="text-sky-600 dark:text-sky-400 font-bold">HackerRank</span>,{' '}
          <span className="text-violet-600 dark:text-violet-400 font-bold">Codeforces</span>,{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">CodeChef</span>, and{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">LeetCode</span>{' '}
          because I always want to make my problem-solving skills sharper and better. Right now, I'm looking for a great team where I can apply my full-stack expertise and problem-solving skills to build scalable solutions, drive innovation, and grow alongside experienced developers.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-2 gap-3 lg:hidden" {...fade(0.3)}>
        {HIGHLIGHTS.map(h => (
          <div key={h.label}
            className="flex items-center gap-3 px-3 py-3 rounded-xl shadow-md shadow-slate-200/60 dark:shadow-none bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${h.color}18` }}>
              <i className={`bx ${h.icon} text-base`} style={{ color: h.color }} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-none">{h.label}</p>
              <p className="text-[9px] text-slate-400 mt-0.5">{h.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div {...fade(0.35)}>
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 dark:text-slate-600 mb-3">
          Interests & Hobbies
        </p>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {HOBBIES.map((h, i) => (
            <motion.span 
              key={h.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm shadow-slate-200/60 dark:shadow-none bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 cursor-default hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-colors"
            >
              <i className={`bx ${h.icon} text-sm text-violet-500 dark:text-violet-400`} />
              {h.label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div className="flex flex-wrap gap-3 justify-center lg:justify-start" {...fade(0.45)}>
        <ModernButton variant="gradient" className="group relative overflow-hidden" asChild>
          <a href="#contact">
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            <i className="bx bx-send text-base relative z-10" />
            <span className="relative z-10 gap-2 flex items-center">Let's Connect</span>
          </a>
        </ModernButton>
        <ModernButton variant="outline" asChild>
          <a href="#projects" className="gap-2">
            <i className="bx bx-folder text-base" />
            View Projects
          </a>
        </ModernButton>
      </motion.div>
    </div>
  )
}
