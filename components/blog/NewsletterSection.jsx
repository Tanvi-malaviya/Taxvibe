"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[var(--background)]">
      
      {/* Floating Gradient Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-72 h-72 bg-[var(--color-secondary)]/30 rounded-full blur-3xl top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-80 h-80 bg-[var(--color-accent)]/30 rounded-full blur-3xl bottom-0 right-0"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-[var(--color-primary)]">
            Get Financial Tips in Your Inbox
          </h2>

          <p className="mt-4 text-[var(--color-text-muted)]">
            Subscribe to receive latest tax updates, business advice, and smart investment strategies.
          </p>

          {/* Input */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] w-full sm:w-80"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}