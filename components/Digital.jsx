// /components/Digital.jsx
"use client";

import React from "react";
import { Phone } from "lucide-react";
import Chart from "./chart";

export default function Digital() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0B1D24] via-[#17313B] to-[#0B1D24] text-white px-6 md:px-16 py-24">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Texts */}
        <div className="text-left space-y-6">
          {/* Badge */}
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium">
            AI-Driven Growth
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-snug max-w-2xl">
            AI-Driven Digital Marketing for the Next Generation of
            Businesses
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-300 max-w-lg">
            At Cosmic Information System, we combine creativity, data-driven
            insights, and cutting-edge AI to help your brand stand out online.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="flex items-center gap-2 bg-sky-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-sky-300 transition">
              <Phone className="w-5 h-5" />
              Book a Free 30-Minute Strategy Call
            </button>
          </div>
        </div>

        {/* Right Side - Chart */}
        <div className="w-full h-80">
          <Chart />
        </div>
      </div>
    </section>
  );
}
