"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 400,
  height: 400,
  onRender: () => {},
  devicePixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
  phi: 0,
  theta: 0.3,
  dark: 1, // adds night shading
  diffuse: 1.2, // stronger light scatter
  mapSamples: 50000, // detailed land
  mapBrightness: 3,

  // 🎨 Colors
  baseColor: [0.0, 0.3, 0.7], // ocean blue
  glowColor: [0.5, 0.7, 1], // soft atmospheric glow
  markerColor: [1, 1, 0], // bright yellow markers for cities
  landColor: [0.0, 0.6, 0.2], // 🌍 green land (not native prop, simulated via base+diffuse)

  markers: [
    { location: [28.6139, 77.209], size: 0.15 }, // Delhi
    { location: [51.5074, -0.1278], size: 0.15 }, // London
    { location: [35.6895, 139.6917], size: 0.15 }, // Tokyo
    { location: [40.7128, -74.006], size: 0.15 }, // New York
    { location: [-33.8688, 151.2093], size: 0.15 }, // Sydney
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 1.5,
      height: width * 1.5,
      mapSamples: config.mapSamples || 4000,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.04;
        state.phi = phi + rs.get();
        state.width = width * 1.5;
        state.height = width * 1.5;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 200);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
