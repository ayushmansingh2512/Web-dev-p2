import React, { useState } from 'react'
import { motion } from 'framer-motion'

const links = ['Ayushman', 'Devansh', 'Dhruv', 'Divya']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <nav className="relative z-10 w-full bg-transparent border-gray-200">
      <div className="max-w-8xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            project-5
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-white">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white transition-colors text-xl font-medium"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
        className="md:hidden fixed top-0 right-0 w-full h-full bg-white bg-opacity-90 flex flex-col text-[#366072] items-center justify-center space-y-8 z-50"
      >
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-white text-3xl font-bold"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            onClick={toggleMenu} // Close menu on link click
          >
            {link}
          </a>
        ))}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#366072] focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </motion.div>
    </nav>
  )
}

export default Navbar