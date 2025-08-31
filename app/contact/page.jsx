"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0C1F27] text-white min-h-screen px-6 py-16 mt-10">
      
      {/* Hero Text */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
        >
          Your Digital Transformation Starts Here
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-base sm:text-lg"
        >
          Tell us about your project, and we’ll respond within 24 hours or within 2 business days.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-xl shadow-lg p-8 md:p-12"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Firstname */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Lastname */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Business Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Business Name</label>
            <input
              type="text"
              placeholder="Your Company"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Website URL */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Website URL</label>
            <input
              type="url"
              placeholder="https://example.com"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Industry */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Industry</label>
            <input
              type="text"
              placeholder="Technology, Finance, etc."
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Budget */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Budget</label>
            <input
              type="text"
              placeholder="$5000 - $10000"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Service</label>
            <input
              type="text"
              placeholder="SAP, Web Development, AI, etc."
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Location</label>
            <input
              type="text"
              placeholder="City, Country"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Comment / Other */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 font-semibold text-white">Comment / Other</label>
            <textarea
              placeholder="Write your message here..."
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Submit
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
}
