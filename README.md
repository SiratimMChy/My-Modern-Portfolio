# Smc.dev - Personal Portfolio

A modern, professional portfolio website built by **Siratim Mustakim Chowdhury**, a Full Stack Web & Android Developer specializing in the MERN stack. Designed with a clean dark/light aesthetic, smooth animations, and a fully responsive layout.

🌐 **Live:** [[https://siratimmchy.github.io]([https://siratimmchy.github.io](https://smcportfolio-f0aae.web.app/))
](https://smcportfolio-f0aae.web.app/)
---

## About

This portfolio showcases my skills, education, work experience, and projects as a Computer Science graduate. It is built entirely with React and Vite, styled with Tailwind CSS, and animated with Framer Motion and GSAP. The contact form is powered by EmailJS for direct email delivery without a backend.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with typewriter role, floating tech chips, and profile card |
| **About** | Bio, highlight cards, hobbies, and CTA buttons |
| **Skills & Expertise** | 4-category skill grid — Languages, Frontend, Backend, Databases & Tools |
| **Education** | Degree card, key academic projects, and subject grades |
| **Work Experience** | Zigzag timeline with detailed role cards |
| **Featured Projects** | Filterable project grid with modal detail view |
| **Contact** | Split layout with contact info and EmailJS-powered form |
| **Footer** | Centered nav, social links, and copyright |

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 18, Vite 5 |
| **Styling** | Tailwind CSS 3, shadcn/ui (Button, Badge, Card) |
| **Animation** | Framer Motion 12, GSAP 3 + ScrollTrigger |
| **Icons** | Boxicons, Lucide React |
| **Fonts** | Space Grotesk, Inter |
| **Email** | EmailJS Browser |
| **Deployment** | Firebase Hosting |

---

## Features

- Dark / Light mode with system preference detection
- Fully responsive — mobile, tablet, and desktop
- Smooth scroll-triggered animations on every section
- Typewriter effect for role titles in Hero
- Mouse parallax on Hero image
- Filterable project grid with animated transitions
- Project detail modal with full description, tech stack, features, and challenges
- Zigzag timeline for Work Experience
- EmailJS contact form with validation and status feedback
- Consistent design system across all sections

---

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SiratimMChy/My-Modern-Portfolio.git
cd My-Modern-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed EmailJS configuration instructions.

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with mobile menu
│   ├── Hero.jsx            # Landing section with animated profile card
│   ├── About.jsx           # Bio, highlights, hobbies
│   ├── Skills.jsx          # Skill categories grid
│   ├── Education.jsx       # Degree, projects, subjects
│   ├── Experience.jsx      # Work experience timeline
│   ├── Projects.jsx        # Filterable project cards
│   ├── ProjectDetail.jsx   # Project detail modal
│   ├── Contact.jsx         # Contact form + info
│   ├── Footer.jsx          # Footer with nav and socials
│   └── ui/                 # shadcn/ui components
│       ├── button.jsx
│       ├── badge.jsx
│       └── card.jsx
├── lib/
│   └── utils.js
├── utils/
│   ├── gsapAnimations.js
│   └── soundEffects.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Deployment

```bash
npm run build
```

Built files are output to `dist/`. Deploy to Firebase, Netlify, Vercel, or any static host.

For Firebase:
```bash
firebase deploy
```

---

## Contact

**Siratim Mustakim Chowdhury**
- Email: chowdhurysiratimmustakim@gmail.com
- LinkedIn: [linkedin.com/in/siratim-mustakim-chowdhury](https://www.linkedin.com/in/siratim-mustakim-chowdhury)
- GitHub: [github.com/SiratimMChy](https://github.com/SiratimMChy)

---

