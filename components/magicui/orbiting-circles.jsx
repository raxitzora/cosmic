import { cn } from "@/lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 10,
  radius = 90,
  path = true,
  iconSize = 50,
  speed = 2,
  glow = false, // NEW: adds glow effect
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {/* Orbit Path */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/10 dark:stroke-white/20"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {/* Orbiting Children */}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={cn(
              `absolute flex size-[var(--icon-size)] 
               transform-gpu animate-orbit 
               items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            <div
              className={cn(
                "flex items-center justify-center w-full h-full rounded-full",
                glow &&
                  "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 animate-pulse"
              )}
            >
              {child}
            </div>
          </div>
        );
      })}
    </>
  );
}
  