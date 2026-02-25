"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Calculator,
  Landmark,
  PieChart,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Tax Planning",
    slug: "tax-planning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    slug: "bookkeeping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    icon: Landmark,
    title: "Company Registration",
    slug: "company-registration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    icon: PieChart,
    title: "Financial Reporting",
    slug: "financial-reporting",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Compliance",
    slug: "audit-compliance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    slug: "business-advisory",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.",
  },
];

export default function ServicesPremium() {
  return (
    <section className="py-8 md:py-6 lg:py-12 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)]">
            Premium Accounting Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <PremiumCard key={i} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* CARD */
function PremiumCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--color-secondary)] transition duration-500" />

      {/* Card */}
      <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-md hover:shadow-2xl transition duration-500 text-center h-full flex flex-col">

        {/* Gradient Top */}
        <div className="absolute top-0 left-0 w-full h-20 sm:h-24 bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-accent)]/20 rounded-t-3xl" />

        {/* Icon */}
        <div className="relative flex justify-center mb-5 sm:mb-6">
          <motion.div
            whileHover={{ y: -6 }}
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-lg"
          >
            <Icon size={22} className="sm:hidden" />
            <Icon size={26} className="hidden sm:block lg:hidden" />
            <Icon size={34} className="hidden lg:block" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-text-main)] mb-3 sm:mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-6 flex-grow">
          {service.desc}
        </p>

        {/* CTA */}
        <Link
          href={`/services/${service.slug}`}
          className="flex justify-center items-center gap-2 text-[var(--color-primary)] font-semibold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300"
        >
          Learn More <ArrowRight size={18} />
        </Link>

      </div>
    </motion.div>
  );
}