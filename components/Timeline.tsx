"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021 → 2022",
    title: "Early Curiosity & Foundations",
    description:
      "Started learning Python, data analytics, and core machine learning concepts. Built small ML projects and practiced hands-on coding.",
  },
  {
    year: "2022 → 2023",
    title: "Deep Dive into AI & ML",
    description:
      "Completed advanced ML courses, worked with CNNs, NLP, and automation tools. Created my first end-to-end ML pipelines.",
  },
  {
    year: "2023 → 2024",
    title: "AI Engineering + LLMs",
    description:
      "Shifted into LLM fine-tuning, multilingual translation, and backend engineering. Built real systems using Whisper, GPT-4o, and HuggingFace models.",
  },
  {
    year: "2024 → Present",
    title: "Building Production-Ready AI Systems",
    description:
      "Created full AI pipelines—speech-to-speech translation, chatbots, agents, and full-stack apps. Working with DeepSeek, Gemma, QLoRA, and LLM evaluation frameworks.",
  },
];

export default function Timeline() {
  return (
    <div className="mt-16">
      <motion.h2
        className="text-3xl font-bold mb-10 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Journey
      </motion.h2>

      <div className="relative border-l-2 border-purple-300 ml-4 space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="ml-8 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Purple Dot */}
            <div className="absolute -left-5 top-1 w-4 h-4 bg-purple-600 rounded-full shadow-md"></div>

            <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>

            <p className="font-semibold text-purple-700 mt-1">{item.title}</p>

            <p className="text-gray-700 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
