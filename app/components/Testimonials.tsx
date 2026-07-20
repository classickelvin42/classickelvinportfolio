"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "../data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          Testimonials
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
        >
          What clients say.
        </motion.h2>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 sm:p-10"
            >
              <div className="flex justify-center gap-1 text-secondary">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-ink-200 sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={current.photo}
                    alt={current.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-ink-100">
                    {current.name}
                  </div>
                  <div className="text-xs text-ink-400">
                    {current.role}, {current.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-ink-300 hover:text-ink-100"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-secondary" : "w-1.5 bg-white/15"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-ink-300 hover:text-ink-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
