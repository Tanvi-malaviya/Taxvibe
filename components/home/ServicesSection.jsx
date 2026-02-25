"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Landmark,
  Calculator,
  Briefcase,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Income Tax Return",
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Landmark,
    title: "GST Registration & Filing",
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Briefcase,
    title: "Business Registration",
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Compliance",
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">

    
    

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
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
            Our Professional Services
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi iusto dolore iure, assumenda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-3xl shadow-lg border transition-all duration-300 group"
                style={{
                  background: "var(--color-background)",
                  borderColor: "var(--color-border)",
                }}
              >
              

                {/* Icon */}
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
                  {service.title}
                </h3>

                <p style={{ color: "var(--color-text-muted)" }}>
                  {service.desc}
                </p>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at top right, var(--color-secondary), transparent 60%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
