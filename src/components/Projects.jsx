import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectDetail from './ProjectDetail'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const PROJECTS = [
  {
    id: 'pawmart',
    name: 'PawMart',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/LhrzQqyd/pawmart.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'Tailwind CSS'],
    description: 'PawMart is a full-stack MERN marketplace that promotes responsible pet adoption while enabling buying and selling of pet care products. The platform connects adopters, pet owners, breeders, and shop owners through secure Firebase authentication and role-protected routes.',
    shortDesc: 'Full-stack MERN marketplace for pet adoption and care products with secure authentication.',
    features: ['Pet Adoption System', 'Product Marketplace', 'Order Management', 'Admin Dashboard'],
    challenges: ['Role-based authentication & authorization', 'Secure listing ownership control', 'Efficient filtering and search', 'Responsive UI consistency'],
    futureImprovements: ['Real-time chat system', 'Online payment integration', 'Admin moderation features'],
    liveLink: 'https://pawmart-c9875.web.app',
    githubLink: 'https://github.com/SiratimMChy/PawMart-Client',
    status: 'Live',
    color: '#38bdf8',
  },
  {
    id: 'hemovia',
    name: 'Hemovia',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/Y4YFtMBB/hemovia.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'Tailwind CSS'],
    description: 'Hemovia is a MERN-based blood donation management platform designed to connect donors, volunteers, and administrators efficiently. It enables donor registration, blood request creation, tracking, and quick donor search by blood group and location.',
    shortDesc: 'MERN-based blood donation platform with Stripe integration and location-based donor search.',
    features: ['Donor Management', 'Request Tracking', 'Stripe Integration', 'Location Search'],
    challenges: ['Multi-role dashboard management', 'Fast donor search implementation', 'Secure Stripe payment integration'],
    futureImprovements: ['Real-time emergency notifications', 'Location-based donor matching', 'Donor history & analytics'],
    liveLink: 'https://blooddonation-f6367.web.app',
    githubLink: 'https://github.com/SiratimMChy/Hemovia-Client',
    status: 'Live',
    color: '#f472b6',
  },
  {
    id: 'she-app',
    name: 'She — Safety App',
    category: 'Mobile',
    image: 'https://i.ibb.co.com/20h6BJvk/she.png',
    tech: ['Java', 'Android SDK', 'Firebase', 'Google Maps API'],
    description: "Women's Safety App: She is an Android application developed to enhance personal safety through quick emergency response features. Built using Java and Firebase, the app provides one-tap SOS alerts, real-time location sharing, and trusted contact management.",
    shortDesc: 'Android safety app with SOS alerts, real-time location sharing, and emergency contact management.',
    features: ['SOS Alerts', 'Location Sharing', 'Emergency Contacts', 'Safe Navigation'],
    challenges: ['Reliable SOS trigger implementation', 'Real-time location tracking accuracy', 'Firebase data security and permissions', 'Background service handling'],
    futureImprovements: ['Emergency service integration', 'Offline SOS support', 'AI-based risk detection', 'Multi-language accessibility'],
    liveLink: null,
    githubLink: 'https://github.com/SiratimMChy/She-WomenSafetyApp',
    status: 'Development',
    color: '#818cf8',
  },
  {
    id: 'gamehub',
    name: 'GameHub',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/Q7YVts7J/gamehub.png',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    description: 'Gaming platform for discovering indie games with user reviews, ratings, and developer support.',
    shortDesc: 'Gaming platform for indie game discovery with reviews, ratings, and developer support.',
    features: ['Game Discovery', 'User Reviews', 'Rating System', 'Profile Management'],
    challenges: ['Firebase authentication and data structuring', 'Media upload and storage handling', 'Real-time data synchronization', 'UI consistency across devices'],
    futureImprovements: ['Role-based access (admin/student)', 'Real-time chat and notifications', 'Advanced search and tagging', 'Performance and scalability improvements'],
    liveLink: 'https://gamehub-e4f1a.web.app',
    githubLink: 'https://github.com/SiratimMChy/GameHub',
    status: 'Live',
    color: '#34d399',
  },
  {
    id: 'classmate',
    name: 'ClassMate',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/21zn0wSr/CLASSMATE.png',
    tech: ['HTML5', 'Bootstrap', 'JavaScript', 'CSS3'],
    description: 'CLASSMATE is a web-based academic collaboration platform developed as a final-year university project. It helps students share study materials, manage class resources, and collaborate efficiently in a centralized environment.',
    shortDesc: 'Academic collaboration platform for students to share materials and manage class resources.',
    features: ['Student Collaboration', 'Academic Resources', 'Project Management', 'Communication Tools'],
    challenges: ['Firebase authentication and data structuring', 'Media upload and storage handling', 'Real-time data synchronization', 'UI consistency across devices'],
    futureImprovements: ['Role-based access (admin/student)', 'Real-time chat and notifications', 'Advanced search and tagging', 'Performance and scalability improvements'],
    liveLink: 'https://siratimmchy.github.io/ClassMate',
    githubLink: 'https://github.com/SiratimMChy/ClassMate',
    status: 'Live',
    color: '#fb923c',
  },
  {
    id: 'smc-photography',
    name: 'SMC Photography',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/KSCdKvt/SMC.png',
    tech: ['HTML5', 'Bootstrap', 'MySQL', 'CSS3', 'PHP'],
    description: 'Professional photography portfolio website with dynamic galleries and client management system.',
    shortDesc: 'Professional photography portfolio with dynamic galleries and client management system.',
    features: ['Photo Galleries', 'Client Booking', 'Admin Dashboard', 'Content Management'],
    challenges: ['Dynamic gallery management', 'Client booking system integration', 'Responsive image optimization', 'Admin panel functionality'],
    futureImprovements: ['Online payment integration', 'Real-time booking notifications', 'Advanced photo editing tools', 'Mobile app development'],
    liveLink: 'https://gleaming-jalebi-54e188.netlify.app',
    githubLink: 'https://github.com/SiratimMChy/SMC-Photography',
    status: 'Live',
    color: '#c084fc',
  },
]

