import React from 'react';

const projects = [
  {
    title: 'Web Scraping Tool',
    description:
      'A tool that scrapes data from websites and stores it in a structured format using BeautifulSoup and Scrapy.',
    tags: ['Python', 'BeautifulSoup', 'Scrapy', 'MongoDB'],
  },
  {
    title: 'Machine Learning API',
    description:
      'A RESTful API built with FastAPI that provides machine learning predictions for time series data.',
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'Docker'],
  },
  {
    title: 'Boost Your Revenue PRO',
    description:
      'Unlock new revenue streams with data-driven strategies and marketing.',
    tags: ['Python', 'Data Analysis', 'Marketing', 'Revenue'],
  },
  // Add more project objects here
];

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
  }
  

const ProjectCard = ({title, description, tags} ProjectCardProps) => (
  <div className="project-card bg-white shadow-lg rounded-xl p-6">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
    <button className="project-card-button">
      <svg
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      Code
    </button>
  </div>
);

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="text-sm font-semibold text-black">GITHUB</span>
        </div>
        <h2 className="text-3xl font-bold mb-10">Recent Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
