import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SourceCodeModal from './SourceCodeModal'
import ProjectDetailHeader from './ProjectDetailHeader'
import ProjectDetailOverview from './ProjectDetailOverview'
import ProjectDetailTech from './ProjectDetailTech'
import ProjectDetailHighlights from './ProjectDetailHighlights'
import ProjectDetailLinks from './ProjectDetailLinks'

const ProjectDetail = ({ project, onClose }) => {
  const [showSourceModal, setShowSourceModal] = useState(false)
  
  if (!project) return null

  useEffect(() => {
    if (window.lenis) {
      window.lenis.stop()
    }

    document.body.style.overflow = 'hidden'

    return () => {
      if (window.lenis) {
        window.lenis.start()
      }
      document.body.style.overflow = ''
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-lenis-prevent
    >
      <motion.div
        className="bg-background max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-border rounded-lg"
        onClick={(e) => e.stopPropagation()}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        data-lenis-prevent
      >
        <ProjectDetailHeader 
          project={project} 
          onClose={onClose} 
          itemVariants={itemVariants} 
        />
        
        <div className="p-6 space-y-8">
          <ProjectDetailOverview 
            project={project} 
            itemVariants={itemVariants} 
          />
          
          <ProjectDetailTech 
            tech={project.tech} 
            itemVariants={itemVariants} 
          />
          
          <ProjectDetailHighlights 
            project={project} 
            itemVariants={itemVariants} 
          />
          
          <ProjectDetailLinks 
            project={project} 
            setShowSourceModal={setShowSourceModal} 
            itemVariants={itemVariants} 
          />
        </div>

        <SourceCodeModal 
          isOpen={showSourceModal} 
          onClose={() => setShowSourceModal(false)} 
          githubLink={project.githubLink} 
        />
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail
