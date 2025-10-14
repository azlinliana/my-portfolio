'use client';

import ContentLayout from "@/components/layout/content-layout";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

import {
  IconAlertTriangle,
  IconBrain,
  IconTools,
  IconPlant2,
  IconMessageCircle2,
  IconCircleCheck,
  IconCode,
  IconDatabase,
  IconTestPipe,
  IconRepeat,
  IconChevronLeft,
  IconChevronRight
} from "@tabler/icons-react";

import LoanCover from "../../../public/works/loan/loan-cover.svg";

export default function Works() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    if (cardsRef.current.length) {
      const heights = cardsRef.current.map((card) => card?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  return (
    <ContentLayout>
      {/* Work header section */}
      <section
        className="
          flex flex-col lg:flex-row justify-start items-start
          gap-10 lg:gap-14
          rounded-2xl border border-gray-300
          bg-slate-50
          p-8 lg:p-12
        "
      >
        {/* Left: Work info */}
        <div className="flex-1 space-y-5">
          {/* Work title */}
          <h1 className="text-xl sm:text-3xl lg:text-3xl font-semibold tracking-tight">
            Loan Payment Tracking System
          </h1>

            {/* Work description */}
            <p className="leading-relaxed text-gray-700 max-w-2xl">
              An internal web application system that streamlines how staff record and track microloan repayments from
              B40 women entrepreneurs, improving data accuracy and enabling report generation to measure
              loan outcomes.
            </p>

            {/* Role, Platform, Year */}
            <div className="flex flex-wrap items-center gap-4 text-sm mt-6">
                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 bg-gray-50">
                    <p className="font-semibold text-gray-700">Role:</p>
                    <p className="text-gray-700">Backend Developer</p>
                </div>

                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 bg-gray-50">
                    <p className="font-semibold text-gray-700">Platform:</p>
                    <p className="text-gray-700">B2B Web Application</p>
                </div>

                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 bg-gray-50">
                    <p className="font-semibold text-gray-700">Year:</p>
                    <p className="text-gray-700">2023</p>
                </div>
            </div>
        </div>

        {/* Right: Work image cover */}
        <div className="flex-shrink-0 w-full lg:w-[45%]">
            <div
                className="
                relative rounded-2xl overflow-hidden
                bg-gradient-to-r from-[#ddd6fe] via-[#c7b8ff] to-[#a5b4fc]
                border border-gray-300
                flex items-center justify-center
                p-4
                "
            >
                <Image
                    src={LoanCover}
                    alt="Loan Payment Tracking System"
                    width={700} 
                    height={440}
                    className="object-cover"
                />
            </div>
        </div>
      </section>

      {/* Work Story Section */}
      <section className="mt-16 space-y-12 text-justify">
        {/* Problem */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconAlertTriangle />
            Problems
          </h2>

          <p className="leading-relaxed text-gray-700 space-y-2">
            The research department’s previous Loan Payment Tracking System was technically functional but <span className="bg-violet-100 text-violet-800 px-1 rounded-sm">extremely cumbersome</span> — it took too many clicks just to start tracking customer payments.  

            The system was <span className="bg-violet-100 text-violet-800 px-1 rounded-sm">rigid</span> and could not keep up with the department’s frequently updated SOPs, making it hard for staff to follow their current workflow.  

            Users struggled with <span className="bg-violet-100 text-violet-800 px-1 rounded-sm">poor experience</span>: the interface was not mobile-friendly, and actions had <span className="bg-violet-100 text-violet-800 px-1 rounded-sm">no clear success or error feedback</span>. This left staff unsure whether their work was completed correctly.  

            On the development side, the original system focused on backend logic, with frontend templates pulled from the internet to save time. The result was a <span className="bg-violet-100 text-violet-800 px-1 rounded-sm">visually inconsistent, non-intuitive interface</span> that slowed adoption.  
          </p>

          <p className="mt-6 leading-relaxed text-gray-700 space-y-2">
            <span className="font-semibold">In short: </span> Old system was slow, inflexible, and difficult for users to trust.
          </p>
        </div>

        {/* Process */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconBrain />
            Process
          </h2>

          <p className="leading-relaxed text-gray-700 space-y-2">
            I started by meeting with the research team to understand their <span className="bg-violet-200/50 rounded px-1">workflow and pain points</span>. We created interactive <span className="bg-violet-200/50 rounded px-1">Figma mockups</span> for quick feedback and iteration. While I contributed to the design, my teammate implemented the frontend components and UI layout.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            On the frontend, <span className="bg-violet-200/50 rounded px-1">React reusable components</span> were used for buttons, forms, and layouts. Editing and input forms were <span className="bg-violet-200/50 rounded px-1">standardized</span>, ensuring consistency and simplifying content entry while keeping the interface <span className="bg-violet-200/50 rounded px-1">user-friendly and mobile-responsive</span>.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            My main focus was the backend. I implemented a <span className="bg-violet-200/50 rounded px-1">Laravel RESTful API</span> with clean, modular, and well-commented code. Routes were structured by module, <span className="bg-violet-200/50 rounded px-1">validations and automation</span> ensured data integrity, and database relationships supported <span className="bg-violet-200/50 rounded px-1">frequent SOP updates</span>. Every endpoint was tested in Postman, with seeders and factories used for reliable testing.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            Users were involved in <span className="bg-violet-200/50 rounded px-1">acceptance testing</span>, and features were iterated based on feedback. This approach reduced manual work, ensured real-world alignment, and followed <span className="bg-violet-200/50 rounded px-1">Agile cycles</span>.
          </p>

          <p className="mt-2 leading-relaxed text-gray-700 space-y-2">
            <span className="font-semibold">In short: </span>  
            I planned with the research team, built robust Laravel RESTful APIs, tested incrementally, and iterated based on user feedback — all following Agile cycles. Frontend components were implemented by teammates using React reusable components for forms, buttons, and layouts.
          </p>

          <p className="mt-2 leading-relaxed text-gray-700 space-y-2">
            <span className="font-semibold">SDLC </span>  
          </p>

          {/* Development Journey Cards */}
          <div className="relative">
            {/* Cards container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto overflow-y-hidden gap-6 scroll-smooth px-4 md:px-0 no-scrollbar"
            >
              {[
                {
                  icon: <IconCircleCheck size={28} />,
                  title: "Planning",
                  desc: "Met with research staff to understand workflow. Created Figma mockups for easy feedback and iteration, following Agile cycles.",
                },
                {
                  icon: <IconDatabase size={28} />,
                  title: "Design",
                  desc: "Designed a flexible relational database aligned with SOP updates, defined clear backend routes by module, ensuring adaptability.",
                },
                {
                  icon: <IconCode size={28} />,
                  title: "Build",
                  desc: "Implemented Laravel RESTful APIs with clean code and comments. Frontend used React reusable components for forms, buttons, and layouts.",
                },
                {
                  icon: <IconTestPipe size={28} />,
                  title: "Test",
                  desc: "Incremental testing with Postman, seeders, and factories. Validated workflows and performance during Agile iterations.",
                },
                {
                  icon: <IconRepeat size={28} />,
                  title: "Iterate",
                  desc: "Performed user acceptance testing, iterated based on feedback, refined backend automation, and optimized queries continuously in Agile cycles.",
                },
                {
                  icon: <IconTools size={25} />,
                  title: "Maintain",
                  desc: "Ensured long-term stability by writing clean, modular code, documenting routes and APIs, monitoring performance, and making updates aligned with frequent SOP changes. Backend is prepared for future enhancements like mobile apps.",
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="flex-shrink-0 bg-slate-50 border border-gray-300 rounded-2xl w-[250px] sm:w-[280px] md:w-[300px] lg:w-[260px] p-6 flex flex-col items-center text-center"
                  style={{ height: maxHeight || "auto" }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-violet-300 mb-4 shadow">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-6 mt-8">
              <button
                onClick={() => scroll(-300)}
                className="bg-slate-50 border border-gray-300 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <IconChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(300)}
                className="bg-slate-50 border border-gray-300 rounded-md w-10 h-10 flex items-center justify-center"
              >
                <IconChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconTools />
            Solution
          </h2>

          <p className="leading-relaxed text-gray-700 space-y-2">
            The new Loan Payment Tracking System simplified the workflow for the research team. Staff could now <span className="bg-violet-200/50 rounded px-1">record payments instantly</span>, and balances updated automatically. Management dashboards displayed <span className="bg-violet-200/50 rounded px-1">real-time repayment data</span> across branches.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            On the backend, I implemented <span className="bg-violet-200/50 rounded px-1">robust Laravel RESTful APIs</span> that handled <span className="bg-violet-200/50 rounded px-1">validations, automation, and audit logs</span>. Database relationships were designed to adapt to <span className="bg-violet-200/50 rounded px-1">frequent SOP updates</span>, ensuring <span className="bg-violet-200/50 rounded px-1">data accuracy</span> and alignment with user workflows. The system is scalable and <span className="bg-violet-200/50 rounded px-1">future-ready</span>, supporting potential mobile input for customers.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            Frontend components were implemented by teammates using <span className="bg-violet-200/50 rounded px-1">React reusable components</span> for forms, buttons, and layouts. Forms were <span className="bg-violet-200/50 rounded px-1">standardized</span>, ensuring <span className="bg-violet-200/50 rounded px-1">consistency</span> and a <span className="bg-violet-200/50 rounded px-1">mobile-responsive interface</span>.
          </p>

          {/* In short */}
          <p className="mt-2 leading-relaxed text-gray-700 space-y-2">
            <span className="font-semibold">In short: </span>  
            I built a robust backend with Laravel RESTful APIs, ensured validations and automation, and tested incrementally. Frontend components were implemented by teammates using React reusable elements. The system simplified staff workflow, provided real-time dashboards, and is ready for future mobile integration.
          </p>

          {/* Infinite scroll screenshot */}
          <div className="relative w-full overflow-hidden py-14 mt-6">
            <div className="flex min-w-max animate-scroll-horizontal">
              {["1", "2", "3", "4"].map((n) => (
                <Image
                  key={`a-${n}`}
                  src={`/images/dashboard-${n}.png`}
                  alt={`Dashboard screen ${n}`}
                  width={480}
                  height={280}
                  className="mx-6 rounded-xl ring-1 ring-zinc-200/50 dark:ring-zinc-700/50 transition-transform hover:scale-[1.03] duration-300"
                />
              ))}
              {["1", "2", "3", "4"].map((n) => (
                <Image
                  key={`b-${n}`}
                  src={`/images/dashboard-${n}.png`}
                  alt={`Dashboard screen ${n} duplicate`}
                  width={480}
                  height={280}
                  className="mx-6 rounded-xl ring-1 ring-zinc-200/50 dark:ring-zinc-700/50 transition-transform hover:scale-[1.03] duration-300"
                />
              ))}
            </div>

            {/* Gradient fades on sides */}
            <div className="absolute top-0 left-0 w-32 h-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full pointer-events-none" />

            <p className="text-center text-sm mt-10">
              Preview of dashboard screens — automatically scrolling showcase
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconPlant2 />
            Impact
          </h2>

          <p className="leading-relaxed text-gray-700 space-y-2">
            The new system addressed the previous frustrations: it <span className="bg-violet-200/50 rounded px-1">simplified tracking of customer inflows and outflows</span>, reducing the number of clicks needed to perform tasks. It adapted to <span className="bg-violet-200/50 rounded px-1">frequently changing SOPs</span>, ensuring staff could work efficiently without manual workarounds. Staff now receive <span className="bg-violet-200/50 rounded px-1">real-time feedback and success/error messages</span>, and the interface is fully <span className="bg-violet-200/50 rounded px-1">mobile-responsive</span>.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            Operationally, this translated into <span className="bg-violet-200/50 rounded px-1">faster reconciliation</span> and <span className="bg-violet-200/50 rounded px-1">more accurate repayment records</span> across branches.
          </p>

          {/* In short */}
          <p className="mt-2 leading-relaxed text-gray-700 space-y-2">
            <span className="font-semibold">In short: </span>  
            Staff can track payments efficiently, the system adapts to SOP changes, provides feedback on actions, and ensures data is accurate and mobile-friendly.
          </p>
        </div>

        {/* Reflection */}
        <div className="space-y-3 mt-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconMessageCircle2 />
            Reflection
          </h2>

          <p className="leading-relaxed text-gray-700 space-y-2">
            This project reinforced that <span className="bg-violet-200/50 rounded px-1">backend development</span> is more than writing APIs — it’s about creating <span className="bg-violet-200/50 rounded px-1">systems that adapt to changing workflows</span>. I learned how to balance <span className="bg-violet-200/50 rounded px-1">Agile iterations</span> with robust code practices, ensuring the backend supports future growth and evolving SOPs.
          </p>

          <p className="leading-relaxed text-gray-700 space-y-2">
            I also gained insights into how <span className="bg-violet-200/50 rounded px-1">clean, modular code, thorough testing, and automation</span> can <span className="bg-violet-200/50 rounded px-1">reduce user frustration</span> and create <span className="bg-violet-200/50 rounded px-1">tangible business impact</span>.
          </p>
        </div>
      </section>

      {/* Thank You Section */}
      <div className="mt-16 mb-12 flex flex-col items-center text-center">
        <p className="text-lg sm:text-xl text-gray-700 font-medium mb-2">
          Thank you for reading!
        </p>
        <Image
          src="/logo-3.svg"
          alt="Logo"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
    </ContentLayout>
  );
}
