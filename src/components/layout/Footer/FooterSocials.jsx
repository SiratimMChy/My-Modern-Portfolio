import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/button';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siratim-mustakim-chowdhury', icon: 'bxl-linkedin', color: '#0077b5' },
  { label: 'GitHub',   href: 'https://github.com/SiratimMChy',                         icon: 'bxl-github',   color: '#171515' },
  { label: 'Email',    href: 'mailto:chysiratimmustakim@gmail.com',               icon: 'bx-envelope',  color: '#38bdf8' },
];

export default function FooterSocials() {
  return (
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
            className="w-11 h-11 rounded-md group hover:bg-transparent dark:hover:bg-transparent transition-all duration-300 relative overflow-hidden"
            asChild
          >
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
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
  );
}
