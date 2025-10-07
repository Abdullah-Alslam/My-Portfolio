"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { name: "Game Website", href: "/projects#game" },
  { name: "eCommerce", href: "/projects#ecommerce" },
  { name: "Portfolio", href: "/projects#portfolio" },
];

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-white dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Featured Projects
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {projects.map((proj) => (
          <Link
            key={proj.name}
            href={proj.href}
            className="border p-4 rounded-lg hover:shadow-lg text-gray-700 dark:text-gray-300"
          >
            {proj.name}
          </Link>
        ))}
      </div>
      <Link
        href="/projects"
        className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
      >
        See All Projects
      </Link>
    </motion.section>
  );
}
