"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // PLACEHOLDER — wire this up to your real form handler (e.g. an API route, Resend, or Formspree)
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary"
        >
          Contact
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
        >
          Let&apos;s build something.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <Mail size={18} className="text-secondary" />
              <div>
                <div className="text-xs text-ink-400">Email</div>
                {/* PLACEHOLDER — replace with your real email */}
                <div className="text-sm text-ink-100">hello@yourname.dev</div>
              </div>
            </div>
            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <Phone size={18} className="text-secondary" />
              <div>
                <div className="text-xs text-ink-400">Phone</div>
                {/* PLACEHOLDER — replace with your real number */}
                <div className="text-sm text-ink-100">+233 00 000 0000</div>
              </div>
            </div>
            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <MapPin size={18} className="text-secondary" />
              <div>
                <div className="text-xs text-ink-400">Location</div>
                <div className="text-sm text-ink-100">Accra, Ghana</div>
              </div>
            </div>

            {/* Interactive map placeholder */}
            <div className="glass flex h-48 items-center justify-center rounded-2xl">
              <span className="font-mono text-xs text-ink-400">
                MAP EMBED PLACEHOLDER
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="glass relative overflow-hidden rounded-2xl p-7 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <CheckCircle2 size={40} className="text-secondary" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-ink-400">
                    Thanks for reaching out — I&apos;ll reply within a day or
                    two.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-secondary hover:text-ink-100"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs text-ink-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, name: e.target.value }))
                      }
                      aria-invalid={!!errors.name}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 outline-none focus:border-secondary/50"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs text-ink-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, email: e.target.value }))
                      }
                      aria-invalid={!!errors.email}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 outline-none focus:border-secondary/50"
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs text-ink-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, message: e.target.value }))
                      }
                      aria-invalid={!!errors.message}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 outline-none focus:border-secondary/50"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitting ? "Sending..." : "Send message"}
                    {!submitting && <Send size={15} />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
