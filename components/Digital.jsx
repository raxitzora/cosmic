// /components/Digital.jsx
"use client";

import React from "react";
import { Phone } from "lucide-react";
import Chart from "./chart";
import { motion } from "framer-motion";

// Variants for animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Digital() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0B1D24] via-[#17313B] to-[#0B1D24] text-white px-6 md:px-16 py-24">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Texts */}
        <motion.div
          className="text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium"
          >
            AI-Driven Growth
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold leading-snug max-w-2xl"
          >
            AI-Driven Digital Marketing for the Next Generation of Businesses
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-300 max-w-lg"
          >
            At Cosmic Information System, we combine creativity, data-driven
            insights, and cutting-edge AI to help your brand stand out online.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mt-6">
            <button className="flex items-center gap-2 bg-sky-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-sky-300 transition">
              <Phone className="w-5 h-5" />
              Book a Free 30-Minute Strategy Call
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Chart */}
        <motion.div
          className="w-full h-80"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Chart />
        </motion.div>
      </div>
    </section>
  );
}
