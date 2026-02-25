"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    question: "Is my financial information secure?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque recusandae ad accusantium, ducimus laboriosam id molestias, esse.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque recusandae ad accusantium, ducimus laboriosam id molestias, esse.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
            Frequently Asked
            <span className="block text-[var(--color-accent)]">
              Questions
            </span>
          </h2>
          <p className="text-[var(--color-text-muted)]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, commodi ipsa obcaecati accusamus inventore blanditiis quae assumenda.
          </p>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="border border-[var(--color-border)] rounded-2xl bg-white shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-[var(--color-primary)]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: active === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--color-accent)]"
                >
                  <Plus />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-[var(--color-text-muted)] text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}