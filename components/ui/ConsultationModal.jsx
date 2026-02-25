"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* MODAL WRAPPER */}
        <motion.div
  initial={{ scale: 0.9, opacity: 0, y: 40 }}
  animate={{ scale: 1, opacity: 1, y: 0 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="fixed inset-0 z-50 flex items-center justify-center p-4"
>
  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-10 relative max-h-[90vh] flex flex-col justify-between">

    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-500 hover:text-black"
    >
      <X size={22} />
    </button>

    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
        Free Consultation
      </h2>

      <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
        Fill the form and our expert will contact you soon.
      </p>

      <form className="mt-5 space-y-3">
        <input className="w-full border rounded-lg px-4 py-2.5" placeholder="Your Name" />
        <input className="w-full border rounded-lg px-4 py-2.5" placeholder="Email Address" />
        <input className="w-full border rounded-lg px-4 py-2.5" placeholder="Phone Number" />

        <textarea
          rows="3"
          placeholder="Your Requirement"
          className="w-full border rounded-lg px-4 py-2.5"
        />
      </form>
    </div>

    <button className="w-full mt-4 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold">
      Submit Request
    </button>

  </div>
</motion.div>
        </>
      )}
    </AnimatePresence>
  );
}