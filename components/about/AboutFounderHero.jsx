"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeFounderSpotlight() {
  return (
    <section className="relative py-16 md:py-12 bg-[var(--color-background)] overflow-x-hidden">
      
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16"
          style={{ color: "var(--color-primary)" }}
        >
          Leadership That Builds Financial Confidence
        </motion.h2>

        {/* Founder Image with Rotating Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center mb-10 md:mb-12"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute rounded-full border-2 
                       w-[240px] h-[240px] 
                       sm:w-[300px] sm:h-[300px] 
                       md:w-[360px] md:h-[360px]"
            style={{ borderColor: "var(--color-primary)" }}
          />

          {/* Founder Image */}
          <div
            className="relative rounded-full overflow-hidden shadow-2xl border-4
                       w-[200px] h-[200px]
                       sm:w-[260px] sm:h-[260px]
                       md:w-[300px] md:h-[300px]"
            style={{ borderColor: "var(--color-surface)" }}
          >
            <Image
              src="/ceo.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Quote Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto backdrop-blur-xl border rounded-3xl 
                     p-6 sm:p-8 md:p-10 shadow-xl"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="text-base sm:text-lg leading-relaxed mb-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus sit minima ducimus distinctio quod fuga, pariatur
            dolores sequi.”
          </p>

          <h4
            className="text-lg sm:text-xl font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            CA Rajesh Patel
          </h4>
          <p className="text-sm sm:text-base"
             style={{ color: "var(--color-text-muted)" }}>
            Founder & Managing Partner
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 md:mt-16"
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Clients Served" },
            { number: "98%", label: "Client Retention" },
          ].map((item, index) => (
            <div key={index}>
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                {item.number}
              </h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}