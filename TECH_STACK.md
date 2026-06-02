# 🏗️ Gurujii Group of Real Estates - Technology Stack

This document outlines the complete technology stack used to build, animate, and deploy the Gurujii Group of Real Estates web application.

---

## 🎨 Frontend Architecture (Client-Side)

The website is built as a highly optimized **Single Page Application (SPA)**, meaning it never reloads the browser when users navigate between pages, resulting in a lightning-fast experience.

- **Core Framework:** React.js (v18)
- **Build Tool / Bundler:** Vite (Provides instant server start and hyper-fast Hot Module Replacement)
- **Routing:** React Router DOM (Handles seamless client-side page transitions without refreshing)
- **Styling & CSS:** 
  - Tailwind CSS (Utility-first framework used for the custom "Liquid Glass" design system)
  - Custom CSS Modules (For specific custom cursors and scrollbar modifications)
- **Animations & Interactivity:**
  - Framer Motion (Used for complex page transitions, floating chatbot animations, and staggered list reveals)
  - GSAP (GreenSock Animation Platform) + ScrollTrigger (Used for high-performance parallax scrolling effects in the Hero section)
  - Lenis (Provides buttery-smooth scrolling physics across the entire application)
- **Icons:** Lucide React & React Icons (Lightweight SVG icon libraries)
- **Carousels/Sliders:** Swiper.js (Used for the auto-playing, fading hero image galleries)

---

## ⚙️ Backend & Infrastructure (Server-Side)

This architecture is entirely **Serverless**. It does not rely on a traditional monolithic backend (like Node.js or Python) which eliminates server maintenance costs and significantly increases global load speeds.

- **Hosting & Deployment:** Vercel 
  - Serves the static React build via their ultra-fast Global Edge CDN.
  - Automatically handles SSL/TLS certificates (HTTPS).
  - Uses `vercel.json` rewrite rules to perfectly manage React Router client-side paths.
- **Form Handling / Database:** WhatsApp API Integration
  - Instead of a traditional database, the site uses an intelligent Client-to-WhatsApp routing system.
  - The custom floating Chatbot and Contact Forms dynamically encode user data into a URI string and push it directly to the official Gurujii WhatsApp business number.

---

## 🔍 SEO & Meta Architecture

- **Meta Configuration:** Hardcoded HTML5 tags injected into `index.html`.
- **Search Engine Optimization:** 100+ highly targeted Madurai real estate keywords embedded in the code.
- **Social Graph Optimization:** Custom Open Graph (`og:`) meta tags configured to generate beautiful visual preview cards when the link is shared on WhatsApp, Facebook, or LinkedIn.
- **Canonical Linking:** Establishes `www.gurujiigroupofrealestates.com` as the master domain to prevent Google penalty for duplicate content.

---

## 🧠 Version Control & CI/CD

- **Version Control System:** Git
- **Code Repository:** GitHub
- **Continuous Deployment (CI/CD):** Integrated with Vercel. Pushing code to the `main` branch on GitHub automatically triggers a secure, optimized production build on Vercel servers.
