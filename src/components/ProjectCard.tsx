// Modernized ProjectCard component with improved styling, animations, and accessibility
'use client';

import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
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
        className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
      >
        {tech}
      </span>
    ));

  const renderLink = (url: string, label: string, isIcon = false) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={
        isIcon
          ? 'group'
          : 'text-xs font-medium text-gray-500 hover:text-emerald-500 transition-colors'
      }
      aria-label={label}
    >
      {isIcon ? (
        <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
      ) : (
        label
      )}
    </a>
  );

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden">
          {!imageError ? (
            <>
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onError={() => setImageError(true)}
                onLoad={() => setIsImageLoaded(true)}
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23e5e7eb'/%3E%3C/svg%3E"
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Image not available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
              {title}
            </h3>
            <div className="flex items-center gap-1.5">
              {githubUrl && renderLink(githubUrl, 'GitHub', true)}
              {liveUrl && renderLink(liveUrl, isBlog ? 'Blog Link' : 'Live Demo')}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {renderTechnologies()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}