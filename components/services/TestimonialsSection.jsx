"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    name: "Priya Shah",
    role: "Business Owner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    name: "Amit Patel",
    role: "SME Director",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex =
    (index - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (index + 1) % testimonials.length;

  return (
    <section className="relative py-12 bg-[var(--background)] overflow-hidden">

      

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
            Client <span className="text-[var(--color-accent)]">Success Stories</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Trusted by growing businesses across industries.
          </p>
        </div>

        {/* Testimonial Layout */}
        <div className="relative flex items-center justify-center">

          {/* Left Blurred Card */}
          <div className="hidden md:block absolute left-0 w-64 opacity-40 scale-90">
            <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow-md border border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                {testimonials[prevIndex].text}
              </p>
            </div>
          </div>

          {/* Main Active Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 bg-[var(--color-surface)] max-w-xl p-10 rounded-3xl shadow-xl border border-[var(--color-border)]"
            >
              <Quote
                size={40}
                className="text-[var(--color-secondary)] mb-6 mx-auto"
              />

              <p className="text-[var(--color-text-main)] leading-relaxed mb-8">
                “{testimonials[index].text}”
              </p>

              <h4 className="font-semibold text-lg text-[var(--color-primary)]">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-[var(--color-accent)]">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Right Blurred Card */}
          <div className="hidden md:block absolute right-0 w-64 opacity-40 scale-90">
            <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow-md border border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                {testimonials[nextIndex].text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}