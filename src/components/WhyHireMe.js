'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const services = [
  'Responsive, custom web development',
  'Pixel-perfect UI with React & Tailwind CSS',
  'Reusable, performance-optimized components',
  'Clean, scalable codebase with best practices',
  'SEO-friendly architecture and structure',
  'Modern animations using Framer Motion',
  'Full mobile and cross-browser optimization',
  'Smooth API integration with real-time features',
]

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="bg-[#F3F4F6] py-24 px-6 font-outfit">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Hire Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[#1F2937] max-w-3xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I deliver modern, high-performance websites with clean code, optimized UX, and a strong focus on scalability. Every project I work on is crafted for real-world users and business impact.
        </motion.p>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="text-[#CA8A04] mt-1" size={20} />
              <p className="text-[#1F2937]">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
