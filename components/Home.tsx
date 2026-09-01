"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const STACK = [
  "Python",
  "FastAPI",
  "React/TS",
  "Postgres",
  "Next.js",
  "Three.js",
  "umap-learn",
  "sklearn",
  "n8n",
  "Docker",
  "RAG/LLM",
  "MCP",
  "OAuth2",
  "Tailwind",
  "shadcn",
];

const stats = [
  { value: "98%", label: "model accuracy" },
  { value: "4", label: "projects live" },
  { value: "2+", label: "years experience" },
];

const links = [
  { label: "Email", href: "mailto:imamsatrio357@gmail.com", value: "imamsatrio357@gmail.com" },
  { label: "GitHub", href: "https://github.com/imsatrio25", value: "@imsatrio25" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/imsatrio25/", value: "in/imsatrio25" },
];

const experience = [
  {
    role: "IT Specialist / AI Automation Developer",
    org: "PT Tata Bisnis Solusi",
    dates: "2025 — 2026",
    desc: "Built LLM fallback chains, MCP tooling, SharePoint OAuth2 integrations, and n8n automation workflows for client operations.",
  },
  {
    role: "ML Engineer Intern",
    org: "MSIB Gunadarma × BPBD Cianjur",
    dates: "2024",
    desc: "Developed an earthquake radius prediction model with 98% accuracy to support disaster response.",
  },
  {
    role: "Side Projects / Freelance",
    org: "Semua-AI · MatchLens",
    dates: "Ongoing",
    desc: "Founded Semua-AI, created MatchLens, and shipped automation tools for clients.",
  },
];

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Home({ projects }: { projects: ReactNode }) {
  return (
    <main className="min-h-screen">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-accent">
            imamsatrio.dev
          </a>
          <ul className="flex gap-6">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="top"
        className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-sm text-accent">imamsatrio.dev</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            AI Engineer building production AI products for Indonesian SMEs.{" "}
            <span className="text-neutral-400">
              From 98%-accurate ML models to live WhatsApp sales agents — I ship.
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              View Work
            </a>
            <a
              href="mailto:imamsatrio357@gmail.com"
              className="rounded-md border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-500"
            >
              Get in Touch
            </a>
          </div>
          <p className="mt-4 font-mono text-sm text-neutral-400">
            Open to: AI/ML Engineer roles — remote or Jakarta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10"
        >
          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-400 transition-colors hover:border-accent/60 hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        {...fadeUp}
        className="mx-auto max-w-2xl border-t border-neutral-800 px-6 py-24"
      >
        <p className="mb-4 font-mono text-sm text-accent">about</p>
        <div className="space-y-4 text-neutral-400">
          <p>
            AI engineer with 2+ years of experience, most recently as IT
            Specialist at PT Tata Bisnis Solusi (2025–2026) where I shipped
            machine learning systems into production.
          </p>
          <p>
            Earlier, as an MSIB Machine Learning intern with Gunadarma x BPBD
            Cianjur, I built an earthquake prediction model that reached 98%
            accuracy.
          </p>
          <p>
            What drives me is building AI that helps people — a sales agent for
            UMKM owners, football scouting tools, and anything else where a
            model can do real work.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl px-6 pb-24"
      >
        <motion.h2 variants={item} className="mb-6 font-mono text-sm text-accent">
          Experience
        </motion.h2>
        <motion.ol variants={container} className="relative border-l border-neutral-800 pl-6">
          {experience.map((entry) => (
            <motion.li key={entry.role} variants={item} className="mb-8 last:mb-0">
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-accent">{entry.dates}</p>
              <h3 className="mt-1 font-semibold">{entry.role}</h3>
              <p className="text-sm text-neutral-400">{entry.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {entry.desc}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </motion.section>

      <motion.section
        id="work"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl px-6 py-24"
      >
        <motion.h2 variants={item} className="mb-6 font-mono text-sm text-accent">
          Selected Work
        </motion.h2>
        {projects}
      </motion.section>

      <motion.section
        id="contact"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl px-6 py-24"
      >
        <motion.h2 variants={item} className="mb-6 font-mono text-sm text-accent">
          Contact
        </motion.h2>
        <motion.ul variants={container} className="space-y-3">
          {links.map((l) => (
            <motion.li key={l.label} variants={item}>
              <a
                href={l.href}
                className="group flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-3 text-neutral-300 transition-colors hover:text-white"
              >
                <span className="text-sm text-neutral-500 group-hover:text-accent">
                  {l.label}
                </span>
                <span className="break-all text-lg">{l.value}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-400">
        © 2026 Imam Satrio.
      </footer>
    </main>
  );
}
