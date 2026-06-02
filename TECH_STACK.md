# 🏗️ Gurujii Group of Real Estates - Technology Stack

This document outlines the complete technology stack used to build, animate, and deploy the Gurujii Group of Real Estates web application.

---

## 🎨 Frontend Architecture (Client-Side)

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | React.js (v18) | The foundational JavaScript library for building the Single Page Application (SPA). |
| **Build Tool** | Vite | Provides hyper-fast Hot Module Replacement (HMR) and optimized production builds. |
| **Routing** | React Router DOM | Handles seamless client-side page transitions without browser reloads. |
| **Styling** | Tailwind CSS | Utility-first CSS framework used to build the custom "Liquid Glass" design system. |
| **Custom CSS** | CSS Modules | Used for defining global variables, custom SVG cursors, and base styles. |
| **Animations** | Framer Motion | Powers the complex page transitions, floating chatbot, and staggered reveals. |
| **Parallax Effects** | GSAP + ScrollTrigger | High-performance scrolling effects used specifically in the Hero sections. |
| **Smooth Scrolling** | Lenis | Overrides native browser scrolling to provide buttery-smooth physics globally. |
| **Iconography** | Lucide React | Lightweight, highly customizable SVG icons used across the UI. |
| **Sliders** | Swiper.js | Manages the auto-playing, cross-fading hero image galleries. |

---

## ⚙️ Backend & Infrastructure (Server-Side)

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Architecture** | Serverless | No traditional monolithic backend (like Node.js/Python), ensuring maximum global speed. |
| **Hosting & CDN** | Vercel Edge Network | Serves the static React build globally with ultra-low latency and auto-SSL. |
| **Database/Forms** | WhatsApp API | Completely replaces traditional databases by intelligently routing forms directly to WhatsApp. |
| **Route Rules** | `vercel.json` | Configures Vercel to route all sub-directories back to `index.html` for SPA routing. |

---

## 🔍 SEO & Meta Architecture

| Category | Implementation | Description |
| :--- | :--- | :--- |
| **Keywords** | HTML5 Meta Tags | Over 100+ hyper-targeted Madurai real estate keywords embedded directly into the DOM. |
| **Social Graph** | Open Graph (`og:`) | Generates rich visual preview cards (with logo and descriptions) for Facebook/WhatsApp sharing. |
| **Canonical Links** | `rel="canonical"` | Establishes `www.gurujiigroupofrealestates.com` as the master domain to prevent Google penalties. |

---

## 🧠 Version Control & CI/CD

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Version Control** | Git | Tracks all code changes and history locally. |
| **Repository** | GitHub | Secure, remote cloud backup of the entire application source code. |
| **CI/CD Pipeline** | Vercel Automations | Pushing to the `main` GitHub branch automatically triggers a new live deployment on Vercel. |
