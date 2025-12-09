import { Experience, Project, SkillCategory, Education, NavItem, RadarData } from './types';

export const RESUME_LINK = "https://drive.google.com/file/d/1RKhDgmBOXELsHO7yQ2L4P7ODtE-b6vQf/view?usp=sharing";
export const EMAIL = "devjariwala76@gmail.com";
export const GITHUB_URL = "https://github.com/DHJariwala";
export const LINKEDIN_URL = "https://www.linkedin.com/in/devhjariwala";

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp1',
    role: 'Software Engineer',
    company: 'New Jersey Institute of Technology, NeuroImaging Lab',
    location: 'Newark, NJ',
    period: 'Dec 2024 – Present',
    description: [
      'Developed open-source Python 4D fMRI preprocessing toolbox with full-stack GUI using CustomTkinter, showcased at OHBM 2025.',
      'Engineered MATLAB-free pipeline replicating various MATLAB functionality in Python, reducing costs by 100%.',
      'Optimized batch workflows and modularized preprocessing stages, reducing processing time by 50% on real fMRI datasets.',
      'Enhanced research reproducibility through standardized statistical methods, achieving 100% consistent outputs.'
    ]
  },
  {
    id: 'exp2',
    role: 'Data Science Intern',
    company: 'New Jersey Institute of Technology, FinTech Lab',
    location: 'Newark, NJ',
    period: 'Jan 2025 – May 2025',
    description: [
      'Improved machine learning portfolio optimization workflow, increasing risk-adjusted return prediction accuracy by 15%.',
      'Conducted model testing, validation, and reproducibility analysis on heterogeneous datasets.',
      'Curated and organized stereogram datasets across multiple patterns and images, improving training consistency by 25%.'
    ]
  },
  {
    id: 'exp3',
    role: 'Software Engineer',
    company: 'Freelance',
    location: 'India',
    period: 'May 2023 – Mar 2024',
    description: [
      'Designed and developed local tax reporting software using Python and custom database, saving 50+ hours annually.',
      'Implemented end-to-end workflows for data entry and expense categorization, reducing errors by 25%.',
      'Created intuitive user interface for non-technical users, streamlining manual calculations.'
    ]
  },
  {
    id: 'exp4',
    role: 'Web Development Intern',
    company: 'Exza Technologies',
    location: 'Surat, Gujarat, India',
    period: 'May 2022 – Jul 2022',
    description: [
      'Revamped user experience for 3 responsive web applications using HTML, CSS, and JavaScript.',
      'Engineered RESTful API integrations collaborating with designers and backend developers.',
      'Conducted rigorous code reviews and updated documentation, driving 15% improvement in team collaboration.'
    ]
  },
  {
    id: 'exp5',
    role: 'Artificial Intelligence Intern',
    company: 'Verzeo',
    location: 'Surat, Gujarat, India',
    period: 'Jun 2020 – Aug 2020',
    description: [
      'Developed machine learning models using Python, TensorFlow, and scikit-learn to detect non-mask wearers.',
      'Improved model accuracy and performance by 60% through comprehensive data preprocessing using Pandas.',
      'Collaborated with team of 8 interns to implement and test machine learning algorithms.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'K-Means Algorithm using Correlations Distance',
    description: 'Engineered an open-source Python module implementing correlation based K-Means clustering with a fully modular design. Optimized vectorized distance computation using NumPy, reducing clustering runtime by 40%.',
    techStack: ['Python', 'NumPy', 'Open Source'],
    link: 'https://github.com',
    github: 'https://github.com'
  },
  {
    id: 'proj2',
    title: 'Full-Stack Attendance Web App',
    description: 'Achieved 95% identification accuracy with one training image per student using one-shot learning. Built intuitive web application reducing administrative time by 40% for 300+ student cohorts.',
    techStack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com'
  },
  {
    id: 'proj3',
    title: 'Function-Save: Python Debugging Tool',
    description: 'Created Python package using decorators to enhance function input/output capture. Reduced debugging time by 50% in test workflows through auto-logging of returns and execution parameters.',
    techStack: ['Python', 'PyPI', 'Decorators'],
    link: 'https://pypi.org',
    github: 'https://github.com'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML', 'CSS', 'PHP']
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Flask', 'React', 'Node.js', 'Express.js']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'NiPyPe', 'SPM', 'CI/CD', 'Linux']
  }
];

export const RADAR_DATA: RadarData[] = [
  { subject: 'Python', A: 98, fullMark: 100 },
  { subject: 'ML/AI', A: 90, fullMark: 100 },
  { subject: 'Web Dev', A: 85, fullMark: 100 },
  { subject: 'Data Viz', A: 80, fullMark: 100 },
  { subject: 'SQL', A: 85, fullMark: 100 },
  { subject: 'DevOps', A: 75, fullMark: 100 },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu1',
    degree: 'Master of Science in Computer Science',
    institution: 'New Jersey Institute of Technology',
    location: 'Newark, NJ',
    year: 'Expected Dec 2025',
    details: 'GPA: 4.0/4.0'
  },
  {
    id: 'edu2',
    degree: 'Bachelor of Technology in CSE',
    institution: 'Sardar Vallabhbhai National Institute of Technology',
    location: 'Surat, Gujarat, India',
    year: 'May 2023',
    details: 'GPA: 8.47/10'
  }
];

export const CERTIFICATIONS: string[] = [
  'Improving Deep Neural Networks: Hyperparameter Tuning (Coursera)',
  'Neural Networks and Deep Learning (Coursera)',
  '2021 Complete Python Bootcamp (Udemy)'
];