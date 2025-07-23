'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check on mount if screen width >= 768px (md)
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768)
    checkScreen()

    // Also update on resize
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  useEffect(() => {
    if (!isDesktop) return // don't track cursor if not desktop

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [isDesktop])

  // If small screen, render nothing
  if (!isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      style={{
        top: position.y - 0,
        left: position.x - 100,
      }}
    >
      <div className="w-12 h-12 rounded-full border border-emerald-600 flex items-center justify-center">
        <span className="text-[10px] font-extrabold text-emerald-600 tracking-widest uppercase">
          DRAY
        </span>
      </div>
    </motion.div>
  )
}
