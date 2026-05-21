"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";

import {
  Flame,
} from "lucide-react";

import {
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
  SiGnubash,
  SiProbot,
  SiPython,
} from "react-icons/si";

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

// Lazy Load Heavy Orbiting Component
const OrbitingCircles = dynamic(
  () =>
    import("@/components/magicui/orbiting-circles").then(
      (mod) => mod.OrbitingCircles
    ),
  {
    ssr: false,

    loading: () => (
      <div
        className="
          h-[420px] w-[420px]
          animate-pulse rounded-full
          bg-[#17313B]
        "
      />
    ),
  }
);

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

// Icon Config
const innerIcons = [
  {
    icon: SiOpenai,
    className: "text-white",
  },

  {
    icon: SiGooglegemini,
    className: "text-[#6C4DF5]",
  },

  {
    icon: SiPerplexity,
    className: "text-gray-400",
  },
];

const outerIcons = [
  {
    icon: SiGnubash,
    className: "text-gray-200",
  },

  {
    icon: SiProbot,
    className: "text-green-400",
  },

  {
    icon: SiPython,
    className: "text-yellow-400",
  },
];

// Reusable Orbit Icon
const OrbitIcon = memo(function OrbitIcon({
  icon: Icon,
  className,
  size = "large",
}) {
  return (
    <Icon
      className={`
        transition-transform duration-300
        hover:scale-110
        ${
          size === "large"
            ? "h-16 w-16 md:h-20 md:w-20"
            : "h-12 w-12 md:h-14 md:w-14"
        }
        ${className}
      `}
    />
  );
});

function Auto() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#0B1D24]
        via-[#17313B]
        to-[#0B1D24]
        px-6 py-28
        md:px-16
      "
    >
      <div
        className="
          mx-auto grid
          max-w-7xl
          grid-cols-1
          items-center gap-20
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
          {/* TITLE */}
          <MotionDiv variants={fadeInUp}>
            <h2
              className="
                text-4xl font-extrabold
                leading-tight
                text-white
                md:text-6xl

              "
            >
              We Help Businesses
              Unlock the Full
              Potential of{" "}
              <span className="text-sky-400">
                AI & Automation
              </span>
            </h2>
          </MotionDiv>

          {/* DESCRIPTION */}
          <MotionDiv variants={fadeInUp}>
            <p
              className="
                max-w-xl
                text-lg leading-relaxed
                text-gray-300
              "
            >
              From startups to enterprise
              organizations, we help teams
              adopt AI strategically with
              scalable automation systems
              and intelligent workflows.
            </p>
          </MotionDiv>

          {/* CTA */}
          <MotionDiv variants={fadeInUp}>
            <Link
              href="/contact"
              prefetch={true}
              className="
                inline-flex items-center
                gap-3 rounded-2xl
                bg-sky-500
                px-7 py-4
                font-semibold text-white
                shadow-xl
                transition-all duration-300
                hover:scale-105
                hover:bg-sky-400
                hover:shadow-sky-500/30
              "
            >
              <Flame className="h-5 w-5" />

              <span>
                Schedule Free AI
                Readiness Call
              </span>
            </Link>
          </MotionDiv>
        </MotionDiv>

        {/* RIGHT CONTENT */}
        <MotionDiv
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
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
            relative flex
            min-h-[450px]
            items-center justify-center
          "
        >
          <div
            className="
              relative flex
              h-[420px] w-[420px]
              items-center justify-center
            "
          >
            {/* CENTER GLOW */}
            <div
              className="
                absolute h-32 w-32
                rounded-full
                bg-sky-500/10
                blur-3xl
              "
            />

            {/* INNER ORBIT */}
            <OrbitingCircles>
              {innerIcons.map((item, index) => (
                <OrbitIcon
                  key={index}
                  icon={item.icon}
                  className={item.className}
                  size="large"
                />
              ))}
            </OrbitingCircles>

            {/* OUTER ORBIT */}
            <OrbitingCircles
              radius={170}
              reverse
            >
              {outerIcons.map((item, index) => (
                <OrbitIcon
                  key={index}
                  icon={item.icon}
                  className={item.className}
                  size="small"
                />
              ))}
            </OrbitingCircles>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default memo(Auto);