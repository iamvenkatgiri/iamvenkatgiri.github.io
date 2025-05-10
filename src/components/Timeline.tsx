'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarIcon, MapPinIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface TimelineEvent {
  title: string;
  company?: string;
  location: string;
  date: string;
  description: string[];
  type: 'education' | 'experience';
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getIcon = (type: 'education' | 'experience') => {
    return type === 'education' ? AcademicCapIcon : BriefcaseIcon;
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="absolute left-0 md:left-[20px] h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-300 dark:from-emerald-400 dark:via-emerald-500 dark:to-emerald-600"></div>

      <div className="space-y-8">
        {events.map((event, index) => {
          const Icon = getIcon(event.type);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 md:pl-[50px]"
            >
              {/* Timeline Icon */}
              <div className="absolute left-[-8px] md:left-[12px] top-0 w-4 h-4">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-4 h-4 bg-white dark:bg-gray-900 rounded-full border-2 border-emerald-500 dark:border-emerald-400 z-10"></div>
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                {/* Header */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                      </div>
                      {event.company && (
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {event.company}
                        </p>
                      )}
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center justify-end gap-1 text-sm text-gray-600 dark:text-gray-300">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: expandedIndex === index ? '1000px' : '120px' }}
                >
                  <div className="p-4">
                    <ul className="space-y-2">
                      {event.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="mr-2 text-emerald-500 dark:text-emerald-400">•</span>
                          <span className="line-clamp-3 hover:line-clamp-none transition-all duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                {event.description.length > 2 && (
                  <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      {expandedIndex === index ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}