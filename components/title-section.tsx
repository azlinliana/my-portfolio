"use client";

import { TextHoverEffect } from "./ui/text-hover-effect";

type TitleProps = {
  text: string;
  className?: string;
};

export default function TitleSection({ text, className = "" }: TitleProps) {
  return (
    <div className={`h-[6rem] sm:h-[8rem] flex items-center justify-center ${className}`}>
      <TextHoverEffect text={text} />
    </div>
  );
}
