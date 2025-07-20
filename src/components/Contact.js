'use client'

import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const contactLinks = [
  {
    label: 'samueldray180@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=samueldray180@gmail.com',
    icon: Mail,
  },
  {
    label: '+234 816 818 1218',
    href: 'tel:+2348168181218',
    icon: Phone,
  },
  {
    label: 'github.com/Dray-bot',
    href: 'https://github.com/Dray-bot',
    icon: Github,
  },
  {
    label: 'linkedin.com/in/ayomide-ajibola-4989a2324',
    href: 'https://www.linkedin.com/in/ayomide-ajibola-4989a2324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin,
  },
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#fffbea] px-6 py-20 text-[#1f2937] font-inter"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          Let’s Build Something Great
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-[#1f2937]/80"
        >
          Whether it’s a startup idea, personal brand, or real estate platform — I’m ready. Reach out and let’s talk.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 mt-10">
          {contactLinks.map(({ label, href, icon: Icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 px-6 py-4 bg-white hover:bg-[#fef9c3] transition rounded-xl shadow text-[#1f2937] font-medium"
            >
              <Icon className="text-[#ca8a04]" size={22} />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
