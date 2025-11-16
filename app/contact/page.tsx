"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("loading");
    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Contact Me
      </h1>

      <p className="text-gray-700 max-w-xl mb-8">
        Fill out the form below and I&apos;ll get back to you quickly.

      </p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md shadow-lg rounded-2xl p-8 border border-gray-200 space-y-5 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Full Name</label>
          <input
            name="name"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Write your message…"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-600 text-center font-semibold mt-2">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center font-semibold mt-2">
            Something went wrong. Try again.
          </p>
        )}
      </motion.form>
    </motion.div>
  );
}
