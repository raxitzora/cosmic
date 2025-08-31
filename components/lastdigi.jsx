// /components/Lastdg.jsx
"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Bot, Link2, Calendar } from "lucide-react";
import { MorphingText } from "./magicui/morphing-text";
import { motion } from "framer-motion";
import Link from "next/link";

// Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Lastdg() {
  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="bg-[#0B1D24] relative px-6 md:px-16 py-24">
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm font-medium"
            >
              The AI Advantage
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-6xl font-bold text-yellow-500"
            >
              We Go Beyond Traditional Marketing
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-200 text-lg"
            >
              Harness cutting-edge AI to ideate, produce, and optimize faster
              than the competition.
            </motion.p>

            {/* Bullet Points */}
            <motion.ul
              className="space-y-4 text-gray-100"
              variants={containerVariants}
            >
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <Sparkles className="w-7 h-7 text-sky-400 mt-1" />
                <span>
                  <strong>Generative AI:</strong> Rapid content systems that
                  maintain brand voice across channels.
                </span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <Bot className="w-7 h-7 text-green-400 mt-1" />
                <span>
                  <strong>Agentic AI:</strong> Autonomous agents monitoring,
                  testing, and tuning your campaigns.
                </span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <Link2 className="w-7 h-7 text-pink-400 mt-1" />
                <span>
                  <strong>Automation:</strong> From lead scoring to
                  personalization, reduce manual lift and boost impact.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-black/30">
              <Image
                src="/digital.jpg"
                alt="AI Digital Marketing"
                width={500}
                height={350}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0C0F18] px-6 md:px-16 py-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MorphingText texts={["Ready to Grow Your Business?"]} />
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-200 text-xl lg:mt-8 md:mt-8 sm:mt-30"
        >
          Let’s map your growth plan together in a free 30-minute discovery
          call.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6"
        >
          <Link href="contact">
          <button className="flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-100 transition mx-auto">
            <Calendar className="w-5 h-5" />
            Schedule Your Free 30-Min Discovery Call
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
