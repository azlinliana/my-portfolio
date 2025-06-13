export function TechnicalSkills() {
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent py-5">
          TECHNICAL SKILLS
        </h2>

        {/* Technical Skills */}
        <div className="mb-10">
          <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <strong>Languages (Programming & Markup):</strong> PHP, JavaScript, Dart, HTML, CSS, C, C++, Java
            </li>
            <li>
              <strong>Frameworks & Libraries: </strong> Laravel, React.js, Zustand, Tailwind CSS, Bootstrap
            </li>
            <li>
              <strong>Mobile Development: </strong>Android, Flutter, Dart, Firebase
            </li>
            <li>
              <strong>Databases: </strong> MySQL, SQLite, Firebase
            </li>
            <li>
              <strong>Tools & Platforms: </strong> Kubernetes (CKA Certified), Docker, Postman, Git, GitHub, GitLab, Figma
            </li>
            <li>
              <strong>Concepts & Practices: </strong> DevOps (CI/CD), MVC Architecture, RESTful APIs, Agile, Software Documentation
            </li>
            <li>
              <strong>Operating Systems:</strong> Windows, Ubuntu
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
