'use client';

import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Contact Information
      </h3>
      <div className="space-y-4">
        <a
          href="mailto:venkatagiri.sasanapuri@utdallas.edu"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="Email Venkatagiri Sasanapuri"
        >
          <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="truncate">venkatagiri.sasanapuri@utdallas.edu</span>
        </a>
      </div>
    </div>
  );
}