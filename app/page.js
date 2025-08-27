"use client";
import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion"; 
import BackgroundVideo from "@/components/HomeComps/BackgroundVideo";
import Services from "@/components/HomeComps/services";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} // ✅ Trigger only when ~30% is in view
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
      >
        {/* Background Video */}
        <BackgroundVideo />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-lg md:text-xl font-medium mb-4"
          >
            Get The Power Of Canada&apos;s{" "}
            <span className="text-yellow-400 font-semibold">Most Experienced</span>{" "}
            Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-3xl md:text-6xl font-extrabold leading-snug max-w-6xl"
          >
            WELCOME TO <strong className="text-yellow-500">COSMIC INFORMATION </strong>SYSTEM
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/consult"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-md shadow-lg transition-all text-lg md:text-xl"
            >
              BOOK A FREE 30-MINUTE STRATEGY SESSION
              <Calendar className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} // Trigger only when scrolled here
      >
        <div>
          <Services />
        </div>
      </motion.section>
    </main>
  );
}
