'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function HeroShapes() {
  const shapesRef = useRef(null)
  const inView = useInView(shapesRef, { once: false, margin: '-100px' })

  // Detect theme by checking data-theme attribute on html or body
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      const theme =
        document.documentElement.getAttribute('data-theme') ||
        document.body.getAttribute('data-theme') ||
        'light'
      setIsDark(theme === 'dark')
    }
    checkTheme()
    // Optional: listen for changes if your app toggles theme dynamically
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <motion.div
      ref={shapesRef}
      className="absolute inset-0 pointer-events-none z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Image
        src={isDark ? '/3d/dark/sphere-dark.png' : '/3d/light/thorus-knot.png'}
        alt="thorus knot"
        width={550}
        height={550}
        className="absolute top-5/9 right-5/14 "
      />
      {/* <Image
        src={isDark ? '/.3d/dark/sphere-dark.png' : '/3d/light/pyramid.png'}
        alt="pyramid"
        width={250}
        height={250}
        className="absolute bottom-1/7 left-1/8 animate-float"
      /> */}
      <Image
        src={isDark ? '/3d/dark/sphere-dark.png' : '/3d/light/sphere.png'}
        alt="sphere"
        width={250}
        height={250}
        className="absolute top-5/9 left-6/25 animate-float "
      />
      <Image
        src={isDark ? '/3d/dark/sphere-dark.png' : '/3d/light/pill.png'}
        alt="pill"
        width={250}
        height={250}
        className="absolute top-5/9 left-7/11 animate-float"
      />
      {/* <Image
        src={isDark ? '/.3d/dark/sphere-dark.png' : '/3d/light/thorus.png'}
        alt="thorus"
        width={250}
        height={250}
        className="absolute top-6/8 left-7/20 animate-float"
      /> */}
    </motion.div>
  )
}
