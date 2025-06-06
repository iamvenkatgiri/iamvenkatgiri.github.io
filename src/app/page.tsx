'use client';

import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Navigation from '@/components/Navigation';
import { projects } from '@/data/projects';
import { events } from '@/data/events';
import { certifications } from '@/data/certifications';
import { motion } from 'framer-motion';

// Dynamically import components with loading fallbacks
const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-64" />,
  ssr: false
});

const CertificationCard = dynamic(() => import('@/components/CertificationCard'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-32" />,
  ssr: false
});

const Timeline = dynamic(() => import('@/components/Timeline'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96" />,
  ssr: false
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-64" />,
  ssr: false
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96" />,
  ssr: false
});

const BackgroundSlideshow = dynamic(() => import('@/components/BackgroundSlideshow'), {
  loading: () => <div className="fixed inset-0 bg-gray-100 dark:bg-gray-800" />,
  ssr: false
});

const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96" />,
  ssr: false
});

const SkillsSection = dynamic(() => import('@/components/SkillsSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96" />,
  ssr: false
});

const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-screen" />,
  ssr: false
});

// Loading components
const LoadingSection = ({ height }: { height: string }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${height}`} />
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Suspense fallback={<div className="fixed inset-0 bg-gray-100 dark:bg-gray-800" />}>
        <BackgroundSlideshow />
      </Suspense>
      <Navigation />
      <div className="min-h-screen md:pl-16 relative">
        {/* Hero Section */}
        <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6 sm:mb-8"
            >
              <span className="text-emerald-700 text-xs sm:text-sm font-medium">Cloud & DevOps Engineer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900"
            >
              Venkata Giri Sasanapuri
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 font-semibold px-4"
            >
              Building Scalable Cloud Infrastructure & Automating DevOps
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-emerald-500 text-white text-sm sm:text-base font-medium hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-white/80 font-medium text-emerald-700 text-sm sm:text-base hover:bg-emerald-50 transition-all duration-300 border border-emerald-100"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12"
            >
              <a
                href="https://github.com/iamvenkatgiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-emerald-700 transition-all duration-300 hover:scale-110"
                aria-label="Visit GitHub profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-emerald-700 transition-all duration-300 hover:scale-110"
                aria-label="Visit LinkedIn profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<LoadingSection height="h-64" />}>
              <About />
            </Suspense>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-8 sm:py-12 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">Certifications</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                A showcase of my professional certifications and achievements.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-x-auto pb-4 sm:pb-6 custom-scrollbar">
                <div className="flex gap-4 sm:gap-6 min-w-max px-1">
                  <Suspense fallback={<LoadingSection height="h-32" />}>
                    {certifications.map((cert, index) => (
                      <CertificationCard
                        key={`${cert.title}-${index}`}
                        title={cert.title}
                        issuer={cert.issuer}
                        date={cert.date}
                        url={cert.url}
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 sm:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Experience & Education
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded-full"></div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                A journey through my professional growth and academic achievements
              </p>
            </div>
            <Suspense fallback={<LoadingSection height="h-96" />}>
              <ExperienceSection />
            </Suspense>
          </div>
        </section>

        {/* Projects Section */}
        <Suspense fallback={<LoadingSection height="h-screen" />}>
          <ProjectsSection />
        </Suspense>

        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f6;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #10b981, #059669);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to right, #059669, #047857);
          }
          .dark .custom-scrollbar::-webkit-scrollbar-track {
            background: #1f2937;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #059669, #047857);
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to right, #047857, #065f46);
          }
        `}</style>

        {/* Skills Section */}
        <Suspense fallback={<LoadingSection height="h-96" />}>
          <SkillsSection />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<LoadingSection height="h-96" />}>
          <ContactSection />
        </Suspense>
      </div>
    </main>
  );
}