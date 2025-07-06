'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useActiveSection(items.map(i => i.id))

  return (
    <nav className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <div className="relative flex items-center bg-white rounded-full px-6 py-4 shadow-xl gap-4">
        {items.map(({ id, label }) => (
          <Link key={id} href={`#${id}`} scroll={false} className="relative">
            {active === id && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-blue-600 rounded-full z-0"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span
              className={`relative z-10 px-6 py-2 font-medium ${
                active === id ? 'text-white' : 'text-neutral-700'
              }`}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
