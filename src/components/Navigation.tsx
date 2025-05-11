'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  UserCircleIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhotoIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about', icon: UserCircleIcon, isHash: true },
  { name: 'Certifications', href: '#certifications', icon: DocumentCheckIcon, isHash: true },
  { name: 'Experience', href: '#resume', icon: BuildingOfficeIcon, isHash: true },
  { name: 'Projects', href: '#projects', icon: BriefcaseIcon, isHash: true },
  { name: 'Skills', href: '#skills', icon: CodeBracketIcon, isHash: true },
  { name: 'Gallery', href: '/gallery', icon: PhotoIcon, isHash: false },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon, isHash: true },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Memoize the observer callback to prevent unnecessary re-renders
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, []);

  // Memoize the observer options
  const observerOptions = useMemo(() => ({
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0.5
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Only observe hash links
    const hashElements = navItems
      .filter(item => item.isHash)
      .map(item => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    hashElements.forEach(element => observer.observe(element));

    return () => {
      hashElements.forEach(element => observer.unobserve(element));
      observer.disconnect();
    };
  }, [handleIntersection, observerOptions]);

  const handleNavigation = useCallback((href: string, isHash: boolean) => {
    if (isHash) {
      if (pathname !== '/') {
        // If we're not on the home page, first navigate to home
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [pathname, router]);

  // Memoize the navigation items to prevent unnecessary re-renders
  const renderedNavItems = useMemo(() => 
    navItems.map((item) => {
      const Icon = item.icon;
      const isActive = item.isHash 
        ? activeSection === item.href.slice(1)
        : pathname === item.href;
      
      return (
        <motion.li
          key={item.name}
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {item.isHash ? (
            <button
              onClick={() => handleNavigation(item.href, item.isHash)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex items-center justify-center w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">{item.name}</span>
            </button>
          ) : (
            <Link
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`flex items-center justify-center w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">{item.name}</span>
            </Link>
          )}
          <AnimatePresence>
            {hoveredItem === item.name && (
              <motion.div
                role="tooltip"
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap shadow-lg z-50"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      );
    }), [activeSection, pathname, hoveredItem, handleNavigation]);

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed left-0 top-0 h-full w-16 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50"
    >
      <div className="flex flex-col h-full py-6">
        <div className="mb-6">
          <Link 
            href="/"
            className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onMouseEnter={() => setHoveredItem('Home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <HomeIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
          <AnimatePresence>
            {hoveredItem === 'Home' && (
              <motion.div
                role="tooltip"
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap shadow-lg z-50"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Home
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <ul className="space-y-4">
          {renderedNavItems}
        </ul>
        <div className="mt-auto">
          <div className="h-px bg-gray-200 dark:bg-gray-800 mb-3"></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">© 2025</p>
        </div>
      </div>
    </nav>
  );
}