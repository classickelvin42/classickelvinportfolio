// PLACEHOLDER CONTENT — replace with your real projects, images, and links
export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Web App" | "E-Commerce" | "Design" | "Automation";
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Digital Course Platform",
    description:
      "A gated learning platform with secure checkout, access-code delivery, and a clean student dashboard.",
    category: "Web App",
    stack: ["Next.js", "TypeScript", "Tailwind", "Paystack"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "proj-2",
    title: "Boutique E-Commerce Storefront",
    description:
      "A fashion storefront with a fast catalog, cart, and mobile-first checkout tuned for a Ghanaian audience.",
    category: "E-Commerce",
    stack: ["Next.js", "Stripe", "Sanity CMS"],
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "proj-3",
    title: "School Website & Admissions Portal",
    description:
      "A multi-page institutional site with an online admissions form and staff directory.",
    category: "Web App",
    stack: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "proj-4",
    title: "Brand Identity System",
    description:
      "A full visual identity: logo suite, color system, and component library used across web and social.",
    category: "Design",
    stack: ["Figma", "Design Tokens"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfe6?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "proj-5",
    title: "WhatsApp Order Assistant",
    description:
      "An automated WhatsApp flow that answers catalog questions and routes orders to a sales inbox.",
    category: "Automation",
    stack: ["Node.js", "WhatsApp Cloud API", "OpenAI"],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "proj-6",
    title: "Sales Funnel Landing Pages",
    description:
      "A set of high-converting landing pages with A/B-tested copy and analytics wired in.",
    category: "Web App",
    stack: ["Next.js", "Vercel Analytics"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const projectCategories = [
  "All",
  "Web App",
  "E-Commerce",
  "Design",
  "Automation"
] as const;
