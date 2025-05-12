'use client';

import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectFeatureProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isBlog?: boolean;
}

export default function ProjectFeature({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  isBlog,
}: ProjectFeatureProps) {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Extract color from placeholder image URL if it exists
  const getBackgroundColor = () => {
    if (image.includes('placehold.co')) {
      const colorMatch = image.match(/\/([a-f0-9]{6})\//i);
      return colorMatch ? `#${colorMatch[1]}` : '#1f2937';
    }
    return '#1f2937';
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 shadow-lg w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative min-h-[250px] w-full">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-gray-900/50 to-gray-900/50 dark:from-gray-700/50 dark:via-gray-800/50 dark:to-gray-900/50"
          style={{ backgroundColor: getBackgroundColor() }}
        />
        
        {/* Image Container */}
        <div className="relative h-full w-full">
          {!imageError ? (
            <>
              {!isImageLoaded && (
                <div 
                  className="absolute inset-0 animate-pulse"
                  style={{ backgroundColor: getBackgroundColor() }}
                />
              )}
              <Image
                src={image}
                alt={title}
                fill
                className={`object-contain transition-all duration-700 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onError={() => setImageError(true)}
                onLoad={() => setIsImageLoaded(true)}
                loading="lazy"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
            </>
          ) : (
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: getBackgroundColor() }}
            >
              <span className="text-gray-500 dark:text-gray-400">Image not available</span>
            </div>
          )}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-4">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                aria-label="GitHub Repository"
              >
                <CodeBracketIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                aria-label={isBlog ? 'Blog Link' : 'Live Demo'}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{isBlog ? 'Blog' : 'Demo'}</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 