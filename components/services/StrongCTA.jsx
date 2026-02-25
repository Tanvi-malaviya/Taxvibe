"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PrimaryButton, OutlineButton } from "@/components/ui/Button"; 

export default function StrongCTA() {
  return (
    <section className="relative py-12 overflow-hidden bg-[var(--background)]">



      <div className="relative max-w-5xl mx-auto px-6">

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-2xl bg-white/60 border border-[var(--color-border)] rounded-3xl p-16 text-center shadow-2xl overflow-hidden"
        >

          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-accent)] to-[var(--color-secondary)] opacity-30 blur-xl"></div>

          <div className="relative z-10">

            {/* Big Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] leading-tight">
              Let’s Turn Numbers  
              <span className="block text-[var(--color-accent)]">
                Into Growth.
              </span>
            </h2>

            <p className="mt-6 text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center">

           
               
                 <PrimaryButton href="/contact">
              Book Free Consultation
            </PrimaryButton>

           
              
             

              {/* Outline Button */}
              

            </div>

            {/* Mini Trust Line */}
            <p className="mt-10 text-sm text-[var(--color-text-muted)]">
              Trusted by 500+ businesses across India
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}