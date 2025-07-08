'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import HeroShapes from './HeroShapes'


const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white">
      {/* Scrolling Background Text */}
      <motion.div
        animate={{ x: ['45%', '-45%'] }}
        transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[15vw] font-extrabold text-black z-0"
      >
        SALAH AMRAN PYTHON DEVLOPER SALAH AMRAN PYTHON DEVLOPER SALAH AMRAN PYTHON DEVLOPER
      </motion.div>
      <div className="absolute inset-0 pointer-events-none z-10">
      <HeroShapes />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black m-[10]">
          Hi, I&apos;m <span className="italic">Salah</span>!
        </h1>
        <p className="mt-2 text-gray-500 m-[10]">Python Developer</p>

        <div className="w-[300px] h-[300px] mx-auto perspective">
  <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
    {/* Front Side */}
    <div className="absolute w-full h-full backface-hidden rounded-4xl overflow-hidden shadow-lg rotate-y-15">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Back Side */}
    <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white/100 opacity-98 shadow-lg flex flex-col items-center justify-center rounded-4xl">
      <p className="text-black text-xl font-semibold">Scroll Down</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500 mt-2 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>
<button  className="group relative mt-20 pl-6 pr-6 py-3 font-semibold text-black rounded-full outline outline-5 outline-blue-600 transition-all duration-300 hover:pr-15">
  {/* Expanding Circle on the Left */}
  <span className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex items-center justify-center">
    {/* You can put an arrow here: ↓ or → or SVG */}
    <span className="text-white text-xs">→</span>
  </span>
  <a href="#projects">View my projects</a>
  
</button>

      </div>
    </section>
  )
}

export default Hero
