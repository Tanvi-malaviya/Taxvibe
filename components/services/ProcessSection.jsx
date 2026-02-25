"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, BarChart3, LifeBuoy } from "lucide-react";

const steps = [
    {
        icon: MessageCircle,
        title: "Free Consultation",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: FileText,
        title: "Document Collection",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: BarChart3,
        title: "Analysis & Filing",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: LifeBuoy,
        title: "Ongoing Support",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

export default function ProcessSection() {
    return (
        <section className="relative py-28 bg-[var(--color-surface)] overflow-hidden">



            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
                        Our <span className="text-[var(--color-accent)]">Process</span>
                    </h2>
                    <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        A structured and transparent workflow designed to simplify your
                        financial journey.
                    </p>
                </motion.div>

                {/* Curved Flow Layout */}
                <div className="relative grid md:grid-cols-2 gap-y-20 gap-x-16">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md hover:shadow-xl transition duration-500 ${i % 2 === 0 ? "md:mt-0" : "md:mt-5"
                                }`}
                        >
                            {/* Step Number Glow */}
                            <div className="absolute -top-6 left-8 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-bold shadow-lg">
                                {i + 1}
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                    <step.icon size={22} />
                                </div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}

                    {/* Center Vertical Beam */}
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full opacity-30"></div>
                </div>
            </div>
        </section>
    );
}