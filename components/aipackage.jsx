// /components/AiPackages.jsx
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

import {
  CheckCircle,
  Rocket,
  Globe,
  BarChart3,
  BookOpen,
  Building,
  Handshake,
  Trophy,
  ClipboardList,
  Bot,
  LineChart,
  GraduationCap,
  Workflow,
  Shield,
  Brain,
} from "lucide-react";

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

// Packages Data
const packages = [
  {
    icon: Rocket,
    color: "text-sky-400",
    gradient:
      "bg-gradient-to-r from-sky-800 via-indigo-700 to-purple-700",

    title:
      "🚀 Starter Package – Perfect for Small Businesses",

    subtitle:
      "Designed for startups and growing companies that want quick wins with AI.",

    features: [
      "AI Readiness Assessment (light version)",
      "Workflow Automation",
      "Generative AI content creation",
      "AI-powered customer engagement",
      "Basic analytics dashboard",
    ],

    outcome:
      "Affordable automation that saves time, reduces costs, and builds digital momentum.",
  },

  {
    icon: Globe,
    color: "text-indigo-400",
    gradient:
      "bg-gradient-to-r from-indigo-800 via-sky-700 to-purple-700",

    title:
      "🌐 Enterprise Package – For Large Organizations",

    subtitle:
      "Built for enterprises needing robust, secure, and scalable AI solutions.",

    features: [
      "Enterprise AI Readiness Assessment",
      "Intelligent Process Automation",
      "Agentic AI orchestration",
      "Supply chain & HR AI optimization",
      "AI Governance & Compliance",
      "24/7 managed support",
    ],

    outcome:
      "Future-ready scalability with enterprise-wide AI impact.",
  },

  {
    icon: BarChart3,
    color: "text-green-400",
    gradient:
      "bg-gradient-to-r from-green-700 via-teal-700 to-cyan-700",

    title:
      "📈 Growth Package – For Scaling Businesses",

    subtitle:
      "Ideal for mid-sized companies ready to expand AI adoption.",

    features: [
      "AI Readiness Assessment",
      "Marketing automation",
      "Predictive analytics",
      "AI-driven dashboards",
      "Department-wide automation",
    ],

    outcome:
      "Data-driven decisions and scalable operational efficiency.",
  },
];

// Why Choose Data
const whyChoose = [
  {
    icon: Trophy,
    color: "text-yellow-400",

    title:
      "🌍 25+ Years of SAP Experience",

    desc:
      "Senior consultants delivering global transformation projects across industries.",
  },

  {
    icon: BookOpen,
    color: "text-pink-400",

    title:
      "📚 Industry Thought Leadership",

    desc:
      "Published expertise in Digital Transformation, AI Automation & SAP S/4HANA.",
  },

  {
    icon: Handshake,
    color: "text-green-400",

    title:
      "🤝 Global Consulting Experience",

    desc:
      "Experience delivering solutions across North America, Europe, and Asia.",
  },

  {
    icon: Building,
    color: "text-indigo-400",

    title:
      "🏢 Big 4 Consulting Pedigree",

    desc:
      "Experience from IBM, Accenture, and Capgemini methodologies.",
  },

  {
    icon: Rocket,
    color: "text-sky-400",

    title:
      "🚀 End-to-End Transformation Partner",

    desc:
      "From advisory to managed services with measurable delivery outcomes.",
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

// Optimized Package Card
const PackageCard = memo(function PackageCard({
  icon: Icon,
  color,
  gradient,
  title,
  subtitle,
  features,
  outcome,
}) {
  return (
    <MotionDiv
      variants={fadeUp}
      className="
        group relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/10
        p-8
        shadow-md
        backdrop-blur-xl
        transition-all duration-300
        hover:shadow-xl
        hover:scale-[1.02]
      "
    >
      {/* Glow */}
      <div
        className={`
          absolute inset-0
          rounded-2xl
          opacity-20 blur-md
          transition duration-500
          group-hover:opacity-40
          ${gradient}
        `}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            mb-6 flex
            h-14 w-14
            items-center justify-center
            rounded-xl
            border border-white/20
            bg-white/10
          "
        >
          <Icon
            className={`
              h-10 w-10
              ${color}
            `}
          />
        </div>

        {/* Title */}
        <h3
          className="
            mb-2 text-xl
            font-bold text-white
          "
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className="
            mb-4 text-sm
            text-gray-300
          "
        >
          {subtitle}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="
                flex items-start
                gap-2 text-sm
                text-gray-300
              "
            >
              <CheckCircle
                className="
                  mt-[2px]
                  h-4 w-4
                  shrink-0
                  text-green-400
                "
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Outcome */}
        <p
          className="
            mt-6 text-sm
            italic text-gray-200
          "
        >
          💡 {outcome}
        </p>
      </div>
    </MotionDiv>
  );
});

// Optimized Why Choose Card
const WhyChooseCard = memo(function WhyChooseCard({
  icon: Icon,
  color,
  title,
  desc,
}) {
  return (
    <MotionDiv
      variants={fadeUp}
      className="
        group relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/10
        p-6
        shadow-md
        backdrop-blur-xl
        transition-all duration-300
        hover:shadow-lg
        hover:scale-[1.02]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          rounded-2xl
          bg-gradient-to-r
          from-indigo-800
          to-sky-700
          opacity-20 blur-md
          transition duration-300
          group-hover:opacity-40
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            mb-4 flex
            h-14 w-14
            items-center justify-center
            rounded-xl
            border border-white/20
            bg-white/10
          "
        >
          <Icon
            className={`
              h-10 w-10
              ${color}
            `}
          />
        </div>

        {/* Title */}
        <h3
          className="
            text-lg font-semibold
            text-white
          "
        >
          {title}
        </h3>

        {/* Desc */}
        <p
          className="
            mt-2 text-sm
            text-gray-300
          "
        >
          {desc}
        </p>
      </div>
    </MotionDiv>
  );
});

function AiPackages() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0B1D24]
        px-6 py-20
        md:px-16
      "
    >
      {/* HEADER */}
      <div className="mb-16 text-center">
        <div
          className="
            text-4xl font-extrabold
            tracking-tight text-white
            md:text-5xl
          "
        >
          <MorphingText
            texts={[
              "AI Packages",
              "for Every Business",
            ]}
            className="uppercase"
          />
        </div>

        <p
          className="
            mx-auto mt-4
            max-w-2xl
            text-lg text-gray-300
          "
        >
          Flexible AI service tiers designed
          for businesses of every size.
        </p>
      </div>

      {/* PACKAGES GRID */}
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
          max-w-7xl
          grid-cols-1
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            {...pkg}
          />
        ))}
      </MotionDiv>

      {/* WHY CHOOSE */}
      <div className="mb-16 mt-28 text-center">
        <h2
          className="
            text-4xl font-extrabold
            uppercase tracking-tight
            text-white
            md:text-5xl
          "
        >
          Why Choose Us ?
        </h2>

        <p
          className="
            mx-auto mt-4
            max-w-3xl
            text-lg text-gray-300
          "
        >
          We combine cutting-edge AI
          technologies with enterprise-grade
          consulting experience and
          client-first delivery.
        </p>
      </div>

      {/* WHY CHOOSE GRID */}
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
          grid-cols-1
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {whyChoose.map((item) => (
          <WhyChooseCard
            key={item.title}
            {...item}
          />
        ))}
      </MotionDiv>
    </section>
  );
}

export default memo(AiPackages);