"use client";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "Tailwind CSS", "Firebase", "JavaScript"];

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
