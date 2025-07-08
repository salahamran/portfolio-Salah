'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useActiveSection } from '@/hooks/useActiveSection'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'


const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(items.map(i => i.id))

  return (
    <div className="md:hidden fixed top-6 right-6 z-[100]">
      {/* Menu button */}
      <button
        onClick={() => setOpen(true)}
        className="text-black p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
      >
        <FiMenu size={24} />
      </button>

      <AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 bg-white text-white flex flex-col items-center justify-center z-[99]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 text-black p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
      >
        <FiX size={24} />
      </button>

      {/* Navigation links */}
      <nav className="space-y-8 text-2xl font-semibold text-center">
        {items.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className={`block ${active === id ? 'text-blue-500' : 'text-black'} transition`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Toggles below nav links */}
      <div className="mt-10 flex flex-col gap-4 items-center">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  )
}
