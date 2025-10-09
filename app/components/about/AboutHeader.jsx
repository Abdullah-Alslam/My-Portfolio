"use client";

import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <div className="text-center mb-14">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
        Hi! I'm Abdullah, a passionate Frontend Developer. I love building
        interactive, modern, and responsive web applications using React,
        Next.js, and Tailwind CSS. My goal is to create seamless user
        experiences and help businesses bring their ideas to life.
      </p>
    </div>
  );
}
