'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

const levelColors = {
  Beginner: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  Intermediate: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  Advanced: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  Expert: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
};

const getProgressWidth = (level: string) => {
  switch (level) {
    case 'Beginner': return '25%';
    case 'Intermediate': return '50%';
    case 'Advanced': return '75%';
    case 'Expert': return '100%';
    default: return '0%';
  }
};

export default function SkillCard({ category, skills }: SkillCardProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="flex flex-col h-full">
        <motion.h3 
          className="text-xl font-semibold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {category}
        </motion.h3>
        <div className="flex flex-col gap-3 mt-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${levelColors[skill.level]}`}>
                  {skill.level}
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${levelColors[skill.level].split(' ')[0]}`}
                  initial={{ width: "0%" }}
                  animate={{ width: getProgressWidth(skill.level) }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -right-2 -top-8 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                >
                  {getProgressWidth(skill.level)}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}