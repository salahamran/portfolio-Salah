'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
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
        className="fixed inset-0 z-[200] overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-primary)',
        }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="
            fixed top-8 right-8 z-[210]
            w-9 h-9 rounded-full
            flex items-center justify-center
            hover:opacity-70 transition
          "
          style={{ backgroundColor: 'var(--card-bg)' }}
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-24 space-y-10">
          
          {/* Title */}
          <div>
            <h1 className="text-3xl font-semibold">{project.name}</h1>
            <p className="text-sm opacity-60 mt-1">{project.type}</p>
          </div>

          {/* Info Card */}
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <p className="text-sm opacity-60">2025</p>

            <p className="leading-relaxed">
              {project.description}
            </p>

            {project.tags && (
              <div className="pt-2">
                <p className="text-xs uppercase opacity-60 mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{ borderColor: 'var(--border-color)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase opacity-60">Links</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-between
                px-5 py-4 rounded-xl
                hover:opacity-80 transition
              "
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <span>GitHub</span>
              <span>→</span>
            </a>
          </div>

          {/* Screenshots */}
          {project.screenshots && (
            <div className="space-y-6">
              {project.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--card-bg)' }}
                >
                  <Image
                    src={shot}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
