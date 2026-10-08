import { motion } from 'framer-motion'

export default function ProjectDetailOverview({ project, itemVariants }) {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row gap-6 lg:gap-10"
      variants={itemVariants}
    >
      <div className="lg:w-7/12">
        <div className="relative overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center border border-border">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-auto max-h-[450px] object-contain"
          />
        </div>
      </div>

      <div className="lg:w-5/12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <i className="bx bx-info-circle text-primary"></i>
            Project Overview
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
