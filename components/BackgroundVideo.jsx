"use client";
import React, { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay blocked
      }
    };

    const onCanPlay = () => tryPlay();

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = () => {
      if (mql.matches) {
        video.pause();
      } else {
        tryPlay();
      }
    };

    video.addEventListener("canplay", onCanPlay);
    mql.addEventListener?.("change", handleMotion);
    handleMotion();

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      mql.removeEventListener?.("change", handleMotion);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        src="/bgvid.mp4"
        preload="metadata"
        loop
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#185B84", opacity: 0.65 }}
      />
    </>
  );
}
