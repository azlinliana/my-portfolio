"use client";
import { useState, useRef, useEffect } from "react";
import ContentLayout from "@/components/layout/content-layout";
import TitleSection from "@/components/title-section";

const workExperiences = [
  {
    id: 1,
    dateStart: "July 2023",
    dateEnd: "Current",
    role: "Full-Stack Developer",
    company: "Amanah Ikhtiar Malaysia Sdn. Bhd.",
    taskHighlight: [
      "Rebuilt and launched a Loan Payment Tracking System, cutting manual reporting by 50% and enabling real-time monitoring across regional offices.",
      "Co-developed a centralized Internal Audit System for 15+ branches, improving data traceability and system integration.",
      "Led end-to-end architecture decisions including API design, database modeling, and authentication, while building scalable modular components.",
      "Drove feature planning, task delegation, and coding, ensuring timely delivery.",
      "Improved UI performance, accessibility, and usability through cross-functional testing.",
      "Designed and integrated RESTful APIs with robust error handling for reliable data flow."
    ],
  },
  {
    id: 2,
    dateStart: "December 2022",
    dateEnd: "June 2023",
    role: "Apprenticeship (Protégé RTW Program)",
    company: "Pernec Integrated Network Systems",
    taskHighlight: [
      "Assisted in refining system requirements and workflows for MARA digital projects.",
      "Improved technical documentation for accuracy and consistency across development and QA teams.",
      "Prepared QA checklists to standardize testing and reduce errors.",
      "Gained hands-on experience in full-stack development practices and cross-functional collaboration."
    ],
  },
  {
    id: 3,
    dateStart: "March 2022",
    dateEnd: "August 2022",
    role: "Internship",
    company: "Pernec Integrated Network Systems",
    taskHighlight: [
      "Built an internal web application to streamline research competition submissions and evaluations.",
      "Replaced manual Google Forms workflow, reducing administrative processing time by 60%.",
      "Enabled jurors to score entries digitally, improving evaluation speed and consistency by 40%."
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ContentLayout>
      <TitleSection text="Experience" />

      <div className="flex flex-col items-start space-y-12 w-full py-12">
        {workExperiences.map((item, index) => (
          <div
            key={item.id}
            ref={el => { itemRefs.current[index] = el; }}
            data-index={index}
            className="relative pl-10 sm:pl-20 group"
          >
            {/* Timeline line + dot */}
            <div
              className={`
                ${index === workExperiences.length - 1 ? "before:hidden" : ""}
                before:absolute before:left-4 sm:before:left-8 before:top-4 before:h-full before:w-[1px]
                ${activeIndex === index ? "before:bg-violet-300" : "before:bg-gray-300"}
                after:absolute after:left-4 sm:after:left-8 after:top-4 after:w-3 after:h-3
                ${activeIndex === index ? "after:bg-violet-300" : "after:bg-gray-300"}
                after:border-4 after:box-content after:border-white after:rounded-full
                after:-translate-x-1/2
              `}
            />

            {/* Work experiences */}
            <div className="ml-8 sm:ml-16 text-base space-y-4">
              {/* Date badge */}
              <time
                className={`
                  inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase rounded-full
                  ${activeIndex === index ? "bg-gradient-to-r from-[#9b8cfb] via-[#7d6df7] to-[#5c5ce6] text-white" : "bg-gray-300 text-gray-500"}
                `}
              >
                {item.dateStart} – {item.dateEnd}
              </time>

              {/* Role + Company */}
              <div className="space-y-1">
                <h3 className="font-semibold text-lg sm:text-xl text-slate-900">{item.role}</h3>
                <p className="text-gray-500">{item.company}</p>
              </div>

              {/* Task highlights */}
              <ul className={`list-disc list-outside pl-2 sm:pl-4 space-y-2 ${activeIndex === index ? "text-slate-800" : "text-gray-400"}`}>
                {item.taskHighlight.map((task, i) => (
                  <li key={i} className="text-justify leading-relaxed">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
