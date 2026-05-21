// /components/SAP.jsx
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

// Lazy load framer-motion
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

// Lazy load MorphingText
const MorphingText = dynamic(
  () =>
    import("./magicui/morphing-text").then(
      (mod) => mod.MorphingText
    ),
  {
    ssr: false,
  }
);

// Why Us Data
const whyUsData = [
  {
    icon: "🌍",

    title:
      "25+ Years of SAP Experience",

    desc:
      "Our senior consultants bring over 25 years of SAP expertise across complex global transformation programs.",
  },

  {
    icon: "📚",

    title:
      "Industry Thought Leadership",

    desc:
      "Published expertise in Digital Transformation & SAP S/4HANA with trusted strategic insights.",
  },

  {
    icon: "🤝",

    title:
      "Global Consulting Experience",

    desc:
      "Transformation support for 50+ global clients across North America, Europe, and Asia.",
  },

  {
    icon: "🏢",

    title:
      "Big 4 Consulting Pedigree",

    desc:
      "Consulting experience from IBM, Accenture, and Capgemini methodologies and delivery standards.",
  },

  {
    icon: "🚀",

    title:
      "End-to-End Transformation Partner",

    desc:
      "From strategy and implementation to managed services and continuous optimization.",
  },

  {
    icon: "💡",

    title:
      "Partner Commitment",

    desc:
      "A long-term partnership mindset focused on measurable business outcomes and SAP success.",
  },
];

// Services Data
const services = [
  {
    title:
      "Advisory & Strategy Services",

    subtitle:
      "(Plan, Prepare & Guide Your SAP Journey)",

    gradient:
      "bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]",

    items: [
      "SAP S/4HANA Readiness Assessment & Roadmap",
      "SAP S/4HANA Project & Program Management",
      "Business Process Optimization & Rationalization",
      "SAP BTP Strategy & Integration Advisory",
      "Change Management & User Adoption Strategy",
    ],

    outcome:
      "Clarity, structure, and alignment before execution.",
  },

  {
    title:
      "Implementation & Managed Services",

    subtitle:
      "(Deliver, Integrate & Support Your SAP Landscape)",

    gradient:
      "bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399]",

    items: [
      "SAP S/4HANA Implementation",
      "SAP S/4HANA Migration & Conversion",
      "Custom Extensions & SAP BTP Development",
      "SAP Testing & Quality Assurance",
      "Application Managed Services (AMS)",
    ],

    outcome:
      "Successful implementation, seamless migration, and continuous optimization.",
  },
];

// Animation Variants
const fadeUp = {
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
      staggerChildren: 0.08,
    },
  },
};

// Optimized Service Card
const ServiceCard = memo(function ServiceCard({
  title,
  subtitle,
  gradient,
  items,
  outcome,
}) {
  return (
    <MotionDiv
      variants={fadeUp}
      className={`
        relative mt-20
        flex-1 rounded-xl
        p-6 shadow-lg
        ${gradient}
      `}
    >
      {/* Title */}
      <h2
        className="
          mb-2 text-xl
          font-bold text-white
          md:text-2xl
        "
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className="
          mb-4 italic
          text-white
        "
      >
        {subtitle}
      </p>

      {/* List */}
      <ul
        className="
          mb-4 list-inside
          list-disc space-y-1
          text-white
        "
      >
        {items.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <p
        className="
          font-semibold
          text-white
        "
      >
        💡 Outcome: {outcome}
      </p>
    </MotionDiv>
  );
});

// Optimized Why Us Card
const WhyUsCard = memo(function WhyUsCard({
  icon,
  title,
  desc,
}) {
  return (
    <MotionDiv
      variants={fadeUp}
      className="
        rounded-xl border
        border-white/10
        bg-white/5
        p-6 shadow-lg
      "
    >
      {/* Icon */}
      <div className="mb-2 text-3xl">
        {icon}
      </div>

      {/* Title */}
      <h2
        className="
          mb-2 text-xl
          font-bold text-white
          md:text-2xl
        "
      >
        {title}
      </h2>

      {/* Description */}
      <p className="text-white">
        {desc}
      </p>
    </MotionDiv>
  );
});

function SAP() {
  return (
    <>
      {/* HERO */}
      <section
        className="
          w-full bg-[#0C1F27]
          bg-opacity-90
          px-6 py-16
          text-white
        "
      >
        <div
          className="
            mt-20 w-full
            text-center
          "
        >
          {/* Heading */}
          <MotionH1
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="
              mb-6 text-3xl
              font-extrabold
              sm:text-4xl
              md:text-5xl
            "
          >
            Accelerate Your{" "}
            <span className="text-yellow-400">
              SAP & S/4HANA
              Transformation
            </span>
          </MotionH1>

          {/* Description */}
          <MotionP
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
            }}
            variants={fadeUp}
            className="
              mx-auto mb-16
              max-w-3xl
              text-base
              sm:text-lg
              md:text-xl
            "
          >
            Partner with an experienced SAP
            team to plan, build, and run
            your SAP BTP landscape with
            measurable business outcomes.
          </MotionP>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="
          w-full bg-black
          px-6 py-16
        "
      >
        {/* Heading */}
        <div className="text-center">
          <MorphingText
            texts={["services"]}
            className="uppercase"
          />

          <p
            className="
              mt-4 flex
              justify-center
              text-center font-bold
              text-white
            "
          >
            From vision to value realization
            – comprehensive services aligned
            to your transformation stage.
          </p>
        </div>

        {/* Grid */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            mx-auto flex
            max-w-6xl
            flex-col gap-8
            md:flex-row
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </MotionDiv>
      </section>

      {/* WHY US */}
      <section
        className="
          w-full bg-[#0C1F27]
          px-6 py-16
        "
      >
        {/* Heading */}
        <div className="text-center">
          <MorphingText
            texts={["why us?"]}
            className="
              mb-10 flex
              justify-center
              text-4xl font-bold
              uppercase text-white
              md:text-5xl
            "
          />
        </div>

        {/* Grid */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            mx-auto grid
            max-w-6xl
            grid-cols-1 gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {whyUsData.map((item) => (
            <WhyUsCard
              key={item.title}
              {...item}
            />
          ))}
        </MotionDiv>
      </section>
    </>
  );
}

export default memo(SAP);