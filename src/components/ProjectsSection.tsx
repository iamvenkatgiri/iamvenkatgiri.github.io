'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectFeature from './ProjectFeature';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Allow page scroll up when at the top of the project list
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (container.scrollTop === 0 && e.deltaY < 0) {
        // At the top and scrolling up, let the page scroll
        // Temporarily disable overflow to allow page scroll
        container.style.overflowY = 'hidden';
        setTimeout(() => {
          container.style.overflowY = 'auto';
        }, 100);
      }
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  const scrollToNext = () => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollTop;
      const itemHeight = containerRef.current.clientHeight;
      const maxScroll = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      
      // If we're at the bottom, don't scroll
      if (currentScroll >= maxScroll) return;
      
      // Calculate the next snap point
      const nextSnapPoint = Math.ceil(currentScroll / itemHeight) * itemHeight;
      containerRef.current.scrollTo({
        top: Math.min(nextSnapPoint, maxScroll),
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrevious = () => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollTop;
      const itemHeight = containerRef.current.clientHeight;
      
      // If we're at the top, don't scroll
      if (currentScroll <= 0) return;
      
      // Calculate the previous snap point
      const prevSnapPoint = Math.floor(currentScroll / itemHeight) * itemHeight;
      containerRef.current.scrollTo({
        top: Math.max(prevSnapPoint, 0),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="relative bg-white dark:bg-gray-900 py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Explore my portfolio of cloud and DevOps projects. Scroll down to discover more.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-20 flex flex-col gap-2">
            <button
              onClick={scrollToPrevious}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous project"
            >
              <ChevronUpIcon className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToNext}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next project"
            >
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Project Container */}
          <div 
            ref={containerRef}
            className="relative max-h-[350px] overflow-y-auto snap-y snap-mandatory pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
            style={{
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth',
            }}
          >
            <style jsx global>{`
              .snap-y::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="space-y-2 p-2">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="snap-start min-h-[300px] flex items-center"
                >
                  <ProjectFeature {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-600 dark:text-gray-300 text-xs bg-white/80 dark:bg-gray-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <span>Scroll for more projects</span>
            <ChevronDownIcon className="w-3 h-3 animate-bounce" />
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 