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

// Enhanced Experiences - Complete Professional Journey
export const EXPERIENCES = [
  {
    title: "Project Controller & Backend Developer",
    company_name: "FlexiApps",
    icon: flexiApps,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    location: "Rabat, Morocco",
    points: [
      "Leading supervision and quality control of 15+ diverse web and mobile projects, ensuring delivery excellence and client satisfaction.",
      "Coordinating and distributing tasks within the development team, optimizing workflow efficiency and resource allocation.",
      "Implementing rigorous project milestone tracking to guarantee adherence to client deadlines and project specifications.",
      "Managing direct client communication for project presentations, deliveries, and requirement gathering sessions.",
      "Establishing quality assurance protocols and conducting technical validation of deliverables before production deployment.",
      "Providing comprehensive maintenance and technical support for projects post-launch, ensuring continued system reliability.",
      "Overseeing updates, bug fixes, and post-delivery feature enhancements while maintaining system stability.",
      "Managing development priorities and optimizing team processes to improve overall development efficiency and code quality.",
    ],
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Project Management", "Team Leadership", 
      "Client Relations", "Quality Assurance", "DevOps"
    ]
  },
  {
    title: "Backend Developer Node.js",
    company_name: "FlexiApps",
    icon: flexiApps,
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2024",
    location: "Rabat, Morocco",
    points: [
      "Developed robust backend architectures using Node.js, Express.js, and MongoDB for 10+ diverse applications ranging from e-commerce to mobile platforms.",
      "Designed and implemented high-performance RESTful APIs with JWT/Session authentication and comprehensive authorization management systems.",
      "Integrated real-time functionality using Socket.io for chat applications, live notifications, and dynamic content updates.",
      "Collaborated closely with frontend teams for seamless integration of React, Next.js, and React Admin interfaces.",
      "Optimized application performance through MongoDB indexing, Redis caching implementation, and complex query optimization strategies.",
      "Applied industry best practices including modular architecture, centralized validation systems, and structured logging for maintainable codebases.",
      "Contributed to end-to-end solution development for e-commerce platforms, management systems, and mobile applications with real-time features.",
      "Implemented comprehensive unit testing frameworks to ensure code quality, reliability, and maintainability across all projects.",
    ],
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Redis", 
      "React Admin", "REST APIs", "Unit Testing", "Performance Optimization"
    ]
  }
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Aissam's technical expertise and leadership skills have been instrumental in delivering high-quality projects on time. His ability to manage both technical and client aspects is exceptional.",
    name: "Sarah Johnson",
    designation: "Project Manager",
    company: "TechVision Inc",
    image: user1,
  },
  {
    testimonial:
      "Working with Aissam has been a great experience. His backend solutions are robust, scalable, and always exceed expectations. A true professional.",
    name: "Ahmed Benali",
    designation: "CTO",
    company: "DigitalMorocco",
    image: user2,
  },
  {
    testimonial:
      "Aissam's deep understanding of Node.js and MongoDB helped us optimize our application performance by 40%. His architectural decisions are always sound.",
    name: "Lisa Chen",
    designation: "Lead Developer",
    company: "InnovateHub",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "ASIF Framework",
    description:
      "A fast and optimized backend framework built with Node.js, leveraging cutting-edge technologies to provide a robust foundation for server-side applications. ASIF integrates a wide array of powerful tools and libraries, including Express for routing, Socket.IO for real-time communication, Agenda for job scheduling, and more. This comprehensive framework streamlines the development of scalable, high-performance backend systems, offering out-of-the-box solutions for common server-side challenges.",
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
      {
        name: "microservices",
        color: "blue-text-gradient",
      },
    ],
    image: asifFramework,
    isPrivate: true,
    source_code_link: "https://github.com/nexus-aissam",
    live_site_link: "",
  },
  {
    name: "E-ged-2G",
    description:
      "E-ged-2G is an advanced electronic document management system, built on the robust ASIF framework. This comprehensive solution streamlines the organization and retrieval of electronic documentation, offering intuitive interfaces for efficient data management and analysis. Leveraging ASIF's powerful backend capabilities, E-ged-2G delivers high performance, scalability, and real-time features, making it an indispensable tool for modern electronic document workflows in various industries.",
    tags: [
      {
        name: "asif-framework",
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
        name: "real-time",
        color: "purple-text-gradient",
      },
    ],
    image: eGed2G,
    source_code_link: "",
    live_site_link: "https://dev--2g-docs.netlify.app/",
    isPrivate: false,
  },
] as const;

// Social Links
export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/nexus-aissam",
    icon: github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aissam-irhir/",
    icon: linkedin,
  },
] as const;