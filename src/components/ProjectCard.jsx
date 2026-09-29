import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { SiNextdotjs, SiExpress } from 'react-icons/si'

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="h-full w-full cursor-pointer max-w-[400px] mx-auto"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onClick(project)}
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
                {project.name}
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
          <p className="mb-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
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

          <div className="flex flex-wrap gap-1 mb-4 min-h-[44px]">
            {project.tech.slice(0, 3).map((t, index) => {
              const techIcons = {
                React: 'bxl-react',
                'Node.js': 'bxl-nodejs',
                MongoDB: 'bxl-mongodb',
                'Express.js': 'express',
                Firebase: 'bxl-firebase',
                'Tailwind CSS': 'bxl-tailwind-css',
                'Next.js': 'nextjs',
                TypeScript: 'bxl-typescript',
                Mongoose: 'bxl-mongodb',
                'NextAuth.js': 'bx-lock-alt',
                Stripe: 'bxl-stripe',
                DaisyUI: 'bx-palette',
                'shadcn/ui': 'bx-component',
                Nodemailer: 'bx-envelope',
                Java: 'bxl-java',
                'Android SDK': 'bxl-android',
                'Google Maps API': 'bx-map',
                HTML5: 'bxl-html5',
                Bootstrap: 'bxl-bootstrap',
                JavaScript: 'bxl-javascript',
                CSS3: 'bxl-css3',
                MySQL: 'bx-data',
                PHP: 'bxl-php',
                'Groq AI': 'bx-brain',
                'React Router': 'bxl-react',
                'Framer Motion': 'bx-movie-play',
                GSAP: 'bx-play-circle',
              }
              const techColors = {
                React: '#05b4ffff',
                'Node.js': '#339933',
                MongoDB: '#47A248',
                Firebase: '#FFCA28',
                'Tailwind CSS': '#06B6D4',
                TypeScript: '#3178C6',
                Mongoose: '#05ff05ff',
                Stripe: '#008CDD',
                DaisyUI: '#1ad1a5',
                Java: '#056dffff',
                'Android SDK': '#3DDC84',
                'Google Maps API': '#4285F4',
                HTML5: '#E34F26',
                Bootstrap: '#7952B3',
                JavaScript: '#F7DF1E',
                CSS3: '#1572B6',
                MySQL: '#4479A1',
                PHP: '#777BB4',
                'Groq AI': '#f55036',
                'React Router': '#CA4245',
                'Framer Motion': '#0055FF',
                GSAP: '#88CE02',
              }
              const icon = techIcons[t]
              const color = techColors[t]

              return (
                <motion.span
                  key={t}
                  className="inline-flex items-center gap-1 text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-[#F5F5F0] dark:bg-white/[0.03] text-slate-500 dark:text-slate-400 h-[22px] cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                >
                  {icon === 'nextjs' && (
                    <SiNextdotjs
                      className="flex-shrink-0 text-xs"
                      style={color ? { color } : {}}
                    />
                  )}
                  {icon === 'express' && (
                    <SiExpress
                      className="flex-shrink-0 text-xs"
                      style={color ? { color } : {}}
                    />
                  )}
                  {icon && icon !== 'nextjs' && icon !== 'express' && (
                    <i
                      className={`bx ${icon} text-xs flex-shrink-0`}
                      style={color ? { color } : {}}
                    />
                  )}
                  <span className="leading-none">{t}</span>
                </motion.span>
              )
            })}
            {project.tech.length > 3 && (
              <motion.span
                className="inline-flex items-center justify-center text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 h-[22px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                +{project.tech.length - 3}
              </motion.span>
            )}
          </div>

          <div className="flex gap-2 mt-auto">
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
