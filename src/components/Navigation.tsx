'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

const navigation = [
  { name: 'About', href: '#about', icon: UserCircleIcon },
  { name: 'Certifications', href: '#certifications', icon: DocumentCheckIcon },
  { name: 'Experience', href: '/#resume', icon: BuildingOfficeIcon },
  { name: 'Projects', href: '#projects', icon: BriefcaseIcon },
  { name: 'Skills', href: '#skills', icon: CodeBracketIcon },
  { name: 'Gallery', href: '/gallery', icon: PhotoIcon },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <nav className={`fixed left-0 top-0 h-full w-16 bg-white/80 backdrop-blur-md border-r border-gray-200 z-[100] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="flex flex-col h-full py-6">
        <div className="mb-6">
          <Link 
            href="/"
            className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100"
          >
            <HomeIcon className="w-6 h-6 text-gray-600" />
          </Link>
        </div>

        <ul className="space-y-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="relative group">
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                  >
                    <Icon className="w-6 h-6 text-gray-600" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                  >
                    <Icon className="w-6 h-6 text-gray-600" />
                  </Link>
                )}
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto">
          <div className="h-px bg-gray-200 mb-3"></div>
          <p className="text-xs text-gray-500 text-center">© 2025</p>
        </div>
      </div>
    </nav>
  );
}