import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ===== SERVICE DATA (same as yours) ===== */
const servicesData = {
  "tax-planning": {
    title: "Tax Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde. Rerum repudiandae, inventore veniam est incidunt ipsam dolores.",
    benefits: [
      "Reduce tax burden legally",
      "Maximize deductions",
      "Expert tax strategies",
      "Year-round tax support",
    ],
  },

  bookkeeping: {
    title: "Bookkeeping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde. Rerum repudiandae, inventore veniam est incidunt ipsam dolores.",
    benefits: [
      "Accurate financial tracking",
      "Real-time reports",
      "Error-free compliance",
      "Time-saving automation",
    ],
  },

  "company-registration": {
    title: "Company Registration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    benefits: [
      "Quick registration process",
      "Legal compliance support",
      "Document preparation",
      "Business setup guidance",
    ],
  },

  "financial-reporting": {
    title: "Financial Reporting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde. Rerum repudiandae, inventore veniam est incidunt ipsam dolores.",
    benefits: [
      "Accurate financial insights",
      "Better business decisions",
      "Investor-ready reports",
      "Growth tracking",
    ],
  },

  "audit-compliance": {
    title: "Audit & Compliance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde. Rerum repudiandae, inventore veniam est incidunt ipsam dolores.",
    benefits: [
      "Regulatory compliance",
      "Financial transparency",
      "Risk reduction",
      "Expert audit reports",
    ],
  },

  "business-advisory": {
    title: "Business Advisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est incidunt labore unde. Rerum repudiandae, inventore veniam est incidunt ipsam dolores.",
    benefits: [
      "Growth strategies",
      "Profit optimization",
      "Risk management",
      "Financial planning",
    ],
  },
};

export default async function ServiceDetail(props) {
  const { slug } = await props.params;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="py-32 text-center text-3xl font-bold">
        Service Not Found
      </div>
    );
  }

  return (
    <main className="bg-[var(--background)] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-primary)] leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--color-text-muted)]">
              {service.description}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:scale-105 transition"
            >
              Get Free Consultation <ArrowRight size={20} />
            </Link>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[var(--color-primary)]">
              Why Choose This Service?
            </h3>

            <ul className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="text-[var(--color-accent)] mt-1" />
                  <span className="text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= BENEFITS TIMELINE ================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-20 text-[var(--color-primary)]">
            Key Advantages
          </h2>

          <div className="relative border-l-4 border-[var(--color-accent)] space-y-10 pl-8 sm:pl-10">

            {service.benefits.map((benefit, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-[var(--color-accent)] rounded-full" />
                <h4 className="text-lg sm:text-xl font-semibold">{benefit}</h4>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-12 md:py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-10 md:mb-16 text-[var(--color-primary)]">
            How We Deliver Results
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            <ProcessStep number="01" title="Consultation" desc="Lorem ipsum dolor sit amet." />
            <ProcessStep number="02" title="Strategic Planning" desc="Lorem ipsum dolor sit amet." />
            <ProcessStep number="03" title="Implementation" desc="Lorem ipsum dolor sit amet." />

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 md:py-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white p-8 sm:p-12 lg:p-16 rounded-3xl text-center shadow-2xl">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold !text-white">
              Let’s Build a Stronger Financial Future
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 sm:px-10 sm:py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl hover:scale-110 transition"
            >
              Book Consultation <ArrowRight size={20} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

/* ===== PROCESS STEP ===== */
function ProcessStep({ number, title, desc }) {
  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mb-3">
        {number}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-[var(--color-text-muted)]">{desc}</p>
    </div>
  );
}