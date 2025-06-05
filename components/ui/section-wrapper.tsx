type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full overflow-visible py-5 sm:py-8 md:py-10 ${className}`}
    >
      {children}
    </section>
  );
}
