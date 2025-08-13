'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ProjectOverlay from './ProjectOverlay';

const initialProjects = [
  {
    id: 1,
    type: 'FoodGram Web',
    name: 'Foodgram - the social media website for Recipes and chefs',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/git-back.jpg',
    imageDark: '/projects/git-back-dark.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/git-back.jpg', '/projects/git-back.jpg'],
  },
  {
    id: 1,
    type: 'KityGram Web',
    name: 'kittyGram - the social media website for Recipes and chefs',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/git-back.jpg',
    imageDark: '/projects/git-back-dark.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/git-back.jpg', '/projects/git-back.jpg', '/projects/git-back.jpg'],
  },

];

const Projects = () => {
  const [projects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="py-20 px-6"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">My recent projects</p>
        <h2 className="text-4xl font-semibold mb-12">Selected work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-black-100 dark:bg-gray-800 p-4 rounded-2xl shadow-sm hover:shadow-md transition hover:scale-[1.02]"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.imageLight}
                  alt={`${project.name} light`}
                  fill
                  style={{ objectFit: 'cover', display: 'var(--light-photo-display)' }}
                />
                <Image
                  src={project.imageDark}
                  alt={`${project.name} dark`}
                  fill
                  style={{ objectFit: 'cover', display: 'var(--dark-photo-display)' }}
                />
              </div>
              <p className="text-sm">{project.type}</p>
              <h3 className="font-semibold">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
