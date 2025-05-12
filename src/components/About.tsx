'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
          About Me
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-0"
        >
          <p>
            Cloud and DevOps Engineer with 4+ years of experience in designing, implementing, and automating scalable infrastructure solutions. Skilled in full-stack DevOps processes, containerization, and Infrastructure as Code with a strong focus on technical support and troubleshooting. Passionate about enhancing reliability and security in cloud environments, while articulating complex Cloud and DevOps concepts effectively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;