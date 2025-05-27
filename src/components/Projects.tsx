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
];

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => (
  <div className="project-card">
    <div className="project-card-header">
      <h3 className="project-card-title">{title}</h3>
    </div>
    <div className="project-card-body">
      <p className="project-card-description">{description}</p>
      <div className="project-card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">
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
  </div>
);

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section">
{/* Spline Background */}

      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center gap-2">
        </div>
        <h2 className="section-title">Recent Projects</h2>
        <h2 className="section-title-small">Check on Github</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
