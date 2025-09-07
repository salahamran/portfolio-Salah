'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ProjectOverlay from './ProjectOverlay';
import { Project } from '@/types/project';

const projectsData: Project[] = [
  
  {
    id: 1,
    type: 'FoodGram Web',
    name: 'Foodgram - the social media website for Recipes and chefs',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/portfolio.jpg',
    imageDark: '/projects/git-back-dark.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/foodgram-recipe.png', '/projects/foodgram-register.png'],
  },
  {
    id: 2,
    type: 'soon to be added',
    name: 'SOON -',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/scraper.jpg',
    imageDark: '/projects/scraper.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/foodgram-recipe.png', '/projects/foodgram-register.png'],
  },
  {
    id: 3,
    type: 'soon to be added',
    name: 'SOON -',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/scraper.jpg',
    imageDark: '/projects/scraper.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/foodgram-recipe.png', '/projects/foodgram-register.png'],
  },
  {
    id: 4,
    type: 'soon to be added',
    name: 'SOON -',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/scraper.jpg',
    imageDark: '/projects/scraper.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/foodgram-recipe.png', '/projects/foodgram-register.png'],
  },
  {
    id: 5,
    type: 'soon to be added',
    name: 'SOON -',
    github: 'https://github.com/salahamran/',
    imageLight: '/projects/scraper.jpg',
    imageDark: '/projects/scraper.jpg',
    tags: ['Python', 'Django', 'API'],
    workTime: '5 weeks',
    role: 'Backend',
    workFor: 'Yandex Practicum',
    description:
      'This project was made as a social media platform for people to publish and show their recipes and for the public to find recipes to cook.',
    techIcons: ['/icons/django.svg', '/icons/github.svg', '/icons/docker.svg', '/icons/python.svg'],
    screenshots: ['/projects/foodgram-recipe.png', '/projects/foodgram-register.png'],
  },
];

const moreProjects = [
  {
    id: 5,
    type: 'Web App',
    name: 'Task Manager',
    github: 'https://github.com/salahamran/task-manager',
    imageLight: '/projects/git-back.jpg',
    imageDark: '/projects/git-back-dark.jpg',
  },
  {
    id: 6,
    type: 'API',
    name: 'Auth Service',
    github: 'https://github.com/salahamran/auth-service',
    imageLight: '/projects/git-back.jpg',
    imageDark: '/projects/git-back-dark.jpg',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState(projectsData);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setProjects([...projects, ...moreProjects]);
    setShowMore(true);
  };
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
          {projectsData.map((project) => (
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
              {!showMore && (
          <button
            onClick={handleShowMore}
            className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 mx-auto"
            style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-button)' }}
          >
            See more projects <span className="text-xl">↓</span>
          </button>
        )}

      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
