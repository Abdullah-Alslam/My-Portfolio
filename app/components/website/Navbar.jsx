"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Contact"];

  // Variants للروابط
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants للقائمة Mobile
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.nav
      className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 font-bold text-2xl text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">Abdullah</Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <motion.div
                key={link}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700 dark:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-100 dark:bg-gray-800 space-y-2 px-4 py-3"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -50 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link}
                variants={linkVariants}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
