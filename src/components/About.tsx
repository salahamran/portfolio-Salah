'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const skills = [
  'Good Listener',
  'Learning Fast',
  'Fast Api',
  'Ability to develop',
  'Friendly',
  'Django',
  'React',
  'PostgreSQL',
  'TypeScript',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 text-black bg-white overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-6">
          <span className="text-sm text-blue-600">● Available for work</span>

          <h2 className="text-5xl font-bold">
            About <span className="font-light">me</span>
          </h2>

          <div className="flex items-center gap-4">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">salah.amran@hotmail.com</p>
              <p className="text-sm text-gray-500">Python developer / street photographer</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xl text-gray-700">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>

          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            Contact me →
          </a>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <p className="text-lg font-bold leading-snug">
            Hi, I’m Salah, a passionate Python developer with a love for creating smart digital solutions.
            With a strong background in backend development and creative design, I build web apps that work smoothly and look great across all devices.
          </p>
          <p className="text-gray-600">
            Over the years, I’ve had the opportunity to work with startups and creative teams, helping them turn ideas into reality. Let’s build something amazing together.
          </p>
          <p className="text-lg font-bold leading-snug">
            Let’s build something amazing together.
          </p>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Skills & Technology</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
