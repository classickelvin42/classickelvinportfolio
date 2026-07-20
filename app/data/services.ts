// PLACEHOLDER CONTENT — adjust services and descriptions to match your offer
export type Service = {
  title: string;
  description: string;
  icon: "code" | "palette" | "briefcase" | "zap" | "plug" | "gauge";
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built with modern frameworks and clean, maintainable code.",
    icon: "code"
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces that look premium and guide people to act, from wireframe through polished prototype.",
    icon: "palette"
  },
  {
    title: "Business & Sales Consulting",
    description:
      "Practical strategy for pricing, positioning, and selling digital products or services online.",
    icon: "briefcase"
  },
  {
    title: "Automation",
    description:
      "Workflows and bots that handle repetitive tasks, like order intake and customer replies, automatically.",
    icon: "zap"
  },
  {
    title: "API Development",
    description:
      "Secure, well-documented APIs that connect your product to payments, data, and third-party services.",
    icon: "plug"
  },
  {
    title: "Performance Optimization",
    description:
      "Audits and fixes that make existing sites load faster and rank better in search.",
    icon: "gauge"
  }
];
