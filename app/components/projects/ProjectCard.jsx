"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, priority = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }} 
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 relative max-w-md mx-auto"
    >
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={700}
          height={400}
          className="w-full h-64 md:h-72 object-cover" 
          {...(priority ? { priority: true } : { loading: "lazy" })}
          placeholder="blur"
          blurDataURL="/blur-placeholder.png"
        />
      </motion.div>

      <div className="p-4 text-center"> 
        <h3 className="text-2xl font-bold mb-2 text-red-500"> 
          {project.title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 mb-3 text-base"> 
          {project.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-black text-white text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between px-4 mt-2 text-sm">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg transition hover:bg-red-600"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} code on GitHub`}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition hover:bg-blue-600"
          >
            GitHub Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
