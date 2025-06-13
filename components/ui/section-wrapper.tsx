import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  const hasCustomPadding = /py-(\d+|auto|\[.*?\])/.test(className);

  return (
    <section
      id={id}
      className={cn(
        "w-full overflow-visible",
        !hasCustomPadding && "py-10", // apply default if no custom py-* found
        className
      )}
    >
      {children}
    </section>
  );
}
