"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MorphingText } from "./magicui/morphing-text";

export default function TransformCards() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [1, 0.85, 1], [0, 0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0.7, 1], [50, 0]);
  const zIndex = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 0, 50]);

  const serviceCards = [
    {
      title: "Advisory & Strategy (Plan & Guide)",
      items: [
        "Digital Transformation Readiness Assessment",
        "Strategic Roadmap Development",
        "Transformation Advisory & Governance",
        "Business Process Optimization & Reengineering",
        "Change Management & User Adoption",
      ],
      outcome:
        "A clear strategy, aligned leadership, and organizational readiness for transformation.",
      icon: "💡",
    },
    {
      title: "Execution & Support (Implement & Sustain)",
      items: [
        "SAP S/4HANA Transformation (Public & Private Cloud)",
        "AI & Automation Enablement",
        "SAP BTP Integration & Innovation Services",
        "Project & Program Management for Transformation Initiatives",
        "Continuous Improvement & Application Managed Services (AMS)",
      ],
      outcome: "Successful implementation, measurable ROI, and continuous digital growth",
      icon: "💡",
    },
  ];

  const industries = [
    {
      title: "Financial Services & Banking",
      description:
        "Compliance-ready ERP, digital transformation governance, risk management, and advanced analytics.",
      icon: "🏦",
    },
    {
      title: "Manufacturing & Industrial",
      description:
        "ERP modernization, process automation, and predictive analytics for smarter production.",
      icon: "🔧",
    },
    {
      title: "Retail & Consumer Goods",
      description:
        "eCommerce integration, inventory optimization, and AI-powered customer engagement.",
      icon: "🛒",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Global S/4 rollouts, fleet efficiency, and AI-driven demand forecasting.",
      icon: "🚚",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Secure patient data, ERP optimization, and AI-driven healthcare insights.",
      icon: "🏥",
    },
    {
      title: "Energy & Utilities",
      description:
        "Predictive maintenance, asset management, and sustainable energy solutions.",
      icon: "⚡",
    },
    {
      title: "Public Sector & Education",
      description:
        "Digital governance, ERP rationalization, and enhanced citizen/student engagement.",
      icon: "🏛️",
    },
    {
      title: "Gaming & Sports",
      description:
        "Fan engagement platforms, AI-powered performance analytics, digital ticketing, and immersive customer experiences.",
      icon: "🎮",
    },
  ];

  return (
    <section className="w-full bg-[#0B1D24] flex flex-col items-center px-4">
      {/* Services Section */}
      <div className="py-24 w-full flex flex-col items-center">
        <MorphingText texts={["services"]} className="uppercase text-center mb-12" />

       <motion.div
  style={{ opacity, y: translateY, zIndex }}
  className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-7xl"
>
  {serviceCards.map((card, index) => (
    <motion.div
      key={index}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 25px 50px rgba(255, 255, 255, 0.15)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative flex flex-col justify-between w-full sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem] min-h-[480px]
                 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:shadow-3xl"
    >
      {/* Accent Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-t-3xl" />

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-white">
          {card.title}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-white text-base sm:text-lg">
          {card.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {card.outcome && (
        <p className="mt-6 text-gray-200 text-base sm:text-lg flex items-start gap-2">
          <span>{card.icon}</span>
          {card.outcome}
        </p>
      )}
    </motion.div>
  ))}
</motion.div>

      </div>

      {/* Industries Section */}
      <div className="py-24 w-full flex flex-col items-center">
        <MorphingText texts={["industry",]} className="uppercase text-center mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
                <span>{industry.icon}</span> {industry.title}
              </h3>
              <p className="text-gray-100 text-sm sm:text-base">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
