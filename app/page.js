"use client";
import React from "react";
import { Globe } from "@/components/magicui/globe";
import { Rocket } from "lucide-react";
import Link from "next/link";
import Services from "@/components/Services";
import About from "@/components/about";

export default function HomePage() {
  return (
    <main className="w-full bg-gradient-to-b from-[#0B1D24] via-[#17313B] to-[#0B1D24] pt-25">
      {/* Hero Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-29 px-6 md:px-12">
        {/* Left Section - Text & Buttons */}
        <section className="space-y-6 text-center md:text-left uppercase sm:text-center lg:text-left">
          <h1 className="md:text-6xl font-extrabold text-white leading-tight sm:text-xl">
            Where Digital <br />
            Transformation <br /> Meets{" "}
            <strong className="text-blue-400">Real Business </strong>{" "}
            <strong className="text-purple-500">Impact</strong>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
            Empowering businesses with innovative technology solutions and
            strategic guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-400 text-black px-6 py-3 rounded-lg font-medium shadow-md hover:bg-teal-300 transition-colors"
            >
              <Rocket size={18} /> Partner with Us
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-purple-900 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Right Section - Globe */}
        <section className="flex justify-center md:justify-end items-center w-full h-full">
          <Globe />
        </section>
      </div>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />
    </main>
  );
}
