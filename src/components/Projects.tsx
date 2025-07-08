'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const initialProjects = [
  {
    id: 1,
    type: 'Web App',
    name: 'Portfolio Website',
    github: 'https://github.com/salahamran/portfolio',
    image: '/projects/portfolio.jpg',
  },
  {
    id: 2,
    type: 'API',
    name: 'Machine Learning API',
    github: 'https://github.com/salahamran/ml-api',
    image: '/projects/ml-api.jpg',
  },
  {
    id: 3,
    type: 'Data Tool',
    name: 'Web Scraper',
    github: 'https://github.com/salahamran/web-scraper',
    image: '/projects/scraper.jpg',
  },
  {
    id: 4,
    type: 'Mobile App',
    name: 'Revenue Tracker',
    github: 'https://github.com/salahamran/revenue-app',
    image: '/projects/revenue.jpg',
  },
];

const moreProjects = [
  {
    id: 5,
    type: 'Web App',
    name: 'Task Manager',
    github: 'https://github.com/salahamran/task-manager',
    image: '/projects/task.jpg',
  },
  {
    id: 6,
    type: 'API',
    name: 'Auth Service',
    github: 'https://github.com/salahamran/auth-service',
    image: '/projects/auth.jpg',
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setProjects([...projects, ...moreProjects]);
    setShowMore(true);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-neutral-500 mb-2">My recent projects</p>
        <h2 className="text-4xl font-semibold mb-12">Selected work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Image container */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />

                {/* Button on image */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-white text-black border border-neutral-300 px-4 py-2 rounded-full text-sm hover:shadow transition"
                >
                  view on Github →
                </a>
              </div>

              <p className="text-sm text-neutral-500">{project.type}</p>
              <h3 className="font-semibold">{project.name}</h3>
            </div>
          ))}
        </div>

        {!showMore && (
          <button
            onClick={handleShowMore}
            className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm flex items-center gap-2"
          >
            See more projects <span className="text-xl">↓</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
