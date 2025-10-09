"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutJourney() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          My Journey
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I started my journey in web development learning HTML, CSS, and
          JavaScript. Over time, I mastered React.js and Next.js, building
          projects that showcase my skills. I’m always eager to learn new
          technologies and improve my craft.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I enjoy solving complex problems, optimizing web performance, and
          creating UI designs that users love. I’m also interested in
          contributing to open-source projects and collaborating with other
          developers.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile2.jpg"
          alt="Abdullah"
          width={370}
          height={370}
          className="rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700 mx-auto"
        />
      </motion.div>
    </div>
  );
}
