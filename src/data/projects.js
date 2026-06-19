import { assets } from './assets';

export const projects = [
  {
    id: 1,
    title: 'Lumina — SaaS Dashboard',
    description:
      'A full-featured analytics dashboard for real-time data visualization, user management, and customizable reporting.',
    image: assets.projects[0],
    // temporary internet image — replace later with local asset
    tags: ['React', 'Figma', 'Node.js'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Plantique — E-commerce UI',
    description:
      'A premium plant shop redesign focused on improving conversion rates through better UX and visual hierarchy.',
    image: assets.projects[1],
    // temporary internet image — replace later with local asset
    tags: ['Figma', 'Shopify', 'UI Design'],
    category: 'UI/UX',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Pulse — Fitness Mobile App',
    description:
      'End-to-end mobile app design for workout tracking, nutrition logging, and community challenges.',
    image: assets.projects[2],
    // temporary internet image — replace later with local asset
    tags: ['React Native', 'Figma', 'Firebase'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Archway — Portfolio Template',
    description:
      'A minimal, conversion-focused portfolio template for designers and developers. Built with Vite + React.',
    image: assets.projects[3],
    // temporary internet image — replace later with local asset
    tags: ['React', 'Tailwind', 'Vite'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];
