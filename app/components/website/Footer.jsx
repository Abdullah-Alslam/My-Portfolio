"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/Abdullah-Alslam",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/abdullah-abdalslam-981633368",
    },
    { icon: <FaTwitter size={24} />, href: "https://twitter.com/username" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-12 pb-6 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Me</h3>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500 dark:text-blue-400" /> +963
            991566773
          </p>
          <p className="flex items-center gap-2">
            <FaTelegramPlane className="text-blue-500 dark:text-blue-400" />{" "}
            @abdullah1895328
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500 dark:text-blue-400" />{" "}
            abdullah67xyzabc@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Me</h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
