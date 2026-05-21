"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Phone } from "lucide-react";

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

const MotionH1 = dynamic(
  async () => {
    const mod = await import("framer-motion");
    return mod.motion.h1;
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

// Lazy Load Heavy Chart
const Chart = dynamic(
  () => import("./chart"),
  {
    ssr: false,

    loading: () => (
      <div
        className="
          h-[320px] w-full
          animate-pulse rounded-3xl
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
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Digital() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#0B1D24]
        via-[#17313B]
        to-[#0B1D24]
        px-6 py-24
        text-white
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
            amount: 0.2,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            flex flex-col
            space-y-7
          "
        >
          {/* BADGE */}
          <MotionDiv variants={fadeInUp}>
            <span
              className="
                inline-flex items-center
                rounded-full
                border border-white/10
                bg-white/5
                px-4 py-2
                text-sm font-medium
                text-sky-300
                backdrop-blur-sm
              "
            >
              AI-Driven Growth
            </span>
          </MotionDiv>

          {/* HEADING */}
          <MotionH1
            variants={fadeInUp}
            className="
              max-w-2xl
              text-4xl font-extrabold
              leading-tight
              md:text-6xl
            "
          >
            AI-Driven Digital Marketing
            for the Next Generation
            of Businesses
          </MotionH1>

          {/* DESCRIPTION */}
          <MotionP
            variants={fadeInUp}
            className="
              max-w-xl
              text-base leading-relaxed
              text-gray-300
              md:text-lg
            "
          >

            We combine creativity, AI,
            and data-driven strategies
            to help brands scale faster
            and dominate digitally.
          </MotionP>

          {/* CTA */}
          <MotionDiv variants={fadeInUp}>
            <Link
              href="/contact"
              prefetch={true}
              className="
                inline-flex items-center
                gap-3 rounded-2xl
                bg-sky-400
                px-7 py-4
                font-semibold text-black
                shadow-xl
                transition-all duration-300
                hover:scale-105
                hover:bg-sky-300
                hover:shadow-sky-400/30
              "
            >
              <Phone className="h-5 w-5" />

              <span>
                Book a Free 30-Minute
                Strategy Call
              </span>
            </Link>
          </MotionDiv>
        </MotionDiv>

        {/* RIGHT CONTENT */}
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
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            relative flex
            min-h-[350px]
            items-center justify-center
          "
        >
          <div
            className="
              w-full overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[#10232B]/70
              p-4
              shadow-2xl
              backdrop-blur-sm
            "
          >
            <Chart />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default memo(Digital);