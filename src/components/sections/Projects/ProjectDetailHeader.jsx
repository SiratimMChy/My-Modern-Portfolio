import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'

export default function ProjectDetailHeader({ project, onClose, itemVariants }) {
  return (
    <div className="sticky top-0 bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 p-6 text-white z-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 sm:gap-4 flex-1">
          <motion.div 
            className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex-shrink-0"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <i className="bx bx-code-alt text-2xl text-white"></i>
          </motion.div>
          
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            variants={itemVariants}
          >
            {project.name}
          </motion.h1>
          
          <motion.div 
            className="flex items-center sm:ml-2"
            variants={itemVariants}
          >
            <Badge className="px-3 py-1 bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30 text-[10px] sm:text-xs font-semibold rounded-md uppercase tracking-wider shadow-sm">
              {project.category}
            </Badge>
          </motion.div>
        </div>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 rounded-lg flex-shrink-0"
        >
          <i className="bx bx-x text-2xl"></i>
        </Button>
      </div>
    </div>
  )
}
