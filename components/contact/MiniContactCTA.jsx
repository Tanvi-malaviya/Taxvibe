"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function MiniContactCTA() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">

     

      <div className="relative max-w-4xl mx-auto px-6">

        <div className="bg-[var(--background)] border border-[var(--color-border)] rounded-3xl p-12 text-center shadow-xl">

          <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
            Need Immediate Assistance?
          </h3>

          <p className="text-[var(--color-text-muted)] mb-10">
           Lorem ipsum dolor sit amet consectetur adipisicing elit impedit temporibus minima odit officia aspernatur.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            {/* Call Button */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919876543210"
              className="flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold shadow-lg"
            >
              <Phone size={18} />
              Call Now
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919876543210"
              className="flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-semibold shadow-lg"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}