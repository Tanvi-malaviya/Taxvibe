"use client";

import Image from "next/image";
import { useEffect, useState, use } from "react";
const blogData = {
  "save-tax-legally-india": {
    title: "How to Save Tax Legally in India",
    image: "/blog1.jfif",
    content: [
      {
        id: "intro",
        title: "Introduction",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "why-tax-planning",
        title: "Why Tax Planning is Important",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "section-80c",
        title: "Use Section 80C Deductions",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "health-insurance",
        title: "Claim Health Insurance Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "home-loan-benefits",
        title: "Home Loan Tax Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "capital-gains",
        title: "Capital Gains Tax Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "business-tax-saving",
        title: "Tax Saving for Businesses",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "financial-planning",
        title: "Long-Term Financial Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "common-mistakes",
        title: "Common Tax Saving Mistakes",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "conclusion",
        title: "Conclusion",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },
    ],
  },
   "gst-registration-guide": {
    title: "GST Registration Complete Guide",
    image: "/blog2.jpg",
    content: [
      {
        id: "intro",
        title: "Introduction",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "why-tax-planning",
        title: "Why Tax Planning is Important",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "section-80c",
        title: "Use Section 80C Deductions",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "health-insurance",
        title: "Claim Health Insurance Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "home-loan-benefits",
        title: "Home Loan Tax Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "capital-gains",
        title: "Capital Gains Tax Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "business-tax-saving",
        title: "Tax Saving for Businesses",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "financial-planning",
        title: "Long-Term Financial Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "common-mistakes",
        title: "Common Tax Saving Mistakes",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "conclusion",
        title: "Conclusion",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },
    ],
  },
    "llp-vs-private-limited": {
    title: "LLP vs Private Limited Company",
    image: "/blog3.jpg",
    content: [
      {
        id: "intro",
        title: "Introduction",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "why-tax-planning",
        title: "Why Tax Planning is Important",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "section-80c",
        title: "Use Section 80C Deductions",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "health-insurance",
        title: "Claim Health Insurance Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "home-loan-benefits",
        title: "Home Loan Tax Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "capital-gains",
        title: "Capital Gains Tax Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "business-tax-saving",
        title: "Tax Saving for Businesses",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "financial-planning",
        title: "Long-Term Financial Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "common-mistakes",
        title: "Common Tax Saving Mistakes",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "conclusion",
        title: "Conclusion",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },
    ],
  },
    "investment-options-2026": {
    title: "Top Investment Options in 2026",
    image: "/blog4.jpg",
    content: [
      {
        id: "intro",
        title: "Introduction",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "why-tax-planning",
        title: "Why Tax Planning is Important",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "section-80c",
        title: "Use Section 80C Deductions",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "health-insurance",
        title: "Claim Health Insurance Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "home-loan-benefits",
        title: "Home Loan Tax Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "capital-gains",
        title: "Capital Gains Tax Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "business-tax-saving",
        title: "Tax Saving for Businesses",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "financial-planning",
        title: "Long-Term Financial Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "common-mistakes",
        title: "Common Tax Saving Mistakes",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "conclusion",
        title: "Conclusion",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },
    ],
  },
    "smart-tax-planning-strategies": {
    title: "Top Investment Options in 2026",
    image: "/mainblog.png",
    content: [
      {
        id: "intro",
        title: "Introduction",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "why-tax-planning",
        title: "Why Tax Planning is Important",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "section-80c",
        title: "Use Section 80C Deductions",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "health-insurance",
        title: "Claim Health Insurance Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "home-loan-benefits",
        title: "Home Loan Tax Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "capital-gains",
        title: "Capital Gains Tax Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "business-tax-saving",
        title: "Tax Saving for Businesses",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "financial-planning",
        title: "Long-Term Financial Planning",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "common-mistakes",
        title: "Common Tax Saving Mistakes",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },

      {
        id: "conclusion",
        title: "Conclusion",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. We conduct an in-depth discussion to understand your business model, compliance requirements, taxation structure, and long-term financial objectives. Our goal is to build clarity before execution.`,
      },
    ],
  }
};
export default function BlogDetails({ params }) {

  // ✅ FIX HERE
  const { slug } = use(params);

  const blog = blogData[slug];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (window.scrollY / totalHeight) * 100;
      setProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) return <div className="p-20">Blog not found</div>;

  return (
    <div className="bg-[var(--background)]">

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[var(--color-secondary)] z-50"
        style={{ width: `${progress}%` }}
      />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image src={blog.image} fill className="object-cover" alt="hero" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-white max-w-3xl px-6">
          <h1 className="text-5xl font-bold">{blog.title}</h1>
          <p className="mt-4 text-lg opacity-90">
            Published on March 2026 • 5 min read
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12">

        {/* TOC */}
        <aside className="hidden lg:block sticky top-28 h-fit">
          <h4 className="font-bold text-xl mb-6 text-[var(--color-primary)]">
            Table of Contents
          </h4>

          <ul className="space-y-3">
            {blog.content.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* ARTICLE */}
        <article className="lg:col-span-3 space-y-12">
          {blog.content.map((sec) => (
            <div key={sec.id} id={sec.id}  className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                {sec.title}
              </h2>

              <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
                {sec.text}
              </p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}