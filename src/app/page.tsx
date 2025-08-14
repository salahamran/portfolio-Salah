import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Desktop-only fixed language toggle */}
      <div className="hidden md:block fixed top-6 left-6 z-50">
        <LanguageToggle />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <CustomCursor />
      <ThemeToggle/>
      <Analytics />
    </main>
  );
}
