import { motion } from 'framer-motion'
import { SiNextdotjs, SiExpress } from 'react-icons/si'

import { getTechConfig } from '../lib/techConfig'

export default function ProjectTechTags({ tech }) {
  if (!tech || tech.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1 mb-4 min-h-[44px]">
      {tech.slice(0, 3).map((t, index) => {
        const config = getTechConfig(t)
        const icon = config.icon
        const color = config.hex

        return (
          <motion.span
            key={t}
            className="inline-flex items-center gap-1 text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-[#F5F5F0] dark:bg-white/[0.03] text-slate-500 dark:text-slate-400 h-[22px] cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
          >
            {icon === 'nextjs' && (
              <SiNextdotjs
                className="flex-shrink-0 text-xs"
                style={color ? { color } : {}}
              />
            )}
            {icon === 'express' && (
              <SiExpress
                className="flex-shrink-0 text-xs"
                style={color ? { color } : {}}
              />
            )}
            {icon && icon !== 'nextjs' && icon !== 'express' && (
              <i
                className={`bx ${icon} text-xs flex-shrink-0`}
                style={color ? { color } : {}}
              />
            )}
            <span className="leading-none">{t}</span>
          </motion.span>
        )
      })}
      {tech.length > 3 && (
        <motion.span
          className="inline-flex items-center justify-center text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 h-[22px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          +{tech.length - 3}
        </motion.span>
      )}
    </div>
  )
}
