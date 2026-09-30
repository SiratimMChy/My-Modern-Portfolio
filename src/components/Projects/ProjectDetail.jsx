import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { useEffect } from 'react'
import { getTechConfig } from '../../lib/techConfig'

const ProjectDetail = ({ project, onClose }) => {
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
        
        <div className="sticky top-0 bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 p-6 text-white z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <motion.div 
                className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <i className="bx bx-code-alt text-2xl text-white"></i>
              </motion.div>
              <div className="flex-1">
                <motion.h1 
                  className="text-3xl font-bold mb-2"
                  variants={itemVariants}
                >
                  {project.name}
                </motion.h1>
                <motion.div 
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <Badge className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium rounded-lg">
                    {project.category}
                  </Badge>
                </motion.div>
              </div>
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

        
        <div className="p-6 space-y-8">
          
          <motion.div 
            className="flex flex-col lg:flex-row gap-6"
            variants={itemVariants}
          >
            
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`px-3 py-1.5 backdrop-blur-xl border text-sm font-semibold rounded-lg ${
                      project.status === 'Live' 
                        ? 'bg-emerald-500/90 text-white border-emerald-400/50' 
                        : 'bg-amber-500/90 text-white border-amber-400/50'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>

            
            <div className="lg:w-1/2 flex flex-col justify-center">
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

          
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <i className="bx bx-code-curly text-primary"></i>
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => {
                const techConfig = getTechConfig(tech)
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
                    <span className="text-foreground">{tech}</span>
                  </motion.span>
                )
              })}
            </div>
          </motion.div>

          
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <motion.div
                className="bg-card border border-border rounded-lg p-6 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <i className="bx bx-star text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                </div>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 mt-2 flex-shrink-0 rounded-full"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              
              {project.challenges && project.challenges.length > 0 && (
                <motion.div
                  className="bg-card border border-border rounded-lg p-6 h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <i className="bx bx-target-lock text-orange-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Challenges</h3>
                  </div>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              
              {project.futureImprovements && project.futureImprovements.length > 0 && (
                <motion.div
                  className="bg-card border border-border rounded-lg p-6 h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <i className="bx bx-rocket text-green-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Future Plans</h3>
                  </div>
                  <div className="space-y-3">
                    {project.futureImprovements.map((improvement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-green-500 mt-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{improvement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          
          <motion.div 
            className="flex flex-col gap-4 pt-6 border-t border-border"
            variants={itemVariants}
          >
            {project.liveLink && (
              <Button
                onClick={() => window.open(project.liveLink, '_blank')}
                className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white rounded-lg"
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
              onClick={() => window.open(project.githubLink, '_blank')}
              variant="outline"
              className="w-full rounded-lg"
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
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail