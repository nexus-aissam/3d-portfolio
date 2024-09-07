// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  performance,
  backend,
  integration,
  security,
  realtime,
  datamodel,
  server,
  api,
  deployment,
  javascript,
  typescript,
  express,
  agenda,
  socketio,
  nginx,
  pm2,
  nodejs,
  mongodb,
  git,
  flexiApps,
  eGed2G,
  asifFramework,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "API Development",
    icon: api,
  },
  {
    title: "Server-side Logic",
    icon: server,
  },
  {
    title: "Authentication & Security",
    icon: security,
  },
  {
    title: "Real-time Systems",
    icon: realtime,
  },
  {
    title: "Third-party Integrations",
    icon: integration,
  },
  {
    title: "Data Modeling & Management",
    icon: datamodel,
  },
  {
    title: "Deployment & DevOps",
    icon: deployment,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Socket.io",
    icon: socketio,
  },
  {
    name: "Agenda",
    icon: agenda,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "PM2",
    icon: pm2,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Backend & Front-end Developer",
    company_name: "Flexi-apps",
    icon: flexiApps, // You'll need to import or define this icon
    iconBg: "#383E56", // You can adjust this color as needed
    date: "2022 - Present",
    points: [
      "Developing and maintaining robust backend systems using Node.js, Express, and MongoDB.",
      "Creating efficient and scalable RESTful APIs to support various application features.",
      "Building responsive and intuitive admin interfaces using React Admin for efficient data management.",
      "Implementing authentication and authorization systems to ensure secure access to application resources.",
      "Collaborating with cross-functional teams to integrate backend services with front-end applications.",
      "Optimizing database queries and server-side logic for improved application performance.",
      "Participating in code reviews and contributing to the improvement of development practices.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "asif",
    description:
      "A fast and optimized backend framework built with Node.js, leveraging cutting-edge technologies to provide a robust foundation for server-side applications. asif integrates a wide array of powerful tools and libraries, including Express for routing, Socket.IO for real-time communication, Agenda for job scheduling, and more. This comprehensive framework streamlines the development of scalable, high-performance backend systems, offering out-of-the-box solutions for common server-side challenges.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "orange-text-gradient",
      },
      {
        name: "agenda",
        color: "purple-text-gradient",
      },
    ],
    image: asifFramework, // You'll need to import or define this image
    isPrivate: true,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "E-ged-2G",
    description:
      "E-ged-2G is an advanced electronic document management system, built on the robust asif framework. This comprehensive solution streamlines the organization and retrieval of electronic documentation, offering intuitive interfaces for efficient data management and analysis. Leveraging asif's powerful backend capabilities, E-ged-2G delivers high performance, scalability, and real-time features, making it an indispensable tool for modern electronic document workflows in various industries.",
    tags: [
      {
        name: "asif",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "document-management",
        color: "orange-text-gradient",
      },
      {
        name: "electronic",
        color: "purple-text-gradient",
      },
    ],
    image: eGed2G, // You'll need to import or define this image
    source_code_link: "", // Kept empty as per previous version
    live_site_link: "https://dev--2g-docs.netlify.app/",
    isPrivate: false,
  },
] as const;

export const SOCIALS = [{}] as const;
