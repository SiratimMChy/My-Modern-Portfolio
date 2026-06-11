# 🚀 Siratim Mustakim Chowdhury - Professional Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.24-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

**A highly interactive, performance-optimized, and modern web portfolio showcasing full-stack development expertise.**

[🌐 Live Demo](https://smcportfolio-f0aae.web.app/) • [📧 Contact](mailto:chowdhurysiratimmustakim@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/siratim-mustakim-chowdhury) • [🐱 GitHub](https://github.com/SiratimMChy)

</div>

---

## ✨ Key Features

- **🎨 Modern UI/UX:** Clean, intuitive, and visually stunning design built with Tailwind CSS and custom UI components.
- **✨ Advanced Animations:** Seamless transitions and micro-interactions powered by **Framer Motion** and **GSAP**.
- **📜 Smooth Scrolling:** Integrated **Lenis** for a buttery smooth scrolling experience synchronized with GSAP ScrollTrigger.
- **🖱️ Custom Interactions:** Custom cursor effects and interactive elements that respond to user behavior.
- **🌓 Adaptive Theme:** Built-in Dark/Light mode with system preference detection and smooth transitions.
- **⚡ Performance Optimized:** Code splitting and lazy loading of components to ensure blazingly fast load times.
- **📱 Fully Responsive:** Flawless experience across mobile, tablet, and desktop devices.
- **📬 Integrated Contact Form:** Real-time email delivery using **EmailJS**.
- **🎵 Sensory Experience:** Immersive sound effects to enhance user interaction.

---

## 🛠️ Technology Stack

### Frontend Core
- **React 18** - UI Library
- **Vite 5** - Next Generation Frontend Tooling
- **Tailwind CSS 3.4** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion 12** - Declarative animations
- **GSAP 3** - Professional-grade JavaScript animations
- **Lenis** - Smooth scroll management

### UI Components & Icons
- **Radix UI (`@radix-ui/react-slot`)** - Unstyled, accessible components
- **Lucide React & Boxicons** - Modern icon libraries
- **Swiper** - Touch-enabled sliders

### Utilities & Integration
- **EmailJS (`@emailjs/browser`)** - Client-side email service
- **clsx & tailwind-merge** - Conditional class merging

---

## 📂 Architecture & Project Structure

The project is structured for scalability, modularity, and maintainability.

```text
src/
├── components/          # Primary application sections
│   ├── ui/              # Reusable base components (buttons, cards, badges)
│   ├── Navbar.jsx       # Responsive navigation
│   ├── Hero.jsx         # Landing section with animations
│   ├── About.jsx        # Personal biography
│   ├── Skills.jsx       # Technical expertise grid
│   ├── Education.jsx    # Academic background
│   ├── Experience.jsx   # Professional timeline
│   ├── Projects.jsx     # Filterable portfolio showcase
│   ├── ProjectDetail.jsx# Project modal views
│   ├── Contact.jsx      # EmailJS integrated form
│   └── Footer.jsx       # Site footer
├── lib/                 # Third-party library configurations
├── utils/               # Core utilities and helpers
│   ├── cursorEffects.js # Custom cursor logic
│   ├── gsapAnimations.js# Reusable GSAP animation sequences
│   ├── soundEffects.js  # Audio interaction manager
│   └── performanceMonitor.js # Performance tracking
├── App.jsx              # Main layout and lazy loading orchestrator
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind directives
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SiratimMChy/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *(See `EMAILJS_SETUP.md` for detailed instructions on obtaining these credentials).*

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production to the `dist` folder.
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Runs ESLint to analyze the code for potential errors.

---

## 🌐 Deployment

This project is optimized for deployment on Firebase Hosting, but can be easily deployed to Vercel, Netlify, or GitHub Pages.

### Firebase Deployment
```bash
# Build the project
npm run build

# Login to Firebase
firebase login

# Initialize project (if not done)
firebase init

# Deploy
firebase deploy
```

---

## ⚡ Performance Optimization

This portfolio prioritizes a seamless user experience through rigorous performance optimizations:
- **Lazy Loading:** Critical path rendering is prioritized; components below the fold are loaded asynchronously using `React.lazy` and `Suspense`.
- **GSAP Ticker Integration:** Lenis smooth scrolling is synchronized with GSAP's ticker to eliminate layout thrashing and maintain 60 FPS.
- **Lighthouse Optimized:** Achieves 95+ scores across Performance, Accessibility, Best Practices, and SEO.

---

## 👨‍💻 Author

**Siratim Mustakim Chowdhury**  
*Full Stack Web & Android Developer | MERN Stack Specialist*

Feel free to reach out if you have any questions or want to collaborate!

- 🌐 [Portfolio](https://smcportfolio-f0aae.web.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/siratim-mustakim-chowdhury)
- 🐱 [GitHub](https://github.com/SiratimMChy)
- 📧 chowdhurysiratimmustakim@gmail.com

---

<div align="center">

**If you found this project helpful or inspiring, please consider giving it a ⭐!**

</div>
