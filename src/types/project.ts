// src/types/project.ts
export interface Project {
    id: number;
    type: string;
    name: string;
    github: string;
    imageLight: string;
    imageDark: string;
    tags?: string[];
    workTime?: string;
    role?: string;
    workFor?: string;
    description?: string;
    techIcons?: string[];
    screenshots?: string[];
  }
  