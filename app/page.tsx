"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">

      {/* Soft gradient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-300/20 rounded-full blur-[200px] -z-10" />

      {/* Hero Section */}
      <motion.section
        className="text-center py-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Maheen Adeeb
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          AI/ML Engineer • LLM Fine-Tuning • Full-Stack Developer • MLOps
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-5 mt-10">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            View Projects
          </Link>

          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition"
          >
            Read Blog
          </Link>
        </div>
      </motion.section>

      {/* Featured Section */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Highlighted Work</h2>
        <p className="text-gray-700 max-w-2xl">
          Explore some of my top AI, machine learning, and full-stack projects.
        </p>
      </motion.section>
    </div>
  );
}
