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
};

export const projects: Project[] = [
  {
    slug: "maroc-telecom-rebranding-2025",
    title: "Maroc Telecom Rebranding 2025",
    shortDescription: "Dashboard analytics temps réel – +340 % perf",
    description: "rebuliding the Maroc Telecom digital presence with a fresh, modern design that reflects their brand evolution. The project involved creating a responsive website with enhanced user experience, integrating new branding elements, and ensuring consistency across all digital touchpoints.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    tags: ["Liferay","react","JSP","Java"],
    year: "2025",
    liveUrl: "https://www.iam.ma",
    featured: true,
  },
    {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Plateforme e-commerce haute performance – +250 % conversion",
    description: "Developed a scalable e-commerce platform using Next.js and Node.js, featuring a seamless shopping experience, secure payment integration, and advanced product management capabilities.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    year: "2023",
    liveUrl: "https://ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
  },
    {
    slug: "social-media-app",
    title: "Social Media App",
    shortDescription: "Application sociale innovante – +500K utilisateurs actifs",
    description: "Created a social media application with real-time messaging, user profiles, and content sharing features using React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
    tags: ["React Native", "Firebase", "GraphQL"],
    year: "2024",
    liveUrl: "https://socialapp.example.com",
    githubUrl: "https://github.com/username/social-media-app",
  },
];