import { motion } from 'framer-motion'

export default function ProjectDetailHighlights({ project, itemVariants }) {
  return (
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
  )
}
