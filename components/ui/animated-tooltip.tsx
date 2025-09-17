"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

type TooltipItem = {
  name: string;
  designation?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Dormant";
};

type AnimatedTooltipProps = {
  items: TooltipItem[];
  children: React.ReactNode[];
};

export const AnimatedTooltip = ({ items, children }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 8 };

  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-40, 40]), springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative inline-block"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                style={{ translateX, rotate }}
                className="absolute top-full mt-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm shadow-lg"
              >
                <div className="text-xl font-semibold text-white">{item.name}</div>

                {item.designation && (
                  <div className="text-lg text-white">{item.designation}</div>
                )}

                {item.level && (
                  <div
                    className={`text-lg mt-1 ${
                      item.level === "Beginner"
                        ? "text-amber-400"
                        : item.level === "Intermediate"
                        ? "text-blue-400"
                        : item.level === "Advanced"
                        ? "text-emerald-400"
                        : "text-gray-400"
                    }`}
                  >
                    {item.level}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Display cards */}
          {children[idx]}
        </div>
      ))}
    </>
  );
};
