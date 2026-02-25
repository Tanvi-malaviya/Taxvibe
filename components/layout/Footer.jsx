"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <footer className="relative pt-28 pb-12 bg-[var(--color-background)] overflow-hidden">

      {/* ===== MOVING GRADIENT BORDER ===== */}
      <div className="absolute inset-0 p-[2px] rounded-none pointer-events-none">
        <div className="absolute inset-0 animate-gradientMove bg-[length:300%_300%]"
          style={{
            backgroundImage:
              "linear-gradient(120deg, var(--color-accent), var(--color-secondary), var(--color-primary), var(--color-accent))",
          }}
        />
      </div>

      {/* ===== 3D BACKGROUND LAYERS ===== */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== GLASS MAIN CONTAINER ===== */}
        <div
          className="relative backdrop-blur-xl rounded-3xl border shadow-2xl p-14"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >

          <div className="grid md:grid-cols-4 gap-12">

            {/* Company */}
            <div>
              <h3
                className="text-2xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--color-primary)" }}
              >
                <Image
                  src="/mainlogo1.png"
                  alt="TaxVibe Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />

                TaxVibe
              </h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum hic corrupti sequi ducimus eius quia eligendi ratione ab.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4"
                style={{ color: "var(--color-primary)" }}>
                Quick Links
              </h4>

              <div className="space-y-3">
                {quickLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="relative group block"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4"
                style={{ color: "var(--color-primary)" }}>
                Services
              </h4>

              <ul
                className="space-y-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                <li>GST Filing</li>
                <li>Income Tax Return</li>
                <li>Company Audit</li>
                <li>Financial Advisory</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4"
                style={{ color: "var(--color-primary)" }}>
                Contact
              </h4>

              <div className="space-y-4 text-sm">

                <div className="flex items-center gap-3"
                  style={{ color: "var(--color-text-muted)" }}>
                  <Phone size={16} />
                  +91 98765 43210
                </div>

                <div className="flex items-center gap-3"
                  style={{ color: "var(--color-text-muted)" }}>
                  <Mail size={16} />
                  info@taxvibe.com
                </div>

                <div className="flex items-center gap-3"
                  style={{ color: "var(--color-text-muted)" }}>
                  <MapPin size={16} />
                  Ahmedabad, Gujarat
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-4">
                  {[Linkedin, Instagram].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <Icon size={18} />
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="border-t mt-12 pt-6 text-center text-sm"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            © {new Date().getFullYear()} Taxvibe Advisory. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}