import { motion } from 'framer-motion'

const EXP = [
  {
    role: 'Web Developer',
    company: 'Javed Paribahan (Transportation Company)',
    type: 'Contract',
    period: 'Nov 2025 - Mar 2026',
    duration: '5 mos',
    location: 'Sylhet, Bangladesh · Hybrid',
    icon: 'bx-code-block',
    color: '#38bdf8',
    project: {
      name: 'Bill Payment Statement Manager',
      desc: 'A browser-based logistics and bill payment management system built for Javed Paribahan, supporting multi-company operations, automated billing, and real-time data tracking.',
    },
    summary: 'Designed and deployed a browser-based Transportation Management System to digitize logistics operations, automate billing, and replace manual record-keeping.',
    resp: [
      'Developed a browser-based system to digitize logistics transactions and automate billing.',
      'Designed a single-file, zero-dependency web app using HTML, CSS, and JavaScript.',
      'Implemented multi-company transaction tracking with dynamic forms for delivery records.',
      'Integrated Google Sheets via Apps Script for real-time sync and Excel export with SheetJS.',
      'Delivered fully responsive system with auto-save, validation, and real-time calculations.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS', 'Google Sheets', 'Apps Script', 'SheetJS', 'Data Management'],
  },
  {
    role: 'Director of Finance And Administration',
    company: 'The City Bank - Shunashar Outlet',
    type: 'Full-time',
    period: 'Oct 2020 - Oct 2021',
    duration: '1 yr 1 mo',
    location: 'Zakigonj, Sylhet · On-site',
    icon: 'bx-bar-chart-alt-2',
    color: '#818cf8',
    project: null,
    summary: 'Managed branch financial operations, administration, reporting, compliance, and staff supervision to ensure smooth daily performance while supporting management decisions through accurate financial analysis.',
    resp: [
      'Managed daily branch financial operations, balancing transactions and cash flow.',
      'Prepared accurate financial reports, statements, and regulatory compliance documents.',
      'Supervised employee attendance, discipline, productivity, and administrative performance standards.',
      'Reviewed account openings, customer transactions, and operational team reports.',
      'Supported management decisions through financial analysis and performance reporting.'
    ],
    tech: [
      'Financial Management',
      'Financial Reporting',
      'Financial Analysis',
      'Cost Control',
      'Cash Flow Management',
      'Banking Operations',
      'Branch Administration',
      'Staff Supervision',
      'Compliance',
      'Operations Management'
    ],
  },
]

function Card({ exp, i }) {
  return (
    <motion.div
      className="rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 overflow-hidden w-full"
      initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ borderColor: exp.color + '55', transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        {/* header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: exp.color + '18' }}>
              <i className={`bx ${exp.icon} text-lg`} style={{ color: exp.color }} />
            </div>
            <div>
              <p className="text-sm font-black leading-tight" style={{ color: exp.color }}>{exp.role}</p>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">{exp.company}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{exp.period}</p>
            <p className="text-[9px] text-slate-400 mt-0.5">{exp.duration}</p>
          </div>
        </div>

        {/* meta */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400">{exp.type}</span>
          <span className="text-[9px] text-slate-400 flex items-center gap-0.5">
            <i className="bx bx-map-pin text-[10px]" />{exp.location}
          </span>
        </div>

        {/* summary */}
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{exp.summary}</p>

        {/* project */}
        {exp.project && (
          <div className="p-3 rounded-xl mb-4 border"
            style={{ borderColor: exp.color + '30', background: exp.color + '08' }}>
            <p className="text-[10px] font-bold mb-1" style={{ color: exp.color }}>
              <i className="bx bx-link-alt mr-1" />{exp.project.name}
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed">{exp.project.desc}</p>
          </div>
        )}

        {/* responsibilities */}
        <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-600 mb-2">Key Responsibilities</p>
        <ul className="space-y-1.5 mb-4">
          {exp.resp.map((r, j) => (
            <motion.li key={j}
              className="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + j * 0.06 }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0 mt-[5px]" style={{ background: exp.color }} />
              {r}
            </motion.li>
          ))}
        </ul>

        {/* tech */}
        <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-600 mb-2">
          {i === 1 ? 'Skills' : 'Technologies'}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map(t => (
            <span key={t}
              className="text-[10px] font-medium px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/[0.03] text-slate-500 dark:text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-white dark:bg-[#060810] transition-colors duration-300">
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-200/20 dark:bg-sky-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-200/20 dark:bg-violet-600/5 blur-[100px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* header */}
        <motion.div className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-sky-400/25 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
            <i className="bx bx-briefcase text-sm" /> Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Work{' '}
            <span style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Experience
            </span>
          </h2>
          <motion.div className="mt-4 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#818cf8)' }}
            initial={{ width: 0 }} whileInView={{ width: 48 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
        </motion.div>

        {/* zigzag timeline */}
        <div className="relative max-w-7xl mx-auto">

          {/* center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
            bg-gradient-to-b from-sky-400/40 via-violet-400/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {EXP.map((exp, i) => (
              <div key={i} className="relative flex items-start gap-0 md:gap-8">

                {/* LEFT slot */}
                <div className="hidden md:block w-1/2 pr-8">
                  {i % 2 === 0 && <Card exp={exp} i={i} />}
                </div>

                {/* center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10
                  w-10 h-10 rounded-full items-center justify-center border-2 border-white dark:border-[#060810]"
                  style={{ background: exp.color }}>
                  <i className={`bx ${exp.icon} text-white text-base`} />
                </div>

                {/* RIGHT slot */}
                <div className="hidden md:block w-1/2 pl-8">
                  {i % 2 !== 0 && <Card exp={exp} i={i} />}
                </div>

                {/* mobile: full width */}
                <div className="md:hidden w-full">
                  <Card exp={exp} i={i} />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
