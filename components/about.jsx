"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Cpu, Brain, Sparkles } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";
import { MorphingText } from "./magicui/morphing-text";

const reviews = [
  {
    name: "25+ Years",
    username: "SAP & IT Consulting",
    body: "Deep expertise across global SAP & IT landscapes.",
    img: "https://avatar.vercel.sh/25years",
  },
  {
    name: "50+ Clients",
    username: "Worldwide",
    body: "Trusted by enterprises across industries & geographies.",
    img: "https://avatar.vercel.sh/clients",
  },
  {
    name: "Big 4 Experience",
    username: "IBM | Accenture | Capgemini",
    body: "Leadership roles delivering strategic transformation.",
    img: "https://avatar.vercel.sh/big4",
  },
  {
    name: "AI & Innovation",
    username: "Future Ready",
    body: "Driving transformation with Generative & Agentic AI.",
    img: "https://avatar.vercel.sh/ai",
  },
  {
    name: "Advisory & Managed Services",
    username: "Trusted Partner",
    body: "From strategy to execution to operations excellence.",
    img: "https://avatar.vercel.sh/advisory",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer rounded-xl p-4 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow bg-[#28323A]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img
          className="rounded-full"
          width={90}
          height={90}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium text-yellow-400 ">
            {name}
          </figcaption>
          <p className="text-sm font-bold text-[#00CFF3]">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

// Cards data
const cards = [
  {
    icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-orange-400" />,
    title: "SAP S/4HANA",
  },
  {
    icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />,
    title: "AI",
  },
  {
    icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />,
    title: "Generative AI",
  },
  {
    icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />,
    title: "Agentic AI",
  },
];

export default function About() {
  return (
    <section className="relative w-full py-16 px-6 md:px-16 overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo src="/bgvid.mp4" />
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* About Us Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-orange-500 mb-8 uppercase">
          <MorphingText texts={["Welcome To", "About Section"]} />
        </h2>

        {/* Reviews Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-12 bg-[#333F4B]/80 rounded-xl">
          <Marquee pauseOnHover className="[--duration:10s] mb-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:10s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-2xl text-white">
            We are proud to be a trusted partner to our global customers,
            delivering solutions that drive measurable results across:
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 p-8 bg-gray-800/90 rounded-2xl shadow-lg cursor-pointer text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3 text-5xl md:text-6xl">{card.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Closing Text */}
        <div className="text-white text-center text-xl mt-5 font-bold space-y-5">
          <p>
            Our approach blends industry best practices with a deep
            understanding of emerging trends, ensuring that our clients remain
            competitive, resilient, and agile in their markets.
          </p>
          <p>
            At Cosmic Information System, we take pride in our client-centric
            philosophy, transparent communication, and commitment to delivering
            exceptional outcomes.
          </p>
          <p>
            We inspire enterprise innovation through Advisory, Implementation,
            Test Automation, Change Management, and Managed Services — all
            designed to maximize efficiency and deliver a higher Return on
            Investment (ROI).
          </p>
        </div>
      </div>
    </section>
  );
}
