'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]) // defaults to 'home'

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + window.innerHeight / 3

      const sections = sectionIds.map((id) => {
        const el = document.getElementById(id)
        if (!el) return null

        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        return { id, top, bottom }
      }).filter(Boolean) as { id: string, top: number, bottom: number }[]

      const current = sections.find((section) => scrollY >= section.top && scrollY < section.bottom)
      if (current && current.id !== active) {
        setActive(current.id)
      }

      // Scroll to top fallback (hero)
      if (window.scrollY < 200 && active !== sectionIds[0]) {
        setActive(sectionIds[0])
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, active])

  return active
}
