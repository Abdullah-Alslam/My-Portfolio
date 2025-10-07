"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative py-24 flex flex-col items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* الخلفية المتحركة */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 opacity-20"
      >
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Developer background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Hello! I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Abdullah Abdalsalam</span>, 
          a passionate Frontend Developer who loves creating interactive, 
          responsive, and visually appealing web experiences using modern 
          technologies like <span className="font-semibold">Next.js</span> and <span className="font-semibold">TypeScript</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
