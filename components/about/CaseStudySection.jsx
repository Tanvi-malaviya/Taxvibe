"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    title: "Manufacturing Firm Tax Optimization",
    industry: "Manufacturing Industry",
    result: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Startup Financial Structuring",
    industry: "Tech Startup",
    result: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Audit & Compliance Recovery",
    industry: "Retail Chain",
    result: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function CaseStudySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-[var(--color-surface)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            Real Business Impact
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--color-text-muted)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        {/* Timeline Wrapper */}
        <div className="relative mt-16 md:mt-24">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border)] md:-translate-x-1/2" />

          {/* Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-[var(--color-primary)] md:-translate-x-1/2 origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-14 md:space-y-24">
            {cases.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] shadow-lg" />

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="w-full ml-12 md:ml-0 md:w-[45%] p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative group"
                    style={{
                      background: "var(--color-background)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <p className="text-sm mb-2 text-[var(--color-accent)]">
                      {item.industry}
                    </p>

                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[var(--color-primary)]">
                      {item.title}
                    </h3>

                    <p className="mb-6 text-sm sm:text-base text-[var(--color-text-muted)]">
                      {item.desc}
                    </p>

                    <div className="font-semibold text-sm sm:text-base text-[var(--color-primary)]">
                      {item.result}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}