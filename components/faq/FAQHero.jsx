"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden">

      {/* Animated Background Lines */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-1/3 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-20"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-1/3 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 mb-6 text-sm rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-medium"
        >
          Help Center
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]"
        >
          Frequently Asked
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
            Questions
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto"
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.
        </motion.p>

      

      </div>
    </section>
  );
}