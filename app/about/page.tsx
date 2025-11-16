"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <motion.div
      className="max-w-4xl mx-auto min-h-[70vh] px-6 pt-32 space-y-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        About Me
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        className="text-lg text-gray-700 leading-relaxed space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
       I&apos;m <span className="font-semibold">Maheen Adeeb</span> , an AI/ML Engineer
passionate about building real-world intelligent systems. I specialize in
LLM fine-tuning, multilingual translation pipelines, agentic workflows,
backend engineering, and deploying production-ready AI solutions.
<br />

        <br />
        <br />
        I focus on transforming complex ideas into elegant, scalable systems. My
        work spans speech-to-speech translation, conversational AI, backend
        automation tools, and ML model training/optimization.
      </motion.p>

      {/* What I Do */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
  What I Do</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Fine-tuning LLMs (DeepSeek, Gemma, Llama) using QLoRA & DPO</li>
          <li>Building end-to-end speech-to-speech translation systems</li>
          <li>Developing custom AI agents & backend automation tools</li>
          <li>Designing REST APIs with FastAPI + Next.js</li>
          <li>Creating dashboards, pipeline automation, and ML workflows</li>
          <li>Deploying AI apps on GCP, Vercel, Render, Streamlit, and HF Spaces</li>
        </ul>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="space-y-4 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "FastAPI",
            "Next.js",
            "Node.js",
            "TensorFlow",
            "PyTorch",
            "Transformers",
            "LangChain",
            "GCP",
            "Vertex AI",
            "Docker",
            "Git",
            "SQL",
            "Streamlit",
            "HuggingFace",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium shadow-sm hover:shadow transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Animated Journey Timeline */}
      <Timeline />
    </motion.div>
  );
}

