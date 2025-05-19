'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import SkillIcon from './SkillIcon';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Only use the 'Core Expertise' category for featured skills
  const coreExpertiseCategory = skillCategories.find(category => category.name === 'Core Expertise');
  const featuredSkills = coreExpertiseCategory ? coreExpertiseCategory.skills : [];

  const filteredCategories = selectedCategory
    ? skillCategories.filter(category => category.name === selectedCategory && category.name !== 'Core Expertise')
    : skillCategories.filter(category => category.name !== 'Core Expertise');

  return (
    <section id="skills" className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Featured Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Core Expertise
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <SkillIcon
                    name={skill.name}
                    className="w-6 h-6 text-emerald-500"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Skills Section */}
        <div className="space-y-4">
          <div className="mb-2 flex items-center space-x-2 w-fit">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-colors"
            >
              <span>All Skills</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${showAllSkills ? 'rotate-180' : 'animate-bounce-chevron'}`}
              />
            </button>
          </div>

          <AnimatePresence>
            {showAllSkills && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Category Filter */}
                <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex space-x-2 min-w-max">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === null
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      All Categories
                    </button>
                    {skillCategories
                      .filter(category => category.name !== 'Core Expertise')
                      .map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category.name
                              ? 'bg-emerald-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {filteredCategories.map((category) =>
                    category.skills.map((skill, index) => (
                      <motion.div
                        key={`${category.name}-${skill.name}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <SkillIcon
                            name={skill.name}
                            className={`w-5 h-5 ${
                              skill.level === 'Advanced'
                                ? 'text-blue-500'
                                : skill.level === 'Intermediate'
                                ? 'text-yellow-500'
                                : 'text-gray-400'
                            }`}
                          />
                          <div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="block text-xs text-gray-500 dark:text-gray-400">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes bounce-chevron {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
          .animate-bounce-chevron {
            animation: bounce-chevron 1s infinite;
          }
        `}</style>
      </div>
    </section>
  );
} 