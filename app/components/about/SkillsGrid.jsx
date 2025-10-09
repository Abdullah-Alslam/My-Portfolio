"use client";

import { motion } from "framer-motion";
import { FaReact, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiFramer,
} from "react-icons/si";

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

export default function SkillsGrid() {
  return (
    <div className="mt-8">
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
            className="flex flex-col items-center justify-center w-24 h-24 rounded-full shadow-lg cursor-pointer"
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
  );
}
