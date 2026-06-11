import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectDetail from './ProjectDetail'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PROJECTS = [
  {
    id: 'navora',
    name: 'Navora',
    category: 'Web',
    image: 'https://i.ibb.co.com/35RNLPKW/image.png',
    tech: [
      'Next.js',
      'Mongoose',
      'NextAuth.js',
      'TypeScript',
      'Stripe',
      'Tailwind CSS',
      'Groq AI',
    ],
    description:
      'Navora is an AI-powered travel booking platform designed for modern travelers. It offers smart destination recommendations, seamless trip planning, secure booking, payments, and complete admin management across multiple travel categories.',
    shortDesc:
      'AI-powered travel booking platform with smart recommendations, Stripe payments, and admin dashboard.',
    features: [
      'Blog & Reviews System',
      'Complete Booking System',
      'Admin Dashboard',
      'AI Travel Recommendations',
      'Stripe Payment Integration',
      'Destination Search & Filtering',
    ],
    challenges: [
      'Integrating AI recommendation',
      'Role-based dashboard architecture',
      'Booking workflow & status tracking',
      'Secure payment processing',
      'SEO optimization with SSR',
    ],
    futureImprovements: [
      'Multi-language support',
      'Live chat with travel agents',
      'Flight & hotel API integration',
      'Personalized travel itineraries',
    ],
    liveLink: 'https://navora-five.vercel.app',
    githubLink: 'https://github.com/SiratimMChy/Navora-AI-Travel-Guide',
    status: 'Live',
    color: '#38bdf8',
  },
  {
    id: 'orvella',
    name: 'Orvella',
    category: 'Web',
    image: 'https://i.ibb.co.com/XZhYcM5G/image.png',
    tech: [
      'Next.js',
      'MongoDB',
      'NextAuth.js',
      'Stripe',
      'Tailwind CSS',
      'DaisyUI',
      'Nodemailer',
    ],
    description:
      'Orvella is a premium fashion e-commerce platform built for men, women, and kids. It provides a modern shopping experience with secure payments, real-time cart management, order tracking, and admin management tools.',
    shortDesc:
      'Premium fashion e-commerce platform with Stripe payments, cart system, and admin dashboard.',
    features: [
      'Stripe + COD Payments',
      'Order Tracking System',
      'Admin Dashboard',
      'Email Notifications',
      'Multi-category Product Catalog',
      'Advanced Search & Filtering',
      'Real-time Shopping Cart',
    ],
    challenges: [
      'Payment verification workflow',
      'Persistent cart state management',
      'Secure authentication system',
      'Admin product/order controls',
      'Responsive e-commerce UX',
    ],
    futureImprovements: [
      'Wishlist feature',
      'Product recommendations with AI',
      'Multi-vendor marketplace support',
      'Inventory analytics dashboard',
    ],
    liveLink: 'https://orvella-zeta.vercel.app',
    githubLink: 'https://github.com/SiratimMChy/Orvella',
    status: 'Live',
    color: '#38bdf8',
  },
  {
    id: 'hemovia',
    name: 'Hemovia',
    category: 'Web',
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
    color: '#38bdf8',
  },

  {
    id: 'cashnivo',
    name: 'Cashnivo',
    category: 'Web',
    image: 'https://i.ibb.co.com/DgkjhLb3/image.png',
    tech: [
      'React',
      'MongoDB',
      'Express.js',
      'Node.js', 
      'Axios',
      'Tailwind CSS',
      'DaisyUI',
      'Groq AI',
    ],
    description:
      'Cashnivo is a robust, full-stack personal finance application designed to help users seamlessly manage their expenses. It features secure data management, dynamic transaction tracking, and an integrated, context-aware AI Financial Advisor that analyzes user spending habits to deliver customized financial guidance and insights.',
    shortDesc:
      'Full-stack personal finance tracker featuring real-time analytics and a smart AI financial advisor.',
    features: [
      'Dynamic Theme System',
      'Secure Protected Routing',
      'Smart AI Financial Advisor',
      'Chat History Persistence',
      'Real-Time Visual Analytics',
      'Transaction Tracking System',
    ],
    challenges: [
      'Injecting dynamic transaction history into AI safely',
      'Managing persistent chat state across sessions',
      'Securely handling API keys and rate limits',
      'Building a mobile-responsive floating chat widget',
      'Optimizing database queries for real-time analytics',
    ],
    futureImprovements: [
      'Receipt scanning with OCR',
      'Automated budget limit alerts',
      'Advanced data export (CSV/PDF reports)',
      'Multi-currency conversion support',
    ],
    liveLink: 'https://expensetracker-2ab95.web.app',
    githubLink: 'https://github.com/SiratimMChy/Expense-Tracker',
    status: 'Live',
    color: '#2563eb',
  },
  ,
  {
    id: 'she-app',
    name: 'She - Safety App',
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
    color: '#38bdf8',
  },
  {
    id: 'classmate',
    name: 'ClassMate',
    category: 'Web',
    image: 'https://i.ibb.co.com/21zn0wSr/CLASSMATE.png',
    tech: ['HTML5', 'JavaScript', 'CSS3', 'Bootstrap'],
    description: 'CLASSMATE is a web-based academic collaboration platform developed as a final-year university project. It helps students share study materials, manage class resources, and collaborate efficiently in a centralized environment.',
    shortDesc: 'Academic collaboration platform for students to share materials and manage class resources.',
    features: ['Student Collaboration', 'Academic Resources', 'Project Management', 'Communication Tools'],
    challenges: ['Firebase authentication and data structuring', 'Media upload and storage handling', 'Real-time data synchronization', 'UI consistency across devices'],
    futureImprovements: ['Role-based access (admin/student)', 'Real-time chat and notifications', 'Advanced search and tagging', 'Performance and scalability improvements'],
    liveLink: 'https://classmate-2c272.web.app',
    githubLink: 'https://github.com/SiratimMChy/ClassMate',
    status: 'Live',
    color: '#38bdf8',
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All', icon: 'bx-grid-alt' },
  { id: 'Web', label: 'Web', icon: 'bx-globe' },
  { id: 'Mobile', label: 'Mobile', icon: 'bx-mobile' },
]

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
    <section id="projects" className="relative py-28 overflow-hidden bg-slate-50 dark:bg-[#07090f] transition-colors duration-300">

      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky-200/25 dark:bg-sky-600/8 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-violet-200/25 dark:bg-violet-700/8 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-12 lg:px-20">

        {/* header */}
        <motion.div className="flex flex-col items-center mb-12 text-center"
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
                  className={`gap-1 text-[11px] sm:text-xs h-8 sm:h-8 w-full sm:w-24 rounded-md sm:rounded-sm ${filter === cat.id ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:from-sky-400 hover:to-indigo-400 border-0' : 'text-slate-500 dark:text-slate-400'}`}
                >
                  <i className={`bx ${cat.icon} text-xs`} />
                  {cat.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* slider */}
        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full pb-14"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={false}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              style={{
                '--swiper-pagination-color': '#38bdf8',
              }}
              className="px-2 pt-6 pb-6 [&_.swiper-wrapper]:items-stretch [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-0 sm:[&_.swiper-pagination]:!mt-6"
            >
              {filtered.map((project) => (
                <SwiperSlide key={project.id} className="h-auto flex">
                  <motion.div
                    className="group h-full w-full relative rounded-xl overflow-hidden bg-white shadow-xl shadow-slate-200/60 dark:shadow-none dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 flex flex-col cursor-pointer"
                    whileHover={{ borderColor: project.color + '55', y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelected(project)}
                  >
                    {/* image */}
                    <div className="relative flex-shrink-0 overflow-hidden h-52 bg-slate-100 dark:bg-slate-900">
                      <img src={project.image} alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                      {/* hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                        <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                          <i className="text-sm bx bx-show" /> View Details
                        </span>
                      </div>
                      {/* status */}
                      <Badge
                        className={`absolute top-1 right-1 gap-1 text-[9px] px-2 py-0.5 font-semibold rounded-sm ${project.status === 'Live'
                          ? 'bg-emerald-500/95 hover:bg-emerald-500/95 text-white border-0 shadow-lg shadow-emerald-500/25'
                          : 'bg-amber-500/95 hover:bg-amber-500/95 text-white border-0 shadow-lg shadow-amber-500/25'
                          }`}
                      >
                        <span className="w-1 h-1 bg-white rounded-full animate-pulse" />{project.status}
                      </Badge>
                      {/* category */}
                      <Badge variant="secondary" className="absolute top-1 left-1 text-[9px] px-2 py-0.5 font-semibold rounded-sm bg-black/60 hover:bg-black/60 text-white border-0 backdrop-blur-md shadow-lg">
                        {project.category}
                      </Badge>
                    </div>

                    {/* content */}
                    <div className="flex flex-col flex-1 p-5">
                      <div className="mb-3">
                        <h3 className="text-sm font-black leading-tight text-slate-900 dark:text-white">{project.name}</h3>
                        <div className="h-[2px] w-6 rounded-full mt-1.5" style={{ background: project.color }} />
                      </div>
                      <p className="mb-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">{project.shortDesc}</p>

                      {/* features */}
                      <div className="flex flex-wrap gap-1.5 mb-4 min-h-[44px]">
                        {project.features.slice(0, 3).map(f => (
                          <span key={f} className="inline-flex items-center text-[9px] font-medium px-2 py-1 rounded-md h-[20px]"
                            style={{ color: project.color, background: project.color + '12', border: `1px solid ${project.color}25` }}>
                            {f}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="inline-flex items-center justify-center text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 h-[20px]">+{project.features.length - 3}</span>
                        )}
                      </div>

                      {/* tech */}
                      <div className="flex flex-wrap gap-1 mb-4 min-h-[44px]">
                        {project.tech.slice(0, 3).map((t, index) => {
                          const techIcons = {
                            'React': 'bxl-react',
                            'Node.js': 'bxl-nodejs',
                            'MongoDB': 'bxl-mongodb',
                            'Express.js': 'express',
                            'Firebase': 'bxl-firebase',
                            'Tailwind CSS': 'bxl-tailwind-css',
                            'Next.js': 'nextjs',
                            'TypeScript': 'bxl-typescript',
                            'Mongoose': 'bxl-mongodb',
                            'NextAuth.js': 'bx-lock-alt',
                            'Stripe': 'bxl-stripe',
                            'DaisyUI': 'bx-palette',
                            'shadcn/ui': 'bx-component',
                            'Nodemailer': 'bx-envelope',
                            'Java': 'bxl-java',
                            'Android SDK': 'bxl-android',
                            'Google Maps API': 'bx-map',
                            'HTML5': 'bxl-html5',
                            'Bootstrap': 'bxl-bootstrap',
                            'JavaScript': 'bxl-javascript',
                            'CSS3': 'bxl-css3',
                            'MySQL': 'bx-data',
                            'PHP': 'bxl-php',
                            'Groq AI': 'bx-brain',
                            'React Router': 'bxl-react',
                            'Framer Motion': 'bx-movie-play',
                            'GSAP': 'bx-play-circle'
                          }
                          const icon = techIcons[t]
                          return (
                            <motion.span
                              key={t}
                              className="inline-flex items-center gap-1 text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400 h-[22px] cursor-default"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                            >
                              {icon === 'nextjs' && <SiNextdotjs className="flex-shrink-0 text-xs" />}
                              {icon === 'express' && <SiExpress className="flex-shrink-0 text-xs" />}
                              {icon && icon !== 'nextjs' && icon !== 'express' && <i className={`bx ${icon} text-xs flex-shrink-0`} />}
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

                      {/* buttons */}
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
                            <Button size="sm" className="w-full text-[10px] h-8 text-white border-0 hover:opacity-90 rounded-sm"
                              style={{ background: `linear-gradient(135deg,${project.color},${project.color}bb)` }}
                              asChild={!!project.liveLink}
                              disabled={!project.liveLink}>
                              {project.liveLink ? (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}>
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
                          <Button size="sm" variant="outline"
                            className="w-full text-[10px] h-8 rounded-sm"
                            asChild={!!(project.githubLink && project.githubLink !== '#')}
                            disabled={!project.githubLink || project.githubLink === '#'}>
                            {project.githubLink && project.githubLink !== '#' ? (
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}>
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
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
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
