'use client'

import { motion } from 'framer-motion'
import { Code, Layers, Zap } from 'lucide-react'

const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS'],
  tools: ['Framer Motion', 'Zustand', 'React Hook Form', 'Zod', 'Firebase', 'React Query'],
  others: ['Git & GitHub', 'Vercel', 'Clerk/Auth0', 'UploadThing', 'Google Maps API'],
}

const SkillBlock = ({ title, icon: Icon, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="w-full md:w-1/3 bg-white border border-yellow-200 rounded-2xl shadow-lg p-6"
  >
    <div className="flex items-center gap-3 mb-4 text-yellow-600">
      <Icon size={22} aria-hidden="true" />
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-700 list-none relative">
      {items.map((skill, index) => (
        <li
          key={index}
          className="pl-4 relative before:absolute before:left-0 before:top-2/4 before:-translate-y-2/4 before:w-2 before:h-2 before:rounded-full before:bg-yellow-500"
        >
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
)

export default function Skills() {
  return (
    <section id="skills" className="bg-[#fffbea] py-20 px-4 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-black text-center"
        >
          My Toolbox 
        </motion.h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <SkillBlock
            title="Frontend Development"
            icon={Code}
            items={skills.frontend}
            delay={0.2}
          />
          <SkillBlock
            title="Libraries & Tools"
            icon={Layers}
            items={skills.tools}
            delay={0.4}
          />
          <SkillBlock
            title="Others & Integrations"
            icon={Zap}
            items={skills.others}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}
