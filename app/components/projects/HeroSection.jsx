"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center h-[70vh] px-6 md:px-16"
    >
      <h1 className="text-6xl md:text-7xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700">
        My Projects
      </h1>
      <p className="text-blue-600 dark:text-blue-400 text-xl md:text-2xl font-semibold max-w-3xl leading-relaxed">
        Explore my work and creative projects — each one reflects my passion for
        clean design, solid code, and optimized performance.
      </p>
    </motion.section>
  );
}
