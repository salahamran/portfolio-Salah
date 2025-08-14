'use client'

import { useState, useEffect } from 'react'
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
  const [isDark, setIsDark] = useState(false)
  const active = useActiveSection(items.map(i => i.id))

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    })
    obs.observe(document.documentElement, { attributes: true })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="md:hidden fixed top-6 right-6 z-[100]">
      <button
        onClick={() => setOpen(true)}
        className={`p-2 rounded-full transition ${
          isDark ? 'bg-[#A8FC5A] text-black' : 'bg-white/10 text-black hover:bg-white/20'
        }`}
      >
        <FiMenu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={`fixed inset-0 flex flex-col items-center justify-center z-[99] transition-colors ${
              isDark ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setOpen(false)}
              className={`absolute top-6 right-6 p-2 rounded-full transition ${
                isDark ? 'bg-[#A8FC5A] text-black' : 'bg-white/10 text-black hover:bg-white/20'
              }`}
            >
              <FiX size={24} />
            </button>

            <nav className="space-y-8 text-2xl font-semibold text-center">
              {items.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block ${active === id ? (isDark ? 'text-[#A8FC5A]' : 'text-blue-500') : ''} transition`}
                >
                  {label}
                </Link>
              ))}
            </nav>

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
