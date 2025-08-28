"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundVideo from "@/components/HomeComps/BackgroundVideo";
import { MorphingText } from "@/components/magicui/morphing-text";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Cpu, Sparkles, Brain } from "lucide-react";

// Highlights for marquee
const highlights = [
  {
    name: "25+ Years",
    username: "SAP & IT Consulting",
    body: "Deep expertise across global SAP & IT landscapes.",
    img: "https://avatar.vercel.sh/25years",
  },
  {
    name: "50+ Clients",
    username: "Worldwide",
    body: "Trusted by enterprises across industries & geographies.",
    img: "https://avatar.vercel.sh/clients",
  },
  {
    name: "Big 4 Experience",
    username: "IBM | Accenture | Capgemini",
    body: "Leadership roles delivering strategic transformation.",
    img: "https://avatar.vercel.sh/big4",
  },
  {
    name: "AI & Innovation",
    username: "Future Ready",
    body: "Driving transformation with Generative & Agentic AI.",
    img: "https://avatar.vercel.sh/ai",
  },
  {
    name: "Advisory & Managed Services",
    username: "Trusted Partner",
    body: "From strategy to execution to operations excellence.",
    img: "https://avatar.vercel.sh/advisory",
  },
];

const firstRow = highlights.slice(0, highlights.length / 2);
const secondRow = highlights.slice(highlights.length / 2);

const ReviewCard = ({ img, name, username, body }) => (
  <figure
    className={cn(
      "relative h-full w-72 min-w-[18rem] cursor-pointer overflow-hidden rounded-xl",
      "border border-gray-600 bg-black/30 p-6 shadow-lg",
      "transform-gpu transition-transform duration-300 ease-out hover:scale-105 will-change-transform"
    )}
  >
    <div className="flex items-center gap-3">
      <img
        className="h-10 w-10 rounded-full border border-gray-400 object-cover"
        alt={name}
        src={img}
      />
      <div className="flex flex-col">
        <figcaption className="text-lg md:text-xl font-bold text-yellow-500 truncate">
          {name}
        </figcaption>
        <p className="text-sm font-medium text-cyan-300 truncate">{username}</p>
      </div>
    </div>
    <blockquote className="mt-4 text-base md:text-lg text-gray-200 leading-snug">
      {body}
    </blockquote>
  </figure>
);

// Focused Tech Services
const services = [
  { icon: <Cpu className="w-8 h-8 md:w-10 md:h-10" />, title: "SAP S/4HANA" },
  { icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />, title: "AI" },
  { icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" />, title: "Generative AI" },
  { icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />, title: "Agentic AI" },
];

export default function About() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo src="/bgvid.mp4" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-extrabold mb-10 drop-shadow-lg"
        >
          <MorphingText texts={["Welcome To", "About Section"]} />
        </motion.h2>

        {/* Highlights Marquee */}
        <div className="relative mt-10 w-full overflow-hidden bg-gray-500/40 rounded-xl py-6">
          <Marquee pauseOnHover className="[--duration:7s]">
            {firstRow.map((item) => (
              <ReviewCard key={item.name} {...item} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:7s]">
            {secondRow.map((item) => (
              <ReviewCard key={item.name} {...item} />
            ))}
          </Marquee>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto text-gray-100 text-lg md:text-2xl font-semibold leading-relaxed"
        >
          We are proud to be a trusted partner to our global customers,
          delivering solutions that drive measurable results across:
        </motion.p>

        {/* Services Section */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-700 
              bg-gradient-to-b from-gray-900/70 to-gray-800/50 p-8 text-white shadow-md 
              transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:shadow-cyan-400/30 will-change-transform"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Closing paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto space-y-6 text-center text-gray-200 text-base md:text-lg leading-relaxed"
        >
          <p>
            Our approach blends industry best practices with a deep understanding of
            emerging trends, ensuring that our clients remain competitive, resilient,
            and agile in their markets.
          </p>
          <p>
            At Cosmic Information System, we take pride in our client-centric
            philosophy, transparent communication, and commitment to delivering
            exceptional outcomes.
          </p>
          <p>
            We inspire enterprise innovation through Advisory, Implementation, Test
            Automation, Change Management, and Managed Services — all designed to
            maximize efficiency and deliver a higher Return on Investment (ROI).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
