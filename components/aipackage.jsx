"use client";

import React from "react";
import { CheckCircle, Rocket, Globe, BarChart3, BookOpen, Building, Handshake, Trophy } from "lucide-react";
import { MorphingText } from "./magicui/morphing-text";
import { motion } from "framer-motion";

const packages = [
  {
    icon: <Rocket className="w-10 h-10 text-sky-400" />,
    title: "🚀 Starter Package – Perfect for Small Businesses",
    subtitle: "Designed for startups and growing companies that want quick wins with AI.",
    features: [
      "AI Readiness Assessment (light version)",
      "Workflow Automation (invoicing, scheduling, reporting)",
      "Generative AI content creation (blogs, ads, social media)",
      "AI-powered customer engagement (chatbots & email campaigns)",
      "Basic analytics dashboard",
    ],
    outcome: "💡 Business Case: Affordable automation that saves time, reduces costs, and builds digital momentum.",
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-400" />,
    title: "🌐 Enterprise Package – For Large Organizations",
    subtitle: "Built for enterprises needing robust, secure, and scalable AI solutions.",
    features: [
      "Enterprise AI Readiness Assessment & Strategy",
      "Intelligent Process Automation (AI + RPA at scale)",
      "Agentic AI for decision-making & orchestration",
      "Supply chain, finance & HR AI optimization",
      "AI Governance, Compliance & Ethical AI frameworks",
      "Ongoing AMS (Application Managed Services) & 24/7 support",
    ],
    outcome: "💡 Enterprise Value: Future-ready scalability, risk-managed AI adoption, and enterprise-wide impact.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-green-400" />,
    title: "📈 Growth Package – For Scaling Businesses",
    subtitle: "Ideal for mid-sized companies ready to expand AI adoption.",
    features: [
      "Comprehensive AI Readiness Assessment & Roadmap",
      "Marketing automation (multi-channel personalization)",
      "Predictive analytics & forecasting (sales, finance, operations)",
      "AI-driven data visualization dashboards",
      "Process automation across multiple departments",
    ],
    outcome: "💡 Outcome: Data-driven decisions, better customer engagement, and scalable efficiency.",
  },
];

const whyChoose = [
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    title: "🌍 25+ Years of SAP Experience",
    desc: "Senior consultants with 25+ years of IT expertise, delivering global projects across industries.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-pink-400" />,
    title: "📚 Industry Thought Leadership",
    desc: "Includes a published author on Digital Transformation, AI Automation & SAP S/4HANA.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-green-400" />,
    title: "🤝 Global Consulting Experience",
    desc: "SAP consulting for 50+ global clients across North America, Europe, and Asia.",
  },
  {
    icon: <Building className="w-10 h-10 text-indigo-400" />,
    title: "🏢 Big 4 Consulting Pedigree",
    desc: "Backgrounds at IBM, Accenture, and Capgemini with world-class methodologies.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-sky-400" />,
    title: "🚀 End-to-End Transformation Partner",
    desc: "From Advisory to Managed Services, ensuring projects meet goals on time and budget.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AiPackages() {
  return (
    <section className="bg-[#0B1D24] px-6 md:px-16 py-20 relative overflow-hidden">
      {/* AI Packages Section */}
      <div className="text-center mb-16">
        <MorphingText
          texts={["AI Packages", "for Every Business"]}
          className="uppercase text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        />
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Flexible AI service tiers designed for businesses of every size — from startups to enterprises.
        </p>
      </div>

      {/* Package Boxes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={fadeUp}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-800 via-indigo-700 to-purple-700 opacity-20 group-hover:opacity-50 blur-md transition duration-700 ease-in-out"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 mb-6">
                {pkg.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{pkg.subtitle}</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-[2px]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-200 mt-6 text-sm italic">{pkg.outcome}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="text-center mt-28 mb-16">
        <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Why Choose Cosmic Information System, LLC?
        </h2>
        <p className="text-gray-300 mt-4 text-lg max-w-3xl mx-auto">
          We combine cutting-edge AI technologies (Generative AI, Agentic AI, Automation) with a client-first
          approach — ensuring solutions are affordable for small businesses and scalable for enterprises.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChoose.map((item, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={fadeUp}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-800 to-sky-700 opacity-20 blur-md group-hover:opacity-40 transition"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
