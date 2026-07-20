"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

// Converts a 0-100 level into a 5-bar signal reading
function barsForLevel(level: number) {
  const filled = Math.round((level / 100) * 5);
  return Array.from({ length: 5 }, (_, i) => i < filled);
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          Skills
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
        >
          Tools I reach for, and how deep I go with each.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: catIdx * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-5 font-display text-sm font-semibold text-ink-100">
                {cat.category}
              </h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-ink-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-ink-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="flex items-end gap-1" aria-hidden="true">
                      {barsForLevel(skill.level).map((filled, i) => (
                        <motion.span
                          key={i}
                          initial={{ height: 4, opacity: 0.3 }}
                          whileInView={{
                            height: 6 + i * 4,
                            opacity: filled ? 1 : 0.25
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.06 }}
                          className={`signal-bar ${
                            filled ? "" : "!bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
