"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Clock,
    title: "Deadline Discipline",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Advisory",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 bg-[var(--background)] overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        
        {/* LEFT CONTENT (Sticky) */}
        <div className="lg:sticky lg:top-32 h-fit">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]"
          >
            Why Businesses <br />
            <span className="text-[var(--color-accent)]">Trust Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-[var(--color-text-muted)] max-w-md"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative">
          
          {/* Vertical Animated Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-5 top-0 w-[3px] bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full"
          />

          <div className="space-y-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Icon Circle */}
                <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-secondary)] shadow-md">
                  <feature.icon
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                {/* Card */}
                <div className="bg-[var(--color-surface)] p-6 rounded-xl shadow-md border border-[var(--color-border)] hover:shadow-xl transition duration-500">
                  <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}