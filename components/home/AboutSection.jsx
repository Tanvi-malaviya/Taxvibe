"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-12 overflow-x-hidden bg-[var(--color-background)]">
      
      {/* Decorative Gradient Blur */}
      <div
        className="absolute -left-32 top-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto lg:mx-0"
        >
          {/* Image */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Image
              src="/homeabout.jpg"
              alt="Accounting Professional"
              width={600}
              height={500}
              className="object-cover w-full h-[320px] sm:h-[420px] md:h-[480px]"
            />
          </div>

          {/* Floating Experience Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg"
            style={{
              background: "var(--color-primary)",
              color: "white",
            }}
          >
            <p className="text-base sm:text-lg font-bold">15+ Years</p>
            <p className="text-xs sm:text-sm opacity-90">
              Professional Experience
            </p>
          </motion.div>
        </motion.div>

        {/* CONTENT SIDE */}
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
            Trusted Financial Experts
          </h2>

          <p
            className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
            consequatur veritatis eius deleniti excepturi quidem libero rem
            veniam sint sit debitis iusto iste voluptatem quasi.
          </p>

          {/* Feature Points */}
          <div className="space-y-6">
            
            <div className="flex gap-4 items-start">
              <ShieldCheck
                size={26}
                className="mt-1"
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <h4
                  className="font-semibold text-base sm:text-lg"
                  style={{ color: "var(--color-primary)" }}
                >
                  100% Secure & Confidential
                </h4>
                <p style={{ color: "var(--color-text-muted)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Award
                size={26}
                className="mt-1"
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <h4
                  className="font-semibold text-base sm:text-lg"
                  style={{ color: "var(--color-primary)" }}
                >
                  Certified Professionals
                </h4>
                <p style={{ color: "var(--color-text-muted)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Users
                size={26}
                className="mt-1"
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <h4
                  className="font-semibold text-base sm:text-lg"
                  style={{ color: "var(--color-primary)" }}
                >
                  900+ Happy Clients
                </h4>
                <p style={{ color: "var(--color-text-muted)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}