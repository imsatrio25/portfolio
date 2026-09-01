"use client";

import { motion } from "framer-motion";

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

const links = [
  { label: "Email", href: "mailto:imamsatrio357@gmail.com", value: "imamsatrio357@gmail.com" },
  { label: "GitHub", href: "https://github.com/imsatrio25", value: "@imsatrio25" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/imsatrio25/", value: "in/imsatrio25" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-6">
      <section className="flex flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-sm text-accent">imamsatrio.dev</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Imam Satrio
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Software engineer building SaaS, APIs, and full-stack products.
          </p>
          <p className="mt-2 font-mono text-sm text-neutral-500">
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

      <section id="contact" className="py-16">
        <h2 className="mb-6 font-mono text-sm text-accent">Contact</h2>
        <ul className="space-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-3 text-neutral-300 transition-colors hover:text-white"
              >
                <span className="text-sm text-neutral-500 group-hover:text-accent">
                  {l.label}
                </span>
                <span className="text-lg">{l.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        © 2026 Imam Satrio.
      </footer>
    </main>
  );
}
