"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutHeader from "./AboutHeader";
import AboutJourney from "./AboutJourney";
import SkillsGrid from "./SkillsGrid";

export default function AboutPageInfo() {


  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 md:px-12 py-20 max-w-6xl mx-auto"
        >
          <AboutHeader />
          <AboutJourney />
          <SkillsGrid />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
