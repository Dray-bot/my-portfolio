'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const socialLinks = [
  { Icon: Github, href: 'https://github.com/Dray-bot' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/ayomide-ajibola-4989a2324' },
  { Icon: Twitter, href: 'https://x.com/ajibola_ay33291' },
  { Icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=samueldray180@gmail.com' },
]

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-white dark:bg-[#0f172a00] text-gray-800 dark:text-gray-300 flex flex-col justify-center max-w-screen box-border px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden z">
      
      {/* BACKGROUND MOVING TEXT */}
      <motion.div
        className="absolute bottom-12 sm:bottom-8 left-0 w-[250%] sm:w-[200%] md:w-[150%] lg:w-[120%] text-center z-0 select-none pointer-events-none"
        animate={{ 
          x: ['70%', '-50%', '-55%', '0%', '5%', '-90%', '-200%']
        }}
        transition={{
          duration: 20, // Speed up a little
          times: [0, 0.4, 0.5, 0.8, 0.9, 1],
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <h1 className="text-[150px] sm:text-[110px] md:text-[140px] lg:text-[180px] font-bold text-gray-200 dark:text-white/10 whitespace-nowrap tracking-tight">
          Ajibola Ayomide Samuel
        </h1>
      </motion.div>

      {/* MOBILE IMAGE + SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 md:hidden mt-6 w-full flex flex-col items-center"
      >
        <div className="flex flex-col items-center gap-3">
          {/* IMAGE */}
          <div className="w-56 h-56 overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.6)] rotate-3 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
            <Image
              src="/img/dray.png"
              alt="Dray"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-emerald-500">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="cursor-pointer"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* TEXT & DESKTOP GRID */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full mt-8 md:mt-0 gap-6 md:gap-10">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left w-full md:w-1/2 space-y-4 sm:space-y-5"
        >
          <div className="text-base sm:text-lg text-gray-700 dark:text-white">
            {mounted ? (
              <Typewriter
                words={['Hello there 👋', 'Welcome', 'I am...']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            ) : (
              'Hello there 👋'
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words text-gray-900 dark:text-white"
          >
            AJIBOLA <br /> AYOMIDE,{' '}
            <span className="text-emerald-500 text-3xl sm:text-4xl md:text-[2rem]">a</span>
          </motion.h1>

          <div className="text-lg sm:text-xl md:text-2xl text-emerald-500 break-words">
            {mounted ? (
              <Typewriter
                words={['Frontend Developer', 'UI/UX Enthusiast', 'Tech Explorer']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            ) : (
              'Frontend Developer'
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link href="#projects" scroll passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 py-2 border text-gray-900 dark:text-white text-sm font-semibold border-emerald-500 hover:bg-gray-700 hover:border-0 hover:text-white transition rounded cursor-pointer"
              >
                See My Latest Works
              </motion.div>
            </Link>

            {/* CV Download Button */}
            <motion.a
              href="/img/ajibola-ayomide-samuel-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-semibold bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 transition rounded cursor-pointer"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* DESKTOP IMAGE + ICONS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex items-center gap-4 lg:gap-6"
        >
          {/* IMAGE */}
          <div className="w-56 h-56 lg:w-72 lg:h-72 overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.6)] rotate-3 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
            <Image
              src="/img/dray.png"
              alt="Dray"
              width={288}
              height={288}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-col gap-5 lg:gap-6 text-emerald-500">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
