import React from "react";
import { Monitor, Brain, LineChart, Globe, Shield } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Design your brand’s digital experience with us",
      icon: <Monitor className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "SEO & SEO For AI",
      desc: "Results driven search engine optimization for Google and AI",
      icon: <Globe className="h-18 w-18 text-yellow-400" />,
    },
    {
      title: "Google Ads Management",
      desc: "Certified Google Ads PPC Experts",
      icon: <LineChart className="h-18 w-18 text-yellow-400" />,
    },
    {
      title: "Social Media Marketing",
      desc: "Facebook, YouTube, LinkedIn & TikTok ads",
      icon: <FaFacebookF className="h-18 w-18 text-yellow-400" />,
    },
    {
      title: "AI Automation",
      desc: "Automate & personalize @ scale",
      icon: <Brain className="h-18 w-18 text-yellow-400" />,
    },
    {
      title: "Secure Web Hosting",
      desc: "High performance secure website hosting",
      icon: <Shield className="h-18 w-18 text-yellow-400" />,
    },
  ];

  // ✅ Variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#0C1F27] bg-opacity-90 text-white py-16 px-6">
      <div className="w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-12"
        >
          Our Digital Marketing &{" "}
          <span className="text-yellow-400">AI Automation Services</span>
        </motion.h1>

        {/* Cards Grid with stagger effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col items-center text-center rounded-xl 
                         hover:bg-white/10 transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400/10 mb-6 group-hover:bg-yellow-400/20 transition">
                {service.icon}
              </div>

              <h2 className="text-lg md:text-xl font-bold underline underline-offset-4 decoration-2 mb-3">
                {service.title}
              </h2>

              <p className="text-sm md:text-base text-gray-200">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button
            className="px-8 py-3 bg-yellow-400 text-[#0F5881] font-bold text-lg rounded-full shadow-lg
                       transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:shadow-2xl"
          >
            Book Your Free 30 Minutes Strategy Session
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
