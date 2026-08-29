"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";

type Language = "en" | "fr";

const sharedSkills = [
  {
    label: "Front-End",
    items: [
      "Angular 9+",
      "TypeScript",
      "RxJS",
      "React.js",
      "Redux",
      "Vue.js",
      "Nuxt.js",
      "Next.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
      "Micro-frontends",
    ],
  },
  {
    label: "Back-End & APIs",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Python",
      "ASP.NET C#",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "JWT",
      "OAuth2/OpenID Connect",
    ],
  },
  {
    label: "Data, AI & DevOps",
    items: [
      "Elasticsearch",
      "Redis",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Firebase",
      "Oracle PL/SQL",
      "RAG",
      "Semantic Search",
      "Hugging Face",
      "ONNX Runtime",
      "Groq API",
      "Docker",
      "Git",
      "Jenkins",
      "CI/CD",
      "Liferay DXP",
      "Keycloak",
      "Qlik Sense",
    ],
  },
];

const content = {
  en: {
    languageName: "English",
    downloadLabel: "Download English CV",
    title: "Java Full-Stack Consultant",
    location: "Tunis, Tunisia",
    labels: {
      profile: "Professional Summary",
      skills: "Technical Skills",
      experience: "Professional Experience",
      projects: "Projects",
      education: "Education, Certifications & Languages",
      certifications: "Certifications",
      languages: "Languages",
    },
    summary:
      "Front-End / Full Stack Developer with 4+ years of experience designing responsive web applications and integrations for international clients in telecommunications, banking and retail. Strong expertise in Angular, React, Vue.js, TypeScript, JavaScript, REST APIs and Spring Boot. Experienced in high-traffic portals, micro-frontends and back-office applications while collaborating with distributed teams across France, Morocco, Burkina Faso and Libya. Currently developing a multilingual AI- and RAG-powered customer support platform.",
    skills: sharedSkills,
    experience: [
      {
        role: "Java / Liferay Developer",
        company: "Keyrus - ATIB Bank, Libya",
        period: "2026",
        bullets: [
          "Lead technical contact for the ATIB.LY redesign, coordinating with stakeholders and business analysts.",
          "Developed a Spring Boot microservice to synchronize third-party financial data through REST APIs; delivered Liferay extensions, themes and CSP configuration.",
        ],
      },
      {
        role: "Front-End Developer - Nuxt.js / Vue.js",
        company: "Keyrus - Maxit Orange Control Tower",
        period: "2025",
        bullets: [
          "Contributed to Max It, a platform serving 8 Orange subsidiaries and targeting up to 80M users; built responsive Nuxt.js/Vue.js back-office modules using Domain-Driven Design.",
          "Designed micro-frontend integrations and implemented Keycloak authentication, localization, roles and permission management while collaborating with distributed teams.",
        ],
      },
      {
        role: "Full Stack Developer - React / Liferay DXP / Java",
        company: "Keyrus - Maroc Telecom",
        period: "2022 - 2025",
        bullets: [
          "Redesigned iam.ma, a portal serving 30M+ monthly visitors, and improved Lighthouse performance by 340%.",
          "Built reusable React components, personalized Liferay themes/templates and Java/JSP integrations for portal and e-commerce modules; connected the CMS to back-end services and 50+ REST APIs.",
        ],
      },
      {
        role: "Full Stack Developer - POS System",
        company: "Keyrus - Orange Retail",
        period: "2024 - 2025",
        bullets: [
          "Designed REST APIs for real-time transactions, inventory and payments; performed integration testing and debugging and supported Jenkins CI/CD pipelines.",
          "Developed checkout and stock-management workflows while collaborating with front-end, back-end and business teams to ensure reliable integrations.",
        ],
      },
      {
        role: "Angular / Spring Boot Developer",
        company: "Keyrus - Orange Burkina Faso",
        period: "2022 - 2025",
        bullets: [
          "Built a back-office application with role-based access control, administration tools and back-end service integrations.",
          "Created reusable Angular components and integrated Spring Boot APIs, forms, validation rules and user permissions.",
        ],
      },
      {
        role: "Front-End Developer - BI Dashboard",
        company: "Keyrus",
        period: "2022 - 2025",
        bullets: [
          "Embedded Qlik Sense visualizations into a web interface through the Mashup API.",
          "Designed responsive dashboards and interactive filters to simplify analysis and business KPI monitoring.",
        ],
      },
      {
        role: "Full Stack Developer Intern",
        company: "ESPADA",
        period: "Feb. 2022 - Jun. 2022",
        bullets: [
          "Developed a Laravel/jQuery/Bootstrap ERP and Talend/Chart.js dashboards for business reporting.",
          "Modelled MySQL data, implemented management modules and created ETL jobs to feed reporting indicators.",
        ],
      },
      {
        role: "Web Developer Intern",
        company: "Hammamet Informatique Services",
        period: "Jun. 2021 - Aug. 2021",
        bullets: [
          "Created a React.js/Firebase delivery platform and integrated automated notifications through the WhatsApp Business API.",
          "Developed order-tracking interfaces, user authentication and real-time Firebase data synchronization.",
        ],
      },
    ],
    projects: [
      {
        name: "AI/RAG Customer Support and Semantic Search Platform",
        period: "2026 - In Progress",
        bullets: [
          "Designing a multilingual platform with document ingestion, chunking, embeddings, vector search and contextual answer generation in Arabic, French and English.",
          "Building Spring Boot/Python pipelines with Elasticsearch and Redis; integrating Groq API, Hugging Face and ONNX Runtime; automating ticket categorization and prioritization; containerizing with Docker.",
        ],
      },
      {
        name: "Car Rental Web Platform",
        period: "Dec. 2020 - Jan. 2021",
        bullets: [
          "Built with React/Redux, Node.js, Express.js and MongoDB, including vehicle search, JWT authentication, Stripe payments and an administration dashboard.",
        ],
      },
      {
        name: "Library Management System",
        period: "Mar. 2021 - Apr. 2021",
        bullets: [
          "Developed a Java Swing/MySQL desktop application using MVC architecture to manage books, members, loans and due dates.",
        ],
      },
    ],
    education: [
      "Engineering Degree in Computer Science | ESPRIT, Tunis | 2022 - 2025",
      "Bachelor's Degree in Computer Science | ITBS, Nabeul | 2019 - 2022",
    ],
    certifications:
      "MuleSoft Developer - Salesforce (2023) | Database Foundations - Oracle (2021) | Java Foundations - Oracle (2021)",
    languages:
      "Arabic - Native | French - Full Professional Proficiency | English - Full Professional Proficiency",
  },
  fr: {
    languageName: "Français",
    downloadLabel: "Télécharger le CV français",
    title: "Consultant Java Full Stack",
    location: "Tunis, Tunisie",
    labels: {
      profile: "Profil professionnel",
      skills: "Compétences techniques",
      experience: "Expérience professionnelle",
      projects: "Projets",
      education: "Formation, certifications et langues",
      certifications: "Certifications",
      languages: "Langues",
    },
    summary:
      "Développeur Front-End / Full Stack avec plus de 4 ans d'expérience dans la conception d'applications web responsives et d'intégrations pour des clients internationaux des secteurs télécom, bancaire et retail. Expertise en Angular, React, Vue.js, TypeScript, JavaScript, API REST et Spring Boot. Expérience des portails à fort trafic, micro-frontends et interfaces back-office, en collaboration avec des équipes réparties en France, au Maroc, au Burkina Faso et en Libye. Développe actuellement une plateforme multilingue de support client fondée sur l'IA et le RAG.",
    skills: [
      sharedSkills[0],
      { ...sharedSkills[1], label: "Back-End et API" },
      { ...sharedSkills[2], label: "Données, IA et DevOps" },
    ],
    experience: [
      {
        role: "Développeur Java / Liferay",
        company: "Keyrus - ATIB Bank, Libye",
        period: "2026",
        bullets: [
          "Interlocuteur technique principal pour la refonte d'ATIB.LY ; coordination avec les parties prenantes et analystes métier.",
          "Développement d'un microservice Spring Boot synchronisant les données financières de fournisseurs tiers via API REST ; extensions Liferay, thèmes et configuration CSP.",
        ],
      },
      {
        role: "Développeur Front-End Nuxt.js / Vue.js",
        company: "Keyrus - Maxit Orange Control Tower",
        period: "2025",
        bullets: [
          "Contribution à Max It, plateforme déployée auprès de 8 filiales Orange et visant jusqu'à 80 M d'utilisateurs ; développement de modules back-office responsives en Nuxt.js/Vue.js avec Domain-Driven Design.",
          "Conception d'intégrations micro-frontends et mise en place de l'authentification Keycloak, de l'internationalisation ainsi que de la gestion des rôles et permissions avec des équipes distribuées.",
        ],
      },
      {
        role: "Développeur Full Stack React / Liferay DXP / Java",
        company: "Keyrus - Maroc Telecom",
        period: "2022 - 2025",
        bullets: [
          "Refonte d'iam.ma, portail de 30 M+ visiteurs mensuels ; amélioration des performances Lighthouse de 340 %.",
          "Création de composants React réutilisables, de thèmes/templates Liferay personnalisés et d'intégrations Java/JSP pour des modules portail et e-commerce ; connexion du CMS aux services back-end et à plus de 50 API REST.",
        ],
      },
      {
        role: "Développeur Full Stack - Système POS",
        company: "Keyrus - Orange Retail",
        period: "2024 - 2025",
        bullets: [
          "Conception d'API REST pour transactions temps réel, stocks et paiements ; tests d'intégration, débogage et pipelines CI/CD Jenkins.",
          "Développement et intégration des parcours d'encaissement et de gestion des stocks ; collaboration avec les équipes front-end, back-end et métier pour fiabiliser les échanges.",
        ],
      },
      {
        role: "Développeur Angular / Spring Boot",
        company: "Keyrus - Orange Burkina Faso",
        period: "2022 - 2025",
        bullets: [
          "Construction d'un back-office avec contrôle d'accès par rôles, outils d'administration et intégration des services back-end.",
          "Création de composants Angular réutilisables, consommation d'API Spring Boot et gestion des formulaires, validations et habilitations utilisateurs.",
        ],
      },
      {
        role: "Développeur Front-End - Tableau de bord BI",
        company: "Keyrus",
        period: "2022 - 2025",
        bullets: [
          "Intégration de visualisations Qlik Sense dans une interface web via la Mashup API.",
          "Conception de tableaux de bord responsives et de filtres interactifs afin de faciliter l'analyse et le suivi des indicateurs métier.",
        ],
      },
      {
        role: "Stagiaire Développeur Full Stack",
        company: "ESPADA",
        period: "fév. 2022 - juin 2022",
        bullets: [
          "Développement d'un ERP Laravel/jQuery/Bootstrap et de tableaux de bord Talend/Chart.js pour le reporting métier.",
          "Modélisation des données MySQL, développement des modules de gestion et réalisation de traitements ETL pour alimenter les indicateurs de reporting.",
        ],
      },
      {
        role: "Stagiaire Développeur Web",
        company: "Hammamet Informatique Services",
        period: "juin 2021 - août 2021",
        bullets: [
          "Création d'une plateforme de livraison React.js/Firebase et intégration de notifications automatisées via WhatsApp Business API.",
          "Développement des interfaces de suivi des commandes, authentification des utilisateurs et synchronisation des données en temps réel avec Firebase.",
        ],
      },
    ],
    projects: [
      {
        name: "Plateforme IA/RAG de support client et recherche sémantique",
        period: "2026 - en cours",
        bullets: [
          "Conception d'une plateforme multilingue avec ingestion documentaire, découpage, embeddings, recherche vectorielle et génération de réponses contextuelles en arabe, français et anglais.",
          "Pipelines Spring Boot/Python avec Elasticsearch et Redis ; intégration de Groq API, Hugging Face et ONNX Runtime ; catégorisation et priorisation automatiques des tickets ; conteneurisation Docker.",
        ],
      },
      {
        name: "Plateforme web de location de voitures",
        period: "déc. 2020 - janv. 2021",
        bullets: [
          "Application React/Redux, Node.js, Express.js et MongoDB avec recherche de véhicules, authentification JWT, paiements Stripe et tableau de bord d'administration.",
        ],
      },
      {
        name: "Système de gestion de bibliothèque",
        period: "mars 2021 - avr. 2021",
        bullets: [
          "Application desktop Java Swing/MySQL en architecture MVC pour gérer livres, adhérents, emprunts et dates d'échéance.",
        ],
      },
    ],
    education: [
      "Diplôme d'ingénieur en informatique | ESPRIT, Tunis | 2022 - 2025",
      "Licence en informatique | ITBS, Nabeul | 2019 - 2022",
    ],
    certifications:
      "MuleSoft Developer - Salesforce (2023) | Database Foundations - Oracle (2021) | Java Foundations - Oracle (2021)",
    languages:
      "Arabe - langue maternelle | Français - maîtrise professionnelle complète | Anglais - maîtrise professionnelle complète",
  },
} as const;

