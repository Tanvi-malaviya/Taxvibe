"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Compliance Assurance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Clock,
    title: "Timely & Fast Processing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Expertise",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">

      {/* Subtle Background Accent Glow */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Why Choose Us?
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-3xl shadow-lg border transition-all duration-300`}
                style={{
                  background: "var(--color-background)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Icon Circle */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                  style={{
                    background: "var(--color-primary)",
                    color: "white",
                  }}
                >
                  <Icon size={26} />
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.title}
                </h3>

                <p style={{ color: "var(--color-text-muted)" }}>
                  {item.desc}
                </p>

                {/* Accent Line Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-8 h-[3px] rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
