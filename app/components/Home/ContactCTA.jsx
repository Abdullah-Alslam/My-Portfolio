"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-indigo-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Let's build something together!</h2>
      <Link
        href="/contact"
        className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200"
      >
        Contact Me
      </Link>
    </motion.section>
  );
}
