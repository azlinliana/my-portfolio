export function TechnicalSkills() {
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-5">
          Technical Skills
        </h2>

        {/* Technical Skills */}
        <div className="mb-10">
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <li>
            <strong>Languages (Programming & Markup):</strong> HTML, CSS, JavaScript, PHP, Dart, C, C++, Java
          </li>
          <li>
            <strong>Frameworks & Libraries: </strong>Laravel, React.js, Zustand, Tailwind CSS, Bootstrap
          </li>
          <li>
            <strong>Mobile Development: </strong>Android, Flutter, Firebase
          </li>
          <li>
            <strong>Databases: </strong> MySQL, SQLite, Firebase
          </li>
          <li>
            <strong>Tools & Platforms: </strong>Git, GitHub, GitLab, Docker, Kubernetes (CKA Certified), Postman, Figma
          </li>
          <li>
            <strong>Concepts & Practices: </strong>DevOps (CI/CD), MVC Architecture, RESTful APIs, Software Documentation
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
