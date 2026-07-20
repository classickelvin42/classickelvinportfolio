"use client";

import { motion } from "framer-motion";
import { experience } from "../data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          Experience
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
        >
          Where the work has taken me.
        </motion.h2>

        <div className="mt-14 space-y-10 border-l border-white/10 pl-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-secondary shadow-glow-sm" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-400">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-secondary">{exp.company}</p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 text-sm leading-relaxed text-ink-300"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-400" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] text-ink-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
