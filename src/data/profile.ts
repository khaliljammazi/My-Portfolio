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
    "Shipping fast, polished frontend experiences with measurable performance gains",
    "Building scalable full-stack products with React, Next.js, Node.js, and modern APIs",
    "Creating mobile and data-heavy interfaces that stay clear under real-world complexity",
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
      "Led the frontend rebuild of iam.ma and delivered a large-scale rebrand rollout across a telecom platform serving millions of users.",
    bullets: [
      "Rebuilt iam.ma using Liferay DXP and React with a reported +340% performance improvement",
      "Designed and shipped 50+ responsive page templates for a high-traffic enterprise platform",
      "Integrated internal APIs, CMS workflows, and content operations for editorial teams",
      "Rolled out the refreshed digital brand system across key customer touchpoints",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    location: "Remote",
    summary:
      "Delivered full-stack products for clients across e-commerce, fintech, media, and product marketing.",
    bullets: [
      "Built end-to-end web and mobile applications for international clients",
      "Developed an e-commerce experience that improved conversion rate by 250%",
      "Contributed to mobile and web products serving hundreds of thousands of active users",
      "Created immersive 3D product storytelling experiences using Three.js and WebGL",
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
      "I break product ideas into clear flows, practical architecture, and interfaces that stay intuitive under pressure.",
  },
  {
    title: "Performance As A Feature",
    description:
      "I care about fast loading, responsive interaction, and smooth delivery because product quality is something users feel immediately.",
  },
  {
    title: "Build For Teams",
    description:
      "I write maintainable code, structure components for reuse, and make handoff easier for designers, product teams, and future developers.",
  },
] as const;

export const credibilityHighlights = [
  "Enterprise experience across telecom, aviation, finance, and technology",
  "Hands-on with web, mobile, 3D, and analytics-driven product interfaces",
  "Comfortable moving from design-sensitive UI work to backend integrations and shipping",
] as const;
