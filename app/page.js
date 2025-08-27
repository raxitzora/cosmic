"use client";
import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import BackgroundVideo from "@/components/HomeComps/BackgroundVideo";
import Services from "@/components/HomeComps/services";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        {/* Background Video */}
        <BackgroundVideo />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <p className="text-white text-lg md:text-xl font-medium mb-4">
            Get The Power Of Canada&apos;s{" "}
            <span className="text-yellow-400 font-semibold">Most Experienced</span>{" "}
            Agency
          </p>

          <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-snug max-w-6xl">
            WELCOME TO <strong className="text-yellow-500">COSMIC INFORMATION </strong>SYSTEM
          </h1>

          <div className="mt-10">
            <Link
              href="/consult"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-md shadow-lg transition-all text-lg md:text-xl"
            >
              BOOK A FREE 30-MINUTE STRATEGY SESSION
              <Calendar className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section>
        <div>
          <Services />
        </div>
      </section>
    </main>
  );
}
