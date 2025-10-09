"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700 h-full"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">
        Contact Information
      </h2>
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-blue-600 text-xl" />
          <span>+963 991 566 773</span>
        </div>
        <div className="flex items-center gap-4">
          <FaTelegramPlane className="text-blue-600 text-xl" />
          <span>@abdullah1895328</span>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-600 text-xl" />
          <span>abdullah67xyzabc@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-blue-600 text-2xl" />
          <span>+963 991 566 773</span>
        </div>
        <div className="flex items-center gap-4">
          <FaInstagram className="text-blue-600 text-2xl" />
          <span>bdullh66316</span>
        </div>
      </div>
    </motion.div>
  );
}
