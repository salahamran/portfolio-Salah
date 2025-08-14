'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectOverlayProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectOverlay({ project, onClose }: ProjectOverlayProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-white dark:bg-[#121212] text-black dark:text-white overflow-y-auto"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Back Button */}
        <div className="p-4 flex items-center">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm hover:opacity-70 transition"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back
          </button>
        </div>

        {/* Tags */}
        {project.tags && (
          <div className="flex justify-center gap-3 flex-wrap text-sm mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">{project.name}</h1>

        {/* Main Image */}
        <div className="max-w-4xl mx-auto mb-8 px-4">
          <Image
            src={project.imageLight}
            alt={project.name}
            width={1200}
            height={600}
            className="rounded-xl w-full object-cover"
            style={{ display: 'var(--light-photo-display)' }}
          />
          <Image
            src={project.imageDark}
            alt={project.name}
            width={1200}
            height={600}
            className="rounded-xl w-full object-cover"
            style={{ display: 'var(--dark-photo-display)' }}
          />
        </div>

        {/* Overview */}
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
          {project.workTime && <p><strong>Work time:</strong> {project.workTime}</p>}
          {project.role && <p><strong>My role:</strong> {project.role}</p>}
          {project.workFor && <p><strong>Work for:</strong> {project.workFor}</p>}
          {project.description && <p className="mt-3">{project.description}</p>}
        </div>

        {/* Tech stack */}
        {project.techIcons && (
          <div className="max-w-3xl mx-auto px-4 flex gap-6 justify-center py-4 bg-gray-100 dark:bg-gray-800 rounded-xl mb-8">
            {project.techIcons.map((icon, idx) => (
              <Image key={idx} src={icon} alt="tech" width={40} height={40} />
            ))}
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots && (
          <div className="max-w-5xl mx-auto px-4 flex gap-4 overflow-x-auto pb-6">
            {project.screenshots.map((shot, idx) => (
              <Image
                key={idx}
                src={shot}
                alt={`Screenshot ${idx + 1}`}
                width={300}
                height={200}
                className="rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        )}

        {/* GitHub Button */}
        <div className="text-center pb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
          >
            View on GitHub →
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
