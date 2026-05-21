"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

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

// Lazy Load Framer Motion
const MotionDiv = dynamic(
  async () => {
    const mod = await import("framer-motion");
    return mod.motion.div;
  },
  {
    ssr: false,
  }
);

const MotionP = dynamic(
  async () => {
    const mod = await import("framer-motion");
    return mod.motion.p;
  },
  {
    ssr: false,
  }
);

// Lazy Load Heavy MorphingText
const MorphingText = dynamic(
  () =>
    import("./magicui/morphing-text").then(
      (mod) => mod.MorphingText
    ),
  {
    ssr: false,
  }
);

// Services Data
const services = [
  {
    icon: Search,
    color: "text-sky-400",
    title: "SEO",
    desc: "Technical SEO, AI-assisted content, and search intent optimization for scalable ranking growth.",
  },

  {
    icon: Target,
    color: "text-pink-400",
    title: "PPC",
    desc: "High-performance paid campaigns with AI-driven ad testing and conversion optimization.",
  },

  {
    icon: Share2,
    color: "text-green-400",
    title: "Social Media",
    desc: "Platform-native content strategies and AI-powered audience engagement systems.",
  },

  {
    icon: PenTool,
    color: "text-purple-400",
    title: "Content Creation",
    desc: "Consistent high-quality content pipelines from blogs to scripts and creative assets.",
  },

  {
    icon: Mail,
    color: "text-yellow-400",
    title: "Email Marketing",
    desc: "Automated lifecycle campaigns with intelligent segmentation and personalization.",
  },

  {
    icon: BarChart3,
    color: "text-red-400",
    title: "CRO",
    desc: "Conversion-focused experimentation frameworks designed to maximize business outcomes.",
  },

  {
    icon: LayoutGrid,
    color: "text-indigo-400",
    title: "Website Design",
    desc: "Fast, modern, SEO-friendly websites engineered for scalability and accessibility.",
  },

  {
    icon: Brain,
    color: "text-orange-400",
    title: "AI Analytics",
    desc: "AI-powered funnel insights, automation systems, and predictive growth intelligence.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 24,
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

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Optimized Service Card
const ServiceCard = memo(function ServiceCard({
  icon: Icon,
  color,
  title,
  desc,
}) {
  return (
    <MotionDiv
      variants={fadeInUp}
      className="
        group flex flex-col
        justify-between
        rounded-3xl
        border border-white/10
        bg-[#0D1620]
        p-7
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.04]
      "
    >
      <div className="flex flex-col gap-5">
        {/* ICON */}
        <div
          className="
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            bg-white/5
            transition-all duration-300
            group-hover:bg-white/10
          "
        >
          <Icon
            className={`
              h-8 w-8
              transition-transform duration-300
              group-hover:scale-110
              ${color}
            `}
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            text-2xl font-bold
            text-white
          "
        >
          {title}
        </h3>

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
      </div>
    </MotionDiv>
  );
});

function DigiService() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0B0F19]
        px-6 py-24
        text-white
        md:px-16
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16">
          {/* TITLE */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeInUp}
          >
            <div
              className="
                text-5xl font-extrabold
                uppercase tracking-wide
                md:text-7xl
              "
            >
              <MorphingText
                texts={["Services"]}
              />
            </div>
          </MotionDiv>

          {/* SUBTEXT */}
          <MotionP
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeInUp}
            className="
              mt-6 max-w-3xl
              text-lg leading-relaxed
              text-gray-400
              md:text-xl
            "
          >
            Integrated digital systems
            designed to capture attention,
            convert traffic, and scale
            predictable business growth.
          </MotionP>
        </div>

        {/* GRID */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

export default memo(DigiService);