'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  User,
  Folder,
  Mail,
  LayoutGrid,
  X,
} from 'lucide-react'

const navLinks = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Projects' },
  { name: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-white dark:bg-black px-6 lg:px-12 py-3 justify-between items-center shadow-xl border-b border-gray-200 dark:border-black">
        <h1 className="text-emerald-600 font-bold text-xl select-none">DRAY</h1>
        <div className="flex gap-8">
          {navLinks.map(({ name, icon }) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className="flex items-center gap-2 text-gray-900 dark:text-white text-sm font-medium hover:text-emerald-500 transition select-none"
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 md:hidden max-w-7xl mx-auto w-full">
          <h1 className="text-gray-900 dark:text-white font-bold text-lg select-none">DRAY</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-gray-900 dark:text-white bg-black/10 dark:bg-white/10 p-2 rounded-xl hover:bg-black/20 dark:hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {isOpen ? <X size={24} /> : <LayoutGrid size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-[3.5rem] left-0 w-full max-h-[calc(100vh-3.5rem)] bg-white dark:bg-[#111] text-gray-900 dark:text-white rounded-t-2xl z-[9999] md:hidden overflow-auto"
          >
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 pb-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {navLinks.map(({ name, icon }) => (
                  <a
                    key={name}
                    href={`#${name.toLowerCase()}`}
                    className="flex flex-col items-center justify-center gap-1 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 p-3 rounded-xl transition select-none text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
