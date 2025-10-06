"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-gray-900 dark:text-white">
            <Link href="/">Abdullah</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-gray-700 dark:text-gray-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 space-y-2 px-4 py-3 transition-colors duration-300">
          <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
