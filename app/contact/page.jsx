"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import PageLoader from "../components/Loading/PageLoading";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden relative transition-colors duration-500">
      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-6 md:px-12 py-20"
          >
            {/* Header */}
            <div className="text-center mb-14">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Get in Touch
              </motion.h1>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                Have a question or want to collaborate? I’d love to hear from you.  
                Let’s build something great together.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I’m always open to discussing new projects, ideas, or opportunities.  
                  Don’t hesitate to reach out!
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-100 text-lg">
                      +963 991 566 773
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <FaTelegramPlane className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-100 text-lg">
                      @abdullah1895328
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-100 text-lg">
                      abdullah67xyzabc@gmail.com
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  Send a Message
                </h2>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-900 dark:text-gray-100"
                  ></textarea>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 py-3 rounded-lg font-semibold text-white shadow-md"
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
