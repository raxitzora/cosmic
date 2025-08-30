// /components/Auto.jsx
"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import React from "react";
import { Flame, Calendar } from "lucide-react";

// React Icons (AI Logos)
import { 
  SiOpenai, 
  SiGooglegemini, 
  SiPerplexity, 
  SiGnubash, 
  SiProbot, 
  SiPython 
} from "react-icons/si";

export default function Auto() {
  return (
    <section className="bg-gradient-to-b from-[#0B1D24] via-[#17313B] to-[#0B1D24] px-6 md:px-16 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            We Help Businesses <br />
            Unlock the Full Potential <br />
            of <span className="text-sky-400">AI & Automation.</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-lg">
            from startups to global enterprises—can adopt AI confidently and strategically with Cosmic Information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-2 bg-sky-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-sky-400 transition shadow-lg">
              <Flame className="w-5 h-5" />
              Schedule Free AI Readiness Call
            </button>
            <button className="flex items-center gap-2 border border-sky-400 text-sky-400 font-medium px-6 py-3 rounded-xl hover:bg-sky-400/10 transition">
              <Calendar className="w-5 h-5" />
              Explore AI Solutions
            </button>
          </div>
        </div>

        {/* Right Side - Orbiting AI Icons */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
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
        </div>
      </div>
    </section>
  );
}
