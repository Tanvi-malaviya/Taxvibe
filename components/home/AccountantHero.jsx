"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, ShieldCheck, FileText } from "lucide-react";
import { OutlineButton, PrimaryButton } from "../ui/Button";

function Counter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export default function AccountantHeroPurple() {
  return (
  <section className="relative min-h-screen flex items-center pt-28 md:pt-32 lg:pt-0 overflow-x-hidden">
      
      {/* Animated Blob */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[-150px] top-[-150px] sm:right-[-200px] sm:top-[-200px] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-title"
          >
            Reliable Accounting <br />
            <span className="text-[var(--color-accent)]">
              Smart Financial Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0 text-[var(--color-text-muted)]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ut!
            Illo quasi iure odit, ut optio eos possimus a, provident, inventore
            quas eaque debitis similique cum architecto impedit repellendus modi.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <PrimaryButton href="/contact">
              Book Consultation
            </PrimaryButton>

            <OutlineButton href="/services">
              View Services
            </OutlineButton>
          </div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="rounded-3xl p-6 sm:p-8 shadow-xl w-full max-w-md mx-auto md:mx-0"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h3
            className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left"
            style={{ color: "var(--color-primary)" }}
          >
            Our Expertise
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ShieldCheck size={28} style={{ color: "var(--color-primary)" }} />
              <p className="text-base sm:text-lg font-semibold">
                <Counter end={15} /> Years Experience
              </p>
            </div>

            <div className="flex items-center gap-4">
              <TrendingUp size={28} style={{ color: "var(--color-accent)" }} />
              <p className="text-base sm:text-lg font-semibold">
                <Counter end={900} /> Clients Served
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FileText size={28} style={{ color: "var(--color-secondary)" }} />
              <p className="text-base sm:text-lg font-semibold">
                100% Compliance & Accuracy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}