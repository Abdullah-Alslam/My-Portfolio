"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-12 transition-colors duration-500">
      
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl md:mr-12 order-2 md:order-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-black dark:text-white"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abdullah Abdalsalam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-6"
        >
          A Frontend Developer building <span className="text-blue-500 dark:text-blue-300 font-semibold">beautiful</span> and <span className="text-black dark:text-white font-semibold">fast</span> web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
        >
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Profile Image with Next.js Image Optimization */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-80 h-80 md:w-96 md:h-96 relative rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-2xl mb-8 md:mb-0 order-1 md:order-2"
      >
        <Image
          src="/profile2.jpg"
          alt="Abdullah Abdalsalam"
          fill
          className="object-cover rounded-full"
          priority
        />
      </motion.div>
    </section>
  );
}
