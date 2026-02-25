"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = {
  "Tax & GST": [
    {
      q: "When is GST filing due?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
    },
    {
      q: "Can I claim input tax credit?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
    },
  ],
  "Compliance": [
    {
      q: "What are ROC compliance requirements?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
    },
    {
      q: "Do you handle company registration?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
    },
  ],
  "Accounting": [
    {
      q: "Do you offer monthly bookkeeping?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
    },
  ],
};

export default function FAQSection() {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">

        {/* LEFT - Sticky Categories */}
        <div className="md:col-span-1">
          <div className="sticky top-32 space-y-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`relative w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "bg-[var(--background)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT - FAQ Content */}
        <div className="md:col-span-3 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {faqData[activeCategory].map((faq, index) => (
                <motion.div
                  key={index}
                  layout
                  className="border border-[var(--color-border)] rounded-2xl p-6 shadow-sm bg-[var(--background)]"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center"
                  >
                    <span className="font-semibold text-[var(--color-primary)]">
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-[var(--color-accent)]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 text-[var(--color-text-muted)] text-sm"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}