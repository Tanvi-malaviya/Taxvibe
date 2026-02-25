"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative py-28 bg-[var(--color-light)] overflow-hidden">

      {/* Soft Gradient Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-secondary)]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent)]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 mb-6 text-sm rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-medium"
          >
            Our Blog
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] leading-tight"
          >
            Insights That Drive
            <span className="block text-[var(--color-secondary)]">
              Smarter Financial Decisions
            </span>
          </motion.h1>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[var(--color-text-muted)] max-w-lg"
          >
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias fugit quia enim, culpa natus maxime. Nesciunt quidem sapiente laboriosam, qui mollitia earum perspiciatis adipisci beatae possimus unde. Vel, sed dolores.
          </motion.p>

        

        </div>

        {/* RIGHT FLOATING BLOG CARDS */}
        <div className="relative hidden md:block">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-72 bg-white p-6 rounded-2xl shadow-xl"
          >
            <p className="text-sm text-[var(--color-secondary)] mb-2">
              Tax Planning
            </p>
            <h4 className="font-bold text-[var(--color-primary)]">
              How to Save Tax Legally in India
            </h4>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-28 right-0 w-72 bg-white p-6 rounded-2xl shadow-xl"
          >
            <p className="text-sm text-[var(--color-secondary)] mb-2">
              Compliance
            </p>
            <h4 className="font-bold text-[var(--color-primary)]">
              GST Registration Step-by-Step Guide
            </h4>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 left-16 w-72 bg-white p-6 rounded-2xl shadow-xl"
          >
            <p className="text-sm text-[var(--color-secondary)] mb-2">
              Business Tips
            </p>
            <h4 className="font-bold text-[var(--color-primary)]">
              LLP vs Private Limited Company
            </h4>
          </motion.div>

        </div>

      </div>
    </section>
  );
}