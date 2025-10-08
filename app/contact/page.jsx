"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from "../components/Loading/PageLoading";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_y7b134k", // 🔹 Service ID
        "template_r4l69sn", // 🔹 Template ID
        formData,
        "gWjvmkr5gtTUaSo21" // 🔹 Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Something went wrong ❌", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
          console.error(error);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden relative">
      <ToastContainer />
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
            <div className="text-center mb-14">
              <motion.h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Get in Touch
              </motion.h1>
              <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                Have a question or want to collaborate? I’d love to hear from
                you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700"
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
                    <FaWhatsapp  className="text-blue-600 text-2xl" />
                    <span>+963 991 566 773</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaInstagram className="text-blue-600 text-2xl" />
                    <span>bdullh66316</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                onSubmit={sendEmail}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-semibold mb-6 text-blue-600">
                  Send a Message
                </h2>
                <div className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-900 dark:text-gray-100"
                    required
                  ></textarea>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={sending}
                    className={`w-full py-3 rounded-lg font-semibold text-white shadow-md ${
                      sending
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {sending ? "Sending..." : "Send Message"}
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
