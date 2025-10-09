"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="text-center mb-14">
      <motion.h1
        className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
        Have a question or want to collaborate? I’d love to hear from you.
      </p>
    </div>
  );
}
