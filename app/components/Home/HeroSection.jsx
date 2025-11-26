"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 transition-colors duration-500 md:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Text Content */}
      <div className="order-2 max-w-xl text-center md:text-left md:mr-12 md:order-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-5xl font-extrabold text-black md:text-6xl dark:text-white"
        >
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Abdullah Abdalsalam
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-lg text-gray-800 md:text-xl dark:text-gray-300"
        >
          A Frontend Developer building{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            beautiful
          </span>{" "}
          and{" "}
          <span className="font-semibold text-black dark:text-white">fast</span>{" "}
          web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col justify-center gap-4 mt-4 sm:flex-row md:justify-start"
        >
          <Link
            href="/projects"
            className="px-8 py-4 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 font-medium text-blue-600 transition border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black"
          >
            Contact Me
          </Link>

          {/* Download CV Button */}
          <a
            href="/Abdullah-Abd-Alslam-Resume.pdf"
            download
            className="px-8 py-4 font-medium text-white transition bg-green-600 rounded-lg hover:bg-green-700 dark:hover:bg-green-500"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Profile Image with Next.js Image Optimization */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative order-1 mb-8 border-4 border-blue-600 rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 dark:border-blue-400 md:mb-0 md:order-2"
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
