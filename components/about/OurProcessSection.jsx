"use client";

import { motion } from "framer-motion";
import { Search, FileText, LineChart, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Financial Assessment",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: FileText,
    title: "Strategic Planning",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: LineChart,
    title: "Execution",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Advisory",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function OurProcessSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
            How We Deliver Results
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* DESKTOP LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-10 left-0 h-[3px] w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"
          />

          {/* MOBILE VERTICAL LINE */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative text-center md:text-center pl-14 md:pl-0 group"
                >
                  {/* ICON */}
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-auto mb-6 md:mb-8 rounded-full flex items-center justify-center 
                    bg-white border border-[var(--color-border)] shadow-xl backdrop-blur-lg 
                    group-hover:shadow-2xl transition-all duration-500">

                    <Icon size={26} className="text-[var(--color-primary)] group-hover:scale-110 transition duration-300" />
                  </div>

                  {/* MOBILE DOT POSITION */}
                  <div className="md:hidden absolute left-2 top-6 w-4 h-4 rounded-full bg-[var(--color-primary)]"></div>

                  {/* CARD */}
                  <div className="p-5 md:p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-[var(--color-border)] shadow-lg transition-all duration-500 group-hover:shadow-2xl">

                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color-primary)] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}