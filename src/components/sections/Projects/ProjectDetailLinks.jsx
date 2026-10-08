import { motion } from 'framer-motion'
import { Button } from '../../ui/button'

export default function ProjectDetailLinks({ project, setShowSourceModal, itemVariants }) {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border"
      variants={itemVariants}
    >
      {project.liveLink && (
        <Button
          onClick={() => window.open(project.liveLink, '_blank')}
          className="w-full sm:flex-1 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white rounded-lg"
          asChild
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="bx bx-link-external text-lg mr-2"></i>
            View Live Project
          </motion.button>
        </Button>
      )}
      
      <Button
        onClick={() => {
          if (typeof project.githubLink === 'object') {
            setShowSourceModal(true)
          } else {
            window.open(project.githubLink, '_blank')
          }
        }}
        variant="outline"
        className="w-full sm:flex-1 rounded-lg"
        asChild
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <i className="bx bxl-github text-lg mr-2"></i>
          View Source Code
        </motion.button>
      </Button>
    </motion.div>
  )
}
