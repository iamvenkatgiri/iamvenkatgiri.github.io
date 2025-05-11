'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const images = [
  {
    src: "/journey-images/journey-1.png",
    alt: "Academic Journey"
  },
  {
    src: "/journey-images/journey-2.jpeg",
    alt: "Professional Growth"
  },
  {
    src: "/journey-images/journey-3.jpeg",
    alt: "Current Role"
  },
  {
    src: "/journey-images/journey-4.jpeg",
    alt: "Professional Experience"
  },
  {
    src: "/journey-images/journey-5.jpeg",
    alt: "Team Collaboration"
  }
];

export default function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]));
  const { scrollY } = useScroll();
  const buttonOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  // Preload next image
  const preloadNextImage = useCallback((index: number) => {
    const nextIndex = (index + 1) % images.length;
    if (!preloadedImages.has(nextIndex)) {
      const img = document.createElement('img');
      img.src = images[nextIndex].src;
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, nextIndex]));
      };
    }
  }, [preloadedImages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        preloadNextImage(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [preloadNextImage]);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              quality={75}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-slate-50/80 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-900/80" />
      </div>
      
      {/* Gallery link */}
      <motion.div
        style={{ opacity: buttonOpacity }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Link 
          href="/gallery"
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg"
        >
          View Full Gallery
        </Link>
      </motion.div>
    </>
  );
} 