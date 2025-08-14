'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

/**
 * Wrap any content inside this to animate it only when it scrolls into view.
 */
const RevealOnScroll = ({
  children,
  className,
  stagger = 0.15,
  delay = 0,
}: RevealOnScrollProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
