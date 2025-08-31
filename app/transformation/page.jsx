"use client";

import Transformation from "@/components/transformation";
import TransformCards from "@/components/transformcards";

export default function TransformationPage() {
  return (
    <main className="bg-black relative">
      {/* Gemini Effect controlled inside Transformation */}
      <Transformation />

      {/* Cards on top */}
      <div className="relative z-20">
        <TransformCards />
      </div>
    </main>
  );
}
