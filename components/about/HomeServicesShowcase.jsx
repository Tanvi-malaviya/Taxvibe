"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, Briefcase, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "Tax Planning & Filing",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem odit soluta vitae molestias reprehenderit cum facilis.",
    },
    {
        icon: Calculator,
        title: "Accounting & Bookkeeping",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem odit soluta vitae molestias reprehenderit cum facilis.",
    },
    {
        icon: Briefcase,
        title: "Business Advisory",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem odit soluta vitae molestias reprehenderit cum facilis.",
    },
    {
        icon: ShieldCheck,
        title: "Audit & Compliance",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem odit soluta vitae molestias reprehenderit cum facilis.",
    },
];

export default function HomeServicesShowcase() {
    return (
        <section className="relative py-12 bg-[var(--color-surface)] overflow-hidden">



            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Comprehensive Financial Solutions
                    </h2>
                    <p
                        className="max-w-2xl mx-auto text-lg"
                        style={{ color: "var(--color-text-muted)" }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem odit soluta vitae molestias reprehenderit cum facilis! Repellat, expedita ab et cumque dolorem, tempora molestias, ducimus quos obcaecati fugiat aspernatur.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.7 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -12,
                                    rotateX: 4,
                                    rotateY: -4,
                                }}
                                className="group relative rounded-3xl p-8 border backdrop-blur-xl transition-all duration-500 perspective"
                                style={{
                                    background: "var(--color-background)",
                                    borderColor: "var(--color-border)",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Animated Gradient Border */}
                                <div className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div
                                        className="absolute inset-0 rounded-3xl animate-borderMove"
                                        style={{
                                            background:
                                                "linear-gradient(120deg, transparent, var(--color-primary), transparent)",
                                        }}
                                    />
                                </div>

                                {/* Side Accent Bar */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition duration-500"
                                    style={{
                                        background:
                                            "radial-gradient(circle at center, var(--color-primary) 0%, transparent 75%)",
                                    }}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 relative"
                                    style={{
                                        background: "var(--color-surface)",
                                        color: "var(--color-primary)",
                                    }}
                                >
                                    <Icon size={26} />

                                    {/* Glow Pulse */}
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition duration-500"
                                        style={{ background: "var(--color-primary)" }}
                                    />
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-semibold mb-4 transition-all duration-300 group-hover:translate-x-1"
                                    style={{ color: "var(--color-primary)" }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="transition-all duration-300 group-hover:translate-x-1"
                                    style={{ color: "var(--color-text-muted)" }}
                                >
                                    {service.desc}
                                </p>

                                {/* Hover Radial Light */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition duration-500"
                                    style={{
                                        background:
                                            "radial-gradient(circle at center, var(--color-primary), transparent 100%)",
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