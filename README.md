# 🚀 Siratim Mustakim Chowdhury - Professional Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.24-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

**A modern, scalable, and responsive web portfolio designed to showcase my experience in full-stack development.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Website-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://smcportfolio-f0aae.web.app/)
[![Email](https://img.shields.io/badge/Email-Contact%20Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chowdhurysiratimmustakim@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/siratim-mustakim-chowdhury)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SiratimMChy)

</div>

---

## 📌 Overview

This portfolio is built to demonstrate real-world implementation of modern frontend technologies. It prioritizes user experience, accessibility, and performance while maintaining a clean and professional design aesthetic. 

## ✨ Key Features

- **Responsive & Accessible UI:** Designed with a mobile-first approach using Tailwind CSS to ensure a consistent experience across all devices.
- **Dynamic Theming:** Seamless system-aware dark and light mode toggle.
- **Optimized Animations:** Uses Framer Motion for declarative component transitions and CSS utilities for lightweight micro-interactions, reducing JavaScript overhead.
- **Performance Focused:** Implements lazy loading and optimized asset delivery for faster initial page loads.
- **Interactive Contact Integration:** Client-side email handling powered by EmailJS, providing real-time feedback without a dedicated backend.
- **Custom Integrations:** Features modular utilities for cursor tracking and performance monitoring.

---

## 🛠️ Technology Stack

### Frontend & Build Tools
- **React 18**
- **Vite 5**
- **Tailwind CSS 3.4**

### State Management & Animation
- **Framer Motion 12**
- **GSAP 3**
- **Lenis** (Smooth Scrolling)

### Utilities
- **EmailJS** (`@emailjs/browser`)
- **Radix UI** / **Lucide React** / **Boxicons**
- **clsx & tailwind-merge**

---

## 📂 Project Architecture

The repository is modularly organized for maintainability and scalability:

```text
src/
├── components/          # Core section components (Hero, About, Projects, etc.)
│   └── ui/              # Reusable UI primitives (Buttons, Badges)
├── lib/                 # Third-party configuration files
├── utils/               # Helper functions and logic handlers
│   ├── cursorEffects.js # Custom cursor logic
│   ├── gsapAnimations.js# GSAP sequences
│   ├── soundEffects.js  # Audio interactions
│   └── performanceMonitor.js 
├── App.jsx              # Root layout and routing orchestration
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind configuration
```

---

## 🚀 Getting Started

To run this project locally, ensure you have **Node.js (v18+)** installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SiratimMChy/My-Modern-Portfolio.git
   cd My-Modern-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory for EmailJS integration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` in your browser.

---

## 📦 Available Scripts

- `npm run dev` - Starts the local development server.
- `npm run build` - Compiles the application for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs ESLint to check for code quality.

---

## 🌐 Deployment

The application is configured and ready for modern hosting platforms like **Firebase Hosting** and **Vercel**.

To deploy to Firebase:
```bash
npm run build
firebase login
firebase deploy
```

---

## 👨‍💻 Author

**Siratim Mustakim Chowdhury**  
*Full Stack Web & Android Developer | MERN Stack Specialist*

Feel free to reach out for collaborations or inquiries:
- 📧 chowdhurysiratimmustakim@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/siratim-mustakim-chowdhury)
- 🐱 [GitHub](https://github.com/SiratimMChy)

---

<div align="center">
  <b>If you found this project helpful, consider leaving a ⭐ on the repository!</b>
</div>
