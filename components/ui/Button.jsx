"use client";

import Link from "next/link";

export function PrimaryButton({ children, href = "#", className = "" }) {
  return (
    <Link href={href}>
      <button
        className={`relative overflow-hidden px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
        style={{
          background: "var(--color-primary)",
          color: "white",
        }}
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -left-40 top-0 h-full w-40 bg-white/20 skew-x-12 animate-shine" />
        </span>

        {/* Glow */}
        <span className="absolute inset-0 rounded-xl bg-[var(--color-primary)] blur-md opacity-0 hover:opacity-40 transition duration-500" />

        {/* Text */}
        <span className="relative z-10">{children}</span>
      </button>
    </Link>
  );
}

export function OutlineButton({ children, href = "#", className = "" }) {
  return (
    <Link href={href}>
      <button
        className={`relative overflow-hidden px-7 py-3 rounded-xl border font-semibold transition-all duration-300 hover:scale-105 active:scale-95 group ${className}`}
        style={{
          borderColor: "var(--color-primary)",
          color: "var(--color-primary)",
        }}
      >
        {/* Animated Gradient Sweep */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent animate-sweep" />
        </span>

        {/* Liquid Fill Effect */}
        <span className="absolute inset-0 bg-[var(--color-primary)] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />

        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-xl border border-[var(--color-primary)] opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

        {/* Text */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
      </button>
    </Link>
  );
}
