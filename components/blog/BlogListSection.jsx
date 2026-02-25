"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
    {
        title: "How to Save Tax Legally in India",
        category: "Tax Planning",
        image: "/blog1.jfif",
        slug: "save-tax-legally-india",
    },
    {
        title: "GST Registration Complete Guide",
        category: "GST",
        image: "/blog2.jpg",
        slug: "gst-registration-guide",
    },
    {
        title: "LLP vs Private Limited Company",
        category: "Business",
        image: "/blog3.jpg",
        slug: "llp-vs-private-limited",
    },
    {
        title: "Top Investment Options in 2026",
        category: "Investments",
        image: "/blog4.jpg",
        slug: "investment-options-2026",
    },

];

const featuredBlog = {
    title: "Smart Tax Planning Strategies for Businesses",
    slug: "smart-tax-planning-strategies",
    image: "/mainblog.png",
};


export default function BlogListSection() {
    return (
        <section className="py-12 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[var(--color-primary)]">
                        Latest Insights & Articles
                    </h2>
                    <p className="mt-4 text-[var(--color-text-muted)]">
                        Stay updated with expert financial knowledge.
                    </p>
                </div>

                {/* FEATURED BLOG */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden mb-16"
                >
                    <img
                        src="/mainblog.png"
                        className="h-full w-full object-cover"
                    />

                    <div className="p-10 flex flex-col justify-center">
                        <span className="text-sm bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-4 py-1 rounded-full w-fit">
                            Featured Article
                        </span>

                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mt-4">
                            {featuredBlog.title}
                        </h3>


                        <p className="mt-4 text-[var(--color-text-muted)]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem eaque at perferendis magni excepturi iste.
                        </p>

                        {/* <button className="mt-6 w-fit px-6 py-3 bg-[var(--color-primary)] text-white rounded-full">
                            Read Article →
                        </button> */}
                        <Link href={`/blog/${featuredBlog.slug}`}>
                            <button className="mt-6 w-fit px-6 py-3 bg-[var(--color-primary)] text-white rounded-full">
                                Read Article →
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* BLOG GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                className="h-44 w-full object-cover"
                            />

                            <div className="p-6">
                                <span className="text-xs bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-3 py-1 rounded-full">
                                    {blog.category}
                                </span>

                                <h4 className="font-semibold text-[var(--color-primary)] mt-3">
                                    {blog.title}
                                </h4>

                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="mt-4 inline-block text-[var(--color-primary)] font-medium"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}