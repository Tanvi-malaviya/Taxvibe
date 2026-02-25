"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/homeabout.jpg')" }}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-24">

        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 mb-6 text-sm rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-medium"
          >
            Let’s Connect
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]"
          >
            Your Financial
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Success Starts Here
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[var(--color-text-muted)] max-w-xl"
          >
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque recusandae ad accusantium, ducimus laboriosam id molestias, esse officiis tempora quibusdam voluptate excepturi illum asperiores quod porro facilis beatae repellendus! Vitae.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <button className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold shadow-xl hover:scale-105 transition">
              Get Free Consultation
            </button>

            <button className="px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-xl font-semibold hover:bg-[var(--color-primary)] hover:text-white transition">
              View Services
            </button>
          </motion.div>
        </div>

        {/* RIGHT FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="p-10 rounded-3xl bg-white shadow-2xl border border-[var(--color-border)] relative overflow-hidden">

            {/* Accent Top Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]" />

            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              Quick Contact
            </h3>

            <div className="space-y-5 text-[var(--color-text-muted)]">
              <div>
                <p className="font-medium text-[var(--color-primary)]">Phone</p>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <p className="font-medium text-[var(--color-primary)]">Email</p>
                <p>info@yourfirm.com</p>
              </div>

              <div>
                <p className="font-medium text-[var(--color-primary)]">Location</p>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}