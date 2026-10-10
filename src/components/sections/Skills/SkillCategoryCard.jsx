import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card'
import { Badge } from '../../ui/badge'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const chipVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export default function SkillCategoryCard({ cat }) {
  return (
    <motion.div
      className="group skill-card"
      variants={cardVariants}
      whileHover={{ 
        y: -3,
        boxShadow: '0 8px 16px rgba(59, 130, 246, 0.08)'
      }}
    >
      <Card className="relative overflow-hidden h-full rounded-2xl
        bg-white shadow-md shadow-slate-200/40 dark:shadow-none dark:bg-white/[0.03]
        border border-slate-200 dark:border-slate-800
        hover:border-slate-300 dark:hover:border-slate-700
        transition-all duration-300 cursor-default">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-br from-sky-500/5 to-violet-500/5 pointer-events-none" />

        <CardHeader className="flex flex-row items-center gap-3 relative z-10 p-6 pb-2 space-y-0">
          <div className="flex-shrink-0">
            <Badge 
              className="category-badge-icon shadow-none w-10 h-10 rounded-xl flex items-center justify-center p-0 border-2 cursor-default"
              style={{ 
                borderColor: cat.color,
                background: `${cat.color}15`,
              }}
              data-color={cat.color}
            >
              <i className={`bx ${cat.icon} text-lg`} style={{ color: cat.color }} />
            </Badge>
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
              {cat.title}
            </CardTitle>
            <motion.div 
              className="h-[2px] w-6 rounded-full mt-1.5" 
              style={{ background: cat.color }}
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          <motion.span 
            className="text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0"
            style={{ color: cat.color, background: `${cat.color}12` }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {cat.skills.length}
          </motion.span>
        </CardHeader>

        <CardContent className="p-6 pt-4">
          <motion.div 
            className="grid grid-cols-3 gap-2.5 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cat.skills.map((skill, si) => (
              <motion.div
                key={si}
                className="chip flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-xl cursor-default select-none
                  bg-white shadow-sm shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.04]
                  border border-slate-200 dark:border-slate-800
                  hover:border-slate-300 dark:hover:border-slate-700
                  transition-all duration-150 relative overflow-hidden group/chip"
                variants={chipVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300
                  bg-gradient-to-br from-sky-500/10 to-violet-500/10 pointer-events-none" />

                <motion.div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center relative z-10 overflow-hidden bg-slate-100 dark:bg-transparent"
                  variants={{
                    hover: {
                      scale: 1.15,
                      rotate: -10,
                      y: -4,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }
                  }}
                >
                  <div className="absolute inset-0 hidden dark:block opacity-[0.12]" style={{ backgroundColor: skill.color }} />
                  {skill.svg ? (
                    <svg viewBox="0 0 180 180" className="w-5 h-5 relative z-10" fill="currentColor" style={{ color: skill.color }}>
                      <mask id={`m${cat.title.replace(/ /g, "")}${si}`} maskUnits="userSpaceOnUse">
                        <circle cx="90" cy="90" r="90" fill="white" />
                        <path d="M149 154L69.5 54H54v72.5h13V71l73 95.5a90.3 90.3 0 0 0 9-12.5z" fill="black" />
                        <rect x="107" y="54" width="13" height="72" fill="black" />
                      </mask>
                      <circle cx="90" cy="90" r="90" fill={skill.color} mask={`url(#m${cat.title.replace(/ /g, "")}${si})`} />
                    </svg>
                  ) : (
                    <i className={`bx ${skill.icon} text-xl relative z-10`} style={{ color: skill.color }} />
                  )}
                </motion.div>
                <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 text-center leading-tight px-1 relative z-10">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
