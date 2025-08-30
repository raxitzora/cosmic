// /components/DigiService.jsx
"use client";

import React from "react";
import {
  Search,
  Target,
  Share2,
  PenTool,
  Mail,
  BarChart3,
  LayoutGrid,
  Brain,
} from "lucide-react";

import { MorphingText } from "./magicui/morphing-text";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const services = [
  {
    icon: <Search className="w-10 h-10 text-sky-400" />,
    title: "SEO",
    desc: "Technical, on-page, and AI-written content tuned for intent.",
  },
  {
    icon: <Target className="w-10 h-10 text-pink-400" />,
    title: "PPC",
    desc: "High-ROAS campaigns with generative ad variations.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-green-400" />,
    title: "Social Media",
    desc: "Platform-native content and growth loops powered by AI.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-purple-400" />,
    title: "Content Creation",
    desc: "From video scripts to blog engines with consistent tone.",
  },
  {
    icon: <Mail className="w-10 h-10 text-yellow-400" />,
    title: "Email Marketing",
    desc: "Lifecycle flows and campaigns with predictive targeting.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-red-400" />,
    title: "CRO",
    desc: "Experimentation frameworks to lift conversion at scale.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-indigo-400" />,
    title: "Website Design",
    desc: "Modern, fast, accessible sites that perform on search.",
  },
  {
    icon: <Brain className="w-10 h-10 text-orange-400" />,
    title: "AI Analytics",
    desc: "Agentic insights and automation across your funnel.",
  },
];

export default function DigiService() {
  return (
    <section className="w-full bg-[#0B0F19] text-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto text-left mb-12">
        {/* Title animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <MorphingText texts={["services"]} className="uppercase" />
        </motion.div>

        {/* Subtext animation */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-4 text-gray-400 max-w-full flex justify-center"
        >
          Integrated services to capture, convert, and compound growth.
        </motion.p>
      </div>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="flex flex-col justify-between bg-[#0D1620] border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition"
          >
            <div className="flex flex-col gap-4">
              <div className="p-3 rounded-lg bg-white/10 w-fit">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.desc}</p>
            </div>
            <button className="mt-4 text-sm font-medium text-sky-400 hover:underline flex items-center gap-1">
              Learn More →
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
