export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  details: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface RadarData {
  subject: string;
  A: number;
  fullMark: number;
}