"use client";

import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
];

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 px-6 py-14 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <a href="#home" className="font-display text-lg font-semibold text-ink-100">
          Your<span className="text-gradient">Name</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-400 hover:text-ink-100 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="https://github.com/yourhandle" aria-label="GitHub" className="text-ink-400 hover:text-secondary">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/yourhandle" aria-label="LinkedIn" className="text-ink-400 hover:text-secondary">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com/yourhandle" aria-label="Twitter" className="text-ink-400 hover:text-secondary">
            <Twitter size={18} />
          </a>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-ink-300 hover:text-ink-100"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-xs text-ink-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
