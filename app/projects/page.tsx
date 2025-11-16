"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-14">

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-gray-700 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A collection of AI/ML, full-stack, and automation projects I’ve built.
      </motion.p>

      {/* Animated Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {[
          {
            title: "AI Job Application Tracker",
            desc: "Python + Gmail API + Google Sheets + GPT LLM automation.",
            link: "https://github.com/MaheenRH/job-application-tracker-ai",
          },
          {
            title: "Water Intake Tracker",
            desc: "FastAPI backend + hydration logging + API endpoints.",
            link: "https://github.com/MaheenRH/water-tracker-backend",
          },
          {
            title: "SoulBridge Mental Health Chatbot",
            desc: "Emotion-aware chatbot using GPT-4o-mini + Hugging Face.",
            link: "https://github.com/MaheenRH/SoulBridge-Chatbot",
          },
          {
            title: "Rainfall Prediction (ANN)",
            desc: "Predicting rainfall using Artificial Neural Networks.",
            link: "https://github.com/MaheenRH/rainfall-prediction-ANN",
          },
          {
            title: "Medical Imaging Pipeline",
            desc: "MRI segmentation model using preprocessing + CNNs.",
            link: "https://github.com/MaheenRH/medical-image-analysis",
          },
          {
            title: "Car Detection with Neural Networks",
            desc: "CNN-based car classifier using deep learning.",
            link: "https://github.com/MaheenRH/Car-Detection-Using-NN-Models",
          },
        ].map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
