'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useActiveSection(items.map(i => i.id))

  // Split items to insert logo in the middle
  const half = Math.ceil(items.length / 2)
  const firstHalf = items.slice(0, half)
  const secondHalf = items.slice(half)

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center">
        <div className="relative flex items-center bg-white rounded-full px-2 py-2 shadow-xl h-14">
          {/* First Half of Items */}
          {firstHalf.map(({ id, label }) => (
            <Link key={id} href={`#${id}`} className="relative h-full flex items-center">
              {active === id && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-full z-0"
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

          {/* Logo in the middle */}
          <div className="px-4">
            <a href="#home"><Image src="/logo.png" alt="Logo" width={40} height={40} /></a>
            
          </div>

          {/* Second Half of Items */}
          {secondHalf.map(({ id, label }) => (
            <Link key={id} href={`#${id}`} className="relative h-full flex items-center">
              {active === id && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-full z-0"
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

      {/* Mobile Navbar */}
      <MobileMenu />
    </>
  )
}
