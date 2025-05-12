// Modernized ProjectCard component with improved styling, animations, and accessibility
'use client';

import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isBlog?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  isBlog,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const renderTechnologies = () =>
    technologies.map((tech) => (
      <span
        key={tech}
        className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-100 dark:border-emerald-800/50"
      >
        {tech}
      </span>
    ));

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -6,
        rotateX: 2,
        rotateY: 2,
        scale: 1.02,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-44 w-full overflow-hidden">
        {!imageError ? (
          <>
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
            )}
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover w-full h-full transition-all duration-700 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              } group-hover:scale-110 group-hover:rotate-1`}
              onError={() => setImageError(true)}
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23e5e7eb'/%3E%3C/svg%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Image not available</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 relative">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-emerald-400 dark:group-hover:from-emerald-300 dark:group-hover:to-emerald-200 transition-all duration-300 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors hover:scale-110 transform duration-300"
                aria-label="GitHub Repository"
              >
                <CodeBracketIcon className="w-4 h-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors hover:scale-110 transform duration-300"
                aria-label={isBlog ? 'Blog Link' : 'Live Demo'}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {renderTechnologies()}
        </div>
      </div>
    </motion.div>
  );
}