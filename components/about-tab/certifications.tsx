import { IconExternalLink } from "@tabler/icons-react";

export function Certifications() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent py-5">
        CERTIFICATE(S)
      </h2>

      <div className="mb-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Certified Kubernetes Administrator
            </h3>
          </div>

          <span className="text-lg text-gray-800 dark:text-gray-100 italic font-bold">
            The Linux Foundation
          </span>
        </div>

        <ul className="list-disc list-inside mt-2 text-lg text-gray-600 dark:text-gray-300">
          <li>Issued: September 2024</li>
          <li>Expires: September 2026</li>
        </ul>

        <div className="mt-8">
          <a
            href="https://www.credly.com/badges/17f8ad43-8ec3-4fb8-8a30-722122727e60/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          >
            <IconExternalLink className="w-4 h-4" />
            View Credentials
          </a>
        </div>
      </div>
    </div>
  );
}
