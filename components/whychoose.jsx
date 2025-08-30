// /components/WhyChoose.jsx
"use client";

import React from "react";
import { Sparkles, TrendingUp, Layers, Cog } from "lucide-react";
import { MorphingText } from "./magicui/morphing-text";

const features = [
  {
    icon: <Sparkles className="w-10 h-10 text-sky-400" />,
    title: "AI-Powered Marketing",
    desc: "Real-time audience insights and content generation that scales with your ambitions.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-green-400" />,
    title: "Proven ROI",
    desc: "Full-funnel optimization with attribution you can trust.",
  },
  {
    icon: <Layers className="w-10 h-10 text-purple-400" />,
    title: "Creative + Technical",
    desc: "Brand storytelling meets rigorous performance engineering.",
  },
  {
    icon: <Cog className="w-10 h-10 text-orange-400" />,
    title: "Scalable Solutions",
    desc: "From startup to enterprise, we build systems that grow with you.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-[#0B1D24] text-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        
        <MorphingText texts={["why choose us"]} className="uppercase"/>
        
        <p className="mt-28 text-gray-200 max-w-2xl mx-auto text-xl">
          We fuse generative AI with proven marketing playbooks to deliver predictable growth.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <div className="p-3 rounded-lg bg-white/10">{item.icon}</div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-200 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
