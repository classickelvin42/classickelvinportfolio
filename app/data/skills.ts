// PLACEHOLDER CONTENT — replace levels (0-100) and items with your real skills
export type Skill = { name: string; level: number };
export type SkillCategory = { category: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "REST / GraphQL APIs", level: 82 },
      { name: "Authentication & Payments", level: 80 }
    ]
  },
  {
    category: "UI / UX",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Design Systems", level: 84 },
      { name: "Prototyping", level: 86 },
      { name: "Accessibility (WCAG)", level: 75 }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 74 },
      { name: "Docker", level: 65 },
      { name: "AWS Basics", level: 60 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Notion", level: 88 },
      { name: "Postman", level: 82 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Client Communication", level: 90 },
      { name: "Project Scoping", level: 86 },
      { name: "Sales Strategy", level: 84 },
      { name: "Mentorship", level: 78 }
    ]
  }
];
