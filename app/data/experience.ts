// PLACEHOLDER CONTENT — replace with your real work history
export type Experience = {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Independent Full-Stack Developer & Consultant",
    company: "Self-Employed",
    duration: "2023 — Present",
    achievements: [
      "Designed and shipped full websites and digital products for clients, from concept to deployment",
      "Built and launched a self-paced digital course business with automated payment gating",
      "Advised small businesses on sales strategy and digital positioning"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Paystack"]
  },
  {
    role: "Digital Marketing & Web Consultant",
    company: "Freelance Clients",
    duration: "2021 — 2023",
    achievements: [
      "Ran targeted campaigns across TikTok, Facebook, and WhatsApp for local businesses",
      "Delivered content calendars and marketing assets that grew client audiences",
      "Built lightweight e-commerce sites for retail and fashion clients"
    ],
    tech: ["React", "Node.js", "Meta Ads", "Canva"]
  },
  {
    role: "Founder",
    company: "Clothing & Accessories Brand",
    duration: "2020 — Present",
    achievements: [
      "Built and grew an online storefront for apparel, footwear, and eyewear",
      "Managed end-to-end operations: sourcing, marketing, and fulfilment",
      "Explored automation tools to streamline customer support"
    ],
    tech: ["Shopify", "WhatsApp Business", "Instagram"]
  }
];
