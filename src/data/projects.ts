// src/data/projects.ts
export interface Project {
    id: string;
    type: string;
    name: string;
    description: string;
    imageLight: string;
    imageDark: string;
  }
  
  export const projects: Project[] = [
    {
      id: 'portfolio',
      type: 'Web App',
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.',
      imageLight: '/projects/git-back.jpg',
      imageDark: '/projects/git-back-dark.jpg',
    },
    {
      id: 'ml-api',
      type: 'API',
      name: 'Machine Learning API',
      description: 'A REST API for ML models with FastAPI.',
      imageLight: '/projects/git-back.jpg',
      imageDark: '/projects/git-back-dark.jpg',
    },
    {
      id: 'web-scraper',
      type: 'Data Tool',
      name: 'Web Scraper',
      description: 'A Python-based web scraper with data export to CSV/JSON.',
      imageLight: '/projects/git-back.jpg',
      imageDark: '/projects/git-back-dark.jpg',
    },
  ];
  