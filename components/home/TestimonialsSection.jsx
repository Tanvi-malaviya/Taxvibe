"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Business Owner",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus asperiores vel, iure eveniet doloribus eligendi nobis voluptatibus",
  },
  {
    name: "Neha Shah",
    role: "Startup Founder",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus asperiores vel, iure eveniet doloribus eligendi nobis voluptatibus",
  },
  {
    name: "Amit Mehta",
    role: "Entrepreneur",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus asperiores vel, iure eveniet doloribus eligendi nobis voluptatibus",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 bg-[var(--color-background)] overflow-hidden">

   
     

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
            Client Success Stories
          </h2>
          <p className="text-lg mt-4 text-[var(--color-text-muted)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus asperiores vel, iure eveniet doloribus eligendi nobis voluptatibus.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.7 }}
              whileHover={{ rotateX: 4, rotateY: -4 }}
              className="relative p-12 rounded-3xl border backdrop-blur-xl bg-white/10 shadow-2xl"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-10 blur-xl" />

              {/* Big Quote Icon */}
              <Quote
                size={70}
                className="absolute -top-6 left-8 text-[var(--color-secondary)] opacity-20"
              />

              <p className="relative text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] mb-8">
                {testimonials[index].text}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="var(--color-accent)"
                    color="var(--color-accent)"
                  />
                ))}
              </div>

              <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                {testimonials[index].name}
              </h4>

              <p className="text-[var(--color-text-muted)]">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === i
                  ? "w-8 bg-[var(--color-accent)]"
                  : "w-3 bg-gray-400/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}