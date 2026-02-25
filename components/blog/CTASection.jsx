"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 px-6 bg-[var(--background)]">
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto rounded-3xl p-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,var(--color-primary),var(--color-secondary))"
        }}
      >
        {/* Animated Glow */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-96 h-96 bg-white/20 blur-3xl rounded-full top-[-100px] left-[-100px]"
        />

        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute w-96 h-96 bg-white/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
        />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold !text-white">
            Need Expert Financial Guidance?
          </h2>

          <p className="mt-6 text-white/90 max-w-2xl mx-auto">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum voluptatibus unde molestias suscipit quo exercitationem.
          </p>

          <motion.div
            whileHover={{ y: -5 }}
            className="mt-10"
          >
            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-[var(--color-primary)] font-bold rounded-full shadow-2xl hover:shadow-white/40 transition">
                Book Free Consultation →
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}