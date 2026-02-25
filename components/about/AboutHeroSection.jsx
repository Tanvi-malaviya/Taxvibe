"use client";

import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative py-32 bg-[var(--color-background)] overflow-hidden">

      {/* Large Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="text-[120px] md:text-[200px] font-bold opacity-5 select-none"
          style={{ color: "var(--color-primary)" }}
        >
          ABOUT
        </h1>
      </div>

      {/* Background Glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Trusted Financial Partners for Growing Businesses
          </h2>

          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit minima ducimus distinctio quod fuga, pariatur dolores sequi, sunt quidem quibusdam aspernatur doloremque porro vel? Et sit architecto debitis tempora.
          </p>

          {/* Mini Highlights */}
          <div className="space-y-4">
            {[
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
                <p style={{ color: "var(--color-text-muted)" }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL - Floating 3D Cards */}
        <div className="relative h-[400px]">

          {/* Card 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 left-10 w-60 p-6 rounded-2xl shadow-xl border backdrop-blur-xl"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              12+
            </h3>
            <p style={{ color: "var(--color-text-muted)" }}>
              Years Experience
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-0 right-10 w-60 p-6 rounded-2xl shadow-xl border backdrop-blur-xl"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              500+
            </h3>
            <p style={{ color: "var(--color-text-muted)" }}>
              Happy Clients
            </p>
          </motion.div>

          {/* Center Card */}
          <motion.div
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-8 rounded-3xl shadow-2xl border backdrop-blur-xl"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              Integrity
            </h3>
            <p style={{ color: "var(--color-text-muted)" }}>
              Transparency & Compliance
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}