// /components/AiService.jsx
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";

import {
  ClipboardList,
  Bot,
  LineChart,
  GraduationCap,
  Workflow,
  Shield,
  Building,
  BarChart3,
  Brain,
} from "lucide-react";

// Lazy load heavy animation component
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

// Small Business Services
const smallBizServices = [
  {
    icon: ClipboardList,
    color: "text-sky-400",
    title: "AI Readiness Assessments",
    desc: "Identify opportunities, data readiness, and a prioritized roadmap.",
  },

  {
    icon: Bot,
    color: "text-indigo-400",
    title: "Large Language Model Solutions",
    desc: "Secure, domain-tuned assistants and automations for your teams.",
  },

  {
    icon: LineChart,
    color: "text-green-400",
    title: "Data Science Consulting",
    desc: "Forecasting, optimization, and analytics to drive decisions.",
  },

  {
    icon: GraduationCap,
    color: "text-pink-400",
    title: "Customized Training Programs",
    desc: "Executive and practitioner enablement to adopt AI confidently.",
  },

  {
    icon: Workflow,
    color: "text-purple-400",
    title: "Process Automation",
    desc: "Streamline workflows with orchestration and RPA + AI.",
  },

  {
    icon: Shield,
    color: "text-yellow-400",
    title: "AI Governance",
    desc: "Policies, risk controls, and compliance aligned to your context.",
  },
];

// Enterprise Services
const enterpriseServices = [
  {
    icon: Building,
    color: "text-blue-400",
    title: "Enterprise AI Readiness Assessment & Roadmap",
    desc: "Comprehensive evaluation of AI maturity with a roadmap for enterprise-wide adoption.",
  },

  {
    icon: Workflow,
    color: "text-purple-400",
    title: "Intelligent Process Automation",
    desc: "Deploy automation solutions that scale across departments and business units.",
  },

  {
    icon: Brain,
    color: "text-pink-400",
    title: "Agentic AI for Decision Support",
    desc: "Empower leaders with AI agents that orchestrate tasks and provide insights.",
  },

  {
    icon: BarChart3,
    color: "text-green-400",
    title: "Predictive Analytics & Forecasting",
    desc: "Advanced analytics for finance, supply chain, HR, and operations.",
  },

  {
    icon: Shield,
    color: "text-yellow-400",
    title: "AI Governance & Compliance",
    desc: "Responsible and compliant enterprise AI deployment frameworks.",
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
      staggerChildren: 0.1,
    },
  },
};

// Optimized Card Component
const ServiceCard = memo(function ServiceCard({
  icon: Icon,
  color,
  title,
  desc,
  gradient,
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
      {/* Background Glow */}
      <div
        className={`
          absolute inset-0
          rounded-2xl
          opacity-30 blur-md
          transition duration-500
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
            text-xl font-bold
            text-white
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3 text-sm
            leading-relaxed
            text-gray-300
          "
        >
          {desc}
        </p>
      </div>
    </MotionDiv>
  );
});

function AiService() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0B1D24]
        px-6 py-20
        md:px-16
      "
    >
      {/* SMALL BUSINESS SECTION */}
      <div className="mb-20 text-center">
        <div
          className="
            text-4xl font-extrabold
            tracking-tight text-white
            md:text-5xl
          "
        >
          <MorphingText
            texts={[
              "Services for",
              "Small Businesses",
            ]}
            className="uppercase"
          />
        </div>

        <MotionP
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            mx-auto mt-4
            max-w-2xl
            text-lg font-bold
            text-gray-200
          "
        >
          Unlock the full potential of AI
          & automation for small businesses.
        </MotionP>
      </div>

      {/* SMALL BUSINESS GRID */}
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
        {smallBizServices.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            gradient="bg-gradient-to-r from-sky-800"
          />
        ))}
      </MotionDiv>

      {/* DESCRIPTION */}
      <MotionP
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={fadeUp}
        className="
          mx-auto mt-10
          max-w-5xl
          text-center
          text-gray-200
        "
      >
        We guide clients in leveraging
        Generative AI, Agentic AI, and
        intelligent automation to improve
        operations, decision-making, and
        customer experiences.
      </MotionP>

      {/* ENTERPRISE SECTION */}
      <div className="mb-16 mt-28 text-center">
        <div
          className="
            text-4xl font-extrabold
            tracking-tight text-white
            md:text-5xl
          "
        >
          <MorphingText
            texts={[
              "Services for",
              "Enterprises",
            ]}
            className="uppercase"
          />
        </div>

        <MotionP
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            mx-auto mt-4
            max-w-3xl
            text-lg font-bold
            text-gray-200
          "
        >
          Enterprise-grade AI & automation
          frameworks designed for scale,
          governance, and compliance.
        </MotionP>
      </div>

      {/* ENTERPRISE GRID */}
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
          lg:grid-cols-5
        "
      >
        {enterpriseServices.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            gradient="bg-gradient-to-r from-indigo-800"
          />
        ))}
      </MotionDiv>

      {/* BOTTOM DESCRIPTION */}
      <MotionP
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={fadeUp}
        className="
          mx-auto mt-10
          max-w-6xl
          text-center
          text-lg text-gray-200
        "
      >
        Our approach blends strategic
        advisory, implementation, and
        optimization to ensure AI adoption
        creates measurable and sustainable
        business value.
      </MotionP>
    </section>
  );
}

export default memo(AiService);