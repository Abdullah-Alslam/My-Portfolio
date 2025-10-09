"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
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
    </>
  );
}
