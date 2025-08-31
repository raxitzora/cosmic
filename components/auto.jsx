// /components/Auto.jsx
"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import React from "react";
import { Flame, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// React Icons (AI Logos)
import { 
  SiOpenai, 
  SiGooglegemini, 
  SiPerplexity, 
  SiGnubash, 
  SiProbot, 
  SiPython 
} from "react-icons/si";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Auto() {
  return (
    <section className="bg-gradient-to-b from-[#0B1D24] via-[#17313B] to-[#0B1D24] px-6 md:px-16 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-white leading-snug"
          >
            We Help Businesses <br />
            Unlock the Full Potential <br />
            of <span className="text-sky-400">AI & Automation.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg max-w-lg"
          >
            from startups to global enterprises—can adopt AI confidently and strategically with Cosmic Information.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
            <button className="flex items-center gap-2 bg-sky-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-sky-400 transition shadow-lg">
              <Flame className="w-5 h-5" />
              Schedule Free AI Readiness Call
            </button>
            </Link>
           
          </motion.div>
        </motion.div>

        {/* Right Side - Orbiting AI Icons */}
        <motion.div
          className="relative h-[500px] w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Inner Orbit */}
          <OrbitingCircles>
            <SiOpenai className="w-28 h-28 text-white" />
            <SiGooglegemini className="w-28 h-28 text-[#6C4DF5]" />
            <SiPerplexity className="w-28 h-28 text-gray-400" />
          </OrbitingCircles>

          {/* Outer Orbit */}
          <OrbitingCircles radius={190} reverse>
            <SiGnubash className="w-20 h-20 text-gray-200" />
            <SiProbot className="w-20 h-20 text-green-400" />
            <SiPython className="w-20 h-20 text-yellow-400" />
          </OrbitingCircles>
        </motion.div>
      </div>
    </section>
  );
}
