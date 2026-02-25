"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Target, Users } from "lucide-react";
import { useState } from "react";

const values = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Integrity",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: <Eye size={28} />,
        title: "Transparency",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: <Lock size={28} />,
        title: "Confidentiality",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: <Target size={28} />,
        title: "Accuracy",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        icon: <Users size={28} />,
        title: "Long-Term Partnership",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

export default function CoreValuesSection() {
    return (
        <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">


            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2
                        className="text-5xl font-bold mb-6"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Our Core Values
                    </h2>
                    <p
                        className="max-w-2xl mx-auto text-lg"
                        style={{ color: "var(--color-text-muted)" }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </motion.div>

                {/* Floating Glass Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {values.map((value, index) => {
                        const [hovered, setHovered] = useState(false);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                animate={{
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.8,
                                    type: "spring",
                                    y: {
                                        repeat: Infinity,
                                        duration: 4 + index,
                                        ease: "easeInOut",
                                    },
                                }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className="group relative rounded-3xl p-10 border backdrop-blur-xl shadow-xl overflow-hidden"
                                style={{
                                    background: "rgba(255,255,255,0.65)",
                                    borderColor: hovered
                                        ? "var(--color-primary)"
                                        : "var(--color-border)",
                                    boxShadow: hovered
                                        ? "0 20px 50px rgba(0,0,0,0.15)"
                                        : "0 10px 30px rgba(0,0,0,0.08)",
                                }}
                            >
                                {/* Animated Light Sweep */}
                                <motion.div
                                    animate={{
                                        x: hovered ? "120%" : "-120%",
                                    }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                />

                                {/* Icon */}
                                <motion.div
                                    animate={{ rotate: hovered ? 10 : 0 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 shadow-lg"
                                    style={{
                                        background: "var(--color-primary)",
                                        color: "white",
                                    }}
                                >
                                    {value.icon}
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className="text-2xl font-semibold mb-4"
                                    style={{ color: "var(--color-primary)" }}
                                >
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p style={{ color: "var(--color-text-muted)" }}>
                                    {value.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}