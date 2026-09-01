"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6">
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
      </motion.div>
    </main>
  );
}
