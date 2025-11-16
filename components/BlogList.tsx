"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { PostMeta } from "@/lib/posts";

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="space-y-14">

      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h1>

      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {posts.map((post, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <BlogCard {...post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
