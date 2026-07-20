"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Briefcase, Zap, Plug, Gauge } from "lucide-react";
import { services } from "../data/services";

const iconMap = {
  code: Code2,
  palette: Palette,
  briefcase: Briefcase,
  zap: Zap,
  plug: Plug,
  gauge: Gauge
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          Services
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
        >
          How I can help.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass group rounded-2xl p-7 transition-shadow hover:shadow-glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-secondary transition-colors group-hover:bg-primary/25">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-ink-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
