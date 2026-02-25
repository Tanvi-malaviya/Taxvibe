"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname(); // ⭐ current route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          background: scrolled ? "var(--color-surface)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
        <Link href="/" className="flex items-center gap-2">

  {/* Logo Image */}
  <Image
    src="/mainlogo1.png"   // or /logo.svg
    alt="TaxVibe Logo"
    width={40}
    height={40}
    className="object-contain"
    priority
  />

  {/* Text Logo */}
  <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-primary)]">
    Tax<span className="text-[var(--color-accent)]">Vibe</span>
  </h2>

</Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <Link key={i} href={link.href}>
                  <span
                    className={`font-medium transition relative
                      ${
                        isActive
                          ? "text-[var(--color-primary)]"
                          : "hover:text-[var(--color-primary)]"
                      }`}
                  >
                    {link.name}

                    {/* Active Underline */}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-primary)] rounded"></span>
                    )}
                  </span>
                </Link>
              );
            })}

            {/* Consultation Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:scale-105 transition"
            >
              Free Consultation
            </button>
          </nav>

          {/* Mobile Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden p-6 bg-white shadow-lg"
            >
              <div className="flex flex-col gap-5">

                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={i}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium ${
                        isActive
                          ? "text-[var(--color-primary)] font-semibold"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Consultation Button */}
                <button
                  onClick={() => {
                    setModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="mt-3 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold"
                >
                  Free Consultation
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MODAL */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}