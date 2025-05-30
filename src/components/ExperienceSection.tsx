'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Timeline from './Timeline';
import { events } from '@/data/events';

export default function ExperienceSection() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllEducation, setShowAllEducation] = useState(false);

  // Separate education and experience events
  const educationEvents = events.filter(event => event.type === 'education');
  const experienceEvents = events.filter(event => event.type === 'experience');

  // Get default visible events
  const defaultExperienceEvents = experienceEvents.filter(event => 
    event.company === 'Capital One'
  );
  const defaultEducationEvents = educationEvents.filter(event => 
    event.company === 'The University of Texas at Dallas'
  );

  // Get remaining events
  const remainingExperienceEvents = experienceEvents.filter(event => 
    event.company !== 'Capital One'
  );
  const remainingEducationEvents = educationEvents.filter(event => 
    event.company !== 'The University of Texas at Dallas'
  );

  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Experience Section */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Professional Experience
              </h3>
            </div>
            <Timeline events={defaultExperienceEvents} />
            {remainingExperienceEvents.length > 0 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllExperience(!showAllExperience)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  {showAllExperience ? 'Show Less' : 'Show More Experience'}
                </button>
              </div>
            )}
            <AnimatePresence>
              {showAllExperience && remainingExperienceEvents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <Timeline events={remainingExperienceEvents} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Education Section */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <Timeline events={defaultEducationEvents} />
            {remainingEducationEvents.length > 0 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllEducation(!showAllEducation)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  {showAllEducation ? 'Show Less' : 'Show More Education'}
                </button>
              </div>
            )}
            <AnimatePresence>
              {showAllEducation && remainingEducationEvents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <Timeline events={remainingEducationEvents} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 