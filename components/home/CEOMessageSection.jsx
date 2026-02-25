"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOMessageSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-x-hidden bg-[var(--color-background)]">
      
      {/* Animated Graph Line Background */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.path
          d="M0,256L120,230C240,203,480,149,720,165C960,181,1200,267,1320,293L1440,320"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </motion.svg>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* CEO Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto lg:mx-0"
        >
          <div
            className="rounded-3xl overflow-hidden shadow-xl border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Image
              src="/ceo.jpg"
              alt="CEO"
              width={500}
              height={600}
              className="object-cover w-full h-[350px] sm:h-[450px] md:h-[520px]"
            />
          </div>

          {/* Signature Block */}
          <div
            className="absolute bottom-4 left-4 sm:-bottom-6 sm:left-6 px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-lg text-center sm:text-left"
            style={{
              background: "var(--color-primary)",
              color: "white",
            }}
          >
            <p className="text-sm sm:text-lg font-semibold">
              CA Rahul Sharma
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              Founder & Managing Director
            </p>
          </div>
        </motion.div>

        {/* CEO Message Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            A Message from Our Founder
          </h2>

          <p
            className="text-base sm:text-lg mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos
            quas aliquid hic quo, dignissimos molestias nemo iure officiis
            molestiae laborum tenetur nam quae repellat illo.
          </p>

          <p
            className="text-base sm:text-lg mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem
            corrupti impedit aspernatur natus, recusandae unde asperiores vel
            cumque, aperiam accusantium nihil.
          </p>

          <p
            className="font-semibold text-base sm:text-lg"
            style={{ color: "var(--color-accent)" }}
          >
            “Integrity, precision, and commitment define our work.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}