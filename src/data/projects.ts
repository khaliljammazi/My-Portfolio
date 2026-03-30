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
];
