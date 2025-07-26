'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Bookium',
    description:
      'Bookium is a sophisticated online platform designed to showcase a diverse collection of books with an intuitive user interface. Built with Next.js and Tailwind CSS, it features smooth animations powered by Framer Motion, providing a seamless browsing experience across all devices. The project emphasizes responsive design, accessibility, and engaging transitions to keep users immersed while exploring the catalog.',
    image: '/img/bookium.png',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    live: 'https://bookium-leyq.vercel.app/',
    code: 'https://github.com/Dray-bot/bookium',
  },
  {
    title: 'BuildWise',
    description:
      'BuildWise is a sleek and modern landing page tailored for construction businesses, showcasing client testimonials and service highlights. It leverages Next.js with Tailwind CSS for a clean and professional look, while Swiper.js integrates smooth, touch-friendly sliders that enhance user engagement. The site focuses on clarity, ease of navigation, and visual appeal to build trust and convert visitors into clients.',
    image: '/img/buildwise.png',
    tech: ['Next.js', 'Tailwind', 'Swiper.js'],
    live: 'https://build-wise-25a9.vercel.app/',
    code: 'https://github.com/Dray-bot/build-wise',
  },
  {
    title: 'Le Tailore',
    description:
      'Le Tailore is a contemporary e-commerce platform for bespoke clothing, crafted to deliver an elegant shopping experience. With Next.js and Tailwind CSS, the site combines smooth animations and a minimalist design to highlight products and streamline user interactions. Framer Motion enriches the interface with subtle motion, enhancing the overall feel while maintaining high performance and responsiveness.',
    image: '/img/Le Tailore.png',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    live: 'https://le-tailore-wyql.vercel.app/',
    code: 'https://github.com/Dray-bot/le-tailore',
  },
  {
    title: 'Ola Watch Store',
    description:
      'Ola Watch Store is an elegant online retail platform for smartwatches, focused on delivering a premium user experience. Built with React and styled using Tailwind CSS, the store features refined layouts and smooth Framer Motion animations to captivate visitors. It prioritizes responsive design and easy navigation to maximize engagement and sales conversions across all devices.',
    image: '/img/ola.png',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    live: 'https://ray-watch-store.vercel.app/',
    code: 'https://github.com/Dray-bot/ray-watch-store',
  },
]

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      transition: { duration: 0.4, ease: 'easeIn' },
    },
  }
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-grey-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[45px] text-black dark:text-white font-bold mb-16 text-center">
          My <span className="text-emerald-500">Projects</span>
        </h2>

        <div className="space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-8 md:gap-10`}
              variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.2)}
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Image */}
              <div className="md:w-1/2 overflow-hidden rounded-lg shadow-lg group max-w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-72 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text content */}
              <div className="md:w-1/2 max-w-full">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">
                  {project.description.replace(/'/g, "&apos;")}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-emerald-600/10 text-emerald-400 px-3 py-1 rounded-md text-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                  >
                    View Live <FaExternalLinkAlt className="text-xs" />
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black dark:text-gray-300  hover:underline text-sm"
                  >
                    Code <FaGithub className="text-base" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
