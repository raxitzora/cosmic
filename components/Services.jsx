"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import {
  Monitor,
  Brain,
  LineChart,
  Globe,
  Shield,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";

// Lazy Load Framer Motion
const MotionDiv = dynamic(
  async () => {
    const mod = await import("framer-motion");
    return mod.motion.div;
  },
  { ssr: false }
);

const MotionH1 = dynamic(
  async () => {
    const mod = await import("framer-motion");
    return mod.motion.h1;
  },
  { ssr: false }
);

// Services Data
const services = [
  {
    title: "Web Design",
    desc: "Design your brand’s digital experience with modern scalable solutions.",
    icon: Monitor,
  },
  {
    title: "SEO & SEO For AI",
    desc: "Performance-focused optimization for search engines and AI systems.",
    icon: Globe,
  },
  {
    title: "Google Ads Management",
    desc: "High-converting PPC campaigns managed by experienced experts.",
    icon: LineChart,
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic campaigns across Facebook, LinkedIn, YouTube & TikTok.",
    icon: FaFacebookF,
  },
  {
    title: "AI Automation",
    desc: "Automate workflows and personalize customer experiences at scale.",
    icon: Brain,
  },
  {
    title: "Secure Web Hosting",
    desc: "Fast, secure and enterprise-grade hosting infrastructure.",
    icon: Shield,
  },
];

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// Optimized Card Component
const ServiceCard = memo(function ServiceCard({
  title,
  desc,
  icon: Icon,
}) {
  return (
    <MotionDiv
      variants={cardVariants}
      className="
        group rounded-3xl
        border border-white/10
        bg-white/5
        p-8 text-center
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:border-yellow-400/40
        hover:bg-white/10
      "
    >
      {/* ICON */}
      <div
        className="
          mx-auto mb-6
          flex h-20 w-20
          items-center justify-center
          rounded-full
          bg-yellow-400/10
          transition-all duration-300
          group-hover:bg-yellow-400/20
        "
      >
        <Icon
          className="
            h-10 w-10
            text-yellow-400
            transition-transform duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* TITLE */}
      <h2
        className="
          mb-4 text-xl
          font-bold text-white
        "
      >
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-sm leading-relaxed
          text-gray-300
          md:text-base
        "
      >
        {desc}
      </p>
    </MotionDiv>
  );
});

function Services() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0C1F27]
        px-6 py-20
        text-white
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <MotionH1
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto mb-16
            max-w-4xl text-center
            text-4xl font-extrabold
            leading-tight
            md:text-6xl
          "
        >
          Our Digital Marketing &{" "}
          <span className="text-yellow-400">
            AI Automation Services
          </span>
        </MotionH1>

        {/* GRID */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </MotionDiv>

        {/* CTA */}
        <MotionDiv
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            prefetch={true}
            className="
              inline-flex items-center
              justify-center
              rounded-full
              bg-yellow-400
              px-8 py-4
              text-lg font-bold
              text-[#0F5881]
              shadow-xl
              transition-all duration-300
              hover:scale-105
              hover:bg-yellow-300
              hover:shadow-yellow-400/30
            "
          >
            Book Your Free 30 Minutes Strategy Session
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}

export default memo(Services);