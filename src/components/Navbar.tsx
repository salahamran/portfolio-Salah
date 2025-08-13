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

  // Custom scroll for home to fix offset (for other ids Next Link smooth scroll should work)
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center">
        <div className="relative flex items-center rounded-full px-2 py-2 shadow-lg h-14"
        style={{ backgroundColor: 'var(--navbar-bg)' }}
        >
          {/* First Half of Items */}
          {firstHalf.map(({ id, label }) =>
            id === 'home' ? (
              <a
                key={id}
                href="#home"
                onClick={handleHomeClick}
                className="relative h-full flex items-center px-6 font-medium"
              >
                {active === id && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute top-0 left-0 w-full h-full bg-[#A8FC5A] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    style={{ backgroundColor: 'var(--nav-highlight-bg)' }}
                  />
                )}
                <span
                  className="relative z-10"
                  style={{
                    color:
                      active === id
                        ? 'var(--navbar-text-active)'
                        : 'var(--navbar-text-inactive)',
                  }}
                >
                  {label}
                </span>
              </a>
            ) : (
              <Link
                key={id}
                href={`#${id}`}
                className="relative h-full flex items-center px-6 font-medium"
              >
                {active === id && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute top-0 left-0 w-full h-full bg-[#A8FC5A] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    style={{ backgroundColor: 'var(--nav-highlight-bg)' }}
                  />
                )}
                <span
                  className="relative z-10"
                  style={{
                    color:
                      active === id
                        ? 'var(--navbar-text-active)'
                        : 'var(--navbar-text-inactive)',
                  }}
                >
                  {label}
                </span>
              </Link>
            )
          )}

          {/* Logo in the middle with light and dark images */}
          <div className="px-4 cursor-pointer select-none">
            {/* Light theme logo */}
            <Image
              src="/logo.png"
              alt="Logo Light"
              width={40}
              height={40}
              className="object-contain"
              style={{ display: 'var(--light-logo-display)' }}
              draggable={false}
            />
            {/* Dark theme logo */}
            <Image
              src="/logo-dark.png"
              alt="Logo Dark"
              width={40}
              height={40}
              className="object-contain"
              style={{ display: 'var(--dark-logo-display)' }}
              draggable={false}
            />
          </div>

          {/* Second Half of Items */}
          {secondHalf.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="relative h-full flex items-center px-6 font-medium"
            >
              {active === id && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute top-0 left-0 w-full h-full bg-[#A8FC5A] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{ backgroundColor: 'var(--nav-highlight-bg)' }}
                />
              )}
              <span
                className="relative z-10"
                style={{
                  color:
                    active === id
                      ? 'var(--navbar-text-active)'
                      : 'var(--navbar-text-inactive)',
                }}
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
