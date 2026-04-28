import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { useEffect } from 'react'

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null

  // Stop Lenis when modal opens, restart when it closes
  useEffect(() => {
    if (window.lenis) {
      window.lenis.stop()
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    return () => {
      if (window.lenis) {
        window.lenis.start()
      }
      // Restore body scroll
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

  const getTechConfig = (tech) => {
    const configs = {
      'React': { icon: 'bxl-react', iconType: 'boxicon', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
      'Node.js': { icon: 'bxl-nodejs', iconType: 'boxicon', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
      'MongoDB': { icon: 'bxl-mongodb', iconType: 'boxicon', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
      'Firebase': { icon: 'bxl-firebase', iconType: 'boxicon', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
      'Java': { icon: 'bxl-java', iconType: 'boxicon', color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800' },
      'Android SDK': { icon: 'bxl-android', iconType: 'boxicon', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
      'Express.js': { icon: 'express', iconType: 'react-icon', color: 'text-gray-600', bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800' },
      'Next.js': { icon: 'nextjs', iconType: 'react-icon', color: 'text-gray-900 dark:text-white', bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800' },
      'TypeScript': { icon: 'bxl-typescript', iconType: 'boxicon', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
      'Mongoose': { icon: 'bxl-mongodb', iconType: 'boxicon', color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800' },
      'NextAuth.js': { icon: 'bx-lock-alt', iconType: 'boxicon', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
      'Stripe': { icon: 'bxl-stripe', iconType: 'boxicon', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
      'DaisyUI': { icon: 'bx-palette', iconType: 'boxicon', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
      'Nodemailer': { icon: 'bx-envelope', iconType: 'boxicon', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
      'HTML5': { icon: 'bxl-html5', iconType: 'boxicon', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
      'CSS3': { icon: 'bxl-css3', iconType: 'boxicon', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
      'JavaScript': { icon: 'bxl-javascript', iconType: 'boxicon', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800' },
      'PHP': { icon: 'bxl-php', iconType: 'boxicon', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800' },
      'MySQL': { icon: 'bx-data', iconType: 'boxicon', color: 'text-blue-700', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
      'Bootstrap': { icon: 'bxl-bootstrap', iconType: 'boxicon', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
      'Tailwind CSS': { icon: 'bxl-tailwind-css', iconType: 'boxicon', color: 'text-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-800' },
      'Framer Motion': { icon: 'bx-play-circle', iconType: 'boxicon', color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-800' },
      'React Router': { icon: 'bx-sitemap', iconType: 'boxicon', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800' },
      'Google Maps API': { icon: 'bx-map', iconType: 'boxicon', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
      'Groq AI': { icon: 'bx-brain', iconType: 'boxicon', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
      'GSAP': { icon: 'bx-play-circle', iconType: 'boxicon', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
      'shadcn/ui': { icon: 'bx-component', iconType: 'boxicon', color: 'text-slate-900 dark:text-white', bg: 'bg-slate-50 dark:bg-slate-900/20', border: 'border-slate-200 dark:border-slate-800' }
    }
    return configs[tech] || { icon: 'bx-code', iconType: 'boxicon', color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800' }
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
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 p-6 text-white z-10">
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

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image and Description */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-6"
            variants={itemVariants}
          >
            {/* Project Image */}
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

            {/* Project Description */}
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

          {/* Tech Stack */}
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

          {/* Three Cards Section: Features, Challenges, Future */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Key Features Card */}
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

              {/* Challenges Card */}
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

              {/* Future Improvements Card */}
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

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col gap-4 pt-6 border-t border-border"
            variants={itemVariants}
          >
            {project.liveLink && (
              <Button
                onClick={() => window.open(project.liveLink, '_blank')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
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