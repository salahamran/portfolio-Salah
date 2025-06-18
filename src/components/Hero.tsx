'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

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
        <Image src="/3d/knot.png" alt="knot" width={250} height={250} className="absolute top-1/2 right-1/3 animate-float" />
        <Image src="/3d/pyramid.png" alt="pyramid" width={250} height={250} className="absolute bottom-1/5 left-1/3 animate-float" />
        <Image src="/3d/sphere.png" alt="sphere" width={250} height={250} className="absolute top-4/20 left-7/20 animate-float" />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          Hi, I&apos;m <span className="italic">Salah</span>!
        </h1>
        <p className="mt-2 text-gray-500">Python Developer</p>

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


        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
          View my projects
        </button>
      </div>
    </section>
  )
}

export default Hero
