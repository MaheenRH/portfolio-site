"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  desc: string;
  link: string;
}

export default function ProjectCard({ title, desc, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{desc}</p>

      <a
        href={link}
        target="_blank"
        className="text-primary font-semibold hover:text-secondary"
      >
        View Project →
      </a>
    </motion.div>
  );
}
