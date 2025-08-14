'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import HeroShapes from './HeroShapes'

const roles = ['Python Developer', 'Street Photographer', 'Designer']

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500) // Switch every 2.5s
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      {/* Scrolling Background Text */}
      <motion.div
        animate={{ x: ['45%', '-45%'] }}
        transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[15vw] font-extrabold z-20"
        style={{ color: 'var(--text-muted)' }}
      >
        SALAH AMRAN PYTHON DEVELOPER SALAH AMRAN PYTHON DEVELOPER SALAH AMRAN PYTHON DEVELOPER
      </motion.div>

      {/* Shapes */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <HeroShapes />
      </div>

      {/* Foreground */}
      <div className="relative z-10 text-center z-20">
        <h1
          className="text-2xl sm:text-2xl font-bold m-[10]"
          style={{ color: 'var(--text-primary)' }}
        >
          Hi, I&apos;m <span className="italic">Salah</span>!
        </h1>

        {/* Flipping role text */}
        <div className="mt-1 m-[10] perspective-[1000px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ color: 'var(--text-secondary)', transformOrigin: 'center', backfaceVisibility: 'hidden' }}
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Profile Card */}
        <div className="mt-3 w-[300px] h-[300px] mx-auto perspective">
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
            {/* Front Side */}
            <div
              className="absolute w-full h-full backface-hidden rounded-4xl overflow-hidden shadow-lg rotate-y-15"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              {/* Light theme photo */}
              <Image
                src="/profile.jpg"
                alt="Profile Light"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                style={{ display: 'var(--light-photo-display)' }}
              />

              {/* Dark theme photo */}
              <Image
                src="/profile-dark.png"
                alt="Profile Dark"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                style={{ display: 'var(--dark-photo-display)' }}
              />
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full rotate-y-180 backface-hidden opacity-98 shadow-lg flex flex-col items-center justify-center rounded-4xl"
              style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
            >
              <p className="text-xl font-semibold">Scroll Down</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-2 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: 'var(--accent-color)' }}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="group relative mt-20 pl-6 pr-6 py-3 font-semibold rounded-full outline outline-5 transition-all duration-300 hover:pr-15"
          style={{
            color: 'var(--text-primary)',
            outlineColor: 'var(--accent-color)',
          }}
        >
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex items-center justify-center"
            style={{ backgroundColor: 'var(--accent-color)' }}
          >
            <span className="text-white text-xs">→</span>
          </span>
          <a href="#projects">View my projects</a>
        </button>
      </div>
    </section>
  )
}

export default Hero
