'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          About Me
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Cloud and DevOps Engineer with 4+ years of experience in designing, implementing, and automating scalable infrastructure solutions. Skilled in full-stack DevOps processes, containerization, and Infrastructure as Code with a strong focus on technical support and troubleshooting. Passionate about enhancing reliability and security in cloud environments, while articulating complex Cloud and DevOps concepts effectively.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/VenkataGiri_Resume.pdf"
              download="VenkataGiri_Resume.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;