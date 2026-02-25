"use client";

import { motion } from "framer-motion";
import { PhoneCall, FileCheck, Calculator, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Initial Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.",
  },
  {
    icon: FileCheck,
    title: "Document Review & Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our experts carefully review financial records, statutory documents, GST filings, and audit reports to design a structured and compliant financial roadmap.",
  },
  {
    icon: Calculator,
    title: "Execution & Compliance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We ensure accurate tax filing, financial reporting, regulatory compliance, and strategic execution with complete transparency and professional diligence.",
  },
  {
    icon: RefreshCcw,
    title: "Ongoing Advisory & Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beyond compliance, we provide proactive advisory, periodic reviews, and continuous support to strengthen your financial foundation.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">


      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Our Structured Approach
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit Commodi eveniet quod ea quibusdam repudiandae, possimus a laborum cupiditate.

          </p>
        </motion.div>

        {/* Vertical Line */}
        <div className="relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full hidden md:block"
            style={{ background: "var(--color-accent)" }}
          />

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >

                  {/* Card */}
                  <div
                    className="relative md:w-1/2 p-10 rounded-3xl shadow-xl border backdrop-blur-xl"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {/* Big Step Number Background */}
                    <span
                      className="absolute top-6 right-8 text-8xl font-bold opacity-5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {index + 1}
                    </span>

                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                      style={{
                        background: "var(--color-primary)",
                        color: "#fff",
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <h3
                      className="text-2xl font-semibold mb-4"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {step.title}
                    </h3>

                    <p style={{ color: "var(--color-text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}