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
  visual?: ProjectVisualType;
  // Detail page fields
  role?: string;
  duration?: string;
  highlights?: string[];
  overview?: string;
};

export type ProjectVisualType = "portal" | "microfrontends" | "banking" | "analytics";

export const projects: Project[] = [
  {
    slug: "maroc-telecom-rebranding-2025",
    title: "Maroc Telecom Rebranding 2025",
    shortDescription: "High-traffic telecom portal with a 340% Lighthouse performance improvement",
    description:
      "Rebuilding the Maroc Telecom digital presence with a fresh, modern design that reflects their brand evolution. The project involved creating a responsive website with enhanced user experience, integrating new branding elements, and ensuring consistency across all digital touchpoints.",
    overview:
      "Contributed to the redesign of iam.ma, a high-traffic telecom portal serving 30M+ monthly visitors. Built responsive React components and Liferay templates while coordinating REST API integrations with CMS and backend teams.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    tags: ["Liferay", "React", "JSP", "Java"],
    year: "2025",
    role: "Lead Frontend Developer",
    duration: "2022 - 2025",
    highlights: [
      "Improved Lighthouse performance by 340%",
      "Integrated 50+ REST APIs across portal experiences",
      "Built reusable, responsive React components and Liferay templates",
      "Coordinated data flows with CMS and backend teams",
      "Supported a portal serving 30M+ monthly visitors",
    ],
    liveUrl: "https://www.iam.ma",
    featured: true,
    visual: "portal",
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
      "Fully responsive, with graceful fallback on low-end devices",
    ],
    liveUrl: "https://landing-page-mt.vercel.app",
    featured: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "High-performance commerce platform with secure payments and inventory management",
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
    shortDescription: "Cross-platform social application with realtime messaging and content sharing",
    description:
      "Created a social media application with real-time messaging, user profiles, and content sharing features using React Native and Firebase.",
    overview:
      "A cross-platform mobile social network built with React Native and a GraphQL + Firebase backend. The app supports real-time chat, a content feed, user discovery, and push notifications.",
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
    slug: "atib-bank-liferay-redesign",
    title: "ATIB Bank Portal Redesign",
    shortDescription: "Banking portal integration with Liferay and a Spring Boot synchronization service",
    description:
      "Led the technical implementation of the ATIB.LY redesign, combining Liferay portal extensions with a Spring Boot integration service for third-party financial data.",
    overview:
      "Served as the lead technical contact for the banking portal redesign, coordinating with stakeholders and business analysts. Built the synchronization microservice and delivered Liferay extensions, themes, and Content Security Policy configuration.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    tags: ["Java", "Spring Boot", "Liferay DXP", "REST APIs"],
    year: "2026",
    role: "Java / Liferay Developer",
    highlights: [
      "Acted as the lead technical contact for the ATIB.LY redesign",
      "Built a Spring Boot service to synchronize third-party financial data",
      "Delivered Liferay extensions and portal themes",
      "Configured Content Security Policy requirements",
    ],
    visual: "banking",
  },
  {
    slug: "orange-max-it",
    title: "Maxit Orange Control Tower",
    shortDescription: "Modular Nuxt.js back office designed for independent team releases",
    description:
      "Built a responsive back-office platform for the Maxit Orange Control Tower using Nuxt.js and Vue.js, with clearly defined business and integration boundaries.",
    overview:
      "The platform uses Domain-Driven Design and a micro-frontend architecture so multiple teams can develop and release modules independently while preserving a coherent operator experience.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    tags: ["Nuxt.js", "Vue.js", "TypeScript", "Micro-frontends"],
    year: "2025",
    role: "Front-End Developer",
    highlights: [
      "Built a responsive back-office platform with Nuxt.js and Vue.js",
      "Applied Domain-Driven Design to organize business capabilities",
      "Defined integration boundaries with business analysts",
      "Designed a micro-frontend architecture for modular releases",
    ],
    visual: "microfrontends",
  },
  {
    slug: "embedded-bi-dashboard",
    title: "Embedded BI Dashboard",
    shortDescription: "Responsive KPI monitoring embedded through the Qlik Sense Mashup API",
    description:
      "Integrated Qlik Sense visualizations into a responsive web interface to make business KPIs easier to monitor and explore.",
    overview:
      "An embedded analytics experience built with the Qlik Sense Mashup API. Responsive layouts and interactive filters help business users move from headline indicators to detailed analysis without leaving the application.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80",
    tags: ["Qlik Sense", "Mashup API", "JavaScript", "Responsive UI"],
    year: "2022 - 2025",
    role: "Front-End Developer - BI Dashboard",
    highlights: [
      "Embedded Qlik Sense visualizations through the Mashup API",
      "Designed responsive dashboard layouts",
      "Added interactive filters for business analysis",
      "Simplified KPI monitoring inside the web application",
    ],
    visual: "analytics",
  },
];
