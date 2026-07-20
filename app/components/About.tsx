"use client";

import { motion } from "framer-motion";
import { FileDown, Target, Eye, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const values = [
  { icon: Target, title: "Outcomes over output", text: "Every build is judged by the result it gets you, not the hours it took." },
  { icon: Eye, title: "Clarity first", text: "Clear communication and honest timelines, from kickoff to launch." },
  { icon: Sparkles, title: "Craft matters", text: "Details like load time and spacing are part of the deliverable, not extras." }
];

const timeline = [
  { year: "2020", text: "Started building websites and launched a small online store." },
  { year: "2022", text: "Took on freelance web and marketing clients across Ghana." },
  { year: "2024", text: "Launched a digital course business alongside client work." },
  { year: "2026", text: "Focused on premium web builds and business consulting." }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          About
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 to-transparent blur-xl"
                aria-hidden="true"
              />
              {/* PLACEHOLDER — replace with a real professional photo */}
              <div className="glass relative flex aspect-[4/5] items-center justify-center rounded-[2rem]">
                <span className="font-mono text-xs text-ink-400">
                  PHOTO PLACEHOLDER
                </span>
              </div>
            </div>
            <a
              href="/resume.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-ink-100 transition-colors hover:bg-white/10"
            >
              <FileDown size={16} />
              Download resume
            </a>
          </motion.div>

          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
            >
              Building products that earn trust at first glance.
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mt-6 text-ink-300 leading-relaxed"
            >
              {/* PLACEHOLDER — replace with your real bio */}
              I&apos;m a full-stack developer and consultant based in Ghana,
              working with founders and small businesses to turn ideas into
              live products. My work spans web development, digital
              marketing, and hands-on sales strategy — I care as much about
              whether a site converts as whether it looks good.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {values.map((v) => (
                <div key={v.title} className="glass rounded-2xl p-5">
                  <v.icon size={18} className="text-secondary" />
                  <h3 className="mt-3 text-sm font-semibold text-ink-100">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-400">
                    {v.text}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mt-12"
            >
              <h3 className="mb-6 text-sm font-semibold text-ink-100">
                A short timeline
              </h3>
              <div className="space-y-6 border-l border-white/10 pl-6">
                {timeline.map((t) => (
                  <div key={t.year} className="relative">
                    <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-secondary shadow-glow-sm" />
                    <div className="font-mono text-xs text-secondary">
                      {t.year}
                    </div>
                    <p className="mt-1 text-sm text-ink-300">{t.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
