'use client';

import { motion } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export default function CertificationCard({ 
  title, 
  issuer, 
  date, 
  url
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-none w-80 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <CheckBadgeIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {issuer}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {date}
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          Verify Credential
        </a>
      </div>
    </motion.div>
  );
}