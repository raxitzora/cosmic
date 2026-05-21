"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

import About from "@/components/about";
import Services from "@/components/Services";

// Proper Dynamic Import for Named Export
const Globe = dynamic(
  async () => {
    const mod = await import("@/components/magicui/globe");
    return mod.Globe;
  },
  {
    ssr: false,

    loading: () => (
      <div
        className="
          h-[320px] w-[320px]
          animate-pulse rounded-full
          bg-[#16313A]
          md:h-[450px] md:w-[450px]
        "
      />
    ),
  }
);

// Animation Variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HomePage() {
  return (
    <main
      className="
        min-h-screen overflow-hidden
        bg-gradient-to-b
        from-[#0B1D24]
        via-[#17313B]
        to-[#0B1D24]
      "
    >
      {/* HERO SECTION */}
      <section className="relative pt-24">
        <div
          className="
            mx-auto grid
            min-h-screen max-w-7xl
            grid-cols-1 items-center
            gap-14
            px-6 py-16
            md:grid-cols-2
            md:px-12
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="
              flex flex-col
              items-center
              space-y-8
              text-center
              md:items-start
              md:text-left
            "
          >
            {/* HEADING */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="
                text-4xl font-extrabold
                leading-tight text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Where Digital
              <br />
              Transformation
              <br />
              Meets{" "}
              <span className="text-blue-400">
                Real Business
              </span>{" "}
              <span className="text-purple-500">
                Impact
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="
                max-w-xl
                text-base leading-relaxed
                text-gray-300
                sm:text-lg
              "
            >
              Empowering businesses with innovative
              technology solutions and strategic
              guidance for scalable digital growth.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                prefetch={true}
                className="
                  inline-flex items-center
                  gap-2 rounded-xl
                  bg-teal-400
                  px-6 py-3
                  font-semibold text-black
                  shadow-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-teal-300
                  hover:shadow-teal-400/40
                "
              >
                <Rocket size={18} />
                Partner with Us
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              flex min-h-[400px]
              items-center justify-center
            "
          >
            {/* IMPORTANT WRAPPER */}
            <div
              className="
                relative
                h-[350px] w-full
                md:h-[500px]
              "
            >
              <Globe />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section>
        <About />
      </section>

      {/* SERVICES SECTION */}
      <section>
        <Services />
      </section>
    </main>
  );
}