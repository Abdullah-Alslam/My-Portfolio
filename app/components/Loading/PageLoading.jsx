"use client";

import { motion } from "framer-motion";

export default function PageLoading({ color = "#ffb320", bg = "black" }) {
  return (
    <motion.div
      className={`fixed inset-0 flex flex-col items-center justify-center ${bg} z-50`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={`text-5xl font-bold tracking-widest text-white`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 1],
          opacity: 1,
          textShadow: [
            `0px 0px 0px ${color}`,
            `0px 0px 15px ${color}`,
            `0px 0px 30px ${color}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        MyPortfolio
      </motion.div>

      <motion.div
        className={`mt-6 w-32 h-1 rounded-full`}
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}