const CATEGORIES = [
  { id: 'all',        label: 'All',        icon: 'bx-grid-alt' },
  { id: 'Full Stack', label: 'Full Stack', icon: 'bx-layer' },
  { id: 'Frontend',   label: 'Frontend',   icon: 'bx-palette' },
  { id: 'Mobile',     label: 'Mobile',     icon: 'bx-mobile' },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const cardVar = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } },
}

export default function Projects({ onNavigateToSourceCode }) {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-slate-50 dark:bg-[#07090f] transition-colors duration-300">

      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-violet-200/25 dark:bg-violet-700/8 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* header */}
        <motion.div className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-sky-400/25 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5"
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          >
            <i className="bx bx-folder-open text-sm" /> Portfolio Showcase
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Featured{' '}
            <span style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Projects
            </span>
          </motion.h2>
          <motion.div className="mt-4 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }}
            initial={{ width: 0 }} whileInView={{ width: 48 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
        </motion.div>

        {/* filter tabs */}
        <motion.div className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-slate-800">
            {CATEGORIES.map(cat => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilter(cat.id)}
                className={`gap-1.5 text-xs h-8 ${filter === cat.id ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:from-sky-400 hover:to-indigo-400 border-0' : 'text-slate-500 dark:text-slate-400'}`}
              >
                <i className={`bx ${cat.icon} text-sm`} />
                {cat.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger} initial="hidden" animate="show">
            {filtered.map((project) => (
              <motion.div key={project.id} variants={cardVar}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 flex flex-col cursor-pointer"
                whileHover={{ borderColor: project.color + '55', y: -4, transition: { duration: 0.2 } }}
                onClick={() => setSelected(project)}
              >
                {/* image */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-900 flex-shrink-0">
                  <img src={project.image} alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      <i className="bx bx-show text-sm" /> View Details
                    </span>
                  </div>
                  {/* status */}
                  <Badge
                    className={`absolute top-3 right-3 gap-1 text-[9px] px-2 py-0.5 ${project.status === 'Live' ? 'bg-emerald-500/90 hover:bg-emerald-500/90 text-white border-0' : 'bg-amber-500/90 hover:bg-amber-500/90 text-white border-0'}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-white animate-pulse" />{project.status}
                  </Badge>
                  {/* category */}
                  <Badge variant="secondary" className="absolute top-3 left-3 text-[9px] px-2 py-0.5 bg-black/40 hover:bg-black/40 text-white border-0 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight">{project.name}</h3>
                    <div className="h-[2px] w-6 rounded-full mt-1.5" style={{ background: project.color }} />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">{project.shortDesc}</p>

                  {/* features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map(f => (
                      <span key={f} className="text-[9px] font-medium px-2 py-0.5 rounded-md"
                        style={{ color: project.color, background: project.color + '12', border: `1px solid ${project.color}25` }}>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* tech */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="text-[9px] font-medium px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[9px] font-medium px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  {/* buttons */}
                  <div className="flex gap-2 mt-auto">
                    {project.liveLink && (
                      <Button size="sm" className="flex-1 text-[10px] h-8 text-white border-0 hover:opacity-90"
                        style={{ background: `linear-gradient(135deg,${project.color},${project.color}bb)` }}
                        asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}>
                          <i className="bx bx-link-external text-xs mr-1" /> Live Demo
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline"
                      className="flex-1 text-[10px] h-8"
                      onClick={e => { e.stopPropagation(); onNavigateToSourceCode && onNavigateToSourceCode(project.id) }}>
                      <i className="bx bxl-github text-xs mr-1" /> Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
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
