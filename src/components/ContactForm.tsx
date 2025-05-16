// Modernized ContactForm component with improved accessibility, responsiveness, and animations
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        title: formData.subject,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_7ibzih9',    // e.g., 'service_xxxxx'
        'template_ge6xjqi',   // e.g., 'template_xxxxx'
        templateParams,
        'dBv7B6vZZFq6gP8Xj'     // e.g., 'user_xxxxx'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error, JSON.stringify(error, Object.getOwnPropertyNames(error)));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 h-full flex flex-col border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Send a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm backdrop-blur-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm backdrop-blur-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm backdrop-blur-sm"
            required
          />
        </div>

        <div className="flex-grow">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none text-sm backdrop-blur-sm"
            required
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-600 dark:text-emerald-400 text-sm"
            >
              Message sent successfully!
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 dark:text-red-400 text-sm"
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </div>
      </form>
    </div>
  );
}