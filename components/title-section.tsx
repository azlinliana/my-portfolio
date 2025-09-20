"use client";

type TitleProps = {
  text: string;
  className?: string;
};

export default function TitleSection({ text, className = "" }: TitleProps) {
  return (
    <div
      className={`
        text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl
        font-semibold tracking-wide 
        flex items-center justify-center 
        ${className}`
      }
    >
      {text}
    </div>
  );
}
