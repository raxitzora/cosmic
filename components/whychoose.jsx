"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

import {
  Sparkles,
  TrendingUp,
  Layers,
  Cog,
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

// Feature Data
const features = [
  {
    icon: Sparkles,
    color: "text-sky-400",
    title: "AI-Powered Marketing",
    desc: "Real-time audience insights and intelligent content generation built for scalable growth.",
  },

  {
    icon: TrendingUp,
    color: "text-green-400",
    title: "Proven ROI",
    desc: "Full-funnel optimization strategies backed by measurable attribution and performance data.",
  },

  {
    icon: Layers,
    color: "text-purple-400",
    title: "Creative + Technical",
    desc: "Powerful storytelling combined with deep technical execution and marketing engineering.",
  },

  {
    icon: Cog,
    color: "text-orange-400",
    title: "Scalable Solutions",
    desc: "Flexible systems designed to scale seamlessly from startups to enterprise organizations.",
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
      staggerChildren: 0.12,
    },
  },
};

// Optimized Card
const FeatureCard = memo(function FeatureCard({
  icon: Icon,
  color,
  title,
  desc,
}) {
  return (
    <MotionDiv
      variants={fadeInUp}
      className="
        group rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:border-white/20
        hover:bg-white/10
      "
    >
      {/* ICON */}
      <div
        className="
          mb-6 flex
          h-16 w-16
          items-center justify-center
          rounded-2xl
          bg-white/10
          transition-all duration-300
          group-hover:bg-white/15
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
          mb-4 text-2xl
          font-bold text-white
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
    </MotionDiv>
  );
});

function WhyChoose() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0B1D24]
        px-6 py-24
        text-white
        md:px-16
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
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
                texts={["Why Choose Us"]}
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
              mx-auto mt-10
              max-w-3xl
              text-lg leading-relaxed
              text-gray-300
              md:text-2xl
            "
          >
            We combine generative AI,
            automation, and proven
            digital marketing frameworks
            to drive scalable business growth.
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
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

export default memo(WhyChoose);