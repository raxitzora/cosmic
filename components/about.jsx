"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Cpu, Brain, Sparkles } from "lucide-react";

// Lazy Load Heavy Components
const Marquee = dynamic(
  () =>
    import("@/components/magicui/marquee").then(
      (mod) => mod.Marquee
    ),
  {
    ssr: false,
  }
);

const MorphingText = dynamic(
  () =>
    import("@/components/magicui/morphing-text").then(
      (mod) => mod.MorphingText
    ),
  {
    ssr: false,
  }
);

const BackgroundVideo = dynamic(
  () => import("./BackgroundVideo"),
  {
    ssr: false,
  }
);

// Reviews Data
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

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3);

// Feature Cards
const cards = [
  {
    icon: Cpu,
    color: "text-orange-400",
    title: "SAP S/4HANA",
  },
  {
    icon: Brain,
    color: "text-cyan-400",
    title: "AI",
  },
  {
    icon: Sparkles,
    color: "text-purple-400",
    title: "Generative AI",
  },
  {
    icon: Sparkles,
    color: "text-pink-400",
    title: "Agentic AI",
  },
];

// Review Card
const ReviewCard = memo(function ReviewCard({
  img,
  name,
  username,
  body,
}) {
  return (
    <article
      className={cn(
        "relative w-72 rounded-2xl",
        "border border-white/10",
        "bg-[#28323A]/90",
        "p-5",
        "shadow-lg",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-2xl"
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={img}
          alt={name}
          width={70}
          height={70}
          loading="lazy"
          className="rounded-full"
        />

        <div>
          <h3 className="text-lg font-bold text-yellow-400">
            {name}
          </h3>

          <p className="text-sm font-semibold text-cyan-400">
            {username}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-200">
        {body}
      </p>
    </article>
  );
});

export default function About() {
  return (
    <section
      className="
        relative overflow-hidden
        px-6 py-20
        md:px-16
      "
    >
      {/* Background Video */}
      <BackgroundVideo src="/bgvid.mp4" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2
            className="
              text-4xl font-extrabold
              uppercase tracking-wide
              text-orange-500
              md:text-6xl
            "
          >
            <MorphingText
              texts={[
                "Welcome To",
                "About Section",
              ]}
            />
          </h2>
        </div>

        {/* Marquee */}
        <div
          className="
            relative mb-16 overflow-hidden
            rounded-3xl border
            border-white/10
            bg-[#333F4B]/70
            py-8
            backdrop-blur-sm
          "
        >
          <Marquee
            pauseOnHover
            className="[--duration:20s]"
          >
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
              />
            ))}
          </Marquee>

          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] mt-6"
          >
            {secondRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
              />
            ))}
          </Marquee>
        </div>

        {/* Description */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p
            className="
              text-lg leading-relaxed
              text-gray-200
              md:text-2xl
            "
          >
            We deliver enterprise-grade digital
            transformation solutions that create
            measurable business impact across
            industries worldwide.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="
            mx-auto grid max-w-6xl
            grid-cols-1 gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="
                  group rounded-3xl
                  border border-white/10
                  bg-gray-900/80
                  p-8 text-center
                  shadow-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                "
              >
                <div className="mb-5 flex justify-center">
                  <Icon
                    className={cn(
                      "h-12 w-12 transition-transform duration-300 group-hover:scale-110",
                      card.color
                    )}
                  />
                </div>

                <h3
                  className="
                    text-2xl font-bold
                    text-white
                  "
                >
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Closing Text */}
        <div
          className="
            mx-auto mt-16
            max-w-5xl space-y-6
            text-center
            text-lg font-medium
            leading-relaxed
            text-gray-200
            md:text-xl
          "
        >
          <p>
            Our approach combines deep industry
            expertise with emerging technologies to
            help organizations remain agile,
            resilient, and competitive.
          </p>

          <p>
            We focus on transparent communication,
            strategic execution, and measurable
            outcomes that drive long-term business
            value.
          </p>

          <p>
            From advisory and implementation to
            managed services and AI transformation,
            we engineer scalable enterprise
            solutions with high ROI.
          </p>
        </div>
      </div>
    </section>
  );
}