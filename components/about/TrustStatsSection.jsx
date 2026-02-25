"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: TrendingUp,
    number: 12,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: ShieldCheck,
    number: 98,
    suffix: "%",
    label: "Compliance Accuracy",
  },
  {
    icon: Award,
    number: 25,
    suffix: "+",
    label: "Industry Recognitions",
  },
];

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.floor(latest)
  );

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 2 });
    }
  }, [inView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function TrustStatsSection() {
  return (
    <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">

      {/* Moving Gradient Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-secondary), var(--color-primary))",
        }}
      />

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
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Trusted by Businesses Nationwide
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos praesentium officia est nihil dolores quas obcaecati tempora vel odit.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative p-10 rounded-3xl border backdrop-blur-xl text-center group"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "var(--color-background)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* Number */}
                <h3
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  <Counter value={stat.number} />
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </p>

                {/* Subtle Hover Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, var(--color-primary), transparent 70%)",
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