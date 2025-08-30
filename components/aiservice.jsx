// /components/AiService.jsx
"use client";

import React from "react";
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
  Settings,
} from "lucide-react";
import { MorphingText } from "./magicui/morphing-text";

const smallBizServices = [
  {
    icon: <ClipboardList className="w-10 h-10 text-sky-400" />,
    title: "AI Readiness Assessments",
    desc: "Identify opportunities, data readiness, and a prioritized roadmap.",
  },
  {
    icon: <Bot className="w-10 h-10 text-indigo-400" />,
    title: "Large Language Model Solutions",
    desc: "Secure, domain-tuned assistants and automations for your teams.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-green-400" />,
    title: "Data Science Consulting",
    desc: "Forecasting, optimization, and analytics to drive decisions.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-pink-400" />,
    title: "Customized Training Programs",
    desc: "Executive and practitioner enablement to adopt AI confidently.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-purple-400" />,
    title: "Process Automation",
    desc: "Streamline workflows with orchestration and RPA + AI.",
  },
  {
    icon: <Shield className="w-10 h-10 text-yellow-400" />,
    title: "AI Governance",
    desc: "Policies, risk controls, and compliance aligned to your context.",
  },
];

const enterpriseServices = [
  {
    icon: <Building className="w-10 h-10 text-blue-400" />,
    title: "Enterprise AI Readiness Assessment & Roadmap",
    desc: "Comprehensive evaluation of AI maturity with a roadmap for enterprise-wide adoption.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-purple-400" />,
    title: "Intelligent Process Automation (AI + RPA at scale)",
    desc: "Deploy automation solutions that scale across departments and business units.",
  },
  {
    icon: <Brain className="w-10 h-10 text-pink-400" />,
    title: "Agentic AI for Decision Support & Task Orchestration",
    desc: "Empower leaders with AI agents that orchestrate tasks and provide actionable insights.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-green-400" />,
    title: "Predictive Analytics & Forecasting",
    desc: "Finance, supply chain, HR — advanced analytics to stay ahead of trends.",
  },
  {
    icon: <Shield className="w-10 h-10 text-yellow-400" />,
    title: "AI Governance, Compliance & Ethical AI Frameworks",
    desc: "Ensure responsible, ethical, and compliant AI deployments at enterprise scale.",
  },
];

export default function AiService() {
  return (
    <section className="bg-[#0B1D24] px-6 md:px-16 py-20 relative overflow-hidden">
      {/* Small Business Services */}
      <div className="text-center mb-16">
        <MorphingText
          texts={["Services for", "Small Businesses"]}
          className="uppercase text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        />
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto font-bold">
          Unlock the full potential of AI & automation for small businesses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {smallBizServices.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-800 opacity-30 blur-md transition duration-700 ease-in-out"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-200 mt-10 text-center max-w-5xl mx-auto">
        We guide clients in leveraging Generative AI, Agentic AI, and intelligent
        automation to streamline operations, improve decision-making, enhance customer
        experiences, and unlock new opportunities for growth.
      </p>

      {/* Enterprise Services Section */}
      <div className="text-center mt-24 mb-16">
        <MorphingText texts={["services for", "enterprises"]} className="uppercase text-4xl md:text-5xl font-extrabold text-white tracking-tight" />
        <p className="text-gray-200 mt-4 text-lg max-w-3xl mx-auto font-bold">
          Enterprise-grade AI & automation frameworks designed for scale and compliance.
        </p>
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {enterpriseServices.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-800 opacity-30 blur-md transition duration-700 ease-in-out"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-200 mt-8 text-lg max-w-8xl mx-auto">Our approach blends strategic advisory, implementation, and ongoing optimization to ensure clients remain competitive in an AI-driven future. With a focus on measurable outcomes, we transform AI adoption into sustainable business value.</p>
    </section>
  );
}
