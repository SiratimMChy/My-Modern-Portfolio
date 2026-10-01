import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import ProjectTechTags from './ProjectTechTags'

export default function ProjectCard({ project, onClick }) {
  const handleCardKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(project)
    }
  }

  const handleLinkKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.click()
    }
  }

  return (
    <motion.div
      className="h-full w-full group/card"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="group h-full w-full relative rounded-xl overflow-hidden bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 flex flex-col transition-colors hover:border-slate-300 dark:hover:border-slate-700">
        <div className="relative flex-shrink-0 overflow-hidden h-52 w-full bg-[#EBE8E0] dark:bg-slate-900">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
              <i className="text-sm bx bx-show" /> View Details
            </span>
          </div>
        </div>

        <CardContent className="flex flex-col flex-1 p-5">
          <div className="mb-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-black leading-tight text-slate-900 dark:text-white">
                <button
                  type="button"
                  onClick={() => onClick(project)}
                  onKeyDown={handleCardKeyDown}
                  className="focus:outline-none after:absolute after:inset-0 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 rounded-sm"
                  aria-label={`View details for ${project.name}`}
                >
                  {project.name}
                </button>
              </h3>
              <Badge
                variant="secondary"
                className="text-[9px] px-1.5 py-0 font-semibold rounded-sm bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 flex-shrink-0 leading-tight h-[18px]"
              >
                {project.category === 'Mobile' ? 'Android' : project.category}
              </Badge>
            </div>
            <div
              className="h-[2px] w-6 rounded-full mt-1.5"
              style={{ background: project.color }}
            />
          </div>
          <p className="mb-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[44px]">
            {project.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="inline-flex items-center text-[9px] font-medium px-2 py-1 rounded-md h-[20px]"
                style={{
                  color: project.color,
                  background: project.color + '12',
                  border: `1px solid ${project.color}25`,
                }}
              >
                {f}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="inline-flex items-center justify-center text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 h-[20px]">
                +{project.features.length - 3}
              </span>
            )}
          </div>

          <ProjectTechTags tech={project.tech} />

          <div className="flex gap-2 mt-auto relative z-10">
            {project.category !== 'Mobile' && (
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="sm"
                  className="w-full text-[10px] h-8 text-white border-0 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 transition-all duration-300"
                  asChild={!!project.liveLink}
                  disabled={!project.liveLink}
                >
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={handleLinkKeyDown}
                    >
                      <i className="mr-1 text-xs bx bx-link-external" /> Live Demo
                    </a>
                  ) : (
                    <>
                      <i className="mr-1 text-xs bx bx-link-external" /> Live Demo
                    </>
                  )}
                </Button>
              </motion.div>
            )}
            <motion.div
              className={project.category === 'Mobile' ? 'w-full' : 'flex-1'}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: project.category === 'Mobile' ? 0.3 : 0.35 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="sm"
                variant="outline"
                className="w-full text-[10px] h-8 rounded-md"
                asChild={!!(project.githubLink && project.githubLink !== '#')}
                disabled={!project.githubLink || project.githubLink === '#'}
              >
                {project.githubLink && project.githubLink !== '#' ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={handleLinkKeyDown}
                  >
                    <i className="mr-1 text-xs bx bxl-github" /> Source Code
                  </a>
                ) : (
                  <>
                    <i className="mr-1 text-xs bx bxl-github" /> Source Code
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
