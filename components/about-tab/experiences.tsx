import { Timeline } from "../ui/timeline";

export function Experiences() {
  const professional = [
    {
      title: "JUL 2023 - CURRENT",
      content: (
        <div>
          {/* Workplace */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Amanah Ikhtiar Malaysia
              </h3>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Sri Damansara, Kuala Lumpur
            </h3>
          </div>
  
          {/* Position */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 italic mb-8">
            Full-Stack Developer (Back-End Focused)
          </h3>
  
          <ul className="list-disc list-outside pl-5 mt-2 space-y-2 text-lg text-gray-600 dark:text-gray-300 text-justify">
            <li>
              Led the redesign and full-stack development of a <em>Loan Payment Tracking System</em> supporting socio-economic programs for B40 women entrepreneurs, reducing manual reporting workload by <strong>50%</strong> and enabling real-time usage tracking across regional offices.
            </li>
            <li>
              Co-led the development of a centralized <em>Internal Audit System</em>, overseeing backend integration and contributing to user interface design, improving reporting accuracy and traceability across <strong>15+ branches</strong>.
            </li>
            <li>
              Built scalable and modular front-end interfaces that improved usability, accessibility, and system performance across departments.
            </li>
            <li>
              Participated in user discussions with HQ and regional staff to gather requirements and ensure alignment between user needs and system functionality.
            </li>
            <li>
              Participated in system testing to validate functionality, identify issues, and ensure smooth deployment.
            </li>
            <li>
              Tested and integrated APIs to ensure consistent data flow, system reliability, and seamless communication between services.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "DEC 2022 - JUNE 2023",
      content: (
        <div>
          {/* Workplace */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Pernec Integrated Network Systems
              </h3>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Setiawangsa, Kuala Lumpur
            </h3>
          </div>
  
          {/* Position */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 italic mb-8">
            Apprenticeship (PROTÉGÉ-RTW)
          </h3>
  
          <ul className="list-disc list-outside pl-5 mt-2 space-y-2 text-lg text-gray-600 dark:text-gray-300 text-justify">
            <li>
              Reviewed software documentation to ensure accuracy, consistency, and clarity in content and formatting.
            </li>
            <li>
              Participated in meetings with MARA stakeholders to gather feedback and clarity requirements.
            </li>
            <li>
              Assisted Business Analyst by preparing <em>Quality Assurance Checklists</em> based on user meetings.
            </li>
            <li>
              Contributed to improve software documentation quality and compliance with internal Quality Assurance standards.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "MAR - AUG 2022",
      content: (
        <div>
          {/* Workplace */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Universiti Malaysia Kelantan (UMK)
              </h3>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Bachok, Kelantan
            </h3>
          </div>
  
          {/* Position */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 italic mb-8">
            Internship
          </h3>
  
          <ul className="list-disc list-outside pl-5 mt-2 space-y-2 text-lg text-gray-600 dark:text-gray-300 text-justify">
            <li>
              Designed and developed an internal web application, <em>Carnival of Research & Innovation</em>, to streamline research competition submissions and evaluations.
            </li>
            <li>
              Replaced a manual Google Forms workflow, reducing administrative processing time by <strong>60%</strong> and centralizing participant and juror management.
            </li>
            <li>
              Enabled jurors to score entries and provide feedback digitally, improving evaluation speed and consistency by <strong>40%</strong>.
            </li>
            <li>
              Designed congratulatory and event announcement posters for departmental use, improving communication and engagement across campus.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  
  const additional = [
    {
      title: "OCT - DEC 2022",
      content: (
        <div>
          {/* Workplace */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Universiti Malaysia Kelantan (UMK)
              </h3>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Bachok, Kelantan
            </h3>
          </div>
  
          {/* Position */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 italic">
            Administrative Assistant (Clerical/Operational), N19
          </h3>
  
          <ul className="list-disc list-outside pl-5 mt-2 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>
              Designed and created posters for programs and activities, enhancing event visibility and participant engagement.
            </li>
            <li>
              Organized and coordinated internal meetings, including scheduling and preparing materials.
            </li>
            <li>
              Provided general administrative support to assist with smooth day-to-day operations.
            </li>
          </ul>
        </div>
      ),
    },
  ];  

  return (
    <>
      <div className="relative w-full overflow-clip">
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent py-5">
          PROFESSIONAL EXPERIENCES
        </h2>
        
        <Timeline data={professional} />
      </div>

      <div className="relative w-full overflow-clip">
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent py-5">
          ADDITIONAL EXPERIENCE
        </h2>

        <Timeline data={additional} />
      </div>
    </>
  );
}