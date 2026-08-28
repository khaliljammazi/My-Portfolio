"use client";

import { useId } from "react";
import type { ProjectVisualType } from "@/data/projects";

type Props = {
  type: ProjectVisualType;
  title: string;
  className?: string;
};

const visualCopy: Record<ProjectVisualType, {
  eyebrow: string;
  metric: string;
  metricLabel: string;
  nodes: [string, string, string, string];
}> = {
  portal: {
    eyebrow: "HIGH-TRAFFIC PORTAL",
    metric: "30M+",
    metricLabel: "monthly visitors",
    nodes: ["Responsive UI", "React components", "Liferay DXP", "50+ REST APIs"],
  },
  microfrontends: {
    eyebrow: "CONTROL TOWER",
    metric: "DDD",
    metricLabel: "bounded domains",
    nodes: ["Nuxt.js shell", "Vue modules", "Domain contracts", "Independent releases"],
  },
  banking: {
    eyebrow: "BANKING INTEGRATION",
    metric: "REST",
    metricLabel: "secure data sync",
    nodes: ["Liferay portal", "Spring Boot", "Sync service", "Financial providers"],
  },
  analytics: {
    eyebrow: "EMBEDDED ANALYTICS",
    metric: "KPI",
    metricLabel: "interactive monitoring",
    nodes: ["Web interface", "Mashup API", "Qlik Sense", "Business data"],
  },
};

export function ProjectVisual({ type, title, className = "" }: Props) {
  const gradientId = useId().replace(/:/g, "");
  const copy = visualCopy[type];

  return (
    <div className={`project-visual ${className}`} role="img" aria-label={`${title} architecture diagram`}>
      <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`${gradientId}-bg`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#07111f" />
            <stop offset="0.52" stopColor="#0d1c34" />
            <stop offset="1" stopColor="#190b2d" />
          </linearGradient>
          <linearGradient id={`${gradientId}-accent`} x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <filter id={`${gradientId}-glow`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <pattern id={`${gradientId}-grid`} width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M 42 0 L 0 0 0 42" fill="none" stroke="#94a3b8" strokeOpacity=".08" />
          </pattern>
        </defs>

        <rect width="1200" height="760" fill={`url(#${gradientId}-bg)`} />
        <rect width="1200" height="760" fill={`url(#${gradientId}-grid)`} />
        <circle cx="1030" cy="110" r="190" fill="#a855f7" opacity=".17" filter={`url(#${gradientId}-glow)`} />
        <circle cx="90" cy="680" r="210" fill="#22d3ee" opacity=".13" filter={`url(#${gradientId}-glow)`} />

        <text x="72" y="82" fill="#67e8f9" fontSize="20" fontWeight="700" letterSpacing="5">{copy.eyebrow}</text>
        <text x="72" y="138" fill="#f8fafc" fontSize="38" fontWeight="750">{title}</text>

        <g transform="translate(72 198)">
          <rect width="1056" height="420" rx="30" fill="#0f172a" fillOpacity=".7" stroke="#94a3b8" strokeOpacity=".2" />
          <rect x="1" y="1" width="1054" height="54" rx="29" fill="#ffffff" fillOpacity=".035" />
          <circle cx="28" cy="28" r="6" fill="#fb7185" />
          <circle cx="48" cy="28" r="6" fill="#fbbf24" />
          <circle cx="68" cy="28" r="6" fill="#34d399" />
          <rect x="104" y="19" width="240" height="18" rx="9" fill="#94a3b8" fillOpacity=".13" />

          <g transform="translate(44 94)">
            <rect width="208" height="250" rx="20" fill="#111f38" stroke="#67e8f9" strokeOpacity=".24" />
            <text x="24" y="42" fill="#94a3b8" fontSize="14" fontWeight="650" letterSpacing="2">OUTCOME</text>
            <text x="24" y="112" fill={`url(#${gradientId}-accent)`} fontSize="58" fontWeight="800">{copy.metric}</text>
            <text x="24" y="144" fill="#cbd5e1" fontSize="18">{copy.metricLabel}</text>
            <path d="M24 196 C62 164 86 210 126 171 S177 154 184 126" fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
            <circle cx="184" cy="126" r="7" fill="#a855f7" />
          </g>

          <g transform="translate(304 98)">
            {copy.nodes.map((node, index) => {
              const x = (index % 2) * 344;
              const y = Math.floor(index / 2) * 132;
              return (
                <g key={node} transform={`translate(${x} ${y})`}>
                  <rect width="300" height="98" rx="18" fill="#162541" stroke={index === 0 ? "#22d3ee" : "#a855f7"} strokeOpacity=".38" />
                  <circle cx="38" cy="49" r="17" fill={index === 0 ? "#22d3ee" : "#a855f7"} fillOpacity=".18" stroke={index === 0 ? "#22d3ee" : "#a855f7"} strokeOpacity=".62" />
                  <text x="72" y="55" fill="#e2e8f0" fontSize="19" fontWeight="650">{node}</text>
                </g>
              );
            })}
            <path d="M300 49 H344 M150 98 V132 M494 98 V132 M300 181 H344" stroke="#94a3b8" strokeOpacity=".45" strokeWidth="3" strokeDasharray="7 9" />
          </g>
        </g>

        <g transform="translate(72 665)">
          <circle cx="8" cy="8" r="8" fill="#34d399" />
          <text x="30" y="15" fill="#cbd5e1" fontSize="18">Documented project system view</text>
        </g>
      </svg>
    </div>
  );
}
