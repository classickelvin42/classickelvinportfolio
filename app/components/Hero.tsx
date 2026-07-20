"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, Twitter } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stats = [
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Happy Clients", value: 25, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 section-padding"
    >
      {/* Signature background: signal mesh grid + gradient glow */}
      <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-glow-radial opacity-70"
        aria-hidden="true"
      />

      {/* Floating ambient shapes */}
      <motion.div
        className="absolute top-24 right-[8%] h-64 w-64 rounded-full bg-primary/20 blur-[90px] animate-float-slow"
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-10 left-[6%] h-48 w-48 rounded-full bg-secondary/20 blur-[80px] animate-float"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs tracking-wide text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            AVAILABLE FOR NEW PROJECTS
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-6xl lg:text-7xl"
          >
            {/* PLACEHOLDER — replace with your name */}
            Hi, I&apos;m <span className="text-gradient">Your Name</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-ink-300 sm:text-xl"
          >
            {/* PLACEHOLDER — replace with your value proposition */}
            A full-stack developer and product designer who turns ideas into
            fast, polished web products — from first sketch to production
            deploy.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="/resume.pdf" // PLACEHOLDER — add your resume file to /public
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-ink-100 transition-colors hover:bg-white/10"
            >
              <FileDown size={16} />
              Download resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { icon: Github, href: "https://github.com/yourhandle" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourhandle" },
              { icon: Twitter, href: "https://twitter.com/yourhandle" }
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label="Social link"
                className="text-ink-400 transition-colors hover:text-secondary"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-4 py-5 text-center"
              >
                <div className="font-display text-3xl font-semibold text-ink-100">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-ink-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent blur-2xl"
              aria-hidden="true"
            />
            {/* PLACEHOLDER — replace with your professional photo */}
            <div className="glass-strong relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] shadow-glow">
              <div className="flex flex-col items-center gap-2 text-ink-400">
                <span className="font-mono text-xs">PROFILE IMAGE</span>
                <span className="text-xs">replace me in /public</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
