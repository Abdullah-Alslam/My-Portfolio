"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Firebase",
    "Bootstrap",
    "Vite",
    "Node.js",
    "Framer Motion",
    "Responsive Design",
    "HTML",
    "CSS",
    "GIT & GITHUB",
  ];

  return (
    <section
      id="about"
      aria-label="About Abdullah Abdalsalam"
      className="relative py-24 bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 md:px-16"
    >
      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
          Hello! I’m{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Abdullah Abdalsalam
          </span>
          , a passionate Frontend Developer who loves building{" "}
          <span className="font-semibold text-black dark:text-white">interactive</span>
          ,{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            responsive
          </span>
          , and visually appealing web experiences. I work mainly with{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">TypeScript</span>, and modern web technologies.
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              title={tech}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-blue-500 dark:bg-blue-400 text-white rounded-full font-medium text-sm shadow-sm cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
