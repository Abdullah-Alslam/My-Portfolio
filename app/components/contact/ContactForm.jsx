"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send("service_y7b134k", "template_r4l69sn", formData, "gWjvmkr5gtTUaSo21")
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
    <>
      <ToastContainer />
      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Send a Message</h2>

        <div className="space-y-5">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
            required
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
            required
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
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
              sending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </div>
      </motion.form>
    </>
  );
}
