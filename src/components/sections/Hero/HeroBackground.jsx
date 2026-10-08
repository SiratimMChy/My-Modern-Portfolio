export default function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-300/40 dark:bg-sky-600/10 blur-[120px] transition-colors duration-300" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-violet-300/40 dark:bg-violet-700/10 blur-[100px] transition-colors duration-300" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
      <div className="hidden lg:block absolute left-[7%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300/50 dark:via-slate-700/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 dark:via-sky-500/25 to-transparent" />
    </>
  )
}
