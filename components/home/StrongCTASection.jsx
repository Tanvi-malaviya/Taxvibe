"use client";

import { motion } from "framer-motion";
import { PrimaryButton, OutlineButton } from "@/components/ui/Button"; 


export default function StrongCTASection() {
  return (
    <section className="relative py-12 overflow-hidden bg-[var(--color-background)]">

   
    

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl p-16 border backdrop-blur-xl shadow-2xl"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Ready to Simplify Your Finances?
          </h2>

          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Let our expert Chartered Accountants manage your compliance,
            taxation, and financial planning — so you can confidently grow your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">

            <PrimaryButton href="/contact">
              Book Free Consultation
            </PrimaryButton>

            <OutlineButton href="/contact">
              Contact Us
            </OutlineButton>

          </div>

        </motion.div>
      </div>
    </section>
  );
}