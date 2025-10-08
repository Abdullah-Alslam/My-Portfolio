"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/Loading/PageLoading";
import { FaReact, FaBootstrap, FaGitAlt, FaNodeJs, FaJava, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiFirebase, SiMongodb, SiFramer } from "react-icons/si";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F1502F" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden relative ">
      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-6 md:px-12 py-20 max-w-6xl mx-auto"
          >
            {/* Header */}
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
                Hi! I'm Abdullah, a passionate Frontend Developer. I love building interactive, modern, and responsive web applications using React, Next.js, and Tailwind CSS. My goal is to create seamless user experiences and help businesses bring their ideas to life.
              </p>
            </div>

            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  My Journey
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I started my journey in web development learning HTML, CSS, and JavaScript. Over time, I mastered React.js and Next.js, building projects that showcase my skills. I’m always eager to learn new technologies and improve my craft.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I enjoy solving complex problems, optimizing web performance, and creating UI designs that users love. I’m also interested in contributing to open-source projects and collaborating with other developers.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/profile2.jpg"
                  alt="Abdullah"
                  className="w-65 h-65 rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700 mx-auto"
                />
              </motion.div>
            </div>

            {/* Skills Section */}
            <div className="mt-28">
              <h2 className="text-3xl font-semibold mb-8 text-blue-600 dark:text-blue-400 text-center">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center w-24 h-24 rounded-full shadow-lg cursor-pointer "
                    style={{ backgroundColor: skill.color }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="text-3xl text-white">{skill.icon}</div>
                    <span className="mt-2 text-white text-sm font-semibold text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
