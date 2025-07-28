'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const letters = 'DRAY'.split('')

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const letterAnimation = {
  hidden: { opacity: 0, y: `100%` },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Lock scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black ${
            !isLoading ? 'pointer-events-none' : ''
          }`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <motion.div
            className="flex text-4xl sm:text-5xl md:text-7xl font-bold tracking-widest"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
