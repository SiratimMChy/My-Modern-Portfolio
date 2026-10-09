import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/button';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#F5F5F0] dark:bg-[#07090f] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">

      <div className="pointer-events-none absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-sky-200/10 dark:bg-sky-600/5 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-violet-200/10 dark:bg-violet-700/5 blur-[80px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative flex flex-col items-center gap-5 sm:gap-6 px-6 py-6 sm:py-8 mx-auto max-w-7xl sm:px-12 lg:px-20">
        
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

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href="#home"
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src="/logo.png" 
              alt="SMC Logo" 
              className="h-[60px] sm:h-[75px] w-auto object-contain rounded-md"
            />
          </motion.a>
        </motion.div>

        <FooterLinks />

        <FooterSocials />

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
  );
}
