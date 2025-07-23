'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
} from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/Dray-bot', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/ayomide-ajibola-4989a2324', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:samueldray180@gmail.com', label: 'Email' },
  { Icon: Instagram, href: 'https://www.instagram.com/dray_11_?igsh=MTN2Ym1iMjR5bjl6ZQ==', label: 'Instagram' },
  { Icon: Twitter, href: 'https://x.com/ajibola_ay33291?t=avzg-21CopHFxz7M3hROLA&s=09', label: 'Twitter' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-grey-900 border-t border-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-start">
        {/* Branding */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-white mb-2">Dray</h3>
          <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
            Frontend Developer crafting clean, scalable, and impactful web
            experiences. Let&apos;s build something legendary.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h4 className="text-base font-semibold text-gray-300">Connect with me</h4>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white hover:text-emerald-500 transition"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h4 className="text-base font-semibold text-gray-300">Navigate</h4>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-emerald-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="border-t border-[#E5E7EB] text-center text-xs text-white py-5 select-none"
        variants={itemVariants}
      >
        &copy; {currentYear} <span className="font-semibold text-white">Dray</span>. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
