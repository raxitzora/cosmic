"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";

import {
  Sparkles,
  Bot,
  Link2,
  Calendar,
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

// Features Data
const features = [
  {
    icon: Sparkles,
    color: "text-sky-400",
    title: "Generative AI",
    desc: "Rapid content systems that maintain consistent brand voice across every marketing channel.",
  },

  {
    icon: Bot,
    color: "text-green-400",
    title: "Agentic AI",
    desc: "Autonomous systems continuously monitoring, testing, and optimizing campaign performance.",
  },

  {
    icon: Link2,
    color: "text-pink-400",
    title: "Automation",
    desc: "Intelligent workflows from lead scoring to personalization that reduce manual operations.",
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

// Optimized Feature Item
const FeatureItem = memo(function FeatureItem({
  icon: Icon,
  color,
  title,
  desc,
}) {
  return (
    <MotionDiv
      variants={fadeInUp}
      className="
        flex items-start
        gap-4
      "
    >
      {/* ICON */}
      <div
        className="
          flex h-14 w-14
          shrink-0 items-center
          justify-center
          rounded-2xl
          bg-white/5
        "
      >
        <Icon
          className={`
            h-7 w-7
            ${color}
          `}
        />
      </div>

      {/* CONTENT */}
      <div>
        <h3
          className="
            text-lg font-bold
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2 text-sm
            leading-relaxed
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

function Lastdg() {
  return (
    <section className="w-full">
      {/* TOP SECTION */}
      <section
        className="
          relative overflow-hidden
          bg-[#0B1D24]
          px-6 py-24
          md:px-16
        "
      >
        <div
          className="
            mx-auto grid
            max-w-7xl
            grid-cols-1
            items-center gap-16
            md:grid-cols-2
          "
        >
          {/* LEFT CONTENT */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* BADGE */}
            <MotionDiv variants={fadeInUp}>
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-purple-500/20
                  bg-purple-500/10
                  px-4 py-2
                  text-sm font-medium
                  text-purple-300
                "
              >
                The AI Advantage
              </span>
            </MotionDiv>

            {/* TITLE */}
            <MotionDiv variants={fadeInUp}>
              <h2
                className="
                  text-4xl font-extrabold
                  leading-tight
                  text-yellow-500
                  md:text-6xl
                "
              >
                We Go Beyond
                Traditional Marketing
              </h2>
            </MotionDiv>

            {/* DESCRIPTION */}
            <MotionP
              variants={fadeInUp}
              className="
                max-w-xl
                text-lg leading-relaxed
                text-gray-300
              "
            >
              Harness AI-powered systems to
              create, optimize, and scale
              faster than traditional
              marketing workflows.
            </MotionP>

            {/* FEATURES */}
            <MotionDiv
              variants={containerVariants}
              className="space-y-6"
            >
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  {...feature}
                />
              ))}
            </MotionDiv>
          </MotionDiv>

          {/* IMAGE */}
          <MotionDiv
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              flex justify-center
              md:justify-end
            "
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-black/20
                shadow-2xl
              "
            >
              <Image
                src="/digital.jpg"
                alt="AI Digital Marketing"
                width={560}
                height={380}
                priority={false}
                className="
                  h-auto w-full
                  object-cover
                "
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="
          bg-[#0C0F18]
          px-6 py-20
          text-center
          md:px-16
        "
      >
        <div className="mx-auto max-w-5xl">
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
                text-4xl font-extrabold
                md:text-6xl
              
              "
            >
              <MorphingText 
                texts={[
                  "Ready to Grow Your Business?",
                ]}
              />
            </div>
          </MotionDiv>

          {/* DESCRIPTION */}
          <MotionP
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeInUp}
            className="
              mx-auto mt-30
              max-w-3xl
              text-lg leading-relaxed
              text-gray-300
              md:text-2xl
            "
          >
            Let’s map your growth strategy
            together in a free 30-minute
            discovery call.
          </MotionP>

          {/* CTA BUTTON */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeInUp}
            className="mt-10"
          >
            <Link
              href="/contact"
              prefetch={true}
              className="
                inline-flex items-center
                gap-3 rounded-2xl
                bg-white
                px-7 py-4
                font-semibold text-black
                shadow-xl
                transition-all duration-300
                hover:scale-105
                hover:bg-gray-100
              "
            >
              <Calendar className="h-5 w-5" />

              <span>
                Schedule Your Free
                Discovery Call
              </span>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </section>
  );
}

export default memo(Lastdg);