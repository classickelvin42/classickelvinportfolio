"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, Star } from "lucide-react";
import Image from "next/image";
import { projects, projectCategories } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Projects() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          Projects
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
        >
          Selected work.
        </motion.h2>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-white"
                    : "glass text-ink-300 hover:text-ink-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="glass w-full rounded-full py-2.5 pl-10 pr-4 text-sm text-ink-100 placeholder:text-ink-400 outline-none"
            />
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl glass shadow-card"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950/90 via-base-950/10 to-transparent" />
                  {project.featured && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-medium text-white">
                      <Star size={11} className="fill-white" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] text-ink-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:text-ink-100 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400 hover:text-ink-100 transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-sm text-ink-400">
            No projects match that search. Try a different keyword or
            category.
          </div>
        )}
      </div>
    </section>
  );
}
