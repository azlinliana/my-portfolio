import React from "react";
import clsx from "clsx";

interface MagicBorderProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string; // optional, default rounded-lg
}

export const MagicBorder: React.FC<MagicBorderProps> = ({
  children,
  className,
  rounded = "rounded-full", // default to full rounded like your example
}) => {
  return (
    <div
      className={clsx(
        // height increases on smaller screens for better touch targets
        "relative inline-flex h-14 sm:h-12 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        rounded,
        className
      )}
    >
      {/* Animated gradient border */}
      <span
        className={clsx(
          "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
          rounded
        )}
      />

      {/* Inner content */}
      <span
        className={clsx(
          // padding adjusts for mobile
          "inline-flex h-full w-full items-center justify-center bg-slate-950 px-5 py-2 sm:px-3 sm:py-1 text-base sm:text-lg font-medium text-white backdrop-blur-3xl",
          rounded
        )}
      >
        {children}
      </span>
    </div>
  );
};
