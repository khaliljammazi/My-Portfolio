// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  imageFit?: "cover" | "contain";
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
      "Worked full stack on the Maroc Telecom digital redesign, delivering responsive customer experiences, Liferay components, Java integrations, and REST API connections across the high-traffic portal.",
    overview:
      "Contributed as a full-stack developer to the redesign of iam.ma, a portal serving 30M+ monthly visitors. The work covered React interfaces, Liferay DXP templates and extensions, Java/JSP development, and integration of more than 50 REST APIs with CMS and backend services.",
    image: "/projects/maroc-telecom-homepage.png",
    imageFit: "contain",
    tags: ["Liferay", "React", "JSP", "Java"],
    year: "2025",
    role: "Full-Stack Developer",
    duration: "2022 - 2025",
    highlights: [
      "Improved Lighthouse performance by 340%",
      "Integrated 50+ REST APIs across portal experiences",
      "Built reusable React components, Liferay templates, and Java/JSP integrations",
      "Connected frontend experiences with CMS, backend services, and REST APIs",
      "Supported a portal serving 30M+ monthly visitors",
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
    image: "/projects/threejs-iphone-17-landing.png",
    imageFit: "contain",
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
    title: "Omniflow CX - Maxit Orange",
    shortDescription: "All-in-one digital platform supporting Maxit Orange's move toward the Super App model",
    description:
      "Omniflow CX is Keyrus's all-in-one digital platform and a gateway to the Super App model. I contributed to its implementation for Maxit Orange, helping deliver the responsive Control Tower experience used to operate the ecosystem.",
    overview:
      "The Omniflow CX platform brings marketplace services, subscriptions, digital content, contextual recommendations, and partner capabilities into a unified ecosystem. For Maxit Orange, I worked on the Nuxt.js and Vue.js Control Tower back office, defining business integration boundaries and supporting a modular micro-frontend architecture.",
    image: "/projects/omniflow-cx-homepage.png",
    imageFit: "contain",
    tags: ["Nuxt.js", "Vue.js", "TypeScript", "Micro-frontends"],
    year: "2025",
    role: "Developer - Maxit Orange Super App",
    highlights: [
      "Contributed to the Omniflow CX implementation for Maxit Orange",
      "Built responsive Control Tower features with Nuxt.js and Vue.js",
      "Defined integration boundaries using Domain-Driven Design principles",
      "Supported a micro-frontend architecture for modular, independent releases",
    ],
    liveUrl: "https://omniflow.cx/",
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
    image: "/projects/atib-bank-homepage.png",
    imageFit: "contain",
    tags: ["Java", "Spring Boot", "Liferay DXP", "REST APIs"],
    year: "2026",
    role: "Java / Liferay Developer",
    highlights: [
      "Acted as the lead technical contact for the ATIB.LY redesign",
      "Built a Spring Boot service to synchronize third-party financial data",
      "Delivered Liferay extensions and portal themes",
      "Configured Content Security Policy requirements",
    ],
    liveUrl: "https://atib.ly/home",
  },
  {
    slug: "orange-max-it",
    title: "Maxit Orange Control Tower",
    shortDescription: "Modular Nuxt.js back office designed for independent team releases",
    description:
      "Built a responsive back-office platform for the Maxit Orange Control Tower using Nuxt.js and Vue.js, with clearly defined business and integration boundaries.",
    overview:
      "The platform uses Domain-Driven Design and a micro-frontend architecture so multiple teams can develop and release modules independently while preserving a coherent operator experience.",
    image: "/projects/maxit-orange-control-tower.jpg",
    imageFit: "contain",
    tags: ["Nuxt.js", "Vue.js", "TypeScript", "Micro-frontends"],
    year: "2025",
    role: "Front-End Developer",
    highlights: [
      "Built a responsive back-office platform with Nuxt.js and Vue.js",
      "Applied Domain-Driven Design to organize business capabilities",
      "Defined integration boundaries with business analysts",
      "Designed a micro-frontend architecture for modular releases",
    ],
  },
  {
    slug: "embedded-bi-dashboard",
    title: "Embedded BI Dashboard",
    shortDescription: "Royal Air Maroc analytics and KPI monitoring embedded through the Qlik Sense Mashup API",
    description:
      "Worked on Royal Air Maroc's responsive business intelligence dashboard, integrating Qlik Sense visualizations and interactive KPI monitoring into a clear web experience.",
    overview:
      "Built for Royal Air Maroc, this embedded analytics experience uses the Qlik Sense Mashup API to present operational indicators, revenue trends, traffic comparisons, and business reporting. Responsive layouts and interactive filters help users move from headline KPIs to detailed analysis.",
    image: "/projects/embedded-bi-dashboard.png",
    imageFit: "contain",
    tags: ["Qlik Sense", "Mashup API", "JavaScript", "Responsive UI"],
    year: "2022 - 2025",
    role: "Front-End Developer - BI Dashboard",
    highlights: [
      "Embedded Qlik Sense visualizations through the Mashup API",
      "Designed responsive dashboard layouts",
      "Added interactive filters for business analysis",
      "Simplified KPI monitoring inside the web application",
    ],
  },
];
