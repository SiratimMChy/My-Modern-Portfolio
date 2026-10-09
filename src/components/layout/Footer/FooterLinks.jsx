import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/button';

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function FooterLinks() {
  return (
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
            variant="ghost" 
            size="sm" 
            asChild
            className="h-auto px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-transparent relative group transition-colors duration-200"
          >
            <a href={n.href}>
              {n.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.nav>
  );
}
