'use client';

import { skillIcons } from '@/data/skillIcons';

interface SkillIconProps {
  name: string;
  className?: string;
}

export default function SkillIcon({ name, className = '' }: SkillIconProps) {
  const icon = skillIcons[name] || skillIcons['AWS']; // Fallback to AWS icon if not found

  return (
    <div 
      className={`w-6 h-6 flex items-center justify-center ${className}`}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
} 