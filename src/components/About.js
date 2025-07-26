'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      className="w-full py-24 px-6 bg-grey-900 text-white font-outfit"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-2 items-center">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center md:justify-end"
        >
          <div
            className="
              w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72
              overflow-hidden
              rounded-full md:rounded-tl-[45px] md:rounded-bl-[45px]
              md:rounded-tr-none md:rounded-br-none
              shadow-lg transition-all duration-300
            "
          >
            <Image
              src="/img/dray.png"
              alt="Dray"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="text-[45px] font-extrabold dark:text-white text-black"
          >
            About <span className="text-emerald-500">Me</span>
          </motion.h2>

          <motion.div
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="text-[15px] font-light text-gray-400 h-6"
          >
            <Typewriter
              options={{
                strings: ['My Introduction...', 'My Information...'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="text-lg text-gray-400 leading-relaxed text-[15px]"
          >
            I am <strong>Ajibola Ayomide</strong>, a creative Frontend Developer with a focused mindset for building immersive and responsive web experiences. I specialize in turning complex problems into elegant digital solutions using modern technologies like React, Tailwind CSS, and animations powered by Framer Motion.
          </motion.p>

          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="text-lg text-gray-400 leading-relaxed text-[15px]"
          >
            With a strong eye for UI/UX, I create applications that are not only functional but also visually appealing. I enjoy pushing pixels and transforming ideas into code that flows smoothly across every device. Whether it&apos;s a landing page, a portfolio, or a complex product UI I&apos;m all about performance, design systems, and accessibility.
          </motion.p>

          <motion.p
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="text-lg text-gray-400 leading-relaxed text-[15px]"
          >
            Currently pursuing a degree in Computer Science at Lead City University, I balance academic work with real-world projects that sharpen my skills and deliver actual value. Collaboration, consistency, and continuous learning fuel my journey.
          </motion.p>

          <motion.blockquote
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="italic text-xl text-black dark:text-white pt-4 border-t border-emerald-900 mt-10"
          >
            “The intention is nothing but Greatness”
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
