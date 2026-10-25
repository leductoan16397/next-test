export type NavLink = { href: string; label: string };

export type SkillGroup = { title: string; ns: string; items: string[]; wide?: boolean };

export type Job = {
  hash: string;
  title: string;
  company: string;
  period: string;
  refs?: { label: string; kind: 'branch' | 'tag' }[];
  current?: boolean;
  highlights: string[];
};

export type Project = {
  slug: string;
  name: string;
  company: string;
  team: number;
  role: string;
  featured?: boolean;
  desc: string;
  tech: string[];
  resp: string[];
};

export const profile = {
  name: 'Le Duc Toan',
  firstLine: 'Le Duc',
  lastName: 'Toan',
  title: 'Technical Leader',
  company: 'Faboshop',
  location: 'Ho Chi Minh City, VN',
  email: 'leductoan16397@gmail.com',
  phone: '0988 686 491',
  phoneHref: 'tel:+84988686491',
  careerStart: '2019-11-01',
  lead:
    'Software engineer who thinks in systems. I design architecture, wire up cloud infrastructure, and lead teams that ship scalable products — from monolith to microservices, from git init to production.',
};

export const roles = [
  'Technical Leader',
  'Backend Engineer',
  'Cloud & DevOps',
  'System Designer',
  'Microservices Architect',
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'about' },
  { href: '#stack', label: 'stack' },
  { href: '#architecture', label: 'architecture' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

export const principles = [
  { title: 'Architecture first', text: 'design for scale, failure and change.' },
  { title: 'End-to-end ownership', text: 'infra, CI/CD, services, UI.' },
  { title: 'Learn in public', text: 'share problems, collect feedback, grow the team.' },
];

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', ns: 'ns/lang', items: ['TypeScript', 'JavaScript'] },
  {
    title: 'Backend & Architecture',
    ns: 'ns/backend',
    wide: true,
    items: ['Node.js', 'NestJS', 'Express', 'Microservices', 'Nx monorepo', 'Serverless', 'Guards / Pipes / Filters'],
  },
  { title: 'APIs & Protocols', ns: 'ns/api', items: ['REST', 'GraphQL', 'gRPC', 'JWT'] },
  {
    title: 'Cloud & Infrastructure',
    ns: 'ns/cloud',
    wide: true,
    items: ['AWS ECS', 'SQS', 'Lambda', 'CloudWatch', 'EC2', 'DocumentDB', 'Docker', 'Kubernetes', 'Terraform'],
  },
  { title: 'Data', ns: 'ns/data', items: ['MongoDB', 'Redis', 'TypeORM', 'Prisma'] },
  { title: 'Frontend', ns: 'ns/web', items: ['ReactJS', 'Next.js'] },
  {
    title: 'CI/CD & Quality',
    ns: 'ns/ci',
    items: ['GitHub Actions', 'GitLab CI', 'Unit tests', 'ESLint', 'Prettier', 'Husky'],
  },
  { title: 'Integrations', ns: 'ns/3rd-party', items: ['Stripe', 'SendGrid', 'Firebase', 'Selenium'] },
];

export const jobs: Job[] = [
  {
    hash: 'f4b0c24',
    title: 'Technical Leader',
    company: 'Faboshop',
    period: 'Jun 2024 — present',
    refs: [{ label: 'HEAD → main', kind: 'branch' }],
    current: true,
    highlights: [
      'Analyze and design the system infrastructure',
      "Refactor infrastructure and define the team's development workflow",
      'Plan and assign tasks across the engineering team',
      'Develop new features hands-on',
    ],
  },
  {
    hash: '7e11fa9',
    title: 'Technical Leader',
    company: 'TeeFi',
    period: 'Feb 2023 — Apr 2024',
    refs: [{ label: 'tag: tech-lead', kind: 'tag' }],
    highlights: [
      'Led the migration from a monolith to microservices (Nx, NestJS, gRPC, GraphQL)',
      'Designed AWS infrastructure (ECS, SQS, Lambda, DocumentDB) as code with Terraform',
      'Designed CI/CD on GitHub Actions; selected and managed the tech stack',
      'Assigned tasks and delivered backend services, CMS and integrations',
    ],
  },
  {
    hash: '3c9d2e1',
    title: 'Backend Developer',
    company: 'Pascal Studio',
    period: 'Jul 2022 — Feb 2023',
    highlights: [
      'Built a shared database-connection library used across all repositories',
      'Bootstrapped repo standards: unit tests, Husky, ESLint, Prettier',
      'Refactored legacy services; reviewed code',
    ],
  },
  {
    hash: 'a51b7f0',
    title: 'Full-stack Developer',
    company: 'CMC Global',
    period: 'Jan 2021 — Jul 2022',
    highlights: [
      'Delivered 6 projects across fintech (BNPL), social, ERP, attendance and test automation',
      'Owned several projects solo: Docker environments, DB design, APIs and CMS',
    ],
  },
  {
    hash: '0d3e8b2',
    title: 'Web Developer',
    company: 'Devinition',
    period: 'Nov 2019 — Dec 2020',
    refs: [{ label: 'tag: v1.0.0', kind: 'tag' }],
    highlights: ['First professional role — maintained existing features and shipped new ones'],
  },
];

