export const profile = {
  name: "Khalil Jammazi",
  title: "Full-Stack Developer",
  headline: "I build digital products that perform.",
  summary:
    "Full-stack developer focused on high-performance web platforms, conversion-driven product experiences, and scalable enterprise applications.",
  location: "Tunisia (Remote)",
  email: "khalil.jammazi366@gmail.com",
  github: "https://github.com/khaliljammazi",
  linkedin: "https://www.linkedin.com/in/jammazi-mohamed-khalil-440a83119/",
  portfolio: "https://khalil-jammazi.vercel.app",
  availability: "Open to freelance and full-time opportunities",
  responseTime: "Usually replies within 1-2 business days",
  currentFocus: [
    "Fast, polished frontend experiences with measurable performance gains",
    "Scalable full-stack products with React, Next.js, Node.js, and modern APIs",
    "Mobile and data-heavy interfaces that stay clear under real-world complexity",
  ],
} as const;

export const profileStats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "+" },
  { label: "Monthly Users Served", value: 30, suffix: "M+" },
  { label: "Conversion Lift Delivered", value: 250, suffix: "%" },
] as const;

export const experience = [
  {
    role: "Lead Frontend Developer",
    company: "Maroc Telecom (IAM)",
    period: "2024 - 2025",
    location: "Tunis, Tunisia (Remote)",
    summary:
      "Led the iam.ma frontend rebuild and a large-scale rebrand rollout for a telecom platform serving millions.",
    bullets: [
      "Rebuilt iam.ma with Liferay DXP and React; +340% reported performance gain",
      "Designed and shipped 50+ responsive templates for a high-traffic platform",
      "Integrated internal APIs, CMS workflows, and editorial content operations",
      "Rolled out the refreshed brand system across key customer touchpoints",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    location: "Remote",
    summary:
      "Full-stack products for clients across e-commerce, fintech, media, and product marketing.",
    bullets: [
      "Built end-to-end web and mobile apps for international clients",
      "Delivered an e-commerce experience that lifted conversion by 250%",
      "Shipped products serving hundreds of thousands of active users",
      "Created immersive 3D product storytelling with Three.js and WebGL",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend Systems",
    items: ["React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "GraphQL", "REST APIs", "Java", "Python"],
  },
  {
    title: "Data & Infrastructure",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "Experience Design",
    items: ["Three.js", "WebGL", "Responsive Design", "Figma", "UI Systems"],
  },
] as const;

export const workingStyle = [
  {
    title: "Clarity Before Complexity",
    description:
      "Clear flows, practical architecture, and interfaces that stay intuitive under pressure.",
  },
  {
    title: "Performance As A Feature",
    description:
      "Fast loading and smooth interaction. Users feel performance immediately.",
  },
  {
    title: "Build For Teams",
    description:
      "Maintainable code, reusable components, and easy handoff for design and product teams.",
  },
] as const;

export const credibilityHighlights = [
  "Enterprise experience across telecom, aviation, finance, and technology",
  "Hands-on across web, mobile, 3D, and analytics-driven interfaces",
  "Moves easily from design-sensitive UI to backend integration and shipping",
] as const;
