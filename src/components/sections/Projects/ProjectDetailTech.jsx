import { motion } from 'framer-motion'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { getTechConfig } from '../../../lib/techConfig'

export default function ProjectDetailTech({ tech, itemVariants }) {
  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <i className="bx bx-code-curly text-primary"></i>
        Technology Stack
      </h3>
      <div className="flex flex-wrap gap-3">
        {tech.map((t, index) => {
          const techConfig = getTechConfig(t)
          return (
            <motion.span
              key={index}
              className={`inline-flex items-center gap-2 px-4 py-2 ${techConfig.bg} ${techConfig.border} border text-sm font-medium rounded-lg`}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center">
                {techConfig.iconType === 'react-icon' ? (
                  techConfig.icon === 'nextjs' ? (
                    <SiNextdotjs className={`${techConfig.color} text-base`} />
                  ) : techConfig.icon === 'express' ? (
                    <SiExpress className={`${techConfig.color} text-base`} />
                  ) : null
                ) : (
                  <i className={`bx ${techConfig.icon} ${techConfig.color} text-base`}></i>
                )}
              </div>
              <span className="text-foreground">{t}</span>
            </motion.span>
          )
        })}
      </div>
    </motion.div>
  )
}
