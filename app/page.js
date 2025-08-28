"use client";
import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Services from "@/components/HomeComps/services";
import { Globe } from "@/components/magicui/globe";
import About from "@/components/HomeComps/about";


export default function HomePage() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-[#0B1D24] via-[#17313B] to-[#0B1D24] overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 sm:px-10 lg:px-20 pt-24 sm:pt-28 pb-12"
      >
        {/* Left Content */}
        <div className="relative z-10 max-w-3xl text-center lg:text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            className="text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-snug drop-shadow-lg"
          >
            Where Digital Transformation Meets{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Real Business Impact
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 leading-relaxed"
          >
            Empowering businesses with innovative technology solutions and
            strategic guidance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mt-10 items-center sm:items-start"
          >
            <Link
              href="/consult"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-700 text-white font-bold shadow-lg hover:scale-105 hover:shadow-blue-300/40 transition-transform duration-300 w-full sm:w-auto text-lg sm:text-xl"
            >
              <Calendar className="h-5 w-5" />
              Book a Free Session
            </Link>
          </motion.div>
        </div>

        {/* Right Globe Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80, damping: 18 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center flex-1 mt-12 lg:mt-0"
        >



          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] p-3 bg-gradient-to-tr from-cyan-400/20 to-purple-500/20 rounded-full backdrop-blur-md border border-cyan-400/30 shadow-xl hover:scale-105 transition-transform duration-500">
            <Globe />
          </div>
        </motion.div>
      </motion.section>

      {/* ✅ About Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        viewport={{ once: true }}
        className="relative"
      >
        <About />
      </motion.section>

      {/* ✅ Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-b from-[#102A33] via-[#17313B] to-[#102A33] rounded-t-3xl"
      >
        <Services />
      </motion.section>
    </main>
  );
}
