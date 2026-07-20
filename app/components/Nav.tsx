"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        animate={{
          marginTop: scrolled ? 12 : 20,
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass-strong w-full max-w-5xl rounded-2xl px-5 sm:px-7 flex items-center justify-between shadow-card"
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink-100"
        >
          Your<span className="text-gradient">Name</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-300 hover:text-ink-100 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-ink-300 hover:text-ink-100 hover:bg-white/5 transition-colors"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-medium rounded-full bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors"
          >
            Let&apos;s talk
          </a>
          <button
            className="lg:hidden h-9 w-9 flex items-center justify-center text-ink-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass-strong absolute top-[76px] left-4 right-4 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink-300 hover:text-ink-100 hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