export const projects: Project[] = [
  {
    slug: 'teefi',
    name: 'TeeFi Platform',
    company: 'TeeFi',
    team: 6,
    role: 'Technical Leader',
    featured: true,
    desc: 'Financial-education platform for children through animated videos, games and quizzes — rebuilt from a monolith into event-driven microservices on AWS.',
    tech: ['Microservices', 'Nx', 'NestJS', 'Next.js', 'ReactJS', 'MongoDB', 'DocumentDB', 'AWS ECS', 'SQS', 'Lambda', 'CloudWatch', 'Docker', 'Redis', 'gRPC', 'GraphQL', 'Stripe', 'SendGrid', 'Firebase', 'GitHub Actions', 'Terraform'],
    resp: [
      'Migrated the system from monolith to microservices',
      'Analyzed and designed the infrastructure',
      'Analyzed, selected and managed services & technologies',
      'Designed CI/CD pipelines',
      'Configured new repos (ESLint, Prettier, CI/CD…)',
      'Developed backend services and the CMS',
      'Integrated Stripe, SendGrid, Firebase…',
      'Analyzed, developed and tested new features',
      'Assigned tasks to team members',
    ],
  },
  {
    slug: 'console',
    name: 'Console',
    company: 'Pascal Studio',
    team: 6,
    role: 'Backend Developer',
    desc: 'Serverless pipeline summarizing, calculating and synchronizing order events from carriers.',
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'AWS Lambda', 'Serverless'],
    resp: [
      'Built a shared DB-connection library for all repositories',
      'Refactored legacy repositories',
      'Configured new repos (unit tests, Husky, ESLint, Prettier…)',
      'Maintained and implemented features',
      'Code review',
    ],
  },
  {
    slug: 'setel-bnpl',
    name: 'Setel — BNPL',
    company: 'CMC Global',
    team: 4,
    role: 'Full-stack Developer',
    desc: 'Buy-first-pay-later module: pre-purchase and pay in monthly installments. Admin portal, backend and mobile web view.',
    tech: ['Node.js', 'NestJS', 'ReactJS', 'Next.js', 'Prisma'],
    resp: [
      'Developed the admin portal',
      'Supported backend design: configuration, validation, serialization, exception filters, Prisma',
      'Developed the mobile web view',
      'Wrote unit tests',
    ],
  },
  {
    slug: 'gemuni',
    name: 'GemUni Social',
    company: 'CMC Global',
    team: 6,
    role: 'Full-stack Developer',
    desc: 'Social network platform for gamers.',
    tech: ['Node.js', 'Express', 'Next.js', 'MongoDB'],
    resp: ['Frontend and backend development', 'Analyzed and designed the database schema', 'Code review'],
  },
  {
    slug: 'apptester',
    name: 'Apptester — IBM BPM',
    company: 'CMC Global',
    team: 4,
    role: 'Full-stack Developer',
    desc: 'Automated testing for IBM BPM: validates processes, services and human services; plans tests, scenarios and suites.',
    tech: ['Node.js', 'MongoDB', 'Docker', 'Selenium', 'IBM BPM REST API'],
    resp: ['Restructured functions', 'Optimized queries', 'Root-caused and fixed bugs', 'Designed solutions for new functions'],
  },
  {
    slug: 'hongda-attendance',
    name: 'Hong Da Attendance',
    company: 'CMC Global',
    team: 1,
    role: 'Full-stack Developer',
    desc: 'Time-attendance system recording worker entry/exit via code scanning. Mobile backend + CMS, built solo.',
    tech: ['Node.js', 'NestJS', 'JWT', 'MongoDB', 'Docker', 'AWS', 'ReactJS'],
    resp: [
      'Designed Docker for dev & test environments',
      'Configured the test environment',
      'Designed DB models, routers, APIs, Guards, Pipes, Controllers',
      'Developed the CMS',
    ],
  },
  {
    slug: 'vtc-ero',
    name: 'VTC-ERO',
    company: 'CMC Global',
    team: 1,
    role: 'Full-stack Developer',
    desc: 'Information system managing content and pushing notifications to a mobile app. Built solo.',
    tech: ['Node.js', 'MongoDB', 'Docker', 'AWS EC2'],
    resp: [
      'Designed Docker for dev & test environments',
      'Configured the test environment',
      'Designed DB models, routers, APIs, middlewares, controllers',
      'Frontend development',
    ],
  },
  {
    slug: 'waterland-erp',
    name: 'Waterland ERP',
    company: 'CMC Global',
    team: 1,
    role: 'Backend Developer',
    desc: 'Mobile data-upload module of an ERP system. Built solo.',
    tech: ['Node.js', 'MongoDB', 'Docker', 'AWS EC2'],
    resp: [
      'Designed Docker for dev & test environments',
      'Configured the test environment',
      'Designed DB models, routers, APIs, middlewares, controllers',
    ],
  },
];

export const education = {
  school: 'HCMC University of Technology and Education',
  degree: 'B.Eng. Information Technology · GPA 7.0',
  period: '2015.08 → 2019.12',
};
