import JourneyGallery from '@/components/JourneyGallery';
import Navigation from '@/components/Navigation';

const galleryImages = [
  {
    src: '/journey-images/webp/journey-1.webp',
    alt: "Academic Journey",
    description: "My educational path and academic achievements"
  },
  {
    src: '/journey-images/webp/journey-2.webp',
    alt: "Professional Growth",
    description: "Key milestones in my professional development"
  },
  {
    src: '/journey-images/webp/journey-3.webp',
    alt: "Current Role",
    description: "My current position and ongoing contributions"
  },
  {
    src: '/journey-images/webp/journey-4.webp',
    alt: "Professional Experience",
    description: "Working on cloud and DevOps projects"
  },
  {
    src: '/journey-images/webp/journey-5.webp',
    alt: "Team Collaboration",
    description: "Collaborating with cross-functional teams"
  },
  {
    src: '/journey-images/webp/journey-6.webp',
    alt: "Technical Projects",
    description: "Implementing innovative solutions"
  },
  {
    src: '/journey-images/webp/journey-7.webp',
    alt: "Learning Journey",
    description: "Continuous learning and growth"
  },
  {
    src: '/journey-images/webp/journey-8.webp',
    alt: "Industry Events",
    description: "Participating in tech conferences and meetups"
  },
  {
    src: '/journey-images/webp/journey-9.webp',
    alt: "Community Engagement",
    description: "Contributing to the tech community"
  },
  {
    src: '/journey-images/webp/journey-10.webp',
    alt: "Future Goals",
    description: "Looking forward to new challenges"
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Journey Gallery
        </h1>
        {galleryImages.length > 0 ? (
          <JourneyGallery images={galleryImages} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No images have been added to the gallery yet.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Please add your journey images to the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">public/journey-images</code> folder.
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 