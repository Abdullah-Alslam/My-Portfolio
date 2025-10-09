"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageWrapper from "../Loading/PageWarpper";
import HeroSection from "./HeroSection";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactPageInfo() {
  return (
    <PageWrapper>
      <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden relative">
        <ToastContainer />
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-6 md:px-12 py-20"
          >
            {/* Hero Section */}
            <HeroSection />

            {/* Contact Flex */}
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto mt-10">
              {/* Contact Info */}
              <div className="flex-1">
                <ContactInfo />
              </div>

              {/* Contact Form */}
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </PageWrapper>
  );
}
