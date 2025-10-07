"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/website/Navbar";
import PageLoader from "../components/Loading/PageLoading";

const projectsData = [
  {
    title: "eCommerce App",
    description: "A full-stack eCommerce application using Next.js, MongoDB, and Tailwind CSS.",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects built with Next.js and TypeScript.",
  },
  {
    title: "Admin Dashboard",
    description: "Dashboard for managing users, products, and orders with charts and analytics.",
  },
  {
    title: "SaaS Project",
    description: "Subscription-based SaaS project built with Next.js, Redux, and MongoDB.",
  },
  {
    title: "Game Project",
    description: "React.js game project demonstrating animations, interactions, and Firebase integration.",
  },
];

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader color="#f87171" bg="bg-gray-900" /> // نفس اللودينج الأحمر للفخامة
      ) : (
        <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <Navbar />

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center h-[60vh] text-center px-6 md:px-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed">
              Here’s a selection of my work, showcasing my skills in React, Next.js, TypeScript, and full-stack development.
            </p>
          </motion.section>

          {/* Projects Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto py-20 px-6 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(248, 113, 113, 0.3)" }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </motion.section>

        </main>
      )}
    </>
  );
}
