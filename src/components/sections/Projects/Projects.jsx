import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectDetail from './ProjectDetail'
import ProjectCard from './ProjectCard'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { Card, CardContent } from '../../ui/card'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { PROJECTS, CATEGORIES } from '../../../data/projectsData'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const cardVar = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 overflow-hidden bg-[#F5F5F0] dark:bg-[#07090f] transition-colors duration-300">

      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-violet-200/25 dark:bg-violet-700/8 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-12 lg:px-20">

        
        <motion.div className="flex flex-col items-center mb-6 sm:mb-10 text-center"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-sky-400/25 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5"
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          >
            <i className="text-sm bx bx-folder-open" /> Portfolio Showcase
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Featured{' '}
            <span className='bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent'>
              Projects
            </span>
          </motion.h2>
          <motion.div className="mt-4 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }}
            initial={{ width: 0 }} whileInView={{ width: 48 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
        </motion.div>

        
        <motion.div className="flex justify-center px-0 mb-10"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="w-full sm:w-auto inline-flex flex-row items-center gap-1.5 sm:gap-1 p-2 sm:p-1 rounded-lg sm:rounded-sm bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-slate-800">
            {CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                className="flex-1 sm:flex-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === cat.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter(cat.id)}
                  className={`gap-1 text-[11px] sm:text-xs h-8 sm:h-8 w-full sm:w-24 rounded-md ${filter === cat.id ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:from-sky-400 hover:to-indigo-400 border-0' : 'text-slate-500 dark:text-slate-400'}`}
                >
                  <i className={`bx ${cat.icon} text-xs`} />
                  {cat.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full "
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              style={{
                '--swiper-pagination-color': '#38bdf8',
                '--swiper-navigation-color': '#38bdf8',
                '--swiper-navigation-size': '20px',
              }}
              className="px-2 pt-6 pb-6 [&_.swiper-wrapper]:items-stretch [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-6 sm:[&_.swiper-pagination]:!mt-8 [&_.swiper-button-next]:!right-0 [&_.swiper-button-prev]:!left-0"
            >
              {filtered.map((project) => (
                <SwiperSlide key={project.id} className="h-auto flex">
                  <ProjectCard project={project} onClick={setSelected} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>

      
      <AnimatePresence>
        {selected && (
          <ProjectDetail
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
