export const getTechConfig = (tech) => {
  const configs = {
    'React': { icon: 'bxl-react', iconType: 'boxicon', color: 'text-blue-500', hex: '#05b4ffff', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'Node.js': { icon: 'bxl-nodejs', iconType: 'boxicon', color: 'text-green-600', hex: '#339933', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
    'MongoDB': { icon: 'bxl-mongodb', iconType: 'boxicon', color: 'text-green-500', hex: '#47A248', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
    'Firebase': { icon: 'bxl-firebase', iconType: 'boxicon', color: 'text-orange-500', hex: '#FFCA28', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
    'Tailwind CSS': { icon: 'bxl-tailwind-css', iconType: 'boxicon', color: 'text-cyan-500', hex: '#06B6D4', bg: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-800' },
    'Next.js': { icon: 'nextjs', iconType: 'react-icon', color: 'text-gray-900 dark:text-white', hex: '', bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800' },
    'TypeScript': { icon: 'bxl-typescript', iconType: 'boxicon', color: 'text-blue-600', hex: '#3178C6', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'Mongoose': { icon: 'bxl-mongodb', iconType: 'boxicon', color: 'text-green-500', hex: '#05ff05ff', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
    'NextAuth.js': { icon: 'bx-lock-alt', iconType: 'boxicon', color: 'text-purple-600', hex: '', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
    'Stripe': { icon: 'bxl-stripe', iconType: 'boxicon', color: 'text-purple-600', hex: '#008CDD', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
    'DaisyUI': { icon: 'bx-palette', iconType: 'boxicon', color: 'text-orange-500', hex: '#1ad1a5', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
    'shadcn/ui': { icon: 'bx-component', iconType: 'boxicon', color: 'text-slate-900 dark:text-white', hex: '', bg: 'bg-[#F5F5F0] dark:bg-slate-900/20', border: 'border-slate-200 dark:border-slate-800' },
    'Nodemailer': { icon: 'bx-envelope', iconType: 'boxicon', color: 'text-blue-500', hex: '', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'Java': { icon: 'bxl-java', iconType: 'boxicon', color: 'text-blue-500', hex: '#056dffff', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'Android SDK': { icon: 'bxl-android', iconType: 'boxicon', color: 'text-green-500', hex: '#3DDC84', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
    'Google Maps API': { icon: 'bx-map', iconType: 'boxicon', color: 'text-blue-500', hex: '#4285F4', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'HTML5': { icon: 'bxl-html5', iconType: 'boxicon', color: 'text-orange-600', hex: '#E34F26', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800' },
    'CSS3': { icon: 'bxl-css3', iconType: 'boxicon', color: 'text-blue-600', hex: '#1572B6', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'JavaScript': { icon: 'bxl-javascript', iconType: 'boxicon', color: 'text-yellow-500', hex: '#F7DF1E', bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800' },
    'PHP': { icon: 'bxl-php', iconType: 'boxicon', color: 'text-indigo-600', hex: '#777BB4', bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800' },
    'MySQL': { icon: 'bx-data', iconType: 'boxicon', color: 'text-blue-700', hex: '#4479A1', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'Bootstrap': { icon: 'bxl-bootstrap', iconType: 'boxicon', color: 'text-purple-600', hex: '#7952B3', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
    'Groq AI': { icon: 'bx-brain', iconType: 'boxicon', color: 'text-purple-500', hex: '#f55036', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800' },
    'Cloudinary': { icon: 'bx-cloud-upload', iconType: 'boxicon', color: 'text-blue-500', hex: '#3448C5', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800' },
    'React Router': { icon: 'bx-sitemap', iconType: 'boxicon', color: 'text-red-500', hex: '#CA4245', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800' },
    'Framer Motion': { icon: 'bx-play-circle', iconType: 'boxicon', color: 'text-pink-500', hex: '#0055FF', bg: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-800' },
    'GSAP': { icon: 'bx-play-circle', iconType: 'boxicon', color: 'text-green-500', hex: '#88CE02', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800' },
    'Express.js': { icon: 'express', iconType: 'react-icon', color: 'text-gray-600', hex: '', bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800' }
  }
  return configs[tech] || { icon: 'bx-code', iconType: 'boxicon', color: 'text-gray-500', hex: '', bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800' }
}
