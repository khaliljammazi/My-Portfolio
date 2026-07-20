// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  // Detail page fields
  role?: string;
  duration?: string;
  highlights?: string[];
  overview?: string;
};

export const projects: Project[] = [
  {
    slug: "maroc-telecom-rebranding-2025",
    title: "Maroc Telecom Rebranding 2025",
    shortDescription: "Dashboard analytics temps réel – +340 % perf",
    description:
      "Rebuilding the Maroc Telecom digital presence with a fresh, modern design that reflects their brand evolution. The project involved creating a responsive website with enhanced user experience, integrating new branding elements, and ensuring consistency across all digital touchpoints.",
    overview:
      "Led the full frontend rebuild of iam.ma — one of Morocco's largest telecom websites with 30M+ monthly visitors. The project required migrating a legacy portal to a modern Liferay DXP + React architecture while maintaining zero downtime and preserving SEO rankings.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    tags: ["Liferay", "React", "JSP", "Java"],
    year: "2025",
    role: "Lead Frontend Developer",
    duration: "6 months",
    highlights: [
      "+340% performance improvement after migration to React components",
      "Rebuilt 50+ page templates with fully responsive layouts",
      "Integrated Liferay DXP CMS for content management at scale",
      "Coordinated with UX team to roll out new brand identity system",
      "30M+ monthly visitors with zero downtime during the transition",
    ],
    liveUrl: "https://www.iam.ma",
    featured: true,
  },
  {
    slug: "threejs-3d-landing-page",
    title: "Three.js 3D Landing Page",
    shortDescription: "Landing page 3D interactive of iphone 17 pro max",
    description:
      "Developed an interactive 3D landing page using Three.js to showcase the features of the iPhone 17 Pro Max. The page includes smooth animations, responsive design, and engaging user interactions to enhance the overall user experience.",
    overview:
      "A visually immersive product showcase built entirely in Three.js and vanilla JavaScript. The 3D iPhone model responds to scroll events, camera transitions highlight each product feature, and WebGL shaders create realistic glass and metal materials.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&q=80",
    tags: ["Three.js", "JavaScript", "WebGL", "GSAP"],
    year: "2024",
    role: "Frontend & 3D Developer",
    duration: "2 weeks",
    highlights: [
      "Real-time 3D iPhone 17 Pro Max model with PBR materials",
      "Scroll-driven camera animations using GSAP ScrollTrigger",
      "WebGL shaders for realistic metal and glass reflections",
      "95+ Lighthouse performance score on Vercel",
      "Fully responsive — degrades gracefully on low-end devices",
    ],
    liveUrl: "https://landing-page-mt.vercel.app",
    featured: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Plateforme e-commerce haute performance – +250 % conversion",
    description:
      "Developed a scalable e-commerce platform using Next.js and Node.js, featuring a seamless shopping experience, secure payment integration, and advanced product management capabilities.",
    overview:
      "A full-stack e-commerce solution built from the ground up with a focus on conversion rate optimization, performance, and scalability. Features a clean storefront, real-time inventory, Stripe checkout, and a powerful admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    year: "2023",
    role: "Full-Stack Developer",
    duration: "3 months",
    highlights: [
      "+250% conversion rate increase vs. the legacy platform",
      "Secure Stripe payment integration with webhook event handling",
      "Real-time inventory management and low-stock alerts",
      "Admin dashboard with sales analytics and order management",
      "SSG + ISR for sub-second page loads on product listings",
    ],
  },
  {
    slug: "social-media-app",
    title: "Social Media App",
    shortDescription: "Application sociale innovante – +500K utilisateurs actifs",
    description:
      "Created a social media application with real-time messaging, user profiles, and content sharing features using React Native and Firebase.",
    overview:
      "A cross-platform mobile social network built with React Native and a GraphQL + Firebase backend. The app supports real-time chat, a content feed, user discovery, and push notifications — scaled to handle 500K+ active users.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
    tags: ["React Native", "Firebase", "GraphQL", "Expo"],
    year: "2024",
    role: "Full-Stack Mobile Developer",
    duration: "4 months",
    highlights: [
      "500K+ active users at peak with Firebase Realtime Database",
      "GraphQL API layer reducing over-fetching by 60%",
      "Real-time messaging with typing indicators and read receipts",
      "Push notifications via Expo Notifications",
      "Automated content moderation pipeline using Cloud Functions",
    ],
  },
  {
    slug: "omniflow",
    title: "Omniflow",
    shortDescription: "Enterprise workflow automation platform",
    description:
      "Omniflow is an enterprise-grade workflow automation platform that streamlines business processes through intelligent task management and seamless integrations.",
    overview:
      "A comprehensive workflow automation solution built to handle complex enterprise processes. Features drag-and-drop workflow builder, real-time collaboration, and extensive third-party integrations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Redis"],
    year: "2024",
    role: "Full-Stack Developer",
    duration: "8 months",
    highlights: [
      "Built visual workflow designer with drag-and-drop interface",
      "Implemented real-time collaboration features using WebSockets",
      "Integrated with 20+ third-party services (Slack, Jira, etc.)",
      "Reduced process completion time by 65% for enterprise clients",
    ],
    featured: true,
  },
  {
    slug: "orange-dynamic-bff",
    title: "Orange - Dynamic BFF",
    shortDescription: "Backend For Frontend architecture for Orange telecom",
    description:
      "Designed and implemented a dynamic Backend For Frontend (BFF) layer for Orange's digital ecosystem, optimizing API responses for various client applications.",
    overview:
      "A scalable BFF architecture that serves as an intelligent middleware between Orange's microservices and frontend applications. Handles request aggregation, response transformation, and client-specific optimizations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    tags: ["Node.js", "GraphQL", "Redis", "Docker"],
    year: "2023",
    role: "Backend Developer",
    duration: "6 months",
    highlights: [
      "Reduced API response times by 40% through intelligent caching",
      "Built GraphQL layer aggregating 15+ microservices",
      "Implemented client-specific response transformations",
      "Served 2M+ daily active users across mobile and web platforms",
    ],
    liveUrl: "https://www.orange.com",
  },
  {
    slug: "orange-max-it",
    title: "Orange - Max it",
    shortDescription: "Super app mobile experience for Orange customers",
    description:
      "Max it is Orange's flagship super app, providing customers with a unified mobile experience for managing services, payments, and digital content.",
    overview:
      "Contributed to the development of Orange's super app that consolidates multiple services into a single mobile experience. Features include bill payments, service management, entertainment, and loyalty rewards.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    year: "2023",
    role: "Mobile Developer",
    duration: "10 months",
    highlights: [
      "Developed core payment module handling 1M+ monthly transactions",
      "Implemented push notification system with 95% delivery rate",
      "Built offline-first architecture for low connectivity regions",
      "Achieved 4.5+ star rating on App Store and Play Store",
    ],
  },
  {
    slug: "royal-air-maroc-ram",
    title: "Royal Air Maroc - RAM",
    shortDescription: "Analytics dashboard with custom visualizations",
    description:
      "Led the development of custom responsive dashboards for Royal Air Maroc using Qlik Sense, featuring advanced D3.js visualizations and export capabilities.",
    overview:
      "A comprehensive business intelligence solution for Royal Air Maroc featuring real-time analytics, custom chart extensions, and multi-format export capabilities. The project involved leading a team and ensuring delivery quality.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80",
    tags: ["Qlik Sense", "D3.js", "JavaScript", "Bootstrap"],
    year: "2022",
    role: "Team Lead & Developer",
    duration: "5 months",
    highlights: [
      "Led a team of 3 developers ensuring quality deliverables",
      "Developed custom responsive dashboards and chart extensions",
      "Built D3.js visualizations for complex data representation",
      "Created export functionality for PDF, PNG, DOC, and XLS formats",
    ],
    liveUrl: "https://www.royalairmaroc.com",
  },
];
