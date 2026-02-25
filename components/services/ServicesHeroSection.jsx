"use client";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";

export default function HeroServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24">
      
    

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[var(--color-secondary)]/20 text-[var(--color-primary)] mb-6">
              Professional Accounting Services
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--foreground)]">
              Smart Accounting <br />
              <span className="text-[var(--color-primary)]">
                For Growing Businesses
              </span>
            </h1>

            <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde. Rerum repudiandae, inventore veniam est incidunt ipsam dolores pariatur ullam quasi omnis in eligendi, quam optio neque.
            </p>

        

            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10">
              <Feature icon={<ShieldCheck />} text="Trusted Advisors" />
              <Feature icon={<TrendingUp />} text="Growth Focused" />
              <Feature icon={<CheckCircle />} text="100% Compliance" />
            </div>
          </motion.div>

          {/* RIGHT SIDE — STATS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[var(--color-surface)] p-10 rounded-3xl shadow-xl border border-[var(--color-border)]">

              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
                Why Businesses Choose Us
              </h3>

              <div className="space-y-6">

                <Stat number="500+" label="Clients Served" />
                <Stat number="15+" label="Years Experience" />
                <Stat number="98%" label="Client Satisfaction" />
                <Stat number="24/7" label="Support Available" />

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Feature Item */
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-[var(--color-text-main)] font-medium">
      <div className="p-2 rounded-lg bg-[var(--color-secondary)]/20 text-[var(--color-primary)]">
        {icon}
      </div>
      {text}
    </div>
  );
}

/* Stat Item */
function Stat({ number, label }) {
  return (
    <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-4">
      <span className="text-3xl font-extrabold text-[var(--color-accent)]">
        {number}
      </span>
      <span className="text-[var(--color-text-muted)]">{label}</span>
    </div>
  );
}