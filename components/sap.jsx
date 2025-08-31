"use client";

import React from "react";
import { motion } from "framer-motion";
import { MorphingText } from "./magicui/morphing-text";

function SAP() {
  const whyUsData = [
    {
      icon: "🌍",
      title: "25+ Years of SAP Experience",
      desc: "Our senior consultants bring over 25 years of SAP expertise, having successfully delivered large and complex global projects across industries."
    },
    {
      icon: "📚",
      title: "Industry Thought Leadership",
      desc: "Our team includes a published author on Digital Transformation & SAP S/4HANA, reflecting deep knowledge and forward-thinking perspectives trusted by clients worldwide."
    },
    {
      icon: "🤝",
      title: "Global Consulting Experience",
      desc: "We have provided SAP consulting services to 50+ global clients, supporting transformations in North America, Europe, and Asia."
    },
    {
      icon: "🏢",
      title: "Big 4 Consulting Pedigree",
      desc: "With backgrounds at top firms like IBM, Accenture, and Capgemini, our consultants bring the discipline, methodologies, and global best practices of the world’s most respected consulting companies."
    },
    {
      icon: "🚀",
      title: "End-to-End Transformation Partner",
      desc: "From Advisory & Strategy to Implementation & Managed Services, we offer full lifecycle support—ensuring projects are delivered on time, within budget, and aligned with your business goals."
    },
    {
      icon: "💡",
      title: "Partner Commitment",
      desc: "With Cosmic, you gain more than a service provider—you gain a partner committed to driving your SAP success."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#0C1F27] bg-opacity-90 text-white py-16 px-6">
        <div className="w-full text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
          >
            Accelerate Your{" "}
            <span className="text-yellow-400">SAP & S/4HANA Transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-16"
          >
            Partner with an experienced SAP team to plan, build, and run your SAP
            BTP landscape. We combine strategy, engineering, and managed services
            to deliver measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="w-full bg-black py-16 px-6">
        <MorphingText texts={["services"]} className="uppercase" />
        <p className="text-white flex justify-center font-bold mt-4 text-center">
          From vision to value realization – comprehensive services aligned to your transformation stage.
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] mt-20"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Advisory & Strategy Services
            </h2>
            <p className="italic mb-4 text-white">(Plan, Prepare & Guide Your SAP Journey)</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-white">
              <li>SAP S/4HANA Readiness Assessment & Roadmap</li>
              <li>SAP S/4HANA Project & Program Management</li>
              <li>Business Process Optimization & Rationalization</li>
              <li>SAP BTP Strategy & Integration Advisory</li>
              <li>Change Management & User Adoption Strategy</li>
            </ul>
            <p className="font-semibold text-white">
              💡 Outcome: Clarity, structure, and alignment before execution.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] mt-20"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Implementation & Managed Services
            </h2>
            <p className="italic mb-4 text-white">(Deliver, Integrate & Support Your SAP Landscape)</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-white">
              <li>SAP S/4HANA Implementation (Public & Private Cloud)</li>
              <li>SAP S/4HANA Migration & Conversion (ECC to S/4)</li>
              <li>Custom Extensions & Application Development on SAP BTP</li>
              <li>SAP Testing, Automation & Quality Assurance</li>
              <li>Application Managed Services (AMS) & Continuous Support</li>
            </ul>
            <p className="font-semibold text-white">
              💡 Outcome: A successful implementation, seamless migration, and continuous improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full bg-[#0C1F27] py-16 px-6">
        <MorphingText texts={["why us?"]} className="text-white text-4xl md:text-5xl flex justify-center font-bold mb-10 uppercase" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyUsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#6B7280] via-[#9CA3AF] to-[#D1D5DB] rounded-xl p-6 shadow-lg"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-white">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SAP;
