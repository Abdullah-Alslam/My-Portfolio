"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featuredProjects = [
  {
    name: "Game Website",
    demo: "https://game-abdullah.vercel.app",
    github: "https://github.com/Abdullah-Alslam/Game",
  },
  {
    name: "eCommerce",
    demo: "https://e-commerce-lime-phi-53.vercel.app",
    github: "https://github.com/Abdullah-Alslam/E-commerce",
  },
  {
    name: "Portfolio",
    demo: "https://my-portfolio-beryl-nine-29.vercel.app",
    github: "https://github.com/Abdullah-Alslam/My-Portfolio",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-white dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        {featuredProjects.map((proj) => (
          <motion.div
            key={proj.name}
            className="bg-blue-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col gap-3 min-w-[220px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {proj.name}
            </h3>
            <div className="flex justify-between mt-2">
              <Link
                href={proj.demo}
                target="_blank"
                className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                Live Demo
              </Link>
              <Link
                href={proj.github}
                target="_blank"
                className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
              >
                GitHub
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      >
        See All Projects
      </Link>
    </motion.section>
  );
}
