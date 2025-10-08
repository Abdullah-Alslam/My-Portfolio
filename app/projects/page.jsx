"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/website/Navbar";
import PageLoader from "../components/Loading/PageLoading";

const projectsData = [
  {
    title: "eCommerce App",
    description: "A full-stack eCommerce platform built with modern technologies for performance and scalability.",
    tags: ["Next.js", "MongoDB", "Tailwind", "TypeScript", "Redux"],
    image: "/e-commerce.png",
    demo: "https://e-commerce-lime-phi-53.vercel.app",
    code: "https://github.com/Abdullah-Alslam/E-commerce",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing all my professional projects and frontend skills.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "Responsive"],
    image: "/portfolio.png",
    demo: "https://my-portfolio-beryl-nine-29.vercel.app",
    code: "https://github.com/Abdullah-Alslam/My-Portfolio",
  },
  {
    title: "Game Project",
    description: "An interactive gaming website built using React.js, Firebase, and modern animations.",
    tags: ["React", "Firebase", "Vite", "Tailwind", "Animations"],
    image: "/gaming-website.png",
    demo: "https://game-abdullah.vercel.app",
    code: "https://github.com/Abdullah-Alslam/Game",
  },
];

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader color="#f87171" bg="bg-gray-900" />;

  return (
    <main className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
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
          Explore my work and creative projects — each one reflects my passion for clean design and solid code.
        </p>
      </motion.section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 flex flex-col gap-12">
        {/* row number 1 : tow projects*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, 2).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 relative"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-4 text-center">
                <h3 className="text-2xl font-extrabold mb-1 text-red-500">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3 text-base">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full bg-black text-white text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between px-4 mt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg transition hover:bg-red-600 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition hover:bg-blue-600 text-sm"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* row numer 2 : Gaming Project*/}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="w-full md:w-1/2 lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 relative"
          >
            <motion.img
              src={projectsData[2].image}
              alt={projectsData[2].title}
              className="w-full h-64 md:h-72 object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <div className="p-4 text-center">
              <h3 className="text-2xl font-extrabold mb-1 text-red-500">{projectsData[2].title}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3 text-base">{projectsData[2].description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {projectsData[2].tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full bg-black text-white text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between px-4 mt-2">
                <a
                  href={projectsData[2].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg transition hover:bg-red-600 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={projectsData[2].code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition hover:bg-blue-600 text-sm"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* background*/}
      <motion.div
        className="absolute top-16 left-6 w-44 h-44 rounded-full bg-red-400/20 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
      <motion.div
        className="absolute bottom-16 right-6 w-60 h-60 rounded-full bg-blue-400/20 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 9 }}
      />
    </main>
  );
}
