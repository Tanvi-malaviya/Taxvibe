"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, OutlineButton } from "@/components/ui/Button";

export default function StrategicCTASection() {
  return (
    <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">

     

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, type: "spring" }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-16 border backdrop-blur-xl text-center shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.7)",
            borderColor: "var(--color-border)",
          }}
        >
          {/* Glow Layer on Hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-10 blur-2xl transition duration-700"
            style={{ background: "var(--color-primary)" }}
          />

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Let’s Build a Stronger <br /> Financial Future Together
          </h2>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto text-lg mb-12"
            style={{ color: "var(--color-text-muted)" }}
          >
           Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <PrimaryButton href="/contact">
              Schedule Consultation
            </PrimaryButton>

            <OutlineButton href="/services">
              Explore Services
              <ArrowRight size={18} className="inline ml-2" />
            </OutlineButton>
          </div>

        </motion.div>
      </div>
    </section>
  );
}