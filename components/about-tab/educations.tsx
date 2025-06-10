export function Educations() {
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-5">Educational Background</h2>

        {/* Education 1 */}
        <div className="mb-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Universiti Malaysia Pahang (UMP)
              </h3>
            </div>

            <span className="text-sm text-gray-800 dark:text-gray-100 italic font-bold">
              September 2018 – August 2022
            </span>
          </div>

          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Bachelor of Computer Science (Software Engineering) with Honours</li>
            <li>
              Final Year Project – Developed <strong>Medication Reminder Application</strong> for <strong>Android</strong> using <strong>Flutter</strong> & <strong>Firebase</strong>
            </li>
          </ul>
        </div>

        {/* Education 2 */}
        <div className="mb-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Perak Matriculation College (KMPk)
              </h3>
            </div>

            <span className="text-sm text-gray-800 dark:text-gray-100 italic font-bold">
              September 2017 – June 2018
            </span>
          </div>

          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Science Stream (Module III – Biology, Chemistry & Science Computer)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

