'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function HeroShapes() {
  const shapesRef = useRef(null)
  const inView = useInView(shapesRef, { once: false, margin: '-100px' })

  return (
    <motion.div
      ref={shapesRef}
      className="absolute inset-0 pointer-events-none z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Image
        src="/3d/thorus-knot.png"
        alt="thorus knot"
        width={250}
        height={250}
        className="absolute top-1/2 right-1/4 animate-float"
      />
      <Image
        src="/3d/pyramid.png"
        alt="pyramid"
        width={250}
        height={250}
        className="absolute bottom-1/5 left-1/4 animate-float"
      />
      <Image
        src="/3d/sphere.png"
        alt="sphere"
        width={250}
        height={250}
        className="absolute top-2/30 left-7/25 animate-float"
      />
      <Image
        src="/3d/pill.png"
        alt="pill"
        width={250}
        height={250}
        className="absolute top-2/30 left-7/12 animate-float"
      />
      <Image
        src="/3d/thorus.png"
        alt="thorus"
        width={250}
        height={250}
        className="absolute top-6/9 left-7/16 animate-float"
      />
    </motion.div>
  )
}
