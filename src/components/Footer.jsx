import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siratim-mustakim-chowdhury', icon: 'bxl-linkedin', color: '#0077b5' },
  { label: 'GitHub',   href: 'https://github.com/SiratimMChy',                         icon: 'bxl-github',   color: '#171515' },
  { label: 'Email',    href: 'mailto:chowdhurysiratimmustakim@gmail.com',               icon: 'bx-envelope',  color: '#38bdf8' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-50 dark:bg-[#07090f] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">

      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-sky-200/10 dark:bg-sky-600/5 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-violet-200/10 dark:bg-violet-700/5 blur-[80px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative flex flex-col items-center gap-8 px-6 py-12 mx-auto max-w-7xl sm:px-12 lg:px-20">
        
        {/* Back to Home Button */}
        <motion.div
          className="absolute bottom-2 right-6 sm:right-12 lg:right-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            className="group relative w-8 h-8 rounded-sm flex items-center justify-center overflow-hidden hover:bg-transparent dark:hover:bg-transparent transition-all duration-300"
            variant="outline"
          >
            <a href="#home" aria-label="Back to home">
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              <i className="bx bx-chevron-up text-lg transition-all duration-300 relative z-10 group-hover:text-sky-500 group-hover:scale-125" />
            </a>
          </Button>
        </motion.div>

        {/* logo + badge */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href="#home"
            className="text-3xl font-black tracking-tight"
            style={{ 
              fontFamily: 'Cursive, serif',
              fontStyle: 'italic',
              background: 'linear-gradient(90deg,#38bdf8,#818cf8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              paddingRight: '4px',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Smc.dev
          </motion.a>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-500/5 text-[10px] gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>
        </motion.div>

        {/* nav links with enhanced animations */}
        <motion.nav
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {NAV.map((n, index) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
            >
              <Button 
                variant="link" 
                size="sm" 
                asChild
                className="h-auto px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 relative group transition-colors duration-200"
              >
                <a href={n.href}>
                  {n.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-violet-500 group-hover:w-full transition-all duration-300" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.nav>

        {/* social icons with enhanced animations */}
        <motion.nav
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {SOCIALS.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.92 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="w-11 h-11 rounded-sm group hover:bg-transparent dark:hover:bg-transparent transition-all duration-300 relative overflow-hidden"
                asChild
              >
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {/* Shimmer effect background */}
                  <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                  
                  <i className={`bx ${s.icon} text-xl transition-all duration-300 relative z-10 ${
                    s.icon === 'bxl-linkedin' ? 'group-hover:text-[#0077b5]' :
                    s.icon === 'bxl-github' ? 'group-hover:text-slate-900 dark:group-hover:text-white' :
                    'group-hover:text-sky-500'
                  } group-hover:scale-110 group-hover:rotate-12`} />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.nav>

        {/* divider with glow effect */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent relative"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent blur-sm opacity-0"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
        </motion.div>

        {/* copyright with staggered text animation */}
        <motion.p
          className="text-[11px] text-slate-400 dark:text-slate-600 font-medium text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {year} <span className="font-bold text-slate-600 dark:text-slate-400">Siratim Mustakim Chowdhury</span>. All rights reserved.
        </motion.p>

      </div>
    </footer>
  )
}

