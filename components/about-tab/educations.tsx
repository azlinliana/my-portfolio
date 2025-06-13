export function Educations() {
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent py-5">
          EDUCATIONAL BACKGROUNDS
        </h2>

        {/* Education 1 */}
        <div className="mb-15">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Universiti Malaysia Pahang (UMP)
              </h3>
            </div>

            <span className="text-lg text-gray-800 dark:text-gray-100 italic font-bold">
              September 2018 – August 2022
            </span>
          </div>

          <ul className="list-disc list-inside mt-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Bachelor of Computer Science (Software Engineering) with Honours</li>
            <li>
              Final Year Project – Developed <strong>Medication Reminder Application</strong> for <strong>Android</strong> using <strong>Flutter</strong> & <strong>Firebase</strong>
            </li>
          </ul>
        </div>

        {/* Education 2 */}
        <div className="mb-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Perak Matriculation College (KMPk)
              </h3>
            </div>

            <span className="text-lg text-gray-800 dark:text-gray-100 italic font-bold">
              September 2017 – June 2018
            </span>
          </div>

          <ul className="list-disc list-inside mt-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Science Stream (Module III – Biology, Chemistry & Science Computer)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