const cvFiles: Record<Language, string> = {
  en: "/downloads/Mohamed_Khalil_Jammazi_CV_EN.pdf",
  fr: "/downloads/Mohamed_Khalil_Jammazi_CV_FR.pdf",
};

function SectionTitle({ icon: Icon, children }: { icon: typeof BriefcaseBusiness; children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary)]/10 text-[var(--secondary)]">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
        {children}
      </h2>
      <span className="h-px flex-1 bg-[hsl(var(--border))]" />
    </div>
  );
}

export function ResumeClient() {
  const [language, setLanguage] = useState<Language>("en");
  const cv = content[language];

  return (
    <main className="min-h-screen px-4 py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <div
            className="inline-flex w-fit rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-1"
            role="group"
            aria-label="CV language"
          >
            {(["en", "fr"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  language === option
                    ? "bg-[var(--secondary)] text-white"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                }`}
              >
                {option === "en" ? "EN" : "FR"}
              </button>
            ))}
          </div>

          <a
            href={cvFiles[language]}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Download className="size-4" aria-hidden="true" />
            {cv.downloadLabel}
          </a>
        </div>

        <article lang={language} className="overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl shadow-black/5 print:border-0 print:shadow-none">
          <header className="relative overflow-hidden bg-gradient-to-br from-[var(--secondary)] via-[var(--secondary)] to-[hsl(var(--primary))] px-6 py-10 text-white md:px-10 md:py-12">
            <div className="absolute -right-20 -top-24 size-72 rounded-full border border-white/10 bg-white/5" />
            <div className="absolute -bottom-28 right-24 size-56 rounded-full border border-white/10" />
            <div className="relative">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                {cv.languageName} CV
              </p>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl">Mohamed Khalil Jammazi</h1>
              <p className="mt-2 text-lg font-semibold text-white/85 md:text-xl">{cv.title}</p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/80">
                <a href="tel:+21650622927" className="flex items-center gap-2 hover:text-white">
                  <Phone className="size-4" aria-hidden="true" />
                  +216 50 622 927
                </a>
                <a href="mailto:khalil.jammazi366@gmail.com" className="flex items-center gap-2 hover:text-white">
                  <Mail className="size-4" aria-hidden="true" />
                  khalil.jammazi366@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden="true" />
                  {cv.location}
                </span>
                <a
                  href="https://www.linkedin.com/in/khalil-jammazi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://khalil-jammazi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Portfolio
                </a>
              </div>
            </div>
          </header>

          <div className="space-y-10 p-6 md:p-10">
            <section>
              <SectionTitle icon={BriefcaseBusiness}>{cv.labels.profile}</SectionTitle>
              <p className="leading-7 text-[hsl(var(--muted-foreground))]">{cv.summary}</p>
            </section>

            <section>
              <SectionTitle icon={Wrench}>{cv.labels.skills}</SectionTitle>
              <div className="grid gap-4 lg:grid-cols-3">
                {cv.skills.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/50 p-5">
                    <h3 className="mb-3 font-bold text-[hsl(var(--foreground))]">{group.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span key={skill} className="rounded-lg border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--secondary)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={BriefcaseBusiness}>{cv.labels.experience}</SectionTitle>
              <div className="relative space-y-7 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-[hsl(var(--border))]">
                {cv.experience.map((job) => (
                  <div key={`${job.role}-${job.company}-${job.period}`} className="relative pl-7">
                    <span className="absolute left-0 top-2 size-[15px] rounded-full border-4 border-[hsl(var(--card))] bg-[var(--secondary)]" />
                    <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-5">
                      <div>
                        <h3 className="font-bold text-[hsl(var(--foreground))]">{job.role}</h3>
                        <p className="text-sm font-semibold text-[var(--secondary)]">{job.company}</p>
                      </div>
                      <time className="shrink-0 text-sm font-semibold text-[hsl(var(--muted-foreground))]">{job.period}</time>
                    </div>
                    <ul className="space-y-1.5 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-[var(--secondary)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={BriefcaseBusiness}>{cv.labels.projects}</SectionTitle>
              <div className="grid gap-4 md:grid-cols-2">
                {cv.projects.map((project, index) => (
                  <div
                    key={project.name}
                    className={`rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/50 p-5 ${index === 0 ? "md:col-span-2" : ""}`}
                  >
                    <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:justify-between">
                      <h3 className="font-bold text-[hsl(var(--foreground))]">{project.name}</h3>
                      <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[var(--secondary)]">{project.period}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap}>{cv.labels.education}</SectionTitle>
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="space-y-3">
                  {cv.education.map((item) => (
                    <p key={item} className="rounded-xl border border-[hsl(var(--border))] p-4 text-sm font-medium leading-6 text-[hsl(var(--foreground))]">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="space-y-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/50 p-5 text-sm leading-6">
                  <div>
                    <h3 className="mb-1 font-bold text-[hsl(var(--foreground))]">{cv.labels.certifications}</h3>
                    <p className="text-[hsl(var(--muted-foreground))]">{cv.certifications}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 flex items-center gap-2 font-bold text-[hsl(var(--foreground))]">
                      <Languages className="size-4 text-[var(--secondary)]" aria-hidden="true" />
                      {cv.labels.languages}
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))]">{cv.languages}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
