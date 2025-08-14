# Personal Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
The site is designed to showcase projects, skills, and contact information with smooth animations and theme toggling.

---

## Features

- **Dark/Light Mode Toggle**  
  Persistent theme selection saved in local storage.
- **Language Switcher (EN/RU)**  
  Allows switching between English and Russian, with flags for easy identification. (will be added soon)
- **Custom Cursor**  
  Replaces the default cursor on desktop for a more interactive feel.
- **Responsive Mobile Menu**  
  Animated full-screen overlay menu with integrated theme and language toggles.
- **Hero Section with Animated Titles**  
  Rotating text with a 3D flipping effect.
- **Project Showcase**  
  Displays projects in a grid layout with the option to load more.
- **Project Detail Overlay**  
  Clicking a project opens a full-screen overlay with detailed information.
- **Contact Form**  
  Allows visitors to send a message directly from the site.
- **3D Decorative Shapes**  
  Animated shapes for a modern aesthetic.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Heroicons](https://heroicons.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **Flags:** [flag-icons](https://www.npmjs.com/package/flag-icons)
- **Images:** Next.js `Image` component for optimization

---

## Project Structure

src/
components/
About.tsx
Contact.tsx
CustomCursor.tsx
Hero.tsx
HeroShapes.tsx
LanguageToggle.tsx
MobileMenu.tsx
Navbar.tsx
ProjectOverlay.tsx
Projects.tsx
ThemeToggle.tsx
hooks/
useActiveSection.ts
styles/
globals.css
---


---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or 
yarn install
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```
4. Open your browser at:
```bash
http://localhost:3000
```
5. Building for Production
```bash
npm run build
npm run start
```

6. Customization

- Profile Image: Replace /public/profile.jpg and /public/profile-dark.png

- Accent Colors: Update --accent-color in globals.css

- Projects: Edit Projects.tsx to add or remove projects

- Text & Links: Update content in Hero.tsx, About.tsx, Contact.tsx

## Deployment
You can deploy this project on platforms like:

- Vercel

- Netlify

### License

This project is licensed under the MIT License.
if you intended to use this project you must change my own information including photos and name and all other info.
